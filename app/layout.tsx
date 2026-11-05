import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "RealtorDeIntl | Exceptional Land & Houses", template: "%s | RealtorDeIntl" },
  description: "Discover exceptional land, distinguished residences and considered property opportunities with RealtorDeIntl-Land & Houses in Port Harcourt, Nigeria.",
  openGraph: { type: "website", locale: "en_NG", siteName: "RealtorDeIntl-Land & Houses", title: "RealtorDeIntl | Exceptional Land & Houses", description: "A considered approach to exceptional property." },
  twitter: { card: "summary_large_image", title: "RealtorDeIntl | Exceptional Land & Houses", description: "A considered approach to exceptional property." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0a0a0a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org", "@type": "RealEstateAgent",
    name: "RealtorDeIntl-Land & Houses", url: siteUrl,
    description: "Real estate agency offering land, residential and commercial property services.",
    areaServed: { "@type": "City", name: "Port Harcourt" },
    address: { "@type": "PostalAddress", addressLocality: "Port Harcourt", addressRegion: "Rivers State", addressCountry: "NG" },
  };
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content">{children}</main></body>
    </html>
  );
}
