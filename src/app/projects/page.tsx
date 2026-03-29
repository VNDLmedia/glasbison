"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import { SubpageHero } from "@/components/SubpageHero";
import { ReturnHome } from "@/components/ReturnHome";

const PROJECTS = [
  {
    slug: "global-shaping",
    title: "Global sound shaping",
    category: "Strategic A&R",
    image: "/photos/kai-grammys.jpeg",
    desc: "Bridging the gap between independent creators and major label infrastructure through targeted A&R campaigns across territories.",
    stats: ["12+ Major Placements", "3 Territories", "2024–Present"],
  },
  {
    slug: "producer-elevation",
    title: "Producer Elevation",
    category: "Management",
    image: "/photos/dude.png",
    desc: "Transforming regional beatmakers into global cultural architects through structured career development and label introductions.",
    stats: ["5 Producers Signed", "Platinum Results", "Ongoing"],
  },
  {
    slug: "strategic-placements",
    title: "strategic Placements",
    category: "Network",
    image: "/photos/dude-mit-award.png",
    desc: "Curating high-impact sessions that define the Billboard charts. Connecting songwriters with A-list recording artists.",
    stats: ["30+ Sessions", "Billboard Entries", "2023–Present"],
  },
  {
    slug: "catalog-administration",
    title: "Catalog Administration",
    category: "Publishing",
    image: "/photos/urkunde.png",
    desc: "Full-service catalog management — from royalty collection and split negotiations to sync licensing and copyright protection.",
    stats: ["70+ Certifications", "Global Collection", "Active"],
  },
  {
    slug: "brand-partnerships",
    title: "Brand Partnerships",
    category: "Business Development",
    image: "/photos/kai-plaque.jpeg",
    desc: "Connecting our roster with premium brand opportunities — from endorsement deals to creative collaborations that amplify reach.",
    stats: ["Select Partners", "Multi-Platform", "2024–Present"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <SubpageHero
          label="Selected Initiatives"
          title="Our<br />Projects."
          subtitle="Transforming industry frameworks through strategic innovation."
          description="Calculated, high-impact projects that bridge creative intent and global infrastructure."
        />

        <ReturnHome />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PROJECT LIST — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10 rounded-b-[4rem] shadow-2xl">
          <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                    {/* Image */}
                    <div className={`relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-xl border border-[#013DA6]/10 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#013DA6]/5 mix-blend-overlay" />
                    </div>

                    {/* Content */}
                    <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#013DA6]/30 italic">{project.category}</span>
                      <h3 className="font-sans font-black text-3xl md:text-5xl text-[#013DA6] leading-[1] tracking-[0.02em] uppercase group-hover:translate-x-1 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <p className="text-lg text-[#013DA6]/50 font-light leading-relaxed max-w-lg">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-4 pt-2">
                        {project.stats.map((stat) => (
                          <span key={stat} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#013DA6]/30 px-4 py-2 border border-[#013DA6]/10 rounded-full">
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            NUMBERS — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-[#013DA6] text-white">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-20 md:mb-28">
              <p className="label mb-6 text-white/40">Impact</p>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                scale With<br />Precision.
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "70+", label: "Certifications" },
                { value: "7+", label: "Label Partners" },
                { value: "50+", label: "Sessions / Year" },
                { value: "5", label: "Active Territories" },
              ].map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div className="text-center py-10 border border-white/10 rounded-[1.5rem] hover:bg-white/[0.03] transition-colors">
                    <div className="font-sans font-black text-4xl md:text-5xl tracking-[0.04em] mb-3 text-white/80">{stat.value}</div>
                    <div className="text-[10px] font-bold text-white/25 uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
