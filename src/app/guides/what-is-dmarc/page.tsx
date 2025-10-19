import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Mail,
  Lock,
  Eye,
  BookOpen,
  Home,
  Ban,
  Users,
  TrendingUp,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata = {
  title: "What is DMARC? Email Authentication Explained Simply | Guide 2025",
  description:
    "DMARC (Domain-based Message Authentication, Reporting & Conformance) protects your email domain from spoofing and phishing. Learn how DMARC works, why it matters, and how to get started with email authentication in 2025.",
  keywords: [
    "what is DMARC",
    "DMARC explained",
    "email authentication",
    "DMARC definition",
    "domain spoofing protection",
    "email security",
    "DMARC basics",
    "phishing protection",
  ],
  openGraph: {
    title: "What is DMARC? Email Authentication Explained Simply",
    description:
      "Learn what DMARC is, how it protects your domain from spoofing, and why every business needs it in 2025.",
    type: "article",
  },
};

export default function WhatIsDmarc() {
  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="border-border border-b">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4" />
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/guides"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Guides
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">What is DMARC?</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-border border-b">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
            <BookOpen className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-medium">
              Getting Started
            </span>
          </div>

          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            What is DMARC? Email Authentication Explained
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed">
            DMARC (Domain-based Message Authentication, Reporting &amp;
            Conformance) is an email security protocol that protects your domain
            from being used in phishing attacks and email spoofing. Learn how
            DMARC works, why it&apos;s critical for your business, and how to
            get started.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Simple Definition */}
        <section className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <div className="p-8">
              <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                <Shield className="text-primary h-8 w-8" />
              </div>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                DMARC in Simple Terms
              </h2>
              <p className="text-foreground mb-4 text-lg leading-relaxed">
                DMARC is like a{" "}
                <strong>digital lock on your email domain</strong>. It tells
                email providers (Gmail, Outlook, Yahoo) that only authorized
                servers can send emails using your domain name. If someone tries
                to fake an email from your company, DMARC blocks it.
              </p>
              <div className="bg-success/10 rounded-lg p-4">
                <p className="text-success text-sm font-medium">
                  <strong>Bottom Line:</strong> DMARC prevents criminals from
                  sending emails that look like they&apos;re from you.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* The Problem DMARC Solves */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            The Problem: Email Spoofing &amp; Phishing
          </h2>

          <div className="prose-custom mb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Without DMARC, anyone can send emails pretending to be from your
              domain. This is called <strong>email spoofing</strong>, and
              it&apos;s used for:
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-destructive/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <AlertTriangle className="text-destructive h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Phishing Attacks
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Attackers send fake emails from{" "}
                      <code>ceo@yourcompany.com</code> asking employees to wire
                      money, share passwords, or click malicious links. 91% of
                      cyberattacks start with a phishing email.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-destructive/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Users className="text-destructive h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Customer Scams
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Criminals send fake invoices or support emails from{" "}
                      <code>billing@yourcompany.com</code> to your customers,
                      stealing payments or credentials. This damages your brand
                      reputation and customer trust.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-destructive/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <TrendingUp className="text-destructive h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Brand Impersonation
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Scammers use your domain to send spam, damaging your email
                      deliverability. Real emails from your company may end up
                      in spam folders, costing you sales and engagement.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Alert variant="warning" className="mt-6">
            <AlertTriangle className="h-5 w-5" />
            <div>
              <div className="font-semibold">Real Cost of Email Spoofing</div>
              <div className="text-muted-foreground mt-1 text-sm">
                The average business email compromise (BEC) attack results in
                $125,000 in losses. Without DMARC, you&apos;re vulnerable.
              </div>
            </div>
          </Alert>
        </section>

        {/* How DMARC Works */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            How DMARC Works: The 3-Step Process
          </h2>

          <Card>
            <div className="p-6">
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                      <span className="text-primary text-sm font-bold">1</span>
                    </div>
                    <div className="border-border mt-2 h-full w-px border-l-2" />
                  </div>
                  <div className="pb-6">
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Authentication Check
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      When someone sends an email claiming to be from{" "}
                      <code>you@yourcompany.com</code>, the receiving email
                      server checks two things:
                    </p>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>
                        <strong>SPF:</strong> Is the email coming from an
                        authorized mail server?
                      </li>
                      <li>
                        <strong>DKIM:</strong> Does the email have a valid
                        cryptographic signature?
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                      <span className="text-primary text-sm font-bold">2</span>
                    </div>
                    <div className="border-border mt-2 h-full w-px border-l-2" />
                  </div>
                  <div className="pb-6">
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      DMARC Policy Lookup
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      The email server checks your DMARC DNS record at{" "}
                      <code>_dmarc.yourcompany.com</code> to see what policy you
                      set:
                    </p>
                    <div className="space-y-2">
                      <div className="border-border rounded-lg border p-3">
                        <p className="text-foreground mb-1 text-sm font-medium">
                          p=none (monitoring only)
                        </p>
                        <p className="text-muted-foreground text-xs">
                          Send reports but don&apos;t block anything
                        </p>
                      </div>
                      <div className="border-border rounded-lg border p-3">
                        <p className="text-foreground mb-1 text-sm font-medium">
                          p=quarantine (spam folder)
                        </p>
                        <p className="text-muted-foreground text-xs">
                          Send failed emails to spam/junk
                        </p>
                      </div>
                      <div className="border-success/30 bg-success/5 rounded-lg border p-3">
                        <p className="text-foreground mb-1 text-sm font-medium">
                          p=reject (full protection)
                        </p>
                        <p className="text-muted-foreground text-xs">
                          Block failed emails completely
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-success/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                      <span className="text-success text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Enforcement &amp; Reporting
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Based on your policy, the email is either delivered,
                      quarantined, or rejected. You receive daily reports
                      showing:
                    </p>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>✓ All email sources sending as your domain</li>
                      <li>✓ Which emails passed/failed authentication</li>
                      <li>✓ Spoofing attempts that were blocked</li>
                      <li>✓ Unauthorized senders trying to use your domain</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Why You Need DMARC */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Why Your Business Needs DMARC in 2025
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <div className="bg-success/10 mb-4 inline-flex rounded-full p-3">
                  <Shield className="text-success h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  1. Compliance Requirement
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  <strong>Google and Yahoo mandate DMARC</strong> as of February
                  2024 for bulk senders (5,000+ emails/day). Without it, your
                  emails will bounce or go to spam.
                </p>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-muted-foreground text-xs">
                    Deadline: Required now for all business domains
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-success/10 mb-4 inline-flex rounded-full p-3">
                  <Ban className="text-success h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  2. Stop Phishing Attacks
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  DMARC at p=reject blocks 100% of spoofed emails from reaching
                  inboxes. No more fake emails from your CEO asking for wire
                  transfers.
                </p>
                <div className="bg-success/10 rounded-lg p-3">
                  <p className="text-success text-xs font-medium">
                    ✓ Average savings: $125K per prevented BEC attack
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-success/10 mb-4 inline-flex rounded-full p-3">
                  <TrendingUp className="text-success h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  3. Improve Email Deliverability
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  Domains with DMARC p=reject see 10-15% higher inbox placement
                  rates. Your marketing emails, sales outreach, and
                  transactional emails reach customers reliably.
                </p>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-muted-foreground text-xs">
                    Gmail and Outlook prioritize authenticated domains
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-success/10 mb-4 inline-flex rounded-full p-3">
                  <Lock className="text-success h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  4. Protect Brand Reputation
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  When customers receive scam emails from your domain, they lose
                  trust. DMARC ensures only legitimate emails from your company
                  reach customers.
                </p>
                <div className="bg-success/10 rounded-lg p-3">
                  <p className="text-success text-xs font-medium">
                    ✓ Maintain customer trust and brand integrity
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* DMARC vs SPF vs DKIM */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            DMARC vs SPF vs DKIM: What&apos;s the Difference?
          </h2>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-border bg-muted/30 border-b">
                  <tr>
                    <th className="text-foreground px-6 py-4 text-left text-sm font-semibold">
                      Protocol
                    </th>
                    <th className="text-foreground px-6 py-4 text-left text-sm font-semibold">
                      What It Does
                    </th>
                    <th className="text-foreground px-6 py-4 text-left text-sm font-semibold">
                      Limitation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-border divide-y">
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      SPF
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      Verifies the email came from an authorized mail server (IP
                      address)
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      Doesn&apos;t protect against forwarded emails or header
                      manipulation
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      DKIM
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      Adds cryptographic signature to prove email wasn&apos;t
                      tampered with
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      Doesn&apos;t specify what to do if signature is missing or
                      invalid
                    </td>
                  </tr>
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      DMARC
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      Tells receivers what to do when SPF/DKIM fail + provides
                      reports
                    </td>
                    <td className="text-success px-6 py-4 text-sm font-medium">
                      ✓ Requires SPF and DKIM to work
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Alert variant="info" className="mt-6">
            <Shield className="h-5 w-5" />
            <div>
              <div className="font-semibold">Think of It Like This:</div>
              <div className="text-muted-foreground mt-1 text-sm">
                <strong>SPF</strong> is the security guard checking IDs at the
                door. <strong>DKIM</strong> is the tamper-proof seal on a
                package. <strong>DMARC</strong> is the manager who decides what
                happens when security fails and keeps detailed logs.
              </div>
            </div>
          </Alert>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Getting Started with DMARC
          </h2>

          <Card>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground mb-1 font-medium">
                      Step 1: Check Your Current Status
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Use our{" "}
                      <Link
                        href="/tools/domain-security-checker"
                        className="text-primary hover:underline"
                      >
                        Domain Security Checker
                      </Link>{" "}
                      to see if you already have SPF, DKIM, and DMARC configured
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground mb-1 font-medium">
                      Step 2: Set Up SPF and DKIM First
                    </p>
                    <p className="text-muted-foreground text-sm">
                      DMARC requires SPF and DKIM to be configured. Check our{" "}
                      <Link
                        href="/guides/spf-record-basics"
                        className="text-primary hover:underline"
                      >
                        SPF Record Basics
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/guides/what-is-dkim"
                        className="text-primary hover:underline"
                      >
                        What is DKIM?
                      </Link>{" "}
                      guides
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground mb-1 font-medium">
                      Step 3: Create DMARC Record
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Use our{" "}
                      <Link
                        href="/tools/dmarc-policy-generator"
                        className="text-primary hover:underline"
                      >
                        DMARC Policy Generator
                      </Link>{" "}
                      to create your first DMARC record. Start with p=none for
                      monitoring
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground mb-1 font-medium">
                      Step 4: Monitor &amp; Move to p=reject
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Collect reports for 7-14 days, then progress to
                      p=quarantine and finally p=reject for full protection. See
                      our{" "}
                      <Link
                        href="/guides/dmarc-policy-levels-explained"
                        className="text-primary hover:underline"
                      >
                        Policy Levels Guide
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Related Guides */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-2xl font-bold">
            Related Guides
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/guides/why-dmarc-matters">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Why DMARC Matters
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Understand the business impact of DMARC
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/guides/dmarc-quick-start-guide">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DMARC Quick Start Guide
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Get DMARC set up in 15 minutes
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/guides/understanding-email-authentication">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Email Authentication
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    SPF, DKIM, and DMARC explained together
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <div className="p-8 text-center">
              <h2 className="text-foreground mb-4 text-3xl font-bold">
                Get DMARC Protection in 1-2 Weeks
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                TrustYourInbox automates the entire DMARC setup process. We
                configure SPF, DKIM, and DMARC for you, then automatically
                progress to p=reject for maximum protection. No technical
                expertise required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/demo">
                  <Button size="lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/tools/domain-security-checker">
                  <Button size="lg" variant="outline">
                    Check Your Domain Free
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Free Tools */}
        <section>
          <h2 className="text-foreground mb-6 text-2xl font-bold">
            Free DMARC Tools
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/tools/domain-security-checker">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Domain Security Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Check if your domain has DMARC, SPF, and DKIM
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dmarc-policy-generator">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DMARC Policy Generator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Create your first DMARC record instantly
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dmarc-domain-checker">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DMARC Domain Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Verify your DMARC policy is working correctly
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/spf-surveyor">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    SPF Surveyor
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Check your SPF record for issues
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dkim-validator">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DKIM Validator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Validate DKIM signatures on your domain
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dmarc-analyzer">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DMARC Analyzer
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Analyze your DMARC configuration for improvements
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
