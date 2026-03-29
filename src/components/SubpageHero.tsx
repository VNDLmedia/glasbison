"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { BisonLogo } from "./BisonLogo";

interface SubpageHeroProps {
  label: string;
  title: string;
  description?: string;
  subtitle?: string;
  showReturn?: boolean;
}

export function SubpageHero({ 
  label, 
  title, 
  description, 
  subtitle,
  showReturn = true 
}: SubpageHeroProps) {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center px-6 relative overflow-hidden bg-[#013DA6] text-white">
      {/* Massive Background Logo for Consistency */}
      <div className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 pointer-events-none opacity-[0.03]">
        <BisonLogo size={1000} variant="white" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-48 pb-12">
        <Reveal>
          {showReturn && (
            <Link
              href="/"
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors mb-16 inline-block border-b border-white/10 pb-1"
            >
              &larr; Return to Home
            </Link>
          )}
          
          <p className="label mb-8 text-white/40 italic uppercase tracking-[0.5em]">{label}</p>
          
          <h1 className="font-display text-7xl md:text-[14rem] leading-[0.75] tracking-tighter mb-16">
            {title.split("<br />").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split("<br />").length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-end">
          {subtitle && (
            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <p className="text-2xl md:text-5xl font-light leading-[1.1] text-white/80 italic">
                  {subtitle}
                </p>
              </Reveal>
            </div>
          )}
          {description && (
            <div className={`lg:col-span-5 ${!subtitle ? 'lg:col-start-8' : ''}`}>
              <Reveal delay={0.3}>
                <p className="text-lg text-white/30 font-light leading-relaxed max-w-sm italic">
                  {description}
                </p>
              </Reveal>
            </div>
          )}
        </div>
      </div>

      {/* Standardized Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
