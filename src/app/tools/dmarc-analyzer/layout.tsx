import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Free DMARC Analyzer: Validate & Analyze Records Instantly | TrustYourInbox",
  description:
    "Analyze your DMARC record for free. Get instant policy breakdown, compliance checks, and best-practice recommendations. Paste your record and identify issues in seconds.",
  keywords: [
    "DMARC analyzer",
    "DMARC record checker",
    "validate DMARC",
    "DMARC policy analyzer",
    "check DMARC record",
    "DMARC compliance",
    "email authentication analyzer",
  ],
  openGraph: {
    title: "Free DMARC Analyzer: Validate & Analyze Records Instantly",
    description:
      "Analyze DMARC records for free. Instant policy breakdown, compliance checks, and security recommendations.",
    type: "website",
  },
};

export default function DmarcAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
