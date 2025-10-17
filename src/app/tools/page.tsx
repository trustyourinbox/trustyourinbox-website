"use client";

import Link from "next/link";
import {
  Shield,
  Search,
  FileText,
  Globe,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  FileCode,
  Settings,
  Eye,
  Wrench,
} from "lucide-react";

const tools = [
  {
    name: "DMARC Analyzer",
    href: "/tools/dmarc-analyzer",
    icon: Shield,
    description:
      "Analyze existing DMARC records to check policy enforcement, alignment requirements, and compliance with standards.",
    category: "DMARC",
    popular: true,
  },
  {
    name: "SPF Surveyor",
    href: "/tools/spf-surveyor",
    icon: Search,
    description:
      "Analyze SPF records, show authorized senders, check for DNS lookup limits, and visualize include hierarchy.",
    category: "SPF",
    popular: true,
  },
  {
    name: "DMARC Policy Generator",
    href: "/tools/dmarc-policy-generator",
    icon: FileText,
    description:
      "Generate DMARC records from scratch with policy configuration wizard and best practice recommendations.",
    category: "DMARC",
    popular: true,
  },
  {
    name: "DMARC Domain Checker",
    href: "/tools/dmarc-domain-checker",
    icon: Globe,
    description:
      "Check if a domain has DMARC configured and view current policy settings and record details.",
    category: "DMARC",
    popular: false,
  },
  {
    name: "DMARC Subdomain Policy Checker",
    href: "/tools/dmarc-subdomain-policy-checker",
    icon: AlertTriangle,
    description:
      "Verify DMARC subdomain policies and check for proper subdomain protection configuration.",
    category: "DMARC",
    popular: false,
  },
  {
    name: "DMARC Policy Impact Simulator",
    href: "/tools/dmarc-policy-impact-simulator",
    icon: BarChart3,
    description:
      "Simulate the impact of different DMARC policies on your email flow before implementing changes.",
    category: "DMARC",
    popular: false,
  },
  {
    name: "DKIM Validator",
    href: "/tools/dkim-validator",
    icon: CheckCircle,
    description:
      "Validate DKIM signatures and keys to ensure proper email authentication configuration.",
    category: "DKIM",
    popular: false,
  },
  {
    name: "DKIM Inspector",
    href: "/tools/dkim-inspector",
    icon: Eye,
    description:
      "Inspect DKIM records, analyze selector configuration, and troubleshoot authentication issues.",
    category: "DKIM",
    popular: false,
  },
  {
    name: "Domain Security Checker",
    href: "/tools/domain-security-checker",
    icon: Settings,
    description:
      "Comprehensive domain security audit checking DMARC, SPF, DKIM, and other email authentication protocols.",
    category: "Security",
    popular: true,
  },
  {
    name: "Forensic Report Viewer",
    href: "/tools/forensic-report-viewer",
    icon: FileCode,
    description:
      "Parse and visualize DMARC forensic failure reports (RUF) to identify authentication issues.",
    category: "Reports",
    popular: false,
  },
  {
    name: "XML Converter",
    href: "/tools/xml-converter",
    icon: Wrench,
    description:
      "Convert DMARC aggregate reports from XML format to readable JSON or CSV for analysis.",
    category: "Reports",
    popular: false,
  },
];

const categories = ["All", "DMARC", "SPF", "DKIM", "Security", "Reports"];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary/30 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium">
              <Wrench className="mr-2 h-4 w-4 text-primary" />
              <span className="text-primary">Free Email Security Tools</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              <span className="text-primary">Free DMARC</span> & Email Security
              Tools
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Professional-grade tools to analyze, validate, and generate DMARC,
              SPF, and DKIM records. All free, no signup required.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24">
        <div className="container">
          {/* Popular Tools First */}
          <div className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded bg-primary"></div>
              <h2 className="text-3xl font-bold">Most Popular</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tools
                .filter((tool) => tool.popular)
                .map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl"
                    >
                      {/* Gradient Background on Hover */}
                      <div className="to-accent-hover/5 absolute inset-0 bg-gradient-to-br from-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon & Badge */}
                        <div className="mb-4 flex items-start justify-between">
                          <div className="inline-flex rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                            {tool.category}
                          </div>
                        </div>

                        {/* Text */}
                        <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                          {tool.name}
                        </h3>
                        <p className="mb-4 leading-relaxed text-muted-foreground">
                          {tool.description}
                        </p>

                        {/* Arrow */}
                        <div className="flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          <span>Try it now</span>
                          <svg
                            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>

          {/* All Tools */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded bg-primary"></div>
              <h2 className="text-3xl font-bold">All Tools</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon & Badge */}
                      <div className="mb-4 flex items-start justify-between">
                        <div className="inline-flex rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="rounded border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground">
                          {tool.category}
                        </div>
                      </div>

                      {/* Text */}
                      <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
                        {tool.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {tool.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Need More Than Free Tools?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Get comprehensive DMARC monitoring, reporting, and analytics with
              TrustYourInbox
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View All Features
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold transition-colors hover:bg-muted"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
