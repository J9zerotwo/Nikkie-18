/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Compass, Landmark, Flame, Stars } from "lucide-react";

interface HeaderProps {
  onRSVPClick?: () => void;
}

export default function HeaderNav({ onRSVPClick }: HeaderProps) {
  const handleRSVPAction = () => {
    if (onRSVPClick) {
      onRSVPClick();
    } else {
      const rsvpEl = document.getElementById("rsvp");
      if (rsvpEl) {
        rsvpEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "#rsvp";
      }
    }
  };

  const navLinks = [
    { name: "Invitation", href: "#hero"},
    { name: "Venue", href: "#details"},
    { name: "Program", href: "#program"},
    { name: "Gallery", href: "#gallery"},
  ];

  return (
    /* FIXED POSITIONING: Stays pinned to the top of the screen during scrolling */
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-[#FFF0EA]/10 via-[#FFE3D8]/60 to-[#FDDACD] backdrop-blur-md border-b border-[#F5A8A1]/60 shadow-[0_4px_20px_rgba(244,63,94,0.12)] transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12 py-2 sm:py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2">
        
        {/* Top Row on Mobile: Logo + Mobile RSVP Button */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <a href="#hero" className="flex flex-col flex-shrink-0">
            <span className="text-2xl sm:text-3xl md:text-4xl text-rose-300 tracking-wide leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}> Nikkie Dullate </span>
            <span className="font-allura text-[8px] sm:text-[10px] md:text-xs text-amber-600 tracking-[0.14em] uppercase font-bold"> An Evening of Elegance & Enchantment </span>
          </a>

          {/* Mobile RSVP Button */}
          <button
            onClick={handleRSVPAction}
            className="sm:hidden bg-rose-50/70 text-rose-900 font-serif text-[10px] uppercase tracking-[0.14em] font-bold px-3 py-1.5 rounded-full shadow-md active:scale-95 transition-all border border-amber-300/40 whitespace-nowrap"
          >
            Confirm RSVP
          </button>
        </div>

        {/* Navigation Links Bar (Fully visible on Mobile & Desktop) */}
        <nav className="flex items-center space-x-1 sm:space-x-3 md:space-x-6 overflow-x-auto no-scrollbar py-0.5 w-full sm:w-auto justify-start sm:justify-center">
          {navLinks.map((link) => {
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-1 font-serif text-[11px] sm:text-xs md:text-sm uppercase tracking-wider text-rose-900/90 hover:text-rose-950 hover:bg-rose-100/70 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-300 font-medium whitespace-nowrap"
              >
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop RSVP Action Button */}
        <div className="hidden sm:flex items-center flex-shrink-0">
          <button
            onClick={handleRSVPAction}
            id="rsvp-nav-btn"
            className="relative overflow-hidden bg-rose-50/70 text-rose-900 font-serif text-xs uppercase tracking-[0.15em] font-bold px-5 py-2.5 rounded-full hover:bg-rose-100/70 shadow-md active:scale-95 transition-all duration-300 border border-amber-300/40 whitespace-nowrap"
          >
            <span className="relative z-10">Confirm RSVP</span>
          </button>
        </div>

      </div>
    </header>
  );
}