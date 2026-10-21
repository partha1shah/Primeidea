"use client";

import ScopeLeadForm from "@/components/forms/ScopeLeadForm";
import { CF7_FORM_IDS } from "@/lib/cf7Submit";

const CONSENT_TEXT =
  "I agree to receive communication from PrimeIdea Ventures regarding PrimeIdea Research Privilege Club, research subscription services, portfolio review, and investor education.";

const EXTRA_FIELDS = [
  {
    name: "investorType",
    label: "Investor type",
    type: "select",
    required: true,
    options: [
      "Retail investor",
      "SIP investor",
      "Mutual fund investor",
      "Salaried professional",
      "Business owner",
      "Young professional",
      "HNI investor",
      "Retiree",
      "NRI",
      "Other",
    ],
  },
  {
    name: "portfolioSize",
    label: "Approximate portfolio size",
    type: "select",
    required: false,
    options: [
      "Under ₹25 lakh",
      "₹25 lakh – ₹50 lakh",
      "₹50 lakh – ₹1 crore",
      "₹1 – ₹3 crore",
      "Above ₹3 crore",
      "Prefer not to say",
    ],
  },
  {
    name: "existingProducts",
    label: "Existing investment products",
    type: "checkbox",
    required: false,
    options: [
      "Mutual funds / SIP",
      "Direct equity",
      "ETF / index funds",
      "Fixed income / debt funds",
      "PMS / SIF / AIF",
      "Insurance-linked",
      "Other",
    ],
  },
  {
    name: "preferredCallback",
    label: "Preferred callback time",
    type: "select",
    required: false,
    options: [
      "Morning (9 am – 12 pm)",
      "Afternoon (12 pm – 4 pm)",
      "Evening (4 pm – 7 pm)",
      "Any time on weekdays",
      "Weekend only",
    ],
  },
];

export default function ResearchPrivilegeClubForm() {
  return (
    <ScopeLeadForm
      formId={CF7_FORM_IDS.researchPrivilegeClub}
      sectionId="privilege-club-enquiry"
      title={
        <>
          Join the{" "}
          <strong className="font-semibold">Research Privilege Club</strong>
        </>
      }
      description="Submit a subscription enquiry. The PrimeIdea team will contact you for offline KYC, suitability understanding, payment process, and subscription activation."
      disclaimer="Annual subscription: INR 18,000 per annum. Taxes, invoice terms, and payment process are shared during onboarding. No guaranteed returns."
      submitLabel="Submit Subscription Enquiry"
      successMessage="Thank you. Your Research Privilege Club enquiry has been received."
      eventName="research_privilege_club_form_submit"
      thankYouPath="/primeidea-research-privilege-club/thank-you"
      extraFields={EXTRA_FIELDS}
      messageLabel="Main requirement"
      messagePlaceholder="Portfolio review, rebalancing, mutual fund ideas, or other research needs"
      messageRequired
      consentText={CONSENT_TEXT}
      hiddenFields={{
        interestedIn: "Research Privilege Club",
      }}
      formEyebrow="Subscription enquiry"
      sectionClassName="relative overflow-hidden bg-gradient-to-b from-[#232D63] to-[#293C7D] py-14 md:py-16 scroll-mt-28"
      formTheme="dark"
    />
  );
}
