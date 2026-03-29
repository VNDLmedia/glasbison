"use client";

import React from "react";
import { Reveal } from "./Reveal";

const MAJORS = [
  "Universal Music Group",
  "Sony Music",
  "Warner Music Group",
];

const LABELS = [
  "Atlantic Records",
  "Republic Records",
  "Columbia Records",
  "RCA Records",
  "Epic Records",
  "Capitol Records",
  "Interscope",
  "Def Jam",
  "300 Ent.",
];

export function NetworkGrid() {
  return (
    <div className="space-y-16">
      {/* Major Labels */}
      <div>
        <Reveal>
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-8">Major Labels</p>
        </Reveal>
        <div className="border-t border-white/10">
          {MAJORS.map((name, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <div className="group flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-default">
                <h3 className="font-sans font-bold text-lg md:text-xl tracking-[0.02em] text-white/70 group-hover:text-white transition-colors duration-300">
                  {name}
                </h3>
                <span className="text-[10px] font-bold text-white/15 uppercase tracking-[0.2em] group-hover:text-white/30 transition-colors duration-300">
                  Major
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Labels */}
      <div>
        <Reveal>
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-8">Labels &amp; Imprints</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 border-t border-white/10">
          {LABELS.map((name, i) => (
            <Reveal key={name} delay={i * 0.04}>
              <div className="group py-5 border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-default">
                <h3 className="font-sans font-medium text-base tracking-[0.02em] text-white/50 group-hover:text-white/80 transition-colors duration-300">
                  {name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
