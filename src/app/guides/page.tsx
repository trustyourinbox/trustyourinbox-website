"use client";

import Link from "next/link";
import {
  BookOpen,
  Shield,
  Search,
  FileText,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const guideCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    guides: [
      {
        name: "What is DMARC?",
        desc: "Understanding email authentication",
        time: "5 min read",
      },
      {
        name: "Why DMARC Matters",
        desc: "Protect your domain from spoofing",
        time: "4 min read",
      },
      {
        name: "DMARC Quick Start Guide",
        desc: "Get started in 15 minutes",
        time: "15 min read",
      },
      {
        name: "Understanding Email Authentication",
        desc: "SPF, DKIM, and DMARC explained",
        time: "8 min read",
      },
    ],
  },
  {
    title: "DMARC Implementation",
    icon: Shield,
    guides: [
      {
        name: "Creating Your First DMARC Record",
        desc: "Step-by-step implementation",
        time: "10 min read",
      },
      {
        name: "DMARC Policy Levels Explained",
        desc: "None, Quarantine, and Reject",
        time: "6 min read",
      },
      {
        name: "Subdomain DMARC Policies",
        desc: "Protecting all your domains",
        time: "7 min read",
      },
      {
        name: "Moving to p=reject Safely",
        desc: "Progressive enforcement guide",
        time: "12 min read",
      },
    ],
  },
  {
    title: "SPF Configuration",
    icon: Search,
    guides: [
      {
        name: "SPF Record Basics",
        desc: "Authorize your email senders",
        time: "6 min read",
      },
      {
        name: "SPF Include Chains",
        desc: "Managing complex SPF setups",
        time: "8 min read",
      },
      {
        name: "SPF 10 DNS Lookup Limit",
        desc: "Avoid SPF failures",
        time: "5 min read",
      },
      {
        name: "SPF Best Practices",
        desc: "Optimize your SPF records",
        time: "9 min read",
      },
    ],
  },
  {
    title: "DKIM Setup",
    icon: FileText,
    guides: [
      {
        name: "What is DKIM?",
        desc: "Digital signatures for emails",
        time: "5 min read",
      },
      {
        name: "Generating DKIM Keys",
        desc: "Create strong signatures",
        time: "7 min read",
      },
      {
        name: "DKIM Selector Strategy",
        desc: "Managing multiple selectors",
        time: "6 min read",
      },
      {
        name: "DKIM Troubleshooting",
        desc: "Fix common DKIM issues",
        time: "10 min read",
      },
    ],
  },
  {
    title: "Report Analysis",
    icon: Globe,
    guides: [
      {
        name: "Understanding DMARC Reports",
        desc: "RUA and RUF explained",
        time: "8 min read",
      },
      {
        name: "Reading Aggregate Reports",
        desc: "Interpret XML data",
        time: "10 min read",
      },
      {
        name: "Forensic Report Analysis",
        desc: "Deep dive into failures",
        time: "12 min read",
      },
      {
        name: "Identifying Legitimate Senders",
        desc: "Whitelist vs blocklist",
        time: "7 min read",
      },
    ],
  },
  {
    title: "Advanced Topics",
    icon: Users,
    guides: [
      {
        name: "BIMI Implementation",
        desc: "Brand indicators in email",
        time: "15 min read",
      },
      {
        name: "Multi-Tenant DMARC",
        desc: "Enterprise deployment",
        time: "20 min read",
      },
      {
        name: "Third-Party Email Services",
        desc: "Configure providers correctly",
        time: "12 min read",
      },
      {
        name: "DMARC for Email Marketing",
        desc: "Best practices for bulk email",
        time: "10 min read",
      },
    ],
  },
];

const quickLinks = [
  { name: "DMARC Analyzer Tool", href: "/tools/dmarc-analyzer" },
  { name: "SPF Surveyor Tool", href: "/tools/spf-surveyor" },
  { name: "Policy Generator", href: "/tools/dmarc-policy-generator" },
  { name: "Get Support", href: "/support" },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary/30 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium">
              <BookOpen className="mr-2 h-4 w-4 text-primary" />
              <span className="text-primary">Learning Center</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              <span className="text-primary">DMARC</span> Guides & Resources
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
              Learn everything you need to know about DMARC, SPF, DKIM, and
              email authentication. From beginner to advanced topics.
            </p>

            {/* Search Bar Placeholder */}
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  className="h-12 w-full rounded-lg border border-border bg-background pl-12 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
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
              const Icon = category.icon;
              return (
                <div key={category.title}>
                  {/* Category Header */}
                  <div className="mb-8 flex items-center gap-3">
                    <div className="inline-flex rounded-lg bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                  </div>

                  {/* Guides Grid */}
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.guides.map((guide) => (
                      <Link
                        key={guide.name}
                        href="#"
                        className="group rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <h3 className="text-lg font-bold transition-colors group-hover:text-primary">
                            {guide.name}
                          </h3>
                          <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                        </div>
                        <p className="mb-3 text-sm text-muted-foreground">
                          {guide.desc}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-primary"></div>
                          <span className="text-xs text-muted-foreground">
                            {guide.time}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links Sidebar */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Popular Guides */}
            <div className="lg:col-span-2">
              <h2 className="mb-8 text-3xl font-bold">Popular Guides</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Complete DMARC Implementation Guide",
                    desc: "Everything you need for full DMARC deployment",
                  },
                  {
                    name: "Fixing SPF 10 DNS Lookup Errors",
                    desc: "Common causes and solutions",
                  },
                  {
                    name: "DMARC Reports: A Practical Guide",
                    desc: "Make sense of aggregate and forensic reports",
                  },
                  {
                    name: "Email Authentication for Beginners",
                    desc: "Start protecting your domain today",
                  },
                ].map((guide) => (
                  <Link
                    key={guide.name}
                    href="#"
                    className="group flex items-start gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold transition-colors group-hover:text-primary">
                        {guide.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {guide.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-xl font-bold">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block rounded-lg border border-border bg-background p-3 text-sm font-medium transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Help Card */}
              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h4 className="mb-2 font-bold">Need Help?</h4>
                <p className="mb-4 text-sm text-muted-foreground">
                  Can&apos;t find what you&apos;re looking for? Our support team
                  is here to help.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Contact Support
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
