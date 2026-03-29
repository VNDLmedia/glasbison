import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Glass Bison. We are selectively expanding our roster and global network.",
  openGraph: {
    title: "Contact | Glass Bison",
    description:
      "Get in touch with Glass Bison. We are selectively expanding our roster and global network.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
