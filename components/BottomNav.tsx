import React from 'react';
import type { MainView } from '../types';

interface BottomNavProps {
  currentView: MainView;
  setView: (view: MainView) => void;
}

const NavButton: React.FC<{
  label: string;
  icon: React.ReactElement;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className={`flex flex-col items-center justify-center w-24 h-full transition-colors duration-300 ${
      isActive ? 'text-[rgb(var(--color-primary-light))]' : 'text-slate-400 hover:text-white'
    }`}
  >
    {/* Fix: Explicitly provide a generic type argument to React.cloneElement to prevent props from being inferred as 'unknown'. */}
    {React.cloneElement<any>(icon, { className: 'h-6 w-6' })}
    <span className="text-xs mt-1 capitalize">{label}</span>
  </button>
);

const NAV_ITEMS: { id: MainView; label: string; icon: React.ReactElement }[] = [
    { id: 'home', label: 'Home', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a.75.75 0 011.06 0l8.955 8.955M3 10.5v9A2.25 2.25 0 005.25 21h3.75V15h3v6h3.75A2.25 2.25 0 0021 19.5v-9M12 2.25V6" /></svg> },
    { id: 'breathing', label: 'Breathing', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12C6 7.5 7 5.5 12 5.5S18 7.5 18 12M6 12h12M6 12C6 16.5 7 18.5 12 18.5S18 16.5 18 12" /></svg>},
    { id: 'grounding', label: 'Grounding', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-9-9 4.5 4.5 0 014.5-4.5 4.5 4.5 0 014.5 4.5 4.5 4.5 0 014.5 4.5A9 9 0 0112 21z" /></svg> },
    { id: 'menu', label: 'Menu', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg> },
];


const BottomNav: React.FC<BottomNavProps> = ({ currentView, setView }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-20 bg-[rgb(var(--color-bg-transparent))] backdrop-blur-lg border-t border-[rgb(var(--color-border))/50] flex justify-center items-center z-50">
      <nav className="flex justify-around w-full max-w-md">
        {NAV_ITEMS.map(({ id, label, icon }) => (
            <NavButton
                key={id}
                label={label}
                icon={icon}
                isActive={currentView === id}
                onClick={() => setView(id)}
            />
        ))}
      </nav>
    </footer>
  );
};

export default BottomNav;
