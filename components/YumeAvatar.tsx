import React from 'react';

interface YumeAvatarProps {
  size?: number;
}

const YumeAvatar: React.FC<YumeAvatarProps> = ({ size = 80 }) => {
  return (
    <div
      className="relative animate-float"
      style={{ width: size, height: size }}
    >
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          #yumeGradient stop:first-child { stop-color: rgb(var(--color-primary-light)); }
          #yumeGradient stop:last-child { stop-color: rgb(var(--color-primary-dark)); }
        `}
      </style>
      <div
        className="absolute inset-0 rounded-full blur-xl"
        style={{
          background: 'radial-gradient(circle, rgb(var(--color-primary-light)/0.4) 0%, rgb(var(--color-primary-dark)/0.1) 70%)',
        }}
      />
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        <defs>
          <radialGradient id="yumeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopOpacity: 1 }} />
          </radialGradient>
        </defs>
        
        {/* Body */}
        <path
          d="M50,10 C20,10 10,40 10,60 C10,90 40,100 50,95 C60,100 90,90 90,60 C90,40 80,10 50,10 Z"
          fill="url(#yumeGradient)"
        />
        
        {/* Eyes */}
        <circle cx="40" cy="55" r="3" fill="#1e293b" />
        <circle cx="60" cy="55" r="3" fill="#1e293b" />

        {/* Shine */}
         <circle cx="42" cy="53" r="1" fill="white" />
        <circle cx="62" cy="53" r="1" fill="white" />
        
        {/* Blush */}
        <ellipse cx="33" cy="65" rx="5" ry="3" fill="#f472b6" opacity="0.3" />
        <ellipse cx="67" cy="65" rx="5" ry="3" fill="#f472b6" opacity="0.3" />
      </svg>
    </div>
  );
};

export default YumeAvatar;
