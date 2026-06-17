import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1000),
      setTimeout(() => setPhase(4), 1400),
      setTimeout(() => setPhase(5), 3400), // exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const stats = [
    { value: "100+", label: "Projects Supported" },
    { value: "3", label: "Countries Served" },
    { value: "50+", label: "Team Members" },
    { value: "24/7", label: "Operations" }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="text-center z-10 w-full px-[10vw]">
        <motion.h2 
          className="font-serif text-white text-[4vw] mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Global Reach. Local Impact.
        </motion.h2>

        <div className="grid grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center border border-white/10 bg-white/5 backdrop-blur-md p-8 rounded-2xl"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={phase >= 2 + i ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
            >
              <span className="text-[#1B6BD0] font-serif text-[4vw] font-bold leading-none mb-4">{stat.value}</span>
              <span className="text-white/80 font-sans text-[1.2vw] uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
