import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 3200), // exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="text-center z-10 px-8 max-w-[80vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-[#1B6BD0] font-sans font-semibold tracking-widest uppercase text-[1.2vw]">
            Neal Foundation & 24X7NetConnect
          </span>
        </motion.div>
        
        <h1 className="font-serif text-white leading-tight" style={{ fontSize: '5vw' }}>
          {'Your Trusted'.split('').map((char, i) => (
            <motion.span key={i} className="inline-block"
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={phase >= 2 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 40, rotateX: -40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: phase >= 2 ? i * 0.03 : 0 }}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          <br />
          {'Growth Partner'.split('').map((char, i) => (
            <motion.span key={i} className="inline-block text-[#1B6BD0]"
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={phase >= 2 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 40, rotateX: -40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: phase >= 2 ? (i + 12) * 0.03 : 0 }}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-white/70 font-sans mt-8 text-[1.8vw] max-w-4xl mx-auto"
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={phase >= 3 ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(10px)', y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Building Businesses. Creating Opportunities. Delivering Results.
        </motion.p>
      </div>
    </motion.div>
  );
}
