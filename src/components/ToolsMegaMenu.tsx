import { Shield, LineChart, Network, FileCode, Search } from "lucide-react";

const coreTools = [
  {
    name: "DMARC Policy Generator",
    description:
      "Create and customize DMARC policies with our intuitive generator",
    href: "/tools/dmarc-policy-generator",
    icon: <Shield className="text-primary h-5 w-5" />,
  },
  {
    name: "DMARC Policy Impact Simulator",
    description:
      "Simulate the impact of DMARC policy changes before deployment",
    href: "/tools/dmarc-policy-impact-simulator",
    icon: <LineChart className="h-5 w-5 text-green-600" />,
  },
  {
    name: "DMARC Subdomain Policy Checker",
    description: "Check DMARC policies across your domain and subdomains",
    href: "/tools/dmarc-subdomain-policy-checker",
    icon: <Network className="h-5 w-5 text-purple-600" />,
  },
  {
    name: "Domain Security Checker",
    description:
      "Comprehensive security analysis for your domain's email configuration",
    href: "/tools/domain-security-checker",
    icon: <Shield className="h-5 w-5 text-red-600" />,
  },
  {
    name: "DMARC XML Converter",
    description: "Convert DMARC XML reports into readable formats",
    href: "/tools/dmarc-xml-converter",
    icon: <FileCode className="h-5 w-5 text-indigo-600" />,
  },
  {
    name: "Forensic DMARC Report Viewer",
    description: "View and analyze forensic DMARC reports",
    href: "/tools/forensic-dmarc-report-viewer",
    icon: <Search className="h-5 w-5 text-yellow-600" />,
  },
];
