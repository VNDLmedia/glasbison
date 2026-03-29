"use client";

import React from "react";
import { Reveal } from "./Reveal";
import { BisonLogo } from "./BisonLogo";

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
    <section className="min-h-[90vh] flex flex-col justify-center px-6 relative overflow-hidden bg-[#013DA6] text-white">
      {/* Refined Background Logo - Smaller and better positioned */}
      <div className="absolute right-[-10%] bottom-[-10%] pointer-events-none opacity-[0.03]">
        <BisonLogo size={800} variant="white" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-32 pb-24">
        <Reveal>
          <p className="label mb-8 text-white/40 italic uppercase tracking-[0.5em]">{label}</p>
          
          <h1 className="font-display text-6xl md:text-[11rem] leading-[0.8] tracking-tighter mb-16">
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
            <div className="lg:col-span-8">
              <Reveal delay={0.2}>
                <p className="text-2xl md:text-5xl font-light leading-[1.1] text-white/80 italic">
                  {subtitle}
                </p>
              </Reveal>
            </div>
          )}
          {description && (
            <div className={`lg:col-span-4 ${!subtitle ? 'lg:col-start-9' : ''}`}>
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
