import { useState, useEffect } from 'react';

interface VideoPlayerOptions {
  durations: Record<string, number>;
}

export function useVideoPlayer({ durations }: VideoPlayerOptions) {
  const [currentScene, setCurrentScene] = useState(0);
  const sceneKeys = Object.keys(durations);

  useEffect(() => {
    let timeoutId: number;
    let isMounted = true;
    let totalTime = 0;

    // Start recording on mount
    if (window.startRecording) {
      window.startRecording();
    }

    const advanceScene = (index: number) => {
      if (!isMounted) return;
      
      setCurrentScene(index);
      
      const duration = durations[sceneKeys[index]];
      totalTime += duration;

      timeoutId = window.setTimeout(() => {
        if (index + 1 < sceneKeys.length) {
          advanceScene(index + 1);
        } else {
          // Video finished first pass
          if (window.stopRecording) {
            window.stopRecording();
            // Clear to prevent multiple calls
            window.stopRecording = undefined;
          }
          // Loop
          advanceScene(0);
        }
      }, duration);
    };

    advanceScene(0);

    return () => {
      isMounted = false;
      window.clearTimeout(timeoutId);
    };
  }, [durations]);

  return { currentScene };
}

// Add types for the global recording functions
declare global {
  interface Window {
    startRecording?: () => void;
    stopRecording?: () => void;
  }
}
