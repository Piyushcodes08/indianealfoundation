import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 3200), // exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const values = ["Integrity", "Excellence", "Innovation", "Partnership", "Commitment"];

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 2000 }}
    >
      <div className="z-10 w-full text-center">
        <motion.p
          className="text-[#1B6BD0] font-sans font-semibold tracking-widest uppercase text-[1.5vw] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Our Core Values
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-[3vw] px-[10vw]">
          {values.map((value, i) => (
            <motion.div
              key={value}
              className="text-white font-serif text-[3.5vw]"
              initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.2 }}
              animate={phase >= 2 ? { opacity: 1, filter: 'blur(0px)', scale: 1 } : { opacity: 0, filter: 'blur(10px)', scale: 1.2 }}
              transition={{ duration: 0.8, delay: phase >= 2 ? i * 0.15 : 0 }}
            >
              {value}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
