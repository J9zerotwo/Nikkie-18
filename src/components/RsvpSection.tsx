import React from 'react';
import { ExternalLink } from 'lucide-react';

export const RsvpSection: React.FC = () => {

  // EDIT YOUR EXTERNAL RSVP FORM LINK HERE (e.g. Google Form link):

  const rsvpLink = "https://nikkie-rsvp.vercel.app/";

  return (
    <section id="rsvp" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FFF0EA]/10 via-[#FFE3D8]/60 to-[#FDDACD]">
      <div className="max-w-xl mx-auto p-6 sm:p-10 rounded-[36px] bg-white/90 backdrop-blur-md border-2 border-amber-300/70 shadow-2xl text-center relative overflow-hidden">
        
        {/* Top Court Sub-Header */}
        <p className="font-serif text-[10px] sm:text-xs text-amber-700 font-bold uppercase tracking-[0.25em] mb-1">
          Registry Office of the Royal Court
        </p>

        {/* Main Title */}
        <h2 className="font-serif italic text-3xl sm:text-5xl text-rose-950 font-bold mb-3 leading-tight">
          Confirm Your Attendance
        </h2>

        {/* Subtext */}
        <p className="font-serif italic text-xs sm:text-sm text-rose-900/90 leading-relaxed max-w-md mx-auto mb-6">
          To grace this special occasion, we kindly request that you secure your seat at <span className="font-bold">Nikkie's 18th birthday celebration</span> by submitting your RSVP online.
        </p>

        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />

        {/* ASSEMBLY ADMISSION RULES CARD */}
        <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/70 border border-pink-200/80 text-left mb-6 shadow-inner space-y-4">
          <p className="font-serif text-xs text-amber-800 font-bold uppercase tracking-[0.2em] text-center border-b border-pink-200/60 pb-2">
            Assembly Admission Rules
          </p>

          <div className="text-xs text-rose-950 leading-relaxed space-y-1">
            <p><span className="font-serif font-bold text-rose-900">Confirm Online:</span> Fill out the form in the link to confirm your attendance before the deadline.</p>
          </div>

          <div className="text-xs text-rose-950 leading-relaxed space-y-1">
            <p><span className="font-serif font-bold text-rose-900">Dress Beautifully:</span> Kindly adhere strictly to the semi-formal attire palette of pastel blue, pastel yellow, and beige.</p>
          </div>
        </div>

        {/* "PROCEED TO RSVP" LINK BUTTON */}
        <a
          href={rsvpLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs mx-auto py-3.5 px-8 bg-rose-50/70 text-rose-900 text-amber-100 font-serif text-xs uppercase tracking-[0.2em] font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-300/50 cursor-pointer flex items-center justify-center space-x-2 group"
        >
          <span>Proceed To RSVP</span>
          <ExternalLink className="w-3.5 h-3.5 text-rose-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

      </div>
    </section>
  );
};