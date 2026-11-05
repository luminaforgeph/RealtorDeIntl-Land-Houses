import type { Metadata } from "next";
import { InquiryForm } from "@/components/contact/inquiry-form";

export const metadata: Metadata = { title: "Private Enquiries", description: "Contact RealtorDeIntl-Land & Houses to discuss land, luxury homes, property management or investment advisory." };

export default function ContactPage() {
  return <><section className="page-hero"><div className="page-heading"><span className="eyebrow">PRIVATE ENQUIRIES</span><h1>Let’s begin<br/>with a conversation.</h1><p>Tell us what you have in mind. We welcome considered enquiries from buyers, owners and investors.</p></div></section><section className="section"><div className="contact-layout"><div className="contact-intro"><span className="eyebrow">GET IN TOUCH</span><h1>Good decisions<br/>start here.</h1><p>Share a little about your property requirements and the team can help you understand the next steps.</p><div className="contact-detail"><span>LOCATION</span><p>Port Harcourt, Rivers State, Nigeria</p></div><div className="contact-detail"><span>PRIVATE VIEWING</span><p>Request an appointment through the enquiry form.</p></div><div className="contact-detail"><span>DIRECT CONTACT</span><p>Agency phone and email details will be published once confirmed.</p></div></div><InquiryForm/></div></section></>;
}