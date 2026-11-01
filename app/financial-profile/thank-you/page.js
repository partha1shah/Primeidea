import LeadThankYou from "@/components/forms/LeadThankYou";

export const metadata = {
  title: "Financial Profile Received",
  robots: "noindex, nofollow",
};

export default function FinancialProfileThankYouPage() {
  return (
    <LeadThankYou
      title="Thank you — your financial profile has been received"
      description="Our team will review your responses and follow up for a suitability conversation. This questionnaire is for discussion only and does not guarantee returns."
      eventName="financial_profile_thank_you"
      eventPayload={{ form: "financial-profile" }}
      primaryHref="/financial-profile"
      primaryLabel="Back to Financial Profile"
    />
  );
}
