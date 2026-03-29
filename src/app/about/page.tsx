"use client";

import React, { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SubpageHero } from "@/components/SubpageHero";
import { ReturnHome } from "@/components/ReturnHome";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

const TIMELINE = [
  {
    year: "2018",
    title: "The Beginning",
    desc: "Glass Bison is founded in Berlin with a clear mission: build lasting careers for producers and songwriters through strategic infrastructure.",
    accent: true,
  },
  {
    year: "2019",
    title: "First Placements",
    desc: "Securing initial major placements with artists signed to Universal, Atlantic, and Columbia. The network begins to expand across territories.",
  },
  {
    year: "2020",
    title: "Pandemic Pivot",
    desc: "While the industry pauses, we accelerate — launching remote session pipelines and digital A&R workflows that become our competitive edge.",
  },
  {
    year: "2021",
    title: "Diamond Certified",
    desc: "Lil Nas X's Montero campaign marks a turning point. Multiple platinum certifications follow. The roster grows to include Grammy-nominated talent.",
    accent: true,
  },
  {
    year: "2022",
    title: "Global Expansion",
    desc: "Operations expand across US, UK, and Germany. Publishing deals secured with major publishers. The catalog surpasses 50 billion cumulative streams.",
  },
  {
    year: "2023",
    title: "Grammy Nomination",
    desc: "Album of the Year nomination. 70+ gold, platinum, and diamond certifications achieved. Glass Bison becomes a recognized force in the industry.",
    accent: true,
  },
  {
    year: "2024",
    title: "Infrastructure at scale",
    desc: "Full-service management model refined. Brand partnerships launched. Producer Elevation program onboards new talent with structured career architecture.",
  },
  {
    year: "Now",
    title: "The Future",
    desc: "Continuing to redefine what music management means. Building the infrastructure for the next generation of cultural architects.",
    accent: true,
  },
];

function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = rect.top - vh;
      const end = rect.bottom;
      const total = end - start;
      const current = -start;
      setScrollProgress(Math.max(0, Math.min(1, current / total)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lineHeight = scrollProgress * 100;

  return (
    <section ref={sectionRef} className="py-24 md:py-40 px-6 bg-[#011d5a] relative">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-20 md:mb-32 text-center">
          <p className="label mb-6 text-white/40">Our Journey</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            The Timeline.
          </h2>
        </Reveal>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-white/5" />
          <div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 w-px bg-gradient-to-b from-[#e11d48] to-[#e11d48]/30 origin-top"
            style={{ height: `${lineHeight}%`, transition: "height 0.05s linear" }}
          />

          <div className="space-y-0">
            {TIMELINE.map((item, i) => {
              const itemProgress = Math.max(0, Math.min(1, (scrollProgress * TIMELINE.length - i + 1)));
              const isVisible = itemProgress > 0.2;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 md:py-16 ${isLeft ? "" : "md:direction-rtl"}`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 top-14 md:top-18 z-10"
                    style={{
                      opacity: isVisible ? 1 : 0.15,
                      transform: `scale(${isVisible ? 1 : 0.5})`,
                      transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <div className={`w-3 h-3 rounded-full ${item.accent ? "bg-[#e11d48] shadow-lg shadow-[#e11d48]/40" : "bg-white/30"}`} />
                  </div>

                  {/* Year side */}
                  <div
                    className={`pl-16 md:pl-0 ${isLeft ? "md:text-right md:pr-16" : "md:text-left md:pl-16 md:order-2"}`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: `translateY(${isVisible ? 0 : 30}px)`,
                      transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <span className={`font-sans font-black text-4xl md:text-6xl tracking-tight ${item.accent ? "text-[#e11d48]" : "text-white/15"}`}>
                      {item.year}
                    </span>
                  </div>

                  {/* Content side */}
                  <div
                    className={`pl-16 md:pl-0 ${isLeft ? "md:pl-16" : "md:pr-16 md:text-right md:order-1"}`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: `translateY(${isVisible ? 0 : 40}px)`,
                      transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                    }}
                  >
                    <h3 className="font-sans font-bold text-xl md:text-2xl mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/40 font-light text-base leading-relaxed max-w-md inline-block">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#011d5a] text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <SubpageHero
          label="The Core Identity"
          title="strength Meets<br />Transparency."
          subtitle="A philosophy built on unyielding power protected by absolute clarity."
          description="Glass Bison stands for strength within the music industry."
        />

        <ReturnHome />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            VISION — Light Section
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-[#f0f2f8] text-[#011d5a] rounded-b-[3rem] md:rounded-b-[5rem] relative z-10 shadow-2xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-10">
              <Reveal>
                <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">The Vision.</h2>
                <div className="w-16 h-1 bg-[#e11d48] mt-6 rounded-full" />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg md:text-xl font-light leading-relaxed text-[#011d5a]/60">
                  In an industry often defined by noise, we focus on resonance. We don&apos;t just secure placements; we build sustainable ecosystems where creative talent can thrive for decades.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-[#e11d48]/60">Precision</h4>
                    <p className="text-sm font-light leading-relaxed text-[#011d5a]/50">Every move is calculated. From contract structures to studio pairings, we operate with surgical precision.</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-[#e11d48]/60">Legacy</h4>
                    <p className="text-sm font-light leading-relaxed text-[#011d5a]/50">We represent the creators behind the world&apos;s biggest hits, ensuring their contributions are recognized.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="relative aspect-square rounded-[3rem] overflow-hidden group shadow-2xl border border-[#011d5a]/10">
              <Image
                src="/photos/dude.png"
                alt="Glass Bison"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#011d5a]/10 mix-blend-overlay" />
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            TIMELINE — Scroll Animated
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <TimelineSection />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CONTACT
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-[#f0f2f8] text-[#011d5a] relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <Reveal>
                <p className="label mb-6 !text-[#011d5a]/40">Get in Touch</p>
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#011d5a] mb-8">
                  Let&apos;s Build<br />Together.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[#011d5a]/40 text-lg font-light leading-relaxed max-w-md mb-10">
                  Whether you&apos;re a producer, songwriter, or label — we&apos;re always open to meaningful conversations.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Link href="/contact" className="btn btn-accent !px-10 !py-5">
                  Contact Page
                </Link>
              </Reveal>
            </div>
            <div>
              <Reveal delay={0.2}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
