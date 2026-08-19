import React from 'react';

interface WaxSealProps {
  className?: string;
  imageUrl?: string;
}

export const WaxSeal: React.FC<WaxSealProps> = ({
  className = "w-34 h-34",
  imageUrl = "/wax.png"
}) => {
  return (
    <div className={`relative flex items-center justify-center cursor-pointer group ${className}`}>
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-md group-hover:scale-110 transition-transform duration-300" />
      
      {/* Custom Wax Seal Image */}
      <img
        src={imageUrl}
        alt="Wax Seal"
        className="w-full h-full object-contain drop-shadow-[0_6px_15px_rgba(131,24,67,0.4)] group-hover:scale-105 transition-transform duration-300 z-10"
      />
    </div>
  );
};