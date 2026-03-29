import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Strategic initiatives transforming industry frameworks through innovation and precision.",
  openGraph: {
    title: "Projects | Glass Bison",
    description:
      "Strategic initiatives transforming industry frameworks through innovation and precision.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
