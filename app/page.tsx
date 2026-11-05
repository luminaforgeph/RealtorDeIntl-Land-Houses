import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/properties";
import { PropertyCard } from "@/components/properties/property-card";
import { Reveal, ImageReveal } from "@/components/ui/reveal";

export default function HomePage() {
  const featured = properties.filter((property) => property.featured);
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media"><Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90" alt="Architectural view of a contemporary luxury home at dusk" fill priority sizes="100vw" /></div>
        <div className="hero-shade" />
        <div className="hero-content">
          <Reveal><span className="eyebrow">A MORE CONSIDERED WAY TO FIND HOME</span><h1 id="hero-title">Beyond property.<br/><em>Into possibility.</em></h1><p className="hero-copy">Discover exceptional land, distinguished residences and considered investment opportunities in Port Harcourt and beyond.</p><div className="hero-actions"><Link className="button button--gold" href="/properties">Explore properties <span>↗</span></Link><Link className="button button--light" href="/contact">Private enquiries <span>↗</span></Link></div></Reveal>
        </div>
        <span className="hero-scroll">SCROLL TO DISCOVER</span>
      </section>
      <section className="trust-strip" aria-label="Our approach">
        <div className="trust-item"><span className="trust-number">01</span><span className="trust-label">A considered<br/>property search</span></div>
        <div className="trust-item"><span className="trust-number">02</span><span className="trust-label">Local insight<br/>and perspective</span></div>
        <div className="trust-item"><span className="trust-number">03</span><span className="trust-label">Personalised<br/>client attention</span></div>
      </section>
      <section className="section featured-section">
        <div className="section-inner">
          <div className="section-heading"><div><span className="eyebrow">THE COLLECTION</span><h2>Places with<br/>a point of view.</h2></div><div><p>A considered selection of residential, land and commercial opportunities. Each listing shown here is illustrative pending confirmation of agency inventory.</p><Link href="/properties" className="text-link" style={{marginTop:24}}>Explore the collection <span>↗</span></Link></div></div>
          <div className="property-grid">{featured.map((property,i)=><Reveal key={property.id} delay={i*.08}><PropertyCard property={property} index={i}/></Reveal>)}</div>
        </div>
      </section>
      <section className="section experience-section" id="experience">
        <div className="section-inner experience-grid">
          <ImageReveal className="experience-image"><Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85" alt="Thoughtfully designed modern residence with warm natural materials" fill sizes="(max-width: 800px) 100vw, 48vw"/></ImageReveal>
          <Reveal className="experience-copy"><span className="eyebrow">THE REALTORDEINTL EXPERIENCE</span><h2>Clarity in every<br/>property decision.</h2><p>Finding the right property is about more than a listing. It is about understanding your priorities, asking the right questions and approaching every decision with care.</p><div className="experience-points"><div className="experience-point"><span>01</span><div><h3>Personal perspective</h3><p>A conversation shaped around your requirements, not a generic shortlist.</p></div></div><div className="experience-point"><span>02</span><div><h3>Local understanding</h3><p>Thoughtful guidance grounded in the Port Harcourt property landscape.</p></div></div><div className="experience-point"><span>03</span><div><h3>Considered guidance</h3><p>Clear communication as you evaluate your next property move.</p></div></div></div><Link href="/services" className="text-link" style={{marginTop:35}}>Discover our services <span>↗</span></Link></Reveal>
        </div>
      </section>
      <section className="statement-section"><span className="eyebrow">A DIFFERENT PERSPECTIVE</span><blockquote>“The right address is more than a place. It is the beginning of <em>what comes next.</em>”</blockquote><p>REALTORDEINTL — LAND & HOUSES</p><Link href="/contact" className="button button--gold" style={{marginTop:28}}>Start a conversation <span>↗</span></Link></section>
    </>
  );
}