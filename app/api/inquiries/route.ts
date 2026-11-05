import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validations";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid enquiry." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({
      error: parsed.error.issues[0]?.message ?? "Please review the form and try again.",
      issues: parsed.error.issues.map((issue) => ({ field: issue.path.join("."), message: issue.message })),
    }, { status: 422 });
  }

  const { RESEND_API_KEY, INQUIRY_TO_EMAIL, INQUIRY_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !INQUIRY_TO_EMAIL || !INQUIRY_FROM_EMAIL) {
    return NextResponse.json({
      error: "Enquiry delivery is not configured yet. Please contact the agency directly or try again later.",
    }, { status: 503 });
  }

  const { name, email, phone, interest, message } = parsed.data;
  const text = [
    "A new website enquiry has been received.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Interest: ${interest}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: INQUIRY_FROM_EMAIL,
        to: [INQUIRY_TO_EMAIL],
        reply_to: email,
        subject: `Website enquiry: ${interest}`,
        text,
      }),
    });

    if (!delivery.ok) {
      console.error("Inquiry email provider rejected delivery:", delivery.status);
      return NextResponse.json({ error: "We could not deliver your enquiry right now. Please try again shortly." }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: "Your enquiry has been received." });
  } catch (error) {
    console.error("Inquiry delivery failed:", error);
    return NextResponse.json({ error: "The enquiry service is temporarily unavailable. Please try again shortly." }, { status: 502 });
  }
}