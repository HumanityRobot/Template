"use client";

import React, { useState, useEffect } from 'react';
import { 
  Heart, MapPin, Calendar, Clock, 
  ShieldCheck, PenTool, Fingerprint, Copy, Check, 
  Mail, Users, Music, BookOpen, UserCheck, 
  ChevronRight, Landmark
} from 'lucide-react';

export const placeholderImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export default function TemplateBukuNikah() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Ganti path ini sesuai lokasi logo Garuda kamu
  const logoGarudaPath = "/Logo_Garuda.png";

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-[#fdfbf7] text-[#2c3e50] min-h-screen font-serif selection:bg-[#9e2a2b] selection:text-white relative overflow-x-hidden">
      
      {!isOpen ? (
        /* 1. COVER: DUAL GREEN BOOKS WITH GARUDA LOGO */
        <section className="fixed inset-0 z-[9999] bg-[#121212] flex flex-col items-center justify-center p-6 text-center">
          <div className="relative flex -space-x-12 animate-in fade-in zoom-in duration-1000">
             
             {[ "SUAMI", "ISTRI" ].map((label, index) => (
                <div 
                  key={index}
                  className={`w-44 h-64 bg-[#1b4d3e] rounded-r-xl shadow-[10px_10px_40px_rgba(0,0,0,0.6)] border-l-[12px] border-black/40 p-4 flex flex-col items-center justify-between text-[#d4af37] relative overflow-hidden transition-transform duration-500 hover:scale-105 ${index === 0 ? "hover:-rotate-6" : "hover:rotate-6 z-10"}`}
                >
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leather.png')]" />
                  
                  <div className="z-10 text-center space-y-0">
                     <p className="text-[11px] font-bold tracking-[0.1em] leading-tight">BUKU NIKAH</p>
                     <p className="text-[10px] font-serif italic tracking-widest leading-tight uppercase">Marriage Book</p>
                  </div>

                  {/* Logo Garuda Custom */}
                  <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                     <div className="absolute inset-0 animate-pulse opacity-10 bg-[#d4af37] rounded-full blur-2xl" />
                     <img 
                        src={logoGarudaPath} 
                        alt="Garuda Pancasila" 
                        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                     />
                  </div>

                  <div className="z-10 text-center space-y-1">
                     <div className="space-y-0 text-[7px] font-bold tracking-[0.05em] uppercase leading-none opacity-90">
                        <p>Kementerian Agama</p>
                        <p>Republik Indonesia</p>
                     </div>
                     <div className="space-y-0 text-[6px] font-serif italic leading-none opacity-70">
                        <p>Ministry of Religious Affairs</p>
                        <p>Republic of Indonesia</p>
                     </div>
                     
                     <div className="mt-2 pt-1 border-t border-[#d4af37]/40 w-full">
                        <p className="text-[9px] font-black tracking-[0.3em]">{label}</p>
                     </div>
                  </div>
                </div>
             ))}
          </div>

          <div className="mt-16 space-y-6 max-w-xs relative z-20">
             <div className="text-white space-y-2">
                <h2 className="text-2xl font-bold tracking-[0.2em] uppercase italic">Wedding Of</h2>
                <p className="text-[10px] opacity-60 font-sans tracking-[0.3em] uppercase">Sahril Rahmatulloh & Partner</p>
             </div>
             <button 
               onClick={() => setIsOpen(true)}
               className="group flex items-center gap-3 bg-[#d4af37] text-black px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95 mx-auto"
             >
               <BookOpen size={16} /> Buka Lembar Akad
             </button>
          </div>
        </section>
      ) : (
        <main className="max-w-2xl mx-auto pb-24 relative animate-in slide-in-from-bottom-10 duration-1000">
          
          <div className="fixed bottom-6 right-6 z-[100]">
             <button className="w-14 h-14 bg-[#1b4d3e] text-[#d4af37] rounded-full shadow-2xl flex items-center justify-center border-2 border-[#d4af37] animate-[spin_8s_linear_infinite]">
                <Music size={24} />
             </button>
          </div>

          <div className="bg-white border-b-[6px] border-[#d4af37] p-10 text-center space-y-6 shadow-sm">
             <div className="relative inline-block">
                <ShieldCheck size={48} className="text-[#1b4d3e] mx-auto" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4af37] rounded-full border-2 border-white" />
             </div>
             <div className="space-y-2">
                <h1 className="text-4xl font-black text-[#1a1a1a] uppercase tracking-tighter">Kutipan Akta Nikah</h1>
                <p className="text-[10px] font-sans text-gray-400 tracking-[0.4em] uppercase font-bold">No. Registrasi: 26.04.2026/SR-PTN</p>
             </div>
          </div>

          <div className="p-6 md:p-12 space-y-16">
            
            <section className="flex flex-col items-center gap-8">
               <div className="flex justify-center gap-6">
                  <div className="relative group">
                     <div className="w-32 h-44 md:w-40 md:h-52 bg-[#003366] p-1.5 shadow-2xl rounded-sm transform hover:-rotate-1 transition-transform">
                        <img src={placeholderImg} className="w-full h-full object-cover grayscale brightness-110" alt="Suami" />
                        <div className="absolute bottom-2 left-0 right-0 text-center">
                           <p className="text-[7px] text-white/50 font-sans tracking-widest uppercase">Mempelai Pria</p>
                        </div>
                     </div>
                     <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                        <Heart size={16} fill="currentColor" />
                     </div>
                  </div>
                  <div className="relative group">
                     <div className="w-32 h-44 md:w-40 md:h-52 bg-[#003366] p-1.5 shadow-2xl rounded-sm transform hover:rotate-1 transition-transform">
                        <img src={placeholderImg} className="w-full h-full object-cover grayscale brightness-110" alt="Istri" />
                        <div className="absolute bottom-2 left-0 right-0 text-center">
                           <p className="text-[7px] text-white/50 font-sans tracking-widest uppercase">Mempelai Wanita</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="text-center space-y-1">
                  <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">Sahril R. & Partner</h2>
                  <p className="text-xs italic text-gray-500 font-sans">Akan mengikat janji suci di hadapan Sang Khalik</p>
               </div>
            </section>

            <section className="text-center max-w-md mx-auto space-y-6">
               <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
               <p className="text-sm md:text-base leading-relaxed italic text-gray-600 font-serif">
                 "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya..."
               </p>
               <p className="text-xs font-bold text-[#1b4d3e] uppercase tracking-widest">(Ar-Rum: 21)</p>
               <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </section>

            <section className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden shadow-xl">
               <div className="bg-[#1b4d3e] p-5 flex items-center gap-3">
                  <Calendar className="text-[#d4af37]" size={20} />
                  <p className="text-xs font-black uppercase tracking-widest text-white">Lembar Jadwal Perhelatan</p>
               </div>
               <div className="divide-y divide-gray-100 font-sans">
                  <div className="p-6 flex flex-col md:flex-row justify-between gap-4">
                     <div className="space-y-1">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Waktu Akad</p>
                        <p className="text-lg font-bold text-[#1a1a1a]">Minggu, 26 April 2026</p>
                        <div className="flex items-center gap-2 text-sm text-[#1b4d3e] font-bold">
                           <Clock size={14} /> 09:00 WIB — Selesai
                        </div>
                     </div>
                     <div className="md:text-right space-y-1">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Lokasi</p>
                        <p className="text-sm font-bold">Masjid Agung Sunda Kelapa</p>
                        <p className="text-xs text-gray-500 italic">Menteng, Jakarta Pusat</p>
                     </div>
                  </div>
                  <div className="p-6 flex flex-col md:flex-row justify-between gap-4 bg-[#fdfbf7]/50">
                     <div className="space-y-1">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Waktu Resepsi</p>
                        <p className="text-lg font-bold text-[#1a1a1a]">Minggu, 26 April 2026</p>
                        <div className="flex items-center gap-2 text-sm text-[#1b4d3e] font-bold">
                           <Users size={14} /> 13:00 WIB — Selesai
                        </div>
                     </div>
                     <div className="md:text-right space-y-1">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Venue</p>
                        <p className="text-sm font-bold">Grand Ballroom, Hotel Mulia</p>
                        <p className="text-xs text-gray-500 italic">Senayan, Jakarta Pusat</p>
                     </div>
                  </div>
               </div>
               <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <button className="w-full py-3 bg-white border border-gray-200 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                     <MapPin size={14} className="text-[#1b4d3e]" /> Buka Koordinat Lokasi
                  </button>
               </div>
            </section>

            <section className="bg-[#1b4d3e] text-[#d4af37] p-8 rounded-xl shadow-2xl text-center space-y-6">
               <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Menuju Ikrar Suci</p>
               <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
                  {Object.entries(timeLeft).map(([unit, val]) => (
                    <div key={unit} className="space-y-1">
                      <p className="text-3xl font-black">{val}</p>
                      <p className="text-[8px] font-sans font-bold uppercase opacity-60 tracking-widest">{unit}</p>
                    </div>
                  ))}
               </div>
            </section>

            <section className="space-y-8 py-10">
               <div className="flex items-center gap-4">
                  <PenTool className="text-[#1b4d3e]" size={24} />
                  <h3 className="font-black uppercase text-sm tracking-[0.3em] border-b-2 border-[#d4af37] pb-1">Registrasi Kehadiran</h3>
               </div>
               <div className="grid gap-6 font-sans">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Nama Lengkap</label>
                     <input className="w-full bg-white border-b-2 border-gray-200 p-3 text-sm focus:border-[#1b4d3e] outline-none transition-all placeholder:text-gray-300" placeholder="Contoh: Sahrul Gunawan" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Status Kehadiran</label>
                     <select className="w-full bg-white border-b-2 border-gray-200 p-3 text-sm focus:border-[#1b4d3e] outline-none">
                        <option>Hadir dengan Sukacita</option>
                        <option>Berhalangan Hadir</option>
                        <option>Masih Menyesuaikan Jadwal</option>
                     </select>
                  </div>
                  <button className="w-full bg-[#1a1a1a] text-white py-5 rounded-sm text-xs font-black uppercase tracking-[0.4em] hover:bg-[#1b4d3e] transition-all flex items-center justify-center gap-3 group">
                     Submit RSVP <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </section>

            <section className="bg-[#fdfcf7] border-4 border-double border-[#d4af37] p-10 text-center space-y-6">
               <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center shadow-inner">
                  <Fingerprint size={32} className="text-[#1b4d3e] opacity-20" />
               </div>
               <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Tanda Kasih Digital</p>
                  <p className="text-sm font-sans italic text-gray-600 leading-relaxed">
                    Doa restu Anda adalah karunia terindah, namun jika ingin memberikan tanda kasih, dapat melalui:
                  </p>
               </div>
               <div className="space-y-2 pt-4">
                  <p className="text-lg font-black text-[#1a1a1a] tracking-widest font-sans">BCA 1234567890</p>
                  <p className="text-xs font-bold text-gray-500 uppercase">a.n Sahril Rahmatulloh</p>
                  <button 
                    onClick={() => copyToClipboard("1234567890")}
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-[#1b4d3e] tracking-widest border-b-2 border-[#1b4d3e] pb-1 mt-4 hover:opacity-70 transition-opacity"
                  >
                    {isCopied ? <Check size={14} /> : <Copy size={14} />} {isCopied ? "Berhasil Disalin" : "Salin No. Rekening"}
                  </button>
               </div>
            </section>

          </div>

          <footer className="py-20 text-center space-y-6 bg-white border-t border-gray-100">
             <div className="w-20 h-20 border-4 border-[#d4af37] rounded-full mx-auto flex items-center justify-center opacity-40 transform rotate-12">
                <span className="font-black text-xl text-[#1b4d3e]">SA</span>
             </div>
             <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#1a1a1a]">Official Marriage Invitation</p>
                <p className="text-[8px] font-bold text-gray-300 uppercase tracking-widest">© 2026 KUA Cinta Sejati - Sahril & Partner</p>
             </div>
          </footer>

        </main>
      )}

      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-in { animation: fade-in 1s ease-out; }
      `}</style>
    </div>
  );
}