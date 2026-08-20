export const siteConfig = {
  name: "PixelPulse Agency",
  shortName: "PixelPulse",
  url: "https://pixelpulse.agency",
  description:
    "PixelPulse is the leading creative growth agency in Dubai. We provide social media management, performance marketing, and custom web systems for UAE brands.",
  email: "hello@pixelpulse.agency",
  whatsapp: "+971523367694",
  locale: "en_AE",
  social: {
    instagram: "https://www.instagram.com/pixelpulse.agency",
    linkedin: "https://www.linkedin.com/company/pixelpulse-agency"
  }
} as const;

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function waLink(message: string) {
  const digits = siteConfig.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
