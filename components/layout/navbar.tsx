"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Expertise" },
  { href: "/#approach", label: "Our approach" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="floating-nav-wrap">
        <nav className="floating-nav" aria-label="Main navigation">
          <Link href="/" className="floating-brand" aria-label="RealtorDeIntl home" onClick={() => setOpen(false)}>
            <span className="floating-brand-mark">R<span>.</span></span>
            <span className="floating-brand-name">REALTORDEINTL<small>LAND & HOUSES</small></span>
          </Link>
          <div className="floating-links">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </div>
          <Link href="/contact" className="floating-enquire">Enquire <ArrowUpRight size={14} strokeWidth={1.5} /></Link>
          <button className="floating-menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="floating-mobile-menu" onClick={() => setOpen((value) => !value)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div id="floating-mobile-menu" className="floating-mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}>
            <span className="eyebrow">DISCOVER REALTORDEINTL</span>
            {links.map((link, index) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}<ArrowUpRight size={17} /></Link>)}
            <p>Exceptional property. Considered decisions.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
