import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="brand brand--footer"><span className="brand-mark">R<span>.</span></span><span className="brand-name">REALTORDEINTL<small>LAND & HOUSES</small></span></Link>
          <p className="footer-note">A considered approach to exceptional property.</p>
        </div>
        <div className="footer-links"><span className="eyebrow">EXPLORE</span><Link href="/properties">Properties</Link><Link href="/services">Our services</Link><Link href="/contact">Private enquiries</Link></div>
        <div className="footer-links"><span className="eyebrow">CONNECT</span><span>Port Harcourt, Rivers State</span><Link href="/contact">Schedule a conversation ↗</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} RealtorDeIntl-Land & Houses.</span><span>Property, with perspective.</span></div>
    </footer>
  );
}