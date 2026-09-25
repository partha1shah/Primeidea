import { redirect } from "next/navigation";

export const metadata = {
  robots: "noindex, follow",
};

export default function InsuranceRedirect() {
  redirect("/insurance-planning");
}
