import React, { useState, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { DetailsSection } from './components/DetailsSection';
import { ProgramSection } from './components/ProgramSection';
import { GallerySection } from './components/GallerySection';
import { RsvpSection } from './components/RsvpSection';
import { FloatingLanterns } from './components/FloatingLanterns';
import { MusicPlayer } from './components/MusicPlayer';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import HeaderNav from './components/HeaderNav'; 

export const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleOpenInvitation = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const scrollToRSVP = () => {
    const rsvpElement = document.getElementById('rsvp');
    if (rsvpElement) {
      rsvpElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen bg-theme-main font-sans text-rose-950 selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden pt-0 pb-12">
      
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        src="light.m4a"
      />

      {/* Floating Tangled Lanterns */}
      <FloatingLanterns />

      {/* Interactive Envelope Intro */}
      {!isOpened && (
        <EnvelopeIntro onOpen={handleOpenInvitation} guestName="Honored Guest" />
      )}

      {/* Top Header Navigation */}
      {isOpened && <HeaderNav onRSVPClick={scrollToRSVP} />}

      {/* Music Player Button */}
      {isOpened && <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />}

      {/* Main Invitation Sections */}
      <div className={`transition-all duration-1000 ${isOpened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div id="hero">
          <HeroSection
            name="Nikkie"
            subtitle="You are cordially invited to the 18th Birthday Debut of"
            date="Sunday, September 13, 2026"
          />
        </div>
        
        <CountdownSection targetDate="2026-09-13T17:00:00" />
        
        <div id="details"><DetailsSection /></div>
        <div id="program"><ProgramSection /></div>
        <div id="gallery"><GallerySection /></div>
        <div id="rsvp"><RsvpSection /></div>

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-rose-800 bg-gradient-to-b from-[#FFF0EA]/10 via-[#FFE3D8]/60 to-[#FDDACD] font-serif italic">
          © 2026 Nikkie’s 18th Debut Celebration. All rights reserved.<br/> Created and designed by Caila Jenine Ruado. Private invitation only.
        </footer>
      </div>

    </main>
  );
};

export default App;