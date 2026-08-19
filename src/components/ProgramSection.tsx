import React from 'react';

export const ProgramSection: React.FC = () => {
  
  // Custom Border Frame
  const cardBorderImage = "/flower border.png"; 

  // PORTRAIT BACKGROUND IMAGES 
  const rosesBgImage = "/paper.png"; 
  const candlesBgImage = "/paper.png"; 
  const treasuresBgImage = "/paper.png"; 

  // 18 ROSES NAMES 
  const roses = [
    "Raymond Dullate",
    "Allan Dullate",
    "Xavier San Diego",
    "Simon Dullate",
    "Miggy Fadul",
    "Raf Reynes",
    "Tristan Yap",
    "Harry Bismonte", 
    "Marcus Lagman",
    "Wilson Jhon Dee",
    "Sean Prado",
    "Ashton Abaya",
    "Bennett Morales",
    "Emmanuel Fidelson",
    "Marko Benson",
    "Alex Perilla",
    "Sir Jun Llanillo",
    "Daddy Ryan Dullate",
  ];

  // 18 CANDLES NAMES 
  const candles = [
    "Zeny Dullate",
    "Via San Diego",
    "Ms. Krisha Gois",
    "Sir. Christian Nicanor",
    "Zhyreen Legaspi",
    "Rhyz Macaspac",
    "Precious Artates",
    "Anyah Michaella",
    "Shaniah Naparam",
    "Trisha Nicolas",
    "Marko Benson",
    "Mary Althea Trani",
    "Shelemiah Santiago",
    "Princess Idica",
    "Alexandria Mariz De Guzman",
    "Alexa Cavas",
    "Marcuisha Matthea",
    "Trisha Ruado"
  ];

  // 18 TREASURES NAMES 
  const treasures = [
    "Elisse Julianne",
    "Shobe Camus",
    "Trisha Lipago",
    "Faith Arcenal",
    "Rhyz Macaspac",
    "Ashley Saldivar",
    "Alexandra Paliza",
    "Elizah Endrada",
    "Trisha Ruado",
    "Marcuisha Matthea",
    "Alexandria Mariz De Guzman",
    "Aareca Legaspi",
    "Mary Althea Trani",
    "Shelemiah Santiago",
    "Marko Benson",
    "Tania Evasco",
    "Hailey Dullate",
    "Seth Dullate"
  ];

  // 18 ENVELOPES AND SHOTS NAMES 
  const envelopesAndShots = [
    "Sylvia San Diego", 
    "Elizabeth Dullate",
    "Carol Macabingkil",
    "Chelsey Gacutan",
    "Iya Andrada",
    "Mary Jane Nicolas",
    "Carol Dullate",
    "Ann Pattugalan",
    "Mama Zenaida Dullate",
    "Charito Andrada",
    "Rosemarie Nicolas",
    "Charlie Fernandez",
    "Dave Aguirre",
    "Raymond Dullate",
    "Nechaell Trangia",
    "Mommy Tin Dullate"
  ];

  return (
    <section id="program" className="py-10 sm:py-20 px-3 sm:px-6 bg-gradient-to-b from-[#FFF0EA]/10 via-[#FFE3D8]/60 to-[#FDDACD]">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-rose-950 mb-2">
          The Enchanted Court
        </h2>
        <p className="text-rose-800 text-[11px] sm:text-sm font-serif tracking-widest uppercase mb-8 sm:mb-12">
          The Eighteen Honorees
        </p>

        {/* 4 Portrait Card Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 text-center">
          
          {/* PORTRAIT CARD 1: 18 Roses */}
          <div 
            className="relative rounded-2xl sm:rounded-3xl shadow-2xl min-h-[720px] sm:min-h-[780px] flex flex-col justify-between bg-cover bg-center text-center overflow-hidden"
            style={{ backgroundImage: `url('${rosesBgImage}')` }}
          >
            {/* Frame Overlay */}
            {cardBorderImage && (
              <img
                src={cardBorderImage}
                alt="Border Frame"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none z-30"
              />
            )}

            <div className="relative z-20 w-full h-full px-8 sm:px-14 pt-12 sm:pt-16 pb-12 sm:pb-16 flex flex-col justify-between text-center">
              
              {/* Lighter Title Badge */}
              <div className="bg-white/70 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border border-pink-200/80 shadow-xs mb-2 sm:mb-3 text-center max-w-[85%] mx-auto">
                <h3 className="font-serif text-base sm:text-xl text-rose-950 font-bold text-center leading-tight">18 Roses</h3>
              </div>

              {/* Lighter Name Rows (bg-white/60) & Adjusted Padding (py-0.5 sm:py-1) */}
              <div className="space-y-1 flex-1 flex flex-col justify-center my-auto">
                {roses.map((name, idx) => (
                  <div key={idx} className="py-0.5 sm:py-1 px-2 sm:px-3 rounded-lg sm:rounded-xl bg-white/60 backdrop-blur-xs border border-pink-200/60 text-rose-950 text-[12px] sm:text-xs flex items-center justify-center space-x-1.5 shadow-2xs hover:bg-white/80 transition-colors text-center">
                    <span className="font-mono text-amber-700 font-bold text-[9px] sm:text-xs flex-shrink-0"></span>
                    <span className="font-serif italic font-semibold truncate text-center max-w-[85%]">{name}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* PORTRAIT CARD 2: 18 Candles */}
          <div 
            className="relative rounded-2xl sm:rounded-3xl shadow-2xl min-h-[720px] sm:min-h-[780px] flex flex-col justify-between bg-cover bg-center text-center overflow-hidden"
            style={{ backgroundImage: `url('${candlesBgImage}')` }}
          >
            {cardBorderImage && (
              <img
                src={cardBorderImage}
                alt="Border Frame"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none z-30"
              />
            )}

            <div className="relative z-20 w-full h-full px-8 sm:px-14 pt-12 sm:pt-16 pb-12 sm:pb-16 flex flex-col justify-between text-center">
              <div className="bg-white/70 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border border-pink-200/80 shadow-xs mb-2 sm:mb-3 text-center max-w-[85%] mx-auto">
                <h3 className="font-serif text-base sm:text-xl text-rose-950 font-bold text-center leading-tight">18 Candles</h3>
              </div>

              <div className="space-y-1 flex-1 flex flex-col justify-center my-auto">
                {candles.map((name, idx) => (
                  <div key={idx} className="py-0.5 sm:py-1 px-2 sm:px-3 rounded-lg sm:rounded-xl bg-white/60 backdrop-blur-xs border border-pink-200/60 text-rose-950 text-[12px] sm:text-xs flex items-center justify-center space-x-1.5 shadow-2xs hover:bg-white/80 transition-colors text-center">
                    <span className="font-mono text-amber-700 font-bold text-[9px] sm:text-xs flex-shrink-0"></span>
                    <span className="font-serif italic font-semibold truncate text-center max-w-[85%]">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PORTRAIT CARD 3: 18 Treasures */}
          <div 
            className="relative rounded-2xl sm:rounded-3xl shadow-2xl min-h-[720px] sm:min-h-[780px] flex flex-col justify-between bg-cover bg-center text-center overflow-hidden"
            style={{ backgroundImage: `url('${treasuresBgImage}')` }}
          >
            {cardBorderImage && (
              <img
                src={cardBorderImage}
                alt="Border Frame"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none z-30"
              />
            )}

            <div className="relative z-20 w-full h-full px-8 sm:px-14 pt-12 sm:pt-16 pb-12 sm:pb-16 flex flex-col justify-between text-center">
              <div className="bg-white/70 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border border-pink-200/80 shadow-xs mb-2 sm:mb-3 text-center max-w-[85%] mx-auto">
                <h3 className="font-serif text-base sm:text-xl text-rose-950 font-bold text-center leading-tight">18 Treasures</h3>
              </div>

              <div className="space-y-1 flex-1 flex flex-col justify-center my-auto">
                {treasures.map((name, idx) => (
                  <div key={idx} className="py-0.5 sm:py-1 px-2 sm:px-3 rounded-lg sm:rounded-xl bg-white/60 backdrop-blur-xs border border-pink-200/60 text-rose-950 text-[12px] sm:text-xs flex items-center justify-center space-x-1.5 shadow-2xs hover:bg-white/80 transition-colors text-center">
                    <span className="font-mono text-amber-700 font-bold text-[9px] sm:text-xs flex-shrink-0"></span>
                    <span className="font-serif italic font-semibold truncate text-center max-w-[85%]">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PORTRAIT CARD 4: 18 Envelopes and Shots */}
          <div 
            className="relative rounded-2xl sm:rounded-3xl shadow-2xl min-h-[720px] sm:min-h-[780px] flex flex-col justify-between bg-cover bg-center text-center overflow-hidden"
            style={{ backgroundImage: `url('${treasuresBgImage}')` }}
          >
            {cardBorderImage && (
              <img
                src={cardBorderImage}
                alt="Border Frame"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none z-30"
              />
            )}

            <div className="relative z-20 w-full h-full px-8 sm:px-14 pt-12 sm:pt-16 pb-12 sm:pb-16 flex flex-col justify-between text-center">
              <div className="bg-white/70 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border border-pink-200/80 shadow-xs mb-2 sm:mb-3 text-center max-w-[85%] mx-auto">
                <h3 className="font-serif text-base sm:text-xl text-rose-950 font-bold text-center leading-tight">18 Envelopes and Shots</h3>
              </div>

              <div className="space-y-1 flex-1 flex flex-col justify-center my-auto">
                {envelopesAndShots.map((name, idx) => (
                  <div key={idx} className="py-0.5 sm:py-1 px-2 sm:px-3 rounded-lg sm:rounded-xl bg-white/60 backdrop-blur-xs border border-pink-200/60 text-rose-950 text-[12px] sm:text-xs flex items-center justify-center space-x-1.5 shadow-2xs hover:bg-white/80 transition-colors text-center">
                    <span className="font-mono text-amber-700 font-bold text-[9px] sm:text-xs flex-shrink-0"></span>
                    <span className="font-serif italic font-semibold truncate text-center max-w-[85%]">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};