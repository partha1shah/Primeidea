import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import BookPortfolioReviewForm from "@/components/bookPortfolioReview/BookPortfolioReviewForm";
import Link from "next/link";
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    title: "Choose your service",
    text: "Portfolio Review, Retirement, Insurance, Private Wealth, or NRI consultation.",
    Icon: CalendarDaysIcon,
  },
  {
    title: "Pick date & time",
    text: "Share a preferred slot. The team confirms availability before the meeting.",
    Icon: ClockIcon,
  },
  {
    title: "Office or video",
    text: "Visit the Vadodara office or join a video call from anywhere in India / abroad.",
    Icon: MapPinIcon,
  },
  {
    title: "WhatsApp follow-up",
    text: "Opt in for WhatsApp confirmation so scheduling updates reach you quickly.",
    Icon: VideoCameraIcon,
  },
];

export default function BookPortfolioReviewContent({ defaultService }) {
  return (
    <>
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <FadeUpOneByOneAnimation>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
                  Book a consultation
                </p>
                <h2 className="text-[26px] md:text-[32px] font-light text-[#2D2D2D] leading-[125%] mb-4">
                  Schedule a{" "}
                  <strong className="font-semibold">research-led review</strong>
                </h2>
                <p className="text-base text-[#4D4D4D] leading-relaxed mb-6">
                  Request a slot for portfolio review or a specialist consultation.
                  Research process guided by Partha Shah, SEBI Registered Research
                  Analyst INH000017815. No guaranteed returns.
                </p>
              </FadeUpOneByOneAnimation>

              <ul className="list-none m-0 p-0 space-y-3 mb-8">
                {benefits.map(({ title, text, Icon }) => (
                  <li
                    key={title}
                    className="flex gap-3 rounded-2xl border border-[#D0E0EC] bg-[#F6FDFF] p-4"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#293C7D] text-[#FFC300]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-[#2D2D2D]">
                        {title}
                      </span>
                      <span className="block text-sm text-[#5A5A5A] leading-relaxed mt-0.5">
                        {text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl border border-[#D0E0EC] bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7A93A8] mb-2 m-0">
                  Also available
                </p>
                <p className="text-sm text-[#4D4D4D] leading-relaxed m-0 mb-3">
                  Prefer to share holdings first? Upload a statement on the Portfolio
                  Review page.
                </p>
                <Link
                  href="/portfolio-review-vadodara"
                  className="inline-flex text-sm font-semibold text-[#293C7D]"
                >
                  Upload portfolio for review →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[28px] border border-[#D0E0EC] bg-white p-5 md:p-8 shadow-[0_24px_60px_-40px_rgba(41,60,125,0.45)]">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#479AD2] via-[#293C7D] to-[#FFC300]" />
                <div className="mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2 m-0">
                    Booking request
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#2D2D2D] m-0">
                    Tell us when to meet
                  </h3>
                </div>
                <BookPortfolioReviewForm defaultService={defaultService} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#D6E4EE] bg-[#F6FDFF] py-12 md:py-14">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation className="mb-6 max-w-[640px]">
            <h2 className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0 mb-3">
              Related <strong className="font-semibold">next steps</strong>
            </h2>
            <p className="text-base text-[#4D4D4D] m-0">
              Prepare with tools and process pages before or after your booking.
            </p>
          </FadeUpOneByOneAnimation>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0">
            {[
              {
                title: "Portfolio Review",
                href: "/portfolio-review-vadodara",
                description: "Upload holdings or learn what a review covers.",
              },
              {
                title: "Research Process",
                href: "/research-process",
                description: "Five-step method behind research-led support.",
              },
              {
                title: "Wealth Tools",
                href: "/wealth-tools",
                description: "SIP, corpus, and planning calculators.",
              },
              {
                title: "Regulatory Disclosures",
                href: "/regulatory-disclosures",
                description: "SEBI RA details, charter, and grievance info.",
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block h-full rounded-[20px] border border-[#D6E4EE] bg-white p-5 hover:border-[#293C7D] transition-colors"
                >
                  <h3 className="text-base font-semibold text-[#293C7D] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed m-0">
                    {item.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
