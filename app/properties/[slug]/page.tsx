import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/lib/properties";

export function generateStaticParams() { return properties.map((property) => ({ slug: property.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);
  return property ? { title: property.title, description: property.summary } : { title: "Property not found" };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);
  if (!property) notFound();
  return <>
    <section className="detail-hero"><span className="eyebrow">{property.category} · {property.location}</span><h1>{property.title}</h1><p className="demo-note" style={{color:"#c9c4b9"}}>Demonstration listing · Details subject to verification</p></section>
    <div className="detail-image"><Image src={property.image} alt={property.imageAlt} fill priority sizes="100vw"/></div>
    <section className="detail-content"><div className="detail-facts"><span>{property.location}</span><span>{property.area}</span>{property.beds && <span>{property.beds} bedrooms</span>}{property.baths && <span>{property.baths} bathrooms</span>}</div><p>{property.summary}</p><p>This page contains illustrative content for design demonstration only. Property availability, price, title, measurements, planning permissions and all other particulars must be independently verified before any transaction.</p><Link className="button button--dark" href={`/contact?property=${property.slug}`}>Enquire about this property <span>↗</span></Link></section>
  </>;
}