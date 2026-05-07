import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
        <motion.img 
          src={`${import.meta.env.BASE_URL}home-pathway.png`}
          className="w-full h-full object-cover mix-blend-multiply"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-[60vw]">
        <motion.div 
          className="absolute inset-0 bg-[#B5A1D1]/20 blur-3xl rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
        />
        
        <motion.h2 
          className="text-[4vw] font-serif text-[#7C6A96] leading-tight relative"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={phase >= 1 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(10px)' }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          You do not have to<br/>navigate this alone.
        </motion.h2>
      </div>
    </motion.div>
  );
}
