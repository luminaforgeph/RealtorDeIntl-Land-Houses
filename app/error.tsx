"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("Application error:", error); }, [error]);
  return <section className="page-hero" style={{minHeight:"75vh",display:"flex",alignItems:"center"}}><div className="page-heading"><span className="eyebrow">SOMETHING WENT WRONG</span><h1>Let’s try<br/>that again.</h1><p>An unexpected issue interrupted this page. Your browsing can continue from here.</p><div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:28}}><button className="button button--gold" onClick={reset}>Try again ↗</button><Link href="/" className="button button--light">Return home</Link></div></div></section>;
}