"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  { href: "/#experience", label: "Our approach" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="RealtorDeIntl home" onClick={() => setOpen(false)}>
          <span className="brand-mark">R<span>.</span></span>
          <span className="brand-name">REALTORDEINTL<small>LAND & HOUSES</small></span>
        </Link>
        <div className="desktop-nav">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </div>
        <Link href="/contact" className="nav-cta">Enquire <span aria-hidden="true">↗</span></Link>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>
      <div id="mobile-navigation" className={`mobile-nav ${open ? "mobile-nav--open" : ""}`} aria-hidden={!open}>
        <div className="mobile-nav-inner">
          <span className="eyebrow">DISCOVER REALTORDEINTL</span>
          {links.map((link, i) => <Link key={link.href} href={link.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}><span>0{i + 1}</span>{link.label}<b>↗</b></Link>)}
          <p>Exceptional property. Considered decisions.</p>
        </div>
      </div>
    </header>
  );
}