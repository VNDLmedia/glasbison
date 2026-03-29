"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { BisonLogo } from "@/components/BisonLogo";
import { SERVICES } from "@/data/content";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            HERO — Massive & Cinematic (Blue)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="min-h-[85vh] flex flex-col justify-center px-6 relative overflow-hidden bg-[#013DA6]">
          <div className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 pointer-events-none opacity-[0.03]">
            <BisonLogo size={1200} variant="white" />
          </div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10 pt-24">
            <Reveal>
              <p className="label mb-12 text-white/40 italic uppercase tracking-[0.5em]">The Infrastructure</p>
              <h1 className="font-display text-7xl md:text-[14rem] leading-[0.75] tracking-tighter mb-16">
                Our<br />Services.
              </h1>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
              <div className="lg:col-span-8">
                <Reveal delay={0.2}>
                  <p className="text-2xl md:text-5xl font-light leading-[1.1] text-white/80 italic">
                    Providing the strategic drive and technical precision for global cultural architects.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            DETAILED SERVICES — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-48 px-6 bg-white text-[#013DA6] relative z-10 rounded-t-[4rem] -mt-20 shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-32">
              {SERVICES.map((service, i) => (
                <Reveal key={service.slug} delay={i * 0.1} animation="fade">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[#013DA6]/10 pb-24 md:pb-32">
                    <div className="lg:col-span-4">
                      <span className="font-display text-6xl md:text-9xl text-[#013DA6]/10 block mb-8">{service.slug}</span>
                      <h3 className="text-3xl md:text-5xl font-display text-[#013DA6] leading-[0.9] tracking-tighter uppercase">{service.title}</h3>
                    </div>
                    <div className="lg:col-span-8 lg:pt-12">
                      <p className="text-2xl md:text-4xl font-light leading-relaxed text-[#013DA6]/60 italic mb-12">
                        {service.desc}
                      </p>
                      <div className="w-24 h-1 bg-[#013DA6] rounded-full" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            MANTRA SECTION — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-64 px-6 bg-[#013DA6] text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <Reveal>
              <h2 className="font-display text-6xl md:text-[12rem] leading-[0.8] tracking-tighter mb-16 italic">Scale Without<br />Compromise.</h2>
              <p className="text-xl md:text-3xl font-light text-white/40 max-w-2xl mx-auto leading-relaxed">
                We believe that great talent deserves an infrastructure that matches its ambition. Our services are the engine for that growth.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
