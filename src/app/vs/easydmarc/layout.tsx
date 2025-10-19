import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrustYourInbox vs EasyDMARC: Features, Pricing & Comparison 2025",
  description:
    "Compare TrustYourInbox and EasyDMARC for DMARC monitoring. See pricing differences ($99/mo vs $35.99+/mo), feature comparison, and why enterprises choose TrustYourInbox for unlimited email volumes and transparent pricing.",
  keywords: [
    "TrustYourInbox vs EasyDMARC",
    "EasyDMARC alternative",
    "DMARC software comparison",
    "EasyDMARC pricing",
    "best DMARC tool",
    "EasyDMARC competitor",
    "enterprise DMARC solution",
  ],
  openGraph: {
    title: "TrustYourInbox vs EasyDMARC: Complete Comparison 2025",
    description:
      "Compare features, pricing, and deployment speed. See why enterprises choose TrustYourInbox for unlimited email volumes.",
    type: "website",
  },
};

export default function EasyDmarcComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
