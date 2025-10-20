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
        href: "/guides/what-is-dmarc",
      },
      {
        name: "Why DMARC Matters",
        desc: "Protect your domain from spoofing",
        time: "4 min read",
        href: "/guides/why-dmarc-matters",
      },
      {
        name: "DMARC Quick Start Guide",
        desc: "Get started in 15 minutes",
        time: "15 min read",
        href: "/guides/dmarc-quick-start-guide",
      },
      {
        name: "Understanding Email Authentication",
        desc: "SPF, DKIM, and DMARC explained",
        time: "8 min read",
        href: "/guides/understanding-email-authentication",
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
        time: "12 min read",
        href: "/guides/creating-your-first-dmarc-record",
      },
      {
        name: "DMARC Policy Levels Explained",
        desc: "None, Quarantine, and Reject",
        time: "6 min read",
        href: "/guides/dmarc-policy-levels-explained",
      },
      {
        name: "Subdomain DMARC Policies",
        desc: "Protecting all your domains",
        time: "7 min read",
        href: "/guides/subdomain-dmarc-policies",
      },
      {
        name: "Moving to p=reject Safely",
        desc: "Progressive enforcement guide",
        time: "12 min read",
        href: "/guides/moving-to-p-reject-safely",
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
        href: "/guides/spf-record-basics",
      },
      {
        name: "SPF Include Chains",
        desc: "Managing complex SPF setups",
        time: "8 min read",
        href: "/guides/spf-include-chains",
      },
      {
        name: "SPF 10 DNS Lookup Limit",
        desc: "Avoid SPF failures",
        time: "5 min read",
        href: "/guides/spf-10-dns-lookup-limit",
      },
      {
        name: "SPF Best Practices",
        desc: "Optimize your SPF records",
        time: "9 min read",
        href: "/guides/spf-best-practices",
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
        href: "/guides/what-is-dkim",
      },
      {
        name: "Generating DKIM Keys",
        desc: "Create strong signatures",
        time: "7 min read",
        href: "/guides/generating-dkim-keys",
      },
      {
        name: "DKIM Selector Strategy",
        desc: "Managing multiple selectors",
        time: "6 min read",
        href: "/guides/dkim-selector-strategy",
      },
      {
        name: "DKIM Troubleshooting",
        desc: "Fix common DKIM issues",
        time: "10 min read",
        href: "/guides/dkim-troubleshooting",
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
        href: "/guides/understanding-dmarc-reports",
      },
      {
        name: "Reading Aggregate Reports",
        desc: "Interpret XML data",
        time: "10 min read",
        href: "/guides/reading-aggregate-reports",
      },
      {
        name: "Forensic Report Analysis",
        desc: "Deep dive into failures",
        time: "12 min read",
        href: "/guides/forensic-report-analysis",
      },
      {
        name: "Identifying Legitimate Senders",
        desc: "Whitelist vs blocklist",
        time: "8 min read",
        href: "/guides/identifying-legitimate-senders",
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
        href: "/guides/bimi-implementation",
      },
      {
        name: "Multi-Tenant DMARC",
        desc: "Enterprise deployment",
        time: "20 min read",
        href: "/guides/multi-tenant-dmarc",
      },
      {
        name: "Third-Party Email Services",
        desc: "Configure providers correctly",
        time: "12 min read",
        href: "/guides/third-party-email-services",
      },
      {
        name: "DMARC for Email Marketing",
        desc: "Best practices for bulk email",
        time: "10 min read",
        href: "/guides/dmarc-for-email-marketing",
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
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <BookOpen className="text-primary mr-2 h-4 w-4" />
              <span className="text-primary">Learning Center</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              <span className="text-primary">DMARC</span> Guides & Resources
            </h1>
            <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
              Learn everything you need to know about DMARC, SPF, DKIM, and
              email authentication. From beginner to advanced topics.
            </p>

            {/* Search Bar Placeholder */}
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  className="border-border bg-background focus:ring-primary h-12 w-full rounded-lg border pr-4 pl-12 focus:border-transparent focus:ring-2 focus:outline-none"
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
                    <div className="bg-primary/10 inline-flex rounded-lg p-2">
                      <Icon className="text-primary h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                  </div>

                  {/* Guides Grid */}
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.guides.map((guide) => (
                      <Link
                        key={guide.name}
                        href={guide.href}
                        className="group border-border bg-background hover:border-primary/30 rounded-md border p-6 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <h3 className="group-hover:text-primary text-lg font-bold transition-colors">
                            {guide.name}
                          </h3>
                          <ArrowRight className="text-muted-foreground group-hover:text-primary ml-2 h-5 w-5 flex-shrink-0 transition-all group-hover:translate-x-1" />
                        </div>
                        <p className="text-muted-foreground mb-3 text-sm">
                          {guide.desc}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="bg-primary h-1 w-1 rounded-full"></div>
                          <span className="text-muted-foreground text-xs">
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
                    href: "/guides/complete-dmarc-implementation-guide",
                  },
                  {
                    name: "Fixing SPF 10 DNS Lookup Errors",
                    desc: "Common causes and solutions",
                    href: "/guides/spf-10-dns-lookup-limit",
                  },
                  {
                    name: "DMARC Reports: A Practical Guide",
                    desc: "Make sense of aggregate and forensic reports",
                    href: "/guides/dmarc-reports-practical-guide",
                  },
                  {
                    name: "Email Authentication for Beginners",
                    desc: "Start protecting your domain today",
                    href: "/guides/understanding-email-authentication",
                  },
                ].map((guide) => (
                  <Link
                    key={guide.name}
                    href={guide.href}
                    className="group border-border bg-background hover:border-primary/30 flex items-start gap-4 rounded-lg border p-4 transition-all hover:shadow-md"
                  >
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h3 className="group-hover:text-primary mb-1 font-semibold transition-colors">
                        {guide.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
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
                    className="border-border bg-background hover:border-primary/30 block rounded-lg border p-3 text-sm font-medium transition-all hover:shadow-md"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Help Card */}
              <div className="border-primary/20 bg-primary/5 mt-8 rounded-md border p-6">
                <h4 className="mb-2 font-bold">Need Help?</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Can&apos;t find what you&apos;re looking for? Our support team
                  is here to help.
                </p>
                <Link
                  href="/contact"
                  className="text-primary inline-flex items-center text-sm font-medium hover:underline"
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
