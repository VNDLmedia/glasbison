import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discography",
  description:
    "The catalog of culturally defining records. 70+ gold, platinum, and diamond certifications.",
  openGraph: {
    title: "Discography | Glass Bison",
    description:
      "The catalog of culturally defining records. 70+ gold, platinum, and diamond certifications.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
