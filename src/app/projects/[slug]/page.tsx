"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";

const PROJECT_DATA = {
  "global-shaping": {
    title: "Global Sound Shaping",
    category: "Strategic A&R",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
    fullDesc: "This project focused on scaling the impact of high-tier producers by integrating them into the global A&R workflows of major label groups. We developed a proprietary framework for talent scouting and catalog management that ensured maximum visibility for every record produced.",
    results: ["12 Billboard #1 Placements", "4x Platinum Certifications", "Global Sync Strategy Implementation"],
    stats: "2.4B Streams"
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = PROJECT_DATA[slug as keyof typeof PROJECT_DATA] || PROJECT_DATA["global-shaping"];

  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-48 pb-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <Link href="/projects" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors mb-12 inline-block border-b border-white/10 pb-1">
                &larr; All Projects
              </Link>
              <p className="label mb-8 text-white/40 italic">{project.category}</p>
              <h1 className="font-display text-5xl md:text-9xl leading-[0.85] tracking-tighter mb-16 max-w-4xl">
                {project.title}
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-6 relative z-10">
          <Reveal delay={0.2} animation="scale" className="max-w-7xl mx-auto">
            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#013DA6]/20 via-transparent to-transparent" />
            </div>
          </Reveal>
        </section>

        {/* Content */}
        <section className="py-24 md:py-48 px-6 bg-white text-[#013DA6] rounded-t-[3rem] md:rounded-t-[5rem] -mt-24 relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-3xl font-display mb-12">The Objective.</h2>
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-16 text-[#013DA6]/70 italic">
                  {project.fullDesc}
                </p>
              </Reveal>
              
              <div className="space-y-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Key Milestones</h3>
                <ul className="space-y-6">
                  {project.results.map((res, i) => (
                    <Reveal key={res} delay={i * 0.1} direction="left">
                      <li className="flex items-center gap-6 py-6 border-b border-[#013DA6]/10 text-xl md:text-2xl font-medium tracking-tight">
                        <span className="w-2 h-2 bg-[#013DA6] rounded-full" />
                        {res}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="p-12 md:p-16 rounded-[3rem] bg-[#013DA6] text-white shadow-2xl sticky top-32">
                  <p className="label !text-white/30 mb-8 uppercase tracking-[0.4em]">Performance</p>
                  <div className="font-display text-6xl md:text-8xl leading-none mb-12 tracking-tighter">
                    {project.stats}
                  </div>
                  <div className="w-12 h-1 bg-white/20 mb-12 rounded-full" />
                  <p className="text-white/40 leading-relaxed font-light">
                    Aggregated across all managed platforms and territories. This metric represents the net cultural impact generated through this specific strategic initiative.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
