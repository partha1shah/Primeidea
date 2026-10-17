/** Questionnaire definitions and scoring for /risk-assessment. */

export const STORAGE_KEY = "primeidea-risk-assessment-v1";

export const STEP_TITLES = ["Client Details", "Risk Questions", "Result"];

export const RISK_FIELDS = ["age", "income", "horizon", "loss", "knowledge"];

export const RISK_BANDS = [
  { label: "Conservative", minimumInclusive: 2, maximumExclusive: 4 },
  { label: "Moderate", minimumInclusive: 4, maximumExclusive: 6 },
  { label: "Growth-oriented", minimumInclusive: 6, maximumExclusive: 8 },
  { label: "Aggressive", minimumInclusive: 8, maximumInclusive: 10 },
];

export const PROFILE_DESCRIPTIONS = {
  Conservative:
    "Capital preservation and lower volatility may be important considerations. Further suitability discussion is required.",
  Moderate:
    "You may be comfortable with a balanced approach, while still expecting attention to downside risk and liquidity.",
  "Growth-oriented":
    "You may be able to accept meaningful fluctuations for long-term growth, subject to suitability and time horizon.",
  Aggressive:
    "You may be comfortable with higher volatility and short-term losses for potential long-term growth, subject to suitability.",
};

export const QUESTIONNAIRE = [
  {
    questionId: "client.fullName",
    section: "Client Details",
    question: "Full name",
    required: true,
    fields: [{ fieldName: "fullName", answerType: "text" }],
  },
  {
    questionId: "client.mobile",
    section: "Client Details",
    question: "Mobile number",
    required: true,
    fields: [{ fieldName: "mobile", answerType: "text" }],
  },
  {
    questionId: "client.email",
    section: "Client Details",
    question: "Email address",
    required: true,
    fields: [{ fieldName: "email", answerType: "text" }],
  },
  {
    questionId: "client.city",
    section: "Client Details",
    question: "City of residence",
    required: false,
    fields: [{ fieldName: "city", answerType: "text" }],
  },
  {
    questionId: "client.pan",
    section: "Client Details",
    question: "PAN number",
    required: false,
    instructions: "(optional)",
    fields: [{ fieldName: "pan", answerType: "text" }],
  },
  {
    questionId: "Q1",
    section: "Risk Questions",
    question: "What is your age bracket?",
    required: false,
    fields: [
      {
        fieldName: "age",
        answerType: "single_choice",
        options: [
          { value: "4", label: "18 to 30", score: 4 },
          { value: "3", label: "31 to 45", score: 3 },
          { value: "2", label: "46 to 60", score: 2 },
          { value: "1", label: "Above 60", score: 1 },
        ],
      },
    ],
  },
  {
    questionId: "Q2",
    section: "Risk Questions",
    question: "How would you describe your disposable income?",
    required: false,
    fields: [
      {
        fieldName: "income",
        answerType: "single_choice",
        options: [
          { value: "4", label: "Lots of spare income", score: 4 },
          {
            value: "3",
            label: "Regular, mostly fixed excess available for investing",
            score: 3,
          },
          {
            value: "2",
            label: "Small amount of excess income for investing",
            score: 2,
          },
          { value: "1", label: "Very little spare income", score: 1 },
        ],
      },
    ],
  },
  {
    questionId: "Q3",
    section: "Risk Questions",
    question: "How long can you leave your funds invested?",
    required: false,
    fields: [
      {
        fieldName: "horizon",
        answerType: "single_choice",
        options: [
          { value: "4", label: "Over 5 years", score: 4 },
          { value: "3", label: "3–5 years", score: 3 },
          { value: "2", label: "1–3 years", score: 2 },
          { value: "1", label: "Less than a year", score: 1 },
        ],
      },
    ],
  },
  {
    questionId: "Q4",
    section: "Risk Questions",
    question: "How would you typically react to a 20% loss?",
    required: false,
    fields: [
      {
        fieldName: "loss",
        answerType: "single_choice",
        options: [
          {
            value: "4",
            label: "I may add more; I am confident about markets",
            score: 4,
          },
          {
            value: "3",
            label: "I will hold, but refrain from adding more",
            score: 3,
          },
          {
            value: "2",
            label: "I will reduce holdings for protection",
            score: 2,
          },
          {
            value: "1",
            label: "I am likely to liquidate my holdings",
            score: 1,
          },
        ],
      },
    ],
  },
  {
    questionId: "Q5",
    section: "Risk Questions",
    question: "How would you describe your understanding of financial markets?",
    required: false,
    fields: [
      {
        fieldName: "knowledge",
        answerType: "single_choice",
        options: [
          { value: "4", label: "I am a finance professional", score: 4 },
          {
            value: "3",
            label: "I am a finance enthusiast and understand concepts",
            score: 3,
          },
          {
            value: "2",
            label: "I have basic understanding but need guidance",
            score: 2,
          },
          {
            value: "1",
            label: "I am not familiar with financial markets",
            score: 1,
          },
        ],
      },
    ],
  },
];

export const RISK_QUESTIONS = QUESTIONNAIRE.filter(
  (q) => q.section === "Risk Questions"
);

export function riskCalculation(data) {
  const answered = RISK_FIELDS.filter((name) => data[name] !== undefined && data[name] !== "");
  const sum = answered.reduce((total, name) => total + Number(data[name]), 0);
  const average = answered.length ? sum / answered.length : null;
  const unroundedScore =
    average === null
      ? null
      : Math.min(10, Math.max(2, 2 + ((average - 1) / 3) * 8));
  const riskProfile =
    unroundedScore === null
      ? null
      : RISK_BANDS.find(
          (band) =>
            unroundedScore >= band.minimumInclusive &&
            (band.maximumExclusive === undefined ||
              unroundedScore < band.maximumExclusive)
        )?.label ?? null;

  return {
    answeredQuestions: answered.length,
    totalRiskQuestions: RISK_FIELDS.length,
    answeredFieldNames: answered,
    sumOfAnswerScores: answered.length ? sum : null,
    averageAnswerScore: average,
    unroundedRiskScore: unroundedScore,
    riskScore: unroundedScore === null ? null : Number(unroundedScore.toFixed(2)),
    riskProfile,
    status:
      answered.length === 0
        ? "not_assessed"
        : answered.length === RISK_FIELDS.length
          ? "complete"
          : "provisional",
  };
}

export function riskMethodology() {
  return {
    version: "1.0",
    method:
      "Equal-weight mean of answered 1–4 option scores, rescaled to 2–10",
    inputScoreRange: { minimum: 1, maximum: 4 },
    outputScoreRange: { minimum: 2, maximum: 10 },
    weights: Object.fromEntries(RISK_FIELDS.map((name) => [name, 1])),
    questionScoring: RISK_QUESTIONS.map((question) => ({
      questionId: question.questionId,
      question: question.question,
      fieldName: question.fields[0].fieldName,
      weight: 1,
      options: question.fields[0].options,
    })),
    steps: [
      "Assign the selected option's score (1 to 4) for each answered risk question.",
      "Add the scores of the answered risk questions.",
      "Divide by the number of answered risk questions to obtain the average.",
      "Calculate 2 + ((average - 1) / 3) * 8 and clamp the result to the range 2 to 10.",
      "Classify using the unrounded result and the specified risk bands; round the exported score to two decimal places.",
    ],
    formula:
      "riskScore = min(10, max(2, 2 + ((sumOfAnswerScores / answeredQuestions - 1) / 3) * 8))",
    rounding: { decimalPlaces: 2, classificationUses: "unroundedRiskScore" },
    riskBands: RISK_BANDS,
    skippedQuestionPolicy:
      "Exclude unanswered risk questions from the numerator and denominator. Do not assign a score to a skipped question. Fewer than five answered questions produces a provisional result.",
    noAnswersPolicy:
      "Return null for the score, average, sum and risk profile, with status not_assessed.",
    clientDetailsPolicy: "Name, mobile, email, city and PAN are not scored.",
    interpretation:
      "Indicative assessment for discussion and suitability profiling. Final suitability also considers the client's complete financial situation, goals, liquidity and time horizon.",
  };
}

function questionAnswers(data) {
  return QUESTIONNAIRE.map((definition) => {
    const { fields, showWhen, ...question } = definition;
    const answers = fields.map((field) => {
      const { answerType, ...metadata } = field;
      const value = data[field.fieldName];
      const answered =
        Array.isArray(value) ? value.length > 0 : value !== undefined && value !== null && value !== "";
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
      const result = {
        ...metadata,
        answerType,
        answer,
        rawValue,
        status: answered ? "answered" : "unanswered",
      };
      if (field.options?.some((option) => "score" in option))
        result.answerScore = selected?.score ?? null;
      return result;
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
  const calculation = riskCalculation(data);
  return {
    form: "PrimeIdea Risk Assessment",
    version: "2.0",
    generatedAt: new Date().toISOString(),
    riskScore: calculation.riskScore,
    riskProfile: calculation.riskProfile,
    answeredQuestions: calculation.answeredQuestions,
    totalRiskQuestions: calculation.totalRiskQuestions,
    responses: data,
    questionsAndAnswers: questionAnswers(data),
    riskCalculation: calculation,
    riskMethodology: riskMethodology(),
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
  return `${clientName}_risk-profile.json`;
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
