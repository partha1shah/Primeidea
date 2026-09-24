"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import {
  AcademicCapIcon,
  ArrowPathIcon,
  BanknotesIcon,
  CalculatorIcon,
  ChartBarIcon,
  ChartPieIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeModernIcon,
  PresentationChartLineIcon,
  ScaleIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import CalculatorShell, {
  NumberField,
  ResultCard,
  SelectField,
} from "@/components/wealthTools/calculatorShell";
import {
  calcAssetAllocationCheck,
  calcCagr,
  calcChildEducation,
  calcEmiVsInvestment,
  calcEmergencyFund,
  calcInsuranceNeed,
  calcLumpsumFv,
  calcRetirementCorpus,
  calcSimpleXirr,
  calcSipFv,
  calcSwp,
  formatInr,
  formatPercent,
} from "@/lib/wealthTools/calculations";

export const WEALTH_TOOLS = [
  {
    id: "sip",
    title: "SIP Calculator",
    short: "Future value of monthly SIPs",
    Icon: CalculatorIcon,
  },
  {
    id: "lumpsum",
    title: "Lumpsum Future Value",
    short: "Growth of a one-time investment",
    Icon: ChartBarIcon,
  },
  {
    id: "retirement",
    title: "Retirement Corpus",
    short: "Corpus needed for retirement spend",
    Icon: HomeModernIcon,
  },
  {
    id: "education",
    title: "Child Education",
    short: "Inflation-aware education goal",
    Icon: AcademicCapIcon,
  },
  {
    id: "insurance",
    title: "Insurance Need",
    short: "Directional life-cover estimate",
    Icon: ShieldCheckIcon,
  },
  {
    id: "allocation",
    title: "Asset Allocation Checker",
    short: "Risk-aligned mix starting point",
    Icon: ChartPieIcon,
  },
  {
    id: "emergency",
    title: "Emergency Fund",
    short: "Cash buffer from monthly spend",
    Icon: BanknotesIcon,
  },
  {
    id: "swp",
    title: "SWP Calculator",
    short: "Systematic withdrawal sustainability",
    Icon: ArrowPathIcon,
  },
  {
    id: "cagr-xirr",
    title: "CAGR & XIRR",
    short: "Return consistency across periods",
    Icon: PresentationChartLineIcon,
  },
  {
    id: "emi-vs-invest",
    title: "EMI vs Investment",
    short: "Debt repayment vs investing trade-off",
    Icon: ScaleIcon,
  },
];

function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [annualReturnPct, setAnnualReturnPct] = useState(12);
  const [years, setYears] = useState(15);
  const result = useMemo(
    () => calcSipFv({ monthlyInvestment, annualReturnPct, years }),
    [monthlyInvestment, annualReturnPct, years]
  );

  return (
    <CalculatorShell
      title="SIP Calculator"
      explanation="Estimate how systematic monthly investments may grow over a chosen tenure at an assumed annualised return. Change the return assumption to see how sensitive the outcome is — this is not a forecast."
      results={
        <ResultCard
          title="Illustrative result"
          rows={[
            { label: "Estimated future value", value: formatInr(result.futureValue), emphasize: true },
            { label: "Total invested", value: formatInr(result.invested) },
            { label: "Estimated gains", value: formatInr(result.estimatedGains) },
            { label: "Months invested", value: String(result.months) },
          ]}
        />
      }
    >
      <NumberField
        id="sip-amount"
        label="Monthly SIP amount"
        value={monthlyInvestment}
        onChange={setMonthlyInvestment}
        min={0}
        step={500}
        suffix="₹"
      />
      <NumberField
        id="sip-return"
        label="Assumed annual return"
        value={annualReturnPct}
        onChange={setAnnualReturnPct}
        min={0}
        max={30}
        step={0.5}
        suffix="%"
        hint="Use a conservative assumption. Past returns do not guarantee future results."
      />
      <NumberField
        id="sip-years"
        label="Investment tenure"
        value={years}
        onChange={setYears}
        min={1}
        max={40}
        step={1}
        suffix="yrs"
      />
    </CalculatorShell>
  );
}

function LumpsumCalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [annualReturnPct, setAnnualReturnPct] = useState(10);
  const [years, setYears] = useState(10);
  const result = useMemo(
    () => calcLumpsumFv({ principal, annualReturnPct, years }),
    [principal, annualReturnPct, years]
  );

  return (
    <CalculatorShell
      title="Lumpsum Future Value"
      explanation="Project how a one-time investment may grow at an assumed compound annual return. Useful for comparing lumpsum versus SIP paths — not for promising a target corpus."
      results={
        <ResultCard
          title="Illustrative result"
          rows={[
            { label: "Estimated future value", value: formatInr(result.futureValue), emphasize: true },
            { label: "Amount invested", value: formatInr(result.invested) },
            { label: "Estimated gains", value: formatInr(result.estimatedGains) },
          ]}
        />
      }
    >
      <NumberField
        id="lump-principal"
        label="Lumpsum amount"
        value={principal}
        onChange={setPrincipal}
        min={0}
        step={1000}
        suffix="₹"
      />
      <NumberField
        id="lump-return"
        label="Assumed annual return"
        value={annualReturnPct}
        onChange={setAnnualReturnPct}
        min={0}
        max={30}
        step={0.5}
        suffix="%"
      />
      <NumberField
        id="lump-years"
        label="Investment tenure"
        value={years}
        onChange={setYears}
        min={1}
        max={40}
        step={1}
        suffix="yrs"
      />
    </CalculatorShell>
  );
}

function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpenseToday, setMonthlyExpenseToday] = useState(50000);
  const [inflationPct, setInflationPct] = useState(6);
  const [withdrawalRatePct, setWithdrawalRatePct] = useState(4);
  const [existingCorpus, setExistingCorpus] = useState(2000000);
  const result = useMemo(
    () =>
      calcRetirementCorpus({
        currentAge,
        retirementAge,
        monthlyExpenseToday,
        inflationPct,
        withdrawalRatePct,
        existingCorpus,
      }),
    [
      currentAge,
      retirementAge,
      monthlyExpenseToday,
      inflationPct,
      withdrawalRatePct,
      existingCorpus,
    ]
  );

  return (
    <CalculatorShell
      title="Retirement Corpus Calculator"
      explanation="Estimate a working corpus target by growing today’s monthly spend with inflation, then applying a sustainable withdrawal-rate assumption. Figures are planning inputs — not a guaranteed retirement income."
      results={
        <ResultCard
          title="Illustrative result"
          rows={[
            { label: "Years to retirement", value: String(result.yearsToRetirement) },
            {
              label: "Annual spend at retirement",
              value: formatInr(result.annualSpendAtRetirement),
            },
            {
              label: "Suggested corpus",
              value: formatInr(result.requiredCorpus),
              emphasize: true,
            },
            { label: "Existing corpus", value: formatInr(result.existingCorpus) },
            { label: "Estimated gap", value: formatInr(result.gap) },
          ]}
        />
      }
    >
      <NumberField id="ret-age" label="Current age" value={currentAge} onChange={setCurrentAge} min={18} max={80} suffix="yrs" />
      <NumberField id="ret-retire" label="Target retirement age" value={retirementAge} onChange={setRetirementAge} min={40} max={90} suffix="yrs" />
      <NumberField id="ret-expense" label="Monthly expense today" value={monthlyExpenseToday} onChange={setMonthlyExpenseToday} min={0} step={1000} suffix="₹" />
      <NumberField id="ret-inflation" label="Assumed inflation" value={inflationPct} onChange={setInflationPct} min={0} max={15} step={0.5} suffix="%" />
      <NumberField id="ret-swr" label="Withdrawal rate assumption" value={withdrawalRatePct} onChange={setWithdrawalRatePct} min={2} max={8} step={0.25} suffix="%" hint="Common planning range is about 3–5%. Higher rates raise sequence-of-returns risk." />
      <NumberField id="ret-existing" label="Existing retirement corpus" value={existingCorpus} onChange={setExistingCorpus} min={0} step={50000} suffix="₹" />
    </CalculatorShell>
  );
}

function EducationCalculator() {
  const [currentCost, setCurrentCost] = useState(1500000);
  const [yearsUntilStart, setYearsUntilStart] = useState(12);
  const [educationInflationPct, setEducationInflationPct] = useState(8);
  const [existingSavings, setExistingSavings] = useState(300000);
  const [annualReturnPct, setAnnualReturnPct] = useState(10);
  const result = useMemo(
    () =>
      calcChildEducation({
        currentCost,
        yearsUntilStart,
        educationInflationPct,
        existingSavings,
        annualReturnPct,
      }),
    [currentCost, yearsUntilStart, educationInflationPct, existingSavings, annualReturnPct]
  );

  return (
    <CalculatorShell
      title="Child Education Calculator"
      explanation="Grow today’s education cost with education inflation, grow existing savings at an assumed return, then estimate a monthly SIP that may close the gap. Suitability and product choice need a separate review."
      results={
        <ResultCard
          title="Illustrative result"
          rows={[
            { label: "Future education cost", value: formatInr(result.futureCost), emphasize: true },
            { label: "Future value of savings", value: formatInr(result.futureSavings) },
            { label: "Estimated shortfall", value: formatInr(result.shortfall) },
            { label: "Indicative monthly SIP", value: formatInr(result.requiredMonthlySip) },
          ]}
        />
      }
    >
      <NumberField id="edu-cost" label="Current education cost" value={currentCost} onChange={setCurrentCost} min={0} step={25000} suffix="₹" />
      <NumberField id="edu-years" label="Years until education starts" value={yearsUntilStart} onChange={setYearsUntilStart} min={0} max={25} suffix="yrs" />
      <NumberField id="edu-inf" label="Education inflation" value={educationInflationPct} onChange={setEducationInflationPct} min={0} max={15} step={0.5} suffix="%" />
      <NumberField id="edu-save" label="Existing education savings" value={existingSavings} onChange={setExistingSavings} min={0} step={10000} suffix="₹" />
      <NumberField id="edu-ret" label="Assumed return on savings" value={annualReturnPct} onChange={setAnnualReturnPct} min={0} max={20} step={0.5} suffix="%" />
    </CalculatorShell>
  );
}

function InsuranceCalculator() {
  const [annualIncome, setAnnualIncome] = useState(1200000);
  const [incomeReplacementYears, setIncomeReplacementYears] = useState(15);
  const [outstandingLiabilities, setOutstandingLiabilities] = useState(2000000);
  const [existingCover, setExistingCover] = useState(5000000);
  const [liquidAssets, setLiquidAssets] = useState(1000000);
  const result = useMemo(
    () =>
      calcInsuranceNeed({
        annualIncome,
        incomeReplacementYears,
        outstandingLiabilities,
        existingCover,
        liquidAssets,
      }),
    [annualIncome, incomeReplacementYears, outstandingLiabilities, existingCover, liquidAssets]
  );

  return (
    <CalculatorShell
      title="Insurance Need Calculator"
      explanation="Build a directional life-cover estimate using income replacement years, liabilities, existing cover, and liquid assets. This is a starting point for a protection review — not a product recommendation."
      disclaimer="This calculator provides illustrative cover estimates only. It does not assess medical underwriting, claim eligibility, or product suitability. Insurance is subject to policy terms. PrimeIdea does not guarantee claim outcomes."
      ctaHref="/insurance-planning-vadodara"
      ctaLabel="Book Insurance Review"
      results={
        <ResultCard
          title="Illustrative result"
          rows={[
            { label: "Income replacement need", value: formatInr(result.incomeNeed) },
            { label: "Gross need (income + liabilities)", value: formatInr(result.grossNeed) },
            { label: "Existing cover", value: formatInr(result.existingCover) },
            {
              label: "Suggested additional cover",
              value: formatInr(result.suggestedCover),
              emphasize: true,
            },
          ]}
        />
      }
    >
      <NumberField id="ins-income" label="Annual income" value={annualIncome} onChange={setAnnualIncome} min={0} step={50000} suffix="₹" />
      <NumberField id="ins-years" label="Income replacement years" value={incomeReplacementYears} onChange={setIncomeReplacementYears} min={1} max={40} suffix="yrs" />
      <NumberField id="ins-liab" label="Outstanding liabilities" value={outstandingLiabilities} onChange={setOutstandingLiabilities} min={0} step={50000} suffix="₹" />
      <NumberField id="ins-cover" label="Existing life cover" value={existingCover} onChange={setExistingCover} min={0} step={100000} suffix="₹" />
      <NumberField id="ins-assets" label="Liquid assets available to family" value={liquidAssets} onChange={setLiquidAssets} min={0} step={50000} suffix="₹" />
    </CalculatorShell>
  );
}

function AllocationCalculator() {
  const [age, setAge] = useState(40);
  const [riskProfile, setRiskProfile] = useState("moderate");
  const [currentEquityPct, setCurrentEquityPct] = useState(60);
  const [currentDebtPct, setCurrentDebtPct] = useState(30);
  const [currentCashPct, setCurrentCashPct] = useState(10);
  const result = useMemo(
    () =>
      calcAssetAllocationCheck({
        age,
        riskProfile,
        currentEquityPct,
        currentDebtPct,
        currentCashPct,
      }),
    [age, riskProfile, currentEquityPct, currentDebtPct, currentCashPct]
  );

  return (
    <CalculatorShell
      title="Asset Allocation Checker"
      explanation="Compare your current equity–debt–cash mix with a simple age- and risk-based starting point. Real allocation needs risk capacity, goals, and existing holdings — use a portfolio review for that."
      results={
        <ResultCard
          title="Illustrative comparison"
          rows={[
            {
              label: "Suggested equity / debt / cash",
              value: `${Math.round(result.suggested.equity)}% / ${Math.round(result.suggested.debt)}% / ${Math.round(result.suggested.cash)}%`,
              emphasize: true,
            },
            {
              label: "Your current mix (normalised)",
              value: `${Math.round(result.current.equity)}% / ${Math.round(result.current.debt)}% / ${Math.round(result.current.cash)}%`,
            },
            {
              label: "Equity gap (suggested − current)",
              value: formatPercent(result.gaps.equity, 1),
            },
            {
              label: "Debt gap",
              value: formatPercent(result.gaps.debt, 1),
            },
            {
              label: "Cash gap",
              value: formatPercent(result.gaps.cash, 1),
            },
          ]}
        />
      }
    >
      <NumberField id="alloc-age" label="Your age" value={age} onChange={setAge} min={18} max={90} suffix="yrs" />
      <SelectField
        id="alloc-risk"
        label="Risk profile starting point"
        value={riskProfile}
        onChange={setRiskProfile}
        options={[
          { value: "conservative", label: "Conservative" },
          { value: "moderate", label: "Moderate" },
          { value: "aggressive", label: "Aggressive" },
        ]}
      />
      <NumberField id="alloc-eq" label="Current equity allocation" value={currentEquityPct} onChange={setCurrentEquityPct} min={0} max={100} suffix="%" />
      <NumberField id="alloc-debt" label="Current debt allocation" value={currentDebtPct} onChange={setCurrentDebtPct} min={0} max={100} suffix="%" />
      <NumberField id="alloc-cash" label="Current cash / liquid" value={currentCashPct} onChange={setCurrentCashPct} min={0} max={100} suffix="%" />
    </CalculatorShell>
  );
}

function EmergencyCalculator() {
  const [monthlyExpenses, setMonthlyExpenses] = useState(40000);
  const [monthsOfCover, setMonthsOfCover] = useState(6);
  const result = useMemo(
    () => calcEmergencyFund({ monthlyExpenses, monthsOfCover }),
    [monthlyExpenses, monthsOfCover]
  );

  return (
    <CalculatorShell
      title="Emergency Fund Calculator"
      explanation="Estimate a practical cash buffer from monthly essential expenses and the number of months you want covered. Keep emergency money liquid and separate from long-term equity risk."
      results={
        <ResultCard
          title="Illustrative result"
          rows={[
            { label: "Monthly expenses", value: formatInr(result.monthlyExpenses) },
            { label: "Months of cover", value: String(result.months) },
            {
              label: "Target emergency fund",
              value: formatInr(result.targetFund),
              emphasize: true,
            },
          ]}
        />
      }
    >
      <NumberField id="ef-expense" label="Essential monthly expenses" value={monthlyExpenses} onChange={setMonthlyExpenses} min={0} step={1000} suffix="₹" />
      <NumberField id="ef-months" label="Months of cover" value={monthsOfCover} onChange={setMonthsOfCover} min={3} max={18} step={1} suffix="mo" hint="Many households target 3–12 months depending on income stability." />
    </CalculatorShell>
  );
}

function SwpCalculator() {
  const [startingCorpus, setStartingCorpus] = useState(5000000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(25000);
  const [annualReturnPct, setAnnualReturnPct] = useState(7);
  const [years, setYears] = useState(20);
  const result = useMemo(
    () =>
      calcSwp({
        startingCorpus,
        monthlyWithdrawal,
        annualReturnPct,
        years,
      }),
    [startingCorpus, monthlyWithdrawal, annualReturnPct, years]
  );

  const depleteLabel =
    result.monthsUntilDepleted === Infinity
      ? "Beyond model horizon"
      : `${Math.floor(result.monthsUntilDepleted / 12)} yrs ${result.monthsUntilDepleted % 12} mo`;

  return (
    <CalculatorShell
      title="SWP Calculator"
      explanation="Model systematic monthly withdrawals from a corpus under an assumed return. See how long the corpus may last and what may remain after your chosen horizon. Sequence-of-returns risk is not fully modelled here."
      results={
        <ResultCard
          title="Illustrative result"
          rows={[
            {
              label: "Corpus after selected tenure",
              value: formatInr(result.endingCorpus),
              emphasize: true,
            },
            { label: "Total withdrawn (within tenure)", value: formatInr(result.totalWithdrawn) },
            { label: "Months sustained in tenure", value: String(result.monthsSurvived) },
            { label: "Approx. months until depleted", value: depleteLabel },
          ]}
        />
      }
    >
      <NumberField id="swp-corpus" label="Starting corpus" value={startingCorpus} onChange={setStartingCorpus} min={0} step={50000} suffix="₹" />
      <NumberField id="swp-withdraw" label="Monthly withdrawal" value={monthlyWithdrawal} onChange={setMonthlyWithdrawal} min={0} step={1000} suffix="₹" />
      <NumberField id="swp-return" label="Assumed annual return" value={annualReturnPct} onChange={setAnnualReturnPct} min={0} max={15} step={0.5} suffix="%" />
      <NumberField id="swp-years" label="Planning tenure" value={years} onChange={setYears} min={1} max={40} suffix="yrs" />
    </CalculatorShell>
  );
}

function CagrXirrCalculator() {
  const [beginningValue, setBeginningValue] = useState(100000);
  const [endingValue, setEndingValue] = useState(250000);
  const [years, setYears] = useState(5);
  const [investedAmount, setInvestedAmount] = useState(100000);
  const [finalValue, setFinalValue] = useState(250000);
  const [xirrYears, setXirrYears] = useState(5);

  const cagr = useMemo(
    () => calcCagr({ beginningValue, endingValue, years }),
    [beginningValue, endingValue, years]
  );
  const xirr = useMemo(
    () => calcSimpleXirr({ investedAmount, finalValue, years: xirrYears }),
    [investedAmount, finalValue, xirrYears]
  );

  return (
    <CalculatorShell
      title="CAGR & XIRR Calculators"
      explanation="CAGR shows the constant annual growth rate between a start and end value. The simplified XIRR view here uses one outflow and one inflow — enough for education. Irregular cash flows need a full XIRR with dated cash flows in a detailed review."
      results={
        <div className="space-y-4">
          <ResultCard
            title="CAGR result"
            rows={[
              {
                label: "Compound annual growth rate",
                value: formatPercent(cagr.cagrPct),
                emphasize: true,
              },
            ]}
          />
          <ResultCard
            title="Simplified XIRR (single cash-flow pair)"
            rows={[
              {
                label: "Illustrative annualised rate",
                value: formatPercent(xirr.cagrPct),
                emphasize: true,
              },
            ]}
          />
        </div>
      }
    >
      <p className="text-sm font-semibold text-[#293C7D]">CAGR inputs</p>
      <NumberField id="cagr-pv" label="Beginning value" value={beginningValue} onChange={setBeginningValue} min={1} step={1000} suffix="₹" />
      <NumberField id="cagr-fv" label="Ending value" value={endingValue} onChange={setEndingValue} min={0} step={1000} suffix="₹" />
      <NumberField id="cagr-years" label="Years held" value={years} onChange={setYears} min={0.25} max={40} step={0.25} suffix="yrs" />
      <p className="text-sm font-semibold text-[#293C7D] pt-2">Simplified XIRR inputs</p>
      <NumberField id="xirr-in" label="Amount invested (t = 0)" value={investedAmount} onChange={setInvestedAmount} min={1} step={1000} suffix="₹" />
      <NumberField id="xirr-out" label="Final value / redemption" value={finalValue} onChange={setFinalValue} min={0} step={1000} suffix="₹" />
      <NumberField id="xirr-years" label="Years between cash flows" value={xirrYears} onChange={setXirrYears} min={0.25} max={40} step={0.25} suffix="yrs" />
    </CalculatorShell>
  );
}

function EmiVsInvestCalculator() {
  const [loanPrincipal, setLoanPrincipal] = useState(2000000);
  const [loanRatePct, setLoanRatePct] = useState(9);
  const [tenureYears, setTenureYears] = useState(15);
  const [investmentReturnPct, setInvestmentReturnPct] = useState(10);
  const result = useMemo(
    () =>
      calcEmiVsInvestment({
        loanPrincipal,
        loanRatePct,
        tenureYears,
        investmentReturnPct,
      }),
    [loanPrincipal, loanRatePct, tenureYears, investmentReturnPct]
  );

  return (
    <CalculatorShell
      title="EMI vs Investment Calculator"
      explanation="Compare the interest cost of a loan EMI path with the illustrative future value if the same EMI amount were invested as a SIP at an assumed return. Liquidity, tax, and risk differ — this is a trade-off lens, not advice to prepay or invest."
      results={
        <ResultCard
          title="Illustrative comparison"
          rows={[
            { label: "Monthly EMI", value: formatInr(result.emi), emphasize: true },
            { label: "Total loan interest", value: formatInr(result.totalInterestOnLoan) },
            { label: "Total loan outflow", value: formatInr(result.totalLoanOutflow) },
            {
              label: "If EMI invested as SIP (FV)",
              value: formatInr(result.investmentFutureValue),
            },
            { label: "Estimated investment gains", value: formatInr(result.investmentGains) },
          ]}
        />
      }
    >
      <NumberField id="emi-principal" label="Loan principal" value={loanPrincipal} onChange={setLoanPrincipal} min={0} step={50000} suffix="₹" />
      <NumberField id="emi-rate" label="Loan interest rate" value={loanRatePct} onChange={setLoanRatePct} min={0} max={25} step={0.1} suffix="%" />
      <NumberField id="emi-tenure" label="Loan tenure" value={tenureYears} onChange={setTenureYears} min={1} max={30} suffix="yrs" />
      <NumberField id="emi-invest" label="Assumed investment return" value={investmentReturnPct} onChange={setInvestmentReturnPct} min={0} max={20} step={0.5} suffix="%" />
    </CalculatorShell>
  );
}

const CALCULATOR_MAP = {
  sip: SipCalculator,
  lumpsum: LumpsumCalculator,
  retirement: RetirementCalculator,
  education: EducationCalculator,
  insurance: InsuranceCalculator,
  allocation: AllocationCalculator,
  emergency: EmergencyCalculator,
  swp: SwpCalculator,
  "cagr-xirr": CagrXirrCalculator,
  "emi-vs-invest": EmiVsInvestCalculator,
};

function isKnownToolId(id) {
  return WEALTH_TOOLS.some((t) => t.id === id);
}

function readToolState(searchParams) {
  const tab = (searchParams.get("tab") || "").toLowerCase();
  const tool = (searchParams.get("tool") || "").toLowerCase();

  if (isKnownToolId(tool)) {
    return { section: "calculators", toolId: tool };
  }
  if (tab === "calculators") {
    return { section: "calculators", toolId: "sip" };
  }
  if (tab === "overview") {
    return { section: "overview", toolId: "sip" };
  }

  // Legacy hash support (normalize away from double-hash Link bugs)
  if (typeof window !== "undefined") {
    const rawHash = window.location.hash.replace(/^#/, "").toLowerCase();
    // Guard against "#sip#retirement" style URLs — use the last segment
    const hash = rawHash.includes("#")
      ? rawHash.split("#").filter(Boolean).pop()
      : rawHash;
    if (hash === "calculators" || hash === "wealth-calculators") {
      return { section: "calculators", toolId: "sip" };
    }
    if (isKnownToolId(hash)) {
      return { section: "calculators", toolId: hash };
    }
  }

  return { section: "overview", toolId: "sip" };
}

function scrollToWealthSection(sectionId) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(sectionId);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function buildWealthToolsHref({ section, toolId }) {
  if (section === "calculators") {
    const id = isKnownToolId(toolId) ? toolId : "sip";
    return `/wealth-tools?tool=${id}`;
  }
  return "/wealth-tools";
}

export default function WealthToolsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState("overview");
  const [activeId, setActiveId] = useState("sip");
  const [isMobilePickerOpen, setIsMobilePickerOpen] = useState(false);

  useEffect(() => {
    const { section, toolId } = readToolState(searchParams);
    setActiveSection(section);
    setActiveId(toolId);

    // Clear leftover / broken hashes (e.g. #sip#retirement) to a clean query URL
    if (typeof window !== "undefined" && window.location.hash) {
      const cleanHref = buildWealthToolsHref({ section, toolId });
      router.replace(cleanHref, { scroll: false });
      return;
    }

    if (section === "calculators") {
      window.requestAnimationFrame(() => {
        setTimeout(() => scrollToWealthSection("wealth-calculators"), 50);
      });
    }
  }, [searchParams, router]);

  useEffect(() => {
    if (!isMobilePickerOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMobilePickerOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobilePickerOpen]);

  const openCalculators = (toolId = "sip") => {
    const id = isKnownToolId(toolId) ? toolId : "sip";
    setActiveSection("calculators");
    setActiveId(id);
    setIsMobilePickerOpen(false);
    router.replace(buildWealthToolsHref({ section: "calculators", toolId: id }), {
      scroll: false,
    });
    scrollToWealthSection("wealth-calculators");
  };

  const openOverview = () => {
    setActiveSection("overview");
    router.replace("/wealth-tools", { scroll: false });
    scrollToWealthSection("wealth-tools-overview");
  };

  const selectTool = (id) => {
    openCalculators(id);
  };

  const activeIndex = Math.max(
    0,
    WEALTH_TOOLS.findIndex((tool) => tool.id === activeId)
  );
  const activeTool = WEALTH_TOOLS[activeIndex] || WEALTH_TOOLS[0];
  const ActiveIcon = activeTool.Icon;
  const ActiveCalculator = CALCULATOR_MAP[activeId] || SipCalculator;

  const goToAdjacentTool = (direction) => {
    const nextIndex =
      (activeIndex + direction + WEALTH_TOOLS.length) % WEALTH_TOOLS.length;
    selectTool(WEALTH_TOOLS[nextIndex].id);
  };

  return (
    <>
      {/* Page tabs: Overview | Calculators */}
      <div className="sticky top-16 z-40 border-b border-[#D6E4EE] bg-[#F6FDFF]/95 backdrop-blur-md">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div
            role="tablist"
            aria-label="Wealth Tools sections"
            className="flex items-center gap-1 py-2.5 overflow-x-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeSection === "overview"}
              onClick={openOverview}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeSection === "overview"
                  ? "bg-[#293C7D] text-white shadow-[0_8px_20px_-12px_rgba(41,60,125,0.7)]"
                  : "bg-white text-[#293C7D] border border-[#D6E4EE] hover:border-[#293C7D]"
              }`}
            >
              Overview
            </button>
            <button
              type="button"
              role="tab"
              id="calculators-tab"
              aria-selected={activeSection === "calculators"}
              onClick={() => openCalculators(activeId)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeSection === "calculators"
                  ? "bg-[#293C7D] text-white shadow-[0_8px_20px_-12px_rgba(41,60,125,0.7)]"
                  : "bg-white text-[#293C7D] border border-[#D6E4EE] hover:border-[#293C7D]"
              }`}
            >
              Calculators
            </button>
            {activeSection === "calculators" ? (
              <span className="ml-2 hidden sm:inline text-xs text-[#6B7C8A]">
                {activeTool.title} active
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <section
        id="wealth-tools-overview"
        aria-labelledby="wealth-tools-intro-heading"
        className="bg-white py-14 md:py-16 scroll-mt-36"
      >
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <FadeUpOneByOneAnimation className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#479AD2] mb-3">
                Planning utilities
              </p>
              <h2
                id="wealth-tools-intro-heading"
                className="text-[26px] md:text-[32px] font-light text-[#2D2D2D] leading-[125%] mb-4"
              >
                Explore goals with{" "}
                <strong className="font-semibold">clear assumptions</strong>
              </h2>
              <p className="text-base md:text-lg text-[#4D4D4D] leading-relaxed mb-4">
                These calculators help you frame SIP growth, corpus needs, insurance cover,
                allocation starting points, and withdrawal trade-offs. Every result is
                illustrative — not advice, not a forecast, and not a guaranteed return.
              </p>
              <p className="text-base text-[#4D4D4D] leading-relaxed">
                When you are ready for suitability-based next steps, continue with a
                research-led{" "}
                <Link
                  href="/portfolio-review-vadodara"
                  className="font-semibold text-[#293C7D] underline-offset-2 hover:underline"
                >
                  portfolio review
                </Link>{" "}
                guided by Partha Shah, SEBI Registered Research Analyst INH000017815.
              </p>
            </FadeUpOneByOneAnimation>

            <FadeUpOneByOneAnimation className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[24px] border border-[#D0E0EC] bg-gradient-to-br from-[#232D63] to-[#293C7D] p-6 md:p-7 h-full shadow-[0_20px_40px_-28px_rgba(35,45,99,0.55)]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: "url('/images/insurance/risk-management/bg.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "contain",
                  }}
                />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] !text-[#FFC300] mb-2 m-0">
                    How to use
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold !text-white mb-4 m-0">
                    Four steps to a clearer planning view
                  </h3>
                  <ol className="list-none m-0 p-0 space-y-3">
                    {[
                      "Pick a calculator from the library",
                      "Enter assumptions you believe are realistic",
                      "Read the result as a planning range, not a promise",
                      "Book a portfolio review to connect numbers to holdings",
                    ].map((step, index) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FFC300] text-xs font-bold text-[#232D63]">
                          {index + 1}
                        </span>
                        <span className="text-sm md:text-[15px] !text-white/85 leading-relaxed pt-0.5">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </FadeUpOneByOneAnimation>
          </div>
        </div>
      </section>

      <section
        id="wealth-calculators"
        aria-label="Wealth calculators"
        className="relative overflow-hidden border-t border-[#D6E4EE] py-10 md:py-16 scroll-mt-36"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#E8F4FB_0%,_#F6FDFF_45%,_#EEF5FA_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(71,154,210,0.18) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2] mb-2">
                Interactive suite
              </p>
              <h2 className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] m-0 leading-tight">
                Choose a tool,{" "}
                <strong className="font-semibold">set your assumptions</strong>
              </h2>
            </div>
            <p className="text-sm text-[#6B7C8A] m-0 md:max-w-[320px] md:text-right leading-relaxed">
              {WEALTH_TOOLS.length} calculators · results update as you type ·
              always illustrative
            </p>
          </div>

          {/* Mobile: sticky tool picker */}
          <div className="lg:hidden sticky top-16 z-30 mb-5 -mx-4 px-4">
            <div className="rounded-[22px] border border-[#D0E0EC] bg-white/95 backdrop-blur-md shadow-[0_16px_40px_-24px_rgba(41,60,125,0.55)] overflow-hidden">
              <div className="flex items-center gap-2 p-2.5">
                <button
                  type="button"
                  onClick={() => goToAdjacentTool(-1)}
                  aria-label="Previous calculator"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D6E4EE] bg-[#F6FDFF] text-[#293C7D] active:bg-[#E8F4FB]"
                >
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsMobilePickerOpen(true)}
                  aria-haspopup="dialog"
                  aria-expanded={isMobilePickerOpen}
                  className="min-w-0 flex-1 flex items-center gap-3 rounded-xl bg-[#293C7D] px-3 py-2.5 text-left active:bg-[#232D63]"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-[#FFC300]">
                    <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.12em] !text-white/55">
                      Tool {String(activeIndex + 1).padStart(2, "0")} of{" "}
                      {String(WEALTH_TOOLS.length).padStart(2, "0")}
                    </span>
                    <span className="block text-sm font-semibold !text-white truncate leading-snug">
                      {activeTool.title}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 shrink-0 rounded-lg bg-[#FFC300] px-2.5 py-1.5 text-[11px] font-bold text-[#232D63]">
                    All
                    <ChevronDownIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => goToAdjacentTool(1)}
                  aria-label="Next calculator"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D6E4EE] bg-[#F6FDFF] text-[#293C7D] active:bg-[#E8F4FB]"
                >
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="px-3 pb-3">
                <div className="flex gap-1.5">
                  {WEALTH_TOOLS.map((tool, index) => (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => selectTool(tool.id)}
                      aria-label={tool.title}
                      aria-current={tool.id === activeId ? "true" : undefined}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${
                        tool.id === activeId
                          ? "bg-[#FFC300]"
                          : index < activeIndex
                            ? "bg-[#479AD2]/55"
                            : "bg-[#D6E4EE]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: full tool sheet */}
          {isMobilePickerOpen ? (
            <div
              className="lg:hidden fixed inset-0 z-50"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-tool-picker-title"
            >
              <button
                type="button"
                aria-label="Close tool list"
                className="absolute inset-0 bg-[#232D63]/55 backdrop-blur-[2px]"
                onClick={() => setIsMobilePickerOpen(false)}
              />
              <div className="absolute inset-x-0 bottom-0 max-h-[85vh] rounded-t-[28px] bg-white shadow-[0_-20px_60px_-20px_rgba(35,45,99,0.45)] flex flex-col animate-fadeUp">
                <div className="flex items-center justify-between gap-3 px-5 pt-4 pb-3 border-b border-[#E6F0F7]">
                  <div>
                    <p
                      id="mobile-tool-picker-title"
                      className="text-base font-semibold text-[#2D2D2D] m-0"
                    >
                      Choose a calculator
                    </p>
                    <p className="text-xs text-[#6B7C8A] m-0 mt-0.5">
                      {WEALTH_TOOLS.length} tools · tap to open
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMobilePickerOpen(false)}
                    aria-label="Close"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#D6E4EE] text-[#293C7D]"
                  >
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <ul className="list-none m-0 p-3 overflow-y-auto overscroll-contain space-y-2 pb-[max(1rem,env(safe-area-inset-bottom))]">
                  {WEALTH_TOOLS.map(({ id, title, short, Icon }, index) => {
                    const isActive = id === activeId;
                    return (
                      <li key={id}>
                        <button
                          type="button"
                          onClick={() => selectTool(id)}
                          aria-current={isActive ? "true" : undefined}
                          className={`w-full text-left rounded-2xl border px-3.5 py-3.5 transition-colors ${
                            isActive
                              ? "border-[#293C7D] bg-[#293C7D]"
                              : "border-[#E6F0F7] bg-[#F8FCFF] active:bg-[#EEF6FB]"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                                isActive
                                  ? "bg-white/10 border-white/15 text-[#FFC300]"
                                  : "bg-white border-[#D6E4EE] text-[#293C7D]"
                              }`}
                            >
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span
                                className={`block text-[10px] font-bold uppercase tracking-[0.12em] mb-0.5 ${
                                  isActive ? "!text-white/55" : "!text-[#7A93A8]"
                                }`}
                              >
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span
                                className={`block text-[15px] font-semibold leading-snug ${
                                  isActive ? "!text-white" : "!text-[#2D2D2D]"
                                }`}
                              >
                                {title}
                              </span>
                              <span
                                className={`block text-xs mt-0.5 leading-snug ${
                                  isActive ? "!text-white/65" : "!text-[#6B7C8A]"
                                }`}
                              >
                                {short}
                              </span>
                            </span>
                            {isActive ? (
                              <span className="shrink-0 rounded-full bg-[#FFC300] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#232D63]">
                                Active
                              </span>
                            ) : null}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : null}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
            <nav
              aria-label="Select a calculator"
              className="hidden lg:block lg:col-span-4 xl:col-span-3"
            >
              <div className="sticky top-24 rounded-[24px] border border-[#D0E0EC] bg-white/80 backdrop-blur-sm p-2.5 shadow-[0_18px_40px_-32px_rgba(41,60,125,0.5)]">
                <p className="px-3 pt-2 pb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7A93A8]">
                  Tool library
                </p>
                <ul className="list-none m-0 p-0 space-y-1">
                  {WEALTH_TOOLS.map(({ id, title, short, Icon }, index) => {
                    const isActive = id === activeId;
                    return (
                      <li key={id}>
                        <button
                          type="button"
                          onClick={() => selectTool(id)}
                          aria-current={isActive ? "true" : undefined}
                          className={`group relative w-full text-left rounded-2xl px-3 py-3 transition-all duration-200 ${
                            isActive
                              ? "bg-[#293C7D] text-white shadow-[0_12px_28px_-14px_rgba(41,60,125,0.9)]"
                              : "text-[#2D2D2D] hover:bg-[#F6FDFF]"
                          }`}
                        >
                          {isActive ? (
                            <span
                              aria-hidden="true"
                              className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-[#FFC300]"
                            />
                          ) : null}
                          <span className="flex items-start gap-3">
                            <span
                              className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                                isActive
                                  ? "bg-white/10 border-white/15 text-[#FFC300]"
                                  : "bg-[#F6FDFF] border-[#D6E4EE] text-[#293C7D] group-hover:border-[#293C7D]/35"
                              }`}
                            >
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span className="min-w-0 pt-0.5">
                              <span
                                className={`block text-[10px] font-bold uppercase tracking-[0.12em] mb-0.5 ${
                                  isActive ? "!text-white/55" : "text-[#7A93A8]"
                                }`}
                              >
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span
                                className={`block text-sm font-semibold leading-snug ${
                                  isActive ? "!text-white" : "!text-[#2D2D2D]"
                                }`}
                              >
                                {title}
                              </span>
                              <span
                                className={`block text-xs mt-0.5 leading-snug ${
                                  isActive ? "!text-white/65" : "text-[#6B7C8A]"
                                }`}
                              >
                                {short}
                              </span>
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>

            <div className="lg:col-span-8 xl:col-span-9 min-w-0">
              <div key={activeId} className="animate-fadeUp">
                <ActiveCalculator />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
          <FadeUpOneByOneAnimation>
            <h2 className="text-[22px] md:text-[28px] font-light text-[#2D2D2D] mb-3">
              Related <strong className="font-semibold">next steps</strong>
            </h2>
            <p className="text-base text-[#4D4D4D] mb-6 max-w-[640px]">
              Calculators frame questions. A research-led review connects them to your
              actual portfolio, risk, and goals.
            </p>
          </FadeUpOneByOneAnimation>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0">
            {[
              {
                title: "Portfolio Review",
                href: "/portfolio-review-vadodara",
                description: "Upload holdings or book an office / video review.",
              },
              {
                title: "Research Process",
                href: "/research-process",
                description: "See the five-step method behind planning support.",
              },
              {
                title: "Retirement Planning",
                href: "/retirement-planning-vadodara",
                description: "Corpus, allocation, and withdrawal review in Vadodara.",
              },
              {
                title: "Insurance Planning",
                href: "/insurance-planning-vadodara",
                description: "Term and health cover review without product push.",
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block h-full rounded-[20px] border border-[#D6E4EE] bg-[#F6FDFF] p-5 hover:border-[#293C7D] hover:bg-white transition-colors"
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
