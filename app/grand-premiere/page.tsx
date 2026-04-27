"use client";

import React, { useState, useEffect } from 'react';
import { 
  Ticket, Clapperboard, Star, MapPin, Calendar, Clock, 
  Heart, Popcorn, Film, Video, Copy, Check, 
  Send, MoveRight, Music, Award // Award ditambahkan di sini
} from 'lucide-react';

export const placeholderImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export default function TemplateCinemaPremiere() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isTicketTorn, setIsTicketTorn] = useState(false);
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

  const tearTicket = () => {
    setIsTicketTorn(true);
    setTimeout(() => setIsOpen(true), 1500); // Waktu animasi tiket robek
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] text-[#e0e0e0] min-h-screen overflow-x-hidden font-sans selection:bg-[#c93030] selection:text-white relative">
      
      {/* Background Effect: Film Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/film-grain.png')]" />

      {!isOpen ? (
        /* 1. COVER: TICKET INTERACTION */
        <section className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
          <div className="relative z-10 w-full max-w-sm text-center space-y-12 animate-in fade-in zoom-in duration-700">
             
             <div className="flex justify-center mb-6">
                <Ticket className="text-[#c93030] animate-pulse" size={60} />
             </div>
             
             <div className="space-y-2">
                <h2 className="text-[#c93030] font-black italic text-4xl tracking-tighter uppercase">Grand Premiere</h2>
                <p className="text-white font-bold text-xl tracking-widest uppercase">The Wedding of Sahril & Partner</p>
                <p className="text-[10px] text-gray-500 mt-4 tracking-[0.3em] font-sans uppercase">Kindly rip the ticket to enter the theater</p>
             </div>

             {/* Tiket Bioskop */}
             <div 
               onClick={tearTicket}
               className={`relative w-80 h-36 mx-auto cursor-pointer group transition-all duration-1000 ${isTicketTorn ? 'opacity-0 scale-95 blur-sm' : 'animate-in slide-in-from-bottom-20'}`}
             >
                <div className="absolute inset-0 bg-gradient-to-r from-[#e0c080] via-[#f0e0b0] to-[#e0c080] rounded-lg shadow-2xl p-4 flex justify-between items-center text-black font-serif border border-black/10">
                   <div className="border-r-2 border-dashed border-black/20 pr-4 space-y-1 text-left flex-1">
                      <p className="text-[10px] font-bold uppercase text-[#c93030]">Admit One</p>
                      <h3 className="text-xl font-black italic tracking-tight uppercase leading-none">Wedding Day</h3>
                      <p className="text-xs">Sahril & Partner</p>
                   </div>
                   <div className="border-l-2 border-dashed border-black/20 pl-4 space-y-1 text-right shrink-0">
                      <p className="text-[8px] font-bold opacity-50 uppercase">Row</p>
                      <p className="text-xl font-bold">26</p>
                      <p className="text-[8px] font-bold opacity-50 uppercase">Seat</p>
                      <p className="text-xl font-bold">04</p>
                   </div>
                   <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-[#0a0a0a] rounded-full" />
                   <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-[#0a0a0a] rounded-full" />
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group-hover:scale-110 transition-transform">
                   <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg border-2 border-[#c93030]">
                      <MoveRight className="text-[#c93030] animate-[bounce-x_2s_infinite]" size={28} />
                   </div>
                </div>
             </div>
          </div>
          
          <div className="absolute -top-32 left-1/4 w-[200px] h-[500px] bg-[#c93030]/20 rounded-full blur-[100px] rotate-[-15deg]" />
          <div className="absolute -top-32 right-1/4 w-[200px] h-[500px] bg-[#c93030]/20 rounded-full blur-[100px] rotate-[15deg]" />
        </section>
      ) : (
        <main className="max-w-2xl mx-auto pb-32 animate-in fade-in duration-1000 relative">
          
          <nav className="fixed top-0 left-0 right-0 z-[100] p-4 flex justify-end">
             <button className="w-12 h-12 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-[#c93030] hover:scale-110 transition active:scale-95">
                <Music size={20} className="animate-[spin_6s_linear_infinite]" />
             </button>
          </nav>

          <div className="m-4 md:m-8 bg-[#101010] p-2 rounded-sm relative overflow-hidden border-4 border-[#cca43b] shadow-[0_0_50px_rgba(204,164,59,0.3)]">
             <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fabric-of-the-nation.png')]" />

             <section className="pt-16 pb-8 text-center space-y-4 px-8 relative z-10">
              <div className="flex justify-center gap-1.5 text-[#cca43b] animate-pulse">
                 <Star size={20} fill="currentColor" />
                 <Star size={20} fill="currentColor" className="-mt-2" />
                 <Star size={20} fill="currentColor" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#cca43b] font-sans font-bold">You are Cordially Invited</span>
                <h1 className="text-4xl md:text-5xl font-black italic text-white tracking-tight leading-none uppercase">The Big Premiere</h1>
              </div>
            </section>

            <section className="px-6 py-4">
               <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 rounded-sm shadow-xl border-2 border-[#cca43b]/30">
                  <img src={placeholderImg} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Movie Poster" />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent text-left">
                      <p className="text-[10px] uppercase font-sans tracking-widest text-[#cca43b]">World Premiere · 2026</p>
                      <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter">Sahril & Partner</h2>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-[10px] font-black italic shadow-lg rounded-sm">
                    CINEMA 2D
                  </div>
               </div>
            </section>

            <section className="py-12 px-8 text-center space-y-10">
              <p className="text-sm md:text-base leading-relaxed italic text-gray-400 font-sans font-light">
                "Our paths aligned like a perfectly scripted movie. It’s not just a wedding; it's the beginning of our own Eternal Story. Kindly join us on our biggest premiere."
              </p>
              
              <div className="h-[2px] w-16 bg-[#cca43b]/30 mx-auto" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left pt-6">
                  {/* Akad */}
                  <div className="bg-[#161616] p-6 rounded-sm border border-white/5 space-y-4 shadow-inner">
                     <div className="flex items-center gap-3 text-[#cca43b]">
                        <Clapperboard size={20} />
                        <span className="text-xs font-sans font-bold uppercase tracking-widest">Early Show (Akad)</span>
                     </div>
                     <div className="space-y-1">
                        <p className="text-lg font-black italic uppercase text-white">Sunday, April 26</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 font-sans">
                           <Clock size={12} /> 09:00 AM WIB
                        </div>
                     </div>
                     <p className="text-sm text-gray-400 font-sans font-light leading-relaxed">
                        Masjid Agung Sunda Kelapa<br /> Menteng, Central Jakarta
                     </p>
                  </div>

                  {/* Resepsi */}
                  <div className="bg-[#161616] p-6 rounded-sm border border-white/5 space-y-4 shadow-inner">
                     <div className="flex items-center gap-3 text-[#cca43b]">
                        <Award size={20} /> {/* Trophy diganti Award */}
                        <span className="text-xs font-sans font-bold uppercase tracking-widest">Late Show (Reception)</span>
                     </div>
                     <div className="space-y-1">
                        <p className="text-lg font-black italic uppercase text-white">Sunday, April 26</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 font-sans">
                           <Clock size={12} /> 01:00 PM WIB
                        </div>
                     </div>
                     <p className="text-sm text-gray-400 font-sans font-light leading-relaxed">
                        The Grand Ballroom, Hotel Mulia<br /> Senayan, Central Jakarta
                     </p>
                  </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                  <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#1A1A1A] text-[#cca43b] rounded-full text-xs uppercase tracking-widest font-sans font-bold hover:bg-[#c93030] hover:text-white transition-all shadow-xl active:scale-95">
                     <MapPin size={14} /> View Premiere Venue
                  </button>
              </div>
            </section>

            <section className="bg-[#cca43b] text-black py-12 px-6">
              <div className="grid grid-cols-4 gap-2 text-center max-w-sm mx-auto font-serif">
                {Object.entries(timeLeft).map(([unit, val]) => (
                  <div key={unit} className="border border-black/10 p-2 rounded-sm bg-white/10 shadow-inner">
                    <p className="text-4xl font-black italic leading-none">{val}</p>
                    <p className="text-[10px] font-sans font-black uppercase text-black/50 tracking-widest mt-1">{unit}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-12 text-center space-y-8">
               <div className="space-y-2">
                  <Popcorn size={32} className="mx-auto text-[#cca43b]" />
                  <h3 className="text-xl font-black italic uppercase text-white tracking-tighter">Support the Production</h3>
                  <p className="text-[10px] font-sans text-gray-500 uppercase tracking-[0.2em]">Ticket Counter (Gift)</p>
               </div>
               <div className="bg-[#161616] p-6 rounded-sm border border-white/5 space-y-4 max-w-xs mx-auto shadow-inner">
                  <p className="text-xs font-sans font-bold text-[#cca43b]">BCA — 1234567890</p>
                  <p className="text-sm italic font-sans text-gray-400">Sahril Rahmatulloh</p>
                  <button 
                    onClick={() => copyToClipboard("1234567890")}
                    className="text-[10px] uppercase tracking-widest flex items-center gap-2 mx-auto hover:text-[#cca43b] transition-colors"
                  >
                    {isCopied ? <Check size={14} /> : <Copy size={14} />} {isCopied ? "Stored!" : "Copy Details"}
                  </button>
               </div>
            </section>

            <section className="p-12 bg-black text-[#fdfaf1]">
               <div className="text-center space-y-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                      <Video size={16} className="text-[#f6c177]" />
                      <h3 className="text-white font-bold uppercase italic text-xs tracking-widest">Share Your Audience Review (RSVP)</h3>
                  </div>
                  <div className="space-y-4 text-left font-sans">
                    <input className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm text-white focus:outline-none focus:border-[#f6c177] transition-colors" placeholder="Reviewer Name" />
                    <textarea className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm h-24 text-white focus:outline-none focus:border-[#f6c177] transition-colors" placeholder="Write your wonderful review..." />
                    <button className="w-full bg-[#f6c177] text-black py-3 rounded text-xs font-sans font-bold uppercase tracking-widest hover:bg-[#31748f] hover:text-white transition-all flex items-center justify-center gap-2">
                       <Send size={14} /> Post Review
                    </button>
                  </div>
               </div>
            </section>

            <footer className="py-12 text-center space-y-4 bg-white/30 border-t border-gray-100">
               <Film size={24} className="mx-auto opacity-20 text-[#cca43b]" />
               <p className="text-[10px] font-sans tracking-[0.5em] opacity-30 uppercase italic text-[#cca43b]">Directed by Love • April 26, 2026</p>
            </footer>
          </div>
        </main>
      )}

      <style jsx global>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}