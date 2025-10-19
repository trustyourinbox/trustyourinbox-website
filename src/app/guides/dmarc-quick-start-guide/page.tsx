import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Alert } from "@/components/ui/Alert";
import {
  CheckCircle,
  Clock,
  AlertTriangle,
  Zap,
  ArrowRight,
  Settings,
  Search,
  FileText,
  Shield,
  TrendingUp,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DMARC Quick Start Guide: 15-Minute Setup to Email Protection | 2025",
  description:
    "Get DMARC running in 15 minutes with our quick start guide. Step-by-step instructions for creating, deploying, and testing your first DMARC record. Perfect for beginners.",
  keywords: [
    "DMARC quick start",
    "DMARC setup guide",
    "DMARC tutorial",
    "implement DMARC",
    "DMARC for beginners",
    "15-minute DMARC setup",
    "DMARC record creation",
    "email security setup",
    "DMARC deployment",
    "DMARC testing",
  ],
  openGraph: {
    title: "DMARC Quick Start Guide: 15-Minute Setup to Email Protection",
    description:
      "Get DMARC running in 15 minutes with our quick start guide. Step-by-step instructions for creating, deploying, and testing your first DMARC record.",
    type: "article",
    url: "https://trustyourinbox.com/guides/dmarc-quick-start-guide",
  },
};

export default function DmarcQuickStartGuide() {
  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="border-border border-b">
        <div className="container mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/guides"
              className="text-muted-foreground hover:text-foreground"
            >
              Guides
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">DMARC Quick Start Guide</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="border-border bg-muted/30 border-b">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
            Getting Started
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            DMARC Quick Start Guide
          </h1>
          <p className="text-muted-foreground mb-6 text-xl">
            Get DMARC protection running in 15 minutes. Step-by-step setup from
            zero to monitoring in under an hour.
          </p>
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>15-20 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Target className="h-4 w-4" />
              <span>Beginner Friendly</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="h-4 w-4" />
              <span>Actionable Steps</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Quick Overview */}
          <Alert variant="info" className="mb-8">
            <Zap className="h-4 w-4" />
            <div>
              <div className="font-semibold">What You&apos;ll Accomplish</div>
              <p className="mb-0 text-sm">
                In 15 minutes, you&apos;ll have a working DMARC record deployed,
                start receiving reports, and gain visibility into who&apos;s
                sending email from your domain.
              </p>
            </div>
          </Alert>

          {/* Prerequisites */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Before You Start: Quick Prerequisites Check
            </h2>

            <p className="text-muted-foreground mb-6">
              DMARC builds on SPF and DKIM. You need at least one (ideally both)
              configured first.
            </p>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Shield className="text-primary h-5 w-5" />
                  <h3 className="text-lg font-semibold">Check SPF Record</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  SPF authorizes mail servers to send on your behalf. Check if
                  you have one:
                </p>
                <div className="bg-muted mb-3 rounded-lg p-3">
                  <code className="text-xs">
                    nslookup -type=txt yourdomain.com
                  </code>
                </div>
                <p className="text-muted-foreground text-xs">
                  Look for: <code className="text-primary">v=spf1 ...</code>
                </p>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <FileText className="text-primary h-5 w-5" />
                  <h3 className="text-lg font-semibold">Check DKIM Record</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  DKIM adds cryptographic signatures. Check your email
                  provider&apos;s documentation for DKIM setup.
                </p>
                <div className="bg-muted mb-3 rounded-lg p-3">
                  <code className="text-xs">
                    nslookup -type=txt selector._domainkey.yourdomain.com
                  </code>
                </div>
                <p className="text-muted-foreground text-xs">
                  Replace <code className="text-primary">selector</code> with
                  your DKIM selector
                </p>
              </Card>
            </div>

            <Alert variant="warning" className="mb-6">
              <AlertTriangle className="h-4 w-4" />
              <div>
                <div className="font-semibold">No SPF or DKIM Yet?</div>
                <p className="mb-0 text-sm">
                  Set up at least SPF before continuing. Without SPF or DKIM,
                  DMARC won&apos;t pass alignment checks. See our{" "}
                  <Link
                    href="/guides/spf-record-basics"
                    className="text-primary hover:underline"
                  >
                    SPF Record Basics
                  </Link>{" "}
                  guide.
                </p>
              </div>
            </Alert>
          </section>

          {/* 15-Minute Setup */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              The 15-Minute DMARC Setup Process
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Create Your First DMARC Record
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Start with a monitoring-only policy to gather data without
                      affecting email delivery.
                    </p>
                  </div>
                </div>

                <div className="bg-muted mb-4 rounded-lg p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Starter DMARC Record:
                    </span>
                    <Clock className="text-muted-foreground h-4 w-4" />
                  </div>
                  <code className="text-primary block text-sm break-all">
                    v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com; pct=100;
                    sp=none; adkim=r; aspf=r;
                  </code>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-muted-foreground w-32 shrink-0 text-sm font-medium">
                      v=DMARC1
                    </div>
                    <div className="text-muted-foreground text-sm">
                      DMARC version (required)
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-muted-foreground w-32 shrink-0 text-sm font-medium">
                      p=none
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Policy: Monitor only (don&apos;t reject/quarantine yet)
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-muted-foreground w-32 shrink-0 text-sm font-medium">
                      rua=mailto:...
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Where to send aggregate reports (daily summaries)
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-muted-foreground w-32 shrink-0 text-sm font-medium">
                      pct=100
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Apply policy to 100% of emails
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-muted-foreground w-32 shrink-0 text-sm font-medium">
                      sp=none
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Subdomain policy (also monitor)
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-muted-foreground w-32 shrink-0 text-sm font-medium">
                      adkim=r, aspf=r
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Relaxed alignment (easier to pass)
                    </div>
                  </div>
                </div>

                <Alert variant="info" className="mt-4">
                  <Settings className="h-4 w-4" />
                  <div>
                    <p className="mb-0 text-sm">
                      <strong>Pro Tip:</strong> Use our{" "}
                      <Link
                        href="/tools/dmarc-record-generator"
                        className="text-primary hover:underline"
                      >
                        DMARC Record Generator
                      </Link>{" "}
                      to create a customized record in 30 seconds.
                    </p>
                  </div>
                </Alert>
              </Card>

              {/* Step 2 */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Add DMARC Record to Your DNS
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Publish your DMARC record as a TXT record at a specific
                      subdomain.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="mb-2 text-sm font-medium">
                      DNS Record Details:
                    </div>
                    <div className="space-y-2">
                      <div className="bg-muted rounded-lg p-3">
                        <div className="text-muted-foreground mb-1 text-xs">
                          Record Type:
                        </div>
                        <code className="text-primary text-sm">TXT</code>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="text-muted-foreground mb-1 text-xs">
                          Name/Host:
                        </div>
                        <code className="text-primary text-sm">_dmarc</code>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="text-muted-foreground mb-1 text-xs">
                          Value:
                        </div>
                        <code className="text-primary block text-sm break-all">
                          v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com;
                          pct=100;
                        </code>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="text-muted-foreground mb-1 text-xs">
                          TTL:
                        </div>
                        <code className="text-primary text-sm">3600</code>
                        <span className="text-muted-foreground ml-2 text-xs">
                          (1 hour)
                        </span>
                      </div>
                    </div>
                  </div>

                  <Alert variant="warning">
                    <AlertTriangle className="h-4 w-4" />
                    <div>
                      <p className="mb-0 text-sm">
                        <strong>Important:</strong> DNS changes can take 1-48
                        hours to propagate globally. Start with a low TTL (3600)
                        for faster testing.
                      </p>
                    </div>
                  </Alert>
                </div>
              </Card>

              {/* Step 3 */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Verify Your DMARC Record
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Test that your DMARC record is published correctly and
                      readable by mail servers.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="mb-2 text-sm font-medium">
                      Method 1: Command Line (Fast)
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <code className="block text-sm break-all">
                        nslookup -type=txt _dmarc.yourdomain.com
                      </code>
                    </div>
                    <p className="text-muted-foreground mt-2 text-xs">
                      You should see your DMARC record in the response
                    </p>
                  </div>

                  <div>
                    <div className="mb-2 text-sm font-medium">
                      Method 2: Online Checker (Beginner-Friendly)
                    </div>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Use our free DMARC checker for detailed validation:
                    </p>
                    <Link href="/tools/dmarc-record-checker">
                      <Button
                        variant="outline"
                        className="w-full justify-between"
                      >
                        <span className="flex items-center gap-2">
                          <Search className="h-4 w-4" />
                          DMARC Record Checker
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="border-border rounded-lg border p-3">
                      <CheckCircle className="mb-2 h-5 w-5 text-green-600" />
                      <div className="mb-1 text-sm font-medium">
                        What to Look For:
                      </div>
                      <ul className="text-muted-foreground space-y-1 text-xs">
                        <li>✓ Record starts with v=DMARC1</li>
                        <li>✓ Policy (p=) is present</li>
                        <li>✓ Email address (rua=) is valid</li>
                        <li>✓ No syntax errors</li>
                      </ul>
                    </div>
                    <div className="border-border rounded-lg border p-3">
                      <AlertTriangle className="mb-2 h-5 w-5 text-yellow-600" />
                      <div className="mb-1 text-sm font-medium">
                        Common Issues:
                      </div>
                      <ul className="text-muted-foreground space-y-1 text-xs">
                        <li>✗ Record not found (DNS not updated)</li>
                        <li>✗ Syntax errors (missing semicolons)</li>
                        <li>✗ Multiple DMARC records (only 1 allowed)</li>
                        <li>✗ Wrong subdomain (_dmarc required)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Step 4 */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Wait for Reports & Analyze
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Mail servers will start sending daily aggregate reports to
                      your rua= email address within 24-48 hours.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        Report Timeline:
                      </span>
                    </div>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          <strong>Day 1:</strong> DMARC record published
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          <strong>Day 2-3:</strong> First aggregate reports
                          arrive (XML format)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          <strong>Week 1:</strong> Collect baseline data on
                          legitimate senders
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          <strong>Week 2-4:</strong> Identify unauthorized
                          senders, fix SPF/DKIM issues
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Alert variant="info">
                    <FileText className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Reports Are XML Files</div>
                      <p className="mb-2 text-sm">
                        DMARC aggregate reports come as XML attachments.
                        They&apos;re hard to read manually. Use our converter:
                      </p>
                      <Link href="/tools/dmarc-xml-converter">
                        <Button variant="outline" size="sm" className="mt-2">
                          DMARC XML Converter
                        </Button>
                      </Link>
                    </div>
                  </Alert>
                </div>
              </Card>
            </div>
          </section>

          {/* Moving from p=none to Enforcement */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Moving from Monitoring to Enforcement
            </h2>

            <p className="text-muted-foreground mb-6">
              After 2-4 weeks of monitoring with{" "}
              <code className="text-primary">p=none</code>, you&apos;ll have
              enough data to move to enforcement. Here&apos;s the recommended
              timeline:
            </p>

            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <Card className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                  <Search className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Phase 1: Monitor</h3>
                <div className="mb-3">
                  <code className="text-primary text-xs">p=none</code>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  Collect data for 2-4 weeks. Identify all legitimate email
                  sources.
                </p>
                <div className="text-muted-foreground text-xs">
                  <strong>Duration:</strong> 2-4 weeks
                </div>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Phase 2: Quarantine
                </h3>
                <div className="mb-3">
                  <code className="text-primary text-xs">p=quarantine</code>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  Failed emails go to spam. Monitor for false positives.
                </p>
                <div className="text-muted-foreground text-xs">
                  <strong>Duration:</strong> 2-4 weeks
                </div>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                  <Shield className="h-5 w-5 text-green-600 dark:text-green-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Phase 3: Reject</h3>
                <div className="mb-3">
                  <code className="text-primary text-xs">p=reject</code>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  Failed emails are blocked. Full DMARC protection active.
                </p>
                <div className="text-muted-foreground text-xs">
                  <strong>Duration:</strong> Ongoing
                </div>
              </Card>
            </div>

            <Alert variant="warning" className="mb-6">
              <AlertTriangle className="h-4 w-4" />
              <div>
                <div className="font-semibold">Don&apos;t Rush to p=reject</div>
                <p className="mb-0 text-sm">
                  Moving too quickly can block legitimate email. Ensure 95%+ of
                  your email passes DMARC alignment before enforcing
                  p=quarantine or p=reject.
                </p>
              </div>
            </Alert>

            <div className="bg-muted rounded-lg p-5">
              <h4 className="mb-3 text-sm font-semibold">
                Enforcement Checklist:
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  <span>
                    All legitimate email sources identified in reports
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  <span>95%+ DMARC pass rate for 2+ weeks</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  <span>SPF and DKIM properly configured for all senders</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  <span>
                    Third-party senders (marketing, CRM) passing alignment
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  <span>No critical business emails failing DMARC</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Wins */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Quick Wins: What You Get Immediately
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold">Email Visibility</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  See exactly who&apos;s sending email from your
                  domain—legitimate senders AND unauthorized ones.
                </p>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold">Spoofing Detection</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Identify phishing attempts and spoofing attacks targeting your
                  domain in real-time through reports.
                </p>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">Compliance Start</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Meet Google/Yahoo 2025 requirements (p=none minimum) and start
                  PCI DSS 4.0 compliance journey.
                </p>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-orange-600" />
                  <h3 className="text-lg font-semibold">Deliverability Data</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Understand which IPs are sending your email and how recipients
                  (Gmail, Outlook) are treating it.
                </p>
              </Card>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Common Mistakes to Avoid
            </h2>

            <div className="space-y-4">
              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-2 flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Starting with p=reject
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      <strong>Problem:</strong> Blocks legitimate email
                      immediately if SPF/DKIM aren&apos;t perfect.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Solution:</strong> Always start with p=none to
                      monitor for 2-4 weeks first.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-2 flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Invalid rua= email address
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      <strong>Problem:</strong> Reports bounce or go to
                      non-existent mailbox. You lose all visibility.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Solution:</strong> Use a real, monitored email
                      address. Test it receives reports.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-2 flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Forgetting about subdomains
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      <strong>Problem:</strong> marketing.yourdomain.com
                      isn&apos;t protected by your main DMARC record.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Solution:</strong> Use sp=none (or sp=quarantine)
                      to apply policy to subdomains.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-2 flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Not analyzing reports
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      <strong>Problem:</strong> DMARC reports arrive but you
                      never look at them. Defeats the purpose.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Solution:</strong> Set up weekly report reviews or
                      use a DMARC management platform.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              What&apos;s Next After Setup?
            </h2>

            <div className="space-y-4">
              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded text-xs font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold">
                    Monitor Reports Weekly
                  </h3>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  Review aggregate reports every week to identify new email
                  sources and track pass rates.
                </p>
                <Link href="/tools/dmarc-xml-converter">
                  <Button variant="outline" size="sm">
                    Convert DMARC Reports
                  </Button>
                </Link>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded text-xs font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold">Fix SPF/DKIM Issues</h3>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  Address any alignment failures before moving to enforcement
                  policies.
                </p>
                <div className="flex gap-2">
                  <Link href="/guides/spf-record-basics">
                    <Button variant="outline" size="sm">
                      SPF Guide
                    </Button>
                  </Link>
                  <Link href="/guides/what-is-dkim">
                    <Button variant="outline" size="sm">
                      DKIM Guide
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded text-xs font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold">
                    Plan Enforcement Timeline
                  </h3>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  After 2-4 weeks at p=none with 95%+ pass rate, schedule your
                  move to p=quarantine.
                </p>
                <Link href="/tools/dmarc-policy-impact-simulator">
                  <Button variant="outline" size="sm">
                    Simulate Policy Impact
                  </Button>
                </Link>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded text-xs font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold">
                    Consider Enterprise Platform
                  </h3>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  For multiple domains or ongoing management, a DMARC platform
                  provides automated reporting and insights.
                </p>
                <Link href="/demo">
                  <Button variant="outline" size="sm">
                    See Platform Demo
                  </Button>
                </Link>
              </Card>
            </div>
          </section>

          {/* Related Guides */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Related Guides</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/guides/what-is-dmarc" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    What is DMARC?
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Understand DMARC basics before diving into setup
                  </p>
                  <div className="text-primary flex items-center gap-1 text-sm">
                    <span>Read guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>

              <Link href="/guides/spf-record-basics" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    SPF Record Basics
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Set up SPF before implementing DMARC
                  </p>
                  <div className="text-primary flex items-center gap-1 text-sm">
                    <span>Read guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>

              <Link
                href="/guides/understanding-email-authentication"
                className="group"
              >
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    Email Authentication Overview
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    How SPF, DKIM, and DMARC work together
                  </p>
                  <div className="text-primary flex items-center gap-1 text-sm">
                    <span>Read guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <Card className="bg-primary/5 border-primary/20 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">
                Ready to Deploy DMARC?
              </h2>
              <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                Use our free DMARC Record Generator to create your record in 30
                seconds, or try our enterprise platform for automated management
                across all your domains.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/tools/dmarc-record-generator">
                  <Button size="lg" className="min-w-[200px]">
                    Generate DMARC Record
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="outline" size="lg" className="min-w-[200px]">
                    See Platform Demo
                  </Button>
                </Link>
              </div>
            </Card>
          </section>

          {/* Free Tools */}
          <section>
            <h2 className="mb-6 text-3xl font-bold">Free DMARC Tools</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/tools/dmarc-record-generator" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <Settings className="text-primary mb-3 h-6 w-6" />
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    DMARC Record Generator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Create a custom DMARC record in 30 seconds
                  </p>
                </Card>
              </Link>

              <Link href="/tools/dmarc-record-checker" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <Search className="text-primary mb-3 h-6 w-6" />
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    DMARC Record Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Verify your DMARC record is valid
                  </p>
                </Card>
              </Link>

              <Link href="/tools/dmarc-xml-converter" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <FileText className="text-primary mb-3 h-6 w-6" />
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    DMARC XML Converter
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Convert XML reports to readable format
                  </p>
                </Card>
              </Link>

              <Link href="/tools/spf-record-checker" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <Search className="text-primary mb-3 h-6 w-6" />
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    SPF Record Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Validate SPF records and check DNS lookups
                  </p>
                </Card>
              </Link>

              <Link href="/tools/dkim-record-checker" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <Search className="text-primary mb-3 h-6 w-6" />
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    DKIM Record Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Verify DKIM signatures are configured
                  </p>
                </Card>
              </Link>

              <Link
                href="/tools/dmarc-policy-impact-simulator"
                className="group"
              >
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <TrendingUp className="text-primary mb-3 h-6 w-6" />
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    Policy Impact Simulator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Preview enforcement policy impact
                  </p>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
