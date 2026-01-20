import React from 'react';

interface HMCLogoProps {
  className?: string;
  size?: number;
}

export function HMCLogo({ className, size = 40 }: HMCLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className || ''}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield outline */}
        <path
          d="M24 4L6 12V22C6 32.5 12.5 42 24 44C35.5 42 42 32.5 42 22V12L24 4Z"
          fill="#1e40af"
        />
        {/* Medical cross */}
        <path
          d="M24 14V34M14 24H34"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Inner shield highlight */}
        <path
          d="M24 8L10 14V22C10 30 15 37 24 39C33 37 38 30 38 22V14L24 8Z"
          fill="#2563eb"
          fillOpacity="0.5"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 leading-none">HMC</span>
        <span className="text-xs text-gray-600 leading-none">Hamad Medical Corporation</span>
      </div>
    </div>
  );
}

export function HMCLogoCompact({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4L6 12V22C6 32.5 12.5 42 24 44C35.5 42 42 32.5 42 22V12L24 4Z"
        fill="#1e40af"
      />
      <path
        d="M24 14V34M14 24H34"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}