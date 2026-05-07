import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.1 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="text-center relative z-10 flex flex-col items-center">
        {/* Monogram/Logo */}
        <motion.div
          className="w-24 h-24 rounded-full bg-[#7C6A96]/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-[#7C6A96]/20"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-[#7C6A96] font-serif text-4xl">P</span>
        </motion.div>

        <motion.h1 
          className="text-[6vw] font-serif text-[#7C6A96] leading-none mb-4"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={phase >= 1 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(8px)' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          PANS
        </motion.h1>

        <motion.h2 
          className="text-[2.5vw] font-serif text-[#7C6A96]/80 leading-tight mb-6 tracking-wide"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={phase >= 2 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(8px)' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Parent Advocacy and<br/>Navigation Support
        </motion.h2>

        <motion.p 
          className="text-[1.2vw] font-sans text-[#7C6A96]/60 tracking-[0.2em] uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Victoria, Australia
        </motion.p>
      </div>
    </motion.div>
  );
}
