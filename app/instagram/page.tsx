"use client";

import React, { useState, useEffect } from 'react';
import { 
  Heart, MessageCircle, Send, Bookmark, MoreHorizontal, 
  Grid, Tv, UserSquare2, Music, Calendar, Clock, MapPin, 
  Gift, CheckCircle2, ChevronLeft 
} from 'lucide-react';

export default function TemplateInstagram() {
  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  
  // Base64 Placeholder
  const placeholderImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

  return (
    <div className="bg-white text-black font-sans min-h-screen max-w-md mx-auto border-x border-gray-100 shadow-2xl overflow-x-hidden">
      
      {!isOpen ? (
        /* 1. COVER (STORY STYLE) */
        <section className="fixed inset-0 z-[9999] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center p-4">
          <div className="w-full h-[90vh] bg-black rounded-3xl overflow-hidden relative border-2 border-white/20">
             <div className="absolute top-4 left-0 right-0 px-4 flex gap-1 z-20">
                <div className="h-1 flex-1 bg-white/40 rounded-full overflow-hidden">
                   <div className="h-full bg-white w-1/3 animate-[progress_3s_linear_infinite]" />
                </div>
             </div>
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6">
                <div className="w-24 h-24 rounded-full border-2 border-[#ee2a7b] p-1 scale-110 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-600 overflow-hidden">
                    <img src={placeholderImg} className="w-full h-full object-cover opacity-50" />
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-2xl font-bold tracking-tight">Sahril & Partner</h1>
                  <p className="text-sm opacity-70">Wedding Invitation</p>
                </div>
                <button 
                  onClick={() => setIsOpen(true)}
                  className="mt-8 px-8 py-3 bg-white text-black rounded-full text-sm font-bold active:scale-95 transition-all"
                >
                  View Invitation
                </button>
             </div>
          </div>
        </section>
      ) : (
        <main className="animate-in fade-in duration-700">
          
          {/* HEADER NAV */}
          <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-[100] border-b border-gray-100 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ChevronLeft size={24} onClick={() => setIsOpen(false)} className="cursor-pointer" />
              <span className="font-bold text-xl tracking-tight">Instagram</span>
            </div>
            <div className="flex gap-5">
              <Heart size={24} />
              <Send size={24} />
            </div>
          </nav>

          {/* 3. PROFIL MEMPELAI (PROFILE HEADER) */}
          <section className="p-4 space-y-6">
            <div className="flex items-center gap-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px]">
                  <div className="w-full h-full rounded-full bg-white p-[2px]">
                    <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                       <img src={placeholderImg} className="w-full h-full object-cover opacity-30" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-[#0095f6] text-white rounded-full border-2 border-white p-0.5">
                  <CheckCircle2 size={14} fill="currentColor" />
                </div>
              </div>
              <div className="flex flex-1 justify-around text-center">
                <div><p className="font-bold">26</p><p className="text-xs text-gray-500">Posts</p></div>
                <div><p className="font-bold">04</p><p className="text-xs text-gray-500">Followers</p></div>
                <div><p className="font-bold">2026</p><p className="text-xs text-gray-500">Following</p></div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-sm">Sahril & Partner Wedding</p>
              <p className="text-sm text-gray-600">💍 Happily Ever After Adventure</p>
              <p className="text-sm text-blue-900">#SahrilPartnerHalal2026</p>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-[#efefef] py-2 rounded-lg text-sm font-bold">Follow</button>
              <button className="flex-1 bg-[#efefef] py-2 rounded-lg text-sm font-bold">Message</button>
            </div>
          </section>

          {/* 2. QUOTE & AYAT (MAIN FEED POST) */}
          <section className="border-t border-gray-100">
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <img src={placeholderImg} className="w-full h-full object-cover opacity-50" />
                </div>
                <span className="text-sm font-bold">sahril_wedding</span>
              </div>
              <MoreHorizontal size={20} />
            </div>
            
            {/* Image Placeholder */}
            <div className="aspect-square bg-gray-100 flex items-center justify-center relative">
               <div className="text-center p-8 space-y-6">
                  <p className="text-xl font-serif italic text-gray-700" dir="rtl">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ...</p>
                  <p className="text-xs text-gray-500 leading-relaxed italic">
                    "Dan di antara tanda-tanda kekuasaan-Nya ialah menciptakan untukmu isteri-isteri dari jenismu sendiri..."
                  </p>
               </div>
            </div>

            <div className="p-3 space-y-3">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <Heart size={24} className={liked ? "fill-red-500 text-red-500" : ""} onClick={() => setLiked(!liked)} />
                  <MessageCircle size={24} />
                  <Send size={24} />
                </div>
                <Bookmark size={24} />
              </div>
              <p className="text-sm font-bold">2.604.2026 likes</p>
              <p className="text-sm">
                <span className="font-bold mr-2">sahril_wedding</span>
                Bismillah, we are inviting you to our special day.
              </p>
            </div>
          </section>

          {/* 4. DETAIL ACARA & 8. COUNTDOWN */}
          <section className="p-4 space-y-4">
            <div className="bg-gray-50 rounded-xl p-4 space-y-4 border border-gray-100">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3 text-left">
                <Calendar className="text-[#ee2a7b]" size={20}/>
                <div>
                   <p className="text-[10px] text-gray-400 font-bold uppercase">Save the Date</p>
                   <p className="text-sm font-bold">Minggu, 26 April 2026</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="space-y-1">
                  <div className="flex items-center gap-2"><Clock size={14} className="text-gray-400"/> <span className="text-xs font-bold">Akad Nikah</span></div>
                  <p className="text-[10px] text-gray-500 px-6">09:00 - 11:00 WIB</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2"><MapPin size={14} className="text-gray-400"/> <span className="text-xs font-bold">Location</span></div>
                  <p className="text-[10px] text-gray-500 px-6 uppercase tracking-tighter">Masjid Agung, Jakarta</p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. GALLERY GRID */}
          <section className="mt-8">
            <div className="flex border-t border-gray-100">
               <div className="flex-1 flex justify-center py-3 border-t border-black"><Grid size={24} /></div>
               <div className="flex-1 flex justify-center py-3 opacity-30"><Tv size={24} /></div>
               <div className="flex-1 flex justify-center py-3 opacity-30"><UserSquare2 size={24} /></div>
            </div>
            <div className="grid grid-cols-3 gap-[2px]">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-100 relative group">
                  <img src={placeholderImg} className="w-full h-full object-cover opacity-20" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <Heart size={14} fill="white" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. DIGITAL GIFT (INSTAGRAM SHOP STYLE) */}
          <section className="p-4 mt-8">
            <div className="bg-[#efefef] rounded-xl p-6 text-center space-y-4">
               <Gift className="mx-auto text-gray-400" />
               <h3 className="font-bold text-sm">Wedding Gift</h3>
               <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-[10px] text-gray-400 uppercase font-bold">BCA - Sahril Rahmatulloh</p>
                  <p className="text-lg font-mono font-bold tracking-widest mt-1">1234 5678 90</p>
               </div>
               <button className="w-full py-2 bg-[#0095f6] text-white rounded-lg text-sm font-bold">Copy Account Number</button>
            </div>
          </section>

          {/* 10. CLOSING (CAUGHT UP STYLE) */}
          <footer className="py-20 px-6 text-center space-y-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="text-green-500" />
              </div>
              <h4 className="font-bold">You're All Caught Up</h4>
              <p className="text-xs text-gray-500 mt-2">Thank you for being part of our journey.</p>
            </div>
            <div className="pt-10 opacity-20">
               <p className="text-[10px] font-bold tracking-[0.3em] uppercase">From Meta of Sahril & Partner</p>
            </div>
          </footer>

          {/* 9. MUSIC PLAYER BUTTON */}
          <div className="fixed bottom-6 right-6 z-[110]">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 text-[#ee2a7b]">
              <Music size={20} />
            </button>
          </div>

        </main>
      )}

      <style jsx>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}