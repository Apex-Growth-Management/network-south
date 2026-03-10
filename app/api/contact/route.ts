import { NextRequest, NextResponse } from "next/server";

// Contact form submissions are stored here as a placeholder.
// Network South should connect their own CRM/email service
// (e.g. their own Resend domain, EmailJS, or direct SMTP) before launch.
export async function POST(req: NextRequest) {
  await req.json(); // consume body — no external services called

  return NextResponse.json({ ok: true });
}
