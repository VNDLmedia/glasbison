import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/lib/seo";
import { LiquidGlassFilter } from "@/components/LiquidGlassFilter";
import { MediaProvider } from "@/context/MediaContext";
import { CookieNotice } from "@/components/CookieNotice";
import { MediaNavbar } from "@/components/MediaNavbar";

const rafaella = localFont({
  src: "../../public/Rafaella.otf",
  variable: "--font-rafaella",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Music and Entertainment`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: ["music management", "producer management", "songwriting", "A&R", "Grammy", "platinum", "Glass Bison", "music industry", "Berlin"],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    title: `${SITE_NAME} — Music and Entertainment`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Music and Entertainment`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rafaella.variable}>
      <body className="antialiased font-sans">
        <MediaProvider>
          <OrganizationJsonLd />
          <WebSiteJsonLd />
          {children}
          <MediaNavbar />
          <CookieNotice />
        </MediaProvider>

        <LiquidGlassFilter
          id="liquid-glass-filter"
          width={400}
          height={300}
          borderRadius={20}
          refractionStrength={1.0}
          edgeSoftness={0.15}
        />
      </body>
    </html>
  );
}
