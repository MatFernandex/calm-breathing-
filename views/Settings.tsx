import React from 'react';
import { BREATHING_TECHNIQUES } from '../constants';
import { BreathingTechniqueKey } from '../types';

interface SettingsProps {
  selectedTechnique: BreathingTechniqueKey;
  onSelectTechnique: (technique: BreathingTechniqueKey) => void;
}

const Settings: React.FC<SettingsProps> = ({
  selectedTechnique,
  onSelectTechnique,
}) => {
  return (
    <div className="w-full h-full max-w-md mx-auto pt-24 p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-[rgb(var(--color-primary-light))]">
        Breathing Techniques
      </h1>
      <div className="space-y-4">
        {Object.entries(BREATHING_TECHNIQUES).map(
          ([key, { name, description }]) => {
            const isSelected = key === selectedTechnique;
            return (
              <button
                key={key}
                onClick={() => onSelectTechnique(key as BreathingTechniqueKey)}
                className={`w-full p-5 rounded-xl text-left transition-all duration-300 border-2 ${
                  isSelected
                    ? 'bg-[rgb(var(--color-primary-dark)/0.3)] border-[rgb(var(--color-primary))] shadow-lg shadow-[rgb(var(--color-primary)/0.2)]'
                    : 'bg-[rgb(var(--color-bg-offset)/0.5)] border-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-bg-offset))]'
                }`}
              >
                <h2 className="font-bold text-lg text-white">{name}</h2>
                <p className="text-sm text-slate-300 mt-1">{description}</p>
              </button>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Settings;
