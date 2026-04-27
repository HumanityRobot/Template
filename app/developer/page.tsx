"use client";

import React, { useState, useEffect } from 'react';
import { 
  FileCode, Terminal, GitBranch, GitMerge, 
  Code2, Play, Box, Layers, Cpu, 
  MapPin, Calendar, Heart, Send, 
  Command, Search, Copy, Check, MoreHorizontal, Globe, Music
} from 'lucide-react';

// PINDAHKAN KE LUAR KOMPONEN: Agar tidak menyebabkan error scoping
export const placeholderImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export default function TemplateDevMode() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('README.md');

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-[#1e1e1e] text-[#cccccc] font-mono min-h-screen flex flex-col selection:bg-[#264f78] text-left">
      
      {!isOpen ? (
        /* 1. COVER: TERMINAL BOOTING */
        <section className="fixed inset-0 z-[9999] bg-[#0d1117] flex items-center justify-center p-6">
          <div className="w-full max-w-lg space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="text-xs text-gray-500 ml-2">sahril-wedding — bash</span>
            </div>
            <div className="space-y-2 text-sm md:text-base">
              <p className="text-[#7ee787] font-bold">$ npm install eternal-love@latest</p>
              <p className="text-gray-400">... downloading dependencies [143/143]</p>
              <p className="text-[#7ee787] font-bold">$ git checkout -b marriage/main</p>
              <p className="text-[#7ee787] font-bold">$ npm run start:life-journey</p>
            </div>
            <button 
              onClick={() => setIsOpen(true)}
              className="mt-10 px-8 py-3 bg-[#238636] text-white font-bold rounded border border-[#2ea043] hover:bg-[#2ea043] transition flex items-center gap-3 group active:scale-95"
            >
              <Play size={16} fill="currentColor" /> Run Wedding Application
            </button>
          </div>
        </section>
      ) : (
        <div className="flex flex-1 overflow-hidden">
          
          {/* SIDEBAR: EXPLORER */}
          <aside className="hidden md:flex w-64 bg-[#252526] border-r border-[#333333] flex-col">
            <div className="p-3 text-[11px] uppercase tracking-wider text-gray-500 font-bold flex justify-between">
              <span>Explorer</span>
              <MoreHorizontal size={14} />
            </div>
            <div className="flex-1">
              <div 
                onClick={() => setActiveTab('README.md')}
                className={`p-1 flex items-center gap-1 text-xs cursor-pointer ${activeTab === 'README.md' ? 'bg-[#37373d] text-white' : 'hover:bg-[#2a2d2e]'}`}
              >
                <FileCode size={14} className="text-[#519aba] ml-2" /> README.md
              </div>
              <div 
                onClick={() => setActiveTab('milestone.git')}
                className={`p-1 flex items-center gap-1 text-xs cursor-pointer ${activeTab === 'milestone.git' ? 'bg-[#37373d] text-white' : 'hover:bg-[#2a2d2e]'}`}
              >
                <GitBranch size={14} className="text-[#e37933] ml-2" /> milestone.git
              </div>
              <div 
                onClick={() => setActiveTab('payment-gateway.env')}
                className={`p-1 flex items-center gap-1 text-xs cursor-pointer ${activeTab === 'payment-gateway.env' ? 'bg-[#37373d] text-white' : 'hover:bg-[#2a2d2e]'}`}
              >
                <FileCode size={14} className="text-[#f1d710] ml-2" /> .env.production
              </div>
              <div className="p-1 flex items-center gap-1 text-xs opacity-30 cursor-not-allowed">
                <Box size={14} className="text-[#4d3ad6] ml-2" /> node_modules
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="flex-1 flex flex-col bg-[#1e1e1e]">
            
            {/* TAB BAR */}
            <div className="flex bg-[#252526] overflow-x-auto border-b border-black">
              {['README.md', 'milestone.git', 'payment-gateway.env'].map(tab => (
                <div 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs flex items-center gap-2 cursor-pointer border-r border-black min-w-[140px] transition-all
                    ${activeTab === tab ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]' : 'bg-[#2d2d2d] text-gray-500'}`}
                >
                  <FileCode size={14} className={tab === 'README.md' ? "text-[#519aba]" : "text-gray-400"} /> {tab}
                </div>
              ))}
            </div>

            {/* EDITOR CONTENT */}
            <div className="flex-1 overflow-y-auto p-6 md:p-12 font-mono leading-relaxed">
              
              {activeTab === 'README.md' && (
                <div className="max-w-3xl animate-in fade-in duration-500">
                  <h1 className="text-3xl font-bold text-white border-b border-[#333333] pb-4 mb-8 flex items-center gap-3">
                    <Heart className="text-[#ff5f56] animate-pulse" fill="#ff5f56" /> Sahril & Partner's Wedding
                  </h1>

                  <section className="mb-10">
                    <p className="text-[#6a9955]">/** </p>
                    <p className="text-[#6a9955] pl-4">* "And He has put love and mercy between your hearts."</p>
                    <p className="text-[#6a9955] pl-4">* Introducing a permanent merge between two hearts. </p>
                    <p className="text-[#6a9955] font-bold pl-4">* @status Production_Ready</p>
                    <p className="text-[#6a9955]"> */</p>
                  </section>

                  {/* 4. DETAIL ACARA: JSON OBJECT */}
                  <div className="bg-[#2d2d2d] rounded-lg p-6 mb-8 border border-[#404040] shadow-xl">
                    <p className="text-[#9cdcfe] mb-2">const <span className="text-[#4fc1ff]">EventDetails</span> = {'{'}</p>
                    <div className="pl-6 space-y-1">
                      <p><span className="text-[#ce9178]">"date"</span>: <span className="text-[#d7ba7d]">"2026-04-26"</span>,</p>
                      <p><span className="text-[#ce9178]">"akad"</span>: {'{'}</p>
                      <div className="pl-6">
                        <p><span className="text-[#ce9178]">"time"</span>: <span className="text-[#d7ba7d]">"09:00 WIB"</span>,</p>
                        <p><span className="text-[#ce9178]">"location"</span>: <span className="text-[#d7ba7d]">"Masjid Agung, Jakarta"</span></p>
                      </div>
                      <p>{'}'},</p>
                      <p><span className="text-[#ce9178]">"reception"</span>: {'{'}</p>
                      <div className="pl-6">
                        <p><span className="text-[#ce9178]">"time"</span>: <span className="text-[#d7ba7d]">"13:00 WIB"</span>,</p>
                        <p><span className="text-[#ce9178]">"location"</span>: <span className="text-[#d7ba7d]">"Hotel Mulia, Jakarta"</span></p>
                      </div>
                      <p>{'}'}</p>
                    </div>
                    <p className="mt-2">{'}'};</p>
                  </div>

                  {/* 8. COUNTDOWN: LOGS */}
                  <section className="mb-10 text-left">
                    <h3 className="text-[#569cd6] font-bold mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                      <Terminal size={14} /> Deployment_Status
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-black/30 p-4 rounded border border-[#333]">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[#b5cea8]">{timeLeft.days}</p>
                        <p className="text-[10px] text-gray-500">DAYS</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[#b5cea8]">{timeLeft.hours}</p>
                        <p className="text-[10px] text-gray-500">HOURS</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[#b5cea8]">{timeLeft.minutes}</p>
                        <p className="text-[10px] text-gray-500">MINS</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[#b5cea8]">{timeLeft.seconds}</p>
                        <p className="text-[10px] text-gray-500">SECS</p>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {activeTab === 'milestone.git' && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-[#569cd6] text-xl font-bold mb-8"># git log --oneline --graph</h2>
                  <div className="space-y-10">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex gap-4 border-l-2 border-[#569cd6]/30 pl-8 relative">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#1e1e1e] border-2 border-[#569cd6] rounded-full" />
                        <div className="space-y-4">
                          <p className="text-sm font-bold text-[#b5cea8]">feat: memory_snapshot_v{i}.jpg</p>
                          <div className="w-full md:w-96 h-48 bg-[#2d2d2d] rounded-md border border-[#444] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            <img src={placeholderImg} className="w-full h-full object-cover opacity-20" alt="Memory" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'payment-gateway.env' && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-[#ce9178] text-xl font-bold mb-8"># Global Config (Digital Gift)</h2>
                  <div className="bg-black/30 p-8 rounded-lg border border-[#ce9178]/20 inline-block min-w-full md:min-w-[400px]">
                    <p className="text-[#6a9955] mb-4">// Use these variables for gifting</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[#9cdcfe]">BCA_ID=</span>
                        <span className="text-[#ce9178]">"1234567890"</span>
                        <button 
                          onClick={() => copyToClipboard("1234567890")}
                          className="p-1 hover:bg-white/10 rounded transition"
                        >
                          {isCopied ? <Check size={16} className="text-[#7ee787]" /> : <Copy size={16} className="text-gray-500" />}
                        </button>
                      </div>
                      <p className="text-[#9cdcfe]">HOLDER_NAME=<span className="text-[#ce9178]">"Sahril R."</span></p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 9. RSVP: INPUT FIELD STYLE */}
            <section className="bg-[#252526] border-t border-black p-4 px-6 md:px-12 flex flex-col md:flex-row items-center gap-4">
               <div className="flex items-center gap-2 text-[#007acc] text-sm shrink-0 font-bold">
                  <Terminal size={14} /> <span>RSVP_SHELL &gt;</span>
               </div>
               <input className="flex-1 bg-transparent border-none outline-none text-sm text-[#7ee787] placeholder:text-gray-600 focus:ring-0" placeholder="confirm_attendance --status 'Yes' --name 'Guest'" />
               <button className="px-6 py-1.5 bg-[#007acc] text-white text-[10px] font-bold rounded uppercase tracking-widest hover:bg-[#118ad4] transition active:scale-95">
                  Submit Commit
               </button>
            </section>

            {/* STATUS BAR */}
            <footer className="bg-[#007acc] text-white px-3 py-0.5 flex justify-between items-center text-[10px]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 hover:bg-white/10 px-1 transition cursor-default">
                  <GitBranch size={12} /> <span>marriage/main*</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 hover:bg-white/10 px-1 transition cursor-default">
                  <Heart size={12} /> <span>143 Love Errors: 0</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline">UTF-8</span>
                <span className="flex items-center gap-1 bg-white/20 px-2 rounded font-bold"><Music size={10}/> Beautiful Day.mp3</span>
                <span className="px-2 font-bold uppercase">Dev Mode</span>
              </div>
            </footer>

          </main>
        </div>
      )}
    </div>
  );
}