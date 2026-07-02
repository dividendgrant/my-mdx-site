import { NextRequest, NextResponse } from "next/server";

// Contact form handler. Emails inquiries via Resend (same pattern as
// directmatch). Runs on the OpenNext Worker — only uses fetch + env vars,
// so it is workerd-safe (no fs, no eval).
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const domain = typeof body.domain === "string" ? body.domain.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const honeypot = typeof body.honeypot === "string" ? body.honeypot : "";

  if (honeypot) return NextResponse.json({ error: "Bot detected" }, { status: 400 });
  if (name.length < 2 || !email.includes("@")) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Fail loudly rather than falsely reporting success (the old bug).
    return NextResponse.json({ error: "Email not configured" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "DigitalNomads Inquiries <noreply@hammerfinancial.com>",
        to: [process.env.NOTIFY_EMAIL ?? "domains@digitalnomads.com"],
        reply_to: email,
        subject: `New DigitalNomads.com inquiry: ${name}${domain ? ` — ${domain}` : ""}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Domain of interest: ${domain || "N/A"}`,
          "",
          "Message:",
          message || "N/A",
        ].join("\n"),
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend error:", res.status, detail);
      return NextResponse.json({ error: "Send failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("Resend fetch error:", err);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
