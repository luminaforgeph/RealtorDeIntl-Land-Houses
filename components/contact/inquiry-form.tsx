"use client";

import { useState, type FormEvent } from "react";

const initial = { name: "", email: "", phone: "", interest: "", message: "" };

export function InquiryForm() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function update(field: keyof typeof initial, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (status !== "idle") { setStatus("idle"); setFeedback(""); }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "We could not send your enquiry. Please try again.");
      setStatus("success");
      setFeedback("Thank you. Your enquiry has been received. Our team will be in touch.");
      setValues(initial);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>Full name<input autoComplete="name" required minLength={2} value={values.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" /></label>
        <label>Email address<input type="email" autoComplete="email" required value={values.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" /></label>
        <label>Phone number<input type="tel" autoComplete="tel" required value={values.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+234" /></label>
        <label>Area of interest<select required value={values.interest} onChange={(e) => update("interest", e.target.value)}><option value="">Select an interest</option><option>Land acquisition</option><option>Luxury homes</option><option>Commercial property</option><option>Property management</option><option>Investment advisory</option><option>Other enquiry</option></select></label>
      </div>
      <label>How may we assist?<textarea required minLength={10} rows={5} value={values.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us a little about what you are looking for..." /></label>
      {status !== "idle" && <p className={`form-feedback form-feedback--${status}`} role="status" aria-live="polite">{status === "loading" ? "Sending your enquiry…" : feedback}</p>}
      <button className="button button--dark form-submit" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending…" : "Send private enquiry"} <span aria-hidden="true">↗</span></button>
      <p className="form-privacy">Your details are used only to respond to this enquiry.</p>
    </form>
  );
}