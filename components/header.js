"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const aboutLinks = [
  {
    name: "About Us",
    description: "Who we are and how we work with families",
    href: "/about-us",
  },
  {
    name: "Leadership",
    description: "Meet the people behind PrimeIdea",
    href: "/leadership-team",
  },
  {
    name: "Entity Profile",
    description: "Registrations and firm overview",
    href: "/primeidea-ventures-profile",
  },
  {
    name: "SEBI Research Analyst",
    description: "Research credentials and scope",
    href: "/sebi-registered-research-analyst",
  },
  {
    name: "Careers",
    description: "Join the PrimeIdea team",
    href: "/careers",
  },
  {
    name: "Become a Partner",
    description: "Collaborate with our network",
    href: "/become-a-partner",
  },
];

const insightLinks = [
  {
    name: "Knowledge Centre",
    description: "Guides, frameworks and investor education",
    href: "/knowledge-centre",
  },
  {
    name: "Comparisons",
    description: "Side-by-side product and strategy views",
    href: "/comparisons",
  },
  {
    name: "Research Reports",
    description: "Published research and market notes",
    href: "/research-reports",
  },
];

const quickLinks = [
  { name: "Research Process", href: "/research-process" },
  { name: "Wealth Tools", href: "/wealth-tools" },
  { name: "Blogs", href: "/blogs" },
];

const serviceGroups = [
  {
    heading: "Research & Investing",
    items: [
      {
        name: "Portfolio Review",
        description: "Independent health check of your holdings",
        href: "/portfolio-review",
      },
      {
        name: "Mutual Fund Investment Support",
        description: "Scheme selection, review and rebalancing",
        href: "/mutual-fund-investment-support",
      },
      {
        name: "Direct Equity Research Support",
        description: "Research-backed equity decisions",
        href: "/direct-equity-research-support",
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
        href: "/fixed-income-investments",
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
        href: "/retirement-planning",
      },
      {
        name: "Legacy, Succession & Estate",
        description: "Wills, nominations and smooth transfer",
        href: "/legacy-succession-estate-planning-india",
      },
      {
        name: "Insurance Planning",
        description: "Right cover, without product push",
        href: "/insurance-planning",
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

const Chevron = ({ open, className = "h-2.5 w-2.5" }) => (
  <svg
    viewBox="0 0 10 6"
    className={`${className} transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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
);

function DropdownPanel({ open, widthClass, children, align = "center" }) {
  const alignClass =
    align === "left"
      ? "left-0"
      : align === "right"
        ? "right-0"
        : "left-1/2 -translate-x-1/2";

  return (
    <div
      className={`absolute ${alignClass} top-full z-[120] ${widthClass} pt-3 transition-all duration-200 ${
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible pointer-events-none -translate-y-1.5 opacity-0"
      }`}
    >
      {/* Invisible hover bridge so the cursor can leave the trigger without closing */}
      <div className="absolute inset-x-0 top-0 h-3" aria-hidden="true" />
      <div className="overflow-hidden rounded-2xl border border-[#E3ECF5] bg-white shadow-[0_28px_55px_-22px_rgba(35,45,99,0.55)] ring-1 ring-black/[0.03]">
        {children}
      </div>
    </div>
  );
}

function DropdownCtaButton({ href, onClick, children }) {
  return (
    <Link
      href={href}
      className="mt-5 inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-[#FFC300] px-3 py-2.5 text-[12.5px] font-bold text-[#232D63] transition-colors hover:bg-white"
      onClick={onClick}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function HeaderCtaButtons({ className = "", stacked = false }) {
  const sizeClass = stacked ? "w-full min-h-[48px] px-4 py-3 text-[15px]" : "min-h-[42px] px-4 py-2 text-[13px]";

  return (
    <div
      className={`${stacked ? "flex w-full flex-col gap-2.5" : "flex items-center gap-2.5"} ${className}`}
    >
      <Link
        href="/book-portfolio-review"
        className={`group relative inline-flex items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full bg-[#293C7D] font-bold text-white shadow-[0_12px_24px_-10px_rgba(41,60,125,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#232D63] hover:shadow-[0_16px_28px_-10px_rgba(41,60,125,0.95)] ${sizeClass}`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.18)_50%,transparent_70%)] bg-[length:200%_100%] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-hover:bg-[position:100%_0]"
        />
        <span
          aria-hidden="true"
          className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FFC300] text-[#232D63] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
            <path
              d="M4.5 2.5v2M11.5 2.5v2M2.75 6h10.5M4 4h8a1.25 1.25 0 0 1 1.25 1.25v6.5A1.25 1.25 0 0 1 12 13H4a1.25 1.25 0 0 1-1.25-1.25v-6.5A1.25 1.25 0 0 1 4 4Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="relative">Book Review</span>
        {/* <span
          aria-hidden="true"
          className="relative text-[#FFC300] transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span> */}
      </Link>

      <a
        href="https://login.primeidea.in"
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative inline-flex items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full border border-[#293C7D]/20 bg-white font-semibold text-[#293C7D] shadow-[0_6px_16px_-12px_rgba(41,60,125,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#293C7D]/45 hover:bg-[#F4F8FF] hover:shadow-[0_12px_22px_-12px_rgba(41,60,125,0.45)] ${sizeClass}`}
      >
        <span
          aria-hidden="true"
          className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF4FF] text-[#293C7D] ring-1 ring-[#293C7D]/10 transition-colors duration-300 group-hover:bg-[#293C7D] group-hover:text-white"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
            <path
              d="M8 9.25V10.5M5.5 6.5V5.25a2.5 2.5 0 1 1 5 0V6.5M4.25 6.5h7.5A1.25 1.25 0 0 1 13 7.75v4.5A1.25 1.25 0 0 1 11.75 13.5h-7.5A1.25 1.25 0 0 1 3 12.25v-4.5A1.25 1.25 0 0 1 4.25 6.5Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="relative">Login</span>
        {/* <span
          aria-hidden="true"
          className="relative text-[#FFC300] transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span> */}
      </a>
    </div>
  );
}

function SimpleMenuLinks({ items, onNavigate }) {
  return (
    <ul className="space-y-0.5 p-3">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="group/item block rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F2F8FF]"
            onClick={onNavigate}
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
  );
}

function MobileAccordion({ label, open, onToggle, items }) {
  return (
    <li>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[15px] font-semibold text-[#293C7D] transition-colors hover:bg-[#F2F8FF]"
        onClick={onToggle}
        aria-expanded={open}
      >
        {label}
        <Chevron open={open} className="h-3 w-3" />
      </button>

      {open && (
        <ul className="mb-1 ml-3 space-y-0.5 border-l-2 border-[#FFC300]/60 py-1 pl-2">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2 transition-colors hover:bg-[#F2F8FF]"
              >
                <span className="block text-[13.5px] font-semibold text-[#293C7D]">
                  {item.name}
                </span>
                {item.description ? (
                  <span className="mt-0.5 block text-[11.5px] leading-snug text-[#6B7280]">
                    {item.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileInsightsOpen, setIsMobileInsightsOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
    setIsServicesOpen(false);
    setIsInsightsOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileInsightsOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (!href || href === "/") return false;
    if (href.includes("#")) return false;
    return pathname === href;
  };

  const isGroupActive = (items) => items.some((item) => isActive(item.href));

  const navItemClass = (active) =>
    `group relative flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-[12.5px] font-medium transition-colors xl:px-3 xl:text-[13px] ${
      active
        ? "bg-[#EEF4FF] text-[#293C7D]"
        : "text-[#2A3140] hover:bg-[#F5F8FC] hover:text-[#293C7D]"
    }`;

  const aboutActive = isAboutOpen || isGroupActive(aboutLinks);
  const servicesActive = isServicesOpen || isGroupActive(allServices);
  const insightsActive = isInsightsOpen || isGroupActive(insightLinks);

  const closeDesktopMenus = () => {
    setIsAboutOpen(false);
    setIsServicesOpen(false);
    setIsInsightsOpen(false);
  };

  return (
    <header className="absolute top-0 left-1/2 z-[99] mx-auto my-5 w-[calc(100%-32px)] max-w-[1340px] -translate-x-1/2">
      {/* Relative wrapper: Services mega-menu aligns to full header width */}
      <div className="relative">
        <div className="relative flex h-14 items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-3 shadow-[0_12px_34px_-14px_rgba(41,60,125,0.42)] backdrop-blur-md xl:h-[70px] xl:gap-4 xl:px-5">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 left-0 top-3 w-1 rounded-r-full bg-[#FFC300]"
          />

          <Link
            href="/"
            aria-label="PrimeIdea Ventures home"
            className="relative z-[1] shrink-0 pl-2"
            onMouseEnter={closeDesktopMenus}
          >
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
            <ul className="flex flex-nowrap items-center gap-0.5">
              <li
                className={`relative shrink-0 ${isAboutOpen ? "z-[130]" : ""}`}
                onMouseEnter={() => {
                  setIsAboutOpen(true);
                  setIsServicesOpen(false);
                  setIsInsightsOpen(false);
                }}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={isAboutOpen}
                  aria-haspopup="true"
                  className={navItemClass(aboutActive)}
                  onClick={() => {
                    setIsAboutOpen((open) => !open);
                    setIsServicesOpen(false);
                    setIsInsightsOpen(false);
                  }}
                >
                  About
                  <Chevron open={isAboutOpen} />
                </button>

                <DropdownPanel open={isAboutOpen} widthClass="w-[min(92vw,480px)]" align="left">
                  <div className="grid grid-cols-[1.2fr_0.95fr]">
                    <SimpleMenuLinks items={aboutLinks} onNavigate={closeDesktopMenus} />
                    <div className="flex flex-col justify-between bg-gradient-to-br from-[#293C7D] to-[#1E2D63] p-5 text-white">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC300]">
                          Start here
                        </p>
                        <p className="mt-2 text-[15px] font-bold leading-snug text-white">
                          Prefer a guided first step?
                        </p>
                        <p className="mt-2 text-[12px] leading-relaxed text-white/75">
                          Book a portfolio review and we will map the right path for your goals.
                        </p>
                      </div>
                      <DropdownCtaButton href="/book-portfolio-review" onClick={closeDesktopMenus}>
                        Book Portfolio Review
                      </DropdownCtaButton>
                    </div>
                  </div>
                </DropdownPanel>
              </li>

              <li
                className={`relative shrink-0 ${isServicesOpen ? "z-[130]" : ""}`}
                onMouseEnter={() => {
                  setIsServicesOpen(true);
                  setIsAboutOpen(false);
                  setIsInsightsOpen(false);
                }}
              >
                <button
                  type="button"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  className={navItemClass(servicesActive)}
                  onClick={() => {
                    setIsServicesOpen((open) => !open);
                    setIsAboutOpen(false);
                    setIsInsightsOpen(false);
                  }}
                >
                  Services
                  <Chevron open={isServicesOpen} />
                </button>
              </li>

              <li
                className={`relative shrink-0 ${isInsightsOpen ? "z-[130]" : ""}`}
                onMouseEnter={() => {
                  setIsInsightsOpen(true);
                  setIsAboutOpen(false);
                  setIsServicesOpen(false);
                }}
                onMouseLeave={() => setIsInsightsOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={isInsightsOpen}
                  aria-haspopup="true"
                  className={navItemClass(insightsActive)}
                  onClick={() => {
                    setIsInsightsOpen((open) => !open);
                    setIsAboutOpen(false);
                    setIsServicesOpen(false);
                  }}
                >
                  Insights
                  <Chevron open={isInsightsOpen} />
                </button>

                <DropdownPanel open={isInsightsOpen} widthClass="w-[min(92vw,300px)]" align="left">
                  <SimpleMenuLinks items={insightLinks} onNavigate={closeDesktopMenus} />
                </DropdownPanel>
              </li>

              <li aria-hidden="true" className="mx-1.5 h-4 w-px shrink-0 self-center bg-[#D7E1EE]" />

              {quickLinks.map((item) => (
                <li key={item.name} className="relative z-[1] shrink-0">
                  <Link
                    href={item.href}
                    className={navItemClass(isActive(item.href))}
                    onMouseEnter={closeDesktopMenus}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li className="relative z-[1] shrink-0">
                <Link
                  href="/contact-us"
                  className={navItemClass(isActive("/contact-us"))}
                  onMouseEnter={closeDesktopMenus}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div
            className="relative z-[1] hidden shrink-0 xl:block"
            onMouseEnter={closeDesktopMenus}
          >
            <HeaderCtaButtons />
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

        {/* Services mega-menu: full width of header bar, never overflows outside */}
        <div
          className={`absolute inset-x-0 top-full z-[120] hidden pt-3 transition-all duration-200 xl:block ${
            isServicesOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-1.5 opacity-0"
          }`}
          onMouseEnter={() => {
            setIsServicesOpen(true);
            setIsAboutOpen(false);
            setIsInsightsOpen(false);
          }}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <div className="absolute inset-x-0 top-0 h-3" aria-hidden="true" />
          <div className="overflow-hidden rounded-2xl border border-[#E3ECF5] bg-white shadow-[0_28px_55px_-22px_rgba(35,45,99,0.55)] ring-1 ring-black/[0.03]">
            <div className="grid grid-cols-[1fr_1fr_1fr_0.85fr]">
              {serviceGroups.map((group) => (
                <div key={group.heading} className="border-r border-[#EEF3F9] p-4 xl:p-5">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#479AD2]">
                    {group.heading}
                  </p>
                  <ul className="space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="group/item block rounded-xl px-3 py-2 transition-colors hover:bg-[#F2F8FF]"
                          onClick={closeDesktopMenus}
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

              <div className="flex flex-col justify-between bg-gradient-to-br from-[#293C7D] to-[#1E2D63] p-5 text-white">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFC300]">
                    Start here
                  </p>
                  <p className="mt-2 text-[15px] font-bold leading-snug text-white">
                    Not sure which service fits you?
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed text-white/75">
                    Begin with a portfolio review. We assess what you hold today and recommend the
                    right path, research-first and product-neutral.
                  </p>
                </div>
                <DropdownCtaButton href="/book-portfolio-review" onClick={closeDesktopMenus}>
                  Book Portfolio Review
                </DropdownCtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-primary-navigation"
          aria-label="Mobile primary navigation"
          className="mt-2 max-h-[75vh] overflow-y-auto rounded-2xl border border-[#E3ECF5] bg-white p-3 shadow-[0_25px_50px_-20px_rgba(35,45,99,0.6)] xl:hidden"
        >
          <ul className="space-y-1">
            <MobileAccordion
              label="About"
              open={isMobileAboutOpen}
              onToggle={() => {
                setIsMobileAboutOpen((open) => !open);
                setIsMobileServicesOpen(false);
                setIsMobileInsightsOpen(false);
              }}
              items={aboutLinks}
            />

            <MobileAccordion
              label="Services"
              open={isMobileServicesOpen}
              onToggle={() => {
                setIsMobileServicesOpen((open) => !open);
                setIsMobileAboutOpen(false);
                setIsMobileInsightsOpen(false);
              }}
              items={allServices}
            />

            <MobileAccordion
              label="Insights"
              open={isMobileInsightsOpen}
              onToggle={() => {
                setIsMobileInsightsOpen((open) => !open);
                setIsMobileAboutOpen(false);
                setIsMobileServicesOpen(false);
              }}
              items={insightLinks}
            />

            {quickLinks.map((item) => (
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
              <Link
                href="/contact-us"
                className="block rounded-xl px-3 py-3 text-[15px] font-semibold text-[#293C7D] transition-colors hover:bg-[#F2F8FF]"
              >
                Contact Us
              </Link>
            </li>

            <li className="pt-2">
              <HeaderCtaButtons stacked />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
