"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import {
  ArrowUpIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const IDENTITY_LINE =
  "PrimeIdea Ventures is a Vadodara-based research-led wealth management and portfolio review firm serving investors across Gujarat and India, with a research process guided by Partha Shah, SEBI Registered Research Analyst INH000017815.";

const DISCLOSURE_SHORT =
  "Investments in the securities market are subject to market risks. PrimeIdea Ventures does not guarantee returns.";

const SERVICE_LINKS = [
  {
    header: "Planning",
    links: [
      { href: "/financial-planning-and-investment-advisory", label: "Financial Planning & Advisory" },
      { href: "/research-based-wealth-management", label: "Research-Based Wealth Management" },
      { href: "/retirement-planning", label: "Retirement Planning" },
      { href: "/legacy-succession-estate-planning-india", label: "Legacy, Succession & Estate" },
      { href: "/tax-planning-savings", label: "Tax Planning & Savings" },
      { href: "/insurance-planning", label: "Insurance Planning" },
    ],
  },
  {
    header: "Investments",
    links: [
      { href: "/mutual-fund-investment-support", label: "Mutual Fund Support" },
      { href: "/fixed-income-investments", label: "Fixed Income" },
      { href: "/pms-aif-sif-investment-support-gujarat-india", label: "PMS, AIF & SIF Support" },
      { href: "/nri-investment-support-india", label: "NRI Investment Support" },
      { href: "/private-wealth-management-gujarat-india", label: "Private Wealth" },
      { href: "/family-wealth-office-gujarat-india", label: "Family Wealth Office" },
    ],
  },
];

const EXPLORE_LINKS = [
  { href: "/about-us", label: "About Us" },
  { href: "/primeidea-ventures-profile", label: "Entity Profile" },
  { href: "/leadership-team", label: "Leadership" },
  { href: "/portfolio-review", label: "Portfolio Review" },
  { href: "/book-portfolio-review", label: "Book Portfolio Review" },
  { href: "/wealth-tools", label: "Wealth Tools" },
  { href: "/knowledge-centre", label: "Knowledge Centre" },
  { href: "/comparisons", label: "Comparisons" },
  { href: "/research-reports", label: "Research Reports" },
  { href: "/blogs", label: "Blogs" },
  { href: "/become-a-partner", label: "Become a Partner" },
  { href: "/careers", label: "Careers" },
];

const REGULATORY_LINKS = [
  { href: "/regulatory-disclosures", label: "Regulatory Disclosures" },
  { href: "/regulatory-disclosures#investor-charter", label: "Investor Charter" },
  { href: "/regulatory-disclosures#complaint-status", label: "Complaint Status" },
  { href: "/regulatory-disclosures#disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/regulatory-disclosures#risk-disclosure", label: "Risk Disclosure" },
  { href: "/regulatory-disclosures#grievance-redressal", label: "Grievance" },
  { href: "/contact-us", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/primeidea",
    src: "/images/footer/icons/facebook.svg",
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/primeidea/",
    src: "/images/footer/icons/linkedin.svg",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/primeidea/",
    src: "/images/footer/icons/instagram.svg",
    label: "Instagram",
  },
];

const Footer = () => {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const button = document.getElementById("back_top");
    if (!button) return undefined;

    button.addEventListener("click", handleScrollToTop);
    return () => button.removeEventListener("click", handleScrollToTop);
  }, []);

  return (
    <footer className="site-footer relative overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#232D63] via-[#293C7D] to-[#3E6F9A] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center opacity-[0.06] pointer-events-none" aria-hidden="true" />
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FFC300] to-transparent relative z-10" aria-hidden="true" />

      <div className="relative z-10">
        <div className="mx-auto px-4 sm:px-6 lg:max-w-[1024px] xl:max-w-[1170px] 2xl:max-w-[1340px]">
          <div className="flex items-center justify-end pt-6 pb-2">
            <button
              type="button"
              id="back_top"
              aria-label="Back to top"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm transition-all hover:border-[#FFC300]/60 hover:bg-white/10 hover:text-white"
            >
              Back to top
              <ArrowUpIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-12 pb-14 pt-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-10 lg:pb-16 lg:pt-2 xl:gap-x-12">
            <FadeUpOneByOneAnimation className="lg:col-span-4 xl:col-span-3">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#293C7D]/90 to-[#232D63]/95 p-6 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.45)] md:p-7">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#479AD2]/20 blur-2xl" aria-hidden="true" />

                <Link href="/" className="relative mb-6 inline-block max-w-[220px]">
                  <Image
                    src="/images/logo-white.png"
                    width={260}
                    height={58}
                    alt="PrimeIdea Ventures"
                    className="h-auto w-full"
                  />
                </Link>

                <p className="footer-body relative mb-6 text-[13px] leading-[1.65] md:text-sm">
                  {IDENTITY_LINE}
                </p>

                <ul className="relative m-0 mb-6 space-y-3.5 p-0 list-none">
                  <li className="footer-body flex gap-3 text-[13px] leading-snug">
                    <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC300]" aria-hidden="true" />
                    <a
                      href="tel:+918141027000"
                      className="footer-link font-medium"
                    >
                      +91 81410 27000
                    </a>
                  </li>
                  <li className="footer-body flex gap-3 text-[13px] leading-snug">
                    <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#FFC300]" aria-hidden="true" />
                    <span>
                      V3 Landmark, 306-307, Atladara, Vadodara, Gujarat 390012
                    </span>
                  </li>
                </ul>

                <div className="relative mb-6 flex flex-wrap gap-2">
                  <FooterCta href="/contact-us" label="Contact Us" />
                  <FooterCta href="/book-portfolio-review" label="Book Review" primary />
                </div>

                <div className="relative mb-6 inline-flex items-center gap-2.5 rounded-xl border border-[#FFC300]/25 bg-[#232D63]/60 px-3.5 py-2.5">
                  <ShieldCheckIcon className="h-5 w-5 text-[#FFC300]" aria-hidden="true" />
                  <div>
                    <p className="footer-sebi-label text-[10px] font-semibold uppercase tracking-[0.14em]">
                      SEBI Registered Research Analyst
                    </p>
                    <p className="footer-body text-sm font-semibold tabular-nums tracking-wide">
                      INH000017815
                    </p>
                  </div>
                </div>

                <div className="relative border-t border-white/10 pt-5">
                  <p className="footer-muted mb-3 text-[10px] font-semibold uppercase tracking-[0.14em]">
                    Mobile apps
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.primeidea.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-95 transition-opacity hover:opacity-100"
                    >
                      <Image
                        src="/images/Google_Play_Store.png"
                        width={118}
                        height={35}
                        alt="Get it on Google Play"
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/us/app/primeidea/id6745963533?platform=iphone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-95 transition-opacity hover:opacity-100"
                    >
                      <Image
                        src="/images/App_Store_Badge.png"
                        width={118}
                        height={35}
                        alt="Download on the App Store"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </FadeUpOneByOneAnimation>

            <FadeUpOneByOneAnimation className="lg:col-span-4 xl:col-span-4 lg:border-l lg:border-white/10 lg:pl-8 xl:pl-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
                {SERVICE_LINKS.map((group) => (
                  <LinkGroup key={group.header} header={group.header}>
                    {group.links.map((item) => (
                      <NavLink key={item.href} link={item.href} label={item.label} />
                    ))}
                  </LinkGroup>
                ))}
              </div>
            </FadeUpOneByOneAnimation>

            <FadeUpOneByOneAnimation className="lg:col-span-2 xl:col-span-2 lg:border-l lg:border-white/10 lg:pl-8 xl:pl-10">
              <LinkGroup header="Explore">
                {EXPLORE_LINKS.map((item) => (
                  <NavLink key={item.href} link={item.href} label={item.label} />
                ))}
              </LinkGroup>
            </FadeUpOneByOneAnimation>

            <FadeUpOneByOneAnimation className="lg:col-span-2 xl:col-span-3 lg:border-l lg:border-white/10 lg:pl-8 xl:pl-10">
              <LinkGroup header="Regulatory & Disclosures">
                {REGULATORY_LINKS.map((item) => (
                  <NavLink key={item.label} link={item.href} label={item.label} />
                ))}
              </LinkGroup>
            </FadeUpOneByOneAnimation>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-[#232D63]/95 backdrop-blur-sm">
        <div className="mx-auto px-4 py-6 sm:px-6 lg:max-w-[1024px] xl:max-w-[1170px] 2xl:max-w-[1340px]">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
            <ul className="m-0 flex list-none items-center gap-4 p-0">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-white/5 p-2 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
                    aria-label={item.label}
                  >
                    <Image src={item.src} alt="" width={22} height={22} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="footer-body text-center text-[11px] leading-relaxed md:text-xs lg:text-left">
              <span className="font-semibold text-white">SEBI RA INH000017815</span>
              <span className="mx-2 hidden text-white/40 sm:inline">|</span>
              <span className="block sm:inline mt-1 sm:mt-0">{DISCLOSURE_SHORT}</span>{" "}
              <Link href="/regulatory-disclosures" className="footer-link-accent font-medium underline underline-offset-2">
                View disclosures
              </Link>
            </p>

            <p className="footer-muted text-center text-[11px] md:text-xs lg:text-right">
              © {new Date().getFullYear()} PrimeIdea Ventures. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function FooterCta({ href, label, primary = false }) {
  const className = primary
    ? "footer-cta-primary inline-flex items-center justify-center rounded-lg bg-[#FFC300] px-4 py-2 text-[13px] font-bold transition-colors hover:bg-white"
    : "footer-cta-secondary inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-4 py-2 text-[13px] font-semibold transition-colors hover:border-white/50 hover:bg-white/10";

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

const LinkGroup = ({ children, header }) => (
  <div className="min-h-0">
    <h4 className="footer-heading mb-4 border-b border-white/12 pb-2.5 text-[11px] font-bold uppercase tracking-[0.18em]">
      {header}
    </h4>
    <ul className="m-0 space-y-2 p-0 list-none">{children}</ul>
  </div>
);

const NavLink = ({ link, label }) => (
  <li>
    <Link href={link} className="footer-nav-link group inline-flex text-[13px] leading-snug md:text-[14px]">
      <span className="border-l-2 border-transparent pl-0 transition-all group-hover:border-[#FFC300] group-hover:pl-2">
        {label}
      </span>
    </Link>
  </li>
);
