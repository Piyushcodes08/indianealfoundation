import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 3200), // exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A1628]"
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      animate={{ clipPath: 'inset(0% 0 0 0)' }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="z-10 text-center">
        <motion.div
          className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-[#1B6BD0] flex items-center justify-center bg-white/5"
          initial={{ scale: 0, rotate: -180 }}
          animate={phase >= 1 ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <span className="text-[#1B6BD0] font-serif text-4xl font-bold">N</span>
        </motion.div>

        <motion.h1 
          className="font-serif text-white text-[5vw] leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Neal Foundation
        </motion.h1>

        <motion.div 
          className="h-[1px] bg-gradient-to-r from-transparent via-[#1B6BD0] to-transparent mb-6"
          initial={{ width: 0, opacity: 0 }}
          animate={phase >= 2 ? { width: '40vw', opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.p
          className="text-white/70 font-sans text-[1.5vw] tracking-wider uppercase"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Driven by Growth. Powered by Partnership.
        </motion.p>
      </div>
    </motion.div>
  );
}
