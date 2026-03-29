"use client";

import React from "react";
import { Reveal } from "./Reveal";
import { BisonWordmarkFull } from "./BisonLogo";

interface SubpageHeroProps {
  label: string;
  title: string;
  description?: string;
  subtitle?: string;
}

export function SubpageHero({
  label,
  title,
  description,
  subtitle
}: SubpageHeroProps) {
  return (
    <section className="min-h-[90vh] flex flex-col justify-end px-6 relative overflow-hidden bg-[#013DA6] text-white">
      {/* Bison Wordmark Watermark */}
      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.05]">
        <BisonWordmarkFull height={180} className="block md:hidden" />
        <BisonWordmarkFull height={320} className="hidden md:block lg:hidden" />
        <BisonWordmarkFull height={420} className="hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 pt-48 pb-20 md:pb-28">
        <Reveal>
          <p className="label mb-10 text-white/40 italic uppercase tracking-[0.5em]">{label}</p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-tight mb-12">
            {title.split("<br />").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split("<br />").length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-end">
          {subtitle && (
            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <p className="text-xl md:text-3xl lg:text-4xl font-light leading-[1.2] text-white/70 italic">
                  {subtitle}
                </p>
              </Reveal>
            </div>
          )}
          {description && (
            <div className={`lg:col-span-4 ${!subtitle ? 'lg:col-start-9' : 'lg:col-start-9'}`}>
              <Reveal delay={0.3}>
                <p className="text-base md:text-lg text-white/30 font-light leading-relaxed max-w-sm italic">
                  {description}
                </p>
              </Reveal>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
