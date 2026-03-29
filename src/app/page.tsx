"use client";

import React, { useRef, useEffect } from "react";
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
import { MediaNavbar } from "@/components/MediaNavbar";
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

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-[#013DA6] selection:bg-white/20 font-sans">
      <ConstellationCanvas />
      <Navbar />
      <MediaNavbar />

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
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#013DA6]" />
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
            <div className="w-full h-full flex items-center justify-center px-6">
              <div className="max-w-5xl text-center">
                <h2
                  className="font-display text-4xl md:text-7xl lg:text-9xl leading-[1.05] font-normal"
                  style={{
                    transform: `scale(${0.85 + progress * 0.15})`,
                    opacity: Math.min(1, progress * 2.5),
                    willChange: "transform, opacity",
                  }}
                >
                  Strength within<br />the music industry.
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
        <section className="py-24 md:py-48 px-6 bg-white text-[#013DA6] relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {ACHIEVEMENTS.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.12} animation="scale" className="h-full">
                <TiltCard>
                  <div className="p-8 md:p-12 text-center h-full flex flex-col justify-center border border-[#013DA6]/10 rounded-[2.5rem] hover:bg-[#013DA6]/5 transition-colors group min-h-[240px]">
                    <div className="font-display text-5xl md:text-7xl mb-4 font-normal group-hover:scale-110 transition-transform duration-500">
                      {a.value.includes("+") ? (
                        <CountUp target={parseInt(a.value)} suffix="+" duration={2} />
                      ) : (
                        a.value
                      )}
                    </div>
                    <div className="label !text-[#013DA6]/40 text-[10px] font-bold tracking-[0.2em]">{a.label}</div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            DISCOGRAPHY — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="discography" className="py-24 md:py-48 px-6 bg-[#013DA6] text-white relative z-10">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-24 md:mb-40 text-center lg:text-left">
              <p className="label mb-6 text-white/40">Discography</p>
              <h2 className="font-display text-5xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter font-normal">
                The Catalog of<br />Excellence.
              </h2>
            </Reveal>
            <VinylCarousel />
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ARTIST GALLERY — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="artists" className="py-24 md:py-48 px-6 bg-white text-[#013DA6] relative z-10">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-24 md:mb-40">
              <p className="label mb-6 !text-[#013DA6]/40">Artist Credits</p>
              <h2 className="font-display text-5xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter font-normal text-[#013DA6]">
                The Visionaries<br />Behind the Hits.
              </h2>
            </Reveal>
            <ArtistGallery />
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            TRACK RECORD — Blue on White
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="track-record" className="py-24 md:py-48 px-6 bg-white text-[#013DA6] relative overflow-hidden z-10">
          <div className="absolute right-0 top-24 pointer-events-none opacity-[0.05]">
            <BisonLogo size={800} variant="blue" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 md:mb-40 gap-8">
              <Reveal>
                <p className="label mb-6 !text-[#013DA6]/40">Proven Results</p>
                <h2 className="font-display text-5xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter font-normal text-[#013DA6]">
                  The Gold<br />Standard.
                </h2>
              </Reveal>
              <Reveal delay={0.2} className="max-w-md lg:text-right">
                <p className="text-[#013DA6]/40 text-xl font-light leading-relaxed">
                  A legacy built on precision and cultural impact. Over 70 certifications and counting, defining the sound of a generation.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-8">
                  <Reveal delay={0.1} animation="scale">
                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-[#013DA6]/10 group shadow-2xl bg-[#013DA6]/5">
                      <Image
                        src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop"
                        alt="Proven Result 1"
                        fill
                        className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#013DA6]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </Reveal>
                  <div className="hidden md:block p-10 border border-[#013DA6]/10 rounded-[2.5rem] bg-[#013DA6]/[0.02]">
                    <p className="text-[10px] text-[#013DA6]/30 uppercase tracking-[0.3em] mb-6 font-bold">Industry Recognition</p>
                    <p className="text-[#013DA6]/40 font-light text-lg italic leading-relaxed">
                      "Excellence is not an act, but a habit. We strive for the habit of winning for our artists."
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8 md:pt-32">
                  <Reveal delay={0.3} animation="scale">
                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-[#013DA6]/10 group shadow-2xl bg-[#013DA6]/5">
                      <Image
                        src="https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=1000&auto=format&fit=crop"
                        alt="Proven Result 2"
                        fill
                        className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#013DA6]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="space-y-0 text-[#013DA6]">
                  {CERTIFICATIONS.map((c, i) => (
                    <Reveal key={c.title} delay={i * 0.1} direction="left">
                      <div className="group py-10 border-b border-[#013DA6]/10 flex items-center justify-between hover:px-4 transition-all duration-500">
                        <div>
                          <div className="flex items-center gap-4 mb-3">
                            <span className="text-[10px] text-[#013DA6]/40 font-black tracking-[0.2em] uppercase px-2 py-0.5 border border-[#013DA6]/20 rounded group-hover:bg-[#013DA6] group-hover:text-white transition-all">
                              {c.certification}
                            </span>
                            <span className="text-[10px] text-[#013DA6]/20 tracking-widest">{c.label}</span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#013DA6]">{c.artist}</h3>
                          <p className="text-sm text-[#013DA6]/40 mt-2 font-light italic">{c.title}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-display text-3xl md:text-5xl text-[#013DA6]/10 group-hover:text-[#013DA6]/30 transition-all duration-700 block leading-none mb-2">
                            {c.units.split(" ")[0]}
                          </span>
                          <span className="text-[10px] text-[#013DA6]/20 uppercase tracking-widest font-bold">Units</span>
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
        <section id="services" className="py-24 md:py-48 px-6 bg-[#013DA6] text-white relative z-10">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-24 md:mb-40">
              <p className="label mb-6 text-white/40">What We Do</p>
              <h2 className="font-display text-5xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter font-normal">
                Full-Service<br />Empowerment.
              </h2>
              <p className="text-white/30 text-xl font-light max-w-lg mt-12 leading-relaxed">
                From high-level strategy to studio precision — we guide visionaries to build lasting legacies in a fast-paced industry.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {SERVICES.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.08} className="h-full">
                  <TiltCard>
                    <div className="p-10 md:p-14 relative overflow-hidden group border border-white/10 rounded-[3rem] bg-white/5 hover:bg-white/10 transition-colors h-full min-h-[320px]">
                      <span className="absolute -bottom-10 -right-4 font-display text-[10rem] text-white/[0.03] pointer-events-none select-none group-hover:text-white/[0.06] transition-colors duration-700">
                        {s.slug}
                      </span>
                      <span className="label text-white/30 block mb-8 text-xs">{s.slug}</span>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">{s.title}</h3>
                      <p className="text-lg text-white/40 font-light leading-relaxed">{s.desc}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            NETWORK — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="network" className="py-24 md:py-48 px-6 bg-[#013DA6] text-white relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 md:mb-40 gap-8">
              <Reveal>
                <p className="label mb-6 text-white/40">Global Network</p>
                <h2 className="font-display text-5xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter font-normal">
                  Strategic<br />Partnerships.
                </h2>
              </Reveal>
              <Reveal delay={0.2} className="max-w-md lg:text-right">
                <p className="text-white/30 text-xl font-light leading-relaxed">
                  Our influence spans across every major player in the music and entertainment landscape. A network built on trust and results.
                </p>
              </Reveal>
            </div>
            
            <NetworkGrid />
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            LABELS & COLLABS — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 bg-[#013DA6] overflow-hidden relative z-10">
          <p className="label text-center mb-12 text-white/20 italic">Label &amp; Publisher Relationships</p>
          <Marquee speed={40}>
            <div className="flex gap-24 px-12 italic">
              {LABELS.map((l) => (
                <span key={l} className="text-sm md:text-base font-bold text-white/10 uppercase tracking-[0.4em] whitespace-nowrap">{l}</span>
              ))}
            </div>
          </Marquee>
          
          <div className="h-12" />
          
          <p className="label text-center mb-12 text-white/20 italic">Selected Artist Collaborations</p>
          <Marquee speed={50} reverse>
            <div className="flex gap-24 px-12">
              {ARTIST_CREDITS.map((a) => (
                <span key={a} className="text-xl md:text-3xl font-display text-white/5 uppercase tracking-[0.2em] whitespace-nowrap">{a}</span>
              ))}
            </div>
          </Marquee>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ABOUT — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="about" className="py-24 md:py-48 px-6 bg-[#013DA6] relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">
            <div>
              <Reveal>
                <p className="label mb-8 text-white/40">About</p>
                <h2 className="font-display text-5xl md:text-8xl lg:text-9xl leading-[0.95] mb-12 font-normal">
                  Strength Meets<br />Transparency.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-white/30 text-xl font-light leading-relaxed mb-8">
                  Glass Bison stands for strength within the music industry. The bison represents resilience, drive, and the ability to move with force through a competitive, fast-paced environment.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-white/30 text-xl font-light leading-relaxed mb-12">
                  The glass reflects clarity and protection — recognizing that great music and creative vision are valuable and worth safeguarding.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex items-center gap-4">
                  <BisonLogo size={24} variant="white" className="opacity-30" />
                  <span className="label !text-white/20 font-bold">Music and Entertainment</span>
                </div>
              </Reveal>
            </div>

            <div className="space-y-6">
              {[
                { n: "I", t: "Resilience", d: "We navigate challenges with unyielding determination, protecting our clients' interests at every turn." },
                { n: "II", t: "Transparency", d: "Clear communication, honest feedback, and open books. You always know where you stand." },
                { n: "III", t: "Vision", d: "We don't chase the next hit. We build sustainable, long-term careers with real cultural impact." },
              ].map((p, i) => (
                <Reveal key={p.n} delay={i * 0.1} direction="left">
                  <div className="p-10 border border-white/10 rounded-[2.5rem] bg-white/5 hover:bg-white/10 transition-colors group">
                    <div className="flex gap-8">
                      <span className="font-display text-4xl text-white/10 shrink-0 w-12 font-normal group-hover:text-white/30 transition-colors">{p.n}</span>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{p.t}</h3>
                        <p className="text-base text-white/30 font-light leading-relaxed">{p.d}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            QUOTE — word by word — White on Blue
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <StickySection scrollHeight="280vh">
          {(progress) => {
            const words = "We don't build hype. We build careers.".split(" ");
            return (
              <div className="w-full h-full flex items-center justify-center px-6 bg-[#013DA6]">
                <div className="max-w-5xl text-center">
                  <div
                    className="w-px bg-white/20 mx-auto mb-16 origin-top"
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
        <section id="contact" className="py-24 md:py-48 px-6 bg-white text-[#013DA6] relative overflow-hidden z-10">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#013DA6]/[0.02] blur-[150px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="label mb-8 !text-[#013DA6]/40">Contact</p>
                <h2 className="font-display text-5xl md:text-8xl lg:text-9xl leading-[0.92] mb-10 font-normal text-[#013DA6]">
                  Let&apos;s Build<br />Something Great.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[#013DA6]/40 text-xl font-light leading-relaxed max-w-lg mb-12">
                  Whether you&apos;re a producer looking for management, an artist seeking placements, or a label exploring partnerships.
                </p>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="space-y-0 max-w-md">
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-6 py-8 border-b border-[#013DA6]/10 group">
                    <span className="text-lg md:text-2xl text-[#013DA6]/40 group-hover:text-[#013DA6] transition-colors font-light italic">{CONTACT.email}</span>
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
                        className="text-sm font-bold uppercase tracking-widest text-[#013DA6]/30 hover:text-[#013DA6] transition-colors"
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
