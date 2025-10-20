import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Globe,
  Shield,
  AlertTriangle,
  Search,
  FileText,
  XCircle,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title: "Forensic Report Analysis: DMARC RUF Deep Dive | Guide 2025",
  description:
    "Master DMARC forensic reports (RUF). Learn how to analyze individual authentication failures, investigate spoofing attempts, and debug email issues with real-time failure data.",
  keywords: [
    "DMARC forensic reports",
    "RUF reports",
    "forensic report analysis",
    "DMARC failure investigation",
    "RUF analysis",
    "email authentication debugging",
    "DMARC incident response",
    "spoofing detection",
  ],
  openGraph: {
    title: "Forensic Report Analysis: DMARC RUF Deep Dive | Guide",
    description:
      "Deep dive into DMARC forensic reports for real-time authentication failure analysis and spoofing detection.",
    type: "article",
    url: "https://trustyourinbox.com/guides/forensic-report-analysis",
  },
};

export default function ForensicReportAnalysisPage() {
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
              Forensic Report Analysis
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <Globe className="text-primary mr-2 h-4 w-4" />
              <span className="text-primary">Report Analysis</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Forensic Report Analysis
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Forensic reports (RUF) provide real-time samples of authentication
              failures. Unlike aggregate reports, forensic reports show you the
              actual email headers, making them invaluable for debugging and
              detecting spoofing attempts.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">12 min read</span>
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
            {/* What Are Forensic Reports */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <FileText className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  What Are Forensic Reports?
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Forensic reports are sent immediately when an email fails DMARC
                authentication. They contain samples of the actual email with
                full headers, making them perfect for investigating specific
                failures.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Real-Time Delivery</p>
                    <p className="text-muted-foreground text-sm">
                      Sent within minutes of failure (vs aggregate reports sent
                      daily). Critical for detecting active spoofing attacks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Full Email Headers</p>
                    <p className="text-muted-foreground text-sm">
                      Contains complete email headers including
                      Authentication-Results, DKIM-Signature, Received headers,
                      and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Limited Adoption</p>
                    <p className="text-muted-foreground text-sm">
                      Gmail stopped sending RUF in 2023 due to privacy concerns.
                      Yahoo and Outlook still send them but volume is low.
                    </p>
                  </div>
                </div>
              </div>
              <Alert variant="warning" className="mt-6">
                <AlertTriangle className="h-4 w-4" />
                <div>
                  <div className="font-semibold">Privacy Warning</div>
                  <div className="text-sm">
                    RUF reports contain PII (email addresses, subject lines,
                    potentially message content). Store them securely and comply
                    with GDPR/privacy regulations. Many ISPs don&apos;t send RUF
                    for this reason.
                  </div>
                </div>
              </Alert>
            </Card>

            {/* Real Forensic Report Example */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Anatomy of a Forensic Report
              </h2>
              <p className="text-muted-foreground mb-6">
                Here&apos;s what a real forensic report looks like. These arrive
                as email messages (not XML):
              </p>
              <div className="bg-muted/50 mb-6 overflow-x-auto rounded-md p-4 font-mono text-xs">
                <pre className="whitespace-pre-wrap">
                  {`From: noreply@dmarc.yahoo.com
To: forensic@yourdomain.com
Subject: FW: DMARC Failure Report for yourdomain.com

This is an authentication failure report for an email message
received from IP 185.220.101.45 on Mon, 01 Jan 2025 14:23:15 +0000.

Feedback-Type: auth-failure
User-Agent: Yahoo!-DMARC/1.0
Version: 1
Original-Envelope-Id: <unique-id@yahoo.com>
Authentication-Results: yahoo.com;
  dkim=fail reason="signature verification failed"
  spf=fail smtp.mailfrom=yourdomain.com
Source-IP: 185.220.101.45
Reported-Domain: yourdomain.com
Arrival-Date: Mon, 01 Jan 2025 14:23:15 +0000

--- BEGIN ORIGINAL MESSAGE HEADERS ---

Received: from unknown (185.220.101.45)
  by mx.yahoo.com with SMTP; Mon, 01 Jan 2025 14:23:15 +0000
DKIM-Signature: v=1; a=rsa-sha256; d=yourdomain.com;
  s=default; h=from:to:subject:date;
  bh=invalid-body-hash;
  b=invalid-signature
From: support@yourdomain.com
To: victim@customer.com
Subject: Urgent: Verify Your Account
Date: Mon, 01 Jan 2025 14:23:00 +0000
Message-ID: <fake123@attacker.com>

--- END ORIGINAL MESSAGE HEADERS ---`}
                </pre>
              </div>
              <Alert variant="error" className="mb-4">
                <XCircle className="h-4 w-4" />
                <div>
                  <div className="font-semibold">
                    This is a Spoofing Attack!
                  </div>
                  <div className="text-sm">
                    Source IP 185.220.101.45 is unknown, both SPF and DKIM
                    failed, and the email tries to impersonate
                    support@yourdomain.com. This is exactly what DMARC is
                    designed to catch.
                  </div>
                </div>
              </Alert>
            </Card>

            {/* Key Fields to Analyze */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Search className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Key Fields to Analyze</h2>
              </div>
              <div className="space-y-6">
                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-3 text-xl font-semibold">1. Source-IP</h3>
                  <div className="bg-muted/50 mb-3 rounded-md p-3 font-mono text-xs">
                    <p>Source-IP: 185.220.101.45</p>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    <strong>What to do:</strong>
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-1 text-sm">
                    <li>Run WHOIS lookup to identify owner</li>
                    <li>Check if IP is from known ESP or cloud provider</li>
                    <li>Search IP in threat intelligence databases</li>
                    <li>Compare against your authorized sending IPs</li>
                  </ul>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-3 text-xl font-semibold">
                    2. Authentication-Results
                  </h3>
                  <div className="bg-muted/50 mb-3 rounded-md p-3 font-mono text-xs">
                    <p>Authentication-Results: yahoo.com;</p>
                    <p className="text-destructive">
                      dkim=fail reason=&quot;signature verification failed&quot;
                    </p>
                    <p className="text-destructive">
                      spf=fail smtp.mailfrom=yourdomain.com
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    <strong>What it means:</strong>
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-1 text-sm">
                    <li>
                      <strong>dkim=fail:</strong> DKIM signature invalid or
                      missing
                    </li>
                    <li>
                      <strong>spf=fail:</strong> Source IP not authorized in SPF
                      record
                    </li>
                    <li>
                      Both failing = likely spoofing (or major misconfiguration)
                    </li>
                  </ul>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-3 text-xl font-semibold">
                    3. DKIM-Signature Header
                  </h3>
                  <div className="bg-muted/50 mb-3 rounded-md p-3 font-mono text-xs">
                    <p>DKIM-Signature: v=1; a=rsa-sha256;</p>
                    <p>d=yourdomain.com;</p>
                    <p className="text-primary">s=default;</p>
                    <p>bh=invalid-body-hash;</p>
                    <p className="text-destructive">b=invalid-signature</p>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    <strong>Check:</strong>
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-1 text-sm">
                    <li>
                      <strong>d= domain:</strong> Should match your domain
                    </li>
                    <li>
                      <strong>s= selector:</strong> Does this selector exist in
                      your DNS?
                    </li>
                    <li>
                      Invalid signature suggests attacker tried to forge DKIM
                    </li>
                  </ul>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-3 text-xl font-semibold">
                    4. From/To/Subject
                  </h3>
                  <div className="bg-muted/50 mb-3 rounded-md p-3 font-mono text-xs">
                    <p>From: support@yourdomain.com</p>
                    <p>To: victim@customer.com</p>
                    <p className="text-destructive">
                      Subject: Urgent: Verify Your Account
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    <strong>Red flags:</strong> Generic support email, urgency
                    language (&quot;Urgent&quot;, &quot;Verify&quot;), targeting
                    customers. Classic phishing pattern.
                  </p>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-3 text-xl font-semibold">
                    5. Received Headers
                  </h3>
                  <div className="bg-muted/50 mb-3 rounded-md p-3 font-mono text-xs">
                    <p>Received: from unknown (185.220.101.45)</p>
                    <p>by mx.yahoo.com with SMTP;</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    <strong>Shows email path:</strong> &quot;from unknown&quot;
                    confirms attacker didn&apos;t properly configure reverse
                    DNS. Legitimate senders have proper hostnames.
                  </p>
                </div>
              </div>
            </Card>

            {/* Investigation Workflow */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Step-by-Step Investigation
                </h2>
              </div>
              <div className="space-y-4">
                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">
                      Identify the Source IP
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Run WHOIS and reverse DNS lookup:
                  </p>
                  <div className="bg-background rounded-md p-3 font-mono text-xs">
                    <p>whois 185.220.101.45</p>
                    <p>dig -x 185.220.101.45</p>
                  </div>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Check if it&apos;s a known ESP, cloud provider, or
                    suspicious network.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">
                      Determine: Legitimate or Spoofing?
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-success/10 rounded-md p-3">
                      <p className="mb-2 text-sm font-semibold">
                        ✅ Likely Legitimate If:
                      </p>
                      <ul className="text-muted-foreground ml-4 list-disc text-xs">
                        <li>
                          IP belongs to known ESP (SendGrid, Mailchimp, etc.)
                        </li>
                        <li>Reverse DNS has proper hostname</li>
                        <li>You recognize the From address</li>
                        <li>Email content looks like your templates</li>
                      </ul>
                    </div>
                    <div className="bg-destructive/10 rounded-md p-3">
                      <p className="mb-2 text-sm font-semibold">
                        ❌ Likely Spoofing If:
                      </p>
                      <ul className="text-muted-foreground ml-4 list-disc text-xs">
                        <li>Unknown IP from suspicious country/network</li>
                        <li>No reverse DNS or generic hostname</li>
                        <li>
                          Phishing content (verify account, urgent action)
                        </li>
                        <li>Targeting your customers/partners</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">
                      If Legitimate: Fix Authentication
                    </h3>
                  </div>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2 text-sm">
                    <li>Add source IP to SPF record</li>
                    <li>Configure DKIM signing for this service</li>
                    <li>Test email from this source</li>
                    <li>Wait 24-48 hours for DNS propagation</li>
                    <li>Verify no more failures in forensic reports</li>
                  </ul>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      4
                    </div>
                    <h3 className="text-lg font-semibold">
                      If Spoofing: Document & Monitor
                    </h3>
                  </div>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2 text-sm">
                    <li>Log source IP and timestamp</li>
                    <li>Report to abuse contact if high volume</li>
                    <li>
                      Check if DMARC policy blocked it (disposition=reject)
                    </li>
                    <li>Alert security team if targeting customers</li>
                    <li>Monitor for repeat attempts from same network</li>
                  </ul>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      5
                    </div>
                    <h3 className="text-lg font-semibold">
                      Track Patterns Over Time
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Keep spreadsheet of forensic reports: date, source IP, type
                    (legitimate/spoofing), action taken. Look for patterns:
                    repeated IPs, attack campaigns, configuration issues.
                  </p>
                </Card>
              </div>
            </Card>

            {/* Common Scenarios */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">Common Scenarios</h2>
              <div className="space-y-6">
                <div className="border-success/20 bg-success/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Scenario 1: New ESP Not Configured
                  </h3>
                  <div className="bg-background mb-3 rounded-md p-4 font-mono text-xs">
                    <p>Source-IP: 167.89.123.45 (SendGrid)</p>
                    <p className="text-destructive">dkim=fail, spf=fail</p>
                    <p>From: marketing@yourdomain.com</p>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    <strong>Diagnosis:</strong> Marketing team added SendGrid
                    but didn&apos;t configure authentication.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Fix:</strong> Add include:sendgrid.net to SPF, set
                    up DKIM in SendGrid dashboard.
                  </p>
                </div>

                <div className="border-warning/20 bg-warning/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Scenario 2: Email Forwarding Issues
                  </h3>
                  <div className="bg-background mb-3 rounded-md p-4 font-mono text-xs">
                    <p>Source-IP: 172.253.x.x (Gmail forwarding)</p>
                    <p className="text-destructive">spf=fail</p>
                    <p className="text-success">dkim=pass</p>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    <strong>Diagnosis:</strong> User forwarded your email to
                    Gmail. SPF fails but DKIM passes.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Action:</strong> No fix needed. DMARC still passes
                    with DKIM alignment. This is normal.
                  </p>
                </div>

                <div className="border-destructive/20 bg-destructive/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Scenario 3: Active Phishing Campaign
                  </h3>
                  <div className="bg-background mb-3 rounded-md p-4 font-mono text-xs">
                    <p>Source-IP: 185.220.x.x (Tor exit node)</p>
                    <p className="text-destructive">dkim=fail, spf=fail</p>
                    <p>From: support@yourdomain.com</p>
                    <p className="text-destructive">
                      Subject: Urgent: Verify Account
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    <strong>Diagnosis:</strong> Spoofing attack from Tor
                    network.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Action:</strong> Document attack, report to abuse
                    contact, confirm DMARC p=reject blocked it. Alert customers
                    if needed.
                  </p>
                </div>
              </div>
            </Card>

            {/* Why Few RUF Reports */}
            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <div>
                <div className="mb-2 font-semibold">
                  Why You Might Not Receive Many RUF Reports
                </div>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>Gmail stopped sending RUF in 2023</strong> due to
                    privacy concerns (GDPR compliance)
                  </li>
                  <li>
                    • <strong>Many ISPs limit RUF volume</strong> to avoid
                    overwhelming recipients (send samples, not all failures)
                  </li>
                  <li>
                    • <strong>Privacy regulations</strong> restrict sharing PII
                    in forensic reports
                  </li>
                  <li>
                    • <strong>RUF is optional</strong> - ISPs can choose not to
                    send them
                  </li>
                  <li>
                    • <strong>Aggregate reports (RUA)</strong> are now the
                    primary monitoring tool
                  </li>
                </ul>
              </div>
            </Alert>

            {/* Related Guides */}
            <Card className="bg-secondary/30 p-8">
              <h2 className="mb-6 text-2xl font-bold">Related Guides</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/guides/understanding-dmarc-reports"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    Understanding DMARC Reports
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    RUA vs RUF basics
                  </p>
                </Link>
                <Link
                  href="/guides/reading-aggregate-reports"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    Reading Aggregate Reports
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Daily monitoring with RUA
                  </p>
                </Link>
                <Link
                  href="/guides/dkim-troubleshooting"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    DKIM Troubleshooting
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Fix DKIM failures
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
              Real-Time Spoofing Alerts
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              TrustYourInbox analyzes forensic reports and sends instant alerts
              when spoofing attempts are detected. Stop attacks before they
              spread.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">See Threat Detection</Link>
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
              Free Forensic Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/tools/email-header-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Search className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  Header Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Analyze email headers
                </p>
              </Link>
              <Link
                href="/tools/dmarc-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Shield className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  DMARC Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check your RUF address
                </p>
              </Link>
              <Link
                href="/tools/spf-surveyor"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <FileText className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  SPF Surveyor
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check authorized IPs
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
