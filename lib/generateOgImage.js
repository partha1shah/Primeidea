import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { FOUNDER_IMAGE_ALT } from "@/data/geoEntity";

export const alt = FOUNDER_IMAGE_ALT;
export const size = { width: 800, height: 800 };
export const contentType = "image/png";

export default async function generateOgImage() {
  const photo = await readFile(
    join(
      process.cwd(),
      "public/images/about-us/partha-shah-sebi-registered-research-analyst-inh000017815.jpg"
    )
  );
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#232D63",
        }}
      >
        <img
          src={src}
          alt={FOUNDER_IMAGE_ALT}
          width={800}
          height={720}
          style={{
            width: 800,
            height: 720,
            objectFit: "cover",
            objectPosition: "center 12%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: 80,
            padding: "0 24px",
            background: "#293C7D",
            color: "#FFC300",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          Partha Shah · PrimeIdea Ventures
        </div>
      </div>
    ),
    { ...size }
  );
}
