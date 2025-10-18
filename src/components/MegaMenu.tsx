import type React from "react";
import Link from "next/link";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolItem {
  name: string;
  href: string;
  description?: string;
  icon: React.ReactNode;
}

interface ToolCategory {
  title: string;
  icon: React.ReactNode;
  tools: ToolItem[];
}

export function MegaMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const toolCategories: ToolCategory[] = [
    {
      title: "Core Tools",
      icon: <Shield className="text-primary h-5 w-5" />,
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
      icon: <Lock className="text-primary h-5 w-5" />,
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
        {
          name: "SPF Surveyor",
          href: "/tools/spf-surveyor",
          icon: <FileText className="h-4 w-4" />,
          description: "Analyze SPF records",
        },
      ],
    },
    {
      title: "Analysis",
      icon: <BarChart2 className="text-primary h-5 w-5" />,
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
  ];

  return (
    <div
      className={cn(
        "absolute top-full right-0 left-0 z-50 w-full transform rounded-b-xl border-t bg-white shadow-lg transition-all duration-200 ease-in-out",
        isOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0"
      )}
    >
      <div className="container mx-auto px-3 py-4">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {toolCategories.map((category) => (
              <div key={category.title} className="space-y-2">
                <div className="flex items-center gap-2 border-b pb-1">
                  {category.icon}
                  <h3 className="text-base font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="grid gap-1.5">
                  {category.tools.map((tool) => (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      onClick={onClose}
                      className="group flex items-start gap-2 rounded-lg p-1.5 transition-colors hover:bg-gray-50"
                    >
                      <div className="bg-primary/10 text-primary group-hover:bg-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md transition-colors group-hover:text-white">
                        {tool.icon}
                      </div>
                      <div>
                        <div className="group-hover:text-primary text-sm font-medium text-gray-900 transition-colors">
                          {tool.name}
                        </div>
                        {tool.description && (
                          <p className="line-clamp-1 text-xs text-gray-500">
                            {tool.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Right-side featured box */}
          <div className="border-primary/10 bg-secondary mt-4 flex w-full flex-shrink-0 flex-col justify-between rounded-md border p-5 shadow-sm lg:mt-0 lg:ml-2 lg:w-80">
            <div>
              <span className="bg-primary mb-2 inline-block rounded px-2 py-0.5 text-xs font-semibold text-white">
                What&apos;s New
              </span>
              <h4 className="text-foreground mb-1 text-lg font-bold">
                Forensic DMARC Report Viewer
              </h4>
              <p className="text-foreground mb-4 text-sm">
                Upload and analyze forensic (ruf) DMARC reports to investigate
                authentication failures.
              </p>
            </div>
            <Link
              href="/tools/forensic-report-viewer"
              onClick={onClose}
              className="bg-primary hover:bg-primary inline-block rounded-lg px-4 py-2 text-center text-sm font-semibold text-white transition-colors"
            >
              Try it now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
