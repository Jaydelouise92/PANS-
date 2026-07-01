import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { GoogleGenAI, ThinkingLevel, Modality, type Part, type GenerateContentParameters } from "@google/genai";

dotenv.config();

// ─────────────────────────────────────────────────────────
// ADMIN EMAIL CONFIGURATION
// To change the receiving email address, update the
// ADMIN_EMAIL secret in the Replit Secrets panel.
// If ADMIN_EMAIL is not set, messages go to the fallback below.
// ─────────────────────────────────────────────────────────
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "ourvoicemattersaus@gmail.com";

// ── Rate limiting ──────────────────────────────────────────
// Each mail-sending endpoint has its own independent bucket so that
// one endpoint cannot exhaust another's quota, and each limit is tuned
// to the expected legitimate usage pattern.

function makeRateLimiter(maxCount: number, windowMs: number) {
  const store = new Map<string, { count: number; resetAt: number }>();
  return function check(key: string): boolean {
    const now = Date.now();
    const entry = store.get(key);
    if (!entry || now > entry.resetAt) {
      store.set(key, { count: 1, resetAt: now + windowMs });
      return true;
    }
    if (entry.count >= maxCount) return false;
    entry.count++;
    return true;
  };
}

// General limiter for non-email, resource-intensive endpoints (voice, image)
const checkRateLimit = makeRateLimiter(5, 10 * 60 * 1000);
// Contact form: 5 submissions per 10 minutes per connection
const checkContactLimit = makeRateLimiter(5, 10 * 60 * 1000);
// Feedback: 10 per 10 minutes (lightweight, chat-adjacent action)
const checkFeedbackLimit = makeRateLimiter(10, 10 * 60 * 1000);
// Story: 3 per 10 minutes (longer form, lower expected volume)
const checkStoryLimit = makeRateLimiter(3, 10 * 60 * 1000);
// Parent feedback: 3 per 10 minutes (form-style, lower expected volume)
const checkParentFeedbackLimit = makeRateLimiter(3, 10 * 60 * 1000);
// AI Chat: 10 per 10 minutes
const checkChatLimit = makeRateLimiter(10, 10 * 60 * 1000);
// TTS: 10 per 10 minutes
const checkTtsLimit = makeRateLimiter(10, 10 * 60 * 1000);

// Use the actual TCP socket address as the rate-limit key.
// Use req.ip which respects 'trust proxy' (line 124) to get the real client IP
// when behind the production proxy, rather than the proxy's IP.
function getRateLimitKey(req: express.Request): string {
  return req.ip || req.socket.remoteAddress || "unknown";
}

const GMAIL_USER = "ourvoicemattersaus@gmail.com";

function getTransporter() {
  const pass = (process.env.EMAIL_PASS || "").replace(/\s/g, "");
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: GMAIL_USER, pass },
  });
}

function isEmailConfigured() {
  return !!(process.env.EMAIL_PASS);
}

function sanitize(str: string): string {
  return String(str || "").replace(/[<>&"']/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" }[c] || c)
  );
}

const CHAT_SYSTEM_INSTRUCTION = `You are the PANS (Parent Advocacy and Navigation Support) assistant — a calm, knowledgeable, and empathetic guide for parents in Victoria, Australia who are navigating the child protection system or Children's Court.

## WHO YOU ARE
You are part of PANS Victoria — an independent, unfunded advocacy and navigation service created by a parent with lived experience of the Victorian child protection system. PANS is not a government service, not a law firm, and does not provide legal advice or emergency support.

## LANGUAGE
- Always reply in clear Australian English, regardless of what language the user writes in.
- Use Australian spelling (organisation, recognise, behaviour, programme/program as appropriate) and Australian terminology (DFFH, Children's Court of Victoria, Victoria Legal Aid, Lifeline).
- If a parent writes in another language, gently reply in English and let them know they can ask Victoria Legal Aid for a free interpreter on 1300 792 387.

## YOUR TONE
- Calm, warm, plain language. Never legalistic or clinical.
- Non-judgmental. Assume parents are doing their best.
- Supportive but honest — don't minimise serious situations.
- Always acknowledge how overwhelming the system can feel before giving information.
- Use "you" language — speak directly to the parent.
- Keep answers clear and structured. Use bullet points for steps or lists.
- Never lecture. Never moralize. Never suggest blame.

## WHAT YOU MUST ALWAYS DO
- Clearly state you do not provide legal advice and always refer to Victoria Legal Aid (1300 792 387) for legal questions.
- For any crisis or immediate danger: direct to 000 (emergency) or Lifeline 13 11 14.
- For legal advice specifically: Victoria Legal Aid 1300 792 387.
- Always offer to explain more if something is unclear.
- If you are not sure about something, say so — do not guess on legal or procedural facts.

## WHAT YOU MUST NEVER DO
- Never provide specific legal advice about a particular case.
- Never tell a parent what they should do in a legal sense.
- Never predict court outcomes.
- Never criticise Child Protection workers, DFFH, or the court system.
- Never use jargon without explaining it.

## DEEP KNOWLEDGE BASE — VICTORIAN CHILD PROTECTION SYSTEM

Primary legislation: Children, Youth and Families Act 2005 (Vic). DFFH (Department of Families, Fairness and Housing) delivers Child Protection. Central intake: 13 12 78. Victoria Legal Aid: 1300 792 387. Lifeline: 13 11 14.

Court order types: Interim Accommodation Order (IAO), Supervision Order, Care by Secretary Order, Long-Term Care Order, Permanent Care Order, Family Preservation Order. Hearing types: Mention, Directions, Founding, Dispositional, Contested.

Parents have the right to: know why CP is involved, be heard, have a support person, an interpreter, see documents, legal representation, participate in case planning, maintain contact with children in care, appeal decisions.

Respond helpfully, warmly, and in plain language. Always remind of relevant services. End with an offer to clarify further.`;

async function startServer() {
  const app = express();
  const PORT = 5000;

  app.set("trust proxy", 1);
  app.disable("x-powered-by");

  app.use(express.json({ limit: "128kb" }));

  // ── /api/chat ──────────────────────────────────────────────
  app.post("/api/chat", async (req, res) => {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: "AI chat is not configured. Please contact PANS directly via the contact form." });
    }
    if (!checkChatLimit(getRateLimitKey(req))) {
      return res.status(429).json({ error: "Too many requests. Please wait a few minutes and try again." });
    }
    const { messages, thinkingMode } = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages are required." });
    }
    // Security: Limit history length and individual message size to prevent resource exhaustion
    if (messages.length > 20) {
      return res.status(400).json({ error: "Conversation history too long." });
    }
    for (const m of messages) {
      if (typeof m?.text !== "string" || m.text.length > 5000) {
        return res.status(400).json({ error: "Message too long or invalid." });
      }
    }
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = thinkingMode ? "gemini-2.5-pro" : "gemini-2.5-flash";
      const config: any = { systemInstruction: CHAT_SYSTEM_INSTRUCTION };
      if (thinkingMode) {
        config.thinkingConfig = { thinkingLevel: ThinkingLevel.HIGH };
      }
      const contents = messages.map((m: { role: string; text: string }) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.text }],
      }));
      const response = await ai.models.generateContent({ model, contents, config });
      res.json({ text: response.text || "" });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Failed to generate response. Please try again." });
    }
  });

  // ── /api/tts ───────────────────────────────────────────────
  app.post("/api/tts", async (req, res) => {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: "TTS not configured." });
    }
    if (!checkTtsLimit(getRateLimitKey(req))) {
      return res.status(429).json({ error: "Too many requests. Please wait a few minutes and try again." });
    }
    const { text } = req.body;
    if (typeof text !== "string" || text.length === 0 || text.length > 1000) {
      return res.status(400).json({ error: "Invalid text input for TTS (max 1000 characters)." });
    }
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const ttsParams: GenerateContentParameters = {
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say clearly and supportively, in a calm Australian accent: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } },
        },
      };
      const response = await ai.models.generateContent(ttsParams);
      const ttsParts: Part[] = response.candidates?.[0]?.content?.parts ?? [];
      const base64Audio = ttsParts[0]?.inlineData?.data ?? null;
      res.json({ audio: base64Audio || null });
    } catch (error) {
      console.error("TTS error:", error);
      res.status(500).json({ error: "TTS failed" });
    }
  });

  // ── /api/voice-token ──────────────────────────────────────
  app.post("/api/voice-token", async (req, res) => {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: "Voice assistant is not configured." });
    }
    if (!checkRateLimit(getRateLimitKey(req))) {
      return res.status(429).json({ error: "Too many requests. Please wait a few minutes and try again." });
    }
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const expireTime = new Date(Date.now() + 60 * 1000).toISOString();
      const newSessionExpireTime = new Date(Date.now() + 10 * 60 * 1000).toISOString();
      const authToken = await ai.authTokens.create({
        config: {
          uses: 1,
          expireTime,
          newSessionExpireTime,
        },
      });
      res.json({ token: authToken.name });
    } catch (error) {
      console.error("Voice token error:", error);
      res.status(500).json({ error: "Failed to create voice session." });
    }
  });

  // ── /api/image ────────────────────────────────────────────
  const IMAGE_PROMPTS: Record<string, { prompt: string; aspectRatio: string }> = {
    hero: {
      prompt: "A beautiful, warm, and supportive close-up illustration of two hands linking or holding each other firmly. The style should be soft, hand-drawn or artistic, evoking a sense of connection, support, and guidance. Gentle, warm colors like lavender, soft gold, and cream.",
      aspectRatio: "4:5",
    },
    founder: {
      prompt: "A beautiful, artistic illustration of soft flowers or a gentle heart shape. The style should be elegant, warm, and supportive. Soft lighting, gentle colors like lavender and cream. No people, just the symbolic representation of care and growth.",
      aspectRatio: "1:1",
    },
  };

  app.post("/api/image", async (req, res) => {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: "Image generation not configured." });
    }
    if (!checkRateLimit(getRateLimitKey(req))) {
      return res.status(429).json({ error: "Too many requests. Please wait a few minutes and try again." });
    }
    const type = typeof req.body.type === "string" ? req.body.type : "";
    const imageSpec = IMAGE_PROMPTS[type];
    if (!imageSpec) {
      return res.status(400).json({ error: "Invalid image type." });
    }
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const params: GenerateContentParameters = {
        model: "gemini-2.5-flash-image",
        contents: { parts: [{ text: imageSpec.prompt }] },
        config: {
          imageConfig: { aspectRatio: imageSpec.aspectRatio },
        },
      };
      const response = await ai.models.generateContent(params);
      const parts: Part[] = response.candidates?.[0]?.content?.parts ?? [];
      const imagePart = parts.find((p) => p.inlineData != null);
      if (imagePart?.inlineData?.data) {
        return res.json({ image: `data:image/png;base64,${imagePart.inlineData.data}` });
      }
      res.status(500).json({ error: "No image generated." });
    } catch (error) {
      console.error("Image generation error:", error);
      res.status(500).json({ error: "Failed to generate image." });
    }
  });

  // ── /api/contact ──────────────────────────────────────────
  app.post("/api/contact", async (req, res) => {
    // Honeypot: bots fill hidden fields, humans don't
    if (req.body.website || req.body.phone_verify) {
      return res.json({ success: true }); // silently discard
    }

    if (!checkContactLimit(getRateLimitKey(req))) {
      return res.status(429).json({ error: "Too many submissions. Please wait a few minutes and try again." });
    }

    const { firstName, lastName, email, subject, supportType, message } = req.body;
    const name = `${firstName || ""} ${lastName || ""}`.trim();

    // Server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "A valid email address is required." });
    }
    if (message.length < 10) {
      return res.status(400).json({ error: "Message is too short." });
    }
    if (message.length > 5000) {
      return res.status(400).json({ error: "Message is too long (max 5000 characters)." });
    }

    if (!isEmailConfigured()) {
      console.log("Contact form submission (email not configured):", { name, email, subject });
      return res.status(500).json({
        error: "Email is not yet configured. Please add EMAIL_PASS to Secrets.",
      });
    }

    const safeSubject = sanitize(subject || supportType || "General enquiry");
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeMessage = sanitize(message).replace(/\n/g, "<br>");
    const safeType = sanitize(supportType || "Not specified");

    const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fff; color: #333;">
  <div style="border-top: 4px solid #7C6A96; padding-top: 24px; margin-bottom: 32px;">
    <h1 style="font-size: 22px; color: #7C6A96; margin: 0 0 4px;">New Contact Message — PANS Victoria</h1>
    <p style="font-size: 13px; color: #999; margin: 0;">${new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" })}</p>
  </div>

  <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #666; width: 130px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">${safeName}</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">Reply To</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}" style="color: #7C6A96;">${safeEmail}</a></td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">Subject</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safeSubject}</td></tr>
    <tr><td style="padding: 10px 0; font-size: 13px; color: #666;">Support Needed</td><td style="padding: 10px 0;">${safeType}</td></tr>
  </table>

  <div style="background: #F9F8FF; border-left: 4px solid #B5A1D1; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 32px;">
    <p style="font-size: 13px; color: #666; margin: 0 0 8px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
    <p style="margin: 0; line-height: 1.7;">${safeMessage}</p>
  </div>

  <p style="font-size: 12px; color: #aaa; border-top: 1px solid #eee; padding-top: 16px;">
    This message was submitted via the PANS Victoria contact form. Reply directly to this email to respond to ${safeName}.
  </p>
</body>
</html>`;

    try {
      const transporter = getTransporter();
      await transporter.sendMail({
        from: `"PANS Contact Form" <${GMAIL_USER}>`,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `[PANS Contact] ${subject || safeType} — from ${safeName}`,
        html: htmlBody,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || supportType}\nSupport needed: ${supportType}\n\nMessage:\n${message}`,
      });
      console.log(`Contact email sent successfully from ${safeEmail} — subject: ${safeSubject}`);
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending contact email:", error);
      res.status(500).json({ error: "Failed to send email. Please try again or email us directly." });
    }
  });

  // ── /api/feedback ─────────────────────────────────────────
  app.post("/api/feedback", async (req, res) => {
    if (!checkFeedbackLimit(getRateLimitKey(req))) {
      return res.status(429).json({ error: "Too many requests. Please wait a few minutes and try again." });
    }

    const { rating, message, context } = req.body;

    if (!rating || !["positive", "negative", "issue_report"].includes(rating)) {
      return res.status(400).json({ error: "Invalid feedback rating." });
    }
    if (message && typeof message === "string" && message.length > 2000) {
      return res.status(400).json({ error: "Feedback message is too long." });
    }

    if (!isEmailConfigured()) {
      console.log("Feedback received (email not configured):", rating);
      return res.json({ success: true });
    }

    const safeRating = sanitize(rating);
    const safeMessage = sanitize(typeof message === "string" ? message : "No comment");

    try {
      const transporter = getTransporter();
      await transporter.sendMail({
        from: `"PANS Feedback" <${GMAIL_USER}>`,
        to: ADMIN_EMAIL,
        subject: `[PANS Feedback] ${rating === "positive" ? "Positive" : rating === "negative" ? "Negative" : "Issue Report"} — AI assistant`,
        text: `Rating: ${safeRating}\nMessage: ${safeMessage}\n\nContext:\n${JSON.stringify(context, null, 2)}`,
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending feedback email:", error);
      res.status(500).json({ error: "Failed to send feedback" });
    }
  });

  // ── /api/story ────────────────────────────────────────────
  app.post("/api/story", async (req, res) => {
    if (!checkStoryLimit(getRateLimitKey(req))) {
      return res.status(429).json({ error: "Too many requests. Please wait a few minutes and try again." });
    }

    const { title, author, content, stage, situation, urgency } = req.body;

    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return res.status(400).json({ error: "Story title is required." });
    }
    if (!content || typeof content !== "string" || content.trim().length < 10) {
      return res.status(400).json({ error: "Story content is required and must be at least 10 characters." });
    }
    if (content.length > 10000) {
      return res.status(400).json({ error: "Story content is too long (max 10000 characters)." });
    }
    if (!stage || typeof stage !== "string") {
      return res.status(400).json({ error: "Stage is required." });
    }

    if (!isEmailConfigured()) {
      console.log("Story submission received (email not configured):", { title: sanitize(title), stage: sanitize(stage) });
      return res.json({ success: true });
    }

    const safeTitle = sanitize(title);
    const safeAuthor = sanitize(typeof author === "string" ? author : "Anonymous");
    const safeContent = sanitize(content);
    const safeStage = sanitize(stage);
    const safeSituation = sanitize(typeof situation === "string" ? situation : "");
    const safeUrgency = sanitize(typeof urgency === "string" ? urgency : "");

    try {
      const transporter = getTransporter();
      await transporter.sendMail({
        from: `"PANS Story Submission" <${GMAIL_USER}>`,
        to: ADMIN_EMAIL,
        subject: `[PANS Story] ${safeTitle} — ${safeStage}`,
        text: `Title: ${safeTitle}\nAuthor: ${safeAuthor}\nStage: ${safeStage}\nSituation: ${safeSituation}\nUrgency: ${safeUrgency}\n\nStory:\n${safeContent}`,
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending story email:", error);
      res.status(500).json({ error: "Failed to submit story" });
    }
  });

  // ── /api/parent-feedback ──────────────────────────────────
  // Public form for parents to share their experience of the PANS website / service.
  app.post("/api/parent-feedback", async (req, res) => {
    // Honeypot
    if (req.body.website || req.body.phone_verify) {
      return res.json({ success: true });
    }

    if (!checkParentFeedbackLimit(getRateLimitKey(req))) {
      return res.status(429).json({ error: "Too many submissions. Please wait a few minutes and try again." });
    }

    const { name, email, rating, helpful, message, consentToShare } = req.body;

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return res.status(400).json({ error: "Please share at least a sentence so we can learn from your experience." });
    }
    if (message.length > 5000) {
      return res.status(400).json({ error: "Feedback is too long (max 5000 characters)." });
    }
    if (rating !== undefined && rating !== "" && (typeof rating !== "string" || !["1", "2", "3", "4", "5"].includes(rating))) {
      return res.status(400).json({ error: "Invalid rating." });
    }
    if (helpful !== undefined && helpful !== "" && (typeof helpful !== "string" || !["Yes", "Somewhat", "Not really"].includes(helpful))) {
      return res.status(400).json({ error: "Invalid 'helpful' value." });
    }
    if (name !== undefined && (typeof name !== "string" || name.length > 100)) {
      return res.status(400).json({ error: "Name is too long (max 100 characters)." });
    }
    if (email && typeof email === "string" && email.length > 0) {
      if (email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "Please enter a valid email address, or leave it blank." });
      }
    }
    if (consentToShare !== undefined && typeof consentToShare !== "boolean") {
      return res.status(400).json({ error: "Invalid consent value." });
    }

    if (!isEmailConfigured()) {
      console.log("Parent feedback received (email not configured)");
      return res.json({ success: true });
    }

    const safeName = sanitize(typeof name === "string" && name.trim() ? name : "Anonymous parent");
    const safeEmail = sanitize(typeof email === "string" ? email : "Not provided");
    const safeRating = sanitize(typeof rating === "string" ? rating : "Not given");
    const safeHelpful = sanitize(typeof helpful === "string" ? helpful : "");
    const safeMessage = sanitize(message).replace(/\n/g, "<br>");
    const safeConsent = consentToShare === true ? "Yes — may be shared anonymously" : "No — keep private";

    const htmlBody = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fff; color: #333;">
  <div style="border-top: 4px solid #7C6A96; padding-top: 24px; margin-bottom: 32px;">
    <h1 style="font-size: 22px; color: #7C6A96; margin: 0 0 4px;">New Parent Feedback — PANS Victoria</h1>
    <p style="font-size: 13px; color: #999; margin: 0;">${new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" })}</p>
  </div>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #666; width: 160px;">From</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">${safeName}</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safeEmail}</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">Rating</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safeRating} / 5</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">Was it helpful?</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safeHelpful || "Not specified"}</td></tr>
    <tr><td style="padding: 10px 0; font-size: 13px; color: #666;">Consent to share</td><td style="padding: 10px 0;">${safeConsent}</td></tr>
  </table>
  <div style="background: #F9F8FF; border-left: 4px solid #B5A1D1; padding: 16px 20px; border-radius: 0 8px 8px 0;">
    <p style="font-size: 13px; color: #666; margin: 0 0 8px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em;">Their feedback</p>
    <p style="margin: 0; line-height: 1.7;">${safeMessage}</p>
  </div>
</body></html>`;

    try {
      const transporter = getTransporter();
      await transporter.sendMail({
        from: `"PANS Parent Feedback" <${GMAIL_USER}>`,
        to: ADMIN_EMAIL,
        replyTo: typeof email === "string" && email ? email : undefined,
        subject: `[PANS Feedback] From ${safeName} — rating ${safeRating}/5`,
        html: htmlBody,
        text: `From: ${safeName}\nEmail: ${safeEmail}\nRating: ${safeRating}/5\nHelpful: ${safeHelpful}\nConsent: ${safeConsent}\n\nFeedback:\n${message}`,
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending parent feedback email:", error);
      res.status(500).json({ error: "Failed to send feedback. Please try again or email us directly." });
    }
  });

  // ── Vite / static ─────────────────────────────────────────
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Admin email: ${ADMIN_EMAIL}`);
    console.log(`Email configured: ${isEmailConfigured()}`);
  });
}

startServer();
