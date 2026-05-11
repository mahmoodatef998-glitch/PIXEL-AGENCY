import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  businessType: z.string().min(2),
  monthlyBudget: z.string().min(2),
  message: z.string().min(8)
});

function getClientIp(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return ip && ip.length > 0 ? ip : "unknown";
}

async function checkRateLimitOrThrow(ip: string) {
  const windowSeconds = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_SECONDS ?? "600");
  const max = Number(process.env.CONTACT_RATE_LIMIT_MAX ?? "6");

  const key = `rate:contact:${ip}`;
  const count = await kv.incr(key);
  if (count === 1) {
    await kv.expire(key, windowSeconds);
  }
  if (count > max) {
    throw new Error("RATE_LIMITED");
  }
}

async function sendLeadEmail(lead: {
  id: string;
  name: string;
  email: string;
  phone?: string;
  businessType: string;
  monthlyBudget: string;
  message: string;
  source: string;
  createdAt: string;
  ip: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_TO_EMAIL;
  const from = process.env.LEADS_FROM_EMAIL;

  if (!resendApiKey || !to || !from) return;

  const subject = `New lead: ${lead.name} — ${lead.businessType}`;
  const text = [
    `New lead captured`,
    ``,
    `ID: ${lead.id}`,
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone ?? "-"}`,
    `Business type: ${lead.businessType}`,
    `Monthly budget: ${lead.monthlyBudget}`,
    ``,
    `Message:`,
    `${lead.message}`,
    ``,
    `Source: ${lead.source}`,
    `Created at: ${lead.createdAt}`,
    `IP: ${lead.ip}`
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text
    })
  });

  if (!res.ok) {
    // Don't fail the lead capture if email provider fails.
    const id = res.headers.get("x-request-id") ?? "unknown";
    console.warn("Lead email send failed:", { status: res.status, requestId: id });
  }
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    await checkRateLimitOrThrow(ip);

    const json = await req.json();
    const parsed = leadSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, message: "Please complete required fields correctly." }, { status: 400 });
    }

    const lead = {
      ...parsed.data,
      id: crypto.randomUUID(),
      source: "website",
      createdAt: new Date().toISOString(),
      ip
    };

    await kv.set(`lead:${lead.id}`, lead, { ex: 60 * 60 * 24 * 30 });
    await kv.lpush("leads:latest", lead.id);
    await kv.ltrim("leads:latest", 0, 199);

    await sendLeadEmail(lead);

    console.log("New lead captured:", { id: lead.id, source: lead.source, createdAt: lead.createdAt });

    return NextResponse.json({
      ok: true,
      message: "Request received. Our team will contact you within 2 business hours."
    });
  } catch (error) {
    if (error instanceof Error && error.message === "RATE_LIMITED") {
      return NextResponse.json({ ok: false, message: "Too many requests. Try again in a few minutes." }, { status: 429 });
    }
    return NextResponse.json({ ok: false, message: "Unexpected error. Please try again." }, { status: 500 });
  }
}

