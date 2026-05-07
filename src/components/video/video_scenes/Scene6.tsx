import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Scene6() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
        <motion.img 
          src={`${import.meta.env.BASE_URL}parent-child-silhouette-new.png`}
          className="w-full h-full object-cover mix-blend-multiply"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.h2 
          className="text-[4vw] font-serif text-[#7C6A96] leading-tight mb-6"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={phase >= 1 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(10px)' }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Built from lived experience.
        </motion.h2>

        <motion.p 
          className="text-[2.2vw] font-serif text-[#7C6A96]/80"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Focused on clarity, support, and guidance.
        </motion.p>
      </div>
    </motion.div>
  );
}
