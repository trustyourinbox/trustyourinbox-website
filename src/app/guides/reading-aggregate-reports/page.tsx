"use client";

import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Globe,
  FileText,
  BarChart3,
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title: "Reading Aggregate Reports: Interpret DMARC XML Data | Guide 2025",
  description:
    "Master DMARC aggregate report analysis. Learn how to interpret XML data, identify passing vs failing sources, and take action on authentication results.",
  keywords: [
    "DMARC aggregate reports",
    "RUA reports",
    "DMARC XML",
    "interpret DMARC reports",
    "read DMARC data",
    "aggregate report analysis",
    "DMARC report tutorial",
    "XML report parsing",
  ],
  openGraph: {
    title: "Reading Aggregate Reports: Interpret DMARC XML Data | Guide",
    description:
      "Step-by-step guide to reading and interpreting DMARC aggregate reports. Understand XML structure and take action on results.",
    type: "article",
    url: "https://trustyourinbox.com/guides/reading-aggregate-reports",
  },
};

export default function ReadingAggregateReportsPage() {
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
              Reading Aggregate Reports
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
              Reading Aggregate Reports
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              DMARC aggregate reports arrive as XML files that look intimidating
              at first. This guide teaches you how to interpret the data,
              identify issues, and take action to improve authentication.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">10 min read</span>
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
            {/* Real Report Example */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <FileText className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Anatomy of an Aggregate Report
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Let&apos;s walk through a real aggregate report from Google. You
                receive these as gzipped XML email attachments.
              </p>
              <Alert variant="info" className="mb-6">
                <FileText className="h-4 w-4" />
                <div>
                  <div className="font-semibold">Email Subject Line</div>
                  <div className="text-sm">
                    Report domain: yourdomain.com Submitter: google.com
                    Report-ID: 12345678901234567890
                  </div>
                </div>
              </Alert>
              <div className="bg-muted/50 overflow-x-auto rounded-md p-4 font-mono text-xs">
                <pre className="whitespace-pre-wrap">
                  {`<?xml version="1.0" encoding="UTF-8"?>
<feedback>
  <report_metadata>
    <org_name>google.com</org_name>
    <email>noreply-dmarc-support@google.com</email>
    <report_id>12345678901234567890</report_id>
    <date_range>
      <begin>1704067200</begin>
      <end>1704153599</end>
    </date_range>
  </report_metadata>

  <policy_published>
    <domain>yourdomain.com</domain>
    <adkim>r</adkim>
    <aspf>r</aspf>
    <p>quarantine</p>
    <sp>none</sp>
    <pct>100</pct>
  </policy_published>

  <record>
    <row>
      <source_ip>209.85.220.41</source_ip>
      <count>1523</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>pass</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>yourdomain.com</header_from>
    </identifiers>
    <auth_results>
      <dkim>
        <domain>yourdomain.com</domain>
        <result>pass</result>
      </dkim>
      <spf>
        <domain>yourdomain.com</domain>
        <result>pass</result>
      </spf>
    </auth_results>
  </record>
</feedback>`}
                </pre>
              </div>
            </Card>

            {/* Section by Section */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Understanding Each Section
              </h2>
              <div className="space-y-6">
                <div className="border-primary/20 bg-primary/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    1. Report Metadata (Who & When)
                  </h3>
                  <div className="bg-background rounded-md p-4 font-mono text-xs">
                    <p>&lt;org_name&gt;google.com&lt;/org_name&gt;</p>
                    <p>&lt;begin&gt;1704067200&lt;/begin&gt;</p>
                    <p>&lt;end&gt;1704153599&lt;/end&gt;</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-muted-foreground text-sm">
                      <strong>org_name:</strong> Who sent this report (Gmail,
                      Outlook, Yahoo, etc.)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>begin/end:</strong> Unix timestamps for 24-hour
                      reporting period (Jan 1, 2025 00:00 - 23:59 UTC)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>report_id:</strong> Unique identifier for this
                      report
                    </p>
                  </div>
                </div>

                <div className="border-primary/20 bg-primary/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    2. Policy Published (Your DMARC Record)
                  </h3>
                  <div className="bg-background rounded-md p-4 font-mono text-xs">
                    <p>&lt;p&gt;quarantine&lt;/p&gt;</p>
                    <p>&lt;sp&gt;none&lt;/sp&gt;</p>
                    <p>&lt;adkim&gt;r&lt;/adkim&gt;</p>
                    <p>&lt;aspf&gt;r&lt;/aspf&gt;</p>
                    <p>&lt;pct&gt;100&lt;/pct&gt;</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-muted-foreground text-sm">
                      <strong>p:</strong> Main domain policy
                      (none/quarantine/reject)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>sp:</strong> Subdomain policy
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>adkim/aspf:</strong> Alignment mode (r=relaxed,
                      s=strict)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>pct:</strong> Percentage of messages policy
                      applies to
                    </p>
                  </div>
                </div>

                <div className="border-success/20 bg-success/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    3. Record (The Data You Care About)
                  </h3>
                  <div className="bg-background rounded-md p-4 font-mono text-xs">
                    <p className="text-primary font-semibold">
                      &lt;source_ip&gt;209.85.220.41&lt;/source_ip&gt;
                    </p>
                    <p className="text-success font-semibold">
                      &lt;count&gt;1523&lt;/count&gt;
                    </p>
                    <p>&lt;disposition&gt;none&lt;/disposition&gt;</p>
                    <p className="text-success font-semibold">
                      &lt;dkim&gt;pass&lt;/dkim&gt;
                    </p>
                    <p className="text-success font-semibold">
                      &lt;spf&gt;pass&lt;/spf&gt;
                    </p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-muted-foreground text-sm">
                      <strong>source_ip:</strong> IP address that sent email
                      (209.85.220.41 = Google Workspace)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>count:</strong> Number of emails from this IP
                      (1,523 messages)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>disposition:</strong> What Gmail did with these
                      emails (none=delivered, quarantine=spam, reject=blocked)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>dkim/spf:</strong> Authentication results
                      (pass/fail)
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Interpreting Results */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <BarChart3 className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Interpreting Authentication Results
                </h2>
              </div>
              <div className="space-y-6">
                <div className="border-success/20 bg-success/5 rounded-lg p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle className="text-success h-6 w-6" />
                    <h3 className="text-xl font-semibold">
                      ✅ PASS: Both SPF and DKIM Pass
                    </h3>
                  </div>
                  <div className="bg-background mb-4 rounded-md p-4 font-mono text-xs">
                    <p>&lt;dkim&gt;pass&lt;/dkim&gt;</p>
                    <p>&lt;spf&gt;pass&lt;/spf&gt;</p>
                    <p>&lt;disposition&gt;none&lt;/disposition&gt;</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    <strong>Meaning:</strong> Perfect! Email is fully
                    authenticated. This is your legitimate email passing
                    through.
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    <strong>Action:</strong> No action needed. Document this IP
                    as legitimate sender.
                  </p>
                </div>

                <div className="border-success/20 bg-success/5 rounded-lg p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle className="text-success h-6 w-6" />
                    <h3 className="text-xl font-semibold">
                      ✅ PASS: SPF Fails, DKIM Passes
                    </h3>
                  </div>
                  <div className="bg-background mb-4 rounded-md p-4 font-mono text-xs">
                    <p className="text-success font-semibold">
                      &lt;dkim&gt;pass&lt;/dkim&gt;
                    </p>
                    <p className="text-destructive font-semibold">
                      &lt;spf&gt;fail&lt;/spf&gt;
                    </p>
                    <p>&lt;disposition&gt;none&lt;/disposition&gt;</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    <strong>Meaning:</strong> DMARC still passes! Only ONE of
                    SPF/DKIM needs to pass for DMARC compliance.
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    <strong>Common cause:</strong> Email forwarding (breaks SPF
                    but DKIM survives).
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    <strong>Action:</strong> No action needed if DKIM passes.
                    This is normal for forwarded email.
                  </p>
                </div>

                <div className="border-warning/20 bg-warning/5 rounded-lg p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <AlertTriangle className="text-warning h-6 w-6" />
                    <h3 className="text-xl font-semibold">
                      ⚠️ PARTIAL: Only One Passes (SPF or DKIM)
                    </h3>
                  </div>
                  <div className="bg-background mb-4 rounded-md p-4 font-mono text-xs">
                    <p className="text-success font-semibold">
                      &lt;spf&gt;pass&lt;/spf&gt;
                    </p>
                    <p className="text-destructive font-semibold">
                      &lt;dkim&gt;fail&lt;/dkim&gt;
                    </p>
                    <p>&lt;disposition&gt;none&lt;/disposition&gt;</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    <strong>Meaning:</strong> DMARC passes (only one required)
                    but you&apos;re missing redundancy.
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    <strong>Risk:</strong> If SPF breaks (forwarding), email
                    will fail DMARC.
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    <strong>Action:</strong> Configure DKIM for this sender for
                    redundancy.
                  </p>
                </div>

                <div className="border-destructive/20 bg-destructive/5 rounded-lg p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <XCircle className="text-destructive h-6 w-6" />
                    <h3 className="text-xl font-semibold">
                      ❌ FAIL: Both SPF and DKIM Fail
                    </h3>
                  </div>
                  <div className="bg-background mb-4 rounded-md p-4 font-mono text-xs">
                    <p className="text-destructive font-semibold">
                      &lt;dkim&gt;fail&lt;/dkim&gt;
                    </p>
                    <p className="text-destructive font-semibold">
                      &lt;spf&gt;fail&lt;/spf&gt;
                    </p>
                    <p className="text-destructive font-semibold">
                      &lt;disposition&gt;reject&lt;/disposition&gt;
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    <strong>Meaning:</strong> DMARC FAILS. This is either a
                    spoofing attempt OR misconfigured legitimate sender.
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    <strong>Action required:</strong>
                  </p>
                  <ul className="text-muted-foreground mt-2 ml-6 list-disc space-y-1 text-sm">
                    <li>Look up source IP (whois, reverse DNS)</li>
                    <li>If legitimate: Add to SPF record and configure DKIM</li>
                    <li>
                      If unknown/suspicious: This is spoofing - your DMARC
                      policy is blocking it
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Step-by-Step Analysis */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Step-by-Step Report Analysis
              </h2>
              <div className="space-y-4">
                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">Open the XML File</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Download attachment from report email. Decompress .gz file
                    (gunzip on Mac/Linux, 7-Zip on Windows). Open XML in text
                    editor or use online DMARC XML parser.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">Check Date Range</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Convert Unix timestamps to dates. Reports cover 24 hours.
                    Example: 1704067200 = Jan 1, 2025 00:00 UTC.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">
                      Find All &lt;record&gt; Sections
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Each &lt;record&gt; represents one unique sending source. A
                    report might have 5-50 records depending on your email
                    volume and number of ESPs.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      4
                    </div>
                    <h3 className="text-lg font-semibold">
                      Identify Source IPs
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    For each record, look up the source IP:
                  </p>
                  <div className="bg-background rounded-md p-3 font-mono text-xs">
                    <p>209.85.x.x = Google Workspace</p>
                    <p>167.89.x.x = SendGrid</p>
                    <p>205.201.x.x = Mailchimp</p>
                    <p>Unknown IP? Use whois lookup</p>
                  </div>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      5
                    </div>
                    <h3 className="text-lg font-semibold">
                      Check Pass/Fail Status
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    For EACH record, check if SPF and/or DKIM passed. DMARC
                    passes if at least ONE of them passes with alignment.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      6
                    </div>
                    <h3 className="text-lg font-semibold">
                      Create Action Items
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Passing sources: Document as legitimate. Failing legitimate
                    sources: Fix SPF/DKIM. Unknown failing sources: Monitor for
                    spoofing.
                  </p>
                </Card>
              </div>
            </Card>

            {/* Common Patterns */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Common Patterns You&apos;ll See
              </h2>
              <div className="space-y-4">
                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">
                    High Volume, All Passing
                  </h3>
                  <div className="bg-muted/50 mb-3 rounded-md p-3 font-mono text-xs">
                    <p>source_ip: 209.85.220.41</p>
                    <p className="text-success">count: 15,234 (high volume)</p>
                    <p className="text-success">dkim: pass, spf: pass</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    <strong>Interpretation:</strong> Your primary email server
                    (Google Workspace). Everything is working perfectly.
                  </p>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">
                    Low Volume, All Failing
                  </h3>
                  <div className="bg-muted/50 mb-3 rounded-md p-3 font-mono text-xs">
                    <p>source_ip: 185.220.101.x (unknown)</p>
                    <p className="text-warning">count: 12 (low volume)</p>
                    <p className="text-destructive">dkim: fail, spf: fail</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    <strong>Interpretation:</strong> Likely spoofing attempt.
                    Low volume suggests manual attack or testing. Your DMARC
                    policy blocked it.
                  </p>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">
                    Known ESP, Partial Pass
                  </h3>
                  <div className="bg-muted/50 mb-3 rounded-md p-3 font-mono text-xs">
                    <p>source_ip: 167.89.x.x (SendGrid)</p>
                    <p>count: 2,450</p>
                    <p className="text-success">spf: pass</p>
                    <p className="text-destructive">dkim: fail</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    <strong>Interpretation:</strong> SendGrid authenticated with
                    SPF but DKIM not configured. Action: Set up DKIM signing in
                    SendGrid dashboard.
                  </p>
                </div>
              </div>
            </Card>

            {/* Tools */}
            <Alert variant="info">
              <TrendingUp className="h-4 w-4" />
              <div>
                <div className="mb-2 font-semibold">
                  Tools for Easier Analysis
                </div>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>TrustYourInbox:</strong> Automatic parsing,
                    visualization, and alerts
                  </li>
                  <li>
                    • <strong>DMARC XML Converter (free):</strong> Paste XML,
                    get human-readable summary
                  </li>
                  <li>
                    • <strong>Postmark DMARC Digests:</strong> Weekly email
                    summaries
                  </li>
                  <li>
                    • <strong>dmarcian:</strong> Enterprise reporting platform
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
                    RUA and RUF basics
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
                    Fix SPF failures
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
            <h2 className="mb-4 text-3xl font-bold">Skip Manual XML Parsing</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              TrustYourInbox automatically analyzes your aggregate reports and
              highlights issues that need attention. No XML expertise required.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">See Report Dashboard</Link>
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
              Free Report Analysis Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/tools/dmarc-xml-converter"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <FileText className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  XML Converter
                </h3>
                <p className="text-muted-foreground text-sm">
                  Parse aggregate reports
                </p>
              </Link>
              <Link
                href="/tools/dmarc-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Globe className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  DMARC Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check your policy
                </p>
              </Link>
              <Link
                href="/tools/email-header-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <BarChart3 className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  Header Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Debug individual emails
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
