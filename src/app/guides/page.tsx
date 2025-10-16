"use client"

import Link from "next/link"
import { BookOpen, Shield, Search, FileText, Globe, Users, ArrowRight, CheckCircle } from "lucide-react"

const guideCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    guides: [
      { name: "What is DMARC?", desc: "Understanding email authentication", time: "5 min read" },
      { name: "Why DMARC Matters", desc: "Protect your domain from spoofing", time: "4 min read" },
      { name: "DMARC Quick Start Guide", desc: "Get started in 15 minutes", time: "15 min read" },
      { name: "Understanding Email Authentication", desc: "SPF, DKIM, and DMARC explained", time: "8 min read" },
    ],
  },
  {
    title: "DMARC Implementation",
    icon: Shield,
    guides: [
      { name: "Creating Your First DMARC Record", desc: "Step-by-step implementation", time: "10 min read" },
      { name: "DMARC Policy Levels Explained", desc: "None, Quarantine, and Reject", time: "6 min read" },
      { name: "Subdomain DMARC Policies", desc: "Protecting all your domains", time: "7 min read" },
      { name: "Moving to p=reject Safely", desc: "Progressive enforcement guide", time: "12 min read" },
    ],
  },
  {
    title: "SPF Configuration",
    icon: Search,
    guides: [
      { name: "SPF Record Basics", desc: "Authorize your email senders", time: "6 min read" },
      { name: "SPF Include Chains", desc: "Managing complex SPF setups", time: "8 min read" },
      { name: "SPF 10 DNS Lookup Limit", desc: "Avoid SPF failures", time: "5 min read" },
      { name: "SPF Best Practices", desc: "Optimize your SPF records", time: "9 min read" },
    ],
  },
  {
    title: "DKIM Setup",
    icon: FileText,
    guides: [
      { name: "What is DKIM?", desc: "Digital signatures for emails", time: "5 min read" },
      { name: "Generating DKIM Keys", desc: "Create strong signatures", time: "7 min read" },
      { name: "DKIM Selector Strategy", desc: "Managing multiple selectors", time: "6 min read" },
      { name: "DKIM Troubleshooting", desc: "Fix common DKIM issues", time: "10 min read" },
    ],
  },
  {
    title: "Report Analysis",
    icon: Globe,
    guides: [
      { name: "Understanding DMARC Reports", desc: "RUA and RUF explained", time: "8 min read" },
      { name: "Reading Aggregate Reports", desc: "Interpret XML data", time: "10 min read" },
      { name: "Forensic Report Analysis", desc: "Deep dive into failures", time: "12 min read" },
      { name: "Identifying Legitimate Senders", desc: "Whitelist vs blocklist", time: "7 min read" },
    ],
  },
  {
    title: "Advanced Topics",
    icon: Users,
    guides: [
      { name: "BIMI Implementation", desc: "Brand indicators in email", time: "15 min read" },
      { name: "Multi-Tenant DMARC", desc: "Enterprise deployment", time: "20 min read" },
      { name: "Third-Party Email Services", desc: "Configure providers correctly", time: "12 min read" },
      { name: "DMARC for Email Marketing", desc: "Best practices for bulk email", time: "10 min read" },
    ],
  },
]

const quickLinks = [
  { name: "DMARC Analyzer Tool", href: "/tools/dmarc-analyzer" },
  { name: "SPF Surveyor Tool", href: "/tools/spf-surveyor" },
  { name: "Policy Generator", href: "/tools/dmarc-policy-generator" },
  { name: "Get Support", href: "/support" },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4 mr-2 text-primary" />
              <span className="text-primary">Learning Center</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-primary">DMARC</span> Guides & Resources
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Learn everything you need to know about DMARC, SPF, DKIM, and email authentication. From beginner to advanced topics.
            </p>

            {/* Search Bar Placeholder */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  className="w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-16">
            {guideCategories.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.title}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="inline-flex p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                  </div>

                  {/* Guides Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.guides.map((guide) => (
                      <Link
                        key={guide.name}
                        href="#"
                        className="group p-6 rounded-xl border border-border bg-background hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                            {guide.name}
                          </h3>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{guide.desc}</p>
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-primary"></div>
                          <span className="text-xs text-muted-foreground">{guide.time}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Links Sidebar */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Popular Guides */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Popular Guides</h2>
              <div className="space-y-4">
                {[
                  { name: "Complete DMARC Implementation Guide", desc: "Everything you need for full DMARC deployment" },
                  { name: "Fixing SPF 10 DNS Lookup Errors", desc: "Common causes and solutions" },
                  { name: "DMARC Reports: A Practical Guide", desc: "Make sense of aggregate and forensic reports" },
                  { name: "Email Authentication for Beginners", desc: "Start protecting your domain today" },
                ].map((guide) => (
                  <Link
                    key={guide.name}
                    href="#"
                    className="group flex items-start gap-4 p-4 rounded-lg border border-border bg-background hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors mb-1">
                        {guide.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{guide.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block p-3 rounded-lg border border-border bg-background hover:border-primary/30 hover:shadow-md transition-all text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Help Card */}
              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h4 className="font-bold mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Can&apos;t find what you&apos;re looking for? Our support team is here to help.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Contact Support
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
