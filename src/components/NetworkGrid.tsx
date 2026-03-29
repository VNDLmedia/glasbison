"use client";

import React from "react";
import { Reveal } from "./Reveal";

const PARTNERS = [
  { name: "Universal Music Group", type: "Major Label" },
  { name: "Sony Music", type: "Major Label" },
  { name: "Warner Music Group", type: "Major Label" },
  { name: "Atlantic Records", type: "Label" },
  { name: "Republic Records", type: "Label" },
  { name: "Columbia Records", type: "Label" },
  { name: "RCA Records", type: "Label" },
  { name: "Epic Records", type: "Label" },
  { name: "Capitol Records", type: "Label" },
  { name: "Interscope", type: "Label" },
  { name: "Def Jam", type: "Label" },
  { name: "300 Ent.", type: "Label" },
];

export function NetworkGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden">
      {PARTNERS.map((partner, i) => (
        <Reveal key={partner.name} delay={i * 0.05} animation="fade">
          <div className="bg-[#013DA6] p-8 md:p-12 h-full flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] mb-4 font-bold group-hover:text-white/40 transition-colors">
              {partner.type}
            </span>
            <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors leading-tight">
              {partner.name}
            </h3>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
