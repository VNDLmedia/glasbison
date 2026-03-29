"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { X, Instagram, TrendingUp, Music } from "lucide-react";

const SpotifyIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.216.354-.675.466-1.028.249-2.862-1.748-6.465-2.144-10.708-1.177-.404.092-.81-.16-.902-.565-.093-.404.16-.81.565-.902 4.645-1.062 8.624-.613 11.824 1.338.353.217.465.676.249 1.029zm1.468-3.263c-.273.443-.848.583-1.292.31-3.274-2.012-8.266-2.596-12.137-1.42-.498.15-1.023-.133-1.174-.63-.151-.498.133-1.022.63-1.173 4.42-1.34 9.913-.687 13.663 1.62.444.273.584.848.31 1.293zm.128-3.403c-3.927-2.332-10.417-2.548-14.192-1.402-.603.183-1.24-.16-1.423-.763-.183-.603.16-1.24.763-1.423 4.333-1.315 11.49-1.06 16.002 1.618.542.322.72 1.023.398 1.565-.322.543-1.023.721-1.565.398l.017.007z"/>
  </svg>
);

interface Artist {
  name: string;
  image: string;
  size: "large" | "normal" | "tall";
  bio: string;
  stats: string;
  genre: string;
  spotifyId: string;
  instagram?: string;
}

const ARTISTS: Artist[] = [
  {
    name: "Lil Nas X",
    image: "/artists/Lil-Nas-X.png",
    size: "large",
    bio: "Record-breaking artist and cultural icon. Known for blending genre boundaries and cinematic visual storytelling.",
    stats: "70+ Billion Streams · Diamond Certified",
    genre: "Pop / Hip-Hop",
    spotifyId: "7ld9698y97vAn9p8QH6t6S",
    instagram: "lilnasx",
  },
  {
    name: "Gunna",
    image: "/artists/Gunna.png",
    size: "normal",
    bio: "The master of melodic flow. A driving force in modern trap and fashion icon.",
    stats: "Multi-Platinum · #1 Billboard Albums",
    genre: "Hip-Hop / Melodic",
    spotifyId: "2hlmm7s5ICUX0L7p6GsnvA",
    instagram: "gunna",
  },
  {
    name: "Nicki Minaj",
    image: "/artists/Nicki-Minaj.png",
    size: "normal",
    bio: "The Queen of Rap. A legendary lyricist and mogul with global cultural influence.",
    stats: "Diamond Certified · 100+ Hot 100 Entries",
    genre: "Hip-Hop / Pop",
    spotifyId: "0hCNXpDUEp93v9SwaN974q",
    instagram: "nickiminaj",
  },
  {
    name: "Latto",
    image: "/artists/Latto.png",
    size: "tall",
    bio: "Atlanta's finest. Blazing a trail with sharp wit and undeniable star power.",
    stats: "Grammy Nominated · Platinum Hits",
    genre: "Hip-Hop",
    spotifyId: "3vsn1o49zqZpcdCHZ59S6S",
    instagram: "latto777",
  },
  {
    name: "Pooh Shiesty",
    image: "/artists/puh-scheißt-die.png",
    size: "normal",
    bio: "The new face of Memphis rap. Authenticity mixed with relentless energy.",
    stats: "Double Platinum · Shiesty Season",
    genre: "Hip-Hop / Trap",
    spotifyId: "0vGrS997pDeAm69ZMo999M",
    instagram: "poohshiesty",
  },
  {
    name: "T-Pain",
    image: "/artists/T-Pain.png",
    size: "normal",
    bio: "A visionary producer and singer who revolutionized the use of pitch-correction as an artistic tool.",
    stats: "Grammy Winner · Legend Status",
    genre: "R&B / Hip-Hop",
    spotifyId: "3TCauMnKIsJ2YhTkLuFiZ7",
    instagram: "tpain",
  },
  {
    name: "Lil Yachty",
    image: "/artists/Lil-Yachty.png",
    size: "normal",
    bio: "Creative chameleon. From 'Bubblegum Trap' to psychedelic rock, always pushing boundaries.",
    stats: "Multi-Platinum · Creative Director",
    genre: "Hip-Hop / Experimental",
    spotifyId: "6l3vj9BTvT6bs5Cq2tH39R",
    instagram: "lilyachty",
  },
];

export function ArtistGallery() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-full">
        {ARTISTS.map((artist, i) => {
          let spanClass = "col-span-1 row-span-1 aspect-square";
          if (artist.size === "large") spanClass = "col-span-2 row-span-2 aspect-square";
          if (artist.size === "tall") spanClass = "col-span-1 row-span-2 aspect-[1/2]";

          return (
            <Reveal
              key={artist.name}
              delay={i * 0.05}
              animation="scale"
              className={spanClass}
            >
              <div 
                onClick={() => setSelectedArtist(artist)}
                className="group relative w-full h-full overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-700 shadow-2xl cursor-pointer"
              >
                {/* Image */}
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="label !text-white/40 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{artist.genre}</p>
                  <h3 className="text-lg md:text-3xl font-bold tracking-tight text-white drop-shadow-lg leading-none">
                    {artist.name}
                  </h3>
                  
                  {/* Explore Hint */}
                  <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <div className="w-4 h-px bg-white/30" />
                    View Profile
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Artist Modal */}
      <AnimatePresence>
        {selectedArtist && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArtist(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl h-full max-h-[85vh] overflow-hidden rounded-[2rem] md:rounded-[3rem] liquid-glass border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedArtist(null)}
                className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Left Side: Image (Full height on desktop) */}
              <div className="relative w-full md:w-2/5 h-64 md:h-full shrink-0">
                <Image
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#013DA6] via-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#013DA6]/20" />
              </div>

              {/* Right Side: Content */}
              <div className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto no-scrollbar relative">
                {/* Background ambient glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/[0.03] blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="mb-6 inline-block px-4 py-1.5 border border-white/10 rounded-full text-[10px] font-semibold text-white/40 uppercase tracking-widest bg-white/5">
                    {selectedArtist.genre}
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#013DA6] mb-4 font-sans">
                    {selectedArtist.name}
                  </h2>
                  
                  <div className="flex items-center gap-3 mb-8 text-[#013DA6]/60">
                    <TrendingUp className="w-4 h-4 text-[#013DA6]/30" />
                    <p className="text-sm md:text-lg font-light tracking-wide">{selectedArtist.stats}</p>
                  </div>

                  <div className="w-12 h-1 bg-[#013DA6]/10 mb-8 rounded-full" />

                  <p className="text-[#013DA6]/40 text-lg leading-relaxed font-light mb-12 max-w-xl">
                    {selectedArtist.bio}
                  </p>

                  {/* Spotify Player */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-[#1DB954]/10">
                        <SpotifyIcon />
                      </div>
                      <p className="label !text-[#013DA6]/20">Featured Track</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-[#013DA6]/5 bg-black/5">
                      <iframe
                        src={`https://open.spotify.com/embed/artist/${selectedArtist.spotifyId}?utm_source=generator&theme=0`}
                        width="100%"
                        height="152"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="border-none"
                      />
                    </div>
                  </div>

                  {/* Socials */}
                  {selectedArtist.instagram && (
                    <div className="mt-12 pt-8 border-t border-[#013DA6]/5">
                      <a 
                        href={`https://instagram.com/${selectedArtist.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#013DA6]/5 border border-[#013DA6]/10 hover:bg-[#013DA6]/10 transition-all group"
                      >
                        <Instagram className="w-4 h-4 text-[#013DA6]/40 group-hover:text-[#013DA6]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[#013DA6]/40 group-hover:text-[#013DA6]">
                          @{selectedArtist.instagram}
                        </span>
                      </a>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
