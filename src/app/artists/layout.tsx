import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "Our roster of producers and songwriters behind 70+ billion streams and countless chart-topping records.",
  openGraph: {
    title: "Artists | Glass Bison",
    description:
      "Our roster of producers and songwriters behind 70+ billion streams and countless chart-topping records.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
