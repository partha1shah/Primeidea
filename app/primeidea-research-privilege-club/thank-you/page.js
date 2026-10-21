import LeadThankYou from "@/components/forms/LeadThankYou";

export const metadata = {
  title: "Research Privilege Club Enquiry Received",
  robots: "noindex, nofollow",
};

export default function ResearchPrivilegeClubThankYouPage() {
  return (
    <LeadThankYou
      title="Thank you — Research Privilege Club enquiry received"
      description="The PrimeIdea team will contact you for offline KYC, suitability understanding, payment process, and subscription activation. Research views are subject to market risks — "
      eventName="research_privilege_club_thank_you"
      eventPayload={{ form: "research_privilege_club" }}
      primaryHref="/primeidea-research-privilege-club"
      primaryLabel="Back to Research Privilege Club"
      secondaryHref="/research-reports"
      secondaryLabel="Browse Research Reports"
    />
  );
}
