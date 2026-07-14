import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Bot, Volume2, Brain, Zap, ThumbsUp, ThumbsDown, AlertCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getApiUrl } from '../lib/api';


/**
 * ⚡ Performance Optimization:
 * 1. Refactored message loop to use memoized <MessageItem />, reducing history re-renders from O(N) to O(1) per keystroke.
 * 2. Persisted AudioContext via useRef to prevent resource exhaustion and browser warnings (prevents creating O(N) contexts).
 * 3. Hoisted renderText to avoid recreation on every render cycle.
 */

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

// Render message text with basic markdown-like formatting - hoisted to avoid recreation
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
  feedbackStatus: 'positive' | 'negative' | null | undefined;
  onSpeak: (text: string) => void;
  onFeedback: (index: number, rating: 'positive' | 'negative') => void;
}) => {
  return (
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
              aria-label="Read message aloud"
              className="p-1 text-stone-400 hover:text-brand-primary transition-colors"
              title="Read aloud"
            >
              <Volume2 size={12} />
            </button>
            <button
              onClick={() => onFeedback(index, 'positive')}
              aria-label="Mark as helpful"
              className={`p-1 transition-colors ${feedbackStatus === 'positive' ? 'text-green-500' : 'text-stone-400 hover:text-green-500'}`}
              title="Helpful"
            >
              <ThumbsUp size={12} />
            </button>
            <button
              onClick={() => onFeedback(index, 'negative')}
              aria-label="Mark as not helpful"
              className={`p-1 transition-colors ${feedbackStatus === 'negative' ? 'text-red-500' : 'text-stone-400 hover:text-red-500'}`}
              title="Not helpful"
            >
              <ThumbsDown size={12} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

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
  const audioContextRef = useRef<AudioContext | null>(null);
  const messagesRef = useRef(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const speakText = React.useCallback(async (text: string) => {
    try {
      const res = await fetch(getApiUrl('/api/tts'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      const base64Audio = data.audio;
      if (base64Audio) {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        const audioContext = audioContextRef.current;
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
      const res = await fetch(getApiUrl('/api/chat'), {
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
    const msg = messagesRef.current[index];
    const history = messagesRef.current.slice(0, index + 1);
    try {
      await fetch(getApiUrl('/api/feedback'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating,
          context: {
            message: messagesRef.current[index].text,
            history: messagesRef.current.slice(0, index + 1)
          }
        }),
      });
    } catch {}
  }, []);

  const handleReport = async () => {
    if (!reportText.trim()) return;
    setIsReporting(true);
    try {
      await fetch(getApiUrl('/api/feedback'), {
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
                  aria-label={isThinkingMode ? 'Disable deep thinking mode' : 'Enable deep thinking mode'}
                  className={`p-1.5 rounded-lg transition-colors text-xs flex items-center gap-1 ${isThinkingMode ? 'bg-white text-brand-primary font-bold' : 'bg-white/20 text-white'}`}
                  title={isThinkingMode ? 'Deep thinking on — using Pro model' : 'Fast mode — click for deep analysis'}
                >
                  {isThinkingMode ? <Brain size={14} /> : <Zap size={14} />}
                </button>
                <button
                  onClick={() => setShowReportModal(true)}
                  aria-label="Report an issue with the assistant"
                  className="p-1.5 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                  title="Report an issue"
                >
                  <AlertCircle size={14} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat window"
                  className="p-1.5 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-stone-50"
              role="log"
              aria-live="polite"
            >
              {messages.map((m, i) => (
                <MessageItem
                  key={i}
                  message={m}
                  index={i}
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
                  aria-label="Message assistant"
                  className="flex-1 px-4 py-2.5 rounded-full border border-stone-200 outline-none focus:border-brand-primary text-sm transition-colors bg-stone-50"
                  placeholder="Ask about the system, orders, rights…"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="bg-brand-primary text-white p-2.5 rounded-full hover:bg-brand-primary/90 transition-all disabled:opacity-40 shrink-0"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
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
        aria-label={isOpen ? 'Close PANS Assistant' : 'Open PANS Assistant'}
        className="bg-brand-primary text-white px-5 py-3.5 rounded-full shadow-lg hover:bg-brand-primary/90 transition-all flex items-center gap-2 shadow-brand-primary/30"
        aria-expanded={isOpen}
      >
        <MessageCircle size={20} />
        <span className="font-bold text-sm hidden md:inline">Chat with PANS</span>
      </button>
    </div>
  );
};

export default ChatWidget;
