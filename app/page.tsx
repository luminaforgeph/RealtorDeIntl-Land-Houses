"use client";

import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, MapPin } from "lucide-react";

const listings = [
  { no:"01", type:"RESIDENCE", name:"The Meridian House", location:"Peter Odili Road · Port Harcourt", image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1800&auto=format&fit=crop", featured:true },
  { no:"02", type:"LAND", name:"A considered plot", location:"GRA Phase 2 · Port Harcourt", image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=85&w=1200&auto=format&fit=crop" },
  { no:"03", type:"RESIDENCE", name:"The Courtyard Residence", location:"Old GRA · Port Harcourt", image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1200&auto=format&fit=crop" },
];

const expertise = [
  ["01","Land acquisition","A considered approach to identifying, assessing and securing land with clarity at every stage."],
  ["02","Residential property","Personal guidance through the search, evaluation and purchase of a home that feels right."],
  ["03","Property advisory","Grounded insight for owners, buyers and investors making important property decisions."],
  ["04","Property management","Attentive oversight designed to protect the value and integrity of your investment."],
];

export default function HomePage() {
  const [menu,setMenu] = useState(false);
  const [form,setForm] = useState({name:"",email:"",interest:"Residential property",message:""});
  const [status,setStatus] = useState("");
  const links=[["The collection","#collection"],["Our approach","#approach"],["Expertise","#expertise"],["Enquiries","#enquiries"]];
  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message.trim()){setStatus("Please complete your name, a valid email and your enquiry.");return;}
    const message=encodeURIComponent("Hello RealtorDeIntl,\nName: "+form.name+"\nEmail: "+form.email+"\nInterest: "+form.interest+"\n\n"+form.message);
    setStatus("Your enquiry is ready. Continue in WhatsApp to send it.");
    window.open("https://wa.me/?text="+message,"_blank","noopener,noreferrer");
  }
  return <main className="site-shell">
    <header className="site-nav"><div className="nav-inner">
      <a href="#home" className="brand"><span className="brand-mark">R</span><span>REALTORDEINTL</span></a>
      <nav className="desktop-links">{links.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav>
      <a className="nav-cta" href="#enquiries">PRIVATE ENQUIRY <ArrowUpRight size={13}/></a>
      <button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label={menu?"Close menu":"Open menu"} aria-expanded={menu}>{menu?<X/>:<Menu/>}</button>
    </div>{menu&&<nav className="mobile-links">{links.map(([label,href])=><a key={href} href={href} onClick={()=>setMenu(false)}>{label}</a>)}</nav>}</header>

    <section id="home" className="hero">
      <div className="hero-photo"/><div className="hero-shade"/>
      <div className="hero-content">
        <div className="hero-kicker"><span/> LAND & HOUSES · PORT HARCOURT</div>
        <div className="hero-bottom">
          <h1 className="display hero-title">A place<br/>to <i>belong.</i></h1>
          <div className="hero-copy"><p>A more considered way to find your place. Discover land and homes selected with perspective, discretion and an understanding of what matters.</p><a href="#collection" className="text-link">EXPLORE THE COLLECTION <ArrowDown size={15}/></a></div>
        </div>
        <div className="hero-foot"><span>PROPERTY, WITH PERSPECTIVE.</span><span>RIVERS STATE · NIGERIA</span><span>01 — 04</span></div>
      </div>
    </section>

    <section id="approach" className="approach section-pad">
      <div className="section-label"><span className="gold-line"/> A DIFFERENT PERSPECTIVE</div>
      <div className="approach-main"><h2 className="display">Real estate is more than a transaction. <i>It is a decision about how you live.</i></h2><p>We believe the right property should feel considered long before it feels like yours. Our work brings local understanding, careful attention and a personal approach to every conversation.</p></div>
    </section>

    <section id="collection" className="collection section-pad">
      <div className="section-heading"><div><div className="section-label"><span className="gold-line"/> A CURATED SELECTION</div><h2 className="display">The collection<span>.</span></h2></div><p>A glimpse of the opportunities we seek and represent. Listing details are illustrative pending verified inventory.</p></div>
      <div className="property-layout">
        <article className="property property-featured"><img src={listings[0].image} alt="Contemporary residence with landscaped grounds"/><div className="property-shade"/><span className="property-number">ILLUSTRATIVE LISTING · 01</span><div className="property-info"><small>{listings[0].type} · {listings[0].location}</small><h3 className="display">{listings[0].name}</h3><div className="property-meta"><span>PRICE ON REQUEST</span><ArrowUpRight/></div></div></article>
        <div className="property-stack">{listings.slice(1).map(p=><article className="property" key={p.no}><img src={p.image} alt="Illustrative real estate photography"/><div className="property-shade"/><span className="property-number">ILLUSTRATIVE · {p.no}</span><div className="property-info"><small>{p.type} · {p.location}</small><h3 className="display">{p.name}</h3><div className="property-meta"><span>PRICE ON REQUEST</span><ArrowUpRight/></div></div></article>)}</div>
      </div>
      <p className="disclaimer">Photography and property names shown for design demonstration only. Confirm availability, title, location and pricing directly before any decision.</p>
    </section>

    <section id="expertise" className="expertise section-pad"><div className="expertise-intro"><div className="section-label"><span className="gold-line"/> WHAT WE DO</div><h2 className="display">Guidance at every <i>step.</i></h2><p>A thoughtful, personal service built around your priorities, your time and your next chapter.</p></div><div className="expertise-list">{expertise.map(([n,title,desc])=><article className="expertise-row" key={n}><span>{n}</span><h3 className="display">{title}</h3><p>{desc}</p></article>)}</div></section>

    <section id="enquiries" className="enquiries section-pad"><div className="enquiry-intro"><div className="section-label"><span className="gold-line"/> BEGIN A CONVERSATION</div><h2 className="display">The next move is <i>yours.</i></h2><p>Tell us what you are looking for. We will help you take the next step with clarity.</p><div className="location-note"><MapPin size={16}/> PORT HARCOURT · RIVERS STATE · NIGERIA</div></div>
      <form className="enquiry-form" onSubmit={submit}><label htmlFor="name">YOUR NAME</label><input id="name" placeholder="How should we address you?" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/><label htmlFor="email">EMAIL ADDRESS</label><input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required/><label htmlFor="interest">I AM INTERESTED IN</label><select id="interest" value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})}><option>Residential property</option><option>Land acquisition</option><option>Property management</option><option>Investment advisory</option><option>Other enquiry</option></select><label htmlFor="message">YOUR ENQUIRY</label><textarea id="message" rows={3} placeholder="Share a little about what you have in mind..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required/>{status&&<p className="form-status" role="status">{status}</p>}<button className="submit-button" type="submit">SEND AN ENQUIRY <ArrowRight size={16}/></button></form>
    </section>
    <footer className="site-footer"><div><span className="footer-brand">REALTORDEINTL</span><p className="display">Land & Houses.</p></div><nav><a href="#home">BACK TO TOP ↑</a><a href="#collection">COLLECTION</a><a href="#enquiries">ENQUIRIES</a></nav><small>© {new Date().getFullYear()} REALTORDEINTL</small></footer>
  </main>;
}
