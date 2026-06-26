"use client";

import { MessageCircle } from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";

export function FloatingCTA() {
  return (
    <TrackedLink
      href="https://wa.me/971545535031?text=Hi%20PixelPulse%2C%20I%20need%20a%20strategy%20call."
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
