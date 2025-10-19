import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domain Security Checker: Scan SPF, DKIM & DMARC | TrustYourInbox",
  description:
    "Free comprehensive domain security scanner. Check SPF, DKIM, and DMARC records in one scan. Get a security score, identify vulnerabilities, and receive actionable recommendations.",
  keywords: [
    "domain security checker",
    "email security scanner",
    "SPF DKIM DMARC checker",
    "domain security audit",
    "email authentication scan",
    "check domain security",
    "comprehensive email security",
  ],
  openGraph: {
    title: "Domain Security Checker: Scan SPF, DKIM & DMARC",
    description:
      "Comprehensive domain security scan. Check SPF, DKIM, DMARC in one scan and get a security score with recommendations.",
    type: "website",
  },
};

export default function DomainSecurityCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
