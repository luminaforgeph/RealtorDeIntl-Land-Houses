import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "RealtorDeIntl | Land & Houses", template: "%s | RealtorDeIntl" },
  description: "Discover exceptional land, distinguished residences and considered property opportunities with RealtorDeIntl in Port Harcourt, Nigeria.",
  openGraph: { type: "website", locale: "en_NG", siteName: "RealtorDeIntl-Land & Houses", title: "RealtorDeIntl | Land & Houses", description: "A considered approach to exceptional property." },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#0a0a0a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${playfair.variable} ${inter.variable}`}><body>{children}</body></html>;
}
