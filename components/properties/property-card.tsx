import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/types/property";

export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  return (
    <article className={`property-card ${index % 3 === 1 ? "property-card--offset" : ""}`}>
      <Link href={`/properties/${property.slug}`} className="property-image-link" aria-label={`View ${property.title}`}>
        <div className="property-image-wrap">
          <Image src={property.image} alt={property.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 40vw" className="property-image" />
          <span className="property-category">{property.category}</span>
          <span className="property-view">View property <b>↗</b></span>
        </div>
      </Link>
      <div className="property-card-meta"><span>{property.location}</span><span>{property.area}</span></div>
      <div className="property-card-title"><h3>{property.title}</h3><span>{property.price}</span></div>
      <p className="demo-note">Demonstration listing · Details subject to verification</p>
    </article>
  );
}