"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface StickySectionProps {
  children: (progress: number) => ReactNode;
  scrollHeight?: string;
  className?: string;
}

export function StickySection({ 
  children, 
  scrollHeight = "200vh", 
  className = "" 
}: StickySectionProps) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const containerHeight = rect.height;
      const totalScroll = containerHeight - viewportHeight;
      
      if (totalScroll <= 0) {
        setProgress(0);
        return;
      }

      const scrolled = Math.max(0, -rect.top);
      const newProgress = Math.min(1, Math.max(0, scrolled / totalScroll));
      
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: scrollHeight }} className={`relative ${className}`}>
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {children(progress)}
      </div>
    </div>
  );
}
