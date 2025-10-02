import React, { useState, useEffect } from 'react';
import { BreathingPhase, BreathingTechnique } from '../types';

interface RespiratorProps {
  isActive: boolean;
  technique: BreathingTechnique;
}

const Respirator: React.FC<RespiratorProps> = ({ isActive, technique }) => {
  const [phase, setPhase] = useState<BreathingPhase>(BreathingPhase.READY);
  const [currentDuration, setCurrentDuration] = useState(1000);

  useEffect(() => {
    if (!isActive) {
      setPhase(BreathingPhase.READY);
      setCurrentDuration(1000);
      return;
    }

    let currentIndex = -1;
    // FIX: Use ReturnType<typeof setTimeout> to support both browser (number) and Node (Timeout) timer IDs.
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const runCycle = () => {
      currentIndex = (currentIndex + 1) % technique.cycle.length;
      const currentPhase = technique.cycle[currentIndex];
      
      setPhase(currentPhase.phase);
      setCurrentDuration(currentPhase.duration);

      const nextPhaseDelay = currentPhase.duration;
      const timeoutId = setTimeout(runCycle, nextPhaseDelay);
      timeouts.push(timeoutId);
    };

    // Delay the start slightly to allow for the initial "Inhale" transition
    const startTimeout = setTimeout(runCycle, 100);
    timeouts.push(startTimeout);


    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [isActive, technique]);

  const getScale = () => {
    if (!isActive) return 'scale-100';
    switch (phase) {
      case BreathingPhase.INHALE:
      case BreathingPhase.HOLD:
        return 'scale-100';
      case BreathingPhase.EXHALE:
      case BreathingPhase.HOLD_AFTER_EXHALE:
      default:
        return 'scale-50';
    }
  };

  const transitionStyles = {
    transitionProperty: 'transform, opacity',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: `${isActive ? currentDuration : 500}ms`,
  };

  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
      <div
        style={transitionStyles}
        className={`absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-full blur-3xl opacity-30 ${getScale()}`}
      />
      <div
        style={transitionStyles}
        className={`relative w-full h-full bg-[rgb(var(--color-secondary)/0.4)] border border-[rgb(var(--color-primary)/0.3)] rounded-full shadow-2xl shadow-black/50 flex items-center justify-center ${getScale()}`}
      >
        <span className="text-2xl font-medium text-[rgb(var(--color-primary-light))] drop-shadow-lg text-center px-4">
          {phase}
        </span>
      </div>
    </div>
  );
};

export default Respirator;
