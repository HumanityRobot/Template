"use client";

import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, 
  Heart, Share2, MoreHorizontal, ListMusic, Music, 
  Calendar, MapPin, Gift, Send, MessageCircle 
} from 'lucide-react';

export default function TemplateSpotify() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  // 8. COUNTDOWN LOGIC (Duration to Event)
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
    <div className="bg-[#121212] text-white font-sans min-h-screen overflow-x-hidden selection:bg-[#1DB954] selection:text-black">
      
      {!isOpen ? (
        /* 1. COVER: ALBUM ART STYLE */
        <section className="fixed inset-0 z-[9999] bg-gradient-to-b from-[#282828] to-[#121212] flex flex-col items-center justify-center p-8 text-center">
          <div className="w-64 h-64 bg-gray-800 shadow-2xl mb-10 group relative">
             <img src={placeholderImg} className="w-full h-full object-cover opacity-40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Play fill="white" size={64} className="opacity-80 group-hover:scale-110 transition-transform" />
             </div>
          </div>
          <h1 className="text-2xl font-bold mb-2 uppercase tracking-tighter">Our Wedding Playlist</h1>
          <p className="text-gray-400 text-sm mb-12 uppercase tracking-widest">Sahril & Partner • 2026</p>
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-[#1DB954] text-black font-bold py-4 px-12 rounded-full hover:scale-105 transition-transform uppercase tracking-tighter"
          >
            Open Invitation
          </button>
        </section>
      ) : (
        <main className="animate-in fade-in duration-1000 pb-40">
          
          {/* 2. QUOTE & 3. PROFIL: NOW PLAYING SECTION */}
          <section className="p-6 md:p-12 bg-gradient-to-b from-[#535353] to-[#121212]">
            <div className="flex flex-col md:flex-row items-center gap-8 mt-10 text-left">
              <div className="w-56 h-56 bg-gray-300 shadow-2xl shrink-0">
                <img src={placeholderImg} className="w-full h-full object-cover grayscale" />
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest">Public Playlist</p>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">SAHRIL & PARTNER</h1>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <div className="w-6 h-6 bg-[#1DB954] rounded-full flex items-center justify-center">
                    <Music size={12} className="text-black" />
                  </div>
                  <span>The Soulmates • 2026 • 2 tracks, 4 ever</span>
                </div>
              </div>
            </div>
          </section>

          {/* PLAYER CONTROLS (Static Design) */}
          <section className="px-6 py-8 flex items-center gap-6">
            <button className="w-14 h-14 bg-[#1DB954] rounded-full flex items-center justify-center hover:scale-105 transition shadow-lg">
              <Play fill="black" size={24} className="ml-1 text-black" />
            </button>
            <Heart 
              onClick={() => setIsLiked(!isLiked)} 
              className={`cursor-pointer transition-colors ${isLiked ? "text-[#1DB954] fill-[#1DB954]" : "text-gray-400"}`} 
              size={32} 
            />
            <Share2 className="text-gray-400 cursor-pointer hover:text-white" size={24} />
            <MoreHorizontal className="text-gray-400 cursor-pointer hover:text-white" size={24} />
          </section>

          {/* 4. DETAIL ACARA: TRACK LIST */}
          <section className="px-6 py-4 space-y-2">
             <div className="grid grid-cols-12 text-gray-400 text-[10px] uppercase tracking-widest border-b border-white/10 pb-2 mb-4">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-8 pl-2">Title / Location</div>
                <div className="col-span-3 text-right">Time</div>
             </div>
             
             {/* TRACK 1: AKAD */}
             <div className="grid grid-cols-12 items-center hover:bg-white/10 p-3 rounded-md transition group text-left cursor-default">
                <div className="col-span-1 text-gray-400 font-mono group-hover:text-[#1DB954] text-center">1</div>
                <div className="col-span-8 pl-2">
                   <p className="text-sm font-bold text-white uppercase tracking-tight">The Sacred Vow (Akad Nikah)</p>
                   <p className="text-xs text-gray-400 flex items-center gap-1"><MapPin size={10}/> Masjid Agung, Jakarta</p>
                </div>
                <div className="col-span-3 text-right text-xs text-gray-400 font-mono">09:00</div>
             </div>

             {/* TRACK 2: RESEPSI */}
             <div className="grid grid-cols-12 items-center hover:bg-white/10 p-3 rounded-md transition group text-left cursor-default">
                <div className="col-span-1 text-gray-400 font-mono group-hover:text-[#1DB954] text-center">2</div>
                <div className="col-span-8 pl-2">
                   <p className="text-sm font-bold text-white uppercase tracking-tight">Wedding Celebration (Resepsi)</p>
                   <p className="text-xs text-gray-400 flex items-center gap-1"><MapPin size={10}/> Hotel Mulia, Jakarta</p>
                </div>
                <div className="col-span-3 text-right text-xs text-gray-400 font-mono">13:00</div>
             </div>
          </section>

          {/* 5. GALLERY: LYRICS STYLE */}
          <section className="p-6 md:p-12">
             <div className="bg-[#242424] rounded-xl p-8 space-y-8">
                <h3 className="text-xl font-bold tracking-tighter italic uppercase text-left">Lyrics of Memories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {[1, 2, 3, 4].map(i => (
                      <div key={i} className="aspect-square bg-[#333] rounded overflow-hidden shadow-inner">
                         <img src={placeholderImg} className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition duration-500" alt="Memory" />
                      </div>
                   ))}
                </div>
                <p className="text-2xl font-bold text-[#1DB954] leading-relaxed italic text-left">
                   "And among His signs is that He created for you mates from among yourselves..."
                </p>
             </div>
          </section>

          {/* 6. VISA/SCHEDULE & 8. COUNTDOWN */}
          <section className="p-6 md:p-12 text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6">Upcoming Release</p>
             <div className="flex justify-center gap-8">
                <div className="space-y-1">
                   <p className="text-4xl font-black">{timeLeft.days}</p>
                   <p className="text-[8px] text-gray-500 uppercase font-bold">Days</p>
                </div>
                <div className="text-center text-4xl font-thin opacity-20">:</div>
                <div className="space-y-1">
                   <p className="text-4xl font-black">{timeLeft.hours}</p>
                   <p className="text-[8px] text-gray-500 uppercase font-bold">Hours</p>
                </div>
                <div className="text-center text-4xl font-thin opacity-20">:</div>
                <div className="space-y-1">
                   <p className="text-4xl font-black">{timeLeft.minutes}</p>
                   <p className="text-[8px] text-gray-500 uppercase font-bold">Mins</p>
                </div>
             </div>
          </section>

          {/* 7. DIGITAL GIFT: SUPPORT THE ARTIST */}
          <section className="p-6 md:p-12">
             <div className="bg-[#1DB954] text-black p-8 rounded-xl shadow-2xl space-y-6">
                <div className="flex items-center gap-2">
                   <Gift size={24} className="text-black" />
                   <h3 className="font-bold text-lg uppercase tracking-tighter">Support the Artist</h3>
                </div>
                <div className="bg-black/10 p-6 rounded-lg backdrop-blur-sm border border-black/10 text-left">
                   <p className="text-[10px] font-bold uppercase mb-2 opacity-70">BCA Account Number</p>
                   <p className="text-3xl font-black tracking-tighter">1234 5678 90</p>
                   <p className="text-xs mt-4 italic font-bold">A.N Sahril Rahmatulloh</p>
                </div>
                <button className="w-full py-4 bg-black text-white font-bold rounded-full text-xs uppercase tracking-widest hover:bg-zinc-800 transition shadow-lg">
                   Copy Account Number
                </button>
             </div>
          </section>

          {/* 9. RSVP: FAN MAIL */}
          <section className="p-6 md:p-12 text-left">
             <div className="flex items-center gap-2 mb-8">
                <MessageCircle size={24} className="text-[#1DB954]" />
                <h3 className="text-xl font-bold uppercase tracking-tighter">Fan Mail (RSVP)</h3>
             </div>
             <div className="space-y-4">
                <input className="w-full bg-[#282828] border-none p-4 rounded focus:ring-1 ring-[#1DB954] text-sm text-white placeholder:text-gray-500 outline-none" placeholder="Your Name" />
                <textarea className="w-full bg-[#282828] border-none p-4 rounded h-32 focus:ring-1 ring-[#1DB954] text-sm text-white placeholder:text-gray-500 outline-none" placeholder="Send a message to the couple..." />
                <button className="flex items-center justify-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-full uppercase text-xs tracking-widest hover:bg-gray-200 transition shadow-md">
                   <Send size={16} className="text-black" /> Send Wishes
                </button>
             </div>
          </section>

          {/* 10. CLOSING: MUSIC PLAYER BAR */}
          <footer className="fixed bottom-0 w-full z-[100] bg-[#181818] border-t border-white/5 p-4 pb-8 md:pb-4 flex items-center justify-between shadow-[0_-10px_20px_rgba(0,0,0,0.4)]">
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-700 rounded overflow-hidden shadow-md">
                   <img src={placeholderImg} className="w-full h-full object-cover opacity-50" alt="Thumbnail" />
                </div>
                <div className="hidden xs:block">
                   <p className="text-xs font-bold truncate w-24 sm:w-32 uppercase tracking-tighter">Until Forever</p>
                   <p className="text-[10px] text-gray-400">Sahril & Partner</p>
                </div>
             </div>
             
             <div className="flex flex-col items-center gap-2 flex-1 max-w-md px-4">
                <div className="flex items-center gap-5">
                   <Shuffle size={14} className="text-gray-500 hidden sm:block cursor-pointer" />
                   <SkipBack size={20} className="text-white cursor-pointer hover:text-[#1DB954] transition-colors" fill="currentColor" />
                   <div 
                      onClick={() => setIsPlaying(!isPlaying)} 
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition active:scale-95"
                    >
                      {isPlaying ? <Pause size={16} className="text-black" fill="currentColor" /> : <Play size={16} className="text-black ml-1" fill="currentColor" />}
                   </div>
                   <SkipForward size={20} className="text-white cursor-pointer hover:text-[#1DB954] transition-colors" fill="currentColor" />
                   <Repeat size={14} className="text-[#1DB954] hidden sm:block cursor-pointer" />
                </div>
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mt-1">
                   <div 
                    className={`h-full bg-[#1DB954] w-[45%] ${isPlaying ? 'animate-[progress_30s_linear_infinite]' : ''}`} 
                   />
                </div>
             </div>

             <div className="hidden md:flex gap-4 items-center">
                <ListMusic size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                <Music size={18} className="text-[#1DB954] cursor-pointer" />
             </div>
          </footer>

        </main>
      )}

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}