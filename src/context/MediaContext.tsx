"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
    title: "Neon Nights",
    artist: "Synthwave Collective",
    genre: "Electronic",
    color: "#d946ef",
    coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    id: 2,
    title: "Midnight Jazz",
    artist: "The Blue Quartet",
    genre: "Jazz Classics",
    color: "#2563eb",
    coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    id: 3,
    title: "Forest Whispers",
    artist: "Echoes of Nature",
    genre: "Ambient",
    color: "#059669",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    id: 4,
    title: "Urban Melancholy",
    artist: "City Lights",
    genre: "Lo-Fi Beats",
    color: "#f97316",
    coverUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    id: 5,
    title: "Analog Dreams",
    artist: "Vintage Audio",
    genre: "Indie Rock",
    color: "#e11d48",
    coverUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600&h=600"
  },
  {
    id: 6,
    title: "Deep Space",
    artist: "Cosmic Frequencies",
    genre: "Techno",
    color: "#4f46e5",
    coverUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=600&h=600"
  }
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

  const currentRecord = RECORDS[activeIndex];

  const nextRecord = () => {
    setActiveIndex((prev) => (prev + 1) % RECORDS.length);
  };

  const prevRecord = () => {
    setActiveIndex((prev) => (prev - 1 + RECORDS.length) % RECORDS.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        nextRecord();
      }, 3500);
    }
    return () => clearInterval(interval);
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
