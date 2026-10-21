import path from "path";
import { fileURLToPath } from "url";
import "./env.mjs";

const projectDir = path.dirname(fileURLToPath(import.meta.url));
const modernPolyfill = path.join(projectDir, "lib/modern-polyfill.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./lib/modern-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./lib/modern-polyfill.js",
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": modernPolyfill,
        "next/dist/build/polyfills/polyfill-module": modernPolyfill,
      };
    }
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.primeidea.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "login.primeidea.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "verification.primeidea.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    const permanentPairs = [
      ["/legacy-inheritance-planning", "/legacy-succession-estate-planning-india"],
      ["/insurance", "/insurance-planning"],
      ["/retirement", "/retirement-planning"],
      ["/portfolio-review-vadodara", "/portfolio-review"],
      ["/sebi-registered-research-analyst-vadodara", "/sebi-registered-research-analyst"],
      ["/mutual-fund-investment-support-vadodara", "/mutual-fund-investment-support"],
      ["/fixed-income-investments-vadodara", "/fixed-income-investments"],
      ["/retirement-planning-vadodara", "/retirement-planning"],
      ["/insurance-planning-vadodara", "/insurance-planning"],
      [
        "/research-analyst-vs-investment-adviser-vs-mfd",
        "/comparisons/research-analyst-vs-investment-adviser-vs-mfd",
      ],
      ["/pms-vs-mutual-funds", "/comparisons/pms-vs-mutual-funds"],
      ["/aif-vs-pms-vs-mutual-funds", "/comparisons/aif-vs-pms-vs-mutual-funds"],
      ["/sip-vs-lumpsum-vs-stp", "/comparisons/sip-vs-lumpsum-vs-stp"],
      [
        "/direct-mutual-fund-apps-vs-portfolio-review",
        "/comparisons/direct-mutual-fund-apps-vs-portfolio-review",
      ],
      [
        "/regular-plan-vs-direct-plan-mutual-funds",
        "/comparisons/regular-plan-vs-direct-plan-mutual-funds",
      ],
      [
        "/financial-planner-vs-wealth-manager-vadodara",
        "/comparisons/financial-planner-vs-wealth-manager-vadodara",
      ],
      [
        "/research-privilege-club",
        "/primeidea-research-privilege-club",
      ],
    ];

    return permanentPairs.flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `${source}/`, destination, permanent: true },
    ]);
  },
};

export default nextConfig;
