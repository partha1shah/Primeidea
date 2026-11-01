import LeadThankYou from "@/components/forms/LeadThankYou";

export const metadata = {
  title: "Risk Assessment Received",
  robots: "noindex, nofollow",
};

export default function RiskAssessmentThankYouPage() {
  return (
    <LeadThankYou
      title="Thank you — your risk assessment has been received"
      description="Our team will review your indicative profile and follow up for a suitability discussion. This assessment is not investment advice and does not guarantee returns."
      eventName="risk_assessment_thank_you"
      eventPayload={{ form: "risk-assessment" }}
      primaryHref="/risk-assessment"
      primaryLabel="Back to Risk Assessment"
    />
  );
}
