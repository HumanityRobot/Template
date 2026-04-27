"use client";

import React, { useState, useEffect } from 'react';
import { 
  Rocket, Star, Sparkles, MapPin, Calendar, Clock, 
  Heart, Navigation, Globe, Send, Copy, Check, 
  Music, Power, Zap, Telescope, Moon
} from 'lucide-react';

export const placeholderImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export default function TemplateGalaxyCosmic() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-04-26T09:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(timer); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLaunch = () => {
    setIsLaunching(true);
    setTimeout(() => setIsOpen(true), 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-[#050505] text-blue-100 min-h-screen overflow-x-hidden font-sans selection:bg-purple-500 relative">
      
      {/* Background Stars - Static */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {!isOpen ? (
        /* 1. COVER: COCKPIT LAUNCHER */
        <section className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center p-6 transition-all duration-1000 ${isLaunching ? 'scale-150 opacity-0 blur-2xl' : ''}`}>
          <div className="relative text-center space-y-8 max-w-sm">
             {/* Circular Portal Interface */}
             <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border-2 border-purple-500/30 rounded-full animate-[spin_6s_linear_infinite_reverse]" />
                <div className="absolute inset-8 border border-white/10 rounded-full" />
                
                <Rocket className={`text-blue-400 z-10 ${isLaunching ? 'animate-bounce' : 'animate-pulse'}`} size={64} />
             </div>

             <div className="space-y-2">
                <h2 className="text-3xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Mission: Eternal Love
                </h2>
                <p className="text-[10px] text-blue-300/60 tracking-[0.4em] uppercase font-bold">Destination: 26.04.2026</p>
             </div>

             <button 
               onClick={handleLaunch}
               className="relative group px-12 py-4 overflow-hidden"
             >
                <div className="absolute inset-0 bg-blue-600 rounded-full group-hover:scale-110 transition-transform" />
                <div className="relative flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white">
                  <Power size={16} /> Initiate Launch
                </div>
             </button>
          </div>
        </section>
      ) : (
        <main className="max-w-xl mx-auto pb-32 animate-in fade-in duration-1000 relative z-10">
          
          {/* FLOATING MUSIC */}
          <div className="fixed top-6 right-6 z-[110]">
             <button className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-purple-300">
                <Music size={20} className="animate-pulse" />
             </button>
          </div>

          {/* 2. HERO: NEBULA PORTRAIT */}
          <section className="p-6 pt-12 text-center">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative bg-black rounded-2xl p-2">
                   <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                      <img src={placeholderImg} className="w-full h-full object-cover opacity-80" alt="Couple Galaxy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-0 right-0 px-6 text-center">
                         <h1 className="text-4xl font-black italic tracking-tighter text-white uppercase">Sahril & Partner</h1>
                         <p className="text-xs text-blue-300 font-bold tracking-widest mt-2 uppercase">Orbiting Since 2020</p>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* 3. EVENT LOGS (Details Acara) */}
          <section className="px-8 py-12 space-y-10">
             <div className="flex items-center gap-4">
                <Telescope className="text-blue-400" size={24} />
                <h3 className="font-bold uppercase text-xs tracking-[0.3em]">Star Date & Coordinates</h3>
             </div>

             <div className="grid gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl space-y-4">
                   <div className="flex items-center gap-3 text-purple-400">
                      <Zap size={18} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Warp Event 01 (Akad)</span>
                   </div>
                   <div className="space-y-1">
                      <p className="text-xl font-bold">Sunday, April 26</p>
                      <p className="text-sm text-blue-200/60 italic">09:00 AM Standard Time</p>
                   </div>
                   <div className="flex items-start gap-2 pt-2">
                      <MapPin size={16} className="shrink-0 text-blue-400" />
                      <p className="text-sm">Masjid Agung Sunda Kelapa, Central Jakarta</p>
                   </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl space-y-4">
                   <div className="flex items-center gap-3 text-blue-400">
                      <Globe size={18} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Main Celebration (Reception)</span>
                   </div>
                   <div className="space-y-1">
                      <p className="text-xl font-bold">Sunday, April 26</p>
                      <p className="text-sm text-blue-200/60 italic">01:00 PM Standard Time</p>
                   </div>
                   <div className="flex items-start gap-2 pt-2">
                      <MapPin size={16} className="shrink-0 text-purple-400" />
                      <p className="text-sm">Grand Ballroom, Hotel Mulia, Jakarta</p>
                   </div>
                </div>
             </div>

             <button className="w-full py-4 rounded-xl border border-blue-500/30 text-blue-300 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-500/10 transition-colors">
                <Navigation size={16} /> Open Star Map
             </button>
          </section>

          {/* 4. COSMIC COUNTDOWN */}
          <section className="px-8">
             <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 p-8 rounded-3xl text-center space-y-6">
                <div className="flex justify-center gap-4 text-white/20">
                   <Star size={16} fill="currentColor" />
                   <Moon size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                </div>
                <div className="grid grid-cols-4 gap-2">
                   {Object.entries(timeLeft).map(([unit, val]) => (
                     <div key={unit}>
                        <p className="text-3xl font-black text-white">{val}</p>
                        <p className="text-[8px] uppercase tracking-widest text-blue-400 font-bold">{unit}</p>
                     </div>
                   ))}
                </div>
                <p className="text-[10px] uppercase font-bold text-blue-300/40">Until Signal Synchronization</p>
             </div>
          </section>

          {/* 5. COSMIC GIFT (Kado Digital) */}
          <section className="p-8 text-center space-y-8">
             <div className="space-y-2">
                <Sparkles size={32} className="mx-auto text-blue-400" />
                <h3 className="text-xl font-black uppercase italic text-white tracking-tighter">Support the Voyage</h3>
                <p className="text-[10px] text-blue-300/60 uppercase tracking-widest">Digital Contribution</p>
             </div>
             <div className="bg-[#111] p-6 rounded-2xl border border-white/10 space-y-4 max-w-xs mx-auto shadow-2xl">
                <p className="text-xs font-bold text-blue-400">BCA — 1234567890</p>
                <p className="text-sm font-bold text-white uppercase italic">Sahril R.</p>
                <button 
                  onClick={() => copyToClipboard("1234567890")}
                  className="w-full py-2 bg-blue-600/10 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-600/20"
                >
                  {isCopied ? "Identity Copied" : "Copy Account"}
                </button>
             </div>
          </section>

          {/* 6. RSVP (Transmit Wishes) */}
          <section className="p-8 pb-20">
             <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
                <div className="text-center">
                   <h3 className="text-lg font-black uppercase italic text-white">Transmit Message</h3>
                   <p className="text-[10px] text-gray-500 uppercase tracking-widest">RSVP Confirmation</p>
                </div>
                <div className="space-y-4 font-sans">
                   <input className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-sm focus:border-blue-500 outline-none transition-all" placeholder="Pilot / Guest Name" />
                   <select className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-sm focus:border-blue-500 outline-none">
                      <option>Confirmed for Arrival</option>
                      <option>Orbiting from Afar (Unable to Attend)</option>
                   </select>
                   <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-xs font-black uppercase tracking-[0.3em] shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3 active:scale-95 transition-all">
                      <Send size={14} /> Transmit
                   </button>
                </div>
             </div>
          </section>

          <footer className="py-12 text-center opacity-30">
             <p className="text-[8px] font-black uppercase tracking-[0.8em]">End of Transmission • 2026</p>
          </footer>

        </main>
      )}

      {/* Galaxy Animation Styles */}
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}