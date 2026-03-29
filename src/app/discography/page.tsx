"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { RECORDS } from "@/context/MediaContext";
import { SocialIcon } from "@/components/SocialIcons";
import { SubpageHero } from "@/components/SubpageHero";
import { ReturnHome } from "@/components/ReturnHome";

export default function DiscographyPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        <SubpageHero 
          label="The Sonic Legacy"
          title="The<br />Catalog."
          subtitle="A definitive archive of culturally defining records and multi-platinum hits."
          description="Representing producers and songwriters behind over 70 Billion global streams and countless chart-topping moments."
        />

        <ReturnHome />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CATALOG GRID — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="pb-24 md:pb-48 px-6 bg-white text-[#013DA6] relative z-10 rounded-b-[4rem] shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-32">
              <h2 className="font-display text-5xl md:text-8xl tracking-tighter leading-none mb-12">The<br />Hits.</h2>
              <div className="w-24 h-1.5 bg-[#013DA6] rounded-full" />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {RECORDS.map((record, i) => (
                <Reveal key={record.id} delay={i * 0.05} animation="fade">
                  <div className="group flex flex-col h-full bg-[#013DA6]/[0.02] border border-[#013DA6]/5 rounded-[3rem] p-8 transition-all duration-500 hover:bg-[#013DA6]/[0.04] hover:border-[#013DA6]/10">
                    {/* Embedded Spotify Player */}
                    <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-black shadow-2xl transition-all duration-700 group-hover:scale-[1.02] mb-10">
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
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-black text-[#013DA6]/40 uppercase tracking-[0.2em]">{record.genre}</span>
                        <div className="w-1.5 h-1.5 bg-[#013DA6]/10 rounded-full" />
                        <span className="text-[10px] font-bold text-[#013DA6]/30 uppercase tracking-[0.2em]">RIAA Platinum</span>
                      </div>
                      <h3 className="text-3xl font-display text-[#013DA6] mb-3 leading-tight tracking-tight">{record.title}</h3>
                      <p className="text-xl text-[#013DA6]/40 font-light italic mb-8">{record.artist}</p>
                      
                      <div className="mt-auto flex justify-between items-center pt-8 border-t border-[#013DA6]/10">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#013DA6]/20 italic">Verified Credit</span>
                        <a 
                          href={`https://open.spotify.com/album/${record.spotifyId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-full bg-[#013DA6] text-white shadow-xl hover:scale-110 active:scale-95 transition-all"
                        >
                          <SocialIcon platform="spotify" className="w-4 h-4" />
                        </a>
                      </div>
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
              <p className="text-xl md:text-3xl font-light text-white/40 max-w-2xl mx-auto leading-relaxed italic">
                Our management and A&R strategy is backed by data. We optimize for reach without compromising artistic integrity.
              </p>
            </Reveal>
          </div>
          
          <div className="absolute top-1/2 left-0 w-full whitespace-nowrap font-display text-[20vw] text-white/[0.02] pointer-events-none select-none -translate-y-1/2 uppercase tracking-widest">
            GLOBAL IMPACT — GLOBAL IMPACT — GLOBAL IMPACT
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
