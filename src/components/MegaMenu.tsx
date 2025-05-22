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
          name: "Domain Checker",
          href: "/tools/dmarc-domain-checker",
          icon: <Search className="h-4 w-4" />,
          description: "Verify domain configuration",
        },
        {
          name: "DMARC Analyzer",
          href: "/tools/dmarc-analyzer",
          icon: <Mail className="h-4 w-4" />,
          description: "Analyze DMARC records and policies",
        },
        {
          name: "Policy Generator",
          href: "/tools/dmarc-policy-generator",
          icon: <FileCode className="h-4 w-4" />,
          description: "Create custom DMARC policies",
        },
        {
          name: "Policy Impact Simulator",
          href: "/tools/dmarc-policy-impact-simulator",
          icon: <BarChart2 className="h-4 w-4" />,
          description: "Simulate policy changes",
        },
        {
          name: "Subdomain Policy Checker",
          href: "/tools/dmarc-subdomain-policy-checker",
          icon: <Layers className="h-4 w-4" />,
          description: "Check DMARC policy coverage for subdomains",
        },
        {
          name: "Forensic DMARC Report Viewer",
          href: "/tools/forensic-report-viewer",
          icon: <FileText className="h-4 w-4" />,
          description: "Parse and view forensic DMARC (ruf) reports",
        },
        {
          name: "XML Converter",
          href: "/tools/xml-converter",
          icon: <RefreshCw className="h-4 w-4" />,
          description: "Convert between formats",
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
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          {/* Right-side featured box */}
          <div className="w-full lg:w-80 flex-shrink-0 flex flex-col justify-between bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-sm mt-4 lg:mt-0 lg:ml-2">
            <div>
              <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded mb-2">What&apos;s New</span>
              <h4 className="text-lg font-bold text-blue-900 mb-1">Forensic DMARC Report Viewer</h4>
              <p className="text-sm text-blue-800 mb-4">Upload and analyze forensic (ruf) DMARC reports to investigate authentication failures.</p>
            </div>
            <Link href="/tools/forensic-report-viewer" onClick={onClose} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-lg text-center transition-colors">Try it now</Link>
          </div>
        </div>
      </div>
    </div>
  )
} 