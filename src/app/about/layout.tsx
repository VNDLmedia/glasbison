import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Glass Bison stands for strength within the music industry. Grammy-nominated management for producers and songwriters.",
  openGraph: {
    title: "About | Glass Bison",
    description:
      "Glass Bison stands for strength within the music industry. Grammy-nominated management for producers and songwriters.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
