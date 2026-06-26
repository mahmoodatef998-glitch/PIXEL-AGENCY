import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #080C14 0%, #0F1520 45%, #121a28 100%)",
          color: "#F0F4FF"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#00E5FF",
              boxShadow: "0 0 24px rgba(0,229,255,0.8)"
            }}
          />
          <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>PixelPulse</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: 900
            }}
          >
            Creative growth agency in Dubai
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#94A3B8", maxWidth: 820 }}>
            Marketing + systems + automation for UAE brands
          </div>
        </div>
      </div>
    ),
    size
  );
}
