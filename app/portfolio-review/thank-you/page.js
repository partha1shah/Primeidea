import LeadThankYou from "@/components/forms/LeadThankYou";

export const metadata = {
  title: "Portfolio Review Request Received",
  robots: "noindex, nofollow",
};

export default function PortfolioReviewThankYouPage() {
  return (
    <LeadThankYou
      title="Thank you — portfolio review request received"
      description="Our team will review your submission and follow up shortly. This is a research-led portfolio review request — not a guarantee of investment returns."
      eventName="portfolio_review_thank_you"
      eventPayload={{ form: "portfolio_review" }}
      primaryHref="/book-portfolio-review"
      primaryLabel="Book a consultation slot"
      secondaryHref="/portfolio-review"
      secondaryLabel="Back to Portfolio Review"
    />
  );
}
