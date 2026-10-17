"use client";

import {
  PROFILE_DESCRIPTIONS,
  RISK_QUESTIONS,
  STEP_TITLES,
  STORAGE_KEY,
  buildResponsePayload,
  riskCalculation,
  saveJsonFile,
} from "@/lib/riskAssessment/questionnaire";
import { openResponseEmailDraft } from "@/lib/prepareResponseEmail";
import {
  ArrowDownTrayIcon,
  CheckCircleIcon,
  CheckIcon,
  ClipboardDocumentListIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useMemo, useState } from "react";

const EMPTY_FORM = {
  fullName: "",
  mobile: "",
  email: "",
  city: "",
  pan: "",
  age: "",
  income: "",
  horizon: "",
  loss: "",
  knowledge: "",
};

const STEP_META = [
  {
    title: "Client Details",
    hint: "Name and contact",
    Icon: UserCircleIcon,
  },
  {
    title: "Risk Questions",
    hint: "Optional answers",
    Icon: ClipboardDocumentListIcon,
  },
  {
    title: "Result",
    hint: "Indicative profile",
    Icon: ShieldCheckIcon,
  },
];

const fieldClass =
  "block w-full rounded-xl border border-[#D0E0EC] bg-[#F8FCFF] px-4 py-3.5 text-[15px] md:text-base font-medium text-[#2D2D2D] outline-none transition-all focus:border-[#293C7D] focus:bg-white focus:ring-4 focus:ring-[#293C7D]/10";
const fieldErrorClass =
  "block w-full rounded-xl border border-red-300 bg-[#FFF8F8] px-4 py-3.5 text-[15px] md:text-base font-medium text-[#2D2D2D] outline-none transition-all focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100";
const labelClass =
  "block text-[13px] font-semibold tracking-wide text-[#293C7D] mb-2";

function loadDraft() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return { ...EMPTY_FORM, ...saved };
  } catch {
    return { ...EMPTY_FORM };
  }
}

export default function RiskAssessmentWizard() {
  const [current, setCurrent] = useState(0);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [saveNote, setSaveNote] = useState("Draft is saved on this device.");
  const [successMessage, setSuccessMessage] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setForm(loadDraft());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      const toSave = Object.fromEntries(
        Object.entries(form).filter(([, value]) => String(value).trim() !== "")
      );
      if (Object.keys(toSave).length === 0) {
        localStorage.removeItem(STORAGE_KEY);
        return;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
      setSaveNote("Draft saved just now on this device.");
    } catch {
      setSaveNote("Draft saving is unavailable in this browser.");
    }
  }, [form, hydrated]);

  const calculation = useMemo(() => riskCalculation(form), [form]);
  const progressPct = Math.round(((current + 1) / 3) * 100);

  function updateField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  }

  function clearForm() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore storage errors
    }
    setForm({ ...EMPTY_FORM });
    setErrors({});
    setSuccessMessage("");
    setCurrent(0);
    setSaveNote("Form cleared. Draft removed from this device.");
    document
      .getElementById("risk-assessment-panel")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function validStepOne() {
    const nextErrors = {
      fullName: !form.fullName.trim(),
      mobile: !form.mobile.trim(),
      email: !form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email.trim()),
    };
    setErrors(nextErrors);
    const ok = !Object.values(nextErrors).some(Boolean);
    if (!ok) {
      document
        .getElementById("risk-assessment-panel")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return ok;
  }

  function goTo(target) {
    if (target === current) return;
    if (target > 0 && !validStepOne()) return;
    setCurrent(target);
    document
      .getElementById("risk-assessment-panel")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleNext() {
    if (current === 0 && !validStepOne()) return;
    if (current < 2) {
      goTo(current + 1);
      return;
    }
    handleDownload();
  }

  function handleDownload() {
    if (!validStepOne()) {
      setCurrent(0);
      return;
    }
    const payload = buildResponsePayload(
      Object.fromEntries(
        Object.entries(form).filter(([, value]) => String(value).trim() !== "")
      )
    );
    saveJsonFile(payload);
    setSuccessMessage(
      "Response downloaded. Please share the downloaded file only through a secure channel with PrimeIdea Ventures."
    );
  }

  function handleEmail() {
    if (!validStepOne()) {
      setCurrent(0);
      return;
    }
    const payload = buildResponsePayload(
      Object.fromEntries(
        Object.entries(form).filter(([, value]) => String(value).trim() !== "")
      )
    );
    const filename = saveJsonFile(payload);
    setSuccessMessage(
      `JSON file downloaded as ${filename}. Your email draft is opening — please attach that downloaded JSON file before sending.`
    );
    openResponseEmailDraft({
      filename,
      subject: `${payload.form} Response — ${payload.responses.fullName || "Client"}`,
      introLines: [
        "Hello PrimeIdea team,",
        "",
        "Please find my Risk Assessment response.",
      ],
      detailLines: [
        `Form: ${payload.form}`,
        `Client name: ${payload.responses.fullName || "—"}`,
        `Mobile: ${payload.responses.mobile || "—"}`,
        `Email: ${payload.responses.email || "—"}`,
        `City: ${payload.responses.city || "—"}`,
        `Risk score: ${payload.riskScore ?? "—"}`,
        `Risk profile: ${payload.riskProfile ?? "—"}`,
        `Questions answered: ${payload.answeredQuestions} of ${payload.totalRiskQuestions}`,
        `Generated at: ${payload.generatedAt}`,
        `JSON file to attach: ${filename}`,
      ],
    });
  }

  const scoreDisplay =
    calculation.riskScore === null ? "—" : calculation.riskScore.toFixed(2);
  const profileTitle = calculation.riskProfile || "Complete the questions";
  let profileDescription =
    calculation.riskProfile === null
      ? "Your profile will appear here after you answer one or more risk questions."
      : PROFILE_DESCRIPTIONS[calculation.riskProfile];
  if (calculation.status === "provisional" && calculation.riskProfile) {
    profileDescription +=
      " This is provisional because some questions were skipped.";
  }

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#D0E0EC] bg-white shadow-[0_18px_40px_-28px_rgba(41,60,125,0.35)]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left rail — matches portfolio-review form intro style */}
        <aside className="lg:col-span-4 bg-[#232D63] p-6 md:p-8 lg:p-9 print:hidden">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFC300] md:text-sm">
            Assessment steps
          </p>
          <h3 className="mb-2 text-[24px] font-light leading-tight text-white md:text-[28px]">
            Your progress
          </h3>
          <p className="mb-7 text-sm leading-relaxed text-white/70">
            Move through client details, optional risk questions, and your
            indicative profile.
          </p>

          <ol className="mb-8 list-none space-y-3 p-0">
            {STEP_META.map((step, index) => {
              const isCurrent = index === current;
              const isDone = index < current;
              const { Icon } = step;
              return (
                <li key={step.title}>
                  <button
                    type="button"
                    onClick={() => goTo(index)}
                    className={`flex w-full items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition-colors ${
                      isCurrent
                        ? "border-[#FFC300]/40 bg-white/10"
                        : isDone
                          ? "border-white/15 bg-white/5"
                          : "border-white/10 bg-transparent hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                        isCurrent || isDone
                          ? "border-white/15 bg-[#232D63] text-[#FFC300]"
                          : "border-white/10 bg-white/5 text-white/70"
                      }`}
                    >
                      {isDone ? (
                        <CheckIcon className="h-5 w-5" aria-hidden />
                      ) : (
                        <Icon className="h-5 w-5" aria-hidden />
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#FFC300]/90">
                        Step {index + 1}
                      </span>
                      <span className="block text-sm font-semibold text-white">
                        {step.title}
                      </span>
                      <span className="block text-xs text-white/60">{step.hint}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5">
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FFC300]">
                Completion
              </span>
              <span className="text-sm font-bold text-white">{progressPct}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#FFC300] transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-white/60">
              Step {current + 1} of 3
              {current === 1
                ? ` · ${calculation.answeredQuestions}/5 answered`
                : null}
            </p>
          </div>
        </aside>

        {/* Form panel */}
        <div
          id="risk-assessment-panel"
          className="scroll-mt-24 bg-[#F6FDFF] p-5 md:p-8 lg:col-span-8 lg:p-10"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#232D63]">
                {current === 0 ? (
                  <UserCircleIcon className="h-6 w-6 text-[#FFC300]" aria-hidden />
                ) : null}
                {current === 1 ? (
                  <ClipboardDocumentListIcon
                    className="h-6 w-6 text-[#FFC300]"
                    aria-hidden
                  />
                ) : null}
                {current === 2 ? (
                  <ShieldCheckIcon className="h-6 w-6 text-[#FFC300]" aria-hidden />
                ) : null}
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2]">
                  Step {current + 1} of 3 · {STEP_TITLES[current]}
                </p>
                <p className="text-xl font-bold text-[#293C7D]">
                  {current === 0 && "Tell us about yourself"}
                  {current === 1 && "How do you experience risk?"}
                  {current === 2 && "Your indicative risk profile"}
                </p>
              </div>
            </div>
            <span className="hidden rounded-full border border-[#E3ECF5] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#293C7D] sm:inline-flex">
              {current === 0
                ? "Required"
                : current === 1
                  ? "Optional"
                  : "Review"}
            </span>
          </div>

          {/* Mobile step chips */}
          <div className="mb-6 flex gap-2 lg:hidden print:hidden">
            {STEP_TITLES.map((title, index) => {
              const isCurrent = index === current;
              const isDone = index < current;
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`flex-1 rounded-full border px-2 py-2 text-center text-[11px] font-semibold transition-colors ${
                    isCurrent
                      ? "border-[#293C7D] bg-[#293C7D] text-white"
                      : isDone
                        ? "border-[#232D63] bg-[#232D63] text-white"
                        : "border-[#D0E0EC] bg-white text-[#293C7D]"
                  }`}
                >
                  {index + 1}. {title.split(" ")[0]}
                </button>
              );
            })}
          </div>

          {current === 0 && (
            <div>
              <p className="mb-5 text-sm leading-relaxed text-[#4D4D4D]">
                Only this first step is mandatory. The risk questions in the next
                step are optional.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="risk-fullName" className={labelClass}>
                    Full name *
                  </label>
                  <input
                    id="risk-fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={form.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className={errors.fullName ? fieldErrorClass : fieldClass}
                  />
                  {errors.fullName ? (
                    <p className="mt-1.5 text-xs font-medium text-red-600">
                      Please enter your full name.
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="risk-mobile" className={labelClass}>
                    Mobile number *
                  </label>
                  <input
                    id="risk-mobile"
                    name="mobile"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91…"
                    value={form.mobile}
                    onChange={(e) => updateField("mobile", e.target.value)}
                    className={errors.mobile ? fieldErrorClass : fieldClass}
                  />
                  {errors.mobile ? (
                    <p className="mt-1.5 text-xs font-medium text-red-600">
                      Please enter your mobile number.
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="risk-email" className={labelClass}>
                    Email address *
                  </label>
                  <input
                    id="risk-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={errors.email ? fieldErrorClass : fieldClass}
                  />
                  {errors.email ? (
                    <p className="mt-1.5 text-xs font-medium text-red-600">
                      Please enter a valid email address.
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="risk-city" className={labelClass}>
                    City of residence
                  </label>
                  <input
                    id="risk-city"
                    name="city"
                    type="text"
                    placeholder="Vadodara / your city"
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    className={fieldClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="risk-pan" className={labelClass}>
                    PAN number (optional)
                  </label>
                  <input
                    id="risk-pan"
                    name="pan"
                    type="text"
                    placeholder="Optional — do not enter if not required"
                    value={form.pan}
                    onChange={(e) => updateField("pan", e.target.value)}
                    className={fieldClass}
                  />
                </div>
              </div>
            </div>
          )}

          {current === 1 && (
            <div className="space-y-5">
              <p className="text-sm leading-relaxed text-[#4D4D4D]">
                You may skip any question. A provisional profile will be shown
                based only on the questions you answer.
              </p>
              {RISK_QUESTIONS.map((question, index) => {
                const field = question.fields[0];
                return (
                  <fieldset key={question.questionId} className="m-0 space-y-3 p-0">
                    <legend className={labelClass}>
                      {index + 1}. {question.question}
                    </legend>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {field.options.map((option) => {
                        const id = `${field.fieldName}-${option.value}`;
                        const selected = form[field.fieldName] === option.value;
                        return (
                          <label
                            key={id}
                            htmlFor={id}
                            className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3.5 transition-colors ${
                              selected
                                ? "border-[#293C7D] bg-[#293C7D] shadow-sm"
                                : "border-[#D0E0EC] bg-white hover:border-[#293C7D]/50"
                            }`}
                          >
                            <input
                              id={id}
                              type="radio"
                              name={field.fieldName}
                              value={option.value}
                              checked={selected}
                              onChange={() =>
                                updateField(field.fieldName, option.value)
                              }
                              className="sr-only"
                            />
                            <span
                              className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                                selected
                                  ? "border-white/30 bg-white/15 text-[#FFC300]"
                                  : "border-[#D0E0EC] bg-[#F8FCFF] text-transparent"
                              }`}
                            >
                              <CheckIcon className="h-3 w-3" aria-hidden />
                            </span>
                            <span
                              className={`text-sm font-medium leading-snug ${
                                selected ? "!text-white" : "text-[#2D2D2D]"
                              }`}
                            >
                              {option.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                );
              })}
            </div>
          )}

          {current === 2 && (
            <div id="risk-result-print">
              <div className="mb-6 hidden print:block">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#479AD2]">
                  PrimeIdea Ventures®
                </p>
                <h1 className="mt-1 text-3xl font-light text-[#2D2D2D]">
                  Risk Assessment Result
                </h1>
              </div>

              <div className="overflow-hidden rounded-[20px] border border-[#D0E0EC] bg-white">
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr]">
                  <div className="flex flex-col items-center justify-center border-b border-[#E3ECF5] bg-[#232D63] px-5 py-7 md:border-b-0 md:border-r md:border-[#E3ECF5]">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FFC300]">
                      Score
                    </p>
                    <div className="text-5xl font-light leading-none text-white">
                      {scoreDisplay}
                    </div>
                    <p className="mt-2 text-center text-xs text-white/65">
                      Indicative · 2 to 10
                    </p>
                  </div>
                  <div className="px-5 py-6 md:px-7">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-[#293C7D]">
                        {profileTitle}
                      </h3>
                      {calculation.status === "provisional" ? (
                        <span className="rounded-full border border-[#E8D48A] bg-[#FFF8E1] px-2.5 py-0.5 text-[11px] font-semibold text-[#8A6A00]">
                          Provisional
                        </span>
                      ) : null}
                      {calculation.status === "complete" ? (
                        <span className="rounded-full border border-[#B7E0C4] bg-[#F0FBF4] px-2.5 py-0.5 text-[11px] font-semibold text-[#1F5A36]">
                          Complete
                        </span>
                      ) : null}
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-[#4D4D4D] md:text-[15px]">
                      {profileDescription}
                    </p>
                    <p className="inline-flex items-center gap-2 text-sm font-medium text-[#479AD2]">
                      <CheckCircleIcon className="h-4 w-4" aria-hidden />
                      Answered {calculation.answeredQuestions} of 5 questions
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-[#E8D48A] bg-[#FFF8E1] px-4 py-3.5 text-sm leading-relaxed text-[#4D4D4D]">
                <strong className="text-[#2D2D2D]">Important:</strong> This is an
                indicative risk assessment for discussion and suitability
                profiling. It is not investment advice, a guarantee, or a
                recommendation to buy or sell any product.
              </div>

                <p className="mt-4 text-xs leading-relaxed text-[#6B7C8A] print:hidden md:text-sm">
                  Prepare Email downloads your complete JSON response and opens a
                  draft to research@primeidea.in with your details. Please attach
                  the downloaded JSON file before sending.
                </p>

              {successMessage ? (
                <div className="mt-4 rounded-xl bg-green-100 p-3 text-sm text-green-700 print:hidden">
                  <strong>Response downloaded.</strong> {successMessage}
                </div>
              ) : null}

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 print:hidden">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3.5 text-base font-bold text-[#232D63] transition-colors hover:bg-[#293C7D] hover:text-white"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" aria-hidden />
                  Download Response
                </button>
                <button
                  type="button"
                  onClick={handleEmail}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#D0E0EC] bg-white px-5 py-3.5 text-base font-bold text-[#293C7D] transition-colors hover:border-[#293C7D]/50"
                >
                  <EnvelopeIcon className="h-5 w-5" aria-hidden />
                  Prepare Email
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4 border-t border-[#E3ECF5] pt-5 print:hidden sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="m-0 flex items-start gap-2 text-xs leading-relaxed text-[#6B7C8A]">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#479AD2]" />
                {saveNote}
              </p>
              <button
                type="button"
                onClick={clearForm}
                className="text-sm font-semibold text-[#293C7D] underline-offset-2 hover:underline"
              >
                Clear form
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                disabled={current === 0}
                onClick={() => goTo(current - 1)}
                className="rounded-xl border border-[#D0E0EC] bg-white px-5 py-3 text-sm font-bold text-[#293C7D] transition-colors hover:border-[#293C7D]/40 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-xl bg-[#FFC300] px-5 py-3 text-sm font-bold text-[#232D63] transition-colors hover:bg-[#293C7D] hover:text-white"
              >
                {current === 2 ? "Download Response →" : "Next →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
