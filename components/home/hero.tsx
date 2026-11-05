import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MoveDownRight } from "lucide-react";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="quiet-hero" aria-labelledby="quiet-hero-title">
      <div className="quiet-hero-copy">
        <motion.div className="quiet-hero-kicker" {...reveal(0.12)}><span className="kicker-line" /><span>PORT HARCOURT · NIGERIA</span></motion.div>
        <motion.h1 id="quiet-hero-title" {...reveal(0.22)}>Find your<br />place in<br /><em>the extraordinary.</em></motion.h1>
        <motion.p className="quiet-hero-description" {...reveal(0.36)}>A more considered approach to exceptional land, distinguished residences and property investment.</motion.p>
        <motion.div className="quiet-hero-actions" {...reveal(0.48)}>
          <Link href="/properties" className="quiet-hero-cta"><span>Explore the collection</span><span className="quiet-hero-cta-icon"><ArrowUpRight size={18} strokeWidth={1.5} /></span></Link>
          <span className="quiet-hero-note">PROPERTY, WITH PERSPECTIVE.</span>
        </motion.div>
        <motion.div className="quiet-hero-index" {...reveal(0.62)}><span>01</span><span className="index-rule" /><span>THE ART OF ARRIVING</span></motion.div>
      </div>
      <motion.div className="quiet-hero-visual" initial={{ opacity: 0, clipPath: reduceMotion ? "inset(0)" : "inset(0 0 0 12%)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }} transition={{ duration: reduceMotion ? 0 : 1.15, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}>
        <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90" alt="Quiet contemporary residence framed by natural stone, glass and mature landscaping" fill priority sizes="(max-width: 760px) 100vw, 54vw" className="quiet-hero-image" />
        <div className="quiet-hero-image-shade" />
        <div className="quiet-hero-image-caption"><span>01 / ARCHITECTURE & PLACE</span><span>A SENSE OF BELONGING</span></div>
        <div className="quiet-hero-image-mark" aria-hidden="true">R<span>.</span></div>
      </motion.div>
      <Link href="/properties" className="quiet-hero-scroll" aria-label="Scroll to discover properties"><MoveDownRight size={15} strokeWidth={1.4} /><span>SCROLL TO DISCOVER</span></Link>
    </section>
  );
}
