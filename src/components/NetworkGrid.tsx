"use client";

import React from "react";
import { Reveal } from "./Reveal";

const MAJORS = [
  { name: "Universal Music Group", logo: "/Labels/Universal_Music_Group_logo.svg", url: "https://www.universalmusic.com" },
  { name: "Sony Music", logo: "/Labels/Sony_Music_Entertainment_Logo_2023.svg", url: "https://www.sonymusic.com" },
  { name: "Warner Music Group", logo: "/Labels/Warner_Music_Group_logo_(2021).svg", url: "https://www.wmg.com" },
];

const LABELS = [
  { name: "Atlantic Records", logo: "/Labels/Atlantic_Records_fan_logo.svg", url: "https://www.atlanticrecords.com" },
  { name: "Republic Records", logo: "/Labels/Republic_Records_logo.svg", url: "https://www.republicrecords.com" },
  { name: "Columbia Records", logo: "/Labels/Columbia_Records_logo.svg", url: "https://www.columbiarecords.com" },
  { name: "RCA Records", logo: "/Labels/RCA_Records_logo.svg", url: "https://www.rcarecords.com" },
  { name: "Epic Records", logo: "/Labels/Epic-records-logo.svg", url: "https://www.epicrecords.com" },
  { name: "Capitol Records", logo: "/Labels/Capitol-Records-Logo.svg", url: "https://www.capitolrecords.com" },
  { name: "Interscope", logo: "/Labels/Interscope_Records.svg", url: "https://www.interscope.com" },
  { name: "Def Jam", logo: "/Labels/Def_Jam_Recordings.svg", url: "https://www.defjam.com" },
  { name: "300 Ent.", logo: "/Labels/Logo_for_300_Entertainment.svg", url: "https://www.300ent.com" },
];

interface NetworkGridProps {
  variant?: "white" | "blue";
}

export function NetworkGrid({ variant = "white" }: NetworkGridProps) {
  const isBlue = variant === "blue";
  const border = isBlue ? "border-[#013DA6]/10" : "border-white/10";
  const labelColor = isBlue ? "text-[#013DA6]/25" : "text-white/20";
  const hoverBg = isBlue ? "hover:bg-[#013DA6]/[0.03]" : "hover:bg-white/[0.03]";
  const logoFilter = isBlue ? "grayscale opacity-30 group-hover:opacity-60" : "grayscale brightness-0 invert opacity-30 group-hover:opacity-60";

  return (
    <div className="space-y-16">
      {/* Majors */}
      <div>
        <Reveal>
          <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-8 ${labelColor}`}>Major Labels</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MAJORS.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center py-10 md:py-14 border ${border} rounded-[1.5rem] ${hoverBg} transition-all duration-300 cursor-pointer block`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.logo}
                  alt={m.name}
                  className={`h-8 md:h-10 w-auto max-w-[160px] object-contain transition-all duration-500 ${logoFilter}`}
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Labels & Imprints */}
      <div>
        <Reveal>
          <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-8 ${labelColor}`}>Labels &amp; Imprints</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {LABELS.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.04}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center py-8 md:py-10 border ${border} rounded-[1.5rem] ${hoverBg} transition-all duration-300 cursor-pointer block`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={l.logo}
                  alt={l.name}
                  className={`h-6 md:h-8 w-auto max-w-[120px] object-contain transition-all duration-500 ${logoFilter}`}
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
