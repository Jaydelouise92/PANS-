import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const sections = [
    "Start Here",
    "First 48 Hours Guide",
    "Understanding Court",
    "Parent Rights",
    "Mental Health Support"
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.2 }}
    >
      <div className="relative w-full h-[50vh] flex items-center overflow-hidden">
        <motion.div 
          className="flex gap-8 px-[10vw]"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {/* Double array for infinite loop effect */}
          {[...sections, ...sections].map((section, i) => (
            <motion.div
              key={i}
              className="w-[25vw] h-48 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white p-8 flex items-end shrink-0"
              initial={{ opacity: 0, y: 50 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <h3 className="font-serif text-[2vw] text-[#7C6A96] leading-tight">{section}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-16 text-center z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        <p className="text-[3vw] font-serif text-[#7C6A96]">Everything you need, in one place.</p>
      </motion.div>
    </motion.div>
  );
}
