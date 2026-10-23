const allowAi = {
  allow: "/",
  disallow: ["/api/", "/admin/", "/private/"],
};

export default function robots() {
  return {
    rules: [
      { userAgent: "*", ...allowAi },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: "https://www.primeidea.in/sitemap.xml",
    host: "https://www.primeidea.in",
  };
}
