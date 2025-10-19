import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free DMARC Checker: Lookup Domain Records Instantly | TrustYourInbox",
  description:
    "Check your domain's DMARC, SPF, and DKIM records instantly with our free tool. Get comprehensive email security analysis, policy recommendations, and compliance status in seconds.",
  keywords: [
    "DMARC checker",
    "DMARC lookup",
    "check DMARC record",
    "domain email security",
    "SPF DKIM DMARC checker",
    "email authentication checker",
  ],
  openGraph: {
    title:
      "Free DMARC Checker: Lookup Domain Records Instantly | TrustYourInbox",
    description:
      "Check your domain's DMARC, SPF, and DKIM records instantly. Get comprehensive email security analysis and recommendations.",
    type: "website",
  },
};

export default function DmarcDomainCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
