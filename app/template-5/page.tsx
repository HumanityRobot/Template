"use client";

import React, { useState, useEffect } from 'react';
import { 
  Play, Info, Plus, ChevronDown, Volume2, 
  Search, Home, Download, Menu, Star, 
  Calendar, MapPin, Clock, Gift, Send, Music 
} from 'lucide-react';

export default function TemplateNetflix() {
  const [isOpen, setIsOpen] = useState(false);
  const [muted, setMuted] = useState(false);

  // 8. COUNTDOWN LOGIC (Release Date)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-04-26T09:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const placeholderImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

  return (
    <div className="bg-[#141414] text-white font-sans min-h-screen overflow-x-hidden selection:bg-[#e50914] selection:text-white">
      
      {!isOpen ? (
        /* 1. COVER: NETFLIX PROFILE PICKER */
        <section className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center p-6">
          <h1 className="text-[#e50914] text-4xl font-bold mb-12 tracking-tighter uppercase">Loveflix</h1>
          <p className="text-xl mb-8">Who's watching the wedding?</p>
          <div className="grid grid-cols-2 gap-6 max-w-xs">
            <div onClick={() => setIsOpen(true)} className="group cursor-pointer text-center space-y-3">
              <div className="w-24 h-24 bg-blue-500 rounded-md flex items-center justify-center group-hover:ring-4 ring-white transition-all overflow-hidden">
                <img src={placeholderImg} className="w-full h-full object-cover opacity-50" />
              </div>
              <p className="text-gray-400 group-hover:text-white text-sm">Guest VIP</p>
            </div>
            <div className="group cursor-pointer text-center space-y-3 opacity-50">
              <div className="w-24 h-24 bg-gray-700 rounded-md flex items-center justify-center">
                <Plus size={40} className="text-gray-400" />
              </div>
              <p className="text-gray-400 text-sm">Add Guest</p>
            </div>
          </div>
          <button className="mt-20 border border-gray-500 px-6 py-2 text-gray-500 hover:text-white hover:border-white uppercase tracking-widest text-xs">
            Manage Profiles
          </button>
        </section>
      ) : (
        <main className="animate-in fade-in duration-1000">
          
          {/* TOP NAVBAR */}
          <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
            <h1 className="text-[#e50914] text-2xl font-bold tracking-tighter uppercase">Loveflix</h1>
            <div className="flex gap-6 items-center">
              <Search size={20} />
              <div className="w-8 h-8 bg-blue-500 rounded" />
            </div>
          </nav>

          {/* 2. QUOTE & 3. PROFIL: HERO BANNER */}
          <section className="relative h-[85vh] w-full flex items-end">
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40 z-10" />
            <div className="absolute inset-0 bg-gray-800">
               <img src={placeholderImg} className="w-full h-full object-cover opacity-40" />
            </div>
            
            <div className="relative z-20 p-6 md:p-16 space-y-6 max-w-2xl text-left">
              <div className="flex items-center gap-2">
                <img src="https://www.netflix.com/favicon.ico" className="w-4 h-4" />
                <span className="text-[10px] font-bold tracking-[.3em] uppercase text-gray-300">Original Series</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none italic">
                SAHRIL & PARTNER
              </h1>
              <div className="flex items-center gap-3 text-xs font-bold">
                <span className="text-green-500 font-bold">98% Match</span>
                <span className="border border-gray-500 px-1 text-[10px]">13+</span>
                <span>2026 Season</span>
                <span className="border border-gray-500 px-1 text-[10px]">Ultra HD 4K</span>
              </div>
              <p className="text-sm md:text-lg text-gray-300 line-clamp-3 italic">
                "And we created you in pairs." — A beautiful journey begins as two souls decide to merge their timelines into one epic masterpiece.
              </p>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-200 transition">
                  <Play size={20} fill="black" /> Play
                </button>
                <button className="flex items-center gap-2 bg-gray-500/50 text-white px-6 py-2 rounded font-bold backdrop-blur-sm">
                  <Info size={20} /> More Info
                </button>
              </div>
            </div>
          </section>

          {/* 4. DETAIL ACARA: EPISODE LIST */}
          <section className="p-6 md:px-16 py-20 space-y-10">
             <h3 className="text-xl font-bold">Episodes</h3>
             <div className="space-y-4">
                <div className="flex gap-4 items-center bg-zinc-900/50 p-4 rounded-lg group hover:bg-zinc-800 transition text-left">
                   <span className="text-xl text-gray-500 font-bold px-2">1</span>
                   <div className="flex-1">
                      <h4 className="font-bold text-sm">Eps 1: The Sacred Vow (Akad Nikah)</h4>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                        <Calendar size={12}/> 26 Apr 2026 • <Clock size={12}/> 09:00 AM
                      </p>
                   </div>
                   <MapPin size={20} className="text-gray-500" />
                </div>
                <div className="flex gap-4 items-center bg-zinc-900/50 p-4 rounded-lg group hover:bg-zinc-800 transition text-left">
                   <span className="text-xl text-gray-500 font-bold px-2">2</span>
                   <div className="flex-1">
                      <h4 className="font-bold text-sm">Eps 2: The Grand Celebration (Resepsi)</h4>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                         <MapPin size={12}/> Hotel Mulia, Jakarta
                      </p>
                   </div>
                   <Play size={20} className="text-gray-500" />
                </div>
             </div>
          </section>

          {/* 5. GALLERY: MY LIST */}
          <section className="py-10 px-6 md:px-16 space-y-6 text-left">
             <h3 className="text-xl font-bold">More Like This (Gallery)</h3>
             <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {[1, 2, 3, 4, 5].map((i) => (
                   <div key={i} className="min-w-[200px] aspect-video bg-zinc-800 rounded-md overflow-hidden relative group">
                      <img src={placeholderImg} className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition duration-500" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                         <Play size={30} fill="white" />
                      </div>
                   </div>
                ))}
             </div>
          </section>

          {/* 6. SCHEDULE & 8. COUNTDOWN: COMING SOON SECTION */}
          <section className="p-6 md:px-16 py-20 bg-zinc-900/30">
             <div className="max-w-xl mx-auto text-center space-y-8">
                <h3 className="text-red-600 font-black tracking-widest text-sm uppercase">Coming Soon: Premiere In</h3>
                <div className="flex justify-center gap-6">
                   <div className="text-center">
                      <p className="text-4xl font-bold">{timeLeft.days}</p>
                      <p className="text-[10px] text-gray-500 uppercase">Days</p>
                   </div>
                   <div className="text-center">
                      <p className="text-4xl font-bold">{timeLeft.hours}</p>
                      <p className="text-[10px] text-gray-500 uppercase">Hours</p>
                   </div>
                   <div className="text-center">
                      <p className="text-4xl font-bold">{timeLeft.minutes}</p>
                      <p className="text-[10px] text-gray-500 uppercase">Minutes</p>
                   </div>
                </div>
             </div>
          </section>

          {/* 7. DIGITAL GIFT: SUBSCRIBE TO LOVE */}
          <section className="p-6 md:px-16 py-20">
             <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 space-y-6">
                <div className="flex items-center gap-2">
                   <Gift className="text-red-600" />
                   <h3 className="text-lg font-bold">Support the Production (Wedding Gift)</h3>
                </div>
                <div className="space-y-4">
                   <div className="p-4 bg-black/50 rounded border border-zinc-700">
                      <p className="text-[10px] text-gray-500 uppercase font-bold">BCA - Sahril Rahmatulloh</p>
                      <p className="text-xl font-mono mt-1">1234 5678 90</p>
                   </div>
                   <button className="w-full py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition">
                      Copy Account Number
                   </button>
                </div>
             </div>
          </section>

          {/* 9. RSVP: FEEDBACK & RATING */}
          <section className="p-6 md:px-16 py-20 text-left">
             <h3 className="text-xl font-bold mb-8 italic">Rate & Review (RSVP)</h3>
             <div className="space-y-6">
                <div className="flex gap-2">
                   {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="#e50914" className="text-[#e50914]" />)}
                </div>
                <div className="space-y-4">
                   <input className="w-full bg-zinc-800 border-none p-4 rounded text-sm focus:ring-1 ring-red-600" placeholder="Your Name" />
                   <textarea className="w-full bg-zinc-800 border-none p-4 rounded text-sm h-32 focus:ring-1 ring-red-600" placeholder="Write your review for the couple..." />
                   <button className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-black font-bold rounded">
                      <Send size={18} /> Submit Review
                   </button>
                </div>
             </div>
          </section>

          {/* 10. CLOSING & MUSIC */}
          <footer className="py-32 px-6 text-center border-t border-zinc-800 text-gray-500 space-y-6">
             <h1 className="text-[#e50914] text-3xl font-bold tracking-tighter uppercase opacity-50">Loveflix</h1>
             <div className="text-[10px] space-y-1">
                <p>Questions? Call 0800-WED-SAHRIL</p>
                <p>Produced with love in Jakarta, Indonesia.</p>
                <p className="mt-6 uppercase">© 2026 Sahril & Partner Productions</p>
             </div>
          </footer>

          <div className="fixed bottom-8 right-8 z-[110]">
             <button 
               onClick={() => setMuted(!muted)}
               className="w-12 h-12 bg-zinc-800 text-white rounded-full flex items-center justify-center shadow-2xl border border-zinc-700 active:scale-90 transition"
             >
                {muted ? <Volume2 size={20} className="opacity-40" /> : <Music size={20} className="text-red-600 animate-pulse" />}
             </button>
          </div>

        </main>
      )}
    </div>
  );
}