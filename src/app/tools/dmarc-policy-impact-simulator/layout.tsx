import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMARC Policy Impact Simulator: Test Policy Changes | TrustYourInbox",
  description:
    "Simulate DMARC policy changes before deployment with our free tool. Upload aggregate reports to see impact of p=quarantine or p=reject on email delivery. Prevent legitimate email blocking.",
  keywords: [
    "DMARC policy simulator",
    "DMARC impact analysis",
    "test DMARC policy",
    "DMARC policy testing",
    "quarantine vs reject impact",
    "DMARC deployment simulator",
  ],
  openGraph: {
    title:
      "DMARC Policy Impact Simulator: Test Policy Changes | TrustYourInbox",
    description:
      "Simulate DMARC policy changes before deployment. See impact of p=quarantine or p=reject on email delivery.",
    type: "website",
  },
};

export default function DmarcPolicyImpactSimulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
