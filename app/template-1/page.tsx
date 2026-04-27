"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Clock, Gift, Heart, Music, Copy, Check, Moon, Sun } from 'lucide-react';

// --- ANIMASI REVEAL PREMIUM ---
const Reveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1800ms] cubic-bezier(0.16, 1, 0.3, 1) ${className} ${
        isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-24 blur-md"
      }`}
    >
      {children}
    </div>
  );
};

export default function TemplateMonochromeV2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false); 
  const [offset, setOffset] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 120, hours: 5, minutes: 30, seconds: 0 });
  const [showToast, setShowToast] = useState(false);
  
  // --- STATE MUSIK (UPDATED: HTML5 AUDIO) ---
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const musicSource = "/music/wedding-song2.mp3"; 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => ({ ...prev, seconds: prev.seconds > 0 ? prev.seconds - 1 : 59 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    
    // --- PEMICU MUSIK MP3 ---
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Autoplay diblokir browser, menunggu interaksi user.", err);
      });
    }

    // --- FIX SCROLL UNTUK MOBILE ---
    // Menggunakan timeout kecil untuk memastikan state isOpen sudah terproses
    setTimeout(() => {
      const root = document.documentElement;
      const body = document.body;
      
      root.style.overflow = 'auto';
      body.style.overflow = 'auto';
      root.style.height = 'auto';
      body.style.height = 'auto';
      
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 10);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const copyToClipboard = (text: string) => {
    const executeCopy = () => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => executeCopy());
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      executeCopy();
      document.body.removeChild(textArea);
    }
  };

  const getDummyImg = (id: number, w: number, h: number) => `https://picsum.photos/id/${id}/${w}/${h}`;

  return (
    <div 
      style={{ 
        backgroundColor: isDark ? "#0a0a0a" : "#fcfcfc", 
        color: isDark ? "#ffffff" : "#1a1a1a",
        transition: "background-color 0.7s ease",
        isolation: 'isolate'
      }}
      className="min-h-screen font-sans antialiased"
    >
      <audio ref={audioRef} src={musicSource} loop preload="auto" />
      
      {isOpen && (
        <button 
          onClick={() => setIsDark(!isDark)}
          className={`fixed top-8 right-8 z-[200] p-4 rounded-full transition-all duration-500 border shadow-xl active:scale-90 ${
            isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"
          }`}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      )}

      <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-[1000000] transition-all duration-500 ease-out ${
        showToast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
      }`}>
        <div className={`px-8 py-4 shadow-2xl flex items-center gap-3 border ${
          isDark ? "bg-black border-white text-white" : "bg-white border-black text-black"
        }`}>
          <Check size={16} />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Berhasil copy norek</span>
        </div>
      </div>

      {/* --- 1. COVER LAYER (FIXED FOR MOBILE) --- */}
      <section 
        className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center transition-all duration-[1000ms] p-6 ${
          isDark ? "bg-[#0a0a0a]" : "bg-white"
        } ${isOpen ? "opacity-0 invisible pointer-events-none -translate-y-full" : "opacity-100 visible"}`}
      >
        {/* Background Siluet */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <h1 className="text-[45vw] md:text-[50vw] font-serif font-black leading-none text-center">
            S&P
          </h1>
        </div>

        <div className="relative z-10 text-center space-y-12">
          <span className="block tracking-[1.2em] text-[10px] uppercase opacity-40">Wedding Invitation</span>
          <h1 className="text-5xl md:text-[10rem] font-serif font-extralight tracking-tighter italic leading-none px-4">Sahril & Partner</h1>
          
          <button 
            onClick={handleOpen} 
            className={`group relative px-20 py-6 border transition-all cursor-pointer overflow-hidden active:scale-95 z-[1000001] ${
              isDark ? "border-white bg-transparent" : "border-black bg-white"
            }`}
          >
            <div className={`absolute inset-0 w-0 transition-all duration-500 group-hover:w-full ${isDark ? "bg-white" : "bg-black"}`} />
            <span className={`relative z-10 text-[10px] uppercase tracking-[0.6em] font-bold transition-colors duration-500 ${
              isDark ? "text-white group-hover:text-black" : "text-black group-hover:text-white"
            }`}>
              Open Invitation
            </span>
          </button>
        </div>
      </section>

      {/* --- 2. MAIN CONTENT --- */}
      {isOpen && (
        <main className="relative animate-in fade-in slide-in-from-bottom-10 duration-1000" style={{ backgroundColor: "inherit" }}>
          <div className={`fixed inset-y-0 left-4 md:left-16 w-[1px] z-0 pointer-events-none ${isDark ? "bg-white/10" : "bg-black/[0.03]"}`} />
          <div className={`fixed inset-y-0 right-4 md:right-16 w-[1px] z-0 pointer-events-none ${isDark ? "bg-white/10" : "bg-black/[0.03]"}`} />

          <section className="min-h-screen flex items-center justify-center px-6 py-40 relative z-10">
            <Reveal className="max-w-4xl w-full text-center space-y-12">
              <p className="text-3xl font-serif italic opacity-80" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
              <p className="text-2xl md:text-4xl font-serif leading-relaxed opacity-90" dir="rtl">
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَهُمْ مَوَدَّةً وَرَحْمَةً
              </p>
              <p className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-40">— Q.S Ar-Rum: 21</p>
            </Reveal>
          </section>

          <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-24">
              <div className="space-y-12">
                <Reveal delay={200} className="aspect-[3/4] overflow-hidden bg-neutral-900 shadow-2xl">
                  <img src={getDummyImg(64, 800, 1100)} className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700" style={{ transform: `translateY(${offset * 0.04}px)` }} />
                </Reveal>
                <Reveal delay={400} className="space-y-4">
                  <span className="text-[10px] tracking-[1em] uppercase opacity-40 block">The Groom</span>
                  <h2 className="text-6xl font-serif italic tracking-tighter">Sahril Rahmatulloh</h2>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Putra dari Bpk. Sahril Sr. & Ibu Sahril</p>
                </Reveal>
              </div>
              <div className="space-y-12 md:pt-60 text-right flex flex-col items-end">
                <Reveal delay={600} className="space-y-4">
                  <h2 className="text-6xl font-serif italic tracking-tighter">Nama Partner</h2>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Putri dari Bpk. Partner & Ibu Partner</p>
                  <span className="text-[10px] tracking-[1em] uppercase opacity-40 block">The Bride</span>
                </Reveal>
                <Reveal delay={800} className="aspect-[3/4] overflow-hidden bg-neutral-900 shadow-2xl w-full">
                  <img src={getDummyImg(454, 800, 1100)} className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700" style={{ transform: `translateY(${offset * -0.03}px)` }} />
                </Reveal>
              </div>
            </div>
          </section>

          <section className={`mt-60 py-60 relative z-10 overflow-hidden ${isDark ? "bg-white text-black" : "bg-[#080808] text-white"}`}>
            <div className="max-w-5xl mx-auto px-6 space-y-32">
              <Reveal className="text-center space-y-16">
                <h2 className="text-7xl font-serif italic tracking-tighter">Save the Date</h2>
                <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {Object.entries(timeLeft).map(([label, value]) => (
                    <div key={label} className={`border py-8 ${isDark ? "border-black/10 bg-black/5" : "border-white/10 bg-white/5"}`}>
                      <span className="block text-4xl font-serif italic">{value}</span>
                      <span className="block text-[8px] uppercase tracking-widest opacity-40 mt-2">{label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-8">
                <Reveal delay={200} className={`p-12 border space-y-8 ${isDark ? "border-black/10 bg-black/5" : "border-white/10 bg-white/5"}`}>
                  <h4 className="text-4xl font-serif italic border-b pb-6">Akad Nikah</h4>
                  <div className="space-y-4 text-[11px] tracking-[0.2em] uppercase opacity-70">
                    <div className="flex items-center gap-4"><Calendar size={14}/> 26 April 2026</div>
                    <div className="flex items-center gap-4"><Clock size={14}/> 09:00 — 11:00 WIB</div>
                    <div className="flex items-start gap-4 leading-relaxed"><MapPin size={14}/> Masjid Agung Sunda Kelapa, Jakarta</div>
                  </div>
                </Reveal>
                <Reveal delay={400} className={`p-12 space-y-8 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
                  <h4 className="text-4xl font-serif italic border-b pb-6">Resepsi</h4>
                  <div className="space-y-4 text-[11px] tracking-[0.2em] uppercase opacity-70">
                    <div className="flex items-center gap-4"><Calendar size={14}/> 26 April 2026</div>
                    <div className="flex items-center gap-4"><Clock size={14}/> 13:00 — Selesai</div>
                    <div className="flex items-start gap-4 leading-relaxed"><MapPin size={14}/> Hotel Mulia Ballroom, Jakarta</div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="py-60 px-4 max-w-7xl mx-auto relative z-10">
            <Reveal className="text-center mb-40">
              <h2 className="text-7xl font-serif italic tracking-tighter">Our Memoirs.</h2>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[102, 103, 104, 119, 158, 160].map((id, i) => (
                <Reveal key={id} delay={i * 100} className="aspect-square overflow-hidden grayscale brightness-90 hover:brightness-100 transition-all duration-1000">
                  <img src={getDummyImg(id, 800, 800)} className="w-full h-full object-cover hover:scale-110 transition-transform duration-[3s]" />
                </Reveal>
              ))}
            </div>
          </section>

          <section className="py-40 px-6 relative z-10 text-center">
            <Reveal className="max-w-md mx-auto space-y-12">
              <div className="space-y-4"><Gift className="w-6 h-6 mx-auto opacity-20" /><h2 className="text-5xl font-serif italic tracking-tighter">Wedding Gift</h2></div>
              <div className={`p-12 border shadow-2xl space-y-6 ${isDark ? "bg-white text-black border-white" : "bg-white text-black border-black/5"}`}>
                <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold">BCA Account</p>
                <p className="text-3xl font-serif tracking-widest">1234 5678 90</p>
                <p className="text-[10px] opacity-60 uppercase tracking-widest font-bold">A.N Sahril Rahmatulloh</p>
                <button onClick={() => copyToClipboard("1234567890")} className="mt-4 px-10 py-3 text-[9px] uppercase tracking-widest flex items-center gap-3 mx-auto transition-all bg-black text-white">
                  <Copy size={12} /> Copy Number
                </button>
              </div>
            </Reveal>
          </section>

          <footer className={`py-60 text-center relative z-10 border-t ${isDark ? "border-white/10" : "border-black/5"}`}>
            <Reveal className="space-y-12 opacity-80">
              <Heart className="w-5 h-5 mx-auto opacity-20 animate-pulse" />
              <h2 className="text-7xl font-serif italic tracking-tighter leading-none">Thank You.</h2>
              <p className="text-[10px] uppercase tracking-[0.5em] opacity-40">Sahril & Partner — 2026</p>
            </Reveal>
          </footer>

          <div className="fixed bottom-12 right-12 z-[100]">
            <button onClick={toggleMusic} className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${isDark ? "bg-white text-black" : "bg-black text-white"} ${isPlaying ? "animate-spin-slow" : ""}`}>
              {isPlaying ? <Music size={18} className="animate-pulse" /> : <Music size={18} className="opacity-40" />}
            </button>
          </div>
        </main>
      )}

      <style jsx global>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        :root { color-scheme: only ${isDark ? 'dark' : 'light'} !important; }
        html, body {
          margin: 0; padding: 0; width: 100%; min-height: 100%; overflow-x: hidden !important;
          background-color: ${isDark ? "#0a0a0a" : "#fcfcfc"} !important;
          color: ${isDark ? "#ffffff" : "#1a1a1a"} !important;
        }
        ${!isOpen ? 'body { height: 100vh !important; overflow: hidden !important; position: fixed; width: 100%; }' : 'body { position: relative; }'}
      `}</style>
    </div>
  );
}