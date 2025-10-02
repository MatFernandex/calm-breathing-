import React from 'react';
import { THEMES } from '../themes';
import { ThemeKey } from '../types';

interface AppearanceProps {
    currentTheme: ThemeKey;
    onSelectTheme: (theme: ThemeKey) => void;
}

const Appearance: React.FC<AppearanceProps> = ({ currentTheme, onSelectTheme }) => {
    return (
        <div className="w-full h-full max-w-md mx-auto pt-24 p-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-[rgb(var(--color-primary-light))]">
                Appearance
            </h1>
            <div className="space-y-4">
                {Object.entries(THEMES).map(([key, theme]) => {
                    const isSelected = key === currentTheme;
                    
                    return (
                        <button
                            key={key}
                            onClick={() => onSelectTheme(key as ThemeKey)}
                            className={`w-full p-5 rounded-xl text-left transition-all duration-300 border-2 ${
                                isSelected
                                    ? 'bg-[rgb(var(--color-primary-dark)/0.3)] border-[rgb(var(--color-primary))] shadow-lg shadow-[rgb(var(--color-primary)/0.2)]'
                                    : 'bg-[rgb(var(--color-bg-offset)/0.5)] border-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-bg-offset))]'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="font-bold text-lg text-white">{theme.name}</h2>
                                <div className="flex items-center -space-x-2">
                                    <div className="w-6 h-6 rounded-full border-2 border-[rgb(var(--color-bg))] ring-2 ring-[rgb(var(--color-primary-dark))]" style={{ backgroundColor: `rgb(${theme.colors['--color-primary']})` }} />
                                    <div className="w-6 h-6 rounded-full border-2 border-[rgb(var(--color-bg))] ring-2 ring-[rgb(var(--color-primary-dark))]" style={{ backgroundColor: `rgb(${theme.colors['--color-secondary']})` }} />
                                    <div className="w-6 h-6 rounded-full border-2 border-[rgb(var(--color-bg))] ring-2 ring-[rgb(var(--color-primary-dark))]" style={{ backgroundColor: `rgb(${theme.colors['--color-bg-offset']})` }} />
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Appearance;
