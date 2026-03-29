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
    spotifyId: "7jVv8c5Fj3E9VhNjxT4snq",
  },
  {
    name: "Gunna",
    image: "/artists/Gunna.png",
    role: "Artist",
    stats: "Multi-Platinum · #1 Billboard Albums",
    genre: "Hip-Hop / Melodic",
    spotifyId: "2hlmm7s5ICUX0L7p6GsnvA",
  },
  {
    name: "Nicki Minaj",
    image: "/artists/Nicki-Minaj.png",
    role: "Artist",
    stats: "Diamond Certified · 100+ Hot 100 Entries",
    genre: "Hip-Hop / Pop",
    spotifyId: "0hCNtLu0JehylgoiP8L4Gh",
  },
  {
    name: "Latto",
    image: "/artists/Latto.png",
    role: "Artist",
    stats: "Grammy Nominated · Platinum Hits",
    genre: "Hip-Hop",
    spotifyId: "3MdXrJWsbVzdn6fe5JYkSQ",
  },
  {
    name: "Pooh Shiesty",
    image: "/artists/puh-scheißt-die.png",
    role: "Artist",
    stats: "Double Platinum · Shiesty Season",
    genre: "Hip-Hop / Trap",
    spotifyId: "3KedxarmBmXDxnMpVb4FMR",
  },
  {
    name: "T-Pain",
    image: "/artists/T-Pain.png",
    role: "Artist / Producer",
    stats: "Grammy Winner · Legend Status",
    genre: "R&B / Hip-Hop",
    spotifyId: "3aQeKQSyrW4qWr35idm0ce",
  },
  {
    name: "Lil Yachty",
    image: "/artists/Lil-Yachty.png",
    role: "Artist",
    stats: "Multi-Platinum · Creative Director",
    genre: "Hip-Hop / Experimental",
    spotifyId: "6icQOAFXDZKsumw3YXyusw",
  },
];

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <SubpageHero
          label="The Roster"
          title="sonic<br />Visionaries."
          subtitle="Representing the architects behind the world's most defining records."
          description="Our artists don't just follow trends—they set them."
        />

        <ReturnHome />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ARTIST PROFILES — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10 rounded-b-[4rem] shadow-2xl">
          <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
            {ARTISTS.map((artist, i) => (
              <Reveal key={artist.name} delay={i * 0.06}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "" : ""}`}>
                  {/* Image */}
                  <div className={`relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#013DA6]/10 shadow-xl ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#013DA6]/40 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em]">{artist.genre}</span>
                    </div>
                  </div>

                  {/* Info + Spotify */}
                  <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <span className="text-[10px] font-bold text-[#013DA6]/30 uppercase tracking-[0.3em]">{artist.role}</span>
                      <h3 className="font-sans font-bold text-4xl md:text-5xl tracking-tight mt-2">
                        {artist.name}
                      </h3>
                    </div>
                    <p className="text-base text-[#013DA6]/40 font-light">{artist.stats}</p>
                    <div className="w-12 h-1 bg-[#013DA6]/10 rounded-full" />

                    {/* Spotify Embed */}
                    <div className="rounded-xl overflow-hidden border border-[#013DA6]/10 mt-4">
                      <iframe
                        src={`https://open.spotify.com/embed/artist/${artist.spotifyId}?utm_source=generator&theme=0`}
                        width="100%"
                        height="152"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="border-none"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
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
