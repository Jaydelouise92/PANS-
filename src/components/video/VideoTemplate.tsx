import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '../../lib/video/hooks';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';
import { Scene7 } from './video_scenes/Scene7';

const SCENE_DURATIONS = {
  scene1: 2500,
  scene2: 4000,
  scene3: 5000,
  scene4: 5000,
  scene5: 5000,
  scene6: 4000,
  scene7: 4500,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#F9F8FF] font-sans">
      {/* Persistent Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute w-[80vw] h-[80vw] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #EBE5F2, transparent)' }}
          animate={{ x: ['-20%', '10%', '-20%'], y: ['-20%', '30%', '-20%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute w-[60vw] h-[60vw] rounded-full opacity-20 blur-3xl bottom-0 right-0"
          style={{ background: 'radial-gradient(circle, #B5A1D1, transparent)' }}
          animate={{ x: ['20%', '-10%', '20%'], y: ['20%', '-20%', '20%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Background Images Layer */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        animate={{
          opacity: currentScene === 1 ? 0.6 : currentScene === 5 ? 0.3 : 0
        }}
        transition={{ duration: 2 }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}watercolour-pathway.png`} 
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-60 mix-blend-screen"
        animate={{
          opacity: currentScene >= 2 && currentScene <= 4 ? 0.6 : 0
        }}
        transition={{ duration: 2 }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}soft-light-beam.png`} 
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* AnimatePresence for scenes */}
      <AnimatePresence mode="popLayout">
        {currentScene === 0 && <Scene1 key="scene1" />}
        {currentScene === 1 && <Scene2 key="scene2" />}
        {currentScene === 2 && <Scene3 key="scene3" />}
        {currentScene === 3 && <Scene4 key="scene4" />}
        {currentScene === 4 && <Scene5 key="scene5" />}
        {currentScene === 5 && <Scene6 key="scene6" />}
        {currentScene === 6 && <Scene7 key="scene7" />}
      </AnimatePresence>
    </div>
  );
}
