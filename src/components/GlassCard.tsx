"use client";

import React, { useRef, ReactNode, MouseEvent } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
    ref.current.style.setProperty("--active", "1");
  };

  const onLeave = () => {
    ref.current?.style.setProperty("--active", "0");
  };

  return (
    <div
      ref={ref}
      className={`liquid-glass ${hover ? "liquid-glass-hover" : ""} ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
