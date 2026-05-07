import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const cards = [
    { title: "Child Protection", rotate: -5, x: '-35vw', y: '-10vh' },
    { title: "Children's Court", rotate: 3, x: '-15vw', y: '15vh' },
    { title: "Meetings", rotate: -2, x: '5vw', y: '-20vh' },
    { title: "Reports & Orders", rotate: 6, x: '25vw', y: '5vh' },
    { title: "Your Rights", rotate: -4, x: '40vw', y: '-15vh' },
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.2 }}
    >
      <div className="relative w-full h-[60vh]">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 w-64 h-40 bg-white rounded-xl shadow-lg border border-[#7C6A96]/10 flex items-center justify-center p-6 text-center"
            initial={{ opacity: 0, x: 0, y: 200, rotate: 0, scale: 0.8 }}
            animate={phase >= 1 ? { 
              opacity: 1, 
              x: `calc(-50% + ${card.x})`, 
              y: `calc(-50% + ${card.y})`, 
              rotate: card.rotate,
              scale: 1
            } : { opacity: 0, x: 0, y: 200, rotate: 0, scale: 0.8 }}
            transition={{ 
              type: 'spring', 
              stiffness: 60, 
              damping: 15, 
              delay: phase >= 1 ? i * 0.2 + 0.2 : 0 
            }}
          >
            <span className="font-serif text-2xl text-[#7C6A96] leading-tight">{card.title}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        <p className="text-[2.5vw] font-serif text-[#7C6A96]">Clear information during overwhelming systems.</p>
      </motion.div>
    </motion.div>
  );
}
