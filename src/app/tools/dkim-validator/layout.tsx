import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DKIM Validator: Verify DKIM Signatures & Key Strength | TrustYourInbox",
  description:
    "Validate DKIM records and email signatures for free. Check key strength (2048-bit RSA), verify algorithms, test service types, and get security recommendations for email authentication.",
  keywords: [
    "DKIM validator",
    "DKIM signature checker",
    "validate DKIM record",
    "DKIM verification",
    "DKIM key strength",
    "email signature validation",
    "check DKIM",
    "DKIM authentication",
  ],
  openGraph: {
    title: "DKIM Validator: Verify DKIM Signatures & Key Strength",
    description:
      "Validate DKIM records for free. Check key strength, verify signatures, and get security recommendations.",
    type: "website",
  },
};

export default function DkimValidatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
