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

interface NetworkGridProps {
  variant?: "white" | "blue";
}

export function NetworkGrid({ variant = "white" }: NetworkGridProps) {
  const isBlue = variant === "blue";
  const border = isBlue ? "border-[#013DA6]/10" : "border-white/10";
  const labelColor = isBlue ? "text-[#013DA6]/25" : "text-white/20";
  const majorText = isBlue ? "text-[#013DA6]/70 group-hover:text-[#013DA6]" : "text-white/70 group-hover:text-white";
  const majorTag = isBlue ? "text-[#013DA6]/20 group-hover:text-[#013DA6]/40" : "text-white/15 group-hover:text-white/30";
  const labelText = isBlue ? "text-[#013DA6]/50 group-hover:text-[#013DA6]/80" : "text-white/50 group-hover:text-white/80";
  const hoverBg = isBlue ? "hover:bg-[#013DA6]/[0.03]" : "hover:bg-white/[0.03]";

  return (
    <div className="space-y-16">
      <div>
        <Reveal>
          <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-8 ${labelColor}`}>Major Labels</p>
        </Reveal>
        <div className={`border-t ${border}`}>
          {MAJORS.map((name, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <div className={`group flex items-center justify-between py-6 border-b ${border} ${hoverBg} transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-default`}>
                <h3 className={`font-sans font-bold text-lg md:text-xl tracking-[0.02em] ${majorText} transition-colors duration-300`}>
                  {name}
                </h3>
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${majorTag} transition-colors duration-300`}>
                  Major
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <Reveal>
          <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-8 ${labelColor}`}>Labels &amp; Imprints</p>
        </Reveal>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-x-8 border-t ${border}`}>
          {LABELS.map((name, i) => (
            <Reveal key={name} delay={i * 0.04}>
              <div className={`group py-5 border-b ${border} ${hoverBg} transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-default`}>
                <h3 className={`font-sans font-medium text-base tracking-[0.02em] ${labelText} transition-colors duration-300`}>
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
