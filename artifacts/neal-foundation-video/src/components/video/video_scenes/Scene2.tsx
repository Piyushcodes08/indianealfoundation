import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1200),
      setTimeout(() => setPhase(4), 1600),
      setTimeout(() => setPhase(5), 3800), // exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const services = [
    "Sales Outsourcing",
    "Customer Support",
    "Lead Generation",
    "BPO Services"
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-start pl-[10vw]"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="z-10 w-[50vw]">
        <motion.h2 
          className="font-serif text-white text-[4vw] leading-tight mb-8"
          initial={{ opacity: 0, x: 50 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Comprehensive <br/><span className="text-[#1B6BD0]">Solutions</span>
        </motion.h2>

        <div className="space-y-6">
          {services.map((service, i) => (
            <motion.div
              key={service}
              className="flex items-center gap-6"
              initial={{ opacity: 0, x: 30, filter: 'blur(5px)' }}
              animate={phase >= 2 + i ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 30, filter: 'blur(5px)' }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="h-[2px] w-12 bg-[#1B6BD0]" />
              <span className="text-white font-sans text-[2vw]">{service}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="absolute right-[10vw] top-[20vh] w-[35vw] h-[60vh] overflow-hidden rounded-2xl border border-white/10"
        initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
        animate={phase >= 2 ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: 30 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1000 }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/bg-network.png`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1B6BD0]/20 mix-blend-overlay" />
      </motion.div>
    </motion.div>
  );
}
