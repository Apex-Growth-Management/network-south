import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, company, industry, service, message } = body;

  // Forward to Zapier webhook
  const zapierWebhook = process.env.ZAPIER_WEBHOOK_URL;
  if (zapierWebhook) {
    await fetch(zapierWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, company, industry, service, message }),
    }).catch(() => {});
  }

  // Send confirmation email via Resend
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey && email) {
    const resend = new Resend(resendKey);
    await resend.emails.send({
      from: "Network South <noreply@network-south.com>",
      to: email,
      subject: "We received your request — Network South, Inc.",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#111;">
          <div style="background:#CC0000;padding:24px 32px;">
            <h1 style="color:white;margin:0;font-size:22px;">Network South, Inc.</h1>
          </div>
          <div style="padding:32px;">
            <h2 style="margin-top:0;">Hi ${name || "there"}, we received your request!</h2>
            <p style="color:#555;line-height:1.6;">
              Thank you for reaching out. One of our telecom specialists will contact you within one business day to discuss your needs.
            </p>
            <p style="color:#555;line-height:1.6;">
              In the meantime, feel free to call us at any time:
            </p>
            <div style="margin:24px 0;">
              <a href="tel:8009489914" style="background:#CC0000;color:white;padding:12px 28px;border-radius:99px;text-decoration:none;font-weight:600;display:inline-block;">
                📞 800.948.9914
              </a>
            </div>
            <p style="color:#888;font-size:13px;border-top:1px solid #eee;padding-top:20px;margin-top:24px;">
              Network South, Inc. · 457 Park Ave, Youngsville, NC 27596 · 24/7 On-Call Support
            </p>
          </div>
        </div>
      `,
    }).catch(() => {});
  }

  return NextResponse.json({ ok: true });
}
