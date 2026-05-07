import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// ─────────────────────────────────────────────────────────
// ADMIN EMAIL CONFIGURATION
// To change the receiving email address, update the
// ADMIN_EMAIL secret in the Replit Secrets panel.
// If ADMIN_EMAIL is not set, messages go to the fallback below.
// ─────────────────────────────────────────────────────────
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "ourvoicemattersaus@gmail.com";

// Simple in-memory rate limiter (max 5 submissions per IP per 10 minutes)
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

function getTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

function isEmailConfigured() {
  return !!(process.env.EMAIL_USER && process.env.EMAIL_PASS);
}

function sanitize(str: string): string {
  return String(str || "").replace(/[<>&"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c] || c)
  );
}

async function startServer() {
  const app = express();
  const PORT = 5000;

  app.use(express.json({ limit: "16kb" }));

  // ── /api/contact ──────────────────────────────────────────
  app.post("/api/contact", async (req, res) => {
    // Honeypot: bots fill hidden fields, humans don't
    if (req.body.website || req.body.phone_verify) {
      return res.json({ success: true }); // silently discard
    }

    const ip = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "unknown";
    if (!checkRateLimit(ip)) {
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
        error: "Email is not yet configured. Please add EMAIL_USER and EMAIL_PASS to Secrets.",
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
        from: `"PANS Contact Form" <${process.env.EMAIL_USER}>`,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `[PANS Contact] ${subject || safeType} — from ${safeName}`,
        html: htmlBody,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || supportType}\nSupport needed: ${supportType}\n\nMessage:\n${message}`,
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending contact email:", error);
      res.status(500).json({ error: "Failed to send email. Please try again or email us directly." });
    }
  });

  // ── /api/feedback ─────────────────────────────────────────
  app.post("/api/feedback", async (req, res) => {
    if (!isEmailConfigured()) {
      console.log("Feedback received (email not configured):", req.body.rating);
      return res.json({ success: true });
    }

    const { rating, message, context } = req.body;
    try {
      const transporter = getTransporter();
      await transporter.sendMail({
        from: `"PANS Feedback" <${process.env.EMAIL_USER}>`,
        to: ADMIN_EMAIL,
        subject: `[PANS Feedback] ${rating === "positive" ? "👍 Positive" : "👎 Negative"} — AI assistant`,
        text: `Rating: ${rating}\nMessage: ${message || "No comment"}\n\nContext:\n${JSON.stringify(context, null, 2)}`,
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending feedback email:", error);
      res.status(500).json({ error: "Failed to send feedback" });
    }
  });

  // ── /api/story ────────────────────────────────────────────
  app.post("/api/story", async (req, res) => {
    const { title, author, content, stage, situation, urgency } = req.body;

    if (!isEmailConfigured()) {
      console.log("Story submission received (email not configured):", { title, author, stage });
      return res.json({ success: true });
    }

    try {
      const transporter = getTransporter();
      await transporter.sendMail({
        from: `"PANS Story Submission" <${process.env.EMAIL_USER}>`,
        to: ADMIN_EMAIL,
        subject: `[PANS Story] ${title} — ${stage}`,
        text: `Title: ${title}\nAuthor: ${author || "Anonymous"}\nStage: ${stage}\nSituation: ${situation}\nUrgency: ${urgency}\n\nStory:\n${content}`,
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending story email:", error);
      res.status(500).json({ error: "Failed to submit story" });
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
