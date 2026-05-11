import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  businessType: z.string().min(2),
  monthlyBudget: z.string().min(2),
  message: z.string().min(8)
});

const inMemoryRateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const max = 6;

  const current = inMemoryRateLimit.get(ip);
  if (!current || now > current.resetAt) {
    inMemoryRateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (current.count >= max) return false;
  current.count += 1;
  inMemoryRateLimit.set(ip, current);
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ ok: false, message: "Too many requests. Try again in a few minutes." }, { status: 429 });
    }

    const json = await req.json();
    const parsed = leadSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, message: "Please complete required fields correctly." }, { status: 400 });
    }

    // Production integration point:
    // - HubSpot / Zoho / Google Sheets / Notion
    // - Email notifications (Resend/SendGrid)
    // - CRM pipeline assignment
    const lead = {
      ...parsed.data,
      source: "website",
      createdAt: new Date().toISOString(),
      ip
    };

    console.log("New lead captured:", lead);

    return NextResponse.json({
      ok: true,
      message: "Request received. Our team will contact you within 2 business hours."
    });
  } catch {
    return NextResponse.json({ ok: false, message: "Unexpected error. Please try again." }, { status: 500 });
  }
}

