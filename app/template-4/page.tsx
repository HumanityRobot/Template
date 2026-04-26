"use client";

import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, Heart, Sword, Trophy, Users, Map, 
  Music, Gift, MessageSquare, Send, Zap, ChevronRight 
} from 'lucide-react';

export default function TemplatePixelGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [hp, setHp] = useState(100);

  // 8. COUNTDOWN LOGIC (Quest Deadline)
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
    <div className="bg-[#121212] text-[#00ff00] font-mono min-h-screen overflow-x-hidden selection:bg-[#ff00ff] selection:text-white">
      
      {!isOpen ? (
        /* 1. COVER: START SCREEN */
        <section className="fixed inset-0 z-[9999] bg-[#121212] flex flex-col items-center justify-center p-6 border-[8px] border-[#333]">
          <div className="space-y-12 text-center">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white animate-bounce">
                SAHRIL & <br/>PARTNER
              </h1>
              <div className="absolute -top-4 -right-4">
                <Heart className="text-red-500 fill-red-500 animate-ping" size={32} />
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-[#ff00ff] text-xl animate-pulse font-bold tracking-[0.2em]">
                NEW WEDDING QUEST!
              </p>
              <div className="h-4 w-64 bg-gray-800 mx-auto rounded-none border-2 border-white p-1">
                <div className="h-full bg-green-500 w-full animate-[loading_2s_ease-in-out]" />
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(true)}
              className="px-10 py-4 bg-[#00ff00] text-black font-bold text-xl uppercase border-b-8 border-r-8 border-[#008800] active:border-0 active:translate-y-1 transition-all"
            >
              PRESS START
            </button>
          </div>
          <p className="absolute bottom-10 text-[10px] opacity-40">© 2026 LOVE ARCADE CO. LTD</p>
        </section>
      ) : (
        <main className="max-w-xl mx-auto border-x-4 border-gray-800 bg-[#1a1a1a] min-h-screen pb-20">
          
          {/* TOP HUD (Heads-up Display) */}
          <div className="sticky top-0 z-[100] bg-black p-4 border-b-4 border-[#333] flex justify-between items-center text-[10px]">
             <div className="flex items-center gap-2">
                <span>HP</span>
                <div className="w-32 h-3 bg-gray-800 border border-white">
                   <div className="h-full bg-red-600" style={{ width: '100%' }} />
                </div>
             </div>
             <div className="flex gap-4">
                <span className="text-[#f9ce34]">G: 2,604,26</span>
                <span className="text-white">LVL: 99</span>
             </div>
          </div>

          {/* 2. QUOTE: DIALOG BOX */}
          <section className="p-6">
            <div className="border-4 border-white p-6 relative bg-black shadow-[8px_8px_0px_0px_rgba(0,255,0,0.3)]">
               <p className="text-sm leading-relaxed mb-4">
                 "And among His signs is that He created for you mates from among yourselves..."
               </p>
               <div className="flex justify-end gap-1">
                  <div className="w-2 h-2 bg-[#00ff00] animate-bounce" />
               </div>
               <div className="absolute -top-3 left-4 bg-black px-2 text-[10px] text-[#ff00ff]">NPC_SAHRIL_BOT</div>
            </div>
          </section>

          {/* 3. PROFIL: CHARACTER SELECT */}
          <section className="py-10 px-6">
             <h2 className="text-center mb-8 text-[#f9ce34] tracking-widest uppercase underline">Character Stats</h2>
             <div className="grid grid-cols-2 gap-8">
                <div className="text-center space-y-4">
                   <div className="aspect-square bg-gray-800 border-4 border-white overflow-hidden p-2">
                      <img src={placeholderImg} className="w-full h-full object-cover grayscale pixelated" />
                   </div>
                   <div>
                      <p className="text-white text-xs font-bold">SAHRIL R.</p>
                      <p className="text-[8px] text-[#00ff00]">CLASS: GROOM</p>
                   </div>
                </div>
                <div className="text-center space-y-4">
                   <div className="aspect-square bg-gray-800 border-4 border-white overflow-hidden p-2">
                      <img src={placeholderImg} className="w-full h-full object-cover grayscale pixelated" />
                   </div>
                   <div>
                      <p className="text-white text-xs font-bold">THE PARTNER</p>
                      <p className="text-[8px] text-[#ff00ff]">CLASS: BRIDE</p>
                   </div>
                </div>
             </div>
          </section>

          {/* 4. DETAIL ACARA: QUEST MAP */}
          <section className="py-10 px-6 space-y-6">
             <div className="bg-[#333] p-4 border-l-4 border-[#00ff00]">
                <div className="flex items-center gap-3 mb-4">
                   <Map className="text-[#f9ce34]" />
                   <h3 className="font-bold text-white">MAIN QUEST: AKAD</h3>
                </div>
                <div className="text-xs space-y-2 pl-9">
                   <div className="flex items-center gap-2"><Zap size={10} /> <span>26 April 2026</span></div>
                   <div className="flex items-center gap-2"><Zap size={10} /> <span>09:00 AM</span></div>
                   <div className="text-[#00ff00] underline uppercase cursor-pointer">View Map Location</div>
                </div>
             </div>
          </section>

          {/* 5. GALLERY: SNAPSHOTS */}
          <section className="py-10 px-6">
             <h2 className="text-center mb-8 text-[#f9ce34] tracking-widest uppercase">Memory Log</h2>
             <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="border-2 border-[#555] p-1 bg-black aspect-video relative group overflow-hidden">
                     <img src={placeholderImg} className="w-full h-full object-cover opacity-30" />
                     <div className="absolute bottom-1 right-1 text-[8px] bg-[#555] px-1">IMG_00{n}</div>
                  </div>
                ))}
             </div>
          </section>

          {/* 6. VISA/SCHEDULE: BOSS BATTLE STAGES */}
          <section className="py-10 px-6">
             <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#222] p-4 border border-[#444]">
                   <Sword className="text-red-500" />
                   <div>
                      <p className="font-bold text-sm">STAGE 01: CEREMONY</p>
                      <p className="text-[10px] opacity-60">Prepare for the sacred vow.</p>
                   </div>
                </div>
                <div className="flex items-center gap-4 bg-[#222] p-4 border border-[#444]">
                   <Trophy className="text-[#f9ce34]" />
                   <div>
                      <p className="font-bold text-sm">STAGE 02: CELEBRATION</p>
                      <p className="text-[10px] opacity-60">Loot the delicious food & party!</p>
                   </div>
                </div>
             </div>
          </section>

          {/* 7. DIGITAL GIFT: ITEM SHOP */}
          <section className="py-10 px-6">
             <div className="bg-[#000088] p-6 border-4 border-[#0000ff] text-white">
                <div className="flex items-center gap-2 mb-4">
                   <Gift size={20} className="text-[#f9ce34]" />
                   <h3 className="font-bold tracking-widest">ITEM SHOP</h3>
                </div>
                <p className="text-[10px] mb-4 opacity-70">Want to buy the couple a potion?</p>
                <div className="bg-black p-4 border-2 border-white mb-4">
                   <p className="text-[10px] text-gray-400">BANK TRANSFER / BCA</p>
                   <p className="text-xl font-bold tracking-widest">1234-5678-90</p>
                </div>
                <button className="w-full py-2 bg-white text-black font-bold uppercase text-xs active:bg-[#ccc]">Copy Transaction ID</button>
             </div>
          </section>

          {/* 8. COUNTDOWN: TIME LIMIT */}
          <section className="py-10 px-6 text-center">
             <div className="border-4 border-dashed border-[#ff00ff] p-6">
                <p className="text-[10px] mb-4">QUEST DEADLINE IN:</p>
                <div className="flex justify-center gap-4">
                   <div><p className="text-xl font-bold">{timeLeft.days}</p><p className="text-[8px]">DAYS</p></div>
                   <div><p className="text-xl font-bold">{timeLeft.hours}</p><p className="text-[8px]">HRS</p></div>
                   <div><p className="text-xl font-bold">{timeLeft.minutes}</p><p className="text-[8px]">MIN</p></div>
                </div>
             </div>
          </section>

          {/* 9. RSVP: INPUT PLAYER NAME */}
          <section className="py-10 px-6 space-y-6">
             <h2 className="text-[#00ff00] flex items-center gap-2 uppercase font-bold"><Users size={16}/> Player Log</h2>
             <div className="space-y-3">
                <input className="w-full bg-black border-2 border-[#333] p-3 text-sm focus:border-[#00ff00] outline-none" placeholder="Enter Player Name..." />
                <textarea className="w-full bg-black border-2 border-[#333] p-3 text-sm focus:border-[#00ff00] outline-none h-24" placeholder="Send Message..." />
                <button className="w-full bg-[#ff00ff] text-white font-bold py-3 uppercase text-sm flex items-center justify-center gap-2">
                   <Send size={14} /> SUBMIT LOG
                </button>
             </div>
          </section>

          {/* 10. CLOSING: END CREDITS */}
          <footer className="py-20 px-6 text-center space-y-8">
             <div className="space-y-2 opacity-50">
                <p className="text-[10px]">DIRECTED BY: LOVE</p>
                <p className="text-[10px]">STARRING: SAHRIL & PARTNER</p>
                <p className="text-[10px]">PRODUCED BY: 2026 WEDDINGS</p>
             </div>
             <div className="pt-10">
                <h3 className="text-xl font-bold text-white">THANKS FOR PLAYING!</h3>
                <p className="text-[10px] mt-2 italic text-[#00ff00]">See you at the Final Level!</p>
             </div>
          </footer>

          {/* MUSIC TOGGLE */}
          <div className="fixed bottom-6 right-6 z-[110]">
             <button className="w-12 h-12 bg-[#333] border-2 border-white text-white flex items-center justify-center shadow-[4px_4px_0px_0px_#ff00ff]">
                <Music size={20} />
             </button>
          </div>

        </main>
      )}

      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .pixelated { image-rendering: pixelated; }
      `}</style>
    </div>
  );
}