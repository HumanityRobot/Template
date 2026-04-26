"use client";

import React, { useState, useEffect } from 'react';
import { 
  Waves, Anchor, Navigation, Compass, 
  Map, Heart, Calendar, Clock, 
  MailOpen, Copy, Check, Music,
  Wind, Ship
} from 'lucide-react';

export const placeholderImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export default function TemplateMessageInABottle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-04-26T09:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-[#f2e9d9] text-[#4a3f35] font-serif min-h-screen overflow-x-hidden selection:bg-[#a68b6d] selection:text-white">
      
      {!isOpen ? (
        /* 1. COVER: BOTTLE FLOATING ON WAVES */
        <section className="fixed inset-0 z-[9999] bg-gradient-to-b from-[#87ceeb] via-[#1e90ff] to-[#000080] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
          {/* Animated Waves Background */}
          <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30 animate-pulse">
            <Waves className="w-full h-full text-white" />
          </div>

          <div className="relative z-10 space-y-12 animate-in fade-in zoom-in duration-1000">
            <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
               {/* Bottle Silhouette */}
               <div className="w-24 h-48 md:w-32 md:h-64 border-4 border-white/40 rounded-t-full rounded-b-3xl relative mx-auto bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                  <div className="w-16 h-40 bg-[#d4af37]/20 rounded-lg animate-bounce flex flex-col items-center justify-center">
                    <MailOpen className="text-white mb-2" size={32} />
                    <span className="text-[10px] text-white font-sans font-bold uppercase tracking-widest">Open Me</span>
                  </div>
                  {/* Cork */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#8b4513] rounded-t-sm shadow-inner" />
               </div>
               <div className="mt-8 text-white space-y-2">
                 <h2 className="text-2xl font-light italic tracking-widest">A Message has drifted ashore...</h2>
                 <p className="text-xs opacity-70 font-sans tracking-[0.3em] uppercase">The Wedding of Sahril & Partner</p>
               </div>
            </div>
          </div>
        </section>
      ) : (
        <main className="max-w-xl mx-auto pb-24 relative animate-in slide-in-from-bottom-20 duration-1000">
          
          {/* 2. THE SCROLL (Undangan Kertas Kuno) */}
          <div className="m-4 md:m-8 bg-[#fdfaf1] shadow-[0_0_50px_rgba(0,0,0,0.1)] rounded-sm relative overflow-hidden border border-[#e5dcc3]">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')]" />
            
            {/* Header: Nautical Compass */}
            <section className="pt-16 pb-8 text-center space-y-4">
              <Compass size={40} className="mx-auto text-[#a68b6d] animate-[spin_10s_linear_infinite]" />
              <div className="space-y-1 px-8">
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#a68b6d] font-sans font-bold">Coordinates of Love</span>
                <h1 className="text-4xl font-normal italic text-[#2c2621]">Sahril & Partner</h1>
              </div>
            </section>

            {/* 3. HERO IMAGE: POLAROID STYLE */}
            <section className="px-8 py-4">
               <div className="bg-white p-3 shadow-md rotate-2 border border-gray-100">
                  <div className="aspect-square bg-gray-200 overflow-hidden relative">
                    <img src={placeholderImg} className="w-full h-full object-cover sepia-[0.3]" alt="The Duo" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <p className="text-center mt-4 font-sans text-xs italic text-gray-400">Captured in time, 2026</p>
               </div>
            </section>

            {/* 4. CONTENT: THE JOURNEY */}
            <section className="py-12 px-10 text-center space-y-8">
              <p className="text-sm md:text-base leading-relaxed italic text-[#5c5043]">
                "Across the vast ocean of life, our paths have finally crossed. We invite you to witness the day our separate voyages become one shared journey."
              </p>
              
              <div className="h-px w-24 bg-[#a68b6d] mx-auto opacity-30" />

              {/* Event Details */}
              <div className="space-y-10">
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-[#a68b6d]">
                    <Anchor size={18} />
                    <span className="text-xs font-sans font-black uppercase tracking-widest">Dropping Anchor</span>
                  </div>
                  <h2 className="text-2xl font-light">Sunday, April 26</h2>
                  <p className="text-sm font-sans tracking-wide">2026</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center pt-4">
                  <div className="space-y-2">
                    <p className="text-xs font-sans font-bold uppercase text-[#a68b6d]">The Vow</p>
                    <p className="text-lg">Akad Nikah</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                      <Clock size={12} /> 09:00 AM
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-sans font-bold uppercase text-[#a68b6d]">The Feast</p>
                    <p className="text-lg">Reception</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                      <Clock size={12} /> 01:00 PM
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                   <Navigation size={24} className="mx-auto text-[#a68b6d]" />
                   <p className="text-sm leading-relaxed">
                     <span className="font-bold">Hotel Mulia, Jakarta</span><br />
                     Senayan, Central Jakarta
                   </p>
                   <button className="inline-flex items-center gap-2 px-6 py-2 border border-[#a68b6d] rounded-full text-[10px] uppercase tracking-widest font-sans hover:bg-[#a68b6d] hover:text-white transition-all shadow-sm">
                     <Map size={14} /> Open Sea Map
                   </button>
                </div>
              </div>
            </section>

            {/* 5. COUNTDOWN: NAUTICAL THEME */}
            <section className="bg-[#f4eee0] py-12 px-6 border-y border-[#e5dcc3]">
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(timeLeft).map(([unit, val]) => (
                  <div key={unit} className="text-center">
                    <p className="text-2xl font-light text-[#2c2621]">{val}</p>
                    <p className="text-[8px] font-sans font-bold uppercase text-[#a68b6d] tracking-widest">{unit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. GIFT: TREASURE CHEST */}
            <section className="p-12 text-center space-y-8">
               <div className="space-y-2">
                  <h3 className="text-xl italic">The Treasure Chest</h3>
                  <p className="text-[10px] font-sans text-gray-400 uppercase tracking-[0.2em]">Digital Gift</p>
               </div>
               <div className="bg-white/50 border border-[#e5dcc3] p-6 rounded-sm space-y-4 max-w-xs mx-auto">
                  <p className="text-xs font-sans font-bold text-[#a68b6d]">BCA — 1234567890</p>
                  <p className="text-sm italic">Sahril R.</p>
                  <button 
                    onClick={() => copyToClipboard("1234567890")}
                    className="text-[10px] uppercase tracking-widest flex items-center gap-2 mx-auto hover:text-[#a68b6d] transition-colors"
                  >
                    {isCopied ? <Check size={14} /> : <Copy size={14} />} {isCopied ? "Stowed!" : "Copy Details"}
                  </button>
               </div>
            </section>

            {/* 7. RSVP: LOGBOOK STYLE */}
            <section className="p-12 bg-[#2c2621] text-[#fdfaf1]">
               <div className="text-center space-y-6">
                  <h3 className="text-2xl font-light italic">Sign the Logbook</h3>
                  <p className="text-[10px] font-sans text-gray-500 uppercase tracking-[0.3em]">Will you sail with us?</p>
                  <div className="space-y-4">
                    <input className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-white transition-colors" placeholder="Full Name" />
                    <button className="w-full bg-[#fdfaf1] text-[#2c2621] py-3 text-xs font-sans font-bold uppercase tracking-widest hover:bg-[#a68b6d] hover:text-white transition-all">
                      Confirm Attendance
                    </button>
                  </div>
               </div>
            </section>

            {/* Footer with Ship Icon */}
            <footer className="py-12 text-center space-y-4 bg-white/30">
               <Ship size={24} className="mx-auto opacity-20" />
               <p className="text-[10px] font-sans tracking-[0.5em] opacity-30 uppercase italic">S & P • April 26, 2026</p>
            </footer>
          </div>

          {/* FLOATING MUSIC */}
          <div className="fixed bottom-6 right-6 z-[110]">
             <button className="w-12 h-12 bg-[#2c2621] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
                <Music size={20} />
             </button>
          </div>

        </main>
      )}
    </div>
  );
}