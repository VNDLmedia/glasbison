"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SubpageHero } from "@/components/SubpageHero";
import { ReturnHome } from "@/components/ReturnHome";

const ARTISTS = [
  {
    name: "Lil Nas X",
    image: "/artists/Lil-Nas-X.png",
    role: "Artist",
    stats: "Diamond Certified · 70B+ Streams",
    genre: "Pop / Hip-Hop",
  },
  {
    name: "Gunna",
    image: "/artists/Gunna.png",
    role: "Artist",
    stats: "Multi-Platinum · #1 Billboard Albums",
    genre: "Hip-Hop / Melodic",
  },
  {
    name: "Nicki Minaj",
    image: "/artists/Nicki-Minaj.png",
    role: "Artist",
    stats: "Diamond Certified · 100+ Hot 100 Entries",
    genre: "Hip-Hop / Pop",
  },
  {
    name: "Latto",
    image: "/artists/Latto.png",
    role: "Artist",
    stats: "Grammy Nominated · Platinum Hits",
    genre: "Hip-Hop",
  },
  {
    name: "Pooh Shiesty",
    image: "/artists/puh-scheißt-die.png",
    role: "Artist",
    stats: "Double Platinum · Shiesty Season",
    genre: "Hip-Hop / Trap",
  },
  {
    name: "T-Pain",
    image: "/artists/T-Pain.png",
    role: "Artist / Producer",
    stats: "Grammy Winner · Legend Status",
    genre: "R&B / Hip-Hop",
  },
  {
    name: "Lil Yachty",
    image: "/artists/Lil-Yachty.png",
    role: "Artist",
    stats: "Multi-Platinum · Creative Director",
    genre: "Hip-Hop / Experimental",
  },
];

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
            ARTIST LIST — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10 rounded-b-[4rem] shadow-2xl">
          <div className="max-w-7xl mx-auto space-y-0">
            {ARTISTS.map((artist, i) => (
              <Reveal key={artist.name} delay={i * 0.06}>
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-[#013DA6]/10 items-center hover:bg-[#013DA6]/[0.02] transition-colors duration-300 px-4 -mx-4 rounded-xl cursor-default">
                  {/* Image */}
                  <div className="md:col-span-2">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-[#013DA6]/10 group-hover:border-[#013DA6]/30 transition-all duration-500 group-hover:scale-105">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="md:col-span-3">
                    <h3 className="font-sans font-bold text-2xl md:text-3xl tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                      {artist.name}
                    </h3>
                    <span className="text-[10px] font-bold text-[#013DA6]/30 uppercase tracking-[0.2em] mt-1 block">{artist.role}</span>
                  </div>

                  {/* Genre */}
                  <div className="md:col-span-3">
                    <span className="text-sm text-[#013DA6]/40 font-light">{artist.genre}</span>
                  </div>

                  {/* Stats */}
                  <div className="md:col-span-4">
                    <p className="text-sm text-[#013DA6]/35 font-light">{artist.stats}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            APPROACH — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-[#013DA6] text-white relative">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-20 md:mb-28">
              <p className="label mb-6 text-white/40">Our Approach</p>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
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
