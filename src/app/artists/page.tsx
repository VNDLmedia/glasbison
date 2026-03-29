"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ArtistGallery } from "@/components/ArtistGallery";
import { SubpageHero } from "@/components/SubpageHero";
import { ReturnHome } from "@/components/ReturnHome";
import Image from "next/image";

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        <SubpageHero 
          label="The Roster"
          title="Sonic<br />Visionaries."
          subtitle="Representing the architects behind the world's most defining records."
          description="Our artists don't just follow trends—they set them. We provide the strategic infrastructure for long-term cultural dominance."
        />

        <ReturnHome />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            GALLERY — Blue on White Grid
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10 rounded-b-[4rem] shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-20">
              <h2 className="font-sans font-black text-4xl md:text-6xl tracking-[0.04em] uppercase leading-[1] mb-6 text-[#013DA6]">Selected<br />Artists.</h2>
              <p className="text-lg text-[#013DA6]/40 font-light max-w-xl italic">
                A curated selection of producers and songwriters who have collectively generated over 70 billion streams.
              </p>
            </Reveal>
            <ArtistGallery />
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PHILOSOPHY — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-48 px-6 bg-[#013DA6] text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
              <Image 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop"
                alt="Studio Vibes"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#013DA6]/20 mix-blend-overlay" />
            </div>
            
            <div className="space-y-12">
              <Reveal>
                <p className="label !text-white/20 mb-6 italic uppercase tracking-[0.4em]">Operational Excellence</p>
                <h2 className="font-sans font-black text-4xl md:text-6xl leading-[1] tracking-[0.04em] uppercase">Beyond<br />Management.</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed italic">
                  &quot;We don&apos;t just manage schedules; we manage legacies. Every career move is a strategic step towards industry permanence.&quot;
                </p>
              </Reveal>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <h4 className="font-bold text-white mb-2 italic">A&R Direction</h4>
                  <p className="text-sm text-white/30 font-light leading-relaxed">Active song-plugging and session curation with global major artists.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 italic">Strategic Deals</h4>
                  <p className="text-sm text-white/30 font-light leading-relaxed">Structuring publishing and label partnerships that protect your future.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CTA — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] text-center relative z-10 rounded-t-[4rem]">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl leading-[1] tracking-[0.04em] uppercase mb-12">Define the<br />Next Sound.</h2>
              <p className="text-lg md:text-2xl font-light text-[#013DA6]/40 mb-16 max-w-2xl mx-auto italic">
                We are selectively reviewing new talent. If your vision matches our drive, let&apos;s talk.
              </p>
              <a href="/contact" className="btn btn-white !bg-[#013DA6] !text-white !px-16 !py-8 !text-lg !rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all font-bold tracking-widest uppercase">
                Submit Inquiry
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
