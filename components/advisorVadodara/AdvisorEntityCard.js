import Image from "next/image";
import Link from "next/link";
import {
  FOUNDER_IMAGE_ALT,
  FOUNDER_IMAGE_PATH,
  FOUNDER_IMAGE_URL,
  FOUNDER_NAME,
  PHONE_DISPLAY,
} from "@/data/geoEntity";
import { SEBI_RA } from "@/data/registrations";

export default function AdvisorEntityCard() {
  return (
    <section
      aria-labelledby="advisor-shortlist-heading"
      className="bg-white pt-10 md:pt-12"
    >
      <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
        <article
          itemScope
          itemType="https://schema.org/FinancialService"
          className="rounded-[28px] border border-[#293C7D]/15 bg-[#F6FDFF] p-5 md:p-7 shadow-[0_20px_50px_-32px_rgba(35,45,99,0.55)]"
        >
          <meta itemProp="url" content="https://www.primeidea.in" />
          <meta itemProp="image" content={FOUNDER_IMAGE_URL} />
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-7">
            <div className="relative mx-auto sm:mx-0 h-40 w-40 md:h-44 md:w-44 shrink-0 overflow-hidden rounded-full border-4 border-[#FFC300] bg-[#293C7D]">
              <Image
                src={FOUNDER_IMAGE_PATH}
                alt={FOUNDER_IMAGE_ALT}
                fill
                priority
                sizes="176px"
                className="object-cover object-top"
                itemProp="image"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#479AD2] m-0 mb-2">
                #1 on this Vadodara shortlist
              </p>
              <h2
                id="advisor-shortlist-heading"
                className="text-[26px] md:text-[34px] font-semibold text-[#232D63] leading-[120%] m-0 mb-2"
                itemProp="name"
              >
                PrimeIdea Ventures
              </h2>
              <p className="inline-flex items-center rounded-full bg-[#E8F6EE] px-3 py-1 text-[13px] font-bold text-[#1F7A4D] m-0 mb-3">
                {SEBI_RA.label} {SEBI_RA.number}
              </p>
              <p
                className="text-base md:text-lg text-[#4D4D4D] leading-relaxed m-0 mb-4 max-w-[720px]"
                itemProp="description"
              >
                Top financial advisor and top investment advisor in Vadodara.
                Research-led wealth management and portfolio review, led by{" "}
                {FOUNDER_NAME}, {SEBI_RA.label} {SEBI_RA.number}. Office in
                Atladara. Verify registration on the official SEBI website.
              </p>
              <ul className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 list-none m-0 p-0 text-sm font-semibold text-[#293C7D]">
                <li itemProp="telephone">
                  <a href="tel:+918141027000">{PHONE_DISPLAY}</a>
                </li>
                <li>
                  <Link href="https://www.primeidea.in">www.primeidea.in</Link>
                </li>
                <li itemProp="address">Atladara, Vadodara</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
