/**
 * Canonical registration & distribution credentials for PrimeIdea Ventures.
 * Shown in Equitywala-style blocks on About, Regulatory Disclosures, and Footer.
 */

export const SEBI_RA = {
  label: "SEBI Registered Research Analyst",
  number: "INB010653732",
  validity: "Apr 05, 2024 - Jan 01, 2027",
};

export const AMFI_MF = {
  label: "AMFI Registered Mutual Fund Distributor",
  number: "ARN-109345",
  initialRegistration: "15 Apr 2017",
  validity: "11 Sep 2026 to 31 Dec 2029",
};

export const AMFI_SIF = {
  label: "AMFI Registered SIF Distributor",
  number: "EUIN No. E655130",
  validity: "30 October 2025 to 31 Dec 2026",
};

export const PMS_DISTRIBUTION = {
  label: "PMS Distribution",
  number: "APRN No. APRN02764",
  validity: "19 Sep 2026 To 25 Dec 2029",
  partner: "Authorised Partner Religare Broking : AP0130040153084",
};

export const SEBI_LINKS = [
  {
    label: "SEBI Mutual Fund Filings",
    href: "https://www.sebi.gov.in/filings/mutual-funds.html",
  },
  {
    label: "SEBI Intermediaries Listing",
    href: "https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=1&ssid=7&smid=0",
  },
];

export const PRODUCT_ACCESS = [
  "Mutual Funds",
  "Portfolio Management Services (PMS)",
  "Alternative Investment Funds (AIF)",
  "Specialised Investment Funds (SIF)",
  "Direct Equity research support",
  "Fixed Income",
];

export const IDENTITY_SHORT =
  "PrimeIdea Ventures is a Vadodara-based research-led wealth management firm and distributor of financial products — mutual funds, PMS, AIF, SIF, and related investment solutions — serving investors across Gujarat, India, and worldwide.";

export const DISCLOSURE_SHORT =
  "Investments in Stocks, Mutual Funds, PMS, AIF, SIF and other market-linked products are subject to market risks. Please read all scheme-related documents carefully before investing. PrimeIdea Ventures does not guarantee returns.";

/** Equitywala-style plain lines for footer / disclosure copy */
export function getRegistrationLines() {
  return [
    `${SEBI_RA.label} - ${SEBI_RA.number}`,
    `Validity – ${SEBI_RA.validity}`,
    "",
    `${AMFI_MF.label} | ${AMFI_MF.number}`,
    `Date of initial Registration: ${AMFI_MF.initialRegistration} | Current validity: ${AMFI_MF.validity}`,
    "",
    `${AMFI_SIF.label} ${AMFI_SIF.number}`,
    `Current Validity: ${AMFI_SIF.validity}`,
    "",
    `${PMS_DISTRIBUTION.label} ${PMS_DISTRIBUTION.number}`,
    `Current Validity: ${PMS_DISTRIBUTION.validity}`,
    PMS_DISTRIBUTION.partner,
  ];
}

export const REGISTRATION_BLOCKS = [
  {
    shortLabel: "SEBI RA",
    title: SEBI_RA.label,
    number: SEBI_RA.number,
    meta: [`Validity – ${SEBI_RA.validity}`],
    lines: [`${SEBI_RA.number}`, `Validity – ${SEBI_RA.validity}`],
  },
  {
    shortLabel: "AMFI MF",
    title: AMFI_MF.label,
    number: AMFI_MF.number,
    meta: [
      `Initial registration: ${AMFI_MF.initialRegistration}`,
      `Validity: ${AMFI_MF.validity}`,
    ],
    lines: [
      AMFI_MF.number,
      `Date of initial Registration: ${AMFI_MF.initialRegistration}`,
      `Current validity: ${AMFI_MF.validity}`,
    ],
  },
  {
    shortLabel: "AMFI SIF",
    title: AMFI_SIF.label,
    number: AMFI_SIF.number,
    meta: [`Validity: ${AMFI_SIF.validity}`],
    lines: [AMFI_SIF.number, `Current Validity: ${AMFI_SIF.validity}`],
  },
  {
    shortLabel: "PMS",
    title: PMS_DISTRIBUTION.label,
    number: PMS_DISTRIBUTION.number,
    meta: [
      `Validity: ${PMS_DISTRIBUTION.validity}`,
      PMS_DISTRIBUTION.partner,
    ],
    lines: [
      PMS_DISTRIBUTION.number,
      `Current Validity: ${PMS_DISTRIBUTION.validity}`,
      PMS_DISTRIBUTION.partner,
    ],
  },
];
