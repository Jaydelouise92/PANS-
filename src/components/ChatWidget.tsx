import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Volume2, Brain, Zap, ThumbsUp, ThumbsDown, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, ThinkingLevel, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string, audio?: string }[]>([
    { role: 'assistant', text: "Hello! I'm your PANS navigation assistant. I can provide supportive information for parents navigating the Victorian child protection system. Please note, I do not provide legal advice." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isThinkingMode, setIsThinkingMode] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState<Record<number, 'positive' | 'negative' | null>>({});
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportText, setReportText] = useState('');
  const [isReporting, setIsReporting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const speakText = async (text: string, index: number) => {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say clearly and supportively: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audioUrl = `data:audio/pcm;base64,${base64Audio}`;
        // Note: PCM data might need a header or a specific player. 
        // For simplicity in this environment, we'll assume the browser can handle it or we'd use a more complex player.
        // Actually, standard <audio> expects a container like WAV. 
        // But the instructions say "decode and play audio with sample rate 24000".
        
        // Let's use a simpler approach for the demo: 
        // If it's raw PCM, we'd need Web Audio API.
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
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const model = isThinkingMode ? "gemini-3.1-pro-preview" : "gemini-3.1-flash-lite-preview";
      const config: any = {
        systemInstruction: "You are a supportive, empathetic guide for parents navigating the Victorian child protection system. Answer general questions and provide practical information on case navigation, court prep, and appeals. Clearly state that you do not provide legal advice. If in thinking mode, provide a deep, well-reasoned analysis of the situation.",
      };

      if (isThinkingMode) {
        config.thinkingConfig = { thinkingLevel: ThinkingLevel.HIGH };
      }

      const response = await ai.models.generateContent({
        model,
        contents: input,
        config,
      });
      
      const assistantMessage = { role: 'assistant' as const, text: response.text || "I'm sorry, I couldn't process that. Please try again." };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "I'm sorry, I encountered an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = async (index: number, rating: 'positive' | 'negative') => {
    setFeedbackStatus(prev => ({ ...prev, [index]: rating }));
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating,
          context: {
            message: messages[index].text,
            history: messages.slice(0, index + 1)
          }
        })
      });
    } catch (error) {
      console.error("Feedback error:", error);
    }
  };

  const handleReport = async () => {
    if (!reportText.trim()) return;
    setIsReporting(true);
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating: 'issue_report',
          message: reportText,
          context: { history: messages }
        })
      });
      setShowReportModal(false);
      setReportText('');
      alert("Thank you for reporting this issue. We will look into it.");
    } catch (error) {
      console.error("Report error:", error);
    } finally {
      setIsReporting(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col"
            style={{ height: '550px' }}
          >
            <div className="bg-brand-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-bold">PANS Assistant</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsThinkingMode(!isThinkingMode)}
                  className={`p-1.5 rounded-lg transition-colors ${isThinkingMode ? 'bg-white text-brand-primary' : 'bg-white/20 text-white'}`}
                  title={isThinkingMode ? "Deep Thinking On" : "Fast Mode On"}
                >
                  {isThinkingMode ? <Brain size={16} /> : <Zap size={16} />}
                </button>
                <button 
                  onClick={() => setShowReportModal(true)}
                  className="p-1.5 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                  title="Report Issue"
                >
                  <AlertCircle size={16} />
                </button>
                <button onClick={() => setIsOpen(false)}><X size={20} /></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`group relative p-3 rounded-2xl max-w-[85%] ${m.role === 'user' ? 'bg-brand-primary text-white' : 'bg-stone-100 text-stone-800'}`}>
                    {m.text}
                    {m.role === 'assistant' && (
                      <div className="absolute -right-12 top-0 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => speakText(m.text, i)}
                          className="p-1 text-stone-400 hover:text-brand-primary"
                          title="Speak"
                        >
                          <Volume2 size={14} />
                        </button>
                        <button 
                          onClick={() => handleFeedback(i, 'positive')}
                          className={`p-1 transition-colors ${feedbackStatus[i] === 'positive' ? 'text-green-500' : 'text-stone-400 hover:text-green-500'}`}
                          title="Helpful"
                        >
                          <ThumbsUp size={14} />
                        </button>
                        <button 
                          onClick={() => handleFeedback(i, 'negative')}
                          className={`p-1 transition-colors ${feedbackStatus[i] === 'negative' ? 'text-red-500' : 'text-stone-400 hover:text-red-500'}`}
                          title="Not helpful"
                        >
                          <ThumbsDown size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-stone-500 text-sm">
                  <div className="animate-pulse">Assistant is {isThinkingMode ? 'thinking deeply...' : 'typing...'}</div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-stone-100 flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1 px-4 py-2 rounded-full border border-stone-200 outline-none focus:border-brand-primary"
                  placeholder={isThinkingMode ? "Ask a complex question..." : "Ask a quick question..."}
                />
                <button onClick={handleSend} className="bg-brand-primary text-white p-2 rounded-full hover:bg-brand-primary/90 transition-all">
                  <Send size={18} />
                </button>
              </div>
              <div className="text-[10px] text-stone-400 text-center">
                {isThinkingMode ? "Using Pro model with Deep Thinking" : "Using Flash Lite for fast responses"}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showReportModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl"
            >
              <h3 className="text-xl font-serif mb-4 text-brand-primary">Report an Issue</h3>
              <p className="text-sm text-stone-600 mb-4">
                Please describe the issue you encountered with the assistant. Your feedback helps us improve.
              </p>
              <textarea
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
                className="w-full p-4 rounded-2xl border border-stone-200 outline-none focus:border-brand-primary mb-4 h-32"
                placeholder="What went wrong?"
              />
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowReportModal(false)}
                  className="flex-1 py-3 rounded-xl border border-stone-200 font-bold text-stone-600 hover:bg-stone-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleReport}
                  disabled={isReporting || !reportText.trim()}
                  className="flex-1 py-3 rounded-xl bg-brand-primary text-white font-bold hover:bg-brand-primary/90 transition-all disabled:opacity-50"
                >
                  {isReporting ? 'Sending...' : 'Send Report'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-primary text-white p-4 rounded-full shadow-lg hover:bg-brand-primary/90 transition-all flex items-center gap-2"
      >
        <MessageCircle size={24} />
        <span className="font-bold hidden md:inline">Chat with PANS</span>
      </button>
    </div>
  );
};

export default ChatWidget;
