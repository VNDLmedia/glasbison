"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/Reveal";

const DISCOGRAPHY = [
  {
    artist: "Lil Nas X",
    title: "7 EP",
    role: "Management (X-plosive & Abas)",
    year: "2019",
    certification: "2x Platinum",
    highlight: "Grammy Nominated",
    spotifyEmbed: "https://open.spotify.com/embed/album/3Gt2MkrPnDN3MY6cRiIkig?utm_source=generator&theme=0",
  },
  {
    artist: "Gunna",
    title: "A Gift & A Curse",
    role: "Placements & A&R",
    year: "2023",
    certification: "Platinum",
    highlight: "1 Million Units",
    spotifyEmbed: "https://open.spotify.com/embed/album/3Osy5KWqBGBMCa9POdmsDy?utm_source=generator&theme=0",
  },
  {
    artist: "Pooh Shiesty",
    title: "Shiesty Season",
    role: "Placements & A&R",
    year: "2021",
    certification: "2x Platinum",
    highlight: "2 Million Units",
    spotifyEmbed: "https://open.spotify.com/embed/album/3qJKEHEbdMBERmil6MDoSw?utm_source=generator&theme=0",
  },
  {
    artist: "Latto",
    title: "Sugar Honey Iced Tea",
    role: "Placements",
    year: "2024",
    certification: "Gold",
    highlight: "0.5 Million Units",
    spotifyEmbed: "https://open.spotify.com/embed/album/1aGapZGHBovnFHMqiMhpYH?utm_source=generator&theme=0",
  },
];

export function DiscographyGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="music" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <p className="label mb-4">Selected Catalog</p>
            <h2 className="font-display text-4xl md:text-5xl text-white">The Music.</h2>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="flex overflow-x-auto gap-2 md:gap-3 pb-6 mb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden justify-start md:justify-center">
            {DISCOGRAPHY.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-500 shrink-0 ${
                    isActive
                      ? "bg-white text-[#013DA6] shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105"
                      : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  {item.artist}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Player Area */}
        <Reveal delay={0.2} key={activeIndex} animation="fade">
          <div className="liquid-glass border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl transition-all duration-700">
            {/* Spotify Embed */}
            <div className="w-full rounded-2xl overflow-hidden mb-8 bg-black/20 relative border border-white/5">
              <iframe
                src={DISCOGRAPHY[activeIndex].spotifyEmbed}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>

            {/* Track Info & Details */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none mb-2 drop-shadow-md">
                  {DISCOGRAPHY[activeIndex].artist}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-xl md:text-2xl font-bold text-white/90">
                    {DISCOGRAPHY[activeIndex].title}
                  </h4>
                  <span className="text-white/40 text-sm font-medium">({DISCOGRAPHY[activeIndex].year})</span>
                </div>
                <p className="text-sm font-medium text-white/60">
                  <span className="uppercase text-[10px] tracking-widest opacity-50 block mb-1">Role</span>
                  <span className="text-white/80">{DISCOGRAPHY[activeIndex].role}</span>
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-col items-start md:items-end gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-4 py-1.5 border border-white/20 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 text-white shadow-sm">
                    {DISCOGRAPHY[activeIndex].certification}
                  </span>
                </div>
                <div className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white text-[#013DA6] shadow-md">
                  {DISCOGRAPHY[activeIndex].highlight}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
