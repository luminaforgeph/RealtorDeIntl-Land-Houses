import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Services", description: "Explore land acquisition, property management and investment advisory services from RealtorDeIntl." };

const services = [
  { n:"01", title:"Land acquisition", text:"A considered approach to identifying land opportunities, understanding your intended use and guiding the questions that matter before you proceed." },
  { n:"02", title:"Property management", text:"Practical support for property owners seeking a more organised approach to the care, oversight and ongoing management of their assets." },
  { n:"03", title:"Investment advisory", text:"A thoughtful sounding board for buyers and investors assessing property opportunities, location considerations and long-term objectives." },
  { n:"04", title:"Residential & commercial sales", text:"Personalised support for those exploring distinguished homes, business premises and property opportunities in the Port Harcourt market." }
];

export default function ServicesPage() {
  return <><section className="page-hero"><div className="page-heading"><span className="eyebrow">OUR EXPERTISE</span><h1>More than a<br/>property search.</h1><p>Thoughtful real estate support, from the first conversation to the decisions that follow.</p></div></section><section className="section"><div className="section-inner services-list">{services.map((service)=><article className="service-row" key={service.n}><span className="service-index">{service.n}</span><h2>{service.title}</h2><p>{service.text}</p></article>)}<div style={{marginTop:65}}><Link href="/contact" className="button button--dark">Discuss your requirements <span>↗</span></Link></div></div></section></>;
}