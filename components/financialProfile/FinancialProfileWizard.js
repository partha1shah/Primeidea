"use client";

import TurnstileWidget from "@/components/TurnstileWidget";
import { CF7_FORM_IDS, pushLeadEvent } from "@/lib/cf7Submit";
import {
  STEPS,
  STORAGE_KEY,
  buildResponsePayload,
  emptyFormState,
  getQuestionsForStep,
  getReviewRows,
  isQuestionVisible,
  responseFilename,
} from "@/lib/financialProfile/questionnaire";
import { submitQuestionnaireLead } from "@/lib/questionnaireLead";
import { useTurnstile } from "@/lib/useTurnstile";
import {
  CheckCircleIcon,
  CheckIcon,
  ClipboardDocumentListIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useEffect, useMemo, useState } from "react";

const TOTAL_STEPS = STEPS.length;
const REVIEW_INDEX = TOTAL_STEPS;

const fieldClass =
  "block w-full rounded-xl border border-[#D0E0EC] bg-[#F8FCFF] px-4 py-3.5 text-[15px] md:text-base font-medium text-[#2D2D2D] outline-none transition-all focus:border-[#293C7D] focus:bg-white focus:ring-4 focus:ring-[#293C7D]/10";
const fieldErrorClass =
  "block w-full rounded-xl border border-red-300 bg-[#FFF8F8] px-4 py-3.5 text-[15px] md:text-base font-medium text-[#2D2D2D] outline-none transition-all focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100";
const labelClass =
  "block text-[13px] font-semibold tracking-wide text-[#293C7D] mb-2";

function loadDraft() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return { ...emptyFormState(), ...saved };
  } catch {
    return emptyFormState();
  }
}

function formatAnswer(value) {
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
}

export default function FinancialProfileWizard() {
  const router = useRouter();
  const turnstile = useTurnstile();
  const [current, setCurrent] = useState(0);
  const [form, setForm] = useState(emptyFormState);
  const [errors, setErrors] = useState({});
  const [saveNote, setSaveNote] = useState("Draft is saved on this device.");
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setForm(loadDraft());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      const toSave = Object.fromEntries(
        Object.entries(form).filter(([, value]) =>
          Array.isArray(value) ? value.length > 0 : String(value).trim() !== ""
        )
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

  const isReview = current === REVIEW_INDEX;
  const progressPct = Math.round(
    ((isReview ? TOTAL_STEPS : current + 1) / TOTAL_STEPS) * 100
  );
  const step = isReview ? null : STEPS[current];
  const questions = useMemo(
    () => (isReview ? [] : getQuestionsForStep(current)),
    [current, isReview]
  );
  const reviewRows = useMemo(
    () => (isReview ? getReviewRows(form) : []),
    [form, isReview]
  );

  function updateField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  }

  function toggleMulti(name, value) {
    setForm((prev) => {
      const currentValues = Array.isArray(prev[name]) ? prev[name] : [];
      const next = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];
      return { ...prev, [name]: next };
    });
  }

  function clearForm() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setForm(emptyFormState());
    setErrors({});
    setSuccessMessage("");
    setSubmitError("");
    setCurrent(0);
    turnstile.reset();
    setSaveNote("Form cleared. Draft removed from this device.");
    document
      .getElementById("financial-profile-panel")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function validStepOne() {
    const nextErrors = {
      fullName: !String(form.fullName || "").trim(),
      mobile: !String(form.mobile || "").trim(),
      email:
        !String(form.email || "").trim() ||
        !/^\S+@\S+\.\S+$/.test(String(form.email || "").trim()),
      city: !String(form.city || "").trim(),
    };
    setErrors(nextErrors);
    const ok = !Object.values(nextErrors).some(Boolean);
    if (!ok) {
      document
        .getElementById("financial-profile-panel")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return ok;
  }

  function goTo(target) {
    if (target === current) return;
    if (target > 0 && !validStepOne()) return;
    setCurrent(target);
    document
      .getElementById("financial-profile-panel")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleNext() {
    if (!validStepOne()) return;
    if (isReview) {
      handleSubmit();
      return;
    }
    if (current < TOTAL_STEPS - 1) goTo(current + 1);
    else goTo(REVIEW_INDEX);
  }

  function handlePrev() {
    if (isReview) {
      goTo(TOTAL_STEPS - 1);
      return;
    }
    if (current > 0) goTo(current - 1);
  }

  async function handleSubmit() {
    if (!validStepOne()) {
      setCurrent(0);
      return;
    }

    const notyf = new Notyf({
      position: { x: "right", y: "top" },
      duration: 5000,
    });

    if (!turnstile.token) {
      notyf.error("Please complete the security check before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSuccessMessage("");

    try {
      const payload = buildResponsePayload(form);
      const result = await submitQuestionnaireLead(
        CF7_FORM_IDS.financialProfile,
        payload,
        {
          turnstileToken: turnstile.token,
          filename: responseFilename(payload),
        }
      );

      if (result.ok) {
        pushLeadEvent("financial_profile_form_submit", {
          form: "Financial Profile",
          form_id: CF7_FORM_IDS.financialProfile,
        });
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch {
          // ignore
        }
        turnstile.reset();
        router.push("/financial-profile/thank-you");
        return;
      }

      turnstile.reset();
      const message =
        result.message ||
        "There was an error sending your response. Please try again.";
      setSubmitError(message);
      notyf.error(message);
    } catch (error) {
      console.error("Financial profile submit error:", error);
      turnstile.reset();
      const message =
        "There was an error sending your response. Please try again.";
      setSubmitError(message);
      notyf.error(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#D0E0EC] bg-white shadow-[0_18px_40px_-28px_rgba(41,60,125,0.35)]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <aside className="lg:col-span-4 bg-[#232D63] p-6 md:p-8 lg:max-h-[920px] lg:overflow-y-auto lg:p-9 print:hidden">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFC300] md:text-sm">
            Assessment steps
          </p>
          <h3 className="mb-2 text-[24px] font-light leading-tight text-white md:text-[28px]">
            Your progress
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-white/70">
            11 short sections · about 10–15 minutes. Drafts save on this device.
          </p>

          <ol className="mb-6 list-none space-y-2 p-0">
            {STEPS.map((item, index) => {
              const isCurrent = !isReview && index === current;
              const isDone = isReview || index < current;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => goTo(index)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors ${
                      isCurrent
                        ? "border-[#FFC300]/40 bg-white/10"
                        : isDone
                          ? "border-white/15 bg-white/5"
                          : "border-white/10 hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                        isDone || isCurrent
                          ? "bg-[#232D63] text-[#FFC300] ring-1 ring-white/15"
                          : "bg-white/5 text-white/70"
                      }`}
                    >
                      {isDone && !isCurrent ? (
                        <CheckIcon className="h-4 w-4" aria-hidden />
                      ) : (
                        index + 1
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-white">
                        {item.title}
                      </span>
                      <span className="block text-[11px] text-white/55">
                        {item.count}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
            <li>
              <button
                type="button"
                onClick={() => goTo(REVIEW_INDEX)}
                className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors ${
                  isReview
                    ? "border-[#FFC300]/40 bg-white/10"
                    : "border-white/10 hover:bg-white/5"
                }`}
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#232D63] text-[#FFC300] ring-1 ring-white/15">
                  <ClipboardDocumentListIcon className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    Final Review
                  </span>
                  <span className="block text-[11px] text-white/55">
                    Check & submit
                  </span>
                </span>
              </button>
            </li>
          </ol>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5">
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FFC300]">
                Completion
              </span>
              <span className="text-sm font-bold text-white">
                {isReview ? 100 : progressPct}%
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#FFC300] transition-all duration-500"
                style={{ width: `${isReview ? 100 : progressPct}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-white/60">
              {isReview
                ? "Review complete · 100%"
                : `Step ${current + 1} of ${TOTAL_STEPS} · ${progressPct}%`}
            </p>
          </div>
        </aside>

        <div
          id="financial-profile-panel"
          className="scroll-mt-24 bg-[#F6FDFF] p-5 md:p-8 lg:col-span-8 lg:p-10"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#232D63]">
                <ClipboardDocumentListIcon
                  className="h-6 w-6 text-[#FFC300]"
                  aria-hidden
                />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#479AD2]">
                  {isReview
                    ? "Final Review"
                    : `Step ${current + 1} · ${step.title}`}
                </p>
                <p className="text-xl font-bold text-[#293C7D]">
                  {isReview ? "Check your responses" : step.heading}
                </p>
              </div>
            </div>
            <span className="hidden rounded-full border border-[#E3ECF5] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#293C7D] sm:inline-flex">
              {isReview ? "Ready" : step.count}
            </span>
          </div>

          {!isReview ? (
            <div
              className={
                current === 0
                  ? "grid grid-cols-1 gap-4 sm:grid-cols-2"
                  : "space-y-5"
              }
            >
              {questions.map((question) => {
                if (!isQuestionVisible(question, form)) return null;
                const isWide =
                  question.fields?.length > 1 ||
                  question.fields?.[0]?.answerType === "single_choice" ||
                  question.fields?.[0]?.answerType === "multiple_choice" ||
                  question.fields?.[0]?.fieldName === "feedback";
                return (
                  <div
                    key={question.questionId}
                    className={current === 0 && !isWide ? undefined : "sm:col-span-2"}
                  >
                    <QuestionBlock
                      question={question}
                      form={form}
                      errors={errors}
                      onUpdate={updateField}
                      onToggleMulti={toggleMulti}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <p className="mb-5 text-sm leading-relaxed text-[#4D4D4D]">
                Please review the information below. You can go back to any
                section and edit it before submitting.
              </p>

              <div className="space-y-2 rounded-[20px] border border-[#D0E0EC] bg-white p-4 md:p-5">
                {reviewRows.length === 0 ? (
                  <p className="m-0 text-sm text-[#6B7C8A]">
                    No responses entered yet.
                  </p>
                ) : (
                  reviewRows.map((row) => (
                    <div
                      key={`${row.questionId || row.fieldName}-${row.fieldName || row.question}`}
                      className="grid gap-1 border-b border-[#E8EEF4] py-3 last:border-b-0 last:pb-0 first:pt-0 md:grid-cols-[220px_1fr] md:gap-4"
                    >
                      <strong className="text-sm text-[#293C7D]">
                        {row.questionId ? `${row.questionId} · ` : ""}
                        {row.question}
                      </strong>
                      <span className="text-sm text-[#4D4D4D]">
                        {formatAnswer(row.answer)}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[#6B7C8A] md:text-sm">
                Submit sends your complete response to the PrimeIdea research
                desk by email.
              </p>

              {successMessage ? (
                <div className="mt-4 rounded-xl bg-green-100 p-3 text-sm text-green-700">
                  <strong>Response sent.</strong> {successMessage}
                </div>
              ) : null}

              {submitError ? (
                <div className="mt-4 rounded-xl bg-red-100 p-3 text-sm text-red-700">
                  {submitError}
                </div>
              ) : null}

              <div className="mt-5 space-y-3">
                <TurnstileWidget
                  onToken={turnstile.onToken}
                  resetKey={turnstile.resetKey}
                  className="min-h-[65px]"
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !turnstile.token}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFC300] px-5 py-3.5 text-base font-bold text-[#232D63] transition-colors hover:bg-[#293C7D] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <PaperAirplaneIcon className="h-5 w-5" aria-hidden />
                  {isSubmitting ? "Submitting…" : "Submit"}
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4 border-t border-[#E3ECF5] pt-5 sm:flex-row sm:items-center sm:justify-between">
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
                disabled={current === 0 && !isReview}
                onClick={handlePrev}
                className="rounded-xl border border-[#D0E0EC] bg-white px-5 py-3 text-sm font-bold text-[#293C7D] transition-colors hover:border-[#293C7D]/40 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={isReview && (isSubmitting || !turnstile.token)}
                className="rounded-xl bg-[#FFC300] px-5 py-3 text-sm font-bold text-[#232D63] transition-colors hover:bg-[#293C7D] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isReview
                  ? isSubmitting
                    ? "Submitting…"
                    : "Submit →"
                  : current === TOTAL_STEPS - 1
                    ? "Review & Submit →"
                    : "Next →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionBlock({ question, form, errors, onUpdate, onToggleMulti }) {
  const fields = question.fields || [];
  const isGroup = fields.length > 1;
  const single = fields[0];

  if (!isGroup && single?.answerType === "text" && single.fieldName === "feedback") {
    return (
      <div>
        <label htmlFor={single.fieldName} className={labelClass}>
          {question.questionId} · {question.question}
          {question.required ? " *" : ""}
        </label>
        {question.instructions ? (
          <p className="mb-2 text-xs text-[#6B7C8A]">{question.instructions}</p>
        ) : null}
        <textarea
          id={single.fieldName}
          name={single.fieldName}
          rows={5}
          placeholder="Your goals, concerns, upcoming needs, or questions..."
          value={form[single.fieldName] || ""}
          onChange={(e) => onUpdate(single.fieldName, e.target.value)}
          className={fieldClass}
        />
      </div>
    );
  }

  if (!isGroup && (single?.answerType === "text" || single?.answerType === "number")) {
    const err = errors[single.fieldName];
    const isMoney = single.unit === "INR";
    return (
      <div>
        <label htmlFor={single.fieldName} className={labelClass}>
          {question.questionId ? `${question.questionId} · ` : ""}
          {question.question}
          {question.required ? " *" : ""}
        </label>
        <input
          id={single.fieldName}
          name={single.fieldName}
          type={single.answerType === "number" ? "number" : "text"}
          min={single.answerType === "number" ? 0 : undefined}
          step={single.answerType === "number" ? (isMoney ? 1000 : 1) : undefined}
          placeholder={
            isMoney
              ? "Approximate amount"
              : single.fieldName === "email"
                ? "you@example.com"
                : single.fieldName === "mobile"
                  ? "+91…"
                  : "…"
          }
          autoComplete={
            single.fieldName === "fullName"
              ? "name"
              : single.fieldName === "email"
                ? "email"
                : single.fieldName === "mobile"
                  ? "tel"
                  : single.fieldName === "city"
                    ? "address-level2"
                    : undefined
          }
          value={form[single.fieldName] || ""}
          onChange={(e) => onUpdate(single.fieldName, e.target.value)}
          className={err ? fieldErrorClass : fieldClass}
        />
        {err ? (
          <p className="mt-1.5 text-xs font-medium text-red-600">
            {single.fieldName === "email"
              ? "Please enter a valid email address."
              : `Please enter your ${question.question.toLowerCase()}.`}
          </p>
        ) : null}
      </div>
    );
  }

  if (!isGroup && single?.answerType === "single_choice") {
    return (
      <fieldset className="m-0 space-y-3 p-0">
        <legend className={labelClass}>
          {question.questionId} · {question.question}
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {single.options.map((option) => {
            const selected = form[single.fieldName] === option.value;
            const id = `${single.fieldName}-${slug(option.value)}`;
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
                  name={single.fieldName}
                  value={option.value}
                  checked={selected}
                  onChange={() => onUpdate(single.fieldName, option.value)}
                  className="sr-only"
                />
                <span
                  className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    selected
                      ? "border-white/30 bg-white/15 text-[#FFC300]"
                      : "border-[#D0E0EC] bg-[#F8FCFF]"
                  }`}
                >
                  {selected ? <CheckIcon className="h-3 w-3" aria-hidden /> : null}
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
  }

  if (!isGroup && single?.answerType === "multiple_choice") {
    const selectedValues = Array.isArray(form[single.fieldName])
      ? form[single.fieldName]
      : [];
    return (
      <fieldset className="m-0 space-y-3 p-0">
        <legend className={labelClass}>
          {question.questionId} · {question.question}
          {question.instructions ? (
            <span className="ml-1 font-normal text-[#6B7C8A]">
              {question.instructions}
            </span>
          ) : null}
        </legend>
        <div className="flex flex-wrap gap-2">
          {single.options.map((option) => {
            const checked = selectedValues.includes(option.value);
            return (
              <label
                key={option.value}
                className={`inline-flex cursor-pointer items-center rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                  checked
                    ? "border-[#293C7D] bg-[#293C7D] text-white"
                    : "border-[#D0E0EC] bg-[#F8FCFF] text-[#293C7D] hover:border-[#293C7D]/50"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => onToggleMulti(single.fieldName, option.value)}
                />
                {option.label}
              </label>
            );
          })}
        </div>
      </fieldset>
    );
  }

  // Grouped number fields (Q14, Q15, Q16)
  const groups = [];
  fields.forEach((field) => {
    const groupName = field.group || "Details";
    let group = groups.find((g) => g.name === groupName);
    if (!group) {
      group = { name: groupName, fields: [] };
      groups.push(group);
    }
    group.fields.push(field);
  });

  return (
    <div className="space-y-4">
      <div>
        <p className={labelClass}>
          {question.questionId} · {question.question}
        </p>
        {question.instructions ? (
          <p className="text-xs text-[#6B7C8A]">{question.instructions}</p>
        ) : null}
      </div>
      {groups.map((group) => (
        <div key={group.name}>
          {groups.length > 1 || group.name !== "Details" ? (
            <p className="mb-2 text-sm font-semibold text-[#2D2D2D]">{group.name}</p>
          ) : null}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.fields.map((field) => (
              <div key={field.fieldName}>
                <label htmlFor={field.fieldName} className={labelClass}>
                  {field.label || field.fieldName}
                </label>
                <input
                  id={field.fieldName}
                  name={field.fieldName}
                  type="number"
                  min={0}
                  step={field.unit === "percent" ? 1 : 1000}
                  placeholder={
                    field.unit === "percent" ? "Approximate" : "Approximate amount"
                  }
                  value={form[field.fieldName] || ""}
                  onChange={(e) => onUpdate(field.fieldName, e.target.value)}
                  className={fieldClass}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function slug(value) {
  return String(value)
    .replace(/[^a-z0-9]+/gi, "-")
    .toLowerCase();
}
