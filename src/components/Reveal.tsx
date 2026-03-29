"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  animation?: "slide" | "scale" | "fade";
  distance?: number;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export function Reveal({
  children,
  direction = "up",
  animation = "slide",
  distance = 60,
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  className = "",
}: RevealProps) {
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
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getInitialStyle = () => {
    let transform = "";
    
    if (animation === "slide") {
      switch (direction) {
        case "up":
          transform = `translateY(${distance}px)`;
          break;
        case "down":
          transform = `translateY(-${distance}px)`;
          break;
        case "left":
          transform = `translateX(${distance}px)`;
          break;
        case "right":
          transform = `translateX(-${distance}px)`;
          break;
        case "none":
        default:
          transform = "none";
          break;
      }
    } else if (animation === "scale") {
      transform = "scale(0.92)";
    }

    return {
      opacity: 0,
      transform,
      willChange: "transform, opacity",
      transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    };
  };

  const getVisibleStyle = () => {
    let transform = "none";
    if (animation === "scale") {
      transform = "scale(1)";
    } else if (animation === "slide") {
      transform = "translate(0, 0)";
    }

    return {
      opacity: 1,
      transform,
      willChange: "transform, opacity",
      transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    };
  };

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? getVisibleStyle() : getInitialStyle()}
    >
      {children}
    </div>
  );
}
