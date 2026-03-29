"use client";

import React, { createContext, useContext, useState, useEffect, useRef, useCallback, ReactNode } from "react";

export interface Record {
  id: number;
  title: string;
  artist: string;
  genre: string;
  color: string;
  coverUrl: string;
  spotifyId?: string;
}

export const RECORDS: Record[] = [
  {
    id: 1,
    title: "Montero",
    artist: "Lil Nas X",
    genre: "Pop / Hip-Hop",
    color: "#e11d48",
    coverUrl: "/Covers/Lil Nas X Montero.jpg",
  },
  {
    id: 2,
    title: "Drip Too Hard",
    artist: "Gunna",
    genre: "Hip-Hop / Melodic",
    color: "#2563eb",
    coverUrl: "/Covers/Gunna Drip too Hard.jpg",
  },
  {
    id: 3,
    title: "Culture",
    artist: "Migos",
    genre: "Hip-Hop / Trap",
    color: "#f97316",
    coverUrl: "/Covers/Migos Culture.jpg",
  },
  {
    id: 4,
    title: "Pink Friday",
    artist: "Nicki Minaj",
    genre: "Hip-Hop / Pop",
    color: "#d946ef",
    coverUrl: "/Covers/Nicki Minaj Pink Friday.jpg",
  },
  {
    id: 5,
    title: "777",
    artist: "Latto",
    genre: "Hip-Hop",
    color: "#059669",
    coverUrl: "/Covers/Latto 777.jpg",
  },
  {
    id: 6,
    title: "Shiesty Season",
    artist: "Pooh Shiesty",
    genre: "Hip-Hop / Trap",
    color: "#4f46e5",
    coverUrl: "/Covers/Pooh Shiesty Certified.jpg",
  },
  {
    id: 7,
    title: "Right Hand",
    artist: "T-Pain",
    genre: "R&B / Hip-Hop",
    color: "#0891b2",
    coverUrl: "/Covers/T Pain Right Hand.jpg",
  },
  {
    id: 8,
    title: "Lil Boat",
    artist: "Lil Yachty",
    genre: "Hip-Hop / Experimental",
    color: "#dc2626",
    coverUrl: "/Covers/Lil Yachty Lil Boat.jpg",
  },
];

interface MediaContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  currentRecord: Record;
  nextRecord: () => void;
  prevRecord: () => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export function MediaProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentRecord = RECORDS[activeIndex];

  const nextRecord = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % RECORDS.length);
  }, []);

  const prevRecord = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + RECORDS.length) % RECORDS.length);
  }, []);

  // Always play Old Town Road
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/Lil Nas X - Old Town Road (Official Video) ft. Billy Ray Cyrus.mp3");
      audioRef.current.loop = true;
    }
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <MediaContext.Provider value={{ isPlaying, setIsPlaying, activeIndex, setActiveIndex, currentRecord, nextRecord, prevRecord }}>
      {children}
    </MediaContext.Provider>
  );
}

export function useMedia() {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error("useMedia must be used within a MediaProvider");
  }
  return context;
}
