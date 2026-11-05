import Link from "next/link";

export default function NotFound() {
  return <section className="page-hero" style={{minHeight:"75vh",display:"flex",alignItems:"center"}}><div className="page-heading"><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>This address<br/>doesn’t exist.</h1><p>The page you are looking for may have moved or is no longer available.</p><Link href="/" className="button button--gold" style={{marginTop:28}}>Return home <span>↗</span></Link></div></section>;
}