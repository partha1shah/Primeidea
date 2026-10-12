import LeadThankYou from "@/components/forms/LeadThankYou";

export const metadata = {
  title: "Succession Planning Request Received",
  robots: "noindex, nofollow",
};

export default function SuccessionThankYouPage() {
  return (
    <LeadThankYou
      title="Thank you — succession planning request received"
      description="Our team will follow up about partner-enabled succession coordination. Legal drafting and related opinions are handled by qualified professionals — not by PrimeIdea as a law firm."
      eventName="succession_planning_thank_you"
      eventPayload={{ form: "succession" }}
      primaryHref="/legacy-succession-estate-planning-india"
      primaryLabel="Back to Succession Planning"
    />
  );
}
