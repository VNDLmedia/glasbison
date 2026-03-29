"use client";

import { CONTACT } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SubpageHero } from "@/components/SubpageHero";
import { ReturnHome } from "@/components/ReturnHome";

export default function Datenschutz() {
  return (
    <div className="flex flex-col min-h-screen bg-[#013DA6] text-white font-sans">
      <Navbar />
      
      <main className="flex-1">
        <SubpageHero 
          label="Legal Standards"
          title="Privacy<br />Policy."
          subtitle="Your privacy is fundamental to our transparency."
          description="We operate with absolute clarity. This policy outlines how we handle your information."
        />

        <ReturnHome />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CONTENT — Deep Dive
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10 rounded-b-[4rem] shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Sticky Sidebar Info */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-10">
                  <Reveal>
                    <div className="p-8 border border-[#013DA6]/10 rounded-[2rem] bg-[#013DA6]/[0.02]">
                      <h3 className="text-[10px] font-black text-[#013DA6] uppercase tracking-[0.3em] mb-4 italic">Last Updated</h3>
                      <p className="text-lg font-medium font-sans">March 2026</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <div className="p-8 space-y-5 text-[#013DA6]">
                      <h3 className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] italic">Contact Privacy</h3>
                      <p className="text-sm opacity-60 leading-relaxed font-light font-sans">
                        For all data-related inquiries, please reach out to our legal department.
                      </p>
                      <a href={`mailto:${CONTACT.email}`} className="text-sm font-bold border-b border-[#013DA6]/20 pb-1 font-sans">{CONTACT.email}</a>
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* Main Policy Content */}
              <div className="lg:col-span-8 text-[#013DA6]">
                <Reveal delay={0.2}>
                  <div className="space-y-20">
                    <section>
                      <h2 className="text-[10px] font-black opacity-20 uppercase tracking-[0.4em] mb-6 font-sans">01 / Introduction</h2>
                      <p className="text-xl md:text-2xl font-light leading-relaxed italic mb-6">
                        We prioritize the protection of your creative and personal assets.
                      </p>
                      <div className="prose prose-sm max-w-none opacity-60 font-light leading-relaxed space-y-5 text-base font-sans italic">
                        <p>
                          This website collects minimal data necessary for functionality. All processes are designed to respect the privacy of our visitors and clients.
                        </p>
                      </div>
                    </section>

                    <section>
                      <h2 className="text-[10px] font-black opacity-20 uppercase tracking-[0.4em] mb-6 font-sans">02 / Controller</h2>
                      <div className="text-lg md:text-2xl font-medium leading-snug space-y-2 italic font-sans">
                        <p>{CONTACT.company}</p>
                        <p className="opacity-40 font-light not-italic">{CONTACT.address.street}</p>
                        <p className="opacity-40 font-light not-italic">{CONTACT.address.zip} {CONTACT.address.city}</p>
                      </div>
                    </section>

                    <section>
                      <h2 className="text-[10px] font-black opacity-20 uppercase tracking-[0.4em] mb-6 font-sans">03 / Data Security</h2>
                      <div className="prose prose-sm max-w-none opacity-60 font-light leading-relaxed space-y-5 text-base font-sans italic">
                        <p>
                          We implement industry-standard encryption and security protocols to protect your data. Our infrastructure is reviewed regularly to ensure compliance with the highest standards.
                        </p>
                      </div>
                    </section>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            FOOTER MOMENT
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 bg-[#013DA6] text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight opacity-10 leading-[0.95] italic">safe &<br />secure.</h2>
          </Reveal>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
