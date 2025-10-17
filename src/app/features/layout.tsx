import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - TrustYourInbox",
  description:
    "Discover TrustYourInbox&#39;s comprehensive email security features including DMARC, SPF, DKIM protection, and advanced threat detection.",
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
