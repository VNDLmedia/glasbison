export interface Artist {
  slug: string;
  name: string;
  genre: string;
  reach: string;
  img: string;
  bio: string;
  color: string;
  platforms: {
    instagram?: string;
    tiktok?: string;
    spotify?: string;
    youtube?: string;
  };
}

export const ARTISTS: Artist[] = [
  {
    slug: "artist-1",
    name: "NOVA",
    genre: "Pop / R&B",
    reach: "2.1M",
    img: "/artists/nova.jpg",
    bio: "Rising Star der deutschen Pop-Szene. NOVA verbindet emotionale Tiefe mit modernem Sound.",
    color: "#1a3a7a",
    platforms: { instagram: "850k", spotify: "1.2M", tiktok: "2.1M" },
  },
  {
    slug: "artist-2",
    name: "KARAT",
    genre: "Hip-Hop / Rap",
    reach: "1.8M",
    img: "/artists/karat.jpg",
    bio: "Authentischer Rap mit Substanz. KARAT dominiert die Streaming-Charts.",
    color: "#0d2955",
    platforms: { instagram: "620k", spotify: "980k", tiktok: "1.8M", youtube: "450k" },
  },
  {
    slug: "artist-3",
    name: "ELARA",
    genre: "Electronic / Dance",
    reach: "950k",
    img: "/artists/elara.jpg",
    bio: "DJ und Produzentin. ELARA bringt die Clubs zum Beben und die Festivals zum Strahlen.",
    color: "#022b80",
    platforms: { instagram: "380k", spotify: "600k", tiktok: "950k" },
  },
  {
    slug: "artist-4",
    name: "VOSS",
    genre: "Alternative / Indie",
    reach: "720k",
    img: "/artists/voss.jpg",
    bio: "Alternative trifft auf Mainstream. VOSS definiert den Sound einer neuen Generation.",
    color: "#0a3070",
    platforms: { instagram: "280k", spotify: "450k", tiktok: "720k" },
  },
  {
    slug: "artist-5",
    name: "ZARA GOLD",
    genre: "Soul / Jazz",
    reach: "1.3M",
    img: "/artists/zara-gold.jpg",
    bio: "Die Stimme, die unter die Haut geht. ZARA GOLD verbindet Soul-Tradition mit moderner Ästhetik.",
    color: "#13408c",
    platforms: { instagram: "520k", spotify: "800k", tiktok: "1.3M", youtube: "320k" },
  },
  {
    slug: "artist-6",
    name: "DRACO",
    genre: "Drill / Trap",
    reach: "2.5M",
    img: "/artists/draco.jpg",
    bio: "Hard beats, real stories. DRACO ist die Stimme der Straße mit internationalem Appeal.",
    color: "#001f5c",
    platforms: { instagram: "900k", spotify: "1.5M", tiktok: "2.5M", youtube: "680k" },
  },
];

export const SERVICES = [
  {
    slug: "01",
    title: "Artist Management",
    desc: "360°-Betreuung für Musiker und Kreative. Von der Karriereplanung bis zum täglichen Business.",
  },
  {
    slug: "02",
    title: "Booking & Live",
    desc: "Konzerte, Festivals und Events. Wir bringen unsere Artists auf die größten Bühnen.",
  },
  {
    slug: "03",
    title: "Marketing & Branding",
    desc: "Strategischer Markenaufbau und digitale Kampagnen für maximale Sichtbarkeit.",
  },
  {
    slug: "04",
    title: "Digital Strategy",
    desc: "Social Media, Streaming-Optimierung und datengetriebene Wachstumsstrategien.",
  },
  {
    slug: "05",
    title: "PR & Medienarbeit",
    desc: "Pressearbeit, Interviews und Platzierungen in relevanten Medien und Formaten.",
  },
  {
    slug: "06",
    title: "Content Production",
    desc: "Musikvideos, Visuals und Social Content auf höchstem Produktionsniveau.",
  },
];
