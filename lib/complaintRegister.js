import graphqlRequest from "./graphqlRequest";
import COMPLAINT_REGISTER from "../data/complaintStatus";

function stripTags(html) {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#8211;|&ndash;/gi, "–")
    .replace(/&#8212;|&mdash;/gi, "—")
    .replace(/\s+/g, " ")
    .trim();
}

export function parseComplaintTable(html) {
  if (!html || typeof html !== "string") return [];

  const rows = [];
  const trs = html.match(/<tr[\s\S]*?<\/tr>/gi) || [];

  for (const tr of trs) {
    const cells = [...tr.matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(
      (match) => stripTags(match[1])
    );
    if (cells.length < 6) continue;

    const joined = cells.join(" ").toLowerCase();
    if (joined.includes("complaints received") && joined.includes("month")) {
      continue;
    }

    const received = Number(String(cells[1]).replace(/,/g, ""));
    if (!cells[0] || Number.isNaN(received)) continue;

    rows.push({
      month: cells[0],
      received: cells[1],
      resolved: cells[2],
      pending: cells[3],
      averageResolutionTime: cells[4],
      remarks: cells[5],
    });
  }

  return rows;
}

export async function getComplaintRegister() {
  try {
    const response = await graphqlRequest({
      query: `
        query ComplaintRegisterPage {
          page(id: "/complaint-status/", idType: URI) {
            content
          }
        }
      `,
    });

    const html = response?.data?.page?.content || "";
    const parsed = parseComplaintTable(html);
    if (parsed.length) return parsed;
  } catch (error) {
    console.error("Complaint register fetch error:", error);
  }

  return COMPLAINT_REGISTER;
}
