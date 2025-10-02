import React from 'react';

interface HeaderProps {
    showBackButton: boolean;
    onSettingsClick: () => void;
    onBackClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ showBackButton, onSettingsClick, onBackClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 px-4 sm:px-6 bg-[rgb(var(--color-bg-transparent))] backdrop-blur-lg">
      <div className="flex items-center space-x-3">
        <span className="text-3xl" role="img" aria-label="dream-character">夢</span>
        <span className="text-4xl font-bold tracking-tighter text-white">Yume</span>
      </div>
      <div>
        {showBackButton ? (
             <button onClick={onBackClick} aria-label="Go back" className="p-2 text-slate-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        ) : (
            <button onClick={onSettingsClick} aria-label="Open settings" className="p-2 text-slate-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>
        )}
      </div>
    </header>
  );
};

export default Header;
