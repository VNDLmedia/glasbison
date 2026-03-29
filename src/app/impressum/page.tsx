"use client";

import React from "react";
import { CONTACT, SITE_NAME } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SubpageHero } from "@/components/SubpageHero";
import { ReturnHome } from "@/components/ReturnHome";

export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen bg-[#011d5a] text-white font-sans">
      <Navbar />
      
      <main className="flex-1">
        <SubpageHero 
          label="Identity & Legal"
          title="Imprint."
          subtitle="Unyielding power protected by absolute clarity."
          description="Glass Bison is more than a name. It is our operational philosophy."
        />

        <ReturnHome />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CONTENT — Multi-Column Layout
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-[#f0f2f8] text-[#011d5a] relative z-10 rounded-b-[4rem] shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-6 space-y-20">
                <Reveal delay={0.1}>
                  <section>
                    <h2 className="text-[10px] font-black text-[#011d5a]/30 uppercase tracking-[0.3em] mb-6 italic">Company</h2>
                    <div className="text-2xl md:text-4xl font-sans font-black leading-tight text-[#011d5a] tracking-[0.02em] uppercase">
                      {CONTACT.company}
                    </div>
                    <div className="mt-8 text-xl md:text-2xl font-light text-[#011d5a]/60 leading-relaxed font-sans italic">
                      <p>{CONTACT.address.street}</p>
                      <p>{CONTACT.address.zip} {CONTACT.address.city}</p>
                      <p className="not-italic opacity-40 mt-4 uppercase tracking-widest text-xs font-bold">Germany</p>
                    </div>
                  </section>
                </Reveal>

                <Reveal delay={0.2}>
                  <section>
                    <h2 className="text-[10px] font-black text-[#011d5a]/30 uppercase tracking-[0.3em] mb-8 italic">Direct</h2>
                    <div className="space-y-4 font-sans">
                      <a href={`mailto:${CONTACT.email}`} className="text-2xl md:text-3xl font-medium border-b-2 border-[#011d5a]/10 pb-2 inline-block hover:opacity-60 transition-all italic">
                        {CONTACT.email}
                      </a>
                      <p className="text-xl font-light text-[#011d5a]/40 tracking-tight">{CONTACT.phone}</p>
                    </div>
                  </section>
                </Reveal>
              </div>

              <div className="lg:col-span-6 space-y-20">
                <Reveal delay={0.3}>
                  <section>
                    <h2 className="text-[10px] font-black text-[#011d5a]/30 uppercase tracking-[0.3em] mb-6 italic">Editorial Responsibility</h2>
                    <div className="text-xl md:text-2xl font-light text-[#011d5a]/60 leading-relaxed italic font-sans">
                      <p className="text-[#011d5a] font-medium not-italic mb-2">Maximilian Fritsch</p>
                      <p>{CONTACT.address.street}</p>
                      <p>{CONTACT.address.zip} {CONTACT.address.city}</p>
                    </div>
                  </section>
                </Reveal>

                <Reveal delay={0.4}>
                  <section className="p-10 bg-[#011d5a]/[0.02] border border-[#011d5a]/10 rounded-[3rem] font-sans">
                    <h2 className="text-[10px] font-black text-[#011d5a]/30 uppercase tracking-[0.3em] mb-6 italic">Copyright</h2>
                    <p className="text-sm font-light leading-relaxed text-[#011d5a]/50 italic">
                      The content and works created by the site operator on these pages are subject to German copyright law. Any kind of exploitation requires the written consent of {SITE_NAME}.
                    </p>
                  </section>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            FOOTER MOMENT
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 bg-[#011d5a] text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight opacity-10 leading-[0.95] italic">Unbreakable.</h2>
          </Reveal>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
