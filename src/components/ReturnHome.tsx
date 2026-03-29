"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function ReturnHome() {
  return (
    <div className="bg-[#f0f2f8] px-6">
      <div className="max-w-7xl mx-auto py-8">
        <Reveal>
          <Link
            href="/"
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#011d5a]/40 hover:text-[#011d5a] transition-colors inline-block border-b border-[#011d5a]/10 pb-1"
          >
            &larr; Return to Home
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
