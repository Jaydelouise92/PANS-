import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 3500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const items = [
    "Understand the process",
    "Prepare for meetings",
    "Access practical resources",
    "Find support"
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center pl-32"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col gap-8 w-full max-w-[40vw]">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={phase >= i + 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={phase >= i + 1 ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            >
              <CheckCircle2 className="w-10 h-10 text-[#B5A1D1]" strokeWidth={1.5} />
            </motion.div>
            <span className="text-[2.5vw] font-serif text-[#7C6A96]">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
