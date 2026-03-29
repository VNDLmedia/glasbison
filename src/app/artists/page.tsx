"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ArtistGallery } from "@/components/ArtistGallery";
import { SubpageHero } from "@/components/SubpageHero";
import { ReturnHome } from "@/components/ReturnHome";
import Link from "next/link";

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <SubpageHero
          label="The Roster"
          title="Sonic<br />Visionaries."
          subtitle="Representing the architects behind the world's most defining records."
          description="Our artists don't just follow trends—they set them."
        />

        <ReturnHome />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            GALLERY — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10 rounded-b-[4rem] shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <ArtistGallery />
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            APPROACH — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-[#013DA6] text-white relative">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-20 md:mb-28">
              <p className="label mb-6 text-white/40">Our Approach</p>
              <h2 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-[0.04em] uppercase">
                Beyond<br />Management.
              </h2>
            </Reveal>

            <div className="border-t border-white/10">
              {[
                { n: "01", t: "A&R Direction", d: "Active song-plugging and session curation with global major artists. We connect our roster with the right opportunities." },
                { n: "02", t: "Strategic Deals", d: "Structuring publishing and label partnerships that protect your future and maximize your creative leverage." },
                { n: "03", t: "Career Architecture", d: "Every move is calculated. From branding to releases — we build sustainable careers, not temporary hype." },
              ].map((item, i) => (
                <Reveal key={item.n} delay={i * 0.06}>
                  <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-white/10 items-baseline hover:bg-white/[0.03] transition-colors duration-300 px-4 -mx-4 rounded-xl cursor-default">
                    <div className="md:col-span-1">
                      <span className="font-sans font-black text-2xl md:text-4xl text-white/10 group-hover:text-white/25 transition-colors duration-300 tracking-[0.04em]">
                        {item.n}
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="font-sans font-bold text-lg md:text-xl tracking-[0.02em] group-hover:translate-x-1 transition-transform duration-300">
                        {item.t}
                      </h3>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-white/35 font-light text-base md:text-lg leading-relaxed">
                        {item.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CTA
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-32 px-6 bg-[#013DA6] text-center border-t border-white/5">
          <Reveal>
            <p className="text-lg md:text-xl font-light text-white/40 mb-8 italic max-w-lg mx-auto">
              We are selectively reviewing new talent. If your vision matches our drive, let&apos;s talk.
            </p>
            <Link href="/contact" className="btn btn-white !px-12 !py-5">
              Submit Inquiry
            </Link>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
