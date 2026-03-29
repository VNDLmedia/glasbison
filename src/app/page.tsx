"use client";

import React, { useRef, useEffect, useState } from "react";
import { useMedia, RECORDS } from "@/context/MediaContext";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { StickySection } from "@/components/StickySection";
import { CountUp } from "@/components/CountUp";
import { Marquee } from "@/components/Marquee";
import { BisonLogo, BisonWordmark } from "@/components/BisonLogo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VinylCarousel } from "@/components/VinylCarousel";
import { ArtistGallery } from "@/components/ArtistGallery";
import { ContactForm } from "@/components/ContactForm";
import { NetworkGrid } from "@/components/NetworkGrid";
import {
  SERVICES,
  ACHIEVEMENTS,
  CERTIFICATIONS,
  LABELS,
  ARTIST_CREDITS,
} from "@/data/content";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";

function ConstellationCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const nodes = Array.from({ length: 30 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    let last = 0;
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 33) return; // ~30fps
      last = t;

      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.08)";
        ctx.fill();
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 160) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.035 * (1 - d / 160)})`;
            ctx.stroke();
          }
        }
      }
    };
    raf = requestAnimationFrame(draw);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />;
}

function HeroVideo({ progress }: { progress: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    video.currentTime = progress * video.duration;
  }, [progress]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style={{
        transform: `scale(${1 + progress * 0.1})`,
        willChange: "transform",
      }}
    >
      <source src="/glass-bison-hero.mp4" type="video/mp4" />
    </video>
  );
}

function DiscographySection() {
  const { activeIndex } = useMedia();
  const color = RECORDS[activeIndex]?.color || "#011d5a";
  return (
    <section id="discography" className="py-12 md:py-20 px-6 text-white relative z-10 overflow-hidden transition-colors duration-1000" style={{ backgroundColor: color }}>
      <div className="absolute inset-0 bg-[#011d5a]/85 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="mb-8 md:mb-14 text-center lg:text-left">
          <p className="label mb-3 text-white/40">Discography</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight font-normal">
            Discography.
          </h2>
        </Reveal>
        <VinylCarousel />
      </div>
    </section>
  );
}

export default function Home() {
  const { setIsPlaying } = useMedia();
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const statementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAutoPlayed) return;
    const el = statementRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoPlayed) {
          setIsPlaying(true);
          setHasAutoPlayed(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAutoPlayed, setIsPlaying]);

  return (
    <div className="min-h-screen text-white bg-[#011d5a] selection:bg-white/20 font-sans">
      <ConstellationCanvas />
      <Navbar />

      <main className="relative z-10">
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            HERO — Cinematic Scroll-Controlled Video
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <StickySection scrollHeight="200vh">
          {(progress) => (
            <section className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-black">
              {/* Scrubbing Video */}
              <div className="absolute inset-0 w-full h-full">
                <HeroVideo progress={progress} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#011d5a]" />
              </div>

              <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                style={{ opacity: 1 - progress * 4 }}
              >
                <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" />
                <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
              </div>
            </section>
          )}
        </StickySection>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STATEMENT — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <StickySection scrollHeight="220vh">
          {(progress) => (
            <div ref={statementRef} className="w-full h-full flex items-center justify-center px-6 relative">
              {/* Background Bison */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logo-white.svg"
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-auto pointer-events-none"
                style={{ opacity: Math.min(0.05, progress * 0.1), transition: "opacity 0.3s" }}
              />
              <div className="max-w-5xl text-center relative z-10">
                <h2
                  className="font-display text-4xl md:text-7xl lg:text-9xl leading-[1.05] font-normal"
                  style={{
                    transform: `scale(${0.85 + progress * 0.15})`,
                    opacity: Math.min(1, progress * 2.5),
                    willChange: "transform, opacity",
                  }}
                >
                  strength within<br />the music industry.
                </h2>
                <p
                  className="text-base md:text-lg text-white/40 max-w-xl mx-auto mt-12 font-light leading-relaxed"
                  style={{
                    opacity: Math.max(0, (progress - 0.4) * 2.5),
                    transform: `translateY(${Math.max(0, (1 - Math.max(0, (progress - 0.3)) * 3) * 30)}px)`,
                    willChange: "transform, opacity",
                  }}
                >
                  70+ gold, platinum, and diamond certifications. Grammy-nominated.
                  We turn creative vision into lasting careers.
                </p>
              </div>
            </div>
          )}
        </StickySection>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            NUMBERS — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 md:py-48 px-6 bg-[#f0f2f8] text-[#011d5a] relative z-10">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-16 md:mb-24">
              <p className="label mb-6 !text-[#011d5a]/40">Track Record</p>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#011d5a]">
                  The Numbers<br />speak.
                </h2>
                <p className="text-[#011d5a]/30 text-lg font-light max-w-md leading-relaxed lg:text-right">
                  A legacy defined by cultural impact, chart dominance, and relentless execution.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {ACHIEVEMENTS.map((a, i) => (
                <Reveal key={a.label} delay={i * 0.1} animation="scale" className="h-full">
                  <TiltCard>
                    <div className="p-8 md:p-10 text-center h-full flex flex-col justify-center bg-[#011d5a]/[0.03] border border-[#011d5a]/10 rounded-[2rem] hover:bg-[#e11d48] hover:text-white hover:border-[#e11d48] transition-all duration-500 group min-h-[200px]">
                      <div className="font-sans font-black text-4xl md:text-5xl mb-4 tracking-tight group-hover:scale-110 transition-transform duration-500">
                        {a.value.includes("+") ? (
                          <CountUp target={parseInt(a.value)} suffix="+" duration={2} />
                        ) : (
                          a.value
                        )}
                      </div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#011d5a]/40 group-hover:text-white/50 transition-colors duration-500">{a.label}</div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            DISCOGRAPHY — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <DiscographySection />


        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ARTIST GALLERY — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="artists" className="py-24 md:py-48 px-6 bg-[#f0f2f8] text-[#011d5a] relative z-10">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-24 md:mb-40">
              <p className="label mb-6 !text-[#011d5a]/40">Artist Credits</p>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight font-normal text-[#011d5a]">
                The Visionaries<br />Behind the Hits.
              </h2>
            </Reveal>
            <ArtistGallery />
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            TRACK RECORD — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="track-record" className="py-24 md:py-48 px-6 bg-[#f0f2f8] text-[#011d5a] relative z-10">
          <div className="absolute right-0 top-24 pointer-events-none opacity-[0.05]">
            <BisonLogo size={800} variant="blue" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 md:mb-40 gap-8">
              <Reveal>
                <p className="label mb-6 !text-[#011d5a]/40">Proven Results</p>
                <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight font-normal text-[#011d5a]">
                  The Gold<br />standard.
                </h2>
              </Reveal>
              <Reveal delay={0.2} className="max-w-md lg:text-right">
                <p className="text-[#011d5a]/40 text-xl font-light leading-relaxed">
                  A legacy built on precision and cultural impact. Over 70 certifications and counting, defining the sound of a generation.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-8">
                  <Reveal delay={0.1} animation="scale">
                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-[#011d5a]/10 group shadow-2xl bg-[#011d5a]/5">
                      <Image
                        src="/photos/dude-mit-award.png"
                        alt="Award Recognition"
                        fill
                        className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#011d5a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </Reveal>
                  <div className="hidden md:block p-10 border border-[#011d5a]/10 rounded-[2.5rem] bg-[#011d5a]/[0.02]">
                    <p className="text-[10px] text-[#011d5a]/30 uppercase tracking-[0.3em] mb-6 font-bold">Industry Recognition</p>
                    <p className="text-[#011d5a]/40 font-light text-lg italic leading-relaxed">
                      "Excellence is not an act, but a habit. We strive for the habit of winning for our artists."
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8 md:pt-32">
                  <Reveal delay={0.3} animation="scale">
                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-[#011d5a]/10 group shadow-2xl bg-[#011d5a]/5">
                      <Image
                        src="/photos/award.png"
                        alt="Industry Award"
                        fill
                        className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#011d5a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="space-y-0 text-[#011d5a]">
                  {CERTIFICATIONS.map((c, i) => (
                    <Reveal key={c.title} delay={i * 0.1} direction="left">
                      <div className="group py-10 border-b border-[#011d5a]/10 flex items-center justify-between hover:px-4 transition-all duration-500">
                        <div>
                          <div className="flex items-center gap-4 mb-3">
                            <span className="text-[10px] text-[#011d5a]/40 font-black tracking-[0.2em] uppercase px-2 py-0.5 border border-[#011d5a]/20 rounded group-hover:bg-[#011d5a] group-hover:text-white transition-all">
                              {c.certification}
                            </span>
                            <span className="text-[10px] text-[#011d5a]/20 tracking-widest">{c.label}</span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#011d5a]">{c.artist}</h3>
                          <p className="text-sm text-[#011d5a]/40 mt-2 font-light italic">{c.title}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-sans font-black text-2xl md:text-4xl text-[#011d5a]/10 group-hover:text-[#011d5a]/30 transition-all duration-700 block leading-none mb-2">
                            {c.units.split(" ")[0]}
                          </span>
                          <span className="text-[10px] text-[#011d5a]/20 uppercase tracking-widest font-bold">Units</span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SERVICES — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="services" className="py-24 md:py-40 px-6 bg-[#011d5a] text-white relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <Reveal className="mb-20 md:mb-28">
              <p className="label mb-6 text-white/40">What We Do</p>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                  Our<br />services.
                </h2>
                <p className="text-white/30 text-lg font-light max-w-md leading-relaxed lg:text-right">
                  From high-level strategy to studio precision — we guide visionaries to build lasting legacies in a fast-paced industry.
                </p>
              </div>
            </Reveal>

            {/* Service Rows */}
            <div className="border-t border-white/10">
              {SERVICES.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.06}>
                  <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-white/10 items-baseline hover:bg-[#e11d48]/[0.06] hover:border-[#e11d48]/20 transition-all duration-500 px-4 -mx-4 rounded-xl cursor-default">
                    <div className="md:col-span-1">
                      <span className="font-sans font-black text-2xl md:text-4xl text-white/10 group-hover:text-[#e11d48]/40 transition-colors duration-500 tracking-[0.04em]">
                        {s.slug}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="font-sans font-bold text-lg md:text-xl tracking-[0.02em] group-hover:translate-x-1 transition-all duration-500">
                        {s.title}
                      </h3>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-white/35 font-light text-base md:text-lg leading-relaxed group-hover:text-white/50 transition-colors duration-500">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            NETWORK — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="network" className="py-24 md:py-40 px-6 bg-[#f0f2f8] text-[#011d5a] relative z-10">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-20 md:mb-28">
              <p className="label mb-6 !text-[#011d5a]/40">Global Network</p>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#011d5a]">
                  strategic<br />Partnerships.
                </h2>
                <p className="text-[#011d5a]/30 text-lg font-light max-w-md leading-relaxed lg:text-right">
                  Our influence spans across every major player in the music and entertainment landscape. A network built on trust and results.
                </p>
              </div>
            </Reveal>

            <NetworkGrid variant="blue" />
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            LABELS & COLLABS — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-16 md:py-24 bg-[#011d5a] relative z-10">
          <Marquee speed={40}>
            <div className="flex gap-20 px-10">
              {LABELS.map((l) => (
                <span key={l} className="text-xs md:text-sm font-bold text-white/10 uppercase tracking-[0.4em] whitespace-nowrap">{l}</span>
              ))}
            </div>
          </Marquee>
          <div className="h-6" />
          <Marquee speed={50} reverse>
            <div className="flex gap-16 px-10">
              {ARTIST_CREDITS.map((a) => (
                <span key={a} className="text-base md:text-lg font-sans font-bold text-white/[0.06] uppercase tracking-[0.15em] whitespace-nowrap">{a}</span>
              ))}
            </div>
          </Marquee>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ABOUT — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="about" className="py-24 md:py-40 px-6 bg-[#011d5a] relative z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-white.svg"
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-auto pointer-events-none opacity-[0.05]"
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <Reveal className="mb-20 md:mb-28">
              <p className="label mb-6 text-white/40">About</p>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                  strength Meets<br />Transparency.
                </h2>
                <div className="max-w-md lg:text-right">
                  <p className="text-white/30 text-lg font-light leading-relaxed">
                    The bison represents resilience and force. The glass reflects clarity and protection — great music deserves safeguarding.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="border-t border-white/10">
              {[
                { n: "01", t: "Resilience", d: "We navigate challenges with unyielding determination, protecting our clients' interests at every turn." },
                { n: "02", t: "Transparency", d: "Clear communication, honest feedback, and open books. You always know where you stand." },
                { n: "03", t: "Vision", d: "We don't chase the next hit. We build sustainable, long-term careers with real cultural impact." },
              ].map((p, i) => (
                <Reveal key={p.n} delay={i * 0.06}>
                  <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-white/10 items-baseline hover:bg-[#e11d48]/[0.06] hover:border-[#e11d48]/20 transition-all duration-500 px-4 -mx-4 rounded-xl cursor-default">
                    <div className="md:col-span-1">
                      <span className="font-sans font-black text-2xl md:text-4xl text-white/10 group-hover:text-[#e11d48]/40 transition-colors duration-500 tracking-[0.04em]">
                        {p.n}
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="font-sans font-bold text-lg md:text-xl tracking-[0.02em] group-hover:translate-x-1 transition-all duration-500">
                        {p.t}
                      </h3>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-white/35 font-light text-base md:text-lg leading-relaxed group-hover:text-white/50 transition-colors duration-500">
                        {p.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3} className="mt-12">
              <div className="flex items-center gap-4">
                <BisonLogo size={20} variant="white" className="opacity-25" />
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.25em]">Music and Entertainment</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            QUOTE — word by word — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <StickySection scrollHeight="280vh">
          {(progress) => {
            const words = "We don't build hype. We build careers.".split(" ");
            return (
              <div className="w-full h-full flex items-center justify-center px-6 bg-[#011d5a] relative overflow-hidden">
                {/* Star Grid Background — scroll-coupled */}
                <div className="absolute inset-0 pointer-events-none flex justify-around px-[10%]" style={{ opacity: Math.min(0.08, progress * 0.16) }}>
                  {[1, -1, 1, -1].map((direction, col) => {
                    const speed = 150 + col * 50;
                    return (
                      <div
                        key={col}
                        className="flex flex-col gap-20 text-white/20 text-5xl md:text-6xl will-change-transform"
                        style={{ transform: `translate3d(0,${progress * speed * direction}px,0)` }}
                      >
                        {Array.from({ length: 10 }).map((_, row) => (
                          <span key={row} className="block text-center select-none">★</span>
                        ))}
                      </div>
                    );
                  })}
                </div>

                <div className="max-w-5xl text-center relative z-10">
                  <div
                    className="w-px bg-[#e11d48]/40 mx-auto mb-16 origin-top"
                    style={{
                      height: 80,
                      transform: `scaleY(${Math.min(1, progress * 3)})`,
                      opacity: Math.min(1, progress * 3),
                    }}
                  />
                  <h2 className="font-display text-3xl md:text-6xl lg:text-8xl leading-[1.15] font-normal">
                    {words.map((w, i) => {
                      const s = (i / words.length) * 0.7;
                      const e = ((i + 1) / words.length) * 0.7 + 0.15;
                      const o = progress < s ? 0.06 : progress > e ? 1 : 0.06 + ((progress - s) / (e - s)) * 0.94;
                      return (
                        <span key={i} className="inline-block mr-[0.3em]" style={{ opacity: o, transition: "opacity 0.15s" }}>
                          {w}
                        </span>
                      );
                    })}
                  </h2>
                  <div
                    className="label mt-20 font-bold"
                    style={{
                      opacity: progress > 0.75 ? (progress - 0.75) * 4 : 0,
                      transform: `translateY(${Math.max(0, 10 - (progress > 0.75 ? (progress - 0.75) * 40 : 0))}px)`,
                    }}
                  >
                    Music and Entertainment
                  </div>
                </div>
              </div>
            );
          }}
        </StickySection>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CONTACT — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="contact" className="py-24 md:py-48 px-6 bg-[#f0f2f8] text-[#011d5a] relative z-10">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#011d5a]/[0.02] blur-[150px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="label mb-8 !text-[#011d5a]/40">Contact</p>
                <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-10 font-normal text-[#011d5a]">
                  Let&apos;s Build<br />something Great.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[#011d5a]/40 text-xl font-light leading-relaxed max-w-lg mb-12">
                  Whether you&apos;re a producer looking for management, an artist seeking placements, or a label exploring partnerships.
                </p>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="space-y-0 max-w-md">
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-6 py-8 border-b border-[#011d5a]/10 group">
                    <span className="text-lg md:text-2xl text-[#011d5a]/40 group-hover:text-[#011d5a] transition-colors font-light italic">{CONTACT.email}</span>
                  </a>
                  <div className="flex gap-8 pt-10">
                    {[
                      { href: SOCIAL_LINKS.instagram, label: "Instagram" },
                      { href: SOCIAL_LINKS.tiktok, label: "TikTok" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold uppercase tracking-widest text-[#011d5a]/30 hover:text-[#011d5a] transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.3}>
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
