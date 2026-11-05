import type { MetadataRoute } from "next";
import { properties } from "@/lib/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
  const routes = ["", "/properties", "/services", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: route === "" ? 1 : 0.7 })),
    ...properties.map((property) => ({ url: `${base}/properties/${property.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 }))
  ];
}