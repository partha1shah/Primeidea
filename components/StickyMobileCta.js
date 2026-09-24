"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/solid";

const PHONE_HREF = "tel:+918141027000";
const WHATSAPP_HREF =
  "https://api.whatsapp.com/send?phone=918141027000&text=" +
  encodeURIComponent(
    "Hello, I would like to speak with PrimeIdea Ventures about a portfolio review."
  );
const BOOK_HREF = "/book-portfolio-review";

function pushClickEvent(label) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "sticky_mobile_cta_click",
    cta_label: label,
  });
}

export default function StickyMobileCta() {
  return (
    <>
      {/* Spacer so page content is not hidden behind the bar */}
      <div className="h-[72px] md:hidden" aria-hidden="true" />

      <nav
        aria-label="Mobile quick actions"
        className="fixed inset-x-0 bottom-0 z-[90] md:hidden border-t border-[#D0E0EC] bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_-12px_rgba(35,45,99,0.35)] pb-[env(safe-area-inset-bottom)]"
      >
        <ul className="grid grid-cols-3 gap-1 px-2 py-2 list-none m-0 max-w-[520px] mx-auto">
          <li>
            <a
              href={PHONE_HREF}
              onClick={() => pushClickEvent("call")}
              className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1.5 text-[#293C7D] hover:bg-[#F2F8FF] active:bg-[#EAF5FF] transition-colors"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              <span className="text-[11px] font-bold leading-none">Call</span>
            </a>
          </li>
          <li>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushClickEvent("whatsapp")}
              className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1.5 text-[#128C7E] hover:bg-[#E8F8F5] active:bg-[#D8F3EE] transition-colors"
            >
              <Image
                src="/images/icons/social-media/whatsapp.png"
                width={20}
                height={20}
                alt=""
                className="h-5 w-5 object-contain"
              />
              <span className="text-[11px] font-bold leading-none">WhatsApp</span>
            </a>
          </li>
          <li>
            <Link
              href={BOOK_HREF}
              onClick={() => pushClickEvent("book_review")}
              className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-xl bg-[#FFC300] px-2 py-1.5 text-[#232D63] hover:bg-[#293C7D] hover:!text-white transition-colors"
            >
              <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
              <span className="text-[11px] font-bold leading-none">Book Review</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
