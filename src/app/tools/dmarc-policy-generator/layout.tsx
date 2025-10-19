import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DMARC Policy Generator: Create DMARC Records Instantly | TrustYourInbox",
  description:
    "Free DMARC record generator with guided setup. Create compliant DMARC policies (none, quarantine, reject) in seconds. Configure reporting, alignment, and get deployment instructions.",
  keywords: [
    "DMARC generator",
    "DMARC policy generator",
    "create DMARC record",
    "DMARC record builder",
    "generate DMARC",
    "DMARC setup tool",
    "free DMARC generator",
  ],
  openGraph: {
    title: "DMARC Policy Generator: Create DMARC Records Instantly",
    description:
      "Generate DMARC records for free with guided setup. Configure policies, reporting, and get deployment instructions.",
    type: "website",
  },
};

export default function DmarcPolicyGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
