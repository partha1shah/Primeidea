import fs from "fs";

const questionnaire = JSON.parse(
  fs.readFileSync("scripts/_fp-questionnaire.json", "utf8")
);

const STEPS = [
  {
    id: "investor-profile",
    title: "Investor Profile",
    heading: "Let's start with you",
    count: "Q1–6",
    section: "Investor Profile",
  },
  {
    id: "basic-details",
    title: "Basic Details",
    heading: "Your financial experience",
    count: "Q7–9",
    section: "Basic Details",
  },
  {
    id: "financial-details",
    title: "Financial Details",
    heading: "Your financial context",
    count: "Q10–13",
    section: "Financial Details",
  },
  {
    id: "investment-amounts",
    title: "Investment Amounts",
    heading: "Approximate current values",
    count: "Q14",
    section: "Investment Amounts",
  },
  {
    id: "allocation-liquidity",
    title: "Allocation & Liquidity",
    heading: "How your money is positioned",
    count: "Q15–17",
    section: "Allocation & Liquidity",
  },
  {
    id: "goals-horizon",
    title: "Goals & Horizon",
    heading: "Where you want to go",
    count: "Q18–21",
    section: "Goals & Horizon",
  },
  {
    id: "liabilities",
    title: "Liabilities",
    heading: "Your borrowing commitments",
    count: "Q22–24",
    section: "Liabilities",
  },
  {
    id: "risk-market",
    title: "Risk & Market View",
    heading: "How you experience risk",
    count: "Q25–28",
    section: "Risk & Market View",
  },
  {
    id: "future-plans",
    title: "Future Plans",
    heading: "What comes next",
    count: "Q29–31",
    section: "Future Plans",
  },
  {
    id: "will-estate",
    title: "Will & Estate",
    heading: "Protecting your family's future",
    count: "Q32–34",
    section: "Will & Estate",
  },
  {
    id: "feedback",
    title: "Feedback",
    heading: "Anything else we should know?",
    count: "Q35",
    section: "Feedback",
  },
];

const out = `/** Questionnaire definitions and helpers for /financial-profile. */

export const STORAGE_KEY = "primeidea-financial-profile-v1";

export const STEPS = ${JSON.stringify(STEPS, null, 2)};

export const QUESTIONNAIRE = ${JSON.stringify(questionnaire, null, 2)};

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
      .replace(/[<>:"/\\\\|?*\\u0000-\\u001F\\u007F]/g, "")
      .trim()
      .replace(/\\s+/g, "_")
      .replace(/^\\.+|\\.+$/g, "")
      .slice(0, 120) || "Client";
  return \`\${clientName}_financial-profile.json\`;
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
            question: \`\${question.question} · \${field.label || field.fieldName}\`,
          }))
        : [question]
    )
    .filter((field) => field.status === "answered");
}
`;

fs.mkdirSync("lib/financialProfile", { recursive: true });
fs.writeFileSync("lib/financialProfile/questionnaire.js", out);
console.log("Wrote lib/financialProfile/questionnaire.js", out.length);
