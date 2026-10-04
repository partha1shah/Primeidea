import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const proofItems = [
  {
    title: "Vadodara-Based Firm",
    description:
      "Vadodara-based wealth management firm serving investors across Gujarat and India.",
  },
  {
    title: "SEBI RA-Led Research",
    description:
      "Research-led portfolio review under SEBI Registered Research Analyst registration.",
  },
  {
    title: "Portfolio Review Process",
    description:
      "Portfolio review and asset allocation process focused on suitability and risk clarity.",
  },
  {
    title: "Product Universe",
    description:
      "Mutual Funds Schemes, Direct Equity Stocks, ETFs, PMS, Fixed Income Products, NPS, Insurance Planning.",
  },
];

const ProofStrip = () => {
  return (
    <section aria-label="Credibility proof strip" className="bg-[#293C7D] py-8 md:py-10">
      <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {proofItems.map((item) => (
            <li key={item.title}>
              <FadeUpOneByOneAnimation className="h-full border border-white/20 rounded-xl p-4 md:p-5">
                <h2 className="text-[#FFC300] text-base xl:text-lg font-bold mb-2 leading-snug">
                  {item.title}
                </h2>
                <p className="text-white text-sm xl:text-base leading-relaxed">
                  {item.description}
                </p>
              </FadeUpOneByOneAnimation>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProofStrip;
