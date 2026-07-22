import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, X, Volume2, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Modality, LiveServerMessage } from "@google/genai";
import { getApiUrl } from '../lib/api';

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [assistantTranscription, setAssistantTranscription] = useState('');
  
  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  // Ref to persist and reuse a single AudioContext for playback to prevent memory leaks,
  // high garbage collection overhead, and browser-enforced resource limit errors.
  const playbackAudioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    return () => {
      stopMic();
      stopAudio();
    };
  }, []);

  const startSession = async () => {
    setIsConnecting(true);
    try {
      const tokenRes = await fetch(getApiUrl('/api/voice-token'), { method: 'POST' });
      if (!tokenRes.ok) throw new Error('Failed to get voice token');
      const { token } = await tokenRes.json();

      const ai = new GoogleGenAI({ apiKey: token });
      const session = await ai.live.connect({
        model: "gemini-2.5-flash-native-audio-preview-09-2025",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction: "You are a supportive, empathetic voice assistant for PANS Victoria. You help parents navigate the child protection system. Speak warmly and clearly. Remind them you don't provide legal advice if relevant.",
          inputAudioTranscription: {},
          outputAudioTranscription: {},
        },
        callbacks: {
          onopen: () => {
            setIsConnected(true);
            setIsConnecting(false);
            startMic();
          },
          onmessage: async (message: LiveServerMessage) => {
            if (message.serverContent?.modelTurn?.parts[0]?.inlineData?.data) {
              playAudio(message.serverContent.modelTurn.parts[0].inlineData.data);
            }
            if (message.serverContent?.interrupted) {
              stopAudio();
            }
            if (message.serverContent?.modelTurn?.parts[0]?.text) {
              setAssistantTranscription(prev => prev + message.serverContent!.modelTurn!.parts[0].text);
            }
          },
          onclose: () => {
            setIsConnected(false);
            stopMic();
          },
          onerror: (err) => {
            console.error("Live API Error:", err);
            setIsConnecting(false);
            setIsConnected(false);
          }
        }
      });
      sessionRef.current = session;
    } catch (error) {
      console.error("Failed to connect to Live API:", error);
      setIsConnecting(false);
    }
  };

  const startMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      audioContextRef.current = audioContext;
      
      const source = audioContext.createMediaStreamSource(stream);
      const processor = audioContext.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;

      processor.onaudioprocess = (e) => {
        if (!sessionRef.current) return;
        
        const inputData = e.inputBuffer.getChannelData(0);
        const pcmData = new Int16Array(inputData.length);
        for (let i = 0; i < inputData.length; i++) {
          pcmData[i] = Math.max(-1, Math.min(1, inputData[i])) * 0x7FFF;
        }
        
        const base64Data = btoa(String.fromCharCode(...new Uint8Array(pcmData.buffer)));
        sessionRef.current.sendRealtimeInput({
          media: { data: base64Data, mimeType: 'audio/pcm;rate=16000' }
        });
      };

      source.connect(processor);
      processor.connect(audioContext.destination);
      setIsListening(true);
    } catch (error) {
      console.error("Mic Error:", error);
    }
  };

  const stopMic = () => {
    streamRef.current?.getTracks().forEach(track => track.stop());
    processorRef.current?.disconnect();
    audioContextRef.current?.close();
    setIsListening(false);
  };

  // Optimized: Persist and reuse a single AudioContext for playback instead of creating
  // a new one on every audio chunk, preventing browser resource limits from being exceeded.
  const playAudio = (base64Data: string) => {
    if (!playbackAudioCtxRef.current) {
      playbackAudioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    const audioContext = playbackAudioCtxRef.current;
    if (audioContext.state === 'suspended') {
      audioContext.resume().catch(() => {});
    }
    const arrayBuffer = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0)).buffer;
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
  };

  // Clean up playback audio context resources
  const stopAudio = () => {
    if (playbackAudioCtxRef.current) {
      playbackAudioCtxRef.current.close().catch(() => {});
      playbackAudioCtxRef.current = null;
    }
  };

  const closeSession = () => {
    sessionRef.current?.close();
    stopMic();
    stopAudio();
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-72 bg-brand-primary text-white rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-6"
          >
            <div className="flex justify-between w-full items-center">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-bold">Voice Guide</span>
              </div>
              <button onClick={closeSession} className="hover:bg-white/20 p-1 rounded-full"><X size={20} /></button>
            </div>

            <div className="relative">
              <div className={`w-24 h-24 rounded-full bg-white/10 flex items-center justify-center ${isConnected ? 'animate-pulse' : ''}`}>
                {isConnected ? (
                  <div className="flex gap-1 items-end h-8">
                    <div className="w-1.5 bg-white animate-[bounce_1s_infinite_0ms]" style={{ height: '60%' }} />
                    <div className="w-1.5 bg-white animate-[bounce_1s_infinite_200ms]" style={{ height: '100%' }} />
                    <div className="w-1.5 bg-white animate-[bounce_1s_infinite_400ms]" style={{ height: '40%' }} />
                    <div className="w-1.5 bg-white animate-[bounce_1s_infinite_600ms]" style={{ height: '80%' }} />
                  </div>
                ) : (
                  <Mic size={40} className="text-white/40" />
                )}
              </div>
              {isConnected && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">
                  Live
                </div>
              )}
            </div>

            <div className="text-center space-y-2">
              <h3 className="font-bold text-lg">
                {isConnecting ? 'Connecting...' : isConnected ? 'Listening to you' : 'Voice Navigation'}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {isConnected 
                  ? "Speak naturally. I'm here to guide you through the process." 
                  : "Have a real-time conversation with our AI guide for immediate support."}
              </p>
            </div>

            {!isConnected && !isConnecting && (
              <button 
                onClick={startSession}
                className="w-full bg-white text-brand-primary py-3 rounded-xl font-bold hover:bg-stone-100 transition-all flex items-center justify-center gap-2"
              >
                <Mic size={18} /> Start Conversation
              </button>
            )}

            {isConnected && (
              <button 
                onClick={closeSession}
                className="w-full bg-white/20 text-white py-3 rounded-xl font-bold hover:bg-white/30 transition-all"
              >
                End Call
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-600 transition-all flex items-center gap-2 group"
          title="Voice Assistant"
        >
          <Mic size={24} />
          <span className="font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
            Voice Guide
          </span>
        </button>
      )}
    </div>
  );
};

export default VoiceAssistant;
