import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrustYourInbox vs Dmarcian: Features, Pricing & Comparison 2025",
  description:
    "Compare TrustYourInbox and Dmarcian for DMARC monitoring. See pricing differences ($99/mo transparent vs quote-based), feature comparison, deployment speed, and why companies choose TrustYourInbox for faster implementation and clear pricing.",
  keywords: [
    "TrustYourInbox vs Dmarcian",
    "Dmarcian alternative",
    "DMARC software comparison",
    "Dmarcian pricing",
    "best DMARC tool",
    "Dmarcian competitor",
    "enterprise DMARC solution",
  ],
  openGraph: {
    title: "TrustYourInbox vs Dmarcian: Complete Comparison 2025",
    description:
      "Compare features, pricing, and deployment speed. See why companies choose TrustYourInbox for 4x faster deployment.",
    type: "website",
  },
};

export default function DmarcianComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
