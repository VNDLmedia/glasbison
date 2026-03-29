"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { BisonLogo } from "@/components/BisonLogo";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-48 pb-24 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
            <BisonLogo size={800} variant="white" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <Reveal>
              <p className="label mb-8 text-white/40 italic">The Core Identity</p>
              <h1 className="font-display text-6xl md:text-[10rem] leading-[0.8] tracking-tighter mb-16">
                Strength Meets<br />Transparency.
              </h1>
            </Reveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
              <div className="lg:col-span-7">
                <Reveal delay={0.2}>
                  <p className="text-2xl md:text-4xl font-light leading-snug text-white/80 italic">
                    "Glass Bison is more than a name. It is our operational philosophy. Unyielding power protected by absolute clarity."
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-5">
                <Reveal delay={0.3}>
                  <p className="text-lg text-white/40 font-light leading-relaxed">
                    Founded on the belief that producers and songwriters are the architects of culture, we built Glass Bison to provide the infrastructure, protection, and strategic drive they deserve.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 md:py-48 px-6 bg-white text-[#013DA6] rounded-[3rem] md:rounded-[5rem] relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <Reveal>
                <h2 className="font-display text-5xl md:text-8xl leading-none tracking-tighter">The Vision.</h2>
                <div className="w-20 h-1.5 bg-[#013DA6] mt-8 rounded-full" />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-xl md:text-2xl font-light leading-relaxed">
                  In an industry often defined by noise, we focus on resonance. We don't just secure placements; we build sustainable ecosystems where creative talent can thrive for decades, not just seasons.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-40">Precision</h4>
                    <p className="text-sm font-medium leading-relaxed opacity-60">Every move is calculated. From contract structures to studio pairings, we operate with surgical precision.</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-40">Legacy</h4>
                    <p className="text-sm font-medium leading-relaxed opacity-60">We represent the creators behind the world's biggest hits, ensuring their contributions are recognized and rewarded.</p>
                  </div>
                </div>
              </Reveal>
            </div>
            
            <div className="relative aspect-square rounded-[3rem] overflow-hidden group shadow-2xl">
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
        <section className="py-24 md:py-48 px-6 bg-[#013DA6]">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal>
              <p className="label mb-8 text-white/30 italic">Global Infrastructure</p>
              <h2 className="font-display text-5xl md:text-9xl tracking-tighter mb-20 leading-none">
                Unlimited<br />Reach.
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              {[
                { title: "Network", desc: "Access to decision-makers across every major territory and label group globally." },
                { title: "Protection", desc: "Top-tier legal and administrative support to safeguard your intellectual property." },
                { title: "Drive", desc: "Relentless pursuit of excellence in every session, every deal, and every release." }
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="p-10 border border-white/10 rounded-[2.5rem] bg-white/5 h-full">
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
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
