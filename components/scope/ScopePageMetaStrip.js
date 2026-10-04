import {
  CheckBadgeIcon,
  MapPinIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

const defaultStats = [
  {
    label: "Approach",
    value: "Research-led",
    Icon: CheckBadgeIcon,
  },
  {
    label: "Base Location",
    value: "Vadodara",
    Icon: MapPinIcon,
  },
  {
    label: "Reach",
    value: "Gujarat & India",
    Icon: MapPinIcon,
  },
];

export default function ScopePageMetaStrip({
  stats = defaultStats,
  disclaimer = "Investors should verify SEBI registration independently. Investments in the securities market are subject to market risks. PrimeIdea does not guarantee returns.",
}) {
  return (
    <section
      aria-label="Page credentials"
      className="relative overflow-hidden bg-[#232D63] bg-[url('/images/insurance/risk-management/bg.png')] bg-repeat bg-contain bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#293C7D]/40 to-[#232D63]/90 pointer-events-none" />

      <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 py-8 md:py-10">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 list-none m-0 p-0 mb-5 md:mb-6">
          {stats.map(({ label, value, Icon }) => (
            <li key={label}>
              <div className="h-full rounded-2xl border border-white/15 bg-[#293C7D]/55 px-5 py-5 md:px-6 md:py-6 backdrop-blur-sm transition-colors hover:border-[#FFC300]/35">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#232D63] border border-white/10">
                    <Icon className="h-4 w-4 text-[#FFC300]" aria-hidden="true" />
                  </span>
                  <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.12em] text-white/65">
                    {label}
                  </p>
                </div>
                <p className="text-xl md:text-2xl xl:text-[28px] font-bold text-[#FFC300] leading-tight break-words">
                  {value}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {disclaimer && (
          <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 md:px-5 md:py-4">
            <ShieldExclamationIcon
              className="h-5 w-5 shrink-0 text-[#FFC300] mt-0.5"
              aria-hidden="true"
            />
            <p className="text-sm md:text-[15px] text-white/80 leading-relaxed">
              {disclaimer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
