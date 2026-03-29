"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";
import { SocialIcon } from "@/components/SocialIcons";
import { SubpageHero } from "@/components/SubpageHero";
import { ReturnHome } from "@/components/ReturnHome";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        <SubpageHero 
          label="Inquiry Management"
          title="Start the<br />Dialogue."
          subtitle="Selectively expanding our roster and global network."
          description="Tell us about your vision, your goals, and your creative drive. Let's define the next sound together."
        />

        <ReturnHome />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            FORM SECTION — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10 rounded-b-[4rem] shadow-2xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            {/* Left: Deep Info */}
            <div className="lg:col-span-5 space-y-24">
              <Reveal delay={0.1}>
                <div className="space-y-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#013DA6]/30 italic">Direct Channel</h3>
                  <a href={`mailto:${CONTACT.email}`} className="text-2xl md:text-3xl font-sans font-bold text-[#013DA6] hover:opacity-60 transition-all border-b-2 border-[#013DA6]/10 pb-4 inline-block tracking-[0.02em]">
                    {CONTACT.email}
                  </a>
                  <p className="text-lg text-[#013DA6]/40 font-light max-w-xs italic">For general inquiries, partnership proposals and press requests.</p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="space-y-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#013DA6]/30 italic">HQ / Representation</h3>
                  <p className="text-xl md:text-2xl font-light text-[#013DA6]/60 leading-relaxed italic tracking-tight">
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
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STATEMENT MOMENT — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-[#013DA6] text-white text-center relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <Reveal>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-10 italic">Unbreakable<br />Vision.</h2>
              <p className="text-lg md:text-xl text-white/40 font-light max-w-xl mx-auto italic leading-relaxed">
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
