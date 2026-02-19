import React from 'react';

interface LogoProps {
  className?: string;
  useImage?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto", useImage = false }) => {
  // Option A: Use the custom rewritten SVG (Cleaner, scalable, transparent background)
  // Option B: Use the provided image link (Might have background issues, but is the exact brand asset)
  
  if (useImage) {
     return (
        <img 
            src="https://lh3.googleusercontent.com/d/17fUABGOHINGJdm_4ie31W-TvK7DdC4xh" 
            alt="Brand Logo" 
            className={`${className} object-contain`}
        />
     );
  }

  // Rewritten Vector Logo based on "Gym Clothing" theme
  // A stylized 'F' or energetic shape representing movement and strength
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo da Empresa"
    >
      {/* Symbol: Stylized Dumbbell / Lightning Bolt combination */}
      <path 
        d="M25 10L15 25H28L18 40L45 20H30L40 10H25Z" 
        className="fill-brand-accent"
      />
      
      {/* Text: IRONPULSE (or Brand Name) */}
      <text 
        x="55" 
        y="35" 
        fontFamily="Inter, sans-serif" 
        fontWeight="900" 
        fontSize="32" 
        className="fill-white tracking-tighter"
        style={{ letterSpacing: '-0.05em' }}
      >
        IRON<tspan className="fill-brand-accent">PULSE</tspan>
      </text>
    </svg>
  );
};