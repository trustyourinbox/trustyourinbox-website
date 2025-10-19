import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DKIM Inspector: Analyze DKIM Records & Key Strength | TrustYourInbox",
  description:
    "Inspect and validate DKIM records with our free tool. Check key lengths, algorithm types, service types, and get detailed recommendations for optimal email authentication security.",
  keywords: [
    "DKIM inspector",
    "DKIM record analyzer",
    "DKIM key check",
    "validate DKIM",
    "DKIM key strength",
    "email signature validation",
  ],
  openGraph: {
    title:
      "DKIM Inspector: Analyze DKIM Records & Key Strength | TrustYourInbox",
    description:
      "Inspect and validate DKIM records. Check key lengths, algorithms, and get detailed security recommendations.",
    type: "website",
  },
};

export default function DkimInspectorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
