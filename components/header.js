"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceGroups = [
  {
    heading: "Research & Investing",
    items: [
      {
        name: "Portfolio Review",
        description: "Independent health check of your holdings",
        href: "/portfolio-review-vadodara",
      },
      {
        name: "Mutual Fund Investment Support",
        description: "Scheme selection, review and rebalancing",
        href: "/mutual-fund-investment-support-vadodara",
      },
      {
        name: "Direct Equity Research Support",
        description: "Research-backed equity decisions",
        href: "/research-based-wealth-management",
      },
      {
        name: "PMS, AIF and SIF Support",
        description: "Evaluating managed and alternate strategies",
        href: "/pms-aif-sif-investment-support-gujarat-india",
      },
    ],
  },
  {
    heading: "Wealth Management",
    items: [
      {
        name: "Private Wealth Management",
        description: "Structured portfolios for large families",
        href: "/private-wealth-management-gujarat-india",
      },
      {
        name: "Family Wealth Office",
        description: "Consolidated oversight across generations",
        href: "/family-wealth-office-gujarat-india",
      },
      {
        name: "Fixed Income Investments",
        description: "Bonds, debt funds and stability allocation",
        href: "/fixed-income-investments-vadodara",
      },
      {
        name: "NRI Investment Support",
        description: "India investing from anywhere in the world",
        href: "/nri-investment-support-india",
      },
    ],
  },
  {
    heading: "Planning & Protection",
    items: [
      {
        name: "Retirement Planning",
        description: "Corpus, allocation and withdrawal review",
        href: "/retirement-planning-vadodara",
      },
      {
        name: "Legacy, Succession & Estate",
        description: "Wills, nominations and smooth transfer",
        href: "/legacy-succession-estate-planning-india",
      },
      {
        name: "Insurance Planning",
        description: "Right cover, without product push",
        href: "/insurance-planning-vadodara",
      },
      {
        name: "Tax Planning Support",
        description: "Efficiency across your investments",
        href: "/tax-planning-savings",
      },
    ],
  },
];

const allServices = serviceGroups.flatMap((group) => group.items);

const primaryLinks = [
  { name: "About PrimeIdea", href: "/about-us" },
  { name: "Research Process", href: "/research-process" },
  { name: "Private Wealth", href: "/private-wealth-management-gujarat-india" },
  { name: "Family Wealth Office", href: "/family-wealth-office-gujarat-india" },
  { name: "Knowledge Centre", href: "/knowledge-centre" },
  { name: "Regulatory Disclosures", href: "/regulatory-disclosures" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (!href || href === "/") return false;
    if (href.includes("#")) return false;
    return pathname === href;
  };

  const desktopLinkClass = (href) =>
    `group relative block whitespace-nowrap px-1.5 py-2 text-[11px] font-medium transition-colors 2xl:px-2 2xl:text-[13px] ${
      isActive(href) ? "text-[#293C7D]" : "text-[#1F2430] hover:text-[#293C7D]"
    }`;

  return (
    <header className="absolute top-0 left-1/2 z-[99] mx-auto my-5 w-[calc(100%-32px)] max-w-[1340px] -translate-x-1/2">
      <div className="relative flex h-14 items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-3 shadow-[0_10px_30px_-12px_rgba(41,60,125,0.45)] backdrop-blur-md xl:h-[68px] xl:px-5">
        <Link href="/" aria-label="PrimeIdea Ventures home" className="shrink-0">
          <Image
            src="/images/logo-black.png"
            width={184}
            height={40}
            alt="PrimeIdea Ventures"
            className="h-8 w-auto object-contain xl:h-10"
            priority
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden min-w-0 flex-1 items-center justify-center xl:flex"
        >
          <ul className="flex flex-nowrap items-center gap-0 2xl:gap-0.5">
            {primaryLinks.slice(0, 2).map((item) => (
              <li key={item.name} className="shrink-0">
                <Link href={item.href} className={desktopLinkClass(item.href)}>
                  {item.name}
                  <span
                    className={`pointer-events-none absolute inset-x-1.5 -bottom-0.5 h-[2px] rounded-full bg-[#FFC300] transition-transform duration-300 ${
                      isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            ))}

            <li
              className="relative shrink-0"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                className={`group relative flex items-center gap-1 whitespace-nowrap px-1.5 py-2 text-[11px] font-medium transition-colors 2xl:px-2 2xl:text-[13px] ${
                  isServicesOpen ? "text-[#293C7D]" : "text-[#1F2430] hover:text-[#293C7D]"
                }`}
                onClick={() => setIsServicesOpen((isOpen) => !isOpen)}
              >
                Services
                <svg
                  viewBox="0 0 10 6"
                  className={`h-2.5 w-2.5 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path
                    d="m1 1 4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <span
                  className={`pointer-events-none absolute inset-x-1.5 -bottom-0.5 h-[2px] rounded-full bg-[#FFC300] transition-transform duration-300 ${
                    isServicesOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>

              <div
                className={`absolute left-1/2 top-full z-50 w-[min(94vw,1080px)] -translate-x-1/2 pt-4 transition-all duration-200 ${
                  isServicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-[#E3ECF5] bg-white shadow-[0_30px_60px_-25px_rgba(35,45,99,0.55)]">
                  <div className="grid grid-cols-[1fr_1fr_1fr_0.85fr]">
                    {serviceGroups.map((group) => (
                      <div key={group.heading} className="border-r border-[#EEF3F9] p-5">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#479AD2]">
                          {group.heading}
                        </p>
                        <ul className="space-y-0.5">
                          {group.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="group/item block rounded-lg px-3 py-2 transition-colors hover:bg-[#F2F8FF]"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <span className="flex items-center gap-1.5 text-[13px] font-semibold text-[#293C7D]">
                                  {item.name}
                                  <span
                                    aria-hidden="true"
                                    className="translate-x-0 text-[#FFC300] opacity-0 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:opacity-100"
                                  >
                                    →
                                  </span>
                                </span>
                                <span className="mt-0.5 block text-[11.5px] leading-snug text-[#6B7280]">
                                  {item.description}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="flex flex-col justify-between bg-[#293C7D] p-5 text-white">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC300]">
                          Start here
                        </p>
                        <p className="mt-2 text-[15px] font-bold leading-snug text-white">
                          Not sure which service fits you?
                        </p>
                        <p className="mt-2 text-[12px] leading-relaxed text-white/75">
                          Begin with a portfolio review. We assess what you hold today and
                          recommend the right path, research-first and product-neutral.
                        </p>
                      </div>
                      <Link
                        href="/book-portfolio-review"
                        className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#FFC300] px-4 py-2.5 text-[13px] font-bold text-[#232D63] transition-colors hover:bg-white"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Book Portfolio Review
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {primaryLinks.slice(2).map((item) => (
              <li key={item.name} className="shrink-0">
                <Link href={item.href} className={desktopLinkClass(item.href)}>
                  {item.name}
                  <span
                    className={`pointer-events-none absolute inset-x-1.5 -bottom-0.5 h-[2px] rounded-full bg-[#FFC300] transition-transform duration-300 ${
                      isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 xl:block">
          <Link
            href="/book-portfolio-review"
            className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-[#293C7D] px-4 py-2.5 text-[13px] font-bold text-white shadow-[0_8px_18px_-8px_rgba(41,60,125,0.9)] transition-colors hover:bg-[#232D63]"
          >
            Book Review
            <span
              aria-hidden="true"
              className="text-[#FFC300] transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex items-center rounded-xl border border-[#E3ECF5] p-2 text-[#293C7D] transition-colors hover:bg-[#F2F8FF] focus:outline-none focus:ring-2 focus:ring-[#293C7D] xl:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-primary-navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg viewBox="0 0 20 20" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                d="M4.3 4.3a1 1 0 0 1 1.4 0L10 8.6l4.3-4.3a1 1 0 1 1 1.4 1.4L11.4 10l4.3 4.3a1 1 0 0 1-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 0 1-1.4-1.4L8.6 10 4.3 5.7a1 1 0 0 1 0-1.4Z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H4Z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-primary-navigation"
          aria-label="Mobile primary navigation"
          className="mt-2 max-h-[75vh] overflow-y-auto rounded-2xl border border-[#E3ECF5] bg-white p-3 shadow-[0_25px_50px_-20px_rgba(35,45,99,0.6)] xl:hidden"
        >
          <ul className="space-y-1">
            {primaryLinks.slice(0, 2).map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-[15px] font-semibold text-[#293C7D] transition-colors hover:bg-[#F2F8FF]"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[15px] font-semibold text-[#293C7D] transition-colors hover:bg-[#F2F8FF]"
                onClick={() => setIsMobileServicesOpen((isOpen) => !isOpen)}
                aria-expanded={isMobileServicesOpen}
              >
                Services
                <svg
                  viewBox="0 0 10 6"
                  className={`h-3 w-3 transition-transform duration-300 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path
                    d="m1 1 4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>

              {isMobileServicesOpen && (
                <ul className="mb-1 ml-3 space-y-0.5 border-l-2 border-[#FFC300]/60 py-1 pl-2">
                  {allServices.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-2 transition-colors hover:bg-[#F2F8FF]"
                      >
                        <span className="block text-[13.5px] font-semibold text-[#293C7D]">
                          {item.name}
                        </span>
                        <span className="mt-0.5 block text-[11.5px] leading-snug text-[#6B7280]">
                          {item.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {primaryLinks.slice(2).map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-[15px] font-semibold text-[#293C7D] transition-colors hover:bg-[#F2F8FF]"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li className="pt-2">
              <Link
                href="/book-portfolio-review"
                className="flex items-center justify-center gap-1.5 rounded-xl bg-[#293C7D] px-3 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#232D63]"
              >
                Book Portfolio Review
                <span aria-hidden="true" className="text-[#FFC300]">
                  →
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
