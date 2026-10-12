import LeadThankYou from "@/components/forms/LeadThankYou";

export const metadata = {
  title: "Insurance Review Request Received",
  robots: "noindex, nofollow",
};

export default function InsuranceThankYouPage() {
  return (
    <LeadThankYou
      title="Thank you — insurance review request received"
      description="Our team will follow up about your insurance review request. Policy terms and claims are set by the insurer — PrimeIdea does not guarantee claim outcomes."
      eventName="insurance_review_thank_you"
      eventPayload={{ form: "insurance" }}
      primaryHref="/insurance-planning"
      primaryLabel="Back to Insurance Planning"
    />
  );
}
