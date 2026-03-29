"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
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
          description="The engine for sustainable growth."
        />

        <ReturnHome />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SERVICES LIST — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10 rounded-b-[4rem] shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <div className="border-t border-[#013DA6]/10">
              {SERVICES.map((service, i) => (
                <Reveal key={service.slug} delay={i * 0.06}>
                  <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-[#013DA6]/10 items-baseline hover:bg-[#013DA6]/[0.02] transition-colors duration-300 px-4 -mx-4 rounded-xl cursor-default">
                    <div className="md:col-span-1">
                      <span className="font-sans font-black text-2xl md:text-4xl text-[#013DA6]/10 group-hover:text-[#013DA6]/25 transition-colors duration-300 tracking-[0.04em]">
                        {service.slug}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="font-sans font-bold text-lg md:text-xl tracking-[0.02em] text-[#013DA6] group-hover:translate-x-1 transition-transform duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-[#013DA6]/40 font-light text-base md:text-lg leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            MANTRA — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-[#013DA6] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-10 italic">Scale Without<br />Compromise.</h2>
              <p className="text-lg md:text-xl font-light text-white/40 max-w-xl mx-auto leading-relaxed italic">
                Great talent deserves infrastructure that matches its ambition.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CONTACT — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <Reveal>
                <p className="label mb-6 !text-[#013DA6]/40">Get Started</p>
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#013DA6] mb-8">
                  Let&apos;s Work<br />Together.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[#013DA6]/40 text-lg font-light leading-relaxed max-w-md mb-10">
                  Tell us about your vision. Whether you need management, placements, or strategic support — we&apos;re ready.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Link href="/contact" className="btn btn-white !bg-[#013DA6] !text-white !px-10 !py-5">
                  Contact Page
                </Link>
              </Reveal>
            </div>
            <div>
              <Reveal delay={0.2}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
