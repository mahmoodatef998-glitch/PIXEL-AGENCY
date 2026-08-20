"use client";

import { MessageCircle } from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";
import { waLink } from "@/lib/site-config";

export function FloatingCTA() {
  return (
    <TrackedLink
      href={waLink("Hi PixelPulse, I need a strategy call.")}
      target="_blank"
      rel="noopener noreferrer"
      event="whatsapp_click"
      eventParams={{ location: "floating_cta" }}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-black shadow-xl transition hover:brightness-110"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="size-4" />
      WhatsApp
    </TrackedLink>
  );
}
