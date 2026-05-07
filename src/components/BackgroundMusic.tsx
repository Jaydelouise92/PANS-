import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, VolumeX, Volume2 } from 'lucide-react';

const AUDIO_URL = 'https://cdn1.suno.ai/a8b8a8c3-dc69-4b79-ab18-5b26b915b858.mp3';
const DEFAULT_VOLUME = 0.18;

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    const audio = new Audio(AUDIO_URL);
    audio.loop = true;
    audio.volume = DEFAULT_VOLUME;
    audio.preload = 'metadata';
    audio.addEventListener('canplay', () => setReady(true));
    audioRef.current = audio;

    const hideHint = setTimeout(() => setShowHint(false), 5000);

    return () => {
      audio.pause();
      audio.src = '';
      clearTimeout(hideHint);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
      setShowHint(false);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      <AnimatePresence>
        {showHint && !playing && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="bg-white border border-purple-200 shadow-lg rounded-2xl px-4 py-2.5 text-xs text-stone-600 flex items-center gap-2 max-w-[200px]"
          >
            <Music size={13} className="text-brand-primary shrink-0" />
            <span>Music by PANS — tap to play</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <motion.button
          onClick={toggle}
          whileTap={{ scale: 0.92 }}
          title={playing ? 'Pause background music' : 'Play background music'}
          className="w-11 h-11 rounded-full bg-white border border-purple-200 shadow-md flex items-center justify-center text-brand-primary hover:bg-brand-secondary transition-colors"
        >
          {playing ? (
            <motion.div className="flex items-end gap-[2px] h-4">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-[3px] bg-brand-primary rounded-full"
                  animate={{ height: ['6px', '14px', '6px'] }}
                  transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                />
              ))}
            </motion.div>
          ) : (
            <Music size={16} />
          )}
        </motion.button>

        <AnimatePresence>
          {playing && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setShowVolume((v) => !v)}
              className="w-8 h-8 rounded-full bg-white border border-purple-100 shadow-sm flex items-center justify-center text-stone-400 hover:text-brand-primary transition-colors"
              title="Adjust volume"
            >
              {volume === 0 ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showVolume && playing && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="bg-white border border-purple-200 shadow-md rounded-xl px-3 py-2 flex items-center gap-2"
          >
            <VolumeX size={12} className="text-stone-400" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolume}
              className="w-20 accent-brand-primary"
            />
            <Volume2 size={12} className="text-brand-primary" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
