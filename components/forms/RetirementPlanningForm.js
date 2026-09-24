"use client";

import ScopeLeadForm from "@/components/forms/ScopeLeadForm";
import { CF7_FORM_IDS } from "@/lib/cf7Submit";

const EXTRA_FIELDS = [
  {
    name: "retirementGoal",
    label: "Retirement goal",
    type: "select",
    required: true,
    options: [
      "Retirement corpus planning",
      "Income / withdrawal planning",
      "Allocation review",
      "NPS / pension review",
      "Other",
    ],
  },
  {
    name: "ageBand",
    label: "Age band",
    type: "select",
    required: false,
    options: ["Under 35", "35–45", "46–55", "56–65", "Above 65", "Prefer not to say"],
  },
  {
    name: "targetRetirementAge",
    label: "Target retirement age",
    type: "select",
    required: false,
    options: ["Before 50", "50–55", "56–60", "61–65", "After 65", "Not sure"],
  },
  {
    name: "corpusRange",
    label: "Approximate corpus range",
    type: "select",
    required: false,
    options: [
      "Under ₹50 lakh",
      "₹50 lakh – ₹1 crore",
      "₹1–3 crore",
      "Above ₹3 crore",
      "Prefer not to say",
    ],
  },
];

export default function RetirementPlanningForm() {
  return (
    <ScopeLeadForm
      formId={CF7_FORM_IDS.retirement}
      title={
        <>
          Start a{" "}
          <strong className="font-semibold">retirement planning</strong> request
        </>
      }
      description="Share your retirement goal and basic details. We will follow up for a research-led review from Vadodara — office or video across Gujarat and India."
      disclaimer="Projections are working assumptions, not promises. Market risks apply. No guaranteed corpus or returns."
      submitLabel="Submit Retirement Planning Request"
      successMessage="Thank you. Your retirement planning request has been received. We will get back to you soon."
      eventName="retirement_planning_form_submit"
      extraFields={EXTRA_FIELDS}
    />
  );
}
