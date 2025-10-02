import React from 'react';
import Respirator from '../components/Respirator';
import useTimer from '../hooks/useTimer';
import { BreathingTechniqueKey } from '../types';
import { BREATHING_TECHNIQUES } from '../constants';
import YumeAvatar from '../components/YumeAvatar';

interface BreathingProps {
  isActive: boolean;
  onToggle: () => void;
  techniqueKey: BreathingTechniqueKey;
}

const Breathing: React.FC<BreathingProps> = ({ isActive, onToggle, techniqueKey }) => {
  const { time } = useTimer({ isActive });
  const technique = BREATHING_TECHNIQUES[techniqueKey];

  return (
    <div className="flex flex-col items-center justify-between h-full w-full text-center">
      <header className="px-4">
         <h1 className="text-lg text-slate-300">
            Find your calm through mindful breathing
         </h1>
         {isActive && (
           <p className="text-slate-400 mt-2 text-2xl font-mono tracking-widest h-9">
             {time}
           </p>
         )}
      </header>

      <div className="flex-grow flex items-center justify-center">
        <Respirator isActive={isActive} technique={technique} />
      </div>

      <div className="w-full max-w-sm px-4">
        {!isActive && (
          <div className="flex flex-col items-center mb-4">
            <div className="w-20 h-20 mb-4">
              <YumeAvatar />
            </div>
            <p className="text-slate-300">
                Find a comfortable position and relax
            </p>
          </div>
        )}
        <button
          onClick={onToggle}
          className="w-full px-8 py-4 text-lg font-bold text-white bg-[rgb(var(--color-primary-dark))] rounded-2xl shadow-lg shadow-[rgb(var(--color-primary-dark)/0.3)] focus:outline-none focus:ring-4 focus:ring-[rgb(var(--color-primary-light))] focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-3"
        >
          {isActive ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h6v4H9z" />
             </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          <span>{isActive ? 'Stop' : 'Start'}</span>
        </button>
        {!isActive && (
            <p className="text-slate-500 mt-4 text-sm">
                Take a moment for yourself. You deserve this peace.
            </p>
        )}
      </div>
    </div>
  );
};

export default Breathing;
