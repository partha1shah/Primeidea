"use client";

import ScopeLeadForm from "@/components/forms/ScopeLeadForm";
import { CF7_FORM_IDS } from "@/lib/cf7Submit";

const EXTRA_FIELDS = [
  {
    name: "insuranceType",
    label: "Insurance type(s)",
    type: "checkbox",
    required: true,
    options: [
      "Term life",
      "Health",
      "Critical illness",
      "Personal accident",
      "ULIP / endowment review",
      "Other",
    ],
  },
  {
    name: "coverNeed",
    label: "Cover need",
    type: "select",
    required: true,
    options: [
      "New cover",
      "Increase cover",
      "Review existing policies",
      "Claim / service help",
      "Not sure",
    ],
  },
  {
    name: "familySize",
    label: "Family size",
    type: "select",
    required: false,
    options: [
      "Self",
      "Self + spouse",
      "Self + spouse + children",
      "Parents included",
      "Prefer not to say",
    ],
  },
  {
    name: "annualIncome",
    label: "Annual income band",
    type: "select",
    required: false,
    options: [
      "Under ₹10 lakh",
      "₹10–25 lakh",
      "₹25–50 lakh",
      "Above ₹50 lakh",
      "Prefer not to say",
    ],
  },
];

export default function InsuranceReviewForm() {
  return (
    <ScopeLeadForm
      formId={CF7_FORM_IDS.insurance}
      title={
        <>
          Request an{" "}
          <strong className="font-semibold">insurance review</strong>
        </>
      }
      description="Tell us what you want reviewed — life, health, or existing policies. Suitability-first, without product-push language."
      disclaimer="Policy terms, underwriting, and claims are set by the insurer. PrimeIdea does not guarantee claim outcomes."
      submitLabel="Submit Insurance Review Request"
      successMessage="Thank you. Your insurance review request has been received. We will get back to you soon."
      eventName="insurance_review_form_submit"
      extraFields={EXTRA_FIELDS}
    />
  );
}
