/**
 * Opens a mailto draft after downloading the JSON response.
 * Keeps the body short so email clients reliably open the draft.
 */

const RESEARCH_EMAIL = "research@primeidea.in";

/**
 * @param {{
 *   filename: string,
 *   subject: string,
 *   introLines?: string[],
 *   detailLines?: string[],
 * }} options
 */
export function openResponseEmailDraft({
  filename,
  subject,
  introLines = [],
  detailLines = [],
}) {
  const body = [
    ...introLines,
    "",
    "IMPORTANT — Please attach the downloaded JSON file before sending:",
    filename,
    "",
    "The JSON file was downloaded to your device when you clicked Prepare Email.",
    "Attach that file to this email so PrimeIdea receives your complete response.",
    "",
    "Summary",
    "-------",
    ...detailLines,
    "",
    "Thank you.",
  ]
    .filter((line, index, arr) => !(line === "" && arr[index - 1] === ""))
    .join("\n");

  window.location.href = `mailto:${RESEARCH_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export { RESEARCH_EMAIL };
