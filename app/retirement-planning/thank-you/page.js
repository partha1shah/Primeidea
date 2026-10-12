import LeadThankYou from "@/components/forms/LeadThankYou";

export const metadata = {
  title: "Retirement Planning Request Received",
  robots: "noindex, nofollow",
};

export default function RetirementThankYouPage() {
  return (
    <LeadThankYou
      title="Thank you — retirement planning request received"
      description="Our team will review your retirement goal and follow up for a research-led discussion — office in Vadodara or video across Gujarat and India. No guaranteed corpus or returns."
      eventName="retirement_planning_thank_you"
      eventPayload={{ form: "retirement" }}
      primaryHref="/retirement-planning"
      primaryLabel="Back to Retirement Planning"
    />
  );
}
