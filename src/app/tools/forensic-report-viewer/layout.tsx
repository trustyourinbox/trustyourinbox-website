import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMARC Forensic Report Viewer: Analyze RUF Reports | TrustYourInbox",
  description:
    "View and analyze DMARC forensic reports (RUF) with our free tool. Upload RFC 6591 compliant reports to identify authentication failures, suspicious senders, and email security threats instantly.",
  keywords: [
    "DMARC forensic reports",
    "RUF viewer",
    "DMARC failure reports",
    "RFC 6591 viewer",
    "email authentication failures",
    "DMARC RUF analyzer",
  ],
  openGraph: {
    title: "DMARC Forensic Report Viewer: Analyze RUF Reports | TrustYourInbox",
    description:
      "View and analyze DMARC forensic reports. Upload RUF reports to identify authentication failures and security threats.",
    type: "website",
  },
};

export default function ForensicReportViewerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
