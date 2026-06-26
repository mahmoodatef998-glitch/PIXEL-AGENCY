"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ThankYouTracker() {
  useEffect(() => {
    trackEvent("form_submit", { stage: "thank_you_page" });
  }, []);

  return null;
}
