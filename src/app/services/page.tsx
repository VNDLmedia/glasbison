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
        <section className="pb-24 md:py-48 px-6 bg-white text-[#013DA6] relative z-10 rounded-b-[4rem] shadow-2xl">
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
        <section className="py-24 md:py-64 px-6 bg-[#013DA6] text-white relative overflow-hidden text-center">
          <div className="max-w-5xl mx-auto relative z-10">
            <Reveal>
              <h2 className="font-display text-6xl md:text-[12rem] leading-[0.8] tracking-tighter mb-16 italic">Scale Without<br />Compromise.</h2>
              <p className="text-xl md:text-3xl font-light text-white/40 max-w-2xl mx-auto leading-relaxed italic">
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
