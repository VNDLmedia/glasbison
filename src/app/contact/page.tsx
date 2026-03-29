"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { BisonLogo } from "@/components/BisonLogo";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";
import { SocialIcon } from "@/components/SocialIcons";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            HERO — Massive & Cinematic (Blue)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="min-h-[85vh] flex flex-col justify-center px-6 relative overflow-hidden bg-[#013DA6]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
            <BisonLogo size={1000} variant="white" />
          </div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10 pt-24 text-center md:text-left">
            <Reveal>
              <p className="label mb-12 text-white/40 italic uppercase tracking-[0.5em]">Inquiry Management</p>
              <h1 className="font-display text-7xl md:text-[14rem] leading-[0.75] tracking-tighter mb-16">
                Start the<br />Dialogue.
              </h1>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
              <div className="lg:col-span-8">
                <Reveal delay={0.2}>
                  <p className="text-2xl md:text-5xl font-light leading-[1.1] text-white/80 italic">
                    We are selectively expanding our roster and network.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            FORM SECTION — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-48 px-6 bg-white text-[#013DA6] relative z-10 rounded-t-[4rem] -mt-20 shadow-2xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            {/* Left: Deep Info */}
            <div className="lg:col-span-5 space-y-24">
              <Reveal delay={0.1}>
                <div className="space-y-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#013DA6]/30 italic">Direct Channel</h3>
                  <a href={`mailto:${CONTACT.email}`} className="text-3xl md:text-5xl font-display text-[#013DA6] hover:opacity-60 transition-all border-b-2 border-[#013DA6]/10 pb-4 inline-block">
                    {CONTACT.email}
                  </a>
                  <p className="text-lg text-[#013DA6]/40 font-light max-w-xs italic">For general inquiries, partnership proposals and press requests.</p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="space-y-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#013DA6]/30 italic">HQ / Representation</h3>
                  <p className="text-2xl md:text-4xl font-light text-[#013DA6]/60 leading-relaxed italic">
                    {CONTACT.address.city}, Germany<br />
                    Operating Worldwide.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="space-y-8">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#013DA6]/30 italic">Digital Presence</h3>
                  <div className="flex gap-10">
                    {[
                      { platform: "instagram", href: SOCIAL_LINKS.instagram },
                      { platform: "tiktok", href: SOCIAL_LINKS.tiktok },
                      { platform: "spotify", href: SOCIAL_LINKS.spotify },
                    ].map((s) => (
                      <a 
                        key={s.platform} 
                        href={s.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-6 rounded-full border border-[#013DA6]/10 text-[#013DA6]/40 hover:text-white hover:bg-[#013DA6] hover:border-[#013DA6] transition-all shadow-xl"
                      >
                        <SocialIcon platform={s.platform as any} className="w-8 h-8" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Modern Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.4}>
                <div className="p-2 md:p-4">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STATEMENT MOMENT — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-64 px-6 bg-[#013DA6] text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <Reveal>
              <h2 className="font-display text-5xl md:text-[10rem] leading-[0.8] tracking-tighter mb-12">Unbreakable<br />Vision.</h2>
              <p className="text-xl md:text-2xl text-white/40 font-light max-w-xl mx-auto italic leading-relaxed">
                We believe in the power of creative intent. Let&apos;s build something that lasts.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
