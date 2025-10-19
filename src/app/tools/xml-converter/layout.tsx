import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DMARC XML to JSON Converter: Parse Aggregate Reports | TrustYourInbox",
  description:
    "Convert DMARC aggregate XML reports to JSON format instantly with our free tool. Parse RUA reports, analyze authentication results, and visualize email security data with interactive charts.",
  keywords: [
    "DMARC XML converter",
    "XML to JSON converter",
    "DMARC aggregate report parser",
    "RUA XML parser",
    "DMARC report converter",
    "XML aggregate report tool",
  ],
  openGraph: {
    title:
      "DMARC XML to JSON Converter: Parse Aggregate Reports | TrustYourInbox",
    description:
      "Convert DMARC XML reports to JSON. Parse aggregate reports and analyze authentication results with interactive visualizations.",
    type: "website",
  },
};

export default function XmlConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
