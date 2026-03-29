"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SubpageHero } from "@/components/SubpageHero";
import { ReturnHome } from "@/components/ReturnHome";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        <SubpageHero 
          label="The Core Identity"
          title="Strength Meets<br />Transparency."
          subtitle="A philosophy built on unyielding power protected by absolute clarity."
          description="Glass Bison stands for strength within the music industry. We provide the strategic drive creators deserve."
        />

        <ReturnHome />

        {/* Narrative Section */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] rounded-b-[3rem] md:rounded-b-[5rem] relative z-10 shadow-2xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-10">
              <Reveal>
                <h2 className="font-sans font-black text-4xl md:text-6xl leading-[1] tracking-[0.04em] uppercase">The Vision.</h2>
                <div className="w-20 h-1.5 bg-[#013DA6] mt-6 rounded-full" />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg md:text-xl font-light leading-relaxed italic text-[#013DA6]/70">
                  In an industry often defined by noise, we focus on resonance. We don&apos;t just secure placements; we build sustainable ecosystems where creative talent can thrive for decades.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-40 italic">Precision</h4>
                    <p className="text-sm font-medium leading-relaxed opacity-60">Every move is calculated. From contract structures to studio pairings, we operate with surgical precision.</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-40 italic">Legacy</h4>
                    <p className="text-sm font-medium leading-relaxed opacity-60">We represent the creators behind the world&apos;s biggest hits, ensuring their contributions are recognized.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="relative aspect-square rounded-[3rem] overflow-hidden group shadow-2xl border border-[#013DA6]/10">
              <Image
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop"
                alt="Studio Atmosphere"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#013DA6]/10 mix-blend-overlay" />
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-24 md:py-40 px-6 bg-[#013DA6]">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal>
              <p className="label mb-8 text-white/30 italic uppercase tracking-[0.4em]">Global Infrastructure</p>
              <h2 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] uppercase mb-16 leading-[1]">
                Unlimited<br />Reach.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Network", desc: "Access to decision-makers across every major territory and label group globally." },
                { title: "Protection", desc: "Top-tier legal and administrative support to safeguard your intellectual property." },
                { title: "Drive", desc: "Relentless pursuit of excellence in every session, every deal, and every release." }
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="p-8 border border-white/10 rounded-[2rem] bg-white/5 h-full transition-colors hover:bg-white/10">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed italic text-sm">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
