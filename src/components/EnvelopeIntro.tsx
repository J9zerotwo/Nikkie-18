import React, { useState } from 'react';
import { WaxSeal } from './WaxSeal';
import { Sparkles } from 'lucide-react';

interface EnvelopeIntroProps {
  onOpen: () => void;
  guestName?: string;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onOpen, guestName = "Honored Guest" }) => {
  const [isOpenedFlap, setIsOpenedFlap] = useState(false);
  const [isFadedOut, setIsFadedOut] = useState(false);

  // CUSTOMIZABLE CORNER IMAGES
  const topLeftImage = "/lantern1.png";   
  const topRightImage = "/lantern1.png"; 

  // Custom paper image background
  const paperImage = "/inv.png"; 

  // Envelope Transparency
  const envelopeOpacity = "opacity-100"; 

  const handleSealClick = () => {
    if (!isOpenedFlap) {
      setIsOpenedFlap(true);
    }
  };

  const handleEnterCelebration = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFadedOut(true);
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-opacity duration-700 overflow-hidden ${
        isFadedOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* 1. FULL SCREEN BACKGROUND IMAGE */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `url('/bg2.png')` }}
      />

      {/* 2. FULL SCREEN PINK SHADOW / SHADER OVERLAY LAYER */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-[#FFE3D8]/85 via-[#FDDACD]/75 to-[#F8C8BC]/50 backdrop-blur-xs pointer-events-none z-0" />
      
      {/* 3. CENTERED PINK GLOW AURA BEHIND THE ENVELOPE */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-rose-400/35 blur-3xl animate-pulse pointer-events-none z-0" />

      {/* TOP LEFT & TOP RIGHT CUSTOM CORNER IMAGES WITH SHADOWS */}
      {topLeftImage && (
        <img
          src={topLeftImage}
          alt="Top Left Accent"
          className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 w-16 sm:w-28 h-auto pointer-events-none drop-shadow-xl object-contain"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      )}

      {topRightImage && (
        <img
          src={topRightImage}
          alt="Top Right Accent"
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-16 sm:w-28 h-auto pointer-events-none drop-shadow-xl object-contain"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      )}

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[380px] flex flex-col items-center justify-center my-auto">
        
        {/* Header Prompt */}
        <div className={`mb-3 text-center transition-all duration-500 ${isOpenedFlap ? 'opacity-0 translate-y-[-10px]' : 'opacity-100'}`}>
          <div className="flex items-center justify-center space-x-1.5 text-rose-900 font-cinzel italic text-[11px] sm:text-xs mb-1"></div>
          <h2 className="font-serif italic text-xl sm:text-2xl text-rose-950 font-bold border-b border-amber-300/60 pb-1 inline-block drop-shadow-sm">
            {guestName}
          </h2>
        </div>

        {/* 3D ENVELOPE FRAME */}
        <div 
          className="relative w-[90vw] max-w-[340px] sm:max-w-[370px] h-60 sm:h-68 cursor-pointer group my-auto mt-4 drop-shadow-[0_20px_35px_rgba(131,24,67,0.4)]"
          onClick={handleSealClick}
        >
          
          {/* INNER TALL PORTRAIT PINK PAPER CARD */}
          <div
            className={`absolute left-1 right-1 top-1 bottom-1 rounded-2xl shadow-2xl flex flex-col items-center justify-end text-center p-5 sm:p-7 transition-all duration-1000 ease-in-out z-10 ${
              isOpenedFlap
                ? '-translate-y-[300px] sm:-translate-y-[340px] h-[500px] sm:h-[560px] scale-100 opacity-100 z-30 shadow-[0_25px_60px_rgba(131,24,67,0.45)]'
                : 'h-full opacity-0 pointer-events-none scale-95 translate-y-2'
            }`}
            style={{ 
              backgroundImage: paperImage ? `url('${paperImage}')` : undefined,
              backgroundColor: paperImage ? 'transparent' : '#FFF5F7',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* "ENTER THE CELEBRATION" PINK BUTTON */}
            <div className="pb-8 sm:pb-12 w-full flex justify-center">
              <button
                onClick={handleEnterCelebration}
                className={`w-full max-w-[250px] py-3.5 bg-[#DFA0B1] text-white font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.18em] font-bold rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-200/80 cursor-pointer flex items-center justify-center space-x-2 ${
                  isOpenedFlap ? 'opacity-100 animate-pulse' : 'opacity-0 pointer-events-none'
                }`}
              >
                <span className="text-amber-100 text-[8px]">✦ENTER THE ENCHANTED EVENING✦</span>
              </button>
            </div>
          </div>

          {/* Envelope Back Body */}
          <div className={`absolute inset-0 bg-gradient-to-br from-[#FFE3D8] via-[#FDDACD] to-[#F8C8BC] rounded-2xl shadow-2xl border-2 border-[#DFA0B1] overflow-hidden z-0 ${envelopeOpacity}`}/>

          {/* Envelope Front Pocket Flaps */}
          <div className={`absolute inset-0 z-20 pointer-events-none ${envelopeOpacity}`}>
            <div 
              className="absolute inset-0 bg-gradient-to-t from-[#E5838B] via-[#F5A8A1] to-[#FFE3D8] rounded-b-2xl border-t-2 border-[#DFA0B1] shadow-xl" 
              style={{ clipPath: 'polygon(0% 100%, 50% 45%, 100% 100%)' }}
            />
  
            <div 
              className="absolute inset-0 bg-gradient-to-b from-[#F9BDB7] via-[#F5A8A1] to-[#E5838B]/90 rounded-b-2xl border-r border-[#DFA0B1]/60 shadow-lg" 
              style={{ clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)' }}
            />
  
            <div 
              className="absolute inset-0 bg-gradient-to-b from-[#F9BDB7] via-[#F5A8A1] to-[#E5838B]/90 rounded-b-2xl border-l border-[#DFA0B1]/60 shadow-lg" 
              style={{ clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)' }}
            />
          </div>

          {/* Top Flap (3D Opening Animation) */}
          <div 
            className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#FFE3D8] via-[#F5A8A1] to-[#E5838B] rounded-t-2xl border-b-2 border-amber-300/80 shadow-2xl origin-top transition-transform duration-700 ease-in-out z-20 ${envelopeOpacity} ${
              isOpenedFlap ? '[transform:rotateX(180deg)] z-0' : '[transform:rotateX(0deg)]'
            }`} 
            style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)', transformStyle: 'preserve-3d'}} 
          />

          {/* DEAD-CENTERED WAX SEAL */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center transition-all duration-500 drop-shadow-[0_8px_20px_rgba(131,24,67,0.5)] ${
              isOpenedFlap ? 'scale-150 opacity-0 pointer-events-none' : 'group-hover:scale-105'
            }`}
          >
            <WaxSeal className="w-24 h-24 sm:w-28 sm:h-28" />
          </div>

        </div>

        {/* Bottom CTA Instruction */}
        <div className={`mt-8 text-center transition-opacity duration-500 ${isOpenedFlap ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-[12px] sm:text-xs uppercase tracking-[0.18em] text-rose-900/90 font-serif font-semibold animate-pulse drop-shadow-sm">
            ✦ Tap the Wax Seal to Open ✦
          </p>
        </div>

      </div>
    </div>
  );
};