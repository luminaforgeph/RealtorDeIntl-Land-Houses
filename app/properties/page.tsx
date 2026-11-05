import type { Metadata } from "next";
import { PropertyFilter } from "@/components/properties/property-filter";

export const metadata: Metadata = { title: "Property Collection", description: "Explore land, luxury homes and commercial property opportunities with RealtorDeIntl in Port Harcourt." };

export default function PropertiesPage() {
  return <><section className="page-hero"><div className="page-heading"><span className="eyebrow">THE PROPERTY COLLECTION</span><h1>Find your<br/>next perspective.</h1><p>A considered collection of property opportunities. Explore by category and enquire for verified availability, pricing and due diligence information.</p></div></section><section className="section portfolio-section"><div className="section-inner"><PropertyFilter/><p className="demo-note" style={{marginTop:42}}>Important: Listings and imagery on this demonstration website are illustrative and are not confirmed offers for sale. Verify all property particulars, title and availability directly with the agency.</p></div></section></>;
}