import { submitCf7Form } from "@/lib/cf7Submit";

/** CF7 textarea default max is 2000. Keep the mail field well under that. */
const CF7_RESPONSE_MAX_LENGTH = 1800;

export function formatAnswerValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  if (value == null) return "";
  return String(value);
}

function truncateCf7Text(value, maxLength = CF7_RESPONSE_MAX_LENGTH) {
  const text = String(value || "").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

export function formatQuestionnaireMessage(payload, extraLines = []) {
  const responses = payload.responses || {};
  const answeredCount = Array.isArray(payload.questionsAndAnswers)
    ? payload.questionsAndAnswers.filter((question) => question.status === "answered")
        .length
    : 0;

  const summaryLines = [
    `Name: ${responses.fullName || "—"}`,
    `Mobile: ${responses.mobile || "—"}`,
    `Email: ${responses.email || "—"}`,
    `City: ${responses.city || "—"}`,
  ];

  if (responses.profession) summaryLines.push(`Profession: ${responses.profession}`);
  if (responses.ageGroup) summaryLines.push(`Age group: ${responses.ageGroup}`);
  if (responses.investmentExperience) {
    summaryLines.push(`Investment experience: ${responses.investmentExperience}`);
  }
  if (responses.riskTolerance) summaryLines.push(`Risk tolerance: ${responses.riskTolerance}`);
  if (responses.investmentHorizon) {
    summaryLines.push(`Investment horizon: ${responses.investmentHorizon}`);
  }
  if (payload.riskScore != null) summaryLines.push(`Risk score: ${payload.riskScore}`);
  if (payload.riskProfile) summaryLines.push(`Risk profile: ${payload.riskProfile}`);

  return truncateCf7Text(
    [
      `Form: ${payload.form || "PrimeIdea questionnaire"}`,
      `Generated at: ${payload.generatedAt || new Date().toISOString()}`,
      `Questions answered: ${answeredCount}`,
      ...extraLines.filter(Boolean),
      "",
      "Summary",
      "-------",
      ...summaryLines,
      "",
      "The complete questionnaire is in the attached JSON file.",
    ].join("\n")
  );
}

export function buildQuestionnaireJsonFile(payload, filename) {
  return new File(
    [JSON.stringify(payload, null, 2)],
    filename,
    { type: "application/json" }
  );
}

export function buildQuestionnaireLeadFields(payload, extras = {}) {
  const responses = payload.responses || {};
  const message = formatQuestionnaireMessage(payload, extras.extraLines || []);
  const fields = {
    fullName: String(responses.fullName || "").trim(),
    email: String(responses.email || "").trim(),
    phone: String(responses.mobile || "").trim(),
    mobile: String(responses.mobile || "").trim(),
    city: String(responses.city || "").trim(),
    formName: payload.form || extras.formName || "",
    response: message,
  };

  if (responses.pan) fields.pan = String(responses.pan).trim();
  if (payload.riskScore != null) fields.riskScore = String(payload.riskScore);
  if (payload.riskProfile) fields.riskProfile = String(payload.riskProfile);

  [
    "profession",
    "ageGroup",
    "investmentExperience",
    "riskTolerance",
    "investmentHorizon",
  ].forEach((key) => {
    if (responses[key]) fields[key] = formatAnswerValue(responses[key]);
  });

  if (extras.filename) {
    fields.responseFile = buildQuestionnaireJsonFile(payload, extras.filename);
  }

  return fields;
}

export async function submitQuestionnaireLead(formId, payload, options = {}) {
  return submitCf7Form(formId, buildQuestionnaireLeadFields(payload, options), {
    turnstileToken: options.turnstileToken,
  });
}
