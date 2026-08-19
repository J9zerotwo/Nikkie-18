import React, { useState, useEffect } from 'react';

export const CountdownSection: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setHasPassed(false);
      } else {
        setHasPassed(true);
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="pt-2 sm:pt-4 pb-8 sm:pb-12 bg-gradient-to-r from-[#FDDACD]/50 via-[#FCE4DC]/50 to-[#F9BDB7]/40 border-y border-[#F5A8A1]/40">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif italic text-2xl sm:text-3xl text-[#4A1525] mb-4 sm:mb-6 tracking-wide font-bold">
          Counting Down to the Magical Day
        </h2>

        {hasPassed ? (
          <div className="p-6 bg-white/80 rounded-2xl border border-amber-300 max-w-md mx-auto shadow-sm">
            <p className="font-serif italic text-xl text-[#4A1525] font-bold">✨ The Celebration Has Arrived! ✨</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2.5 sm:gap-6 max-w-lg mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="p-2.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#F5A8A1]/50 shadow-sm">
                <span className="block font-serif text-xl sm:text-3xl font-bold text-[#4A1525]">{value}</span>
                <span className="text-[9px] sm:text-xs uppercase tracking-wider text-[#881337] font-semibold">{unit}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};