import React, { useMemo } from 'react';

interface FloatingLanternsProps {
  lanternImageUrl?: string;
}

export const FloatingLanterns: React.FC<FloatingLanternsProps> = React.memo(({
  lanternImageUrl = "/lantern.png" 
}) => {
  // Memoize random values so state changes (like music toggle) don't reset animations
  const lanternsData = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 12 + Math.random() * 10,
      delay: Math.random() * 10,
      size: 30 + Math.random() * 30,
      opacity: 0.25 + Math.random() * 0.35, // <-- Low semi-transparency (25% to 60%)
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {lanternsData.map((lantern) => (
        <img
          key={lantern.id}
          src={lanternImageUrl}
          alt="Floating Lantern"
          className="absolute animate-lantern drop-shadow-[0_0_12px_rgba(251,191,36,0.6)] object-contain"
          style={{
            left: `${lantern.left}%`,
            bottom: '-80px',
            width: `${lantern.size}px`,
            height: 'auto',
            // Pass the opacity variable to CSS keyframes
            ['--lantern-opacity' as any]: lantern.opacity,
            animationDuration: `${lantern.animationDuration}s`,
            animationDelay: `${lantern.delay}s`,
          }}
        />
      ))}
    </div>
  );
});