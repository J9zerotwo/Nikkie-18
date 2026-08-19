import React from 'react';

interface HeroProps {
  name?: string;
  date?: string;
  subtitle?: string;
}

export const HeroSection: React.FC<HeroProps> = ({
   date,
}) => {
  const image = '/main.png';

  return (
    <section
      id="hero"
      className="relative pt-24 sm:px-6 flex flex-col items-center justify-start bg-gradient-to-b from-[#FDDACD] via-[#FCE7F3]/60 to-[#FFE3D8]/10 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-lg sm:max-w-xl text-center">
        <img
          src={image}
          alt="Debut celebration"
          className="mx-auto w-full h-auto object-containl"
        />
      </div>
    </section>
  );
};