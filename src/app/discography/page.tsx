"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { BisonLogo } from "@/components/BisonLogo";
import { RECORDS } from "@/context/MediaContext";
import { SocialIcon } from "@/components/SocialIcons";
import Image from "next/image";

export default function DiscographyPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            HERO — Massive & Cinematic (Blue)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="min-h-[85vh] flex flex-col justify-center px-6 relative overflow-hidden bg-[#013DA6]">
          <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 pointer-events-none opacity-[0.03]">
            <BisonLogo size={1000} variant="white" />
          </div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10 pt-24">
            <Reveal>
              <p className="label mb-12 text-white/40 italic uppercase tracking-[0.5em]">The Sonic Legacy</p>
              <h1 className="font-display text-7xl md:text-[14rem] leading-[0.75] tracking-tighter mb-16">
                The<br />Catalog.
              </h1>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
              <div className="lg:col-span-8">
                <Reveal delay={0.2}>
                  <p className="text-2xl md:text-5xl font-light leading-[1.1] text-white/80 italic">
                    A definitive archive of culturally defining records and multi-platinum hits.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            FEATURED TRACKS — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-48 px-6 bg-white text-[#013DA6] relative z-10 rounded-t-[4rem] -mt-20 shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-32">
              <h2 className="font-display text-5xl md:text-8xl tracking-tighter leading-none mb-12">The<br />Hits.</h2>
              <div className="w-24 h-1.5 bg-[#013DA6] rounded-full" />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
              {RECORDS.map((record, i) => (
                <Reveal key={record.id} delay={i * 0.1} animation="fade">
                  <div className="group space-y-10">
                    {/* Embedded Spotify Player with Custom Styling */}
                    <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-[#013DA6]/5 border border-[#013DA6]/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
                      <iframe
                        src={`https://open.spotify.com/embed/album/${record.spotifyId || "3Gt2MkrPnDN3MY6cRiIkig"}?utm_source=generator&theme=0`}
                        width="100%"
                        height="100%"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="border-none"
                      />
                    </div>
                    
                    {/* Record Info */}
                    <div className="flex justify-between items-end pb-8 border-b border-[#013DA6]/10">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-[10px] font-black text-[#013DA6]/40 uppercase tracking-widest">{record.genre}</span>
                          <div className="w-1.5 h-1.5 bg-[#013DA6]/20 rounded-full" />
                          <span className="text-[10px] font-bold text-[#013DA6]/20 uppercase tracking-widest">Multi-Platinum</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-display text-[#013DA6] mb-3 leading-none tracking-tight">{record.title}</h3>
                        <p className="text-2xl text-[#013DA6]/40 font-light italic">{record.artist}</p>
                      </div>
                      <a 
                        href={`https://open.spotify.com/album/${record.spotifyId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 rounded-full bg-[#013DA6] text-white shadow-xl hover:scale-110 active:scale-95 transition-all"
                      >
                        <SocialIcon platform="spotify" className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ACHIEVEMENT MOMENT — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-64 px-6 bg-[#013DA6] text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <Reveal>
              <h2 className="font-display text-6xl md:text-[12rem] leading-[0.8] tracking-tighter mb-16 italic">70+ Billion<br />Streams.</h2>
              <p className="text-xl md:text-3xl font-light text-white/40 max-w-2xl mx-auto leading-relaxed">
                Our management and A&R strategy is backed by data. We optimize for reach without compromising artistic integrity.
              </p>
            </Reveal>
          </div>
          
          {/* Animated Background Text */}
          <div className="absolute top-1/2 left-0 w-full whitespace-nowrap font-display text-[20vw] text-white/[0.02] pointer-events-none select-none -translate-y-1/2">
            GLOBAL IMPACT — GLOBAL IMPACT — GLOBAL IMPACT
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
