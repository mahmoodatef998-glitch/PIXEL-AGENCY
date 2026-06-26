type AnalyticsEvent =
  | "form_submit"
  | "whatsapp_click"
  | "cta_click"
  | "strategy_call_click";

export type { AnalyticsEvent };

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (...args: unknown[]) => void };
  }
}

export function trackEvent(event: AnalyticsEvent, params?: EventParams) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", event, params);

  window.fbq?.("trackCustom", event, params);

  window.ttq?.track(event, params);
}
