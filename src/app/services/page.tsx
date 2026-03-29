"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/data/content";
import { SubpageHero } from "@/components/SubpageHero";
import { ReturnHome } from "@/components/ReturnHome";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        <SubpageHero 
          label="The Infrastructure"
          title="Our<br />Services."
          subtitle="Strategic drive and technical precision for cultural architects."
          description="From high-level career development to studio precision—we provide the engine for sustainable growth."
        />

        <ReturnHome />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            DETAILED SERVICES — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10 rounded-b-[4rem] shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-24 md:gap-32">
              {SERVICES.map((service, i) => (
                <Reveal key={service.slug} delay={i * 0.1} animation="fade">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start border-b border-[#013DA6]/10 pb-20 md:pb-28">
                    <div className="lg:col-span-4">
                      <span className="font-sans font-black text-5xl md:text-7xl text-[#013DA6]/10 block mb-6 tracking-[0.04em]">{service.slug}</span>
                      <h3 className="text-2xl md:text-4xl font-display text-[#013DA6] leading-[0.95] tracking-tight">{service.title}</h3>
                    </div>
                    <div className="lg:col-span-8 lg:pt-8">
                      <p className="text-xl md:text-2xl font-light leading-relaxed text-[#013DA6]/60 italic mb-10">
                        {service.desc}
                      </p>
                      <div className="w-20 h-1 bg-[#013DA6] rounded-full" />
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
        <section className="py-24 md:py-48 px-6 bg-[#013DA6] text-white relative overflow-hidden text-center">
          <div className="max-w-5xl mx-auto relative z-10">
            <Reveal>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-12 italic">Scale Without<br />Compromise.</h2>
              <p className="text-lg md:text-2xl font-light text-white/40 max-w-2xl mx-auto leading-relaxed italic">
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
