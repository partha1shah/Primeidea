import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
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
    return [
      {
        source: "/legacy-inheritance-planning",
        destination: "/legacy-succession-estate-planning-india",
        permanent: true,
      },
      {
        source: "/legacy-inheritance-planning/",
        destination: "/legacy-succession-estate-planning-india",
        permanent: true,
      },
      {
        source: "/insurance",
        destination: "/insurance-planning",
        permanent: true,
      },
      {
        source: "/insurance/",
        destination: "/insurance-planning",
        permanent: true,
      },
      {
        source: "/portfolio-review-vadodara",
        destination: "/portfolio-review",
        permanent: true,
      },
      {
        source: "/portfolio-review-vadodara/",
        destination: "/portfolio-review",
        permanent: true,
      },
      {
        source: "/sebi-registered-research-analyst-vadodara",
        destination: "/sebi-registered-research-analyst",
        permanent: true,
      },
      {
        source: "/sebi-registered-research-analyst-vadodara/",
        destination: "/sebi-registered-research-analyst",
        permanent: true,
      },
      {
        source: "/mutual-fund-investment-support-vadodara",
        destination: "/mutual-fund-investment-support",
        permanent: true,
      },
      {
        source: "/mutual-fund-investment-support-vadodara/",
        destination: "/mutual-fund-investment-support",
        permanent: true,
      },
      {
        source: "/fixed-income-investments-vadodara",
        destination: "/fixed-income-investments",
        permanent: true,
      },
      {
        source: "/fixed-income-investments-vadodara/",
        destination: "/fixed-income-investments",
        permanent: true,
      },
      {
        source: "/retirement-planning-vadodara",
        destination: "/retirement-planning",
        permanent: true,
      },
      {
        source: "/retirement-planning-vadodara/",
        destination: "/retirement-planning",
        permanent: true,
      },
      {
        source: "/insurance-planning-vadodara",
        destination: "/insurance-planning",
        permanent: true,
      },
      {
        source: "/insurance-planning-vadodara/",
        destination: "/insurance-planning",
        permanent: true,
      },
      {
        source: "/direct-mutual-fund-apps-vs-portfolio-review",
        destination: "/comparisons/direct-mutual-fund-apps-vs-portfolio-review",
        permanent: true,
      },
      {
        source: "/direct-mutual-fund-apps-vs-portfolio-review/",
        destination: "/comparisons/direct-mutual-fund-apps-vs-portfolio-review",
        permanent: true,
      },
      {
        source: "/regular-plan-vs-direct-plan-mutual-funds",
        destination: "/comparisons/regular-plan-vs-direct-plan-mutual-funds",
        permanent: true,
      },
      {
        source: "/regular-plan-vs-direct-plan-mutual-funds/",
        destination: "/comparisons/regular-plan-vs-direct-plan-mutual-funds",
        permanent: true,
      },
      {
        source: "/financial-planner-vs-wealth-manager-vadodara",
        destination: "/comparisons/financial-planner-vs-wealth-manager-vadodara",
        permanent: true,
      },
      {
        source: "/financial-planner-vs-wealth-manager-vadodara/",
        destination: "/comparisons/financial-planner-vs-wealth-manager-vadodara",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
