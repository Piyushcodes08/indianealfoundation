import { useState, useEffect } from 'react';

interface VideoPlayerOptions {
  durations: Record<string, number>;
}

export function useVideoPlayer({ durations }: VideoPlayerOptions) {
  const [currentScene, setCurrentScene] = useState(0);
  const keys = Object.keys(durations);

  useEffect(() => {
    // @ts-ignore
    window.startRecording?.();

    let isSubscribed = true;

    const advanceScene = () => {
      if (!isSubscribed) return;
      
      setCurrentScene((prev) => {
        const next = prev + 1;
        if (next >= keys.length) {
          // @ts-ignore
          window.stopRecording?.();
          return 0; // Loop back
        }
        return next;
      });
    };

    const currentDuration = durations[keys[currentScene]];
    const timer = setTimeout(advanceScene, currentDuration);

    return () => {
      isSubscribed = false;
      clearTimeout(timer);
    };
  }, [currentScene, durations, keys]);

  return { currentScene };
}
