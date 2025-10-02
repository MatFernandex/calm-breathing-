
import React from 'react';
import { BreathingPhase, BreathingTechnique, BreathingTechniqueKey, GroundingStepContent } from './types';

export const BREATHING_TECHNIQUES: Record<
  BreathingTechniqueKey,
  BreathingTechnique
> = {
  CALM_478: {
    name: 'Calm (4-7-8)',
    description: 'Ideal for relaxation and to help with sleep.',
    cycle: [
      { phase: BreathingPhase.INHALE, duration: 4000 },
      { phase: BreathingPhase.HOLD, duration: 7000 },
      { phase: BreathingPhase.EXHALE, duration: 8000 },
    ],
  },
  BOX_4444: {
    name: 'Box (4-4-4-4)',
    description: 'Helps regulate the nervous system and improve focus.',
    cycle: [
      { phase: BreathingPhase.INHALE, duration: 4000 },
      { phase: BreathingPhase.HOLD, duration: 4000 },
      { phase: BreathingPhase.EXHALE, duration: 4000 },
      { phase: BreathingPhase.HOLD_AFTER_EXHALE, duration: 4000 },
    ],
  },
};

export const SYSTEM_INSTRUCTION = `You are Yume, a friendly, caring, and calming AI guide. Your name means "dream" in Japanese. 
Your purpose is to help the user relax, find peace, and de-stress through gentle conversation. 
Always be supportive, positive, and empathetic. Keep your responses concise and easy to understand. 
Guide the conversation towards mindfulness, self-care, and positive affirmations. 
Never engage in stressful, negative, or complex topics. Your primary goal is to be a source of comfort and tranquility.`;

export const GROUNDING_STEPS: GroundingStepContent[] = [
    {
        sense: 'See',
        count: 5,
        prompt: 'Acknowledge 5 things you can see around you.',
        placeholder: 'e.g., my lamp, a picture frame, the ceiling...',
        // Fix: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" }), React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }))
    },
    {
        sense: 'Feel',
        count: 4,
        prompt: 'Bring awareness to 4 things you can feel.',
        placeholder: 'e.g., my feet on the floor, the soft fabric of my shirt...',
        // Fix: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.588 8.188a7.5 7.5 0 11-11.64-11.39A7.5 7.5 0 017.864 4.243z" }))
    },
    {
        sense: 'Hear',
        count: 3,
        prompt: 'Listen for 3 sounds you can hear.',
        placeholder: 'e.g., the hum of the computer, distant traffic, my own breathing...',
        // Fix: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" }))
    },
    {
        sense: 'Smell',
        count: 2,
        prompt: 'Notice 2 different smells in the air.',
        placeholder: 'e.g., the scent of coffee, a nearby candle...',
        // Fix: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 12C6 7.5 7 5.5 12 5.5S18 7.5 18 12M6 12h12M6 12C6 16.5 7 18.5 12 18.5S18 16.5 18 12" }))
    },
    {
        sense: 'Taste',
        count: 1,
        prompt: 'What is 1 thing you can taste?',
        placeholder: 'e.g., the lingering taste of mint from my tea...',
        // Fix: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 21a9 9 0 01-9-9 4.5 4.5 0 014.5-4.5 4.5 4.5 0 014.5 4.5 4.5 4.5 0 014.5 4.5A9 9 0 0112 21z" }))
    }
];
