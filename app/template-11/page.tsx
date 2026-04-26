"use client";

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Heart, MapPin, Calendar, Clock, 
  MailOpen, Copy, Check, Music,
  Users, Hand, MessageSquare, Send
} from 'lucide-react';

export const placeholderImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export default function TemplateMysticLamp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [rubCount, setRubCount] = useState(0); 
  const [isGenieAppearing, setIsGenieAppearing] = useState(false);
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

  const handleRubbing = () => {
    if (isOpen || isGenieAppearing) return;
    setRubCount(prev => prev + 1);
    if (rubCount >= 15) { // Ditingkatkan ke 15 agar sensasi menggosok lebih terasa
      setIsGenieAppearing(true);
      setTimeout(() => {
        setIsOpen(true);
        setIsGenieAppearing(false);
      }, 3000); 
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-[#0b032d] text-[#e0def4] font-serif min-h-screen overflow-x-hidden selection:bg-[#f6c177] selection:text-black relative">
      
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {!isOpen ? (
        <section className="fixed inset-0 z-[9999] bg-[#02010a] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
          
          {/* EFEK ASAP JIN */}
          {isGenieAppearing && (
            <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute bg-blue-400/30 rounded-full blur-[50px] animate-smoke"
                  style={{
                    width: `${Math.random() * 250 + 150}px`,
                    height: `${Math.random() * 250 + 150}px`,
                    left: `${30 + Math.random() * 40}%`,
                    top: `${40 + Math.random() * 30}%`,
                    animationDelay: `${Math.random() * 0.8}s`,
                  }}
                />
              ))}
              <div className="relative z-[60] flex flex-col items-center animate-genie-rise">
                 <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
                 <h2 className="text-[#f6c177] text-6xl font-black italic drop-shadow-[0_0_20px_rgba(246,193,119,0.8)]">POOF!</h2>
                 <p className="text-white text-sm tracking-[0.5em] mt-4 font-sans uppercase">Your Wish is Granted</p>
              </div>
            </div>
          )}

          <div className={`relative z-10 w-full max-w-sm text-center space-y-12 transition-all duration-1000 ${isGenieAppearing ? 'scale-150 blur-xl opacity-0' : 'animate-in fade-in zoom-in'}`}>
             <div className="space-y-3">
                <Sparkles className="mx-auto text-[#f6c177] animate-pulse" size={40} />
                <h1 className="text-2xl font-light italic tracking-widest text-white">A Mystic Wish Awaits...</h1>
                <p className="text-[10px] opacity-70 font-sans tracking-[0.3em] uppercase">Rub the lamp to summon the invite</p>
             </div>

             <div 
               onMouseMove={handleRubbing} 
               onTouchMove={handleRubbing}
               className="relative group cursor-pointer py-10"
             >
                <div className={`w-64 h-32 mx-auto transition-transform duration-300 ${rubCount > 0 ? 'animate-wiggle' : ''}`}>
                   <div className="absolute inset-0 bg-[#f6c177] rounded-full blur-[70px] opacity-20 group-hover:opacity-40 transition-opacity" />
                   
                   {/* Lamp Illustration SVG */}
                   <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(246,193,119,0.5)]">
                      <path 
                        d="M40,60 Q40,30 100,30 Q160,30 160,60 Q160,90 100,90 Q40,90 40,60" 
                        fill="#f6c177" 
                        stroke="#c4a162" 
                        strokeWidth="2"
                      />
                      <path d="M160,50 Q190,50 190,70 Q190,90 170,90 Q150,90 155,75" fill="none" stroke="#c4a162" strokeWidth="4" />
                      <path d="M40,55 L10,45 Q5,40 15,35 L45,45" fill="#f6c177" stroke="#c4a162" strokeWidth="2" />
                      <circle cx="100" cy="25" r="5" fill="#c4a162" />
                   </svg>
                </div>
                
                <div className="mt-8 space-y-4">
                   <div className="flex justify-center items-center gap-3 text-white">
                      <Hand className="animate-[bounce_2s_infinite]" size={18} />
                      <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em]">Rub the Lamp vigorously!</span>
                   </div>
                   <div className="h-1.5 w-40 bg-white/10 mx-auto rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-[#31748f] to-[#f6c177] transition-all duration-300" 
                        style={{ width: `${(rubCount / 15) * 100}%` }} 
                      />
                   </div>
                </div>
             </div>
          </div>
        </section>
      ) : (
        <main className="max-w-2xl mx-auto pb-32 relative animate-in fade-in slide-in-from-bottom-20 duration-1000">
          <nav className="fixed top-0 left-0 right-0 z-[100] p-4 flex justify-end">
             <button className="w-10 h-10 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-[#f6c177]">
                <Music size={18} className="animate-spin-slow" />
             </button>
          </nav>

          <div className="m-4 md:m-8 bg-[#fffcf0] text-[#1f1d2e] shadow-2xl rounded-sm relative overflow-hidden border-t-[15px] border-b-[15px] border-[#c4a162]">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')]" />
            
            <section className="pt-16 pb-8 text-center space-y-4 px-8">
              <div className="flex justify-center gap-1.5">
                 <Sparkles className="text-[#f6c177]" size={20} />
                 <Sparkles className="text-[#f6c177] -mt-2" size={20} />
                 <Sparkles className="text-[#f6c177]" size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#cca43b] font-sans font-bold">Your Wish is Granted</span>
                <h1 className="text-4xl font-light text-black tracking-tight leading-tight">Sahril & Partner</h1>
              </div>
            </section>

            <section className="px-8 py-4">
               <div className="bg-white p-2 shadow-inner border border-gray-100 relative group overflow-hidden aspect-video">
                  <img src={placeholderImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Couple" />
                  <div className="absolute inset-0 bg-[#31748f]/10" />
               </div>
            </section>

            <section className="py-12 px-10 text-center space-y-8">
              <p className="text-sm md:text-base leading-relaxed italic text-gray-700">
                "It’s not just a wedding; it's the fulfillment of a lifelong dream. Join us as we grant our own wish to become one."
              </p>
              <div className="h-[2px] w-16 bg-[#cca43b]/30 mx-auto" />
              <div className="space-y-12">
                <div className="space-y-3">
                   <p className="text-sm font-sans tracking-wide">The Milestone Day</p>
                   <h2 className="text-3xl font-light text-black">Sunday, April 26, 2026</h2>
                </div>
                <div className="grid grid-cols-2 gap-8 text-center pt-4">
                  <div className="space-y-2 border-r border-gray-200 pr-8">
                    <p className="text-xs font-sans font-bold uppercase text-[#cca43b]">The Covenant (Akad)</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-black">
                      <Clock size={12} /> 09:00 AM WIB
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-sans font-bold uppercase text-[#cca43b]">The Magic Feast</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-black">
                      <Clock size={12} /> 01:00 PM WIB
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-6 border-t border-gray-100">
                   <p className="text-sm leading-relaxed text-gray-800">
                     <span className="font-bold text-black text-lg">Hotel Mulia, Jakarta</span><br />
                     Grand Ballroom, Senayan, Jakarta Pusat
                   </p>
                   <button className="inline-flex items-center gap-2 px-6 py-2 bg-[#1A1A1A] text-white rounded-full text-[10px] uppercase tracking-widest font-sans hover:bg-[#31748f] transition-all shadow-md">
                     <MapPin size={14} /> Open Magic Map
                   </button>
                </div>
              </div>
            </section>

            <section className="bg-[#f7f2e0] py-12 px-6 border-y border-[#cca43b]/20 text-black">
              <div className="grid grid-cols-4 gap-2 text-center max-w-sm mx-auto">
                {Object.entries(timeLeft).map(([unit, val]) => (
                  <div key={unit}>
                    <p className="text-3xl font-light">{val}</p>
                    <p className="text-[8px] font-sans font-bold uppercase text-[#cca43b] tracking-widest">{unit}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-12 text-center space-y-10">
               <div className="space-y-2">
                  <h3 className="text-xl font-light text-black">The Couple's Wish List</h3>
                  <p className="text-[10px] font-sans text-gray-400 uppercase tracking-[0.2em]">Magical Support</p>
               </div>
               <div className="bg-black/5 p-6 rounded-md border border-gray-100 space-y-4 max-w-xs mx-auto shadow-inner relative overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <p className="text-xs font-sans font-bold text-[#cca43b]">BCA — 1234567890</p>
                    <p className="text-sm italic">Sahril Rahmatulloh</p>
                    <button 
                      onClick={() => copyToClipboard("1234567890")}
                      className="text-[10px] uppercase tracking-widest flex items-center gap-2 mx-auto hover:text-[#31748f] transition-colors"
                    >
                      {isCopied ? <Check size={14} /> : <Copy size={14} />} {isCopied ? "Stored!" : "Copy Details"}
                    </button>
                  </div>
               </div>
            </section>

            <section className="p-12 bg-[#2c2621] text-[#fdfaf1]">
               <div className="text-center space-y-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                      <MessageSquare size={16} className="text-[#f6c177]" />
                      <h3 className="text-white font-bold uppercase italic text-xs tracking-widest">Share Your Blessings (RSVP)</h3>
                  </div>
                  <div className="space-y-4 text-left">
                    <input className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm text-white focus:outline-none focus:border-[#f6c177] transition-colors" placeholder="Your Name" />
                    <textarea className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm h-24 text-white focus:outline-none focus:border-[#f6c177] transition-colors" placeholder="Write your magic wishes..." />
                    <button className="w-full bg-[#f6c177] text-black py-3 rounded text-xs font-sans font-bold uppercase tracking-widest hover:bg-[#31748f] hover:text-white transition-all flex items-center justify-center gap-2">
                       <Send size={14} /> Post Wish
                    </button>
                  </div>
               </div>
            </section>

            <footer className="py-12 text-center space-y-4 bg-white/30 border-t border-gray-100">
               <Sparkles size={24} className="mx-auto opacity-20 text-[#cca43b]" />
               <p className="text-[10px] font-sans tracking-[0.5em] opacity-30 uppercase italic text-[#cca43b]">Our Journey • April 26, 2026</p>
            </footer>
          </div>
        </main>
      )}

      <style jsx global>{`
        @keyframes smoke {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateY(-400px) scale(3); opacity: 0; }
        }
        @keyframes genie-rise {
          0% { transform: translateY(50px) scale(0.8); opacity: 0; filter: blur(10px); }
          30% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0px); }
          100% { transform: translateY(-20px) scale(1.1); opacity: 0; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg) scale(1); }
          50% { transform: rotate(3deg) scale(1.1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-smoke { animation: smoke 2.5s ease-out forwards; }
        .animate-genie-rise { animation: genie-rise 3s ease-in-out forwards; }
        .animate-wiggle { animation: wiggle 0.2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </div>
  );
}