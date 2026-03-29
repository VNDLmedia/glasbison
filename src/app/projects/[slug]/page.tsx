"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { StickySection } from "@/components/StickySection";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { SubpageHero } from "@/components/SubpageHero";

interface ProjectData {
  title: string;
  category: string;
  image: string;
  image2?: string;
  subtitle: string;
  description: string;
  challenge: string;
  approach: string;
  results: string[];
  stats: { value: string; label: string }[];
  quote?: string;
}

const PROJECT_DATA: Record<string, ProjectData> = {
  "global-shaping": {
    title: "Global sound<br />shaping",
    category: "Strategic A&R",
    image: "/photos/kai-grammys.jpeg",
    image2: "/photos/award.png",
    subtitle: "Strategic integration into global market workflows.",
    description: "Scaling the impact of high-tier producers by integrating them into the global A&R workflows of major label groups. A proprietary framework for talent scouting and catalog management that ensures maximum visibility for every record produced.",
    challenge: "Independent producers with world-class talent were being overlooked by traditional A&R pipelines. Despite platinum-level output, many lacked the infrastructure to reach decision-makers at major labels across territories.",
    approach: "We built direct relationships with A&R teams at Universal, Sony, and Warner across the US, UK, and Germany. Each producer was matched with targeted campaigns — curated sessions, strategic song-plugging, and co-writing placements with signed artists.",
    results: ["12 Billboard #1 Placements", "4x Platinum Certifications", "Global Sync Strategy", "3 Territory Expansion"],
    stats: [
      { value: "2.4B", label: "Total Streams" },
      { value: "12", label: "Billboard #1s" },
      { value: "4x", label: "Platinum" },
      { value: "3", label: "Territories" },
    ],
    quote: "The framework changed how our producers approach the global market. It's not about luck — it's about infrastructure.",
  },
  "producer-elevation": {
    title: "Producer<br />Elevation",
    category: "Management",
    image: "/photos/dude.png",
    image2: "/photos/dude-mit-award.png",
    subtitle: "From regional talent to global cultural architects.",
    description: "A structured management program transforming emerging beatmakers into established, globally recognized producers with sustainable careers and major label partnerships.",
    challenge: "Talented producers were stuck in local scenes, selling beats online without career strategy, publishing protection, or industry connections. Raw talent was being wasted without proper infrastructure.",
    approach: "We developed a 360° onboarding process: brand positioning, legal structure, publishing deals, and A&R introductions. Each producer received a tailored roadmap with milestones, session targets, and relationship-building goals.",
    results: ["5 Producers Signed", "Multi-Platinum Results", "Publishing Deals Secured", "Brand Identity Development"],
    stats: [
      { value: "5", label: "Producers Signed" },
      { value: "8", label: "Publishing Deals" },
      { value: "100%", label: "Retention Rate" },
      { value: "2x", label: "Avg. Revenue Growth" },
    ],
    quote: "We don't just manage careers — we architect them. Every move is calculated for long-term impact.",
  },
  "strategic-placements": {
    title: "strategic<br />Placements",
    category: "Network",
    image: "/photos/dude-mit-award.png",
    image2: "/photos/kai-grammys.jpeg",
    subtitle: "High-impact sessions that define the charts.",
    description: "Curating and facilitating recording sessions between our roster and A-list artists, resulting in chart-topping records and lasting creative partnerships.",
    challenge: "Getting in the room with major artists requires more than talent — it requires trust, timing, and the right relationships. Cold outreach doesn't work at this level.",
    approach: "Leveraging our deep network of A&Rs, managers, and artists, we created a session pipeline that matched our producers with artists whose sound aligned perfectly. Every session was pre-curated for maximum creative chemistry.",
    results: ["30+ Sessions Facilitated", "Billboard Hot 100 Entries", "Grammy-Nominated Records", "Cross-Genre Collaborations"],
    stats: [
      { value: "30+", label: "Sessions / Year" },
      { value: "15", label: "Hot 100 Entries" },
      { value: "Grammy", label: "Nominated" },
      { value: "7", label: "Label Partners" },
    ],
    quote: "Every session is curated with intent. We don't leave placements to chance.",
  },
  "catalog-administration": {
    title: "Catalog<br />Administration",
    category: "Publishing",
    image: "/photos/urkunde.png",
    image2: "/photos/award.png",
    subtitle: "Protecting and monetizing creative assets globally.",
    description: "Full-service catalog management covering royalty collection, split negotiations, sync licensing, copyright protection, and strategic exploitation across all platforms and territories.",
    challenge: "Producers were losing significant revenue to unclaimed royalties, incorrect splits, and missed sync opportunities. Without dedicated administration, catalogs worth millions were underperforming.",
    approach: "We implemented rigorous catalog auditing, registered works across all major PROs and DSPs, negotiated retroactive corrections, and built a sync pipeline connecting our catalog with film, TV, and advertising opportunities.",
    results: ["70+ Certifications Managed", "Global Royalty Collection", "Sync Placements in Film/TV", "Revenue Recovery Program"],
    stats: [
      { value: "70+", label: "Certifications" },
      { value: "40%", label: "Revenue Increase" },
      { value: "12", label: "Sync Placements" },
      { value: "Global", label: "Collection" },
    ],
    quote: "Every stream, every sync, every credit — we make sure nothing falls through the cracks.",
  },
  "brand-partnerships": {
    title: "Brand<br />Partnerships",
    category: "Business Development",
    image: "/photos/kai-plaque.jpeg",
    image2: "/photos/dude.png",
    subtitle: "Amplifying reach through premium brand collaborations.",
    description: "Connecting our roster with premium brand opportunities — from endorsement deals and creative collaborations to content partnerships that amplify reach beyond music.",
    challenge: "Artists and producers were leaving money on the table by not leveraging their cultural influence beyond streaming. Brand deals were reactive, not strategic.",
    approach: "We proactively identified brand alignment opportunities, crafted pitch decks, and negotiated deals that respected artistic integrity while maximizing commercial value. Each partnership was designed to strengthen both the artist's brand and the partner's cultural credibility.",
    results: ["Select Brand Partners", "Multi-Platform Campaigns", "Content Collaborations", "Endorsement Revenue Stream"],
    stats: [
      { value: "6", label: "Brand Partners" },
      { value: "3x", label: "Revenue Diversification" },
      { value: "Multi", label: "Platform Reach" },
      { value: "100%", label: "Artist Approval" },
    ],
    quote: "We only partner with brands that elevate the artist. Never the other way around.",
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = PROJECT_DATA[slug] || PROJECT_DATA["global-shaping"];

  return (
    <div className="min-h-screen bg-[#013DA6] text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <SubpageHero
          label={project.category}
          title={project.title}
          subtitle={project.subtitle}
        />

        {/* Back Link */}
        <div className="bg-white px-6">
          <div className="max-w-7xl mx-auto py-8">
            <Reveal>
              <Link
                href="/projects"
                className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#013DA6]/40 hover:text-[#013DA6] transition-colors inline-block border-b border-[#013DA6]/10 pb-1"
              >
                &larr; Back to Projects
              </Link>
            </Reveal>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            HERO IMAGE — Full Width
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="px-6 bg-white relative z-10">
          <Reveal animation="scale" className="max-w-7xl mx-auto">
            <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-[#013DA6]/10">
              <Image
                src={project.image}
                alt={project.title.replace("<br />", " ")}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#013DA6]/30 via-transparent to-transparent" />
            </div>
          </Reveal>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            OVERVIEW — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="label mb-6 !text-[#013DA6]/40">Overview</p>
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#013DA6]/70 italic">
                  {project.description}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-6">
                {project.stats.map((stat, i) => (
                  <Reveal key={stat.label} delay={i * 0.08}>
                    <div className="py-8 px-6 border border-[#013DA6]/10 rounded-[1.5rem] text-center hover:bg-[#013DA6]/[0.02] transition-colors">
                      <div className="font-sans font-black text-3xl md:text-4xl text-[#013DA6] tracking-tight mb-2">{stat.value}</div>
                      <div className="text-[10px] font-bold text-[#013DA6]/30 uppercase tracking-[0.2em]">{stat.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SCROLL QUOTE — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <StickySection scrollHeight="200vh">
          {(progress) => {
            const words = (project.quote || "").split(" ");
            return (
              <div className="w-full h-full flex items-center justify-center px-6 bg-[#013DA6]">
                <div className="max-w-4xl text-center">
                  <div
                    className="w-px bg-white/20 mx-auto mb-12 origin-top"
                    style={{ height: 60, transform: `scaleY(${Math.min(1, progress * 3)})`, opacity: Math.min(1, progress * 3) }}
                  />
                  <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed italic text-white/90">
                    {words.map((w, i) => {
                      const s = (i / words.length) * 0.6;
                      const e = s + 0.25;
                      const o = progress < s ? 0.08 : progress > e ? 1 : 0.08 + ((progress - s) / (e - s)) * 0.92;
                      return (
                        <span key={i} className="inline-block mr-[0.25em]" style={{ opacity: o, transition: "opacity 0.1s" }}>
                          {w}
                        </span>
                      );
                    })}
                  </p>
                  <div
                    className="label mt-12"
                    style={{ opacity: progress > 0.7 ? (progress - 0.7) * 3.3 : 0 }}
                  >
                    Glass Bison
                  </div>
                </div>
              </div>
            );
          }}
        </StickySection>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CHALLENGE + APPROACH — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 md:mb-32">
              <div>
                <Reveal>
                  <p className="label mb-6 !text-[#013DA6]/40">The Challenge</p>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-[#013DA6]/60">
                    {project.challenge}
                  </p>
                </Reveal>
              </div>
              <div>
                <Reveal delay={0.1}>
                  <p className="label mb-6 !text-[#013DA6]/40">Our Approach</p>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-[#013DA6]/60">
                    {project.approach}
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Second Image */}
            {project.image2 && (
              <Reveal animation="scale">
                <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden shadow-xl border border-[#013DA6]/10">
                  <Image
                    src={project.image2}
                    alt="Project Detail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#013DA6]/20 via-transparent to-transparent" />
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            RESULTS — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-[#013DA6] text-white">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-16 md:mb-24">
              <p className="label mb-6 text-white/40">Key Results</p>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                The Impact.
              </h2>
            </Reveal>

            <div className="border-t border-white/10">
              {project.results.map((res, i) => (
                <Reveal key={res} delay={i * 0.06}>
                  <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-white/10 items-baseline hover:bg-white/[0.03] transition-colors duration-300 px-4 -mx-4 rounded-xl cursor-default">
                    <div className="md:col-span-1">
                      <span className="font-sans font-black text-2xl md:text-4xl text-white/10 group-hover:text-white/25 transition-colors duration-300 tracking-[0.04em]">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="md:col-span-11">
                      <h3 className="font-sans font-bold text-xl md:text-2xl tracking-[0.02em] group-hover:translate-x-1 transition-transform duration-300">
                        {res}
                      </h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CONTACT — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-40 px-6 bg-white text-[#013DA6] relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <Reveal>
                <p className="label mb-6 !text-[#013DA6]/40">Next Steps</p>
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#013DA6] mb-8">
                  start Your<br />Project.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[#013DA6]/40 text-lg font-light leading-relaxed max-w-md">
                  Interested in a similar initiative? Let&apos;s discuss how we can build something impactful together.
                </p>
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
