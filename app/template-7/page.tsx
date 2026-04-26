"use client";

import React, { useState, useEffect } from 'react';
import { 
  FileText, Calendar, MapPin, Heart, 
  ExternalLink, CheckSquare, MessageCircle, 
  Gift, Send, MoreHorizontal, Share2, 
  User, Clock, ChevronRight, Music
} from 'lucide-react';

export default function TemplateNotion() {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="bg-white text-[#37352f] font-sans min-h-screen overflow-x-hidden selection:bg-[#cde9ff]">
      
      {!isOpen ? (
        /* 1. COVER: NOTION PAGE LOADING */
        <section className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-sm space-y-8 animate-in fade-in zoom-in duration-700">
            <div className="text-8xl text-center">💍</div>
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold tracking-tight">Sahril & Partner's Wedding</h1>
              <p className="text-sm text-gray-400 font-mono">Status: Up next...</p>
            </div>
            <div className="bg-[#f1f1ef] rounded-md p-4 flex items-center gap-3 border border-gray-200">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">
                <FileText size={20} className="text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="h-2 w-24 bg-gray-200 rounded mb-2" />
                <div className="h-2 w-16 bg-gray-100 rounded" />
              </div>
              <ChevronRight className="text-gray-300" />
            </div>
            <button 
              onClick={() => setIsOpen(true)}
              className="w-full bg-[#37352f] text-white font-medium py-3 rounded-md hover:bg-black transition-colors shadow-sm"
            >
              Open Workspace
            </button>
          </div>
        </section>
      ) : (
        <main className="max-w-3xl mx-auto pb-32 animate-in slide-in-from-bottom duration-1000">
          
          {/* HEADER COVER */}
          <div className="h-48 md:h-64 bg-gray-100 relative group overflow-hidden">
             <img src={placeholderImg} className="w-full h-full object-cover opacity-20" alt="Cover" />
             <button className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 text-xs rounded border border-gray-200 opacity-0 group-hover:opacity-100 transition shadow-sm">
                Change cover
             </button>
          </div>

          <div className="px-6 md:px-16 -mt-12 relative z-10">
             {/* 3. PROFIL: ICON & TITLE */}
             <div className="text-7xl mb-6 bg-white w-24 h-24 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">🤍</div>
             
             <div className="space-y-4 text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Project: Eternal Partnership</h1>
                <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 border-b border-gray-100 pb-6">
                   <div className="flex items-center gap-2 bg-[#f1f1ef] px-2 py-1 rounded">
                      <User size={14} /> <span>Owners: Sahril & Partner</span>
                   </div>
                   <div className="flex items-center gap-2 bg-[#f1f1ef] px-2 py-1 rounded">
                      <Calendar size={14} /> <span>April 26, 2026</span>
                   </div>
                   <div className="flex items-center gap-2 bg-[#ebf5fe] text-[#2383e2] px-2 py-1 rounded font-medium">
                      <CheckSquare size={14} /> <span>Status: Confirmed</span>
                   </div>
                </div>
             </div>

             {/* 2. QUOTE: CALLOUT BLOCK */}
             <section className="py-8">
                <div className="bg-[#f1f1ef] p-5 rounded-md flex gap-4 border-l-4 border-gray-300">
                   <span className="text-2xl">📖</span>
                   <p className="text-sm italic leading-relaxed text-gray-600">
                      "And we created you in pairs." (Surah An-Naba: 8). 
                      A documentation of a journey where two separate workspaces merge into one shared life database.
                   </p>
                </div>
             </section>

             {/* 4. DETAIL ACARA: PROPERTY TABLE */}
             <section className="py-6 space-y-8">
                <h2 className="text-xl font-bold flex items-center gap-2"><FileText className="text-gray-400" size={20} /> Event Properties</h2>
                <div className="space-y-3">
                   <div className="grid grid-cols-3 py-2 border-b border-gray-50">
                      <div className="text-gray-400 text-sm flex items-center gap-2"><Clock size={14} /> Kick-off</div>
                      <div className="col-span-2 text-sm">09:00 AM — Finish</div>
                   </div>
                   <div className="grid grid-cols-3 py-2 border-b border-gray-50">
                      <div className="text-gray-400 text-sm flex items-center gap-2"><MapPin size={14} /> Venue</div>
                      <div className="col-span-2 text-sm font-medium">
                         Hotel Mulia, Jakarta 
                         <a href="#" className="ml-2 text-blue-500 hover:underline flex inline-flex items-center gap-1"><ExternalLink size={12}/></a>
                      </div>
                   </div>
                   <div className="grid grid-cols-3 py-2 border-b border-gray-50">
                      <div className="text-gray-400 text-sm flex items-center gap-2"><Heart size={14} /> Dresscode</div>
                      <div className="col-span-2 text-sm">Earth Tone / Formal Minimalist</div>
                   </div>
                </div>
             </section>

             {/* 8. COUNTDOWN: PROGRESS BLOCK */}
             <section className="py-8 text-left">
                <h2 className="text-xl font-bold mb-4">Project Deadline</h2>
                <div className="bg-[#f1f1ef] p-6 rounded-md">
                   <div className="flex justify-between text-xs font-bold mb-2">
                      <span>DEPLOYMENT PROGRESS</span>
                      <span>{timeLeft.days}D {timeLeft.hours}H REMAINING</span>
                   </div>
                   <div className="w-full h-3 bg-white rounded-full overflow-hidden border border-gray-200">
                      <div className="h-full bg-blue-500 w-[75%] animate-pulse" />
                   </div>
                   <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center bg-white p-2 rounded shadow-sm">
                         <p className="text-lg font-bold">{timeLeft.days}</p>
                         <p className="text-[10px] text-gray-400 uppercase">Days</p>
                      </div>
                      <div className="text-center bg-white p-2 rounded shadow-sm">
                         <p className="text-lg font-bold">{timeLeft.hours}</p>
                         <p className="text-[10px] text-gray-400 uppercase">Hours</p>
                      </div>
                      <div className="text-center bg-white p-2 rounded shadow-sm">
                         <p className="text-lg font-bold">{timeLeft.minutes}</p>
                         <p className="text-[10px] text-gray-400 uppercase">Mins</p>
                      </div>
                   </div>
                </div>
             </section>

             {/* 5. GALLERY: GALLERY VIEW */}
             <section className="py-8">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">🖼️ Shared Assets</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   {[1, 2, 3].map(i => (
                      <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                         <div className="h-32 bg-gray-50 flex items-center justify-center">
                            <img src={placeholderImg} className="w-full h-full object-cover opacity-40" alt="Asset" />
                         </div>
                         <div className="p-3 border-t border-gray-100">
                            <p className="text-[10px] font-mono text-gray-400">memory_00{i}.jpg</p>
                         </div>
                      </div>
                   ))}
                </div>
             </section>

             {/* 7. DIGITAL GIFT: PAYMENT GATEWAY */}
             <section className="py-8">
                <div className="bg-[#fdf2f2] p-6 rounded-md border border-[#fbd5d5] text-left">
                   <h2 className="text-lg font-bold mb-2 flex items-center gap-2"><Gift size={20} className="text-red-400" /> Support the Project</h2>
                   <p className="text-sm text-gray-600 mb-6">If you'd like to contribute to the couple's new database:</p>
                   <div className="bg-white p-4 rounded border border-[#fbd5d5] space-y-4">
                      <div>
                         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">BCA / Sahril R.</p>
                         <p className="text-2xl font-mono tracking-tight">1234 5678 90</p>
                      </div>
                      <button className="w-full py-2 bg-white border border-gray-200 text-sm font-medium rounded hover:bg-gray-50 transition shadow-sm">
                         Copy Transaction ID
                      </button>
                   </div>
                </div>
             </section>

             {/* 9. RSVP: COMMENT SECTION */}
             <section className="py-12 border-t border-gray-100 text-left">
                <h2 className="text-xl font-bold mb-8 flex items-center gap-2"><MessageCircle size={20} className="text-gray-400" /> Discussion / RSVP</h2>
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-xs">💬</div>
                      <div className="flex-1 space-y-3">
                         <input className="w-full bg-[#f1f1ef] border-none p-3 rounded text-sm outline-none focus:ring-1 ring-gray-200" placeholder="Your name..." />
                         <textarea className="w-full bg-[#f1f1ef] border-none p-3 rounded text-sm h-24 outline-none focus:ring-1 ring-gray-200" placeholder="Add a comment or confirmation..." />
                         <button className="bg-[#37352f] text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 shadow-sm">
                            <Send size={14} /> Post Confirmation
                         </button>
                      </div>
                   </div>
                </div>
             </section>

             {/* 10. CLOSING: FOOTER */}
             <footer className="pt-20 pb-10 text-center space-y-4">
                <div className="flex justify-center gap-6 text-gray-300">
                   <Share2 size={20} />
                   <MoreHorizontal size={20} />
                   <Heart size={20} />
                </div>
                <p className="text-xs text-gray-400 font-mono italic">
                   Last edited by Love today at 02:08 AM
                </p>
             </footer>
          </div>

          {/* FLOATING MUSIC PLAYER (Notion Style) */}
          <div className="fixed bottom-6 right-6 z-[100]">
             <button className="bg-white border border-gray-200 p-3 rounded-full shadow-xl hover:scale-110 transition flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <Music size={18} className="text-gray-600" />
             </button>
          </div>

        </main>
      )}
    </div>
  );
}