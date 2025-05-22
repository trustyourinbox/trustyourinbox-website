import { FaShieldAlt, FaChartLine, FaSitemap, FaFileCode, FaSearch } from "react-icons/fa";

const coreTools = [
  {
    name: "DMARC Policy Generator",
    description: "Create and customize DMARC policies with our intuitive generator",
    href: "/tools/dmarc-policy-generator",
    icon: <FaShieldAlt className="w-5 h-5 text-blue-600" />
  },
  {
    name: "DMARC Policy Impact Simulator",
    description: "Simulate the impact of DMARC policy changes before deployment",
    href: "/tools/dmarc-policy-impact-simulator",
    icon: <FaChartLine className="w-5 h-5 text-green-600" />
  },
  {
    name: "DMARC Subdomain Policy Checker",
    description: "Check DMARC policies across your domain and subdomains",
    href: "/tools/dmarc-subdomain-policy-checker",
    icon: <FaSitemap className="w-5 h-5 text-purple-600" />
  },
  {
    name: "Domain Security Checker",
    description: "Comprehensive security analysis for your domain's email configuration",
    href: "/tools/domain-security-checker",
    icon: <FaShieldAlt className="w-5 h-5 text-red-600" />
  },
  {
    name: "DMARC XML Converter",
    description: "Convert DMARC XML reports into readable formats",
    href: "/tools/dmarc-xml-converter",
    icon: <FaFileCode className="w-5 h-5 text-indigo-600" />
  },
  {
    name: "Forensic DMARC Report Viewer",
    description: "View and analyze forensic DMARC reports",
    href: "/tools/forensic-dmarc-report-viewer",
    icon: <FaSearch className="w-5 h-5 text-yellow-600" />
  }
]; 