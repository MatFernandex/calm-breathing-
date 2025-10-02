
import { useState, useEffect, useRef } from 'react';

interface UseTimerProps {
  isActive: boolean;
}

const useTimer = ({ isActive }: UseTimerProps) => {
  const [seconds, setSeconds] = useState(0);
  // Fix: Cannot find namespace 'NodeJS'. In browser environments, interval IDs are numbers.
  // FIX: Use ReturnType<typeof setInterval> to support both browser (number) and Node (Timeout) timer IDs.
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    
    // Reset timer when a new session starts
    if(isActive && seconds > 0) {
        setSeconds(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return {
    time: formatTime(seconds),
    rawSeconds: seconds,
  };
};

export default useTimer;
