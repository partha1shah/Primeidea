/** Questionnaire definitions and helpers for /financial-profile. */

export const STORAGE_KEY = "primeidea-financial-profile-v1";

export const STEPS = [
  {
    "id": "investor-profile",
    "title": "Investor Profile",
    "heading": "Let's start with you",
    "count": "Q1–6",
    "section": "Investor Profile"
  },
  {
    "id": "basic-details",
    "title": "Basic Details",
    "heading": "Your financial experience",
    "count": "Q7–9",
    "section": "Basic Details"
  },
  {
    "id": "financial-details",
    "title": "Financial Details",
    "heading": "Your financial context",
    "count": "Q10–13",
    "section": "Financial Details"
  },
  {
    "id": "investment-amounts",
    "title": "Investment Amounts",
    "heading": "Approximate current values",
    "count": "Q14",
    "section": "Investment Amounts"
  },
  {
    "id": "allocation-liquidity",
    "title": "Allocation & Liquidity",
    "heading": "How your money is positioned",
    "count": "Q15–17",
    "section": "Allocation & Liquidity"
  },
  {
    "id": "goals-horizon",
    "title": "Goals & Horizon",
    "heading": "Where you want to go",
    "count": "Q18–21",
    "section": "Goals & Horizon"
  },
  {
    "id": "liabilities",
    "title": "Liabilities",
    "heading": "Your borrowing commitments",
    "count": "Q22–24",
    "section": "Liabilities"
  },
  {
    "id": "risk-market",
    "title": "Risk & Market View",
    "heading": "How you experience risk",
    "count": "Q25–28",
    "section": "Risk & Market View"
  },
  {
    "id": "future-plans",
    "title": "Future Plans",
    "heading": "What comes next",
    "count": "Q29–31",
    "section": "Future Plans"
  },
  {
    "id": "will-estate",
    "title": "Will & Estate",
    "heading": "Protecting your family's future",
    "count": "Q32–34",
    "section": "Will & Estate"
  },
  {
    "id": "feedback",
    "title": "Feedback",
    "heading": "Anything else we should know?",
    "count": "Q35",
    "section": "Feedback"
  }
];

export const QUESTIONNAIRE = [
  {
    "questionId": "Q1",
    "section": "Investor Profile",
    "question": "Full name",
    "required": true,
    "fields": [
      {
        "fieldName": "fullName",
        "answerType": "text"
      }
    ]
  },
  {
    "questionId": "Q2",
    "section": "Investor Profile",
    "question": "Mobile number",
    "required": true,
    "fields": [
      {
        "fieldName": "mobile",
        "answerType": "text"
      }
    ]
  },
  {
    "questionId": "Q3",
    "section": "Investor Profile",
    "question": "Email address",
    "required": true,
    "fields": [
      {
        "fieldName": "email",
        "answerType": "text"
      }
    ]
  },
  {
    "questionId": "Q4",
    "section": "Investor Profile",
    "question": "City of residence",
    "required": true,
    "fields": [
      {
        "fieldName": "city",
        "answerType": "text"
      }
    ]
  },
  {
    "questionId": "Q5",
    "section": "Investor Profile",
    "question": "Profession / occupation",
    "required": false,
    "fields": [
      {
        "fieldName": "profession",
        "answerType": "text"
      }
    ]
  },
  {
    "questionId": "Q6",
    "section": "Investor Profile",
    "question": "Educational qualification",
    "required": false,
    "fields": [
      {
        "fieldName": "education",
        "answerType": "text"
      }
    ]
  },
  {
    "questionId": "Q7",
    "section": "Basic Details",
    "question": "Age group",
    "required": false,
    "fields": [
      {
        "fieldName": "ageGroup",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Below 25",
            "label": "Below 25"
          },
          {
            "value": "25–35",
            "label": "25–35"
          },
          {
            "value": "36–45",
            "label": "36–45"
          },
          {
            "value": "46–55",
            "label": "46–55"
          },
          {
            "value": "56–65",
            "label": "56–65"
          },
          {
            "value": "Above 65",
            "label": "Above 65"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q8",
    "section": "Basic Details",
    "question": "Investment experience",
    "required": false,
    "fields": [
      {
        "fieldName": "investmentExperience",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Less than 1 year",
            "label": "Less than 1 year"
          },
          {
            "value": "1–3 years",
            "label": "1–3 years"
          },
          {
            "value": "3–5 years",
            "label": "3–5 years"
          },
          {
            "value": "5–10 years",
            "label": "5–10 years"
          },
          {
            "value": "More than 10 years",
            "label": "More than 10 years"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q9",
    "section": "Basic Details",
    "question": "Asset classes invested in",
    "required": false,
    "instructions": "Select all that apply.",
    "fields": [
      {
        "fieldName": "assetClasses",
        "answerType": "multiple_choice",
        "options": [
          {
            "value": "Mutual Funds",
            "label": "Mutual Funds"
          },
          {
            "value": "Equities / Stocks",
            "label": "Equities / Stocks"
          },
          {
            "value": "Insurance Products",
            "label": "Insurance Products"
          },
          {
            "value": "PMS",
            "label": "PMS"
          },
          {
            "value": "AIF",
            "label": "AIF"
          },
          {
            "value": "Real Estate",
            "label": "Real Estate"
          },
          {
            "value": "ESOP",
            "label": "ESOP"
          },
          {
            "value": "EPF / PPF",
            "label": "EPF / PPF"
          },
          {
            "value": "Gold",
            "label": "Gold"
          },
          {
            "value": "Fixed Deposit / Bonds",
            "label": "Fixed Deposit / Bonds"
          },
          {
            "value": "Other",
            "label": "Other"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q10",
    "section": "Financial Details",
    "question": "Income-tax bracket",
    "required": false,
    "fields": [
      {
        "fieldName": "taxBracket",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Below ₹5 lakh",
            "label": "Below ₹5 lakh"
          },
          {
            "value": "₹5–10 lakh",
            "label": "₹5–10 lakh"
          },
          {
            "value": "₹10–20 lakh",
            "label": "₹10–20 lakh"
          },
          {
            "value": "Above ₹20 lakh",
            "label": "Above ₹20 lakh"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q11",
    "section": "Financial Details",
    "question": "Family members, including self",
    "required": false,
    "fields": [
      {
        "fieldName": "familyMembers",
        "answerType": "number"
      }
    ]
  },
  {
    "questionId": "Q12",
    "section": "Financial Details",
    "question": "Monthly family cashflow / net income",
    "required": false,
    "fields": [
      {
        "fieldName": "monthlyCashflow",
        "answerType": "number",
        "unit": "INR"
      }
    ]
  },
  {
    "questionId": "Q13",
    "section": "Financial Details",
    "question": "Does any family member live or work abroad?",
    "required": false,
    "fields": [
      {
        "fieldName": "familyAbroad",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Yes",
            "label": "Yes"
          },
          {
            "value": "No",
            "label": "No"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q14",
    "section": "Investment Amounts",
    "question": "Current approximate value of investments",
    "required": false,
    "instructions": "Leave blank where not applicable. Exact figures are not required.",
    "fields": [
      {
        "fieldName": "mfValue1",
        "answerType": "number",
        "label": "Equity mutual funds",
        "group": "Mutual funds",
        "unit": "INR"
      },
      {
        "fieldName": "mfValue2",
        "answerType": "number",
        "label": "Debt mutual funds",
        "group": "Mutual funds",
        "unit": "INR"
      },
      {
        "fieldName": "mfValue3",
        "answerType": "number",
        "label": "Hybrid mutual funds",
        "group": "Mutual funds",
        "unit": "INR"
      },
      {
        "fieldName": "equityValue1",
        "answerType": "number",
        "label": "Large-cap stocks",
        "group": "Equities / stocks",
        "unit": "INR"
      },
      {
        "fieldName": "equityValue2",
        "answerType": "number",
        "label": "Mid-cap stocks",
        "group": "Equities / stocks",
        "unit": "INR"
      },
      {
        "fieldName": "equityValue3",
        "answerType": "number",
        "label": "Small-cap stocks",
        "group": "Equities / stocks",
        "unit": "INR"
      },
      {
        "fieldName": "insuranceValue1",
        "answerType": "number",
        "label": "ULIPs",
        "group": "Insurance",
        "unit": "INR"
      },
      {
        "fieldName": "insuranceValue2",
        "answerType": "number",
        "label": "Traditional / term plans",
        "group": "Insurance",
        "unit": "INR"
      },
      {
        "fieldName": "insuranceValue3",
        "answerType": "number",
        "label": "Health insurance annual premium",
        "group": "Insurance",
        "unit": "INR"
      },
      {
        "fieldName": "insuranceValue4",
        "answerType": "number",
        "label": "Home insurance",
        "group": "Insurance",
        "unit": "INR"
      },
      {
        "fieldName": "insuranceValue5",
        "answerType": "number",
        "label": "Vehicle insurance",
        "group": "Insurance",
        "unit": "INR"
      },
      {
        "fieldName": "otherValue1",
        "answerType": "number",
        "label": "PMS",
        "group": "Other investments",
        "unit": "INR"
      },
      {
        "fieldName": "otherValue2",
        "answerType": "number",
        "label": "AIF",
        "group": "Other investments",
        "unit": "INR"
      },
      {
        "fieldName": "otherValue3",
        "answerType": "number",
        "label": "Real estate",
        "group": "Other investments",
        "unit": "INR"
      },
      {
        "fieldName": "otherValue4",
        "answerType": "number",
        "label": "ESOP",
        "group": "Other investments",
        "unit": "INR"
      },
      {
        "fieldName": "otherValue5",
        "answerType": "number",
        "label": "EPF / PPF",
        "group": "Other investments",
        "unit": "INR"
      },
      {
        "fieldName": "otherValue6",
        "answerType": "number",
        "label": "Gold",
        "group": "Other investments",
        "unit": "INR"
      },
      {
        "fieldName": "otherValue7",
        "answerType": "number",
        "label": "Fixed deposits / bonds",
        "group": "Other investments",
        "unit": "INR"
      },
      {
        "fieldName": "otherValue8",
        "answerType": "number",
        "label": "Other investments",
        "group": "Other investments",
        "unit": "INR"
      }
    ]
  },
  {
    "questionId": "Q15",
    "section": "Allocation & Liquidity",
    "question": "Current portfolio allocation (%)",
    "required": false,
    "instructions": "Approximate percentages are fine; they do not need to total 100%.",
    "fields": [
      {
        "fieldName": "allocation1",
        "answerType": "number",
        "label": "Equity %",
        "unit": "percent"
      },
      {
        "fieldName": "allocation2",
        "answerType": "number",
        "label": "Debt %",
        "unit": "percent"
      },
      {
        "fieldName": "allocation3",
        "answerType": "number",
        "label": "Gold %",
        "unit": "percent"
      },
      {
        "fieldName": "allocation4",
        "answerType": "number",
        "label": "Large-cap %",
        "unit": "percent"
      },
      {
        "fieldName": "allocation5",
        "answerType": "number",
        "label": "Mid-cap %",
        "unit": "percent"
      },
      {
        "fieldName": "allocation6",
        "answerType": "number",
        "label": "Small-cap %",
        "unit": "percent"
      }
    ]
  },
  {
    "questionId": "Q16",
    "section": "Allocation & Liquidity",
    "question": "Liquidity available for the next 12 months",
    "required": false,
    "fields": [
      {
        "fieldName": "liquidity1",
        "answerType": "number",
        "label": "Cash savings",
        "unit": "INR"
      },
      {
        "fieldName": "liquidity2",
        "answerType": "number",
        "label": "Liquid fund",
        "unit": "INR"
      },
      {
        "fieldName": "liquidity3",
        "answerType": "number",
        "label": "Emergency fund",
        "unit": "INR"
      }
    ]
  },
  {
    "questionId": "Q17",
    "section": "Allocation & Liquidity",
    "question": "Gold investment type",
    "required": false,
    "instructions": "Select all that apply.",
    "fields": [
      {
        "fieldName": "goldType",
        "answerType": "multiple_choice",
        "options": [
          {
            "value": "Physical gold",
            "label": "Physical gold"
          },
          {
            "value": "Gold ETF",
            "label": "Gold ETF"
          },
          {
            "value": "Sovereign Gold Bonds (SGB)",
            "label": "Sovereign Gold Bonds (SGB)"
          },
          {
            "value": "Gold mutual funds",
            "label": "Gold mutual funds"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q18",
    "section": "Goals & Horizon",
    "question": "Investment horizon",
    "required": false,
    "fields": [
      {
        "fieldName": "investmentHorizon",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Less than 1 year",
            "label": "Less than 1 year"
          },
          {
            "value": "1–3 years",
            "label": "1–3 years"
          },
          {
            "value": "3–5 years",
            "label": "3–5 years"
          },
          {
            "value": "5–10 years",
            "label": "5–10 years"
          },
          {
            "value": "More than 10 years",
            "label": "More than 10 years"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q19",
    "section": "Goals & Horizon",
    "question": "Are you considering changing your investment horizon?",
    "required": false,
    "fields": [
      {
        "fieldName": "horizonChange",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Yes, shortening it",
            "label": "Yes, shortening it"
          },
          {
            "value": "Yes, extending it",
            "label": "Yes, extending it"
          },
          {
            "value": "No, staying the same",
            "label": "No, staying the same"
          },
          {
            "value": "Not sure",
            "label": "Not sure"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q20",
    "section": "Goals & Horizon",
    "question": "Primary investment goals",
    "required": false,
    "instructions": "Select all that apply.",
    "fields": [
      {
        "fieldName": "goals",
        "answerType": "multiple_choice",
        "options": [
          {
            "value": "Wealth creation",
            "label": "Wealth creation"
          },
          {
            "value": "Retirement planning",
            "label": "Retirement planning"
          },
          {
            "value": "Children’s education",
            "label": "Children’s education"
          },
          {
            "value": "Children’s marriage",
            "label": "Children’s marriage"
          },
          {
            "value": "Tax saving",
            "label": "Tax saving"
          },
          {
            "value": "Home purchase",
            "label": "Home purchase"
          },
          {
            "value": "Emergency fund",
            "label": "Emergency fund"
          },
          {
            "value": "Business expansion",
            "label": "Business expansion"
          },
          {
            "value": "Travel / lifestyle",
            "label": "Travel / lifestyle"
          },
          {
            "value": "Charitable giving",
            "label": "Charitable giving"
          },
          {
            "value": "Other",
            "label": "Other"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q21",
    "section": "Goals & Horizon",
    "question": "Do you need to modify your goals in the coming year?",
    "required": false,
    "fields": [
      {
        "fieldName": "goalChange",
        "answerType": "single_choice",
        "options": [
          {
            "value": "No, goals remain unchanged",
            "label": "No, goals remain unchanged"
          },
          {
            "value": "Yes, I plan to revise",
            "label": "Yes, I plan to revise"
          },
          {
            "value": "I am unsure",
            "label": "I am unsure"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q22",
    "section": "Liabilities",
    "question": "Do you have existing liabilities or loans?",
    "required": false,
    "fields": [
      {
        "fieldName": "hasLiability",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Yes",
            "label": "Yes"
          },
          {
            "value": "No",
            "label": "No"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q23",
    "section": "Liabilities",
    "question": "Approximate outstanding loan amount",
    "required": false,
    "fields": [
      {
        "fieldName": "loanOutstanding",
        "answerType": "number",
        "unit": "INR"
      }
    ],
    "showWhen": {
      "fieldName": "hasLiability",
      "equals": "Yes"
    }
  },
  {
    "questionId": "Q24",
    "section": "Liabilities",
    "question": "Approximate total monthly EMI",
    "required": false,
    "fields": [
      {
        "fieldName": "monthlyEmi",
        "answerType": "number",
        "unit": "INR"
      }
    ],
    "showWhen": {
      "fieldName": "hasLiability",
      "equals": "Yes"
    }
  },
  {
    "questionId": "Q25",
    "section": "Risk & Market View",
    "question": "Risk tolerance",
    "required": false,
    "fields": [
      {
        "fieldName": "riskTolerance",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Conservative — capital preservation priority",
            "label": "Conservative — capital preservation priority"
          },
          {
            "value": "Moderate — balanced growth and safety",
            "label": "Moderate — balanced growth and safety"
          },
          {
            "value": "Aggressive — high growth and can absorb volatility",
            "label": "Aggressive — high growth and can absorb volatility"
          },
          {
            "value": "Very aggressive — maximum growth; short-term losses acceptable",
            "label": "Very aggressive — maximum growth; short-term losses acceptable"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q26",
    "section": "Risk & Market View",
    "question": "Have you considered portfolio diversification?",
    "required": false,
    "fields": [
      {
        "fieldName": "diversification",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Yes, I am well-diversified",
            "label": "Yes, I am well-diversified"
          },
          {
            "value": "Somewhat — can improve",
            "label": "Somewhat — can improve"
          },
          {
            "value": "No, concentrated in 1–2 asset classes",
            "label": "No, concentrated in 1–2 asset classes"
          },
          {
            "value": "Not sure",
            "label": "Not sure"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q27",
    "section": "Risk & Market View",
    "question": "Asset classes you are looking to diversify into",
    "required": false,
    "instructions": "Select all that apply.",
    "fields": [
      {
        "fieldName": "diversifyInto",
        "answerType": "multiple_choice",
        "options": [
          {
            "value": "International equities",
            "label": "International equities"
          },
          {
            "value": "REITs",
            "label": "REITs"
          },
          {
            "value": "InvITs",
            "label": "InvITs"
          },
          {
            "value": "Commodities other than gold",
            "label": "Commodities other than gold"
          },
          {
            "value": "Unlisted / pre-IPO",
            "label": "Unlisted / pre-IPO"
          },
          {
            "value": "Alternate lending / P2P",
            "label": "Alternate lending / P2P"
          },
          {
            "value": "AIF",
            "label": "AIF"
          },
          {
            "value": "PMS",
            "label": "PMS"
          },
          {
            "value": "Other",
            "label": "Other"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q28",
    "section": "Risk & Market View",
    "question": "Your market outlook for the next 24 months",
    "required": false,
    "fields": [
      {
        "fieldName": "marketOutlook",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Bullish",
            "label": "Bullish"
          },
          {
            "value": "Bearish",
            "label": "Bearish"
          },
          {
            "value": "Neutral",
            "label": "Neutral"
          },
          {
            "value": "No idea",
            "label": "No idea"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q29",
    "section": "Future Plans",
    "question": "Do you plan to increase investments going forward?",
    "required": false,
    "fields": [
      {
        "fieldName": "investmentIncrease",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Yes, significantly — more than 25%",
            "label": "Yes, significantly — more than 25%"
          },
          {
            "value": "Yes, moderately — 10–25%",
            "label": "Yes, moderately — 10–25%"
          },
          {
            "value": "Maintain current levels",
            "label": "Maintain current levels"
          },
          {
            "value": "May reduce investments",
            "label": "May reduce investments"
          },
          {
            "value": "Not sure",
            "label": "Not sure"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q30",
    "section": "Future Plans",
    "question": "Preferred asset classes going forward",
    "required": false,
    "instructions": "Select all that apply.",
    "fields": [
      {
        "fieldName": "futureAssets",
        "answerType": "multiple_choice",
        "options": [
          {
            "value": "Equity mutual funds",
            "label": "Equity mutual funds"
          },
          {
            "value": "Debt / hybrid funds",
            "label": "Debt / hybrid funds"
          },
          {
            "value": "Direct stocks",
            "label": "Direct stocks"
          },
          {
            "value": "PMS",
            "label": "PMS"
          },
          {
            "value": "AIF",
            "label": "AIF"
          },
          {
            "value": "Real estate",
            "label": "Real estate"
          },
          {
            "value": "Gold",
            "label": "Gold"
          },
          {
            "value": "Fixed deposits / bonds",
            "label": "Fixed deposits / bonds"
          },
          {
            "value": "International investments",
            "label": "International investments"
          },
          {
            "value": "Other",
            "label": "Other"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q31",
    "section": "Future Plans",
    "question": "Number of brokers / financial advisors you currently deal with",
    "required": false,
    "fields": [
      {
        "fieldName": "advisorCount",
        "answerType": "number"
      }
    ]
  },
  {
    "questionId": "Q32",
    "section": "Will & Estate",
    "question": "Do you have a Will in place?",
    "required": false,
    "fields": [
      {
        "fieldName": "hasWill",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Yes",
            "label": "Yes"
          },
          {
            "value": "No",
            "label": "No"
          },
          {
            "value": "In progress",
            "label": "In progress"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q33",
    "section": "Will & Estate",
    "question": "Do you intend to create a Will in the next 12 months?",
    "required": false,
    "fields": [
      {
        "fieldName": "willIntent",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Yes",
            "label": "Yes"
          },
          {
            "value": "No",
            "label": "No"
          },
          {
            "value": "Already have one",
            "label": "Already have one"
          },
          {
            "value": "Not applicable",
            "label": "Not applicable"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q34",
    "section": "Will & Estate",
    "question": "Have you consulted an advisor for estate planning?",
    "required": false,
    "fields": [
      {
        "fieldName": "estateAdvice",
        "answerType": "single_choice",
        "options": [
          {
            "value": "Yes",
            "label": "Yes"
          },
          {
            "value": "No",
            "label": "No"
          },
          {
            "value": "Planning to soon",
            "label": "Planning to soon"
          }
        ]
      }
    ]
  },
  {
    "questionId": "Q35",
    "section": "Feedback",
    "question": "Additional thoughts or concerns",
    "required": false,
    "instructions": "Share any information that would help us understand your situation better.",
    "fields": [
      {
        "fieldName": "feedback",
        "answerType": "text"
      }
    ]
  }
];

export function getQuestionsForStep(stepIndex) {
  const step = STEPS[stepIndex];
  if (!step) return [];
  return QUESTIONNAIRE.filter((q) => q.section === step.section);
}

export function emptyFormState() {
  const state = {};
  QUESTIONNAIRE.forEach((question) => {
    question.fields.forEach((field) => {
      if (field.answerType === "multiple_choice") state[field.fieldName] = [];
      else state[field.fieldName] = "";
    });
  });
  return state;
}

export function isQuestionVisible(question, data) {
  if (!question.showWhen) return true;
  return data[question.showWhen.fieldName] === question.showWhen.equals;
}

function questionAnswers(data) {
  return QUESTIONNAIRE.map((definition) => {
    const { fields, showWhen, ...question } = definition;
    const answers = fields.map((field) => {
      const { answerType, ...metadata } = field;
      const value = data[field.fieldName];
      const answered = Array.isArray(value)
        ? value.length > 0
        : value !== undefined && value !== null && value !== "";
      const rawValue = answered
        ? value
        : answerType === "multiple_choice"
          ? []
          : null;
      const selected =
        answered && field.options
          ? field.options.find((option) => option.value === value)
          : null;
      let answer = rawValue;
      if (answerType === "single_choice") answer = selected ? selected.label : null;
      else if (answerType === "multiple_choice")
        answer = (rawValue || []).map(
          (v) => field.options.find((option) => option.value === v)?.label || v
        );
      else if (answerType === "number" && answered) answer = Number(value);
      return {
        ...metadata,
        answerType,
        answer,
        rawValue,
        status: answered ? "answered" : "unanswered",
      };
    });
    const answeredCount = answers.filter((a) => a.status === "answered").length;
    const record = {
      ...question,
      status:
        answeredCount === 0
          ? "unanswered"
          : answeredCount === answers.length
            ? "answered"
            : "partially_answered",
    };
    if (showWhen) {
      record.condition = {
        ...showWhen,
        currentValue: data[showWhen.fieldName] ?? null,
        isApplicable:
          data[showWhen.fieldName] === undefined
            ? null
            : data[showWhen.fieldName] === showWhen.equals,
      };
    }
    if (answers.length === 1) return { ...record, ...answers[0] };
    return { ...record, answerType: "group", answer: answers };
  });
}

export function buildResponsePayload(data) {
  const cleaned = Object.fromEntries(
    Object.entries(data).filter(([, value]) =>
      Array.isArray(value) ? value.length > 0 : String(value).trim() !== ""
    )
  );
  return {
    form: "PrimeIdea Financial Profile",
    version: "2.0",
    generatedAt: new Date().toISOString(),
    responses: cleaned,
    questionsAndAnswers: questionAnswers(cleaned),
  };
}

export function responseFilename(payload) {
  const clientName =
    String(payload.responses?.fullName || "")
      .normalize("NFC")
      .replace(/[<>:"/\\|?*\u0000-\u001F\u007F]/g, "")
      .trim()
      .replace(/\s+/g, "_")
      .replace(/^\.+|\.+$/g, "")
      .slice(0, 120) || "Client";
  return `${clientName}_financial-profile.json`;
}

export function saveJsonFile(payload) {
  const filename = responseFilename(payload);
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return filename;
}

export function getReviewRows(data) {
  return questionAnswers(data)
    .flatMap((question) =>
      question.answerType === "group"
        ? question.answer.map((field) => ({
            ...field,
            question: `${question.question} · ${field.label || field.fieldName}`,
          }))
        : [question]
    )
    .filter((field) => field.status === "answered");
}
