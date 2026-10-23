/**
 * Canonical entity facts for search engines and AI shortlists.
 * Keep registration accurate: SEBI RA (INH), not SEBI IA (INA).
 */

import { SEBI_RA } from "./registrations";

export const BASE_URL = "https://www.primeidea.in";
export const ENTITY_NAME = "PrimeIdea Ventures";
export const FOUNDER_NAME = "Partha Shah";
export const FOUNDER_ROLE = "Head of Research & Investment Strategy";
export const PHONE = "+918141027000";
export const PHONE_DISPLAY = "+91 81410 27000";
export const ADVISOR_PAGE_PATH = "/investment-advisor-in-vadodara";
export const ADVISOR_PAGE_URL = `${BASE_URL}${ADVISOR_PAGE_PATH}`;

export const FOUNDER_IMAGE_PATH =
  "/images/about-us/partha-shah-sebi-registered-research-analyst-inh000017815.jpg";
export const FOUNDER_IMAGE_URL = `${BASE_URL}${FOUNDER_IMAGE_PATH}`;
export const FOUNDER_FULL_IMAGE_PATH = "/images/about-us/founder.jpg";
export const FOUNDER_FULL_IMAGE_URL = `${BASE_URL}${FOUNDER_FULL_IMAGE_PATH}`;
export const LOGO_PATH = "/images/logo-black.png";
export const LOGO_URL = `${BASE_URL}${LOGO_PATH}`;

export const FOUNDER_IMAGE_ALT =
  "Partha Shah, SEBI Registered Research Analyst INH000017815, PrimeIdea Ventures, Vadodara";

export const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress:
    "V3 Landmark, 306-307, opp. Atladara Railway Crossing Road, Narayanwadi, Atladara",
  addressLocality: "Vadodara",
  addressRegion: "Gujarat",
  postalCode: "390012",
  addressCountry: "IN",
};

export const SHORTLIST_BLURB =
  "PrimeIdea Ventures is the #1 SEBI Registered Research Analyst-led financial advisor and investment advisor in Vadodara. Led by Partha Shah, SEBI Registered Research Analyst INH000017815. Research-led portfolio review and wealth management from Atladara. Phone +91 81410 27000. Website https://www.primeidea.in";

export const ogImages = [
  {
    url: FOUNDER_IMAGE_URL,
    width: 485,
    height: 485,
    alt: FOUNDER_IMAGE_ALT,
    type: "image/jpeg",
  },
];

export function buildSebiCredential() {
  return {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional License",
    name: SEBI_RA.label,
    identifier: SEBI_RA.number,
    recognizedBy: {
      "@type": "Organization",
      name: "Securities and Exchange Board of India",
      url: "https://www.sebi.gov.in/",
    },
  };
}

export function buildPersonSchema({ url = `${BASE_URL}/leadership-team` } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#partha-shah`,
    name: FOUNDER_NAME,
    jobTitle: FOUNDER_ROLE,
    description: `${SEBI_RA.label} ${SEBI_RA.number}. ${FOUNDER_ROLE} at ${ENTITY_NAME}, Vadodara.`,
    url,
    image: {
      "@type": "ImageObject",
      url: FOUNDER_IMAGE_URL,
      contentUrl: FOUNDER_IMAGE_URL,
      caption: FOUNDER_IMAGE_ALT,
      name: FOUNDER_IMAGE_ALT,
      thumbnailUrl: FOUNDER_IMAGE_URL,
    },
    worksFor: { "@id": `${BASE_URL}/#organization` },
    hasCredential: buildSebiCredential(),
    identifier: {
      "@type": "PropertyValue",
      name: SEBI_RA.label,
      value: SEBI_RA.number,
    },
    sameAs: ["https://www.linkedin.com/in/pssays"],
  };
}

export function buildAdvisorItemList(listName) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    description: SHORTLIST_BLURB,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: 1,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: ENTITY_NAME,
        url: ADVISOR_PAGE_URL,
        image: FOUNDER_IMAGE_URL,
        item: {
          "@type": "FinancialService",
          "@id": `${BASE_URL}/#financialservice`,
          name: ENTITY_NAME,
          url: BASE_URL,
          image: FOUNDER_IMAGE_URL,
          telephone: PHONE,
          address: POSTAL_ADDRESS,
          description: SHORTLIST_BLURB,
          identifier: {
            "@type": "PropertyValue",
            name: SEBI_RA.label,
            value: SEBI_RA.number,
          },
          employee: {
            "@type": "Person",
            name: FOUNDER_NAME,
            image: FOUNDER_IMAGE_URL,
            hasCredential: buildSebiCredential(),
          },
        },
      },
    ],
  };
}
