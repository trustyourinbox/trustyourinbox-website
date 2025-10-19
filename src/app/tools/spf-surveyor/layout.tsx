import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPF Surveyor: Validate SPF Records & DNS Lookups | TrustYourInbox",
  description:
    "Free SPF record validator and analyzer. Check DNS lookups, identify issues, visualize SPF tree structure, and ensure your SPF record stays under the 10 DNS lookup limit.",
  keywords: [
    "SPF surveyor",
    "SPF record validator",
    "SPF checker",
    "validate SPF",
    "SPF DNS lookups",
    "SPF record analyzer",
    "check SPF record",
    "email authentication SPF",
  ],
  openGraph: {
    title: "SPF Surveyor: Validate SPF Records & DNS Lookups",
    description:
      "Validate SPF records for free. Check DNS lookups, identify issues, and ensure compliance with the 10 lookup limit.",
    type: "website",
  },
};

export default function SpfSurveyorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
