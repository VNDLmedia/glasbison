"use client";

import React, { createContext, useContext, useState, useEffect, useRef, useCallback, ReactNode } from "react";

export interface Record {
  id: number;
  title: string;
  artist: string;
  genre: string;
  color: string;
  coverUrl: string;
  year: number;
  certification: string;
  label: string;
  role: string;
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
    year: 2021,
    certification: "2x Platinum",
    label: "Columbia Records",
    role: "Production",
  },
  {
    id: 2,
    title: "Drip Too Hard",
    artist: "Gunna",
    genre: "Hip-Hop / Melodic",
    color: "#2563eb",
    coverUrl: "/Covers/Gunna Drip too Hard.jpg",
    year: 2018,
    certification: "Diamond",
    label: "Young Stoner Life / 300",
    role: "Production",
  },
  {
    id: 3,
    title: "Culture",
    artist: "Migos",
    genre: "Hip-Hop / Trap",
    color: "#f97316",
    coverUrl: "/Covers/Migos Culture.jpg",
    year: 2017,
    certification: "3x Platinum",
    label: "Quality Control / Capitol",
    role: "Production",
  },
  {
    id: 4,
    title: "Pink Friday",
    artist: "Nicki Minaj",
    genre: "Hip-Hop / Pop",
    color: "#d946ef",
    coverUrl: "/Covers/Nicki Minaj Pink Friday.jpg",
    year: 2010,
    certification: "3x Platinum",
    label: "Cash Money / Universal",
    role: "songwriting",
  },
  {
    id: 5,
    title: "777",
    artist: "Latto",
    genre: "Hip-Hop",
    color: "#059669",
    coverUrl: "/Covers/Latto 777.jpg",
    year: 2022,
    certification: "Gold",
    label: "streamcut / RCA",
    role: "Production",
  },
  {
    id: 6,
    title: "shiesty season",
    artist: "Pooh Shiesty",
    genre: "Hip-Hop / Trap",
    color: "#4f46e5",
    coverUrl: "/Covers/Pooh Shiesty Certified.jpg",
    year: 2021,
    certification: "2x Platinum",
    label: "1017 Global / Atlantic",
    role: "Production",
  },
  {
    id: 7,
    title: "Right Hand",
    artist: "T-Pain",
    genre: "R&B / Hip-Hop",
    color: "#0891b2",
    coverUrl: "/Covers/T Pain Right Hand.jpg",
    year: 2015,
    certification: "Gold",
    label: "Nappy Boy / RCA",
    role: "Production & songwriting",
  },
  {
    id: 8,
    title: "Lil Boat",
    artist: "Lil Yachty",
    genre: "Hip-Hop / Experimental",
    color: "#dc2626",
    coverUrl: "/Covers/Lil Yachty Lil Boat.jpg",
    year: 2016,
    certification: "Gold",
    label: "Quality Control / Capitol",
    role: "Production",
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
      audioRef.current.volume = 0.3;
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
