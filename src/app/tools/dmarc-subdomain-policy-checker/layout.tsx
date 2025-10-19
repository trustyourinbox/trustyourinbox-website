import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DMARC Subdomain Policy Checker: Validate Subdomain Protection | TrustYourInbox",
  description:
    "Check if your subdomains are protected by DMARC policies. Validate subdomain-specific policies (sp=) and ensure comprehensive email security across your entire domain infrastructure.",
  keywords: [
    "DMARC subdomain policy",
    "subdomain DMARC checker",
    "sp= tag DMARC",
    "subdomain email security",
    "DMARC sp policy",
  ],
  openGraph: {
    title:
      "DMARC Subdomain Policy Checker: Validate Subdomain Protection | TrustYourInbox",
    description:
      "Check if your subdomains are protected by DMARC. Validate subdomain-specific policies and ensure comprehensive email security.",
    type: "website",
  },
};

export default function DmarcSubdomainPolicyCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
