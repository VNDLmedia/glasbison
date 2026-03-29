import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Glass Bison. Your privacy is fundamental to our transparency.",
  openGraph: {
    title: "Privacy Policy | Glass Bison",
    description:
      "Privacy policy for Glass Bison. Your privacy is fundamental to our transparency.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
