import React from 'react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  const musicOnIcon = "/on.png";   // Image when music is PLAYING
  const musicOffIcon = "/off.png"; // Image when music is MUTED
  const iconSize = "w-10 h-10"; 

  return (
    <div className="fixed bottom-3 right-3 z-20">
      <button
        onClick={onToggle}
        className={`p-1 sm:p-1 rounded-full shadow-xl backdrop-blur-md border transition-all duration-100 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 ${
          isPlaying
            ? 'bg-pink-100/90 border-pink-300/60 pink-500/20'
            : 'bg-pink-100/90 border-pink-300/60 pink-500/20'
        }`}
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          /* MUSIC ON IMAGE */
          <img
            src={musicOnIcon}
            alt="Music Playing"
            className={`${iconSize} object-contain transition-transform duration-100`}
          />
        ) : (
          /* MUSIC OFF IMAGE */
          <img
            src={musicOffIcon}
            alt="Music Muted"
            className={`${iconSize} object-contain opacity-80 transition-transform duration-100`}
          />
        )}
      </button>
    </div>
  );
};