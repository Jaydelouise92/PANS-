import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Volume2, Brain, Zap, ThumbsUp, ThumbsDown, AlertCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ─────────────────────────────────────────────────────────────────────────────
// SYSTEM INSTRUCTION — deep knowledge of Victorian child protection + PANS
// ─────────────────────────────────────────────────────────────────────────────
const SYSTEM_INSTRUCTION = `You are the PANS (Parent Advocacy and Navigation Support) assistant — a calm, knowledgeable, and empathetic guide for parents in Victoria, Australia who are navigating the child protection system or Children's Court.

## WHO YOU ARE
You are part of PANS Victoria — an independent, unfunded advocacy and navigation service created by a parent with lived experience of the Victorian child protection system. PANS is not a government service, not a law firm, and does not provide legal advice or emergency support.

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
- For questions about specific case decisions: acknowledge you cannot comment on specific decisions and refer to their lawyer or VLA.
- Always offer to explain more if something is unclear.
- If you are not sure about something, say so — do not guess on legal or procedural facts.

## WHAT YOU MUST NEVER DO
- Never provide specific legal advice about a particular case.
- Never tell a parent what they should do in a legal sense (e.g. "you should sign" or "you should refuse").
- Never predict court outcomes.
- Never criticise Child Protection workers, DFFH, or the court system.
- Never use jargon without explaining it.
- Never deny that the system is hard or scary — acknowledge their reality.

---

## DEEP KNOWLEDGE BASE — VICTORIAN CHILD PROTECTION SYSTEM

### The Legal Framework
- Primary legislation: Children, Youth and Families Act 2005 (Vic) — commonly called "the Act" or "CYFA"
- The Act establishes that the best interests of the child are paramount.
- It requires that child protection consider the cultural, ethnic, and religious identity of the child.
- Family preservation and reunification are explicit goals of the Act where it is safe to do so.
- The principle of "least intrusive intervention" means Child Protection should use the minimum action necessary to protect a child.

### DFFH — Department of Families, Fairness and Housing
- Child Protection in Victoria is delivered by DFFH (Department of Families, Fairness and Housing), formerly DHHS.
- DFFH has statutory powers to investigate reports of child abuse or neglect.
- The central intake number is 13 12 78.
- Every family is allocated a Child Protection Practitioner (CPP) — their direct contact person.
- Parents have the right to know the name and contact details of their CPP.

### How a Case Begins
1. A report is made to Child Protection (by a mandated reporter, another professional, family member, or member of the public).
2. Child Protection assesses whether to investigate. Not all reports result in investigation.
3. If investigated: a Child Protection worker contacts the family, usually by visiting the home.
4. An assessment is completed — this is called "Child Protection Investigation."
5. Outcomes can be: no further action, referral to services, protective intervention order, or court application.

### The Investigation Stage
- Parents have the right to know why Child Protection is involved.
- Parents have the right to be heard — their perspective must be considered.
- Parents can have a support person at any meeting or interview.
- Parents can have an interpreter for free if English is not their first language.
- Parents do NOT have to let workers into their home without a court order, but refusing entry may escalate the situation — parents should get legal advice before refusing.
- Workers can enter with police if they believe a child is in immediate danger.
- Parents have the right to see documents related to their case — including reports and applications.

### Case Planning
- If concerns are substantiated, Child Protection develops a Case Plan.
- The Case Plan outlines: the concerns identified, what the parent needs to do, what services will be provided, and the goals for the child.
- Parents have the right to be involved in developing the Case Plan and must be given a copy.
- A Safety Plan may be developed first — this is less formal but still important.
- Family Group Conferences (FGCs) may be convened — these involve the extended family/support network to develop a safety plan together.
- Common requirements in case plans: parenting programs, counselling, drug/alcohol assessment, domestic violence programs, engagement with health services.

### Types of Child Protection Intervention (non-court)
- Voluntary engagement: parents agree to work with services without court orders.
- Protective intervention orders: these can include supervision conditions but do not involve the Children's Court. They are administrative.

### The Children's Court of Victoria
- Child protection matters in Victoria go to the Children's Court, which has specialist magistrates.
- Hearings are generally closed to the public — only parties and their lawyers can attend.
- The court applies the principles of the Children, Youth and Families Act 2005.
- Parties in proceedings typically include: DFFH (the applicant/Secretary), the child's parents (respondents), and sometimes an Independent Children's Lawyer (ICL).

### Types of Court Orders
1. **Interim Accommodation Order (IAO)**: Urgent temporary order placing the child in alternative accommodation. Usually sought when there is immediate risk. Time-limited but can be extended. Hearings often happen within days of removal.
2. **Supervision Order**: Child remains at home (or with a carer) but Child Protection supervises and parents must comply with conditions. Usually for 12 months, can be extended.
3. **Care by Secretary Order**: Child is placed in the care of the DFFH Secretary — typically in foster or kinship care. Can be for 12 months or longer.
4. **Long-Term Care Order**: Ongoing care order for children unlikely to be reunified with family in the near future.
5. **Permanent Care Order**: Places a child permanently with a carer (similar to adoption but the child retains their legal identity).
6. **Family Preservation Order**: Allows Child Protection to provide support services to the family to prevent removal.

### Types of Hearings
- **Mention**: Brief hearing to check progress, confirm readiness, or make procedural orders. Common for case management.
- **Directions Hearing**: Magistrate gives directions about how the case should proceed, what evidence is needed, and timelines.
- **Founding Hearing**: Determines whether the grounds for making an order have been established ("founded"). Can be contested or uncontested.
- **Dispositional Hearing**: Decides what order (if any) should be made after grounds are found.
- **Contested Hearing**: A full hearing where evidence is called and tested — the most serious and complex type.

### Parent Rights in Court
- Right to be present at all hearings concerning your children (unless the court orders otherwise).
- Right to legal representation — contact Victoria Legal Aid immediately.
- Right to see all evidence and documents being relied upon.
- Right to have a lawyer speak on your behalf.
- Right to appeal decisions — strict time limits apply, so act quickly.
- Right to an interpreter — free of charge, must be arranged through the court.

### Independent Children's Lawyer (ICL)
- An ICL may be appointed by the court to represent the child's interests separately from both the parents and DFFH.
- The ICL is NOT the child's personal lawyer — they represent the child's best interests as determined independently.
- Parents should understand that the ICL's view may not always align with theirs.

### Reunification
- Reunification is an explicit goal of the system where it is safe.
- Parents can request reunification at any time and should communicate this clearly to their CPP and lawyer.
- Child Protection must show what steps it has taken to support reunification.
- Reunification typically requires: completing case plan requirements, demonstrating changed circumstances, stable housing, and sometimes a graduated contact and transition plan.

### Contact with Children in Care
- If a child is in out-of-home care, parents generally have a right to contact (visits, calls, messages) unless a court order restricts it.
- Contact arrangements are usually set out in the case plan.
- If contact is being restricted, parents should ask for the reason in writing and seek legal advice.
- Supervised contact may be required initially — this does not mean contact will always be supervised.

### Out-of-Home Care — Foster and Kinship Care
- **Foster care**: Child is placed with trained foster carers who are strangers to the child.
- **Kinship care**: Child is placed with a relative or someone already known to the child — this is preferred by the system over stranger foster care.
- Parents can suggest specific family members for kinship care — these people need to be assessed by DFFH.
- If parents disagree with placement, they should raise this with their lawyer.

### Making a Complaint
- If parents are unhappy with how Child Protection is handling their case, they can make a complaint.
- First step: raise it directly with the CPP's supervisor.
- Next step: the DFFH regional director.
- External complaint: the Commission for Children and Young People (CCYP) or the Ombudsman Victoria.
- Parents should document everything — dates, names, and what was discussed.

### Key Services
- **Victoria Legal Aid (VLA)**: 1300 792 387 — free legal advice and representation for eligible families in child protection matters.
- **Lifeline**: 13 11 14 — 24/7 crisis support.
- **Parentline**: 13 22 89 — support for parents and carers, Mon–Fri.
- **DFFH Child Protection**: 13 12 78 — central intake and case contacts.
- **Children's Court of Victoria**: Located across Melbourne and regional Victoria.
- **Family Relationship Advice Line**: 1800 050 321.
- **Beyond Blue**: 1300 22 4636 — mental health support.
- **VACCA**: Victorian Aboriginal Child Care Agency — support for Aboriginal and Torres Strait Islander families.
- **Djirra**: Support for Aboriginal women experiencing family violence.

### Common Questions Parents Have
**"Can I refuse to let workers into my home?"**
You are not legally required to let Child Protection workers into your home without a court order. However, refusing can escalate the situation and may be used against you. Always get legal advice before refusing entry.

**"Do I have to agree to a safety plan?"**
A safety plan is not a court order. You are not legally required to sign it. However, refusing may lead Child Protection to seek a court order instead. You should get legal advice and can ask to have a support person with you before signing anything.

**"What happens if my child is removed?"**
If removed under an urgent order, you should receive written documentation. An Interim Accommodation Order hearing will usually be listed within days. Contact Victoria Legal Aid immediately — do not wait. You have the right to legal representation at that hearing.

**"Will I get my child back?"**
PANS cannot predict outcomes. Reunification is a goal of the system. It typically depends on what concerns were raised and what steps are taken to address them. Many families do achieve reunification. Your lawyer is the best person to advise on your specific situation.

**"I don't understand the documents I've been given."**
PANS can help explain documents in plain language. You also have the right to ask your Child Protection worker to explain any document before you sign it. Never sign something you do not understand.

**"I think Child Protection is being unfair."**
It is possible to challenge decisions and make complaints. Document everything. Speak to a lawyer as soon as possible. There are internal and external complaint pathways available.

---

## ABOUT PANS VICTORIA
- Independent advocacy and navigation service — not a government agency.
- Founded by a parent with lived experience of the child protection system in Victoria.
- Currently unfunded and volunteer-run.
- Working With Children Check: valid (Victoria).
- Services: system navigation, meeting preparation, document explanation, rights information, referrals.
- Cannot provide: legal advice, legal representation, emergency support, case-specific legal opinions.
- Contact: via the website contact form at /contact.
- All support is confidential.
- Response times: aim for 24–48 hours.

---

Respond to the parent's question helpfully, warmly, and in plain language. Always remind them of relevant services where appropriate. End your response with a gentle offer to clarify or help further if needed.`;

// Suggested starter questions
const SUGGESTIONS = [
  "What happens at the first court hearing?",
  "Do I have to let workers into my home?",
  "What is a case plan and do I have to agree?",
  "How do I get my child back after removal?",
  "What are my rights in a meeting?",
  "What does a Supervision Order mean?",
];

type Message = { role: 'user' | 'assistant'; text: string };

// ⚡ Bolt: Hoist utility outside of component and memoize sub-components to prevent unnecessary re-renders.
const renderText = (text: string) => {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return <p key={i} className="font-bold mt-2">{line.slice(2, -2)}</p>;
    }
    if (line.startsWith('- ') || line.startsWith('• ')) {
      return (
        <div key={i} className="flex gap-2 mt-1">
          <span className="shrink-0 mt-0.5 text-brand-primary">·</span>
          <span>{line.slice(2)}</span>
        </div>
      );
    }
    if (line.trim() === '') return <div key={i} className="h-2" />;
    // Bold inline **text**
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={i} className="mt-0.5">
        {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
      </p>
    );
  });
};

const MessageItem = React.memo(({
  message,
  index,
  feedbackStatus,
  onSpeak,
  onFeedback
}: {
  message: Message;
  index: number;
  feedbackStatus?: 'positive' | 'negative' | null;
  onSpeak: (text: string) => void;
  onFeedback: (index: number, rating: 'positive' | 'negative') => void;
}) => (
  <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
    {message.role === 'assistant' && (
      <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center shrink-0 mt-1">
        <Bot size={13} className="text-white" />
      </div>
    )}
    <div className={`group relative max-w-[85%] ${message.role === 'user' ? '' : 'flex-1'}`}>
      <div
        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          message.role === 'user'
            ? 'bg-brand-primary text-white rounded-br-sm'
            : 'bg-white text-stone-800 border border-stone-200 rounded-bl-sm shadow-sm'
        }`}
      >
        {message.role === 'assistant' ? renderText(message.text) : message.text}
      </div>
      {message.role === 'assistant' && (
        <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onSpeak(message.text)}
            className="p-1 text-stone-400 hover:text-brand-primary transition-colors"
            title="Read aloud"
            aria-label="Read aloud"
          >
            <Volume2 size={12} />
          </button>
          <button
            onClick={() => onFeedback(index, 'positive')}
            className={`p-1 transition-colors ${feedbackStatus === 'positive' ? 'text-green-500' : 'text-stone-400 hover:text-green-500'}`}
            title="Helpful"
            aria-label="Mark as helpful"
            aria-pressed={feedbackStatus === 'positive'}
          >
            <ThumbsUp size={12} />
          </button>
          <button
            onClick={() => onFeedback(index, 'negative')}
            className={`p-1 transition-colors ${feedbackStatus === 'negative' ? 'text-red-500' : 'text-stone-400 hover:text-red-500'}`}
            title="Not helpful"
            aria-label="Mark as not helpful"
            aria-pressed={feedbackStatus === 'negative'}
          >
            <ThumbsDown size={12} />
          </button>
        </div>
      )}
    </div>
  </div>
));

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: "Hello. I'm the PANS assistant — here to help you understand the Child Protection system in Victoria.\n\nI can explain processes, documents, orders, and your rights in plain language. I don't provide legal advice, but I can help you know what questions to ask.\n\nWhat would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isThinkingMode, setIsThinkingMode] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState<Record<number, 'positive' | 'negative' | null>>({});
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportText, setReportText] = useState('');
  const [isReporting, setIsReporting] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const speakText = React.useCallback(async (text: string) => {
    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      const base64Audio = data.audio;
      if (base64Audio) {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const arrayBuffer = Uint8Array.from(atob(base64Audio), c => c.charCodeAt(0)).buffer;
        const float32Array = new Float32Array(arrayBuffer.byteLength / 2);
        const view = new DataView(arrayBuffer);
        for (let i = 0; i < float32Array.length; i++) {
          float32Array[i] = view.getInt16(i * 2, true) / 32768;
        }
        const audioBuffer = audioContext.createBuffer(1, float32Array.length, 24000);
        audioBuffer.getChannelData(0).set(float32Array);
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();
      }
    } catch (error) {
      console.error("TTS Error:", error);
    }
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    setShowSuggestions(false);

    const userMessage: Message = { role: 'user', text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages, thinkingMode: isThinkingMode }),
      });
      const data = await res.json();
      const reply = data.text || data.error || "I'm sorry, I wasn't able to process that. Please try again or contact PANS directly via the contact form.";
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: "I'm sorry — something went wrong on my end. Please try again, or reach out to PANS directly via the contact form." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = React.useCallback(async (index: number, rating: 'positive' | 'negative') => {
    setFeedbackStatus((prev) => ({ ...prev, [index]: rating }));
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, context: { message: messages[index].text, history: messages.slice(0, index + 1) } }),
      });
    } catch {}
  }, [messages]);

  const handleReport = async () => {
    if (!reportText.trim()) return;
    setIsReporting(true);
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating: 'issue_report', message: reportText, context: { history: messages } }),
      });
      setShowReportModal(false);
      setReportText('');
    } catch {} finally {
      setIsReporting(false);
    }
  };

  return (
    <div className="no-print fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="mb-4 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col"
            style={{ height: '580px' }}
          >
            {/* Header */}
            <div className="bg-brand-primary px-4 py-3 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <Bot size={19} />
                <div>
                  <p className="font-bold text-sm leading-none">PANS Assistant</p>
                  <p className="text-white/60 text-[10px] mt-0.5">General information only — not legal advice</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsThinkingMode(!isThinkingMode)}
                  className={`p-1.5 rounded-lg transition-colors text-xs flex items-center gap-1 ${isThinkingMode ? 'bg-white text-brand-primary font-bold' : 'bg-white/20 text-white'}`}
                  title={isThinkingMode ? 'Deep thinking on — using Pro model' : 'Fast mode — click for deep analysis'}
                  aria-label={isThinkingMode ? 'Thinking mode enabled' : 'Thinking mode disabled'}
                  aria-pressed={isThinkingMode}
                >
                  {isThinkingMode ? <Brain size={14} /> : <Zap size={14} />}
                </button>
                <button
                  onClick={() => setShowReportModal(true)}
                  className="p-1.5 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                  title="Report an issue"
                  aria-label="Report an issue"
                >
                  <AlertCircle size={14} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                  aria-label="Close chat"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-stone-50" role="log" aria-live="polite">
              {messages.map((m, i) => (
                <MessageItem
                  key={i}
                  index={i}
                  message={m}
                  feedbackStatus={feedbackStatus[i]}
                  onSpeak={speakText}
                  onFeedback={handleFeedback}
                />
              ))}

              {isLoading && (
                <div className="flex gap-2 items-center">
                  <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center shrink-0">
                    <Bot size={13} className="text-white" />
                  </div>
                  <div className="bg-white border border-stone-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Suggested questions — shown only at start */}
              {showSuggestions && messages.length === 1 && (
                <div className="space-y-1.5 pt-1">
                  <p className="text-[10px] text-stone-400 uppercase tracking-wider font-bold px-1">Common questions</p>
                  {SUGGESTIONS.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(s)}
                      className="w-full text-left text-xs bg-white border border-purple-100 hover:border-brand-primary hover:bg-brand-secondary px-3 py-2 rounded-xl text-stone-700 transition-all flex items-center justify-between gap-2 group"
                    >
                      <span>{s}</span>
                      <ChevronRight size={12} className="text-stone-300 group-hover:text-brand-primary shrink-0 transition-colors" />
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-stone-100 bg-white shrink-0">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(input)}
                  className="flex-1 px-4 py-2.5 rounded-full border border-stone-200 outline-none focus:border-brand-primary text-sm transition-colors bg-stone-50"
                  placeholder="Ask about the system, orders, rights…"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isLoading}
                  className="bg-brand-primary text-white p-2.5 rounded-full hover:bg-brand-primary/90 transition-all disabled:opacity-40 shrink-0"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[10px] text-stone-400 text-center mt-2">
                {isThinkingMode ? '⚡ Deep analysis mode — slower but more thorough' : 'General information only · Not legal advice · VLA: 1300 792 387'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Report modal */}
      <AnimatePresence>
        {showReportModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-6">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
              <h3 className="text-xl font-serif mb-2 text-brand-primary">Report an Issue</h3>
              <p className="text-sm text-stone-600 mb-4">Describe what went wrong and we'll look into it.</p>
              <textarea
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
                className="w-full p-4 rounded-2xl border border-stone-200 outline-none focus:border-brand-primary mb-4 h-28 text-sm resize-none"
                placeholder="e.g. The assistant gave incorrect information about…"
              />
              <div className="flex gap-3">
                <button onClick={() => setShowReportModal(false)} className="flex-1 py-3 rounded-xl border border-stone-200 font-bold text-stone-600 hover:bg-stone-50 transition-colors text-sm">
                  Cancel
                </button>
                <button
                  onClick={handleReport}
                  disabled={isReporting || !reportText.trim()}
                  className="flex-1 py-3 rounded-xl bg-brand-primary text-white font-bold hover:bg-brand-primary/90 transition-all disabled:opacity-50 text-sm"
                >
                  {isReporting ? 'Sending…' : 'Send Report'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-primary text-white px-5 py-3.5 rounded-full shadow-lg hover:bg-brand-primary/90 transition-all flex items-center gap-2 shadow-brand-primary/30"
      >
        <MessageCircle size={20} />
        <span className="font-bold text-sm hidden md:inline">Chat with PANS</span>
      </button>
    </div>
  );
};

export default ChatWidget;
