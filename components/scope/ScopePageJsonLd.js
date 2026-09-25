export default function ScopePageJsonLd({ data }) {
  if (!data) return null;

  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data.map((item) => {
        const { "@context": _context, ...rest } = item;
        return rest;
      }) }
    : data;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export function buildBreadcrumbJsonLd(items) {
  const baseUrl = "https://www.primeidea.in";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
      })),
    ],
  };
}

export function buildFaqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof faq.answer === "string" ? faq.answer : faq.plainText || "",
      },
    })),
  };
}
