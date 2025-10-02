import React, { useState } from 'react';
import YumeAvatar from '../components/YumeAvatar';
import { GROUNDING_STEPS } from '../constants';

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => (
  <div className="flex w-full max-w-xs gap-2">
    {Array.from({ length: total }).map((_, index) => (
      <div
        key={index}
        className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
          index < current ? 'bg-[rgb(var(--color-primary-light))]' : 'bg-[rgb(var(--color-border))]'
        }`}
      />
    ))}
  </div>
);

const Grounding: React.FC = () => {
  const [step, setStep] = useState(-1); // -1 for intro, 0-4 for steps, 5 for completion
  const [userInputs, setUserInputs] = useState<string[]>(Array(GROUNDING_STEPS.length).fill(''));
  const [isFading, setIsFading] = useState(false);

  const currentStepContent = step >= 0 && step < GROUNDING_STEPS.length ? GROUNDING_STEPS[step] : null;

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setStep(prev => prev + 1);
      setIsFading(false);
    }, 300);
  };

  const handleStart = () => {
    setIsFading(true);
    setTimeout(() => {
      setStep(0);
      setIsFading(false);
    }, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInputs = [...userInputs];
    newInputs[step] = e.target.value;
    setUserInputs(newInputs);
  };
  
  const renderContent = () => {
    if (step === -1) {
      // Intro Screen
      return (
        <div className="flex flex-col items-center justify-center text-center h-full">
          <div className="w-24 h-24 mb-6">
            <YumeAvatar />
          </div>
          <h1 className="text-2xl font-bold text-[rgb(var(--color-primary-light))]">5-4-3-2-1 Grounding</h1>
          <p className="text-slate-300 mt-2 max-w-sm">
            This exercise helps you reconnect with the present moment. Let's walk through your senses together.
          </p>
          <button
            onClick={handleStart}
            className="mt-8 px-8 py-3 text-lg font-bold text-white bg-[rgb(var(--color-primary-dark))] rounded-xl shadow-lg shadow-[rgb(var(--color-primary-dark)/0.3)] focus:outline-none focus:ring-4 focus:ring-[rgb(var(--color-primary-light))/50] transition-all duration-300 transform hover:scale-105"
          >
            Begin
          </button>
        </div>
      );
    }

    if (step >= GROUNDING_STEPS.length) {
      // Completion Screen
      return (
        <div className="flex flex-col items-center justify-center text-center h-full">
          <div className="w-24 h-24 mb-6">
            <YumeAvatar />
          </div>
          <h1 className="text-2xl font-bold text-[rgb(var(--color-success))]">Well Done</h1>
          <p className="text-slate-300 mt-2 max-w-sm">
            You've taken a moment to ground yourself in the present. Carry this feeling of calm with you.
          </p>
          <button
            onClick={() => setStep(-1)}
            className="mt-8 px-8 py-3 text-lg font-bold text-white bg-slate-600 rounded-xl hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-400/50 transition-colors"
          >
            Finish
          </button>
        </div>
      );
    }
    
    // Step Screen
    if (currentStepContent) {
      return (
        <div className="flex flex-col items-center justify-between h-full w-full max-w-md">
          <header className="text-center w-full">
            <div className="flex items-center justify-center gap-4 text-[rgb(var(--color-primary-light))]">
               <div className="w-8 h-8">{currentStepContent.icon}</div>
               <h1 className="text-2xl font-bold">{currentStepContent.count} {currentStepContent.sense}</h1>
            </div>
            <p className="text-slate-300 mt-2">{currentStepContent.prompt}</p>
          </header>

          <div className="w-full my-6">
             <textarea
                value={userInputs[step]}
                onChange={handleInputChange}
                placeholder={currentStepContent.placeholder}
                className="w-full h-32 p-3 bg-[rgb(var(--color-bg-offset))] rounded-xl border-2 border-[rgb(var(--color-border))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-[rgb(var(--color-primary))] transition resize-none"
                aria-label="Your observations"
             />
          </div>

          <footer className="w-full flex flex-col items-center">
            <button
                onClick={handleNext}
                className="w-full px-8 py-4 text-lg font-bold text-white bg-[rgb(var(--color-primary-dark))] rounded-xl shadow-lg shadow-[rgb(var(--color-primary-dark)/0.3)] focus:outline-none focus:ring-4 focus:ring-[rgb(var(--color-primary-light))/50] transition-colors"
            >
                Next
            </button>
            <div className="mt-6 w-full">
                <ProgressBar current={step + 1} total={GROUNDING_STEPS.length} />
            </div>
          </footer>
        </div>
      );
    }
    return null;
  };


  return (
    <div className={`w-full h-full transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {renderContent()}
    </div>
  );
};

export default Grounding;
