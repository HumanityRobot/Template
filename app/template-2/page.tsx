"use client";

import React, { useState, useEffect } from 'react';
import { Plane, MapPin, Calendar, Clock, Globe, Navigation, Heart, Music, Camera, Gift, MessageSquare, Send } from 'lucide-react';

export default function TemplatePassport() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // 8. COUNTDOWN LOGIC (Target: 26 April 2026)
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
    <div className="bg-[#f4f1ea] text-[#2c3e50] font-sans min-h-screen overflow-x-hidden selection:bg-[#d4af37] selection:text-white">
      
      {!isOpen ? (
        /* 1. COVER: AUTHENTIC INDONESIAN PASSPORT STYLE */
        <section className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a1f1d] p-6 text-center">
          <div 
            onClick={() => setIsOpen(true)}
            className="w-full max-w-sm aspect-[1/1.45] bg-[#0d544e] rounded-[15px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-between py-12 px-8 cursor-pointer hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group border border-white/5"
          >
            {/* Tekstur Kulit Paspor */}
            <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/leather.png')]" />
            
            {/* Header: REPUBLIK INDONESIA */}
            <div className="w-full text-center relative z-10">
              <h2 className="text-[#e2c17c] text-sm md:text-base font-bold tracking-[0.2em] uppercase leading-tight">
                REPUBLIK INDONESIA
              </h2>
            </div>

            {/* Emblem: GARUDA (MENGGUNAKAN FILE LOKAL) */}
            <div className="relative z-10 flex items-center justify-center w-full py-2">
              <div className="w-48 h-48 md:w-60 md:h-60 group-hover:scale-105 transition-transform duration-700">
                <img 
                  src="/Logo_Garuda2.png" 
                  className="w-full h-full object-contain"
                  alt="Garuda Pancasila Resmi"
                />
              </div>
            </div>

            {/* Label: PASPOR / PASSPORT */}
            <div className="w-full text-center relative z-10 space-y-1">
              <div className="inline-block border-b-[2px] border-[#e2c17c] pb-1">
                <h1 className="text-[#e2c17c] text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase">PASPOR</h1>
              </div>
              <h1 className="text-[#e2c17c] text-lg md:text-xl font-medium tracking-[0.3em] uppercase italic opacity-70 leading-none">PASSPORT</h1>
            </div>

            {/* Bottom: Pasangan Info & E-Passport Logo (Tengah Bawah) */}
            <div className="w-full relative z-10 flex flex-col items-center gap-6">
              
              {/* Teks Wedding Of & Nama - Sekarang di tengah bawah */}
              <div className="text-center space-y-1">
                <p className="text-[#e2c17c] text-[9px] font-bold uppercase tracking-[0.2em] opacity-60">
                  Wedding of
                </p>
                <p className="text-white text-lg md:text-xl font-serif italic tracking-wide">
                  Sahril & Partner
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                {/* Logo Chip E-Paspor */}
                <div className="w-10 h-6 border-[1.5px] border-[#e2c17c] rounded-sm flex items-center justify-center relative">
                  <div className="w-4 h-[1px] bg-[#e2c17c]" />
                  <div className="absolute w-2.5 h-2.5 rounded-full border border-[#e2c17c] bg-[#0d544e]" />
                </div>
                <p className="text-[#e2c17c] text-[8px] font-medium uppercase tracking-[0.2em] opacity-30 group-hover:opacity-100 transition-opacity">Click cover to open</p>
              </div>
            </div>

            {/* Efek Kilauan saat Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </section>
      ) : (
        <main className="animate-in fade-in duration-1000">
          
          {/* 2. ARABIC DOCUMENT SECTION (Quote) */}
          <section className="py-20 px-6 max-w-3xl mx-auto">
            <div className="bg-[#fffcf0] p-10 md:p-16 shadow-lg border border-yellow-100 transform -rotate-1 relative overflow-hidden text-center">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')]" />
              <div className="relative z-10 space-y-8">
                <p className="text-3xl md:text-4xl font-serif leading-loose italic opacity-80 border-b border-gray-200 pb-6">
                  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                </p>
                <p className="text-2xl md:text-3xl font-serif leading-relaxed opacity-90 px-4 text-center" dir="rtl">
                  وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا...
                </p>
                <p className="text-sm leading-relaxed opacity-60 italic font-serif px-8">
                  "Dan di antara tanda-tanda kekuasaan-Nya ialah menciptakan untukmu isteri-isteri dari jenismu sendiri..."
                </p>
              </div>
            </div>
          </section>

          {/* 3. PROFIL DETAIL MEMPELAI (Identity Page) */}
          <section className="py-10 px-4 flex justify-center">
             <div className="w-full max-w-4xl bg-[#e8eef3] rounded-lg shadow-inner p-6 md:p-10 border border-gray-300">
                <div className="flex flex-col md:flex-row gap-8">
                   <div className="w-40 h-52 bg-gray-300 rounded border-4 border-white shadow-md mx-auto md:mx-0 overflow-hidden relative">
                      <img src={placeholderImg} className="w-full h-full object-cover grayscale" />
                      <div className="absolute bottom-2 left-0 right-0 bg-red-600/80 text-white text-[8px] py-1 font-bold uppercase tracking-tighter">Verified Passenger</div>
                   </div>
                   <div className="flex-1 space-y-4 font-mono text-sm text-left">
                      <div className="grid grid-cols-2 gap-2 border-b border-gray-300 pb-2">
                        <span className="text-gray-400 uppercase text-[10px]">Surname / Nama</span>
                        <span className="font-bold">RAHMATULLOH / PARTNER</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b border-gray-300 pb-2">
                        <span className="text-gray-400 uppercase text-[10px]">Given Names</span>
                        <span className="font-bold uppercase">Sahril & Soulmate</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 border-b border-gray-300 pb-2">
                        <span className="text-gray-400 uppercase text-[10px]">Nationality</span>
                        <span className="font-bold">KINGDOM OF LOVE</span>
                      </div>
                      <p className="text-[10px] text-red-600 font-bold mt-4">P&lt;LOVEINDONESIA&lt;&lt;SAHRIL&lt;PARTNER&lt;&lt;&lt;&lt;26042026</p>
                   </div>
                </div>
             </div>
          </section>

          {/* 4. BOARDING PASS SECTION (Location/Gate) */}
          <section className="py-10 px-4 flex justify-center">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row border-2 border-dashed border-gray-300">
              <div className="flex-[2] p-8 md:p-12 relative border-b-2 md:border-b-0 md:border-r-2 border-dashed border-gray-200 text-left">
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-3">
                    <Plane className="text-[#0d544e]" />
                    <span className="font-bold tracking-tighter text-xl">LOVE AIRWAYS</span>
                  </div>
                  <span className="text-xs font-mono bg-gray-100 px-3 py-1 rounded">FLIGHT: SN-2026</span>
                </div>
                <div className="grid grid-cols-2 gap-10 mb-10 text-left">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase text-gray-400 font-bold">Passenger Name</p>
                    <p className="text-xl font-serif font-bold italic">Sahril & Partner</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase text-gray-400 font-bold">Departure Date</p>
                    <p className="text-xl font-bold">26 APR 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                   <Navigation className="text-[#0d544e]" size={20} />
                   <div className="text-left">
                     <p className="text-[10px] uppercase font-bold text-gray-400">Boarding Gate</p>
                     <p className="text-sm font-bold">Masjid Agung & Hotel Mulia, Jakarta</p>
                   </div>
                </div>
              </div>
              <div className="flex-1 p-8 bg-[#0d544e] text-white flex flex-col justify-center items-center text-center">
                <Heart className="mb-4 text-[#d4af37] fill-[#d4af37]" />
                <p className="text-[10px] uppercase tracking-widest opacity-60">Section</p>
                <p className="text-2xl font-serif italic mb-6">VIP GUEST</p>
              </div>
            </div>
          </section>

          {/* 5. GALLERY (Travel Log) */}
          <section className="py-20 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Camera className="w-6 h-6 mx-auto opacity-30 text-[#0d544e]" />
              <h2 className="text-3xl font-bold uppercase tracking-[0.4em] text-[#0d544e]">Travel Log</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {[1, 2, 3].map((num) => (
                <div key={num} className={`bg-white p-4 pb-12 shadow-xl border border-gray-100 transform ${num % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:rotate-0 transition-transform duration-500`}>
                  <div className="aspect-square bg-gray-200 overflow-hidden mb-4 relative group">
                    <img src={placeholderImg} className="w-full h-full object-cover opacity-20" />
                  </div>
                  <p className="text-center font-serif italic text-sm text-gray-400 text-center">Moment #{num}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. VISA STAMP (Events Schedule) */}
          <section className="py-20 px-6 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative p-10 bg-white border-4 border-[#0d544e] rounded-full aspect-square flex flex-col items-center justify-center text-center rotate-[-3deg] shadow-lg">
                <Calendar className="mb-2 text-[#0d544e]" />
                <h3 className="font-bold uppercase tracking-widest text-[#0d544e]">Akad Nikah</h3>
                <p className="text-sm font-bold uppercase mt-2">09:00 AM</p>
              </div>
              <div className="relative p-10 bg-[#0d544e] text-white border-4 border-[#d4af37] rounded-[40px] aspect-square flex flex-col items-center justify-center text-center rotate-[3deg] shadow-lg">
                <Clock className="mb-2 text-[#d4af37]" />
                <h3 className="font-bold uppercase tracking-widest text-[#d4af37]">Reception</h3>
                <p className="text-sm font-bold uppercase mt-2">01:00 PM</p>
              </div>
            </div>
          </section>

          {/* 7. DIGITAL GIFT (Travel Fund) */}
          <section className="py-20 px-6 text-center">
             <Gift className="w-8 h-8 mx-auto text-[#0d544e] mb-4 opacity-40" />
             <h2 className="text-2xl font-bold uppercase tracking-[0.2em] mb-10">Wedding Gift</h2>
             <div className="max-w-md mx-auto bg-white border-2 border-[#0d544e] rounded-2xl p-8 shadow-xl">
                <p className="text-[10px] font-bold uppercase text-gray-400 mb-4">BCA - Sahril Rahmatulloh</p>
                <p className="text-2xl font-mono font-bold mb-6">1234 5678 90</p>
                <button className="w-full py-3 bg-[#0d544e] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">Copy Account</button>
             </div>
          </section>

          {/* 8. COUNTDOWN (Departure Time) */}
          <section className="py-20 bg-white/50 border-y border-gray-200">
             <div className="max-w-4xl mx-auto text-center px-6">
                <p className="text-[10px] uppercase tracking-[0.4em] mb-8 font-bold text-[#0d544e]">Time Remaining Until Departure</p>
                <div className="grid grid-cols-4 gap-4">
                   {[
                     { label: 'Days', value: timeLeft.days },
                     { label: 'Hours', value: timeLeft.hours },
                     { label: 'Mins', value: timeLeft.minutes },
                     { label: 'Secs', value: timeLeft.seconds }
                   ].map((item, idx) => (
                     <div key={idx} className="bg-[#0d544e] text-white p-4 rounded-lg shadow-lg">
                        <p className="text-2xl md:text-4xl font-bold font-mono">{item.value}</p>
                        <p className="text-[8px] uppercase tracking-widest opacity-60">{item.label}</p>
                     </div>
                   ))}
                </div>
             </div>
          </section>

          {/* 9. RSVP & WISHES (Departure Card) */}
          <section className="py-20 px-6 max-w-2xl mx-auto text-center">
             <MessageSquare className="w-8 h-8 mx-auto text-[#0d544e] mb-4 opacity-40" />
             <h2 className="text-2xl font-bold uppercase tracking-[0.2em] mb-4">Wishes & RSVP</h2>
             <p className="text-xs text-gray-500 italic mb-10">"Please confirm your attendance in our adventure log"</p>
             <div className="space-y-4">
                <input className="w-full p-4 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#0d544e]" placeholder="Your Name" />
                <textarea className="w-full p-4 bg-white border border-gray-300 rounded-lg text-sm h-32 focus:outline-none focus:border-[#0d544e]" placeholder="Write your warm wishes..." />
                <button className="w-full py-4 bg-[#d4af37] text-[#0d544e] font-bold uppercase text-xs tracking-widest rounded-lg flex items-center justify-center gap-2 hover:bg-[#0d544e] hover:text-white transition-all">
                   <Send size={14} /> Send Message
                </button>
             </div>
          </section>

          {/* 10. CLOSING */}
          <footer className="py-32 bg-[#0d544e] text-white text-center px-6">
            <Globe className="w-8 h-8 mx-auto text-[#d4af37] animate-pulse mb-8" />
            <h2 className="text-3xl md:text-4xl font-serif italic">"To travel together is to love."</h2>
            <div className="pt-12 opacity-50 space-y-2 text-center">
              <p className="text-[10px] uppercase tracking-[0.5em]">Start of Eternal Adventure</p>
              <p className="text-[10px] uppercase tracking-[0.5em]">Sahril & Partner — 2026</p>
            </div>
          </footer>

          <div className="fixed bottom-8 right-8 z-[110]">
            <button className="w-12 h-12 bg-[#d4af37] text-[#0d544e] rounded-full flex items-center justify-center shadow-2xl">
              <Music size={18} fill="currentColor" />
            </button>
          </div>

        </main>
      )}
    </div>
  );
}