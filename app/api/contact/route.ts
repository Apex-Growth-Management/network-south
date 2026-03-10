import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, company, industry, service, message } = body;

  // 1. Zapier webhook — routes to HubSpot deal + any other automations
  const zapierWebhook = process.env.ZAPIER_WEBHOOK_URL;
  if (zapierWebhook) {
    await fetch(zapierWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, company, industry, service, message, source: "network-south.com" }),
    }).catch(() => {});
  }

  // 2. HubSpot — create/update contact and deal
  const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (hubspotToken && email) {
    try {
      // Create or update contact
      const contactRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${hubspotToken}`,
        },
        body: JSON.stringify({
          properties: {
            email,
            firstname: name?.split(" ")[0] ?? "",
            lastname: name?.split(" ").slice(1).join(" ") ?? "",
            phone,
            company,
          },
        }),
      });

      const contactData = await contactRes.json();
      const contactId = contactData?.id;

      // Create deal
      if (contactId) {
        await fetch("https://api.hubapi.com/crm/v3/objects/deals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${hubspotToken}`,
          },
          body: JSON.stringify({
            properties: {
              dealname: `${company || name} — ${service || "Inquiry"} (Network South)`,
              dealstage: "appointmentscheduled",
              pipeline: "default",
            },
            associations: [
              { to: { id: contactId }, types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 3 }] },
            ],
          }),
        }).catch(() => {});
      }
    } catch {
      // Non-fatal — log silently
    }
  }

  // 3. Confirmation email to submitter
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey && email) {
    const resend = new Resend(resendKey);
    await resend.emails.send({
      // Use verified AGM domain until network-south.com domain is verified in Resend
      from: "Network South <noreply@apexgrowthmanagement.com>",
      to: email,
      subject: "We received your request — Network South, Inc.",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#111;">
          <div style="background:#CC0000;padding:24px 32px;">
            <h1 style="color:white;margin:0;font-size:22px;">Network South, Inc.</h1>
            <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:13px;">Business Communications & Security Since 1994</p>
          </div>
          <div style="padding:32px;">
            <h2 style="margin-top:0;">Hi ${name || "there"}, we received your request!</h2>
            <p style="color:#555;line-height:1.6;">
              Thank you for reaching out to Network South. One of our telecom specialists will contact you within one business day to discuss your needs${industry ? ` in the <strong>${industry}</strong> industry` : ""}.
            </p>
            ${service ? `<p style="color:#555;line-height:1.6;">You indicated interest in: <strong>${service}</strong></p>` : ""}
            <p style="color:#555;line-height:1.6;">
              Need immediate assistance? Call us anytime:
            </p>
            <div style="margin:24px 0;display:flex;gap:12px;">
              <a href="tel:8009489914" style="background:#CC0000;color:white;padding:12px 28px;border-radius:99px;text-decoration:none;font-weight:600;display:inline-block;margin-right:12px;">
                800.948.9914
              </a>
              <a href="tel:9198724771" style="background:#f5f5f5;color:#111;padding:12px 28px;border-radius:99px;text-decoration:none;font-weight:600;display:inline-block;">
                (919) 872-4771
              </a>
            </div>
            <p style="color:#888;font-size:13px;border-top:1px solid #eee;padding-top:20px;margin-top:24px;">
              Network South, Inc. · 457 Park Ave, Youngsville, NC 27596<br>
              24/7 On-Call Support · network-south.com
            </p>
          </div>
        </div>
      `,
    }).catch(() => {});
  }

  return NextResponse.json({ ok: true });
}
