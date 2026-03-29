import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service management, A&R, creative development, and deal support for producers and songwriters.",
  openGraph: {
    title: "Services | Glass Bison",
    description:
      "Full-service management, A&R, creative development, and deal support for producers and songwriters.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
