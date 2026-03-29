import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
  description:
    "Legal information and imprint for Glass Bison Management, Berlin.",
  openGraph: {
    title: "Imprint | Glass Bison",
    description:
      "Legal information and imprint for Glass Bison Management, Berlin.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
