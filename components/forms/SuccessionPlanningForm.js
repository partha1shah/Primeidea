"use client";

import ScopeLeadForm from "@/components/forms/ScopeLeadForm";
import { CF7_FORM_IDS } from "@/lib/cf7Submit";

const EXTRA_FIELDS = [
  {
    name: "needType",
    label: "Need type",
    type: "select",
    required: true,
    options: [
      "Will",
      "Trust",
      "Succession certificate",
      "Probate",
      "Property transfer",
      "Gift deed",
      "Power of attorney",
      "HUF",
      "Family settlement",
    ],
  },
  {
    name: "urgency",
    label: "Urgency",
    type: "select",
    required: false,
    options: ["Exploring", "Needed in 1–3 months", "Urgent / time-bound", "Not sure"],
  },
  {
    name: "preferredMode",
    label: "Preferred mode",
    type: "select",
    required: false,
    options: ["Office visit (Vadodara)", "Video call", "Phone callback"],
  },
];

export default function SuccessionPlanningForm() {
  return (
    <ScopeLeadForm
      formId={CF7_FORM_IDS.succession}
      title={
        <>
          Book a{" "}
          <strong className="font-semibold">succession planning</strong>{" "}
          consultation
        </>
      }
      description="Select the need type. PrimeIdea coordinates with qualified legal/service partners — partner name and pricing are not listed on this website."
      disclaimer="Legal drafting, registration, probate, and related opinions are handled by qualified professionals. PrimeIdea does not act as an independent law firm."
      submitLabel="Book Succession Planning Consultation"
      successMessage="Thank you. Your succession planning request has been received. We will get back to you soon."
      eventName="succession_planning_form_submit"
      extraFields={EXTRA_FIELDS}
    />
  );
}
