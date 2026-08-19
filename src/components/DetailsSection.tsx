import React, { useState } from 'react';
import { MapPin, Maximize2, Minimize2 } from 'lucide-react';

export const DetailsSection: React.FC = () => {
  // In-place expand states for photos
  const [isVenueExpanded, setIsVenueExpanded] = useState(false);
  const [isProgramExpanded, setIsProgramExpanded] = useState(false);
  const [isOutfitExpanded, setIsOutfitExpanded] = useState(false);

  // 1. HEADER CORNER & CROWN PNG ASSETS:
  const crownImageUrl = "/crown.png";         
  const leftCornerImageUrl = "/flower-left.png";   
  const rightCornerImageUrl = "/flower-right.png"; 

  // 2. VENUE DETAILS & MEDIA ASSETS:
  const venueName = "The Clubhouse at One Balete ";
  const receptionTime = "5:00 PM";
  const address = "One Balete Compound, 1 Balete Drive Corner N. Domingo Avenue, New Manila, Quezon City, Philippines, 1112";
  const mapUrl = "https://www.google.com/maps/place/One+Balete/@14.6142341,121.035919,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b7426b5aaf93:0xd70ff0ea58078566!8m2!3d14.6142341!4d121.0384939!16s%2Fg%2F11fm6qjdyy?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D";

  const logoImage = "/logo.png"; 
  const venuePhoto = "/place.png";   
  const locationBgImage = "/mix.png"; 

  // 3. PROGRAM SCHEDULE & OUTFIT PHOTOS:
  const programImage = "/program.png"; 
  const outfitImage = "/outfit.png"; 
  const outfitPadding = "p-2 sm:p-4"; 

  return (
    <section id="details" className="py-12 sm:py-16 px-3 sm:px-6 bg-gradient-to-b from-[#FFF5F7] via-[#FCE7F3]/60 to-[#F43F5E]/10">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* 1. RECEPTION & LOCATION GUIDE CARD */}
        <div 
          className="relative rounded-3xl bg-cover bg-center border-2 border-amber-300/60 shadow-2xl overflow-hidden p-4 sm:p-10 pb-8 sm:pb-12 mb-10 sm:mb-12 text-pink-950 flex flex-col items-center"
          style={{ backgroundImage: `url('${locationBgImage}')` }}
        >
          {/* Floating Lantern Accents */}
          <div className="absolute top-4 left-4 sm:left-8 w-6 sm:w-8 h-8 sm:h-10 bg-amber-300/80 rounded-md blur-[1px] animate-pulse pointer-events-none" />
          <div className="absolute top-8 right-6 sm:right-12 w-8 sm:w-10 h-10 sm:h-12 bg-amber-300/80 rounded-md blur-[1px] animate-pulse pointer-events-none" />

          {/* Location Guide Header Pill */}
          <div className="relative inline-block mb-6 sm:mb-8 mt-4 z-20 max-w-[90vw]">
            {crownImageUrl && (
              <img
                src={crownImageUrl}
                alt="Crown Accent"
                className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 sm:h-16 w-16 z-20"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            )}

            <div className="relative z-10 px-6 sm:px-14 py-2 sm:py-3 bg-white/95 backdrop-blur-md rounded-full border-2 border-amber-300/80 shadow-lg flex items-center justify-center">
              <h2 className="font-serif text-sm sm:text-2xl text-[#4A1525] font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] whitespace-nowrap">
                LOCATION GUIDE
              </h2>
            </div>

            {leftCornerImageUrl && (
              <img
                src={leftCornerImageUrl}
                alt="Left Corner Asset"
                className="absolute -bottom-2 sm:-bottom-3 -left-3 sm:-left-8 h-10 sm:h-16 w-auto z-20 pointer-events-none drop-shadow-sm object-contain"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            )}

            {rightCornerImageUrl && (
              <img
                src={rightCornerImageUrl}
                alt="Right Corner Asset"
                className="absolute -bottom-2 sm:-bottom-3 -right-3 sm:-right-8 h-10 sm:h-16 w-auto z-20 pointer-events-none drop-shadow-sm object-contain"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            )}
          </div>

          {/* Reception Content Row */}
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8">
            <div className="p-2.5 sm:p-3 rounded-2xl flex-shrink-0">
              <img
                src={logoImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(mapUrl)}`;
                }}
                alt="Company Logo"
                className="w-28 h-28 sm:w-36 sm:h-36 object-contain rounded-lg"
              />
            </div>

            <div className="flex-1 flex items-center justify-center space-x-2 sm:space-x-4 text-white w-full">
              <div className="w-0.5 sm:w-1 bg-amber-300/80 rounded-full h-20 sm:h-28 flex-shrink-0" />

              <div className="text-center space-y-1 sm:space-y-1.5 max-w-xs px-1">
                <p className="font-serif font-bold text-[11px] sm:text-sm tracking-[0.16em] sm:tracking-[0.2em] text-amber-200 uppercase">
                  {receptionTime}
                </p>

                <h3 className="font-serif italic text-xl sm:text-3xl text-white font-bold drop-shadow-sm leading-snug">
                  {venueName}
                </h3>

                <p className="font-serif italic text-[11px] sm:text-xs text-pink-100/90 leading-tight">
                  {address}
                </p>

                <div className="pt-1">
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-[11px] sm:text-xs font-serif uppercase tracking-[0.18em] font-bold text-amber-200 hover:text-white transition-colors border-b border-amber-300/80 pb-0.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-300 text-white" />
                    <span>View Map</span>
                  </a>
                </div>
              </div>

              <div className="w-0.5 sm:w-1 bg-amber-300/80 rounded-full h-20 sm:h-28 flex-shrink-0" />
            </div>

            {/* Venue Photo */}
            <div 
              onClick={() => setIsVenueExpanded(!isVenueExpanded)}
              className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-xl border-2 border-white/80 transition-all duration-300 ${
                isVenueExpanded 
                  ? 'w-full max-w-lg h-auto my-2' 
                  : 'w-56 sm:w-64 h-40 sm:h-56'
              }`}
            >
              <img
                src={venuePhoto}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600";
                }}
                alt="Venue Photo"
                className={`w-full ${isVenueExpanded ? 'h-auto max-h-[70vh] object-contain' : 'h-full object-cover'}`}
              />
              <div className="absolute bottom-2 right-2 p-1.5 bg-[#4A1525]/80 text-amber-200 rounded-full backdrop-blur-md shadow-md flex items-center space-x-1 text-[10px]">
                {isVenueExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                <span>{isVenueExpanded ? 'Shrink' : 'Expand'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. GRAND PROGRAM SCHEDULE (Fixed Overflow on Expansion) */}
        <div className="p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md text-center mb-10 sm:mb-12 overflow-hidden">
            <h3 className="font-serif text-xl sm:text-2xl text-[#4A1525] font-bold">Grand Program Schedule</h3>
            <p className="text-[11px] sm:text-xs text-[#881337] font-serif italic mt-1">The evening sequence of events • Tap image to expand</p>

          <div 
            onClick={() => setIsProgramExpanded(!isProgramExpanded)}
            className="relative w-full items-center justify-center transition-all duration-300 p-1 sm:p-3"
          >
            <img
              src={programImage}
              alt="Grand Program Schedule"
              className={`w-full transition-all duration-500 rounded-xl drop-shadow-sm object-contain ${
                isProgramExpanded 
                  ? 'h-auto max-h-none scale-100' 
                  : 'h-auto max-h-[380px] sm:max-h-[500px] scale-100'
              }`}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />

            <div className="absolute bottom-3 right-3 p-2 px-3 bg-[#4A1525]/85 text-amber-200 rounded-full backdrop-blur-md shadow-lg flex items-center space-x-1.5 text-xs font-serif italic z-10">
              {isProgramExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span>{isProgramExpanded ? 'Tap to Shrink' : 'Tap to Expand'}</span>
            </div>
          </div>
        </div>

        {/* 3. DRESS CODE & COLOR PALETTE CARD */}
        <div className="p-4 sm:p-8 rounded-3xl bg-white/95 text-center mb-10 sm:mb-12 overflow-hidden">
            <h3 className="font-serif text-xl sm:text-2xl text-[#4A1525] font-bold">Dress Code & Color Palette</h3>
            <p className="text-[11px] sm:text-xs text-[#881337] font-serif italic mt-1">Kindly adhere strictly to our celebration attire guide • Tap image to expand</p>

          <div 
            onClick={() => setIsOutfitExpanded(!isOutfitExpanded)}
            className={`relative w-full flex items-center justify-center cursor-pointer transition-all duration-300 ${outfitPadding}`}
          >
            <img
              src={outfitImage}
              alt="Attire Color Palette Guide"
              className={`w-full transition-all duration-500 rounded-xl drop-shadow-sm object-contain ${
                isOutfitExpanded 
                  ? 'h-auto max-h-none scale-100' 
                  : 'h-auto max-h-[280px] sm:max-h-[480px] scale-100'
              }`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800";
              }}
            />

            <div className="absolute bottom-3 right-3 p-2 px-3 bg-[#4A1525]/85 text-amber-200 rounded-full backdrop-blur-md shadow-lg flex items-center space-x-1.5 text-xs font-serif italic z-10">
              {isOutfitExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span>{isOutfitExpanded ? 'Tap to Shrink' : 'Tap to Expand'}</span>
            </div>
          </div>
        </div>

        {/* 4. COURT ETIQUETTE & GUIDE */}
        <div className="p-6 sm:p-10 rounded-[32px] bg-white/95 backdrop-blur-md border-2 shadow-2xl text-center max-w-2xl mx-auto relative">
          <div className="flex justify-center items-center space-x-2 text-amber-500 mb-1">
            <span className="text-xs">✦</span>
            <span className="text-sm">⚜</span>
            <span className="text-xs">✦</span>
          </div>

          <p className="font-serif text-[10px] sm:text-xs text-amber-700 font-bold uppercase tracking-[0.25em] mb-1">
            Court Etiquette & Guide
          </p>

          <h3 className="font-serif italic text-2xl sm:text-4xl text-[#4A1525] font-bold mb-6">
            A Gentle Note for Our Guests
          </h3>

          <div className="space-y-4 text-xs sm:text-sm text-[#4A1525] font-serif leading-relaxed">
            <div className="pb-4 border-b border-pink-100/90">
              <p className="text-[#881337] font-semibold">
                Please avoid arriving late, especially those who <span className="font-bold">are part of the 18 traditions</span>.
              </p>
            </div>

            <div className="pb-4 border-b border-pink-100/90">
              <p>
                Guests are graciously requested to arrive at <span className="font-bold text-[#881337] text-sm sm:text-base">5:00 PM</span>.
              </p>
            </div>

            <div className="pb-4 border-b border-pink-100/90">
              <p>
                This celebration is prepared with care for our invited guests only. <span className="font-bold text-[#881337]">We kindly request that you refrain from bringing uninvited guests</span> to ensure a comfortable and enjoyable experience for everyone.
              </p>
            </div>

            <div className="pb-4 border-b border-pink-100/90">
              <p>
                We kindly request guests to adhere to the <span className="font-bold text-[#881337]">prescribed dress code</span> and <span className="font-bold text-[#881337]">arrive on time</span> to honor the program.
              </p>
            </div>

            <div className="pb-2">
              <p>
                Your presence is truly appreciated. <span className="font-bold text-[#881337]">If you wish to give a gift</span>, let it be something that carries a <span className="font-bold text-[#881337]">reminder of the debutante, Nikkie</span>, in your thoughts and comes from the heart.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-pink-200">
            <p className="font-serif text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#881337] uppercase">
              WE LOOK FORWARD TO CELEBRATING THIS SPECIAL DAY WITH YOU!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};