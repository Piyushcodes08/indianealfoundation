import { useVideoPlayer } from "@/lib/video";
import { AnimatePresence, motion } from "framer-motion";
import { Scene1 } from "./video_scenes/Scene1";
import { Scene2 } from "./video_scenes/Scene2";
import { Scene3 } from "./video_scenes/Scene3";
import { Scene4 } from "./video_scenes/Scene4";
import { Scene5 } from "./video_scenes/Scene5";

const SCENE_DURATIONS = {
  intro: 4000,
  services: 4500,
  global: 4000,
  values: 4000,
  outro: 4000
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0A1628]">
      {/* Background layer */}
      <div className="absolute inset-0 pointer-events-none">
        <video 
          src={`${import.meta.env.BASE_URL}videos/bg-particles.mp4`} 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
        />
        <motion.div 
          className="absolute inset-0 bg-[#0A1628]/50"
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <img 
          src={`${import.meta.env.BASE_URL}images/bg-tech.png`} 
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-20"
        />
      </div>

      {/* Persistent Midground */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1B6BD0, transparent)' }}
        animate={{
          x: ['-20%', '50%', '-10%', '60%', '20%'][currentScene],
          y: ['-20%', '-10%', '40%', '30%', '-20%'][currentScene],
          scale: [1, 1.2, 0.8, 1.5, 1][currentScene],
          opacity: [0.1, 0.15, 0.1, 0.2, 0.1][currentScene]
        }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      
      <AnimatePresence mode="popLayout">
        {currentScene === 0 && <Scene1 key="intro" />}
        {currentScene === 1 && <Scene2 key="services" />}
        {currentScene === 2 && <Scene3 key="global" />}
        {currentScene === 3 && <Scene4 key="values" />}
        {currentScene === 4 && <Scene5 key="outro" />}
      </AnimatePresence>
    </div>
  );
}
