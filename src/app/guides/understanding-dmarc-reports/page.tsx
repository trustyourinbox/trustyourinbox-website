import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Globe,
  FileText,
  Mail,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title: "Understanding DMARC Reports: RUA and RUF Explained | Guide 2025",
  description:
    "Learn how to read and interpret DMARC reports. Understand aggregate (RUA) and forensic (RUF) reports to monitor email authentication and detect spoofing attempts.",
  keywords: [
    "DMARC reports",
    "RUA reports",
    "RUF reports",
    "aggregate reports",
    "forensic reports",
    "DMARC reporting",
    "interpret DMARC reports",
    "DMARC XML",
    "email authentication reports",
  ],
  openGraph: {
    title: "Understanding DMARC Reports: RUA and RUF Explained | Guide",
    description:
      "Master DMARC reporting with comprehensive guide to aggregate (RUA) and forensic (RUF) reports for monitoring email authentication.",
    type: "article",
    url: "https://trustyourinbox.com/guides/understanding-dmarc-reports",
  },
};

export default function UnderstandingDMARCReportsPage() {
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
              Understanding DMARC Reports
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
              Understanding DMARC Reports
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              DMARC reports are your eyes into how the world sees your email
              authentication. Learn how to read aggregate (RUA) and forensic
              (RUF) reports to monitor legitimate email and detect spoofing
              attacks.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">8 min read</span>
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
            {/* What Are DMARC Reports */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <FileText className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">What Are DMARC Reports?</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                When you publish a DMARC record with reporting addresses,
                receiving mail servers send you daily reports about emails
                claiming to be from your domain. These reports contain critical
                data for monitoring authentication health and detecting attacks.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Who Sends Reports?</p>
                    <p className="text-muted-foreground text-sm">
                      Gmail, Outlook, Yahoo, and other major email providers
                      send DMARC reports. They track ALL email claiming to be
                      from your domain, whether it passes or fails
                      authentication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">How Often Are Reports Sent?</p>
                    <p className="text-muted-foreground text-sm">
                      Aggregate reports (RUA) are sent daily, usually within
                      24-48 hours of email activity. Forensic reports (RUF) are
                      sent immediately when failures occur.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      What Data Do Reports Contain?
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Source IP addresses, authentication results (SPF/DKIM),
                      volume of emails, DMARC policy applied, and disposition
                      (delivered/quarantined/rejected).
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* RUA vs RUF */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Two Types of DMARC Reports
              </h2>
              <div className="space-y-6">
                <div className="border-primary/20 bg-primary/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Aggregate Reports (RUA)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Aggregate reports provide statistical summaries of email
                    authentication over 24-hour periods.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        <strong>Format:</strong> XML files sent as email
                        attachments (compressed with gzip)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        <strong>Frequency:</strong> Daily (usually 24-48 hours
                        after email activity)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        <strong>Contains:</strong> Source IPs, message counts,
                        SPF/DKIM results, DMARC disposition
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        <strong>Use case:</strong> Daily monitoring, trend
                        analysis, compliance tracking
                      </p>
                    </div>
                  </div>
                  <div className="bg-background mt-4 rounded-md p-4 font-mono text-xs">
                    <p className="text-muted-foreground mb-2">
                      # Configure RUA in DMARC record:
                    </p>
                    <p>v=DMARC1; p=quarantine;</p>
                    <p className="text-primary font-semibold">
                      rua=mailto:dmarc-reports@yourdomain.com;
                    </p>
                    <p>pct=100</p>
                  </div>
                </div>

                <div className="border-warning/20 bg-warning/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Forensic Reports (RUF)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Forensic reports provide real-time, detailed information
                    about individual authentication failures.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="text-warning mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        <strong>Format:</strong> Individual email samples with
                        full headers
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="text-warning mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        <strong>Frequency:</strong> Real-time (sent immediately
                        when failures occur)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="text-warning mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        <strong>Contains:</strong> Complete email headers,
                        authentication results, failure reasons
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="text-warning mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        <strong>Use case:</strong> Investigating specific
                        failures, debugging authentication issues
                      </p>
                    </div>
                  </div>
                  <div className="bg-background mt-4 rounded-md p-4 font-mono text-xs">
                    <p className="text-muted-foreground mb-2">
                      # Configure RUF in DMARC record:
                    </p>
                    <p>v=DMARC1; p=quarantine;</p>
                    <p>rua=mailto:dmarc-reports@yourdomain.com;</p>
                    <p className="text-warning font-semibold">
                      ruf=mailto:dmarc-forensic@yourdomain.com;
                    </p>
                    <p>pct=100</p>
                  </div>
                  <Alert variant="warning" className="mt-4">
                    <AlertTriangle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Privacy Concern</div>
                      <div className="text-sm">
                        RUF reports contain PII (personally identifiable
                        information) from email headers. Many ISPs don&apos;t
                        send RUF due to privacy regulations. Gmail stopped
                        sending RUF in 2023.
                      </div>
                    </div>
                  </Alert>
                </div>
              </div>
            </Card>

            {/* Aggregate Report Structure */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Aggregate Report Structure
              </h2>
              <p className="text-muted-foreground mb-6">
                RUA reports are XML files with a standard structure defined by
                RFC 7489. Here&apos;s what each section contains:
              </p>
              <div className="space-y-4">
                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">1. Report Metadata</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Who sent the report and what time period it covers:
                  </p>
                  <div className="bg-muted/50 rounded-md p-3 font-mono text-xs">
                    <p>&lt;report_metadata&gt;</p>
                    <p className="ml-4">
                      &lt;org_name&gt;google.com&lt;/org_name&gt;
                    </p>
                    <p className="ml-4">
                      &lt;email&gt;noreply-dmarc-support@google.com&lt;/email&gt;
                    </p>
                    <p className="ml-4">&lt;date_range&gt;</p>
                    <p className="ml-8">
                      &lt;begin&gt;1704067200&lt;/begin&gt; (Jan 1, 2025 00:00
                      UTC)
                    </p>
                    <p className="ml-8">
                      &lt;end&gt;1704153599&lt;/end&gt; (Jan 1, 2025 23:59 UTC)
                    </p>
                    <p className="ml-4">&lt;/date_range&gt;</p>
                    <p>&lt;/report_metadata&gt;</p>
                  </div>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">2. Policy Published</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Your DMARC policy as seen by the receiving server:
                  </p>
                  <div className="bg-muted/50 rounded-md p-3 font-mono text-xs">
                    <p>&lt;policy_published&gt;</p>
                    <p className="ml-4">
                      &lt;domain&gt;yourdomain.com&lt;/domain&gt;
                    </p>
                    <p className="ml-4">&lt;p&gt;quarantine&lt;/p&gt;</p>
                    <p className="ml-4">&lt;sp&gt;none&lt;/sp&gt;</p>
                    <p className="ml-4">&lt;pct&gt;100&lt;/pct&gt;</p>
                    <p>&lt;/policy_published&gt;</p>
                  </div>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">
                    3. Record (Authentication Results)
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Data for each unique sending source:
                  </p>
                  <div className="bg-muted/50 rounded-md p-3 font-mono text-xs">
                    <p>&lt;record&gt;</p>
                    <p className="ml-4">&lt;row&gt;</p>
                    <p className="ml-8">
                      &lt;source_ip&gt;209.85.220.41&lt;/source_ip&gt; (Google
                      Workspace)
                    </p>
                    <p className="ml-8">&lt;count&gt;1523&lt;/count&gt;</p>
                    <p className="ml-8">&lt;policy_evaluated&gt;</p>
                    <p className="ml-12">
                      &lt;disposition&gt;none&lt;/disposition&gt; (delivered)
                    </p>
                    <p className="ml-12">&lt;dkim&gt;pass&lt;/dkim&gt;</p>
                    <p className="ml-12">&lt;spf&gt;pass&lt;/spf&gt;</p>
                    <p className="ml-8">&lt;/policy_evaluated&gt;</p>
                    <p className="ml-4">&lt;/row&gt;</p>
                    <p>&lt;/record&gt;</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Key Metrics */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <BarChart3 className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Key Metrics to Track</h2>
              </div>
              <div className="space-y-4">
                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">DMARC Compliance Rate</h3>
                  <p className="text-muted-foreground mb-2 text-sm">
                    % of emails passing DMARC (SPF or DKIM aligned)
                  </p>
                  <div className="bg-success/10 rounded-md p-3">
                    <p className="text-sm">
                      <strong>Target: 95%+ compliance</strong>
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Formula: (Passing messages / Total messages) × 100
                    </p>
                  </div>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">Top Sending Sources</h3>
                  <p className="text-muted-foreground mb-2 text-sm">
                    Which IP addresses send the most email on your behalf
                  </p>
                  <div className="bg-muted/50 rounded-md p-3">
                    <p className="text-sm">
                      <strong>Expected sources:</strong>
                    </p>
                    <ul className="text-muted-foreground ml-4 list-disc text-xs">
                      <li>Google Workspace: 209.85.x.x, 172.253.x.x</li>
                      <li>SendGrid: 167.89.x.x, 168.245.x.x</li>
                      <li>Mailchimp: 205.201.x.x, 198.2.x.x</li>
                    </ul>
                  </div>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">
                    Authentication Failures
                  </h3>
                  <p className="text-muted-foreground mb-2 text-sm">
                    Messages failing both SPF and DKIM (potential spoofing)
                  </p>
                  <div className="bg-destructive/10 rounded-md p-3">
                    <p className="text-sm">
                      <strong>Investigate if:</strong>
                    </p>
                    <ul className="text-muted-foreground ml-4 list-disc text-xs">
                      <li>Unknown IP addresses sending high volumes</li>
                      <li>Sudden spikes in failures from specific sources</li>
                      <li>
                        Failures from legitimate ESPs (configuration issue)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">Policy Disposition</h3>
                  <p className="text-muted-foreground mb-2 text-sm">
                    What happened to failing emails (none/quarantine/reject)
                  </p>
                  <div className="bg-muted/50 rounded-md p-3 font-mono text-xs">
                    <p>
                      &lt;disposition&gt;none&lt;/disposition&gt; = Delivered
                      (p=none)
                    </p>
                    <p>
                      &lt;disposition&gt;quarantine&lt;/disposition&gt; = Spam
                      folder
                    </p>
                    <p>
                      &lt;disposition&gt;reject&lt;/disposition&gt; = Blocked
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Report Volume */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Managing Report Volume
              </h2>
              <p className="text-muted-foreground mb-6">
                High-traffic domains can receive hundreds of DMARC reports per
                day. Here&apos;s how to handle them:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Use Dedicated Email Addresses
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Create separate mailboxes for RUA and RUF reports
                      (dmarc-reports@, dmarc-forensic@) to avoid cluttering main
                      inboxes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Automate Report Processing</p>
                    <p className="text-muted-foreground text-sm">
                      Use DMARC reporting tools (TrustYourInbox, Postmark,
                      dmarcian) to automatically parse XML and visualize data.
                      Manual analysis doesn&apos;t scale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Set Up Email Filters</p>
                    <p className="text-muted-foreground text-sm">
                      Filter reports by sender (google.com, outlook.com) or
                      subject line to prioritize high-value reports.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Archive Old Reports</p>
                    <p className="text-muted-foreground text-sm">
                      Keep last 90 days of reports for analysis, archive older
                      reports to reduce storage costs.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* What to Look For */}
            <Alert variant="info">
              <FileText className="h-4 w-4" />
              <div>
                <div className="mb-2 font-semibold">
                  What to Look for in DMARC Reports
                </div>
                <ul className="space-y-1 text-sm">
                  <li>
                    ✅ <strong>Legitimate senders passing:</strong> Google
                    Workspace, SendGrid, Mailchimp all showing SPF/DKIM pass
                  </li>
                  <li>
                    ⚠️ <strong>Known senders failing:</strong> Legitimate ESPs
                    failing authentication = configuration issue
                  </li>
                  <li>
                    🚨 <strong>Unknown IPs with high volume:</strong> Potential
                    spoofing attempts or unauthorized senders
                  </li>
                  <li>
                    📊 <strong>Compliance trends:</strong> Is your pass rate
                    improving or declining over time?
                  </li>
                  <li>
                    🔄 <strong>New sending sources:</strong> Teams adding ESPs
                    without notifying IT
                  </li>
                </ul>
              </div>
            </Alert>

            {/* Related Guides */}
            <Card className="bg-secondary/30 p-8">
              <h2 className="mb-6 text-2xl font-bold">Related Guides</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/guides/what-is-dmarc"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    What is DMARC?
                  </h3>
                  <p className="text-muted-foreground text-sm">DMARC basics</p>
                </Link>
                <Link
                  href="/guides/dmarc-policy-levels-explained"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    DMARC Policy Levels
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    None, Quarantine, Reject
                  </p>
                </Link>
                <Link
                  href="/guides/moving-to-p-reject-safely"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    Moving to p=reject
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Use reports to guide rollout
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
              Automatic DMARC Report Analysis
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              TrustYourInbox automatically parses, analyzes, and visualizes your
              DMARC reports. No manual XML parsing needed.
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
              Free DMARC Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/tools/dmarc-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Globe className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  DMARC Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check your DMARC record
                </p>
              </Link>
              <Link
                href="/tools/dmarc-xml-converter"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <FileText className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  XML Converter
                </h3>
                <p className="text-muted-foreground text-sm">
                  Parse RUA reports manually
                </p>
              </Link>
              <Link
                href="/tools/dmarc-policy-generator"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <BarChart3 className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  Policy Generator
                </h3>
                <p className="text-muted-foreground text-sm">
                  Create DMARC records with RUA/RUF
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
