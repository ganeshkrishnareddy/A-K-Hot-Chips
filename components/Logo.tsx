import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg 
    className={`${className} shrink-0`}
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Circle with Border */}
    <circle cx="50" cy="50" r="48" fill="#ea580c" stroke="white" strokeWidth="4"/>
    
    {/* Chip Shape */}
    <path 
      d="M50 18C30 18 18 35 18 50C18 65 30 82 50 82C70 82 82 65 82 50C82 35 70 18 50 18Z" 
      fill="#fef08a" 
      stroke="#facc15" 
      strokeWidth="2"
    />
    
    {/* Flame Icon Base */}
    <path 
      d="M50 22C50 22 60 32 60 40C60 45.5 55.5 50 50 50C44.5 50 40 45.5 40 40C40 32 50 22 50 22Z" 
      fill="#b91c1c" 
      stroke="white" 
      strokeWidth="1.5"
    />
    
    {/* Flame Inner Highlight */}
    <path d="M50 28C50 28 54 34 54 38C54 41 52 43 50 43C48 43 46 41 46 38C46 34 50 28 50 28Z" fill="#facc15"/>

    {/* Brand Initials */}
    <text 
      x="50" 
      y="74" 
      fontSize="24" 
      fontWeight="900" 
      fill="#b91c1c" 
      textAnchor="middle" 
      fontFamily="sans-serif"
    >
      AK
    </text>
  </svg>
);