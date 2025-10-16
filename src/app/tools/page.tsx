"use client"

import Link from "next/link"
import { Shield, Search, FileText, Globe, AlertTriangle, BarChart3, CheckCircle, FileCode, Settings, Eye, Wrench } from "lucide-react"

const tools = [
  {
    name: "DMARC Analyzer",
    href: "/tools/dmarc-analyzer",
    icon: Shield,
    description: "Analyze existing DMARC records to check policy enforcement, alignment requirements, and compliance with standards.",
    category: "DMARC",
    popular: true,
  },
  {
    name: "SPF Surveyor",
    href: "/tools/spf-surveyor",
    icon: Search,
    description: "Analyze SPF records, show authorized senders, check for DNS lookup limits, and visualize include hierarchy.",
    category: "SPF",
    popular: true,
  },
  {
    name: "DMARC Policy Generator",
    href: "/tools/dmarc-policy-generator",
    icon: FileText,
    description: "Generate DMARC records from scratch with policy configuration wizard and best practice recommendations.",
    category: "DMARC",
    popular: true,
  },
  {
    name: "DMARC Domain Checker",
    href: "/tools/dmarc-domain-checker",
    icon: Globe,
    description: "Check if a domain has DMARC configured and view current policy settings and record details.",
    category: "DMARC",
    popular: false,
  },
  {
    name: "DMARC Subdomain Policy Checker",
    href: "/tools/dmarc-subdomain-policy-checker",
    icon: AlertTriangle,
    description: "Verify DMARC subdomain policies and check for proper subdomain protection configuration.",
    category: "DMARC",
    popular: false,
  },
  {
    name: "DMARC Policy Impact Simulator",
    href: "/tools/dmarc-policy-impact-simulator",
    icon: BarChart3,
    description: "Simulate the impact of different DMARC policies on your email flow before implementing changes.",
    category: "DMARC",
    popular: false,
  },
  {
    name: "DKIM Validator",
    href: "/tools/dkim-validator",
    icon: CheckCircle,
    description: "Validate DKIM signatures and keys to ensure proper email authentication configuration.",
    category: "DKIM",
    popular: false,
  },
  {
    name: "DKIM Inspector",
    href: "/tools/dkim-inspector",
    icon: Eye,
    description: "Inspect DKIM records, analyze selector configuration, and troubleshoot authentication issues.",
    category: "DKIM",
    popular: false,
  },
  {
    name: "Domain Security Checker",
    href: "/tools/domain-security-checker",
    icon: Settings,
    description: "Comprehensive domain security audit checking DMARC, SPF, DKIM, and other email authentication protocols.",
    category: "Security",
    popular: true,
  },
  {
    name: "Forensic Report Viewer",
    href: "/tools/forensic-report-viewer",
    icon: FileCode,
    description: "Parse and visualize DMARC forensic failure reports (RUF) to identify authentication issues.",
    category: "Reports",
    popular: false,
  },
  {
    name: "XML Converter",
    href: "/tools/xml-converter",
    icon: Wrench,
    description: "Convert DMARC aggregate reports from XML format to readable JSON or CSV for analysis.",
    category: "Reports",
    popular: false,
  },
]

const categories = ["All", "DMARC", "SPF", "DKIM", "Security", "Reports"]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium mb-6">
              <Wrench className="h-4 w-4 mr-2 text-primary" />
              <span className="text-primary">Free Email Security Tools</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-primary">Free DMARC</span> & Email Security Tools
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional-grade tools to analyze, validate, and generate DMARC, SPF, and DKIM records. All free, no signup required.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24">
        <div className="container">
          {/* Popular Tools First */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-primary rounded"></div>
              <h2 className="text-3xl font-bold">Most Popular</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools
                .filter((tool) => tool.popular)
                .map((tool) => {
                  const Icon = tool.icon
                  return (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1"
                    >
                      {/* Gradient Background on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon & Badge */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="px-2 py-1 rounded-md bg-primary/10 text-xs font-medium text-primary">
                            {tool.category}
                          </div>
                        </div>

                        {/* Text */}
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {tool.description}
                        </p>

                        {/* Arrow */}
                        <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Try it now</span>
                          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  )
                })}
            </div>
          </div>

          {/* All Tools */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-primary rounded"></div>
              <h2 className="text-3xl font-bold">All Tools</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => {
                const Icon = tool.icon
                return (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon & Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="inline-flex p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="px-2 py-0.5 rounded text-xs font-medium text-muted-foreground border border-border">
                          {tool.category}
                        </div>
                      </div>

                      {/* Text */}
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need More Than Free Tools?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get comprehensive DMARC monitoring, reporting, and analytics with TrustYourInbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View All Features
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold hover:bg-muted transition-colors"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
