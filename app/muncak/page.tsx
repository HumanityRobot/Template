"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Mountain, MapPin, Calendar, Clock, 
  Heart, Tent, User, ChevronDown, Award
} from 'lucide-react';

export default function TemplateHikingScrollytelling() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mencegah Hydration Error: Pastikan komponen sudah mounted di client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Logika Scroll
  useEffect(() => {
    if (!isOpen || !mounted) return;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = Math.min(1, Math.max(0, currentScroll / totalHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, mounted]);

  // Render minimal saat SSR untuk menghindari mismatch
  if (!mounted) return <div className="bg-[#3d4a3e] min-h-screen" />;

  const getHikerPosition = () => {
    const y = 90 - (scrollProgress * 80); 
    let x = 50; 
    if (scrollProgress < 0.3) x = 50 + (scrollProgress * 100);
    else if (scrollProgress < 0.7) x = 80 - ((scrollProgress - 0.3) * 150);
    else x = 20 + ((scrollProgress - 0.7) * 200);

    return { 
      top: `${y}%`, 
      left: `${Math.min(90, Math.max(10, x))}%`,
      transform: 'translate(-50%, -50%)'
    };
  };

  const isVisible = (start: number, end: number) => {
    return scrollProgress >= start && scrollProgress <= end;
  };

  return (
    <div className="bg-[#f0f4f8] text-[#2c3e50] font-serif relative">
      
      {!isOpen ? (
        /* --- COVER --- */
        <section className="fixed inset-0 z-[9999] bg-[#3d4a3e] flex flex-col items-center justify-center p-8 text-center text-[#e8e4d9]">
          <div className="space-y-6 animate-in fade-in duration-700">
             <div className="p-6 bg-white/5 rounded-full border border-white/10">
                <Mountain size={64} className="animate-bounce" />
             </div>
             <h1 className="text-4xl font-black uppercase italic tracking-tighter">Sahril & Partner</h1>
             <p className="text-xs opacity-70 tracking-widest uppercase">The Summit of Love Expedition</p>
             <button 
               onClick={() => {
                 setIsOpen(true);
                 window.scrollTo(0, 0);
               }}
               className="mt-10 flex flex-col items-center gap-3 group"
             >
                <div className="w-12 h-12 rounded-full border-2 border-[#e8e4d9]/30 flex items-center justify-center group-hover:bg-[#e8e4d9] group-hover:text-[#3d4a3e] transition-all">
                   <ChevronDown />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Klik Untuk Mendaki</span>
             </button>
          </div>
        </section>
      ) : (
        /* --- SCROLLYTELLING CONTENT --- */
        <div ref={containerRef} className="relative h-[500vh] w-full">
          
          {/* BACKGROUND GUNUNG (STICKY) */}
          <div className="fixed inset-0 h-screen w-full z-0 overflow-hidden bg-gradient-to-b from-[#a1c4fd] to-[#f0f4f8]">
            {/* Visual Gunung Sederhana */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[60vw] border-l-transparent border-r-[60vw] border-r-transparent border-bottom-[85vh] border-[#7a8d7b]/40" 
                 style={{ borderBottom: '85vh solid #7a8d7b' }} />
            
            {/* Jalur Dash */}
            <svg className="absolute inset-0 w-full h-full z-10 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M50 90 Q70 70 80 60 T20 40 T80 10" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
            </svg>

            {/* PENDAKI */}
            <div 
              className="fixed z-30 transition-all duration-300 ease-out p-2 bg-white rounded-full shadow-2xl border-2 border-[#3d4a3e]"
              style={getHikerPosition()}
            >
              <User className="text-[#3d4a3e]" size={24} />
            </div>
          </div>

          {/* FLOATING CARDS */}
          <div className="relative z-40 w-full max-w-sm mx-auto">
             
             {/* CARD 1: PHOTO */}
             <div className={`fixed top-[20vh] left-6 right-6 transition-all duration-700 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100
              ${isVisible(0.02, 0.25) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'}`}
             >
                <div className="aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
                   <img src="/api/placeholder/400/400" alt="Couple" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-center font-bold text-[#3d4a3e] uppercase tracking-widest">Basecamp: Start of Us</h3>
             </div>

             {/* CARD 2: DATE */}
             <div className={`fixed top-[30vh] left-6 right-6 transition-all duration-700 bg-[#3d4a3e] p-8 rounded-2xl shadow-2xl text-[#e8e4d9] text-center
              ${isVisible(0.35, 0.60) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}
             >
                <Calendar className="mx-auto mb-4 text-[#d4af37]" size={40} />
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Save The Date</p>
                <h2 className="text-2xl font-black uppercase">26 April 2026</h2>
             </div>

             {/* CARD 3: LOCATION */}
             <div className={`fixed top-[25vh] left-6 right-6 transition-all duration-700 bg-white p-8 rounded-2xl shadow-2xl text-center border border-gray-100
              ${isVisible(0.70, 0.92) ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
             >
                <MapPin className="mx-auto mb-4 text-[#3d4a3e]" size={40} />
                <h3 className="font-bold uppercase text-lg">Hotel Mulia Jakarta</h3>
                <p className="text-sm text-gray-500 mt-2">The Grand Ballroom Summit</p>
             </div>

          </div>

          {/* THE PEAK (FOOTER) */}
          <footer className="absolute bottom-0 left-0 right-0 h-screen bg-[#3d4a3e] text-[#e8e4d9] z-[60] flex flex-col items-center justify-center p-10 text-center">
             <Heart size={80} className="text-[#d4af37] mb-6 animate-pulse" fill="currentColor" />
             <h2 className="text-5xl font-black uppercase italic tracking-tighter">Puncak Cinta</h2>
             <p className="mt-4 opacity-70 italic font-sans text-sm">"Perjalanan yang melelahkan terbayar saat kita sampai di sini, bersama."</p>
             <button className="mt-12 px-10 py-4 bg-[#d4af37] text-[#3d4a3e] rounded-full font-black uppercase text-xs tracking-widest">
                Konfirmasi Kehadiran
             </button>
          </footer>

        </div>
      )}
    </div>
  );
}