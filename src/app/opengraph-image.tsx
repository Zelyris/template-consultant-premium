import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/content/content";

export const alt = `${siteConfig.name} — ${siteConfig.profession}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#f4efe7", color: "#242321", padding: "72px" }}>
      <div style={{ position: "absolute", width: 510, height: 510, border: "1px solid #bd7256", borderRadius: 999, right: -110, top: -170 }} />
      <div style={{ position: "absolute", width: 330, height: 330, border: "1px solid #d8cfc3", borderRadius: 999, right: -20, top: -80 }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 62, height: 62, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #9b4f37", borderRadius: 999, color: "#9b4f37", fontSize: 25 }}>{siteConfig.monogram}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 27, fontWeight: 700 }}>{siteConfig.name}</div>
            <div style={{ marginTop: 6, color: "#6c675f", fontSize: 15, letterSpacing: 2, textTransform: "uppercase" }}>{siteConfig.profession}</div>
          </div>
        </div>
        <div style={{ maxWidth: 830, fontFamily: "Georgia", fontSize: 74, lineHeight: 1.04, letterSpacing: -3 }}>{homeContent.hero.title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#9b4f37", fontSize: 15, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
          <div style={{ width: 44, height: 1, background: "#9b4f37" }} />
          {siteConfig.contact.location}
        </div>
      </div>
    </div>,
    size,
  );
}
