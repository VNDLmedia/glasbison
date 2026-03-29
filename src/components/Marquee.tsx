"use client";

import React, { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export function Marquee({ children, speed = 40, reverse = false, className = "" }: MarqueeProps) {
  const animationName = reverse ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className={`overflow-hidden relative flex w-full ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#013DA6] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#013DA6] to-transparent z-10 pointer-events-none" />
      
      <div 
        className={`flex whitespace-nowrap will-change-transform ${animationName}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
