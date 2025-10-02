import React from 'react';
import { MenuItemProps } from '../types';

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, description, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full flex items-center p-4 bg-[rgb(var(--color-bg-offset)/0.5)] rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-[rgb(var(--color-bg-offset))]"
    >
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[rgb(var(--color-primary-light))]">
        {/* FIX: Explicitly provide a generic type argument to React.cloneElement to prevent props from being inferred as 'unknown'. */}
        {React.cloneElement<any>(icon, { className: 'w-6 h-6' })}
      </div>
      <div className="flex-grow text-left ml-4">
        <p className="font-semibold text-white">{title}</p>
        {description && <p className="text-sm text-slate-400">{description}</p>}
      </div>
      {!disabled && (
        <div className="flex-shrink-0 text-slate-500">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default MenuItem;
