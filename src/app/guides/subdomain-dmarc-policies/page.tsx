"use client";

import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Shield,
  GitBranch,
  AlertTriangle,
  CheckCircle,
  Globe,
  Lock,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title: "Subdomain DMARC Policies: Protect All Your Domains | Guide 2025",
  description:
    "Learn how to configure DMARC policies for subdomains. Protect marketing.domain.com, app.domain.com, and all subdomains with proper DMARC implementation.",
  keywords: [
    "subdomain DMARC",
    "DMARC subdomain policy",
    "sp tag DMARC",
    "subdomain email authentication",
    "DMARC for subdomains",
    "protect subdomains",
    "marketing subdomain DMARC",
    "app subdomain DMARC",
  ],
  openGraph: {
    title: "Subdomain DMARC Policies: Protect All Your Domains | Guide 2025",
    description:
      "Configure DMARC policies for subdomains with sp= tag. Protect marketing, app, and all subdomains from spoofing.",
    type: "article",
    url: "https://trustyourinbox.com/guides/subdomain-dmarc-policies",
  },
};

export default function SubdomainDMARCPoliciesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <section className="border-border border-b py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground flex items-center transition-colors"
            >
              <Home className="h-4 w-4" />
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/guides"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Guides
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">
              Subdomain DMARC Policies
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <Shield className="text-primary mr-2 h-4 w-4" />
              <span className="text-primary">DMARC Implementation</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Subdomain DMARC Policies
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Your organization domain is protected, but what about
              marketing.yourdomain.com and app.yourdomain.com? Learn how to
              configure DMARC policies for subdomains to prevent attackers from
              spoofing them.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">7 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">
                  Updated January 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* The Problem */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-destructive/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <AlertTriangle className="text-destructive h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">The Subdomain Problem</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Most organizations focus DMARC protection on their primary
                domain (yourdomain.com) but forget about subdomains:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Globe className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      marketing.yourdomain.com (unprotected)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Used by SendGrid, Mailchimp, Salesforce Marketing Cloud
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      app.yourdomain.com (unprotected)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Transactional emails, password resets, notifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      support.yourdomain.com (unprotected)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Zendesk, Freshdesk, customer support emails
                    </p>
                  </div>
                </div>
              </div>
              <Alert variant="error" className="mt-6">
                <AlertTriangle className="h-4 w-4" />
                <div>
                  <div className="font-semibold">Security Risk</div>
                  <div className="text-sm">
                    Attackers can send phishing emails from your unprotected
                    subdomains even if your main domain has DMARC p=reject.
                    Recipients will see &quot;From:
                    noreply@marketing.yourdomain.com&quot; and trust it.
                  </div>
                </div>
              </Alert>
            </Card>

            {/* How DMARC Inheritance Works */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <GitBranch className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  How DMARC Inheritance Works
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                When a receiving server checks DMARC for a subdomain, it follows
                this lookup order:
              </p>
              <div className="space-y-4">
                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">
                      Check Subdomain DMARC Record
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    First, look for _dmarc.marketing.yourdomain.com TXT record.
                    If found, use this policy for the subdomain.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">
                      Check sp= Tag in Organization Domain
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    If no subdomain DMARC record exists, check
                    _dmarc.yourdomain.com for sp= tag (subdomain policy):
                  </p>
                  <div className="bg-background rounded-md p-3 font-mono text-xs">
                    <p>v=DMARC1; p=reject;</p>
                    <p className="text-primary font-semibold">
                      sp=quarantine; (← policy for ALL subdomains)
                    </p>
                    <p>rua=mailto:dmarc@yourdomain.com</p>
                  </div>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">Inherit p= Policy</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    If no sp= tag exists, subdomains inherit the main policy (p=
                    tag). If p=reject, subdomains also get p=reject.
                  </p>
                </Card>
              </div>
            </Card>

            {/* Configuration Strategies */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Lock className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  3 Subdomain Configuration Strategies
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Strategy 1: Use sp= Tag (Recommended)
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Set a subdomain policy in your organization domain DMARC
                    record. This applies to ALL subdomains that don&apos;t have
                    their own DMARC record.
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
                    <p className="text-muted-foreground mb-2">
                      # _dmarc.yourdomain.com TXT
                    </p>
                    <p>v=DMARC1;</p>
                    <p>p=reject; (main domain policy)</p>
                    <p className="text-primary font-semibold">
                      sp=quarantine; (subdomain policy)
                    </p>
                    <p>rua=mailto:dmarc@yourdomain.com;</p>
                    <p>pct=100</p>
                  </div>
                  <Alert variant="info" className="mt-4">
                    <CheckCircle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Why This Works</div>
                      <div className="text-sm">
                        Main domain protected with p=reject, but subdomains
                        start with sp=quarantine while you test. Centralizes
                        subdomain protection in one record.
                      </div>
                    </div>
                  </Alert>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Strategy 2: Individual Subdomain Records
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Create separate DMARC records for each subdomain that sends
                    email. Gives you granular control per subdomain.
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
                    <p className="text-muted-foreground mb-2">
                      # _dmarc.marketing.yourdomain.com TXT
                    </p>
                    <p>v=DMARC1; p=quarantine;</p>
                    <p>rua=mailto:marketing-dmarc@yourdomain.com</p>
                    <p className="text-muted-foreground mt-4 mb-2">
                      # _dmarc.app.yourdomain.com TXT
                    </p>
                    <p>v=DMARC1; p=reject;</p>
                    <p>rua=mailto:app-dmarc@yourdomain.com</p>
                    <p className="text-muted-foreground mt-4 mb-2">
                      # _dmarc.support.yourdomain.com TXT
                    </p>
                    <p>v=DMARC1; p=none;</p>
                    <p>rua=mailto:support-dmarc@yourdomain.com</p>
                  </div>
                  <Alert variant="info" className="mt-4">
                    <CheckCircle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">When to Use</div>
                      <div className="text-sm">
                        When different subdomains have different deployment
                        timelines or you want separate DMARC reports per
                        subdomain team.
                      </div>
                    </div>
                  </Alert>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Strategy 3: Inherit Main Policy
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Don&apos;t use sp= tag and don&apos;t create subdomain
                    records. All subdomains inherit the main p= policy.
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
                    <p className="text-muted-foreground mb-2">
                      # _dmarc.yourdomain.com TXT
                    </p>
                    <p>v=DMARC1;</p>
                    <p>p=reject; (applies to main domain AND all subdomains)</p>
                    <p>rua=mailto:dmarc@yourdomain.com</p>
                  </div>
                  <Alert variant="warning" className="mt-4">
                    <AlertTriangle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Caution</div>
                      <div className="text-sm">
                        Only use this after ALL subdomains have proper SPF/DKIM
                        configured. If even one subdomain has bad auth, it will
                        immediately fail with p=reject.
                      </div>
                    </div>
                  </Alert>
                </div>
              </div>
            </Card>

            {/* Real-World Example */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Globe className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Real-World Enterprise Example
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                A typical enterprise setup with multiple subdomains:
              </p>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-md p-4">
                  <p className="mb-2 font-mono text-sm font-semibold">
                    yourdomain.com
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Main organization domain - Google Workspace
                  </p>
                  <p className="mt-2 font-mono text-xs">
                    p=reject (fully enforced)
                  </p>
                </div>

                <div className="bg-muted/50 rounded-md p-4">
                  <p className="mb-2 font-mono text-sm font-semibold">
                    marketing.yourdomain.com
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Marketing campaigns - SendGrid + Mailchimp
                  </p>
                  <p className="mt-2 font-mono text-xs">
                    sp=quarantine (testing phase, inherits from main domain sp=
                    tag)
                  </p>
                </div>

                <div className="bg-muted/50 rounded-md p-4">
                  <p className="mb-2 font-mono text-sm font-semibold">
                    app.yourdomain.com
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Transactional emails - Postmark + AWS SES
                  </p>
                  <p className="mt-2 font-mono text-xs">
                    Individual record: p=reject (fully configured SPF/DKIM)
                  </p>
                </div>

                <div className="bg-muted/50 rounded-md p-4">
                  <p className="mb-2 font-mono text-sm font-semibold">
                    support.yourdomain.com
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Customer support - Zendesk
                  </p>
                  <p className="mt-2 font-mono text-xs">
                    sp=quarantine (inherits from main domain sp= tag)
                  </p>
                </div>

                <div className="bg-muted/50 rounded-md p-4">
                  <p className="mb-2 font-mono text-sm font-semibold">
                    staging.yourdomain.com
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Staging environment - testing only
                  </p>
                  <p className="mt-2 font-mono text-xs">
                    Individual record: p=none (monitor only, no enforcement)
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 mt-6 rounded-md p-4 font-mono text-sm">
                <p className="text-muted-foreground mb-2">
                  # Main domain record (_dmarc.yourdomain.com):
                </p>
                <p>v=DMARC1; p=reject; sp=quarantine;</p>
                <p>rua=mailto:dmarc@yourdomain.com; pct=100</p>
                <p className="text-muted-foreground mt-4 mb-2">
                  # Subdomain record for app (_dmarc.app.yourdomain.com):
                </p>
                <p>v=DMARC1; p=reject;</p>
                <p>rua=mailto:app-dmarc@yourdomain.com</p>
                <p className="text-muted-foreground mt-4 mb-2">
                  # Subdomain record for staging
                  (_dmarc.staging.yourdomain.com):
                </p>
                <p>v=DMARC1; p=none;</p>
                <p>rua=mailto:staging-dmarc@yourdomain.com</p>
              </div>
            </Card>

            {/* Step-by-Step Implementation */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Step-by-Step Implementation
              </h2>
              <div className="space-y-4">
                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">
                      Inventory All Subdomains
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    List every subdomain that sends email: marketing, app,
                    support, staging, etc. Check with IT, marketing, and product
                    teams.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">
                      Check Current SPF/DKIM Status
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    For each subdomain, verify SPF and DKIM are configured. Send
                    test emails and check authentication results.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">
                      Add sp=none to Main Domain
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Start monitoring subdomain email without enforcement:
                  </p>
                  <div className="bg-background rounded-md p-3 font-mono text-xs">
                    <p>v=DMARC1; p=reject; sp=none;</p>
                    <p>rua=mailto:dmarc@yourdomain.com</p>
                  </div>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      4
                    </div>
                    <h3 className="text-lg font-semibold">
                      Review Reports for 2 Weeks
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Check DMARC aggregate reports for subdomain email sources.
                    Identify any legitimate senders failing SPF/DKIM.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      5
                    </div>
                    <h3 className="text-lg font-semibold">
                      Fix Subdomain Authentication
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Configure SPF and DKIM for each subdomain. Update ESP
                    settings (SendGrid, Mailchimp, etc.) to use subdomain.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      6
                    </div>
                    <h3 className="text-lg font-semibold">
                      Move to sp=quarantine
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Once all legitimate subdomain email passes authentication:
                  </p>
                  <div className="bg-background rounded-md p-3 font-mono text-xs">
                    <p>v=DMARC1; p=reject; sp=quarantine;</p>
                    <p>rua=mailto:dmarc@yourdomain.com</p>
                  </div>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      7
                    </div>
                    <h3 className="text-lg font-semibold">
                      Monitor for 4 Weeks, Then sp=reject
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    After 4 weeks with no failures at sp=quarantine:
                  </p>
                  <div className="bg-background rounded-md p-3 font-mono text-xs">
                    <p>v=DMARC1; p=reject; sp=reject;</p>
                    <p>rua=mailto:dmarc@yourdomain.com</p>
                  </div>
                  <p className="text-muted-foreground mt-3 text-sm">
                    All subdomains now fully protected!
                  </p>
                </Card>
              </div>
            </Card>

            {/* Common Mistakes */}
            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <div>
                <div className="mb-2 font-semibold">Common Mistakes</div>
                <ul className="space-y-1 text-sm">
                  <li>
                    • Forgetting about subdomains when setting p=reject on main
                    domain
                  </li>
                  <li>
                    • Not configuring SPF/DKIM for ESP subdomains (marketing,
                    support)
                  </li>
                  <li>
                    • Setting sp=reject too quickly without monitoring reports
                  </li>
                  <li>
                    • Assuming subdomains that don&apos;t send email are safe
                    (they can still be spoofed)
                  </li>
                  <li>
                    • Using same DKIM selector for main domain and subdomains
                    (use separate selectors)
                  </li>
                  <li>
                    • Not testing subdomain emails before changing sp= policy
                  </li>
                </ul>
              </div>
            </Alert>

            {/* Related Guides */}
            <Card className="bg-secondary/30 p-8">
              <h2 className="mb-6 text-2xl font-bold">Related Guides</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/guides/dmarc-policy-levels-explained"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    DMARC Policy Levels
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    None, Quarantine, and Reject
                  </p>
                </Link>
                <Link
                  href="/guides/spf-record-basics"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    SPF Record Basics
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Configure SPF for subdomains
                  </p>
                </Link>
                <Link
                  href="/guides/what-is-dkim"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    What is DKIM?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    DKIM for subdomains
                  </p>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-border to-secondary/30 border-t bg-gradient-to-b from-transparent py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Subdomain Protection Made Simple
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              TrustYourInbox automatically discovers all your subdomains and
              monitors their DMARC compliance. No manual tracking needed.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">See Platform Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="bg-secondary/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Free Subdomain Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/tools/dmarc-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Shield className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  DMARC Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check subdomain policies
                </p>
              </Link>
              <Link
                href="/tools/spf-surveyor"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Globe className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  SPF Surveyor
                </h3>
                <p className="text-muted-foreground text-sm">
                  Verify subdomain SPF records
                </p>
              </Link>
              <Link
                href="/tools/dmarc-policy-generator"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Lock className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  Policy Generator
                </h3>
                <p className="text-muted-foreground text-sm">
                  Create sp= tag records
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
