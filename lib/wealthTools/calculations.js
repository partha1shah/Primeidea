/** Pure calculator helpers for /wealth-tools. Outputs are illustrative only. */

export function clampNumber(value, min = 0, max = Number.MAX_SAFE_INTEGER) {
  const n = Number(value);
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

export function formatInr(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n)) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export function formatPercent(value, digits = 2) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "0%";
  return `${n.toFixed(digits)}%`;
}

/** SIP future value (end-of-month contribution). */
export function calcSipFv({ monthlyInvestment, annualReturnPct, years }) {
  const p = clampNumber(monthlyInvestment, 0);
  const n = Math.round(clampNumber(years, 0, 60) * 12);
  const r = clampNumber(annualReturnPct, -50, 50) / 100 / 12;
  if (n === 0 || p === 0) {
    return { futureValue: 0, invested: 0, estimatedGains: 0, months: 0 };
  }
  let futureValue;
  if (Math.abs(r) < 1e-12) {
    futureValue = p * n;
  } else {
    futureValue = p * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
  }
  const invested = p * n;
  return {
    futureValue,
    invested,
    estimatedGains: futureValue - invested,
    months: n,
  };
}

export function calcLumpsumFv({ principal, annualReturnPct, years }) {
  const p = clampNumber(principal, 0);
  const y = clampNumber(years, 0, 60);
  const r = clampNumber(annualReturnPct, -50, 50) / 100;
  const futureValue = p * Math.pow(1 + r, y);
  return {
    futureValue,
    invested: p,
    estimatedGains: futureValue - p,
  };
}

/**
 * Required retirement corpus using inflated annual spend / safe withdrawal rate.
 */
export function calcRetirementCorpus({
  currentAge,
  retirementAge,
  monthlyExpenseToday,
  inflationPct,
  withdrawalRatePct,
  existingCorpus,
}) {
  const age = clampNumber(currentAge, 18, 90);
  const retireAt = clampNumber(retirementAge, age, 95);
  const years = retireAt - age;
  const expense = clampNumber(monthlyExpenseToday, 0);
  const inflation = clampNumber(inflationPct, 0, 20) / 100;
  const swr = clampNumber(withdrawalRatePct, 1, 10) / 100;
  const existing = clampNumber(existingCorpus, 0);

  const annualAtRetirement = expense * 12 * Math.pow(1 + inflation, years);
  const requiredCorpus = swr > 0 ? annualAtRetirement / swr : 0;
  const gap = Math.max(0, requiredCorpus - existing);

  return {
    yearsToRetirement: years,
    annualSpendAtRetirement: annualAtRetirement,
    requiredCorpus,
    existingCorpus: existing,
    gap,
  };
}

export function calcChildEducation({
  currentCost,
  yearsUntilStart,
  educationInflationPct,
  existingSavings,
  annualReturnPct,
}) {
  const cost = clampNumber(currentCost, 0);
  const years = clampNumber(yearsUntilStart, 0, 30);
  const inflation = clampNumber(educationInflationPct, 0, 20) / 100;
  const savings = clampNumber(existingSavings, 0);
  const rAnnual = clampNumber(annualReturnPct, 0, 30) / 100;

  const futureCost = cost * Math.pow(1 + inflation, years);
  const futureSavings = savings * Math.pow(1 + rAnnual, years);
  const shortfall = Math.max(0, futureCost - futureSavings);

  const months = Math.max(1, Math.round(years * 12));
  const r = rAnnual / 12;
  let requiredSip = 0;
  if (shortfall > 0) {
    if (Math.abs(r) < 1e-12) {
      requiredSip = shortfall / months;
    } else {
      requiredSip =
        shortfall / (((Math.pow(1 + r, months) - 1) / r) * (1 + r));
    }
  }

  return {
    futureCost,
    futureSavings,
    shortfall,
    requiredMonthlySip: requiredSip,
  };
}

export function calcInsuranceNeed({
  annualIncome,
  incomeReplacementYears,
  outstandingLiabilities,
  existingCover,
  liquidAssets,
}) {
  const income = clampNumber(annualIncome, 0);
  const years = clampNumber(incomeReplacementYears, 0, 40);
  const liabilities = clampNumber(outstandingLiabilities, 0);
  const cover = clampNumber(existingCover, 0);
  const assets = clampNumber(liquidAssets, 0);

  const incomeNeed = income * years;
  const grossNeed = incomeNeed + liabilities;
  const suggestedCover = Math.max(0, grossNeed - cover - assets);

  return {
    incomeNeed,
    grossNeed,
    suggestedCover,
    existingCover: cover,
  };
}

export function suggestedAllocation({ age, riskProfile }) {
  const a = clampNumber(age, 18, 90);
  let equity = Math.max(20, Math.min(80, 100 - a));

  if (riskProfile === "conservative") equity = Math.max(15, equity - 15);
  if (riskProfile === "aggressive") equity = Math.min(85, equity + 15);

  const remainder = 100 - equity;
  const debt = Math.round(remainder * 0.75);
  const cash = 100 - equity - debt;

  return { equity, debt, cash };
}

export function calcAssetAllocationCheck({
  age,
  riskProfile,
  currentEquityPct,
  currentDebtPct,
  currentCashPct,
}) {
  const suggested = suggestedAllocation({ age, riskProfile });
  const current = {
    equity: clampNumber(currentEquityPct, 0, 100),
    debt: clampNumber(currentDebtPct, 0, 100),
    cash: clampNumber(currentCashPct, 0, 100),
  };
  const total = current.equity + current.debt + current.cash;
  const normalized =
    total > 0
      ? {
          equity: (current.equity / total) * 100,
          debt: (current.debt / total) * 100,
          cash: (current.cash / total) * 100,
        }
      : { equity: 0, debt: 0, cash: 0 };

  return {
    suggested,
    current: normalized,
    gaps: {
      equity: suggested.equity - normalized.equity,
      debt: suggested.debt - normalized.debt,
      cash: suggested.cash - normalized.cash,
    },
  };
}

export function calcEmergencyFund({ monthlyExpenses, monthsOfCover }) {
  const expense = clampNumber(monthlyExpenses, 0);
  const months = clampNumber(monthsOfCover, 1, 24);
  return {
    targetFund: expense * months,
    months,
    monthlyExpenses: expense,
  };
}

/** SWP: remaining corpus after withdrawals; months until depleted (approx). */
export function calcSwp({
  startingCorpus,
  monthlyWithdrawal,
  annualReturnPct,
  years,
}) {
  const corpus0 = clampNumber(startingCorpus, 0);
  const w = clampNumber(monthlyWithdrawal, 0);
  const months = Math.round(clampNumber(years, 0, 50) * 12);
  const r = clampNumber(annualReturnPct, -20, 30) / 100 / 12;

  let balance = corpus0;
  let monthsSurvived = 0;
  for (let i = 0; i < months; i += 1) {
    balance = balance * (1 + r) - w;
    if (balance < 0) {
      balance = 0;
      break;
    }
    monthsSurvived = i + 1;
  }

  let monthsUntilDepleted = monthsSurvived;
  if (balance > 0 && monthsSurvived === months) {
    // Continue until depleted or hard cap
    let extra = 0;
    let b = balance;
    while (b > 0 && extra < 600) {
      b = b * (1 + r) - w;
      extra += 1;
      if (b <= 0) break;
    }
    monthsUntilDepleted = months + (b <= 0 ? extra : Infinity);
  }

  return {
    endingCorpus: balance,
    totalWithdrawn: w * monthsSurvived,
    monthsSurvived,
    monthsUntilDepleted,
  };
}

export function calcCagr({ beginningValue, endingValue, years }) {
  const pv = clampNumber(beginningValue, 0.01);
  const fv = clampNumber(endingValue, 0);
  const y = clampNumber(years, 0.01, 60);
  if (fv <= 0) return { cagrPct: -100 };
  const cagr = Math.pow(fv / pv, 1 / y) - 1;
  return { cagrPct: cagr * 100 };
}

/**
 * Simplified XIRR for one outflow at t=0 and one inflow at t=years.
 * Equivalent to CAGR for this cash-flow shape; labelled for education.
 */
export function calcSimpleXirr({ investedAmount, finalValue, years }) {
  return calcCagr({
    beginningValue: investedAmount,
    endingValue: finalValue,
    years,
  });
}

export function calcEmi({ principal, annualRatePct, tenureYears }) {
  const p = clampNumber(principal, 0);
  const n = Math.round(clampNumber(tenureYears, 0, 40) * 12);
  const r = clampNumber(annualRatePct, 0, 40) / 100 / 12;
  if (n === 0 || p === 0) {
    return { emi: 0, totalPayment: 0, totalInterest: 0, months: 0 };
  }
  let emi;
  if (Math.abs(r) < 1e-12) {
    emi = p / n;
  } else {
    emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }
  const totalPayment = emi * n;
  return {
    emi,
    totalPayment,
    totalInterest: totalPayment - p,
    months: n,
  };
}

export function calcEmiVsInvestment({
  loanPrincipal,
  loanRatePct,
  tenureYears,
  investmentReturnPct,
}) {
  const loan = calcEmi({
    principal: loanPrincipal,
    annualRatePct: loanRatePct,
    tenureYears,
  });
  const invest = calcSipFv({
    monthlyInvestment: loan.emi,
    annualReturnPct: investmentReturnPct,
    years: tenureYears,
  });
  return {
    emi: loan.emi,
    totalInterestOnLoan: loan.totalInterest,
    totalLoanOutflow: loan.totalPayment,
    investmentFutureValue: invest.futureValue,
    investmentGains: invest.estimatedGains,
    difference: invest.futureValue - loan.totalInterest,
  };
}
