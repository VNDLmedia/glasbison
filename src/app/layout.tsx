import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/lib/seo";
import { LiquidGlassFilter } from "@/components/LiquidGlassFilter";
import { MediaProvider } from "@/context/MediaContext";
import { CookieNotice } from "@/components/CookieNotice";

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
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rafaella.variable} antialiased font-sans`}>
        <MediaProvider>
          <OrganizationJsonLd />
          <WebSiteJsonLd />
          {children}
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
