/**
 * Monthly complaint register for /regulatory-disclosures#complaint-status.
 *
 * Backend edit (preferred): in WordPress, publish a page with slug
 * "complaint-status" and an HTML table using these exact columns, in order:
 * Month | Complaints received | Complaints resolved | Complaints pending |
 * Average resolution time | Remarks
 * The website reads that table and replaces the rows below.
 *
 * If the WordPress page is missing or the table cannot be read, these rows
 * are shown. Keep this file updated every month, including months with zero
 * complaints. Do not enter counts that have not been confirmed by compliance.
 */
const COMPLAINT_REGISTER = [
  {
    month: "September 2026",
    received: "0",
    resolved: "0",
    pending: "0",
    averageResolutionTime: "—",
    remarks: "No complaints received during the month.",
  },
];

export default COMPLAINT_REGISTER;
