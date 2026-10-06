import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { siteConfig } from "@/data/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

// Loaded as a separate instance: Turbopack in Next 16.3 fails to build a single
// next/font/google call that requests both normal and italic styles.
// globals.css routes italic display text to this family.
const cormorantItalic = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
  variable: "--font-cormorant-italic",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = siteConfig.contact.locality
  ? `${siteConfig.name} ${siteConfig.contact.locality} | ${siteConfig.tagline}`
  : `${siteConfig.name} | ${siteConfig.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Kalikasan Spa",
    ...(siteConfig.contact.locality
      ? [`Kalikasan Spa ${siteConfig.contact.locality}`, `spa in ${siteConfig.contact.locality}`, `massage in ${siteConfig.contact.locality}`]
      : []),
    "spa",
    "massage",
    "haplos",
    "suob",
    "ventosa",
    "cupping",
    "hot stone massage",
    "body scrub",
    "infrared sauna",
    "Filipino wellness",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f8f4ec",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${cormorantItalic.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
