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

  // Do not report success or discard a lead until a delivery provider is configured.
  if (!process.env.RESEND_API_KEY || !process.env.INQUIRY_TO_EMAIL || !process.env.INQUIRY_FROM_EMAIL) {
    return NextResponse.json({
      error: "Enquiry delivery is not configured yet. Please contact the agency directly or try again later.",
    }, { status: 503 });
  }

  // Provider integration is intentionally explicit: configure and implement delivery before production.
  return NextResponse.json({ error: "The enquiry service is temporarily unavailable. Please contact the agency directly." }, { status: 503 });
}