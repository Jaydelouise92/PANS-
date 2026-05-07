import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Scene7() {
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
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#F9F8FF]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-center flex flex-col items-center max-w-[60vw] relative z-10">
        <motion.div
          className="w-20 h-20 rounded-full bg-[#7C6A96]/10 flex items-center justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-[#7C6A96] font-serif text-3xl">P</span>
        </motion.div>

        <motion.h1 
          className="text-[4vw] font-serif text-[#7C6A96] leading-none mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          PANS Victoria
        </motion.h1>

        <motion.p 
          className="text-[1.8vw] font-serif text-[#7C6A96]/80 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Helping parents understand Child Protection and<br/>Children's Court processes in Victoria.
        </motion.p>

        <motion.div 
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
        >
          {['Start Here', 'View Resources', 'Support PANS'].map((label, i) => (
            <motion.div
              key={label}
              className="px-8 py-3 rounded-full bg-white border border-[#7C6A96]/20 text-[#7C6A96] font-sans text-[1vw] shadow-sm tracking-wide uppercase"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={phase >= 3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
