import type React from "react"
import Link from "next/link"
import {
  Shield,
  Lock,
  BarChart2,
  FileText,
  Mail,
  CheckCircle,
  Search,
  FileCode,
  RefreshCw,
  Layers,
  Server,
  FileDigit,
  AlertCircle,
  GitBranch,
  FileCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ToolItem {
  name: string
  href: string
  description?: string
  icon: React.ReactNode
}

interface ToolCategory {
  title: string
  icon: React.ReactNode
  tools: ToolItem[]
}

export function MegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const toolCategories: ToolCategory[] = [
    {
      title: "Core Tools",
      icon: <Shield className="h-5 w-5 text-primary" />,
      tools: [
        {
          name: "DMARC Analyzer",
          href: "/tools/dmarc-analyzer",
          icon: <Mail className="h-4 w-4" />,
          description: "Analyze DMARC records and policies",
        },
        {
          name: "Domain Checker",
          href: "/tools/dmarc-domain-checker",
          icon: <Search className="h-4 w-4" />,
          description: "Verify domain configuration",
        },
        {
          name: "Policy Generator",
          href: "/tools/dmarc-policy-generator",
          icon: <FileCode className="h-4 w-4" />,
          description: "Create custom DMARC policies",
        },
        {
          name: "XML Converter",
          href: "/tools/xml-converter",
          icon: <RefreshCw className="h-4 w-4" />,
          description: "Convert between formats",
        },
        {
          name: "Forensic Report Viewer",
          href: "/tools/forensic-report-viewer",
          icon: <FileText className="h-4 w-4" />,
          description: "View detailed forensic reports",
        },
        {
          name: "Alignment Checker",
          href: "/tools/dmarc-alignment-checker",
          icon: <CheckCircle className="h-4 w-4" />,
          description: "Check SPF/DKIM alignment",
        },
        {
          name: "Policy Impact Simulator",
          href: "/tools/dmarc-policy-impact-simulator",
          icon: <BarChart2 className="h-4 w-4" />,
          description: "Simulate policy changes",
        },
        {
          name: "Subdomain Checker",
          href: "/tools/dmarc-subdomain-checker",
          icon: <Layers className="h-4 w-4" />,
          description: "Verify subdomain configuration",
        },
        {
          name: "Report Forwarding Validator",
          href: "/tools/dmarc-report-forwarding-validator",
          icon: <FileCheck className="h-4 w-4" />,
          description: "Validate report forwarding",
        },
      ],
    },
    {
      title: "Authentication",
      icon: <Lock className="h-5 w-5 text-primary" />,
      tools: [
        {
          name: "DKIM Validator",
          href: "/tools/dkim-validator",
          icon: <CheckCircle className="h-4 w-4" />,
          description: "Validate DKIM signatures",
        },
        {
          name: "DKIM Inspector",
          href: "/tools/dkim-inspector",
          icon: <Search className="h-4 w-4" />,
          description: "Inspect DKIM configuration",
        },
        { name: "SPF Surveyor", href: "/tools/spf-surveyor", icon: <FileText className="h-4 w-4" />, description: "Analyze SPF records" },
        {
          name: "BIMI Checker",
          href: "/tools/bimi-checker",
          icon: <Mail className="h-4 w-4" />,
          description: "Verify BIMI implementation",
        },
        {
          name: "BIMI Generator",
          href: "/tools/bimi-generator",
          icon: <FileCode className="h-4 w-4" />,
          description: "Generate BIMI records",
        },
        {
          name: "BIMI SVG Converter",
          href: "/tools/bimi-svg-converter",
          icon: <RefreshCw className="h-4 w-4" />,
          description: "Convert logos to BIMI format",
        },
        {
          name: "MTA-STS Checker",
          href: "/tools/mta-sts-checker",
          icon: <Server className="h-4 w-4" />,
          description: "Check MTA-STS configuration",
        },
        {
          name: "MTA-STS Generator",
          href: "/tools/mta-sts-generator",
          icon: <FileCode className="h-4 w-4" />,
          description: "Generate MTA-STS policies",
        },
        {
          name: "TLS-RPT Checker",
          href: "/tools/tls-rpt-checker",
          icon: <AlertCircle className="h-4 w-4" />,
          description: "Verify TLS-RPT records",
        },
        {
          name: "TLS-RPT Generator",
          href: "/tools/tls-rpt-generator",
          icon: <FileDigit className="h-4 w-4" />,
          description: "Create TLS-RPT policies",
        },
      ],
    },
    {
      title: "Analysis",
      icon: <BarChart2 className="h-5 w-5 text-primary" />,
      tools: [
        {
          name: "Domain Security Checker",
          href: "/tools/domain-security-checker",
          icon: <Shield className="h-4 w-4" />,
          description: "Comprehensive security check",
        },
        {
          name: "DNSSEC Checker",
          href: "/tools/dnssec-checker",
          icon: <Lock className="h-4 w-4" />,
          description: "Verify DNSSEC implementation",
        },
        {
          name: "FCrDNS Lookup",
          href: "/tools/fcrdns-lookup",
          icon: <Search className="h-4 w-4" />,
          description: "Forward-confirmed reverse DNS",
        },
      ],
    },
    {
      title: "Reports",
      icon: <FileText className="h-5 w-5 text-primary" />,
      tools: [
        {
          name: "Forensic Reports",
          href: "/tools/forensic-report-viewer",
          icon: <FileText className="h-4 w-4" />,
          description: "View detailed forensic reports",
        },
        {
          name: "Forwarding Validator",
          href: "/tools/report-forwarding-validator",
          icon: <GitBranch className="h-4 w-4" />,
          description: "Validate report forwarding",
        },
      ],
    },
  ]

  return (
    <div
      className={cn(
        "absolute top-full left-0 right-0 z-50 w-full transform transition-all duration-200 ease-in-out bg-white shadow-lg rounded-b-xl border-t",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none",
      )}
    >
      <div className="container mx-auto py-4 px-3">
        <div className="grid grid-cols-4 gap-4">
          {toolCategories.map((category) => (
            <div key={category.title} className="space-y-2">
              <div className="flex items-center gap-2 pb-1 border-b">
                {category.icon}
                <h3 className="text-base font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="grid gap-1.5">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    onClick={onClose}
                    className="group flex items-start gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-0.5 h-6 w-6 flex items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {tool.icon}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-gray-900 group-hover:text-primary transition-colors">
                        {tool.name}
                      </div>
                      {tool.description && <p className="text-xs text-gray-500 line-clamp-1">{tool.description}</p>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 