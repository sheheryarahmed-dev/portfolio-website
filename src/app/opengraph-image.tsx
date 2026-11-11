import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = "Sheheryar Ahmed — Software Engineer & Backend Specialist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#031A32",
        color: "#F5F2EC",
        display: "flex",
        height: "100%",
        padding: "80px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            color: "#FF523D",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 2,
          }}
        >
          PORTFOLIO
        </div>
        <div style={{ fontSize: 68, fontWeight: 700 }}>
          {siteConfig.person.name}
        </div>
        <div style={{ color: "#C6CFDA", fontSize: 32 }}>
          {siteConfig.person.title}
        </div>
      </div>
    </div>,
    size,
  );
}
