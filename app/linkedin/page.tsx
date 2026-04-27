"use client";

import React, { useState, useEffect } from 'react';
import { 
  Briefcase, MapPin, Calendar, Users, 
  MoreHorizontal, Share2, Send, Heart, 
  ThumbsUp, MessageSquare, Repeat, Plus, 
  ExternalLink, CheckCircle2, Globe, Music,
  Bell, Gift
} from 'lucide-react';

export default function TemplateLinkedIn() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [likes, setLikes] = useState(2026);

  // 8. COUNTDOWN LOGIC (Contract Start Date)
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
    <div className="bg-[#f3f2ef] text-black font-sans min-h-screen overflow-x-hidden selection:bg-[#0a66c2] selection:text-white">
      
      {!isOpen ? (
        /* 1. COVER: LINKEDIN LOADING / PRE-INVITATION */
        <section className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-sm space-y-8 text-center animate-in fade-in duration-500">
            <div className="flex justify-center mb-6">
               <div className="bg-[#0a66c2] p-2 rounded text-white font-black text-4xl">in</div>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold">Sahril Rahmatulloh just posted a new milestone</h1>
              <p className="text-sm text-gray-500">Be the first to see the official announcement of the merger.</p>
            </div>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setIsOpen(true)}
                className="w-full bg-[#0a66c2] text-white font-bold py-3 rounded-full hover:bg-[#004182] transition shadow-md"
              >
                View Milestone
              </button>
            </div>
          </div>
        </section>
      ) : (
        <main className="max-w-2xl mx-auto pb-20 animate-in slide-in-from-bottom duration-700">
          
          {/* TOP NAV MINI */}
          <nav className="sticky top-0 z-[100] bg-white border-b border-gray-200 p-3 flex justify-between items-center px-6">
             <div className="bg-[#0a66c2] px-1.5 py-0.5 rounded text-white font-bold text-lg">in</div>
             <div className="flex gap-6 text-gray-500">
                <Users size={20} />
                <Bell size={20} />
                <div className="w-6 h-6 bg-gray-300 rounded-full" />
             </div>
          </nav>

          {/* 3. PROFIL: PROFILE CARD */}
          <section className="bg-white border border-gray-200 rounded-lg mt-4 overflow-hidden shadow-sm">
            <div className="h-32 bg-gradient-to-r from-[#a0b4b7] to-[#d9e5e7] relative">
               <div className="absolute -bottom-12 left-6">
                  <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm">
                     <img src={placeholderImg} className="w-full h-full object-cover grayscale" />
                  </div>
               </div>
            </div>
            <div className="pt-16 pb-6 px-6 space-y-2 text-left">
               <div className="flex justify-between items-start">
                  <div>
                     <h1 className="text-2xl font-bold flex items-center gap-1">
                        Sahril & Partner <CheckCircle2 size={18} className="text-[#0a66c2] fill-white" />
                     </h1>
                     <p className="text-md text-gray-700">Co-Founders at The Eternal Family Partnership</p>
                     <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                        <MapPin size={14} /> Jakarta, Indonesia • <span className="text-[#0a66c2] font-bold hover:underline cursor-pointer">Contact info</span>
                     </p>
                  </div>
               </div>
               
               <div className="pt-4 flex flex-wrap gap-2">
                  <button 
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`px-4 py-1.5 rounded-full font-bold text-sm transition ${isFollowing ? 'border border-gray-500 text-gray-500' : 'bg-[#0a66c2] text-white hover:bg-[#004182]'}`}
                  >
                    {isFollowing ? '✓ Attending' : '+ Follow for Updates'}
                  </button>
                  <button className="px-4 py-1.5 border border-[#0a66c2] text-[#0a66c2] rounded-full font-bold text-sm hover:bg-blue-50">
                    Message
                  </button>
                  <button className="p-1.5 border border-gray-400 rounded-full text-gray-500">
                    <MoreHorizontal size={20} />
                  </button>
               </div>
            </div>
          </section>

          {/* 2. QUOTE: ABOUT SECTION */}
          <section className="bg-white border border-gray-200 rounded-lg mt-3 p-6 space-y-3 text-left">
             <h2 className="text-lg font-bold">About This Merger</h2>
             <p className="text-sm text-gray-600 leading-relaxed italic">
                "And we created you in pairs." (78:8). After years of individual development and market research, we are excited to announce our official partnership. This union is built on the core values of love, patience, and mutual growth.
             </p>
          </section>

          {/* 4. DETAIL ACARA: EXPERIENCE (EVENT) */}
          <section className="bg-white border border-gray-200 rounded-lg mt-3 p-6 space-y-6 text-left">
             <h2 className="text-lg font-bold">Experience / Event Schedule</h2>
             <div className="space-y-8">
                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-[#ebf5fe] rounded flex items-center justify-center shrink-0">
                      <Briefcase size={24} className="text-[#0a66c2]" />
                   </div>
                   <div className="space-y-1">
                      <h3 className="font-bold text-sm uppercase">Main Contract Signing (Akad)</h3>
                      <p className="text-xs text-gray-600">The Sacred Vow • Full-time</p>
                      <p className="text-xs text-gray-400">Apr 26, 2026 · 09:00 AM - 11:00 AM</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
                        <MapPin size={12}/> Masjid Agung, Jakarta
                      </p>
                   </div>
                </div>
                <div className="flex gap-4 border-t border-gray-100 pt-6">
                   <div className="w-12 h-12 bg-[#fbefff] rounded flex items-center justify-center shrink-0">
                      <Users size={24} className="text-[#a456ff]" />
                   </div>
                   <div className="space-y-1">
                      <h3 className="font-bold text-sm uppercase">Grand Networking Session (Resepsi)</h3>
                      <p className="text-xs text-gray-600">Stakeholder Celebration • Seasonal</p>
                      <p className="text-xs text-gray-400">Apr 26, 2026 · 01:00 PM - Finish</p>
                      <p className="text-xs text-[#0a66c2] font-bold flex items-center gap-1 mt-2 cursor-pointer hover:underline">
                        <Globe size={12}/> View Office Location (Maps) <ExternalLink size={10} />
                      </p>
                   </div>
                </div>
             </div>
          </section>

          {/* 8. COUNTDOWN: PROJECT TIMELINE */}
          <section className="bg-white border border-gray-200 rounded-lg mt-3 p-6 text-center">
             <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Contract Launch In:</h2>
             <div className="flex justify-around items-center">
                <div className="space-y-1">
                   <p className="text-3xl font-bold text-[#0a66c2]">{timeLeft.days}</p>
                   <p className="text-[10px] text-gray-400 font-bold uppercase">Days</p>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="space-y-1">
                   <p className="text-3xl font-bold text-[#0a66c2]">{timeLeft.hours}</p>
                   <p className="text-[10px] text-gray-400 font-bold uppercase">Hours</p>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="space-y-1">
                   <p className="text-3xl font-bold text-[#0a66c2]">{timeLeft.minutes}</p>
                   <p className="text-[10px] text-gray-400 font-bold uppercase">Minutes</p>
                </div>
             </div>
          </section>

          {/* 5. GALLERY: FEATURED MEDIA */}
          <section className="bg-white border border-gray-200 rounded-lg mt-3 p-6 text-left">
             <h2 className="text-lg font-bold mb-4">Featured Portfolio</h2>
             <div className="grid grid-cols-1 gap-4">
                <div className="aspect-video bg-gray-100 rounded-lg border border-gray-200 overflow-hidden relative group">
                   <img src={placeholderImg} className="w-full h-full object-cover opacity-30" />
                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm">
                      <p className="font-bold text-sm">Engagement_Proposal_Final_v2.mp4</p>
                      <p className="text-xs text-gray-500">12,402 views • Shared on our anniversary</p>
                   </div>
                </div>
             </div>
          </section>

          {/* 7. DIGITAL GIFT: ENDORSEMENT FUND */}
          <section className="bg-white border border-gray-200 rounded-lg mt-3 p-6 text-left">
             <div className="flex items-center gap-3 mb-6">
                <Gift className="text-[#057642]" />
                <h2 className="text-lg font-bold">Investment & Endorsement</h2>
             </div>
             <div className="bg-[#f9fafb] p-6 rounded-lg border border-gray-100 space-y-4">
                <p className="text-sm text-gray-600">Want to endorse the couple's upcoming ventures?</p>
                <div className="p-4 bg-white border border-gray-200 rounded flex justify-between items-center">
                   <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">BCA - SAHRIL R.</p>
                      <p className="text-xl font-mono font-bold tracking-tight">1234 5678 90</p>
                   </div>
                   <button className="text-[#0a66c2] font-bold text-sm hover:underline">Copy ID</button>
                </div>
             </div>
          </section>

          {/* 9. RSVP: ACTIVITY / COMMENTS */}
          <section className="bg-white border border-gray-200 rounded-lg mt-3 p-6 text-left">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden shrink-0">
                  <img src={placeholderImg} className="w-full h-full object-cover opacity-50" />
                </div>
                <div className="flex-1 bg-gray-100 rounded-full px-6 py-3 text-sm text-gray-500 border border-gray-200">
                   Start a post (Confirmation)...
                </div>
             </div>
             <div className="space-y-4">
                <input className="w-full bg-[#f9fafb] border border-gray-200 p-4 rounded text-sm focus:ring-1 ring-[#0a66c2] outline-none" placeholder="Your Name (Required)" />
                <textarea className="w-full bg-[#f9fafb] border border-gray-200 p-4 rounded text-sm h-32 focus:ring-1 ring-[#0a66c2] outline-none" placeholder="Add a comment... (e.g. 'Congratulations on the new role!')" />
                <button className="flex items-center gap-2 px-6 py-2 bg-[#0a66c2] text-white font-bold rounded-full text-sm">
                   <Send size={16} /> Post Announcement
                </button>
             </div>
          </section>

          {/* LIKE BAR (STICKY BOTTOM) */}
          <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 z-[110]">
             <div className="max-w-2xl mx-auto flex justify-between items-center px-6">
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                   <ThumbsUp size={14} className="text-blue-500" fill="#0a66c2" />
                   <Heart size={14} className="text-red-500" fill="#ef4444" />
                   <span className="ml-1">{likes} likes</span>
                </div>
                <div className="flex gap-8">
                   <button onClick={() => setLikes(likes + 1)} className="flex flex-col items-center gap-1 text-gray-500 hover:text-[#0a66c2]">
                      <ThumbsUp size={20} /> <span className="text-[10px]">Like</span>
                   </button>
                   <button className="flex flex-col items-center gap-1 text-gray-500">
                      <MessageSquare size={20} /> <span className="text-[10px]">Comment</span>
                   </button>
                   <button className="flex flex-col items-center gap-1 text-gray-500">
                      <Repeat size={20} /> <span className="text-[10px]">Repost</span>
                   </button>
                   <button className="flex flex-col items-center gap-1 text-gray-500">
                      <Send size={20} /> <span className="text-[10px]">Send</span>
                   </button>
                </div>
             </div>
          </footer>

          <div className="fixed bottom-20 right-6">
             <button className="w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-[#0a66c2] active:scale-90 transition">
                <Music size={20} />
             </button>
          </div>

        </main>
      )}
    </div>
  );
}