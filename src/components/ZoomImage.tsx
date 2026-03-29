"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ZoomImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export function ZoomImage({ src, alt, priority = false, className = "" }: ZoomImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <div 
        className="w-full h-full relative"
        style={{
          transform: isVisible ? "scale(1)" : "scale(1.15)",
          opacity: isVisible ? 1 : 0.7,
          transition: "transform 5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s ease",
          willChange: "transform, opacity"
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill={true}
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      </div>
    </div>
  );
}
