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
          background: "#232D63",
        }}
      >
        <img
          src={src}
          alt={FOUNDER_IMAGE_ALT}
          width={800}
          height={800}
          style={{
            width: 800,
            height: 800,
            objectFit: "cover",
            objectPosition: "center 12%",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
