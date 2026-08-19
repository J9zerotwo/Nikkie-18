import React, { useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  // Track which gallery photo is expanded in place
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const images = [
    '/oap.png',
    '/ss.png',
    '/ooc.png',
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-[#FFE3D8] via-[#F8C8BC]/50 to-[#FCE4DC]">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Title */}
        <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-rose-950 mb-2">
          Pre-Debut Gallery
        </h2>
        <p className="text-rose-800 text-xs sm:text-sm font-serif tracking-widest uppercase mb-10 sm:mb-12">
          A Mosaic of Fairytale Moments • Tap Photo to Expand
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8 items-center justify-items-center">
          {images.map((imgUrl, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <div 
                key={i} 
                onClick={() => toggleExpand(i)}
                className={`relative w-full transition-all duration-500 flex items-center justify-center cursor-pointer group active:scale-98 ${
                  isExpanded ? 'w-[96vw] max-w-3xl -mx-2 sm:mx-auto my-4 z-20' : 'max-w-sm sm:max-w-md'
                }`}
              >
                {imgUrl && (
                  <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl p-1">
                    <img
                      src={imgUrl}
                      alt={`Gallery photo ${i + 1}`}
                      className={`w-full transition-all duration-500 rounded-xl drop-shadow-md ${
                        isExpanded
                          ? 'h-auto max-h-none object-contain scale-105 sm:scale-100'
                          : 'h-auto max-h-[280px] sm:max-h-[480px] object-contain group-hover:brightness-105'
                      }`}
                    />
                    
                    {/* In-Place Expand/Shrink Badge */}
                    <div className="absolute bottom-0.5 right-0.5 p-0.5 px-0.5 bg-[#4A1525]/85 text-amber-100 rounded-full backdrop-blur-md shadow-lg flex items-center space-x-1.5 text-xs font-serif italic">
                      {isExpanded ? (
                        <>
                          <Minimize2 className="w-1.5 h-1.5" />
                          <span>Tap to Shrink</span>
                        </>
                      ) : (
                        <>
                          <Maximize2 className="w-1.5 h-1.5" />
                          <span>Tap to Expand</span>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};