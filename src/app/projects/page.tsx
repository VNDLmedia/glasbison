"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { BisonLogo } from "@/components/BisonLogo";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    slug: "global-shaping",
    title: "Global Sound Shaping",
    category: "Strategic A&R",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
    desc: "Bridging the gap between independent creators and major label infrastructure."
  },
  {
    slug: "producer-elevation",
    title: "Producer Elevation",
    category: "Management",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
    desc: "Transforming regional beatmakers into global cultural architects."
  },
  {
    slug: "strategic-placements",
    title: "Strategic Placements",
    category: "Network",
    image: "https://images.unsplash.com/photo-1514525253341-b01a306e7f5c?q=80&w=1000&auto=format&fit=crop",
    desc: "Curating high-impact sessions that define the Billboard charts."
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            HERO — Massive & Cinematic (Blue)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="min-h-[85vh] flex flex-col justify-center px-6 relative overflow-hidden bg-[#013DA6]">
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 pointer-events-none opacity-[0.03]">
            <BisonLogo size={1200} variant="white" />
          </div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10 pt-24 text-center md:text-left">
            <Reveal>
              <p className="label mb-12 text-white/40 italic uppercase tracking-[0.5em]">Selected Initiatives</p>
              <h1 className="font-display text-7xl md:text-[14rem] leading-[0.75] tracking-tighter mb-16">
                Our<br />Projects.
              </h1>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
              <div className="lg:col-span-8">
                <Reveal delay={0.2}>
                  <p className="text-2xl md:text-5xl font-light leading-[1.1] text-white/80 italic">
                    Transforming industry frameworks through strategic innovation and creative drive.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PROJECT GALLERY — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-48 px-6 bg-white text-[#013DA6] relative z-10 rounded-t-[4rem] -mt-20 shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              {PROJECTS.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.1} animation="scale">
                  <Link href={`/projects/${project.slug}`} className="group block space-y-10">
                    <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl border border-[#013DA6]/10">
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#013DA6]/5 mix-blend-overlay" />
                      {/* View Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-sm">
                        <span className="px-8 py-4 rounded-full bg-white text-[#013DA6] font-bold uppercase tracking-widest text-xs shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">View Project</span>
                      </div>
                    </div>
                    
                    <div className="pb-8 border-b border-[#013DA6]/10">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#013DA6]/30 mb-6 block italic">{project.category}</span>
                      <h3 className="text-4xl md:text-6xl font-display text-[#013DA6] leading-none mb-8 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                      <p className="text-xl text-[#013DA6]/50 font-light max-w-md leading-relaxed italic">{project.desc}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            NETWORK MOMENT — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-64 px-6 bg-[#013DA6] text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <Reveal>
              <h2 className="font-display text-6xl md:text-[12rem] leading-[0.8] tracking-tighter mb-16 italic">Scale With<br />Precision.</h2>
              <p className="text-xl md:text-3xl font-light text-white/40 max-w-2xl mx-auto leading-relaxed">
                We bridge the gap between creative vision and global market infrastructure. Our projects are the proof.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
