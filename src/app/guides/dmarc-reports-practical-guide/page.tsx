import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Clock,
  BookOpen,
  Search,
  TrendingUp,
  FileText,
  Shield,
  Settings,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title:
    "DMARC Reports: A Practical Guide 2025 - Analyze RUA & RUF Reports | TrustYourInbox",
  description:
    "Comprehensive practical guide to understanding, reading, and acting on DMARC aggregate (RUA) and forensic (RUF) reports. Learn to identify issues and improve email authentication.",
  keywords: [
    "DMARC reports guide",
    "RUA report analysis",
    "RUF report forensic",
    "DMARC aggregate reports",
    "email authentication reports",
    "DMARC report interpretation",
  ],
  openGraph: {
    title: "DMARC Reports: A Practical Guide 2025 - Analyze RUA & RUF Reports",
    description:
      "Master DMARC report analysis. Learn to read aggregate and forensic reports to improve email authentication.",
    type: "article",
    url: "https://trustyourinbox.com/guides/dmarc-reports-practical-guide",
  },
};

export default function DMARCReportsPracticalGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/guides"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Guides
            </Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <span className="text-gray-900 dark:text-gray-100">
              DMARC Reports: A Practical Guide
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="bg-success/10 text-success dark:bg-success/20 mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium">
            <Mail className="mr-2 h-4 w-4" />
            Pillar Guide
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            DMARC Reports: A Practical Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Learn to read, interpret, and act on DMARC aggregate (RUA) and
            forensic (RUF) reports. This comprehensive guide covers report
            structure, common patterns, troubleshooting workflows, and
            automation strategies.
          </p>
        </div>

        {/* Reading Time & Difficulty */}
        <div className="mb-12 flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>18 min read</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Intermediate</span>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Table of Contents
          </h2>
          <nav className="space-y-2">
            <a href="#overview" className="text-primary block hover:underline">
              1. Overview: Why DMARC Reports Matter
            </a>
            <a
              href="#rua-reports"
              className="text-primary block hover:underline"
            >
              2. Aggregate Reports (RUA) Deep Dive
            </a>
            <a
              href="#ruf-reports"
              className="text-primary block hover:underline"
            >
              3. Forensic Reports (RUF) Analysis
            </a>
            <a
              href="#common-patterns"
              className="text-primary block hover:underline"
            >
              4. Common Report Patterns & What They Mean
            </a>
            <a
              href="#troubleshooting"
              className="text-primary block hover:underline"
            >
              5. Troubleshooting Workflow
            </a>
            <a
              href="#automation"
              className="text-primary block hover:underline"
            >
              6. Automation & Tools
            </a>
            <a
              href="#best-practices"
              className="text-primary block hover:underline"
            >
              7. Best Practices & Next Steps
            </a>
          </nav>
        </Card>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Section 1: Overview */}
          <Card className="mb-8" id="overview">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <TrendingUp className="text-primary mr-3 h-6 w-6" />
              Overview: Why DMARC Reports Matter
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              DMARC reports are your eyes into email authentication. They tell
              you:
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>Who is sending email</strong> using your domain
                  (legitimate and fraudulent)
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>Which emails are failing</strong> SPF, DKIM, or DMARC
                  authentication
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>How receivers are handling</strong> your email based
                  on DMARC policy
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>What needs fixing</strong> in your email
                  authentication setup
                </span>
              </div>
            </div>

            <Alert variant="info" className="mt-6">
              <strong>Report Types:</strong> DMARC uses two report types - RUA
              (aggregate, daily summaries) and RUF (forensic, real-time
              failures). Most analysis focuses on RUA reports.
            </Alert>
          </Card>

          {/* Section 2: RUA Reports */}
          <Card className="mb-8" id="rua-reports">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <FileText className="text-primary mr-3 h-6 w-6" />
              Aggregate Reports (RUA) Deep Dive
            </h2>

            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Aggregate reports are XML files sent daily by major email
              receivers (Google, Yahoo, Microsoft). They contain summary data
              about all email claiming to be from your domain.
            </p>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Report Structure
              </h3>
              <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                {`<?xml version="1.0"?>
<feedback>
  <report_metadata>
    <org_name>google.com</org_name>
    <email>noreply-dmarc-support@google.com</email>
    <report_id>12345678901234567890</report_id>
    <date_range>
      <begin>1735689600</begin>
      <end>1735775999</end>
    </date_range>
  </report_metadata>

  <policy_published>
    <domain>yourdomain.com</domain>
    <adkim>r</adkim>  <!-- DKIM alignment: relaxed -->
    <aspf>r</aspf>    <!-- SPF alignment: relaxed -->
    <p>none</p>       <!-- Policy: none/quarantine/reject -->
    <sp>none</sp>     <!-- Subdomain policy -->
    <pct>100</pct>    <!-- Percentage of emails policy applies to -->
  </policy_published>

  <record>
    <row>
      <source_ip>209.85.220.41</source_ip>
      <count>142</count>  <!-- Number of messages -->
      <policy_evaluated>
        <disposition>none</disposition>  <!-- What receiver did -->
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
        <selector>default</selector>
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

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Key Fields to Understand
              </h3>
              <div className="space-y-3">
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    source_ip
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    IP address that sent the email. Use reverse DNS lookup to
                    identify the sender. Common patterns:{" "}
                    <code>209.85.x.x</code> (Google), <code>40.x.x.x</code>{" "}
                    (Microsoft), <code>167.89.x.x</code> (SendGrid).
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    count
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Number of messages from this IP with identical
                    authentication results. High counts (1000+) suggest bulk
                    email service. Low counts (1-10) may indicate individual
                    senders or spoofing attempts.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    disposition
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Action taken by receiver: <code>none</code> (monitoring
                    only), <code>quarantine</code> (spam folder),{" "}
                    <code>reject</code> (blocked). This reflects your DMARC
                    policy.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    dkim / spf results
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Authentication results: <code>pass</code>, <code>fail</code>
                    , <code>neutral</code>, <code>none</code>. DMARC passes if
                    either SPF or DKIM passes AND aligns with the From domain.
                  </p>
                </div>
              </div>
            </div>

            <Alert variant="success">
              <strong>Pro Tip:</strong> Use our{" "}
              <Link
                href="/tools/xml-converter"
                className="text-primary hover:underline"
              >
                XML to JSON Converter
              </Link>{" "}
              to convert XML reports to readable JSON format for easier
              analysis.
            </Alert>
          </Card>

          {/* Section 3: RUF Reports */}
          <Card className="mb-8" id="ruf-reports">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <AlertTriangle className="text-primary mr-3 h-6 w-6" />
              Forensic Reports (RUF) Analysis
            </h2>

            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Forensic reports provide real-time notification of authentication
              failures. They include sample email headers and full
              authentication details.
            </p>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Example Forensic Report
              </h3>
              <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                {`From: noreply@dmarc.yahoo.com
To: forensic@yourdomain.com
Subject: FW: DMARC Failure Report for yourdomain.com

Authentication-Results: yahoo.com;
  dkim=fail reason="signature verification failed" header.i=@yourdomain.com;
  spf=fail smtp.mailfrom=yourdomain.com;
  dmarc=fail (p=none dis=none) header.from=yourdomain.com

Source-IP: 185.220.101.45
Reported-Domain: yourdomain.com
Authentication-Failure-Type: dkim

Original-Mail-From: support@yourdomain.com
Original-Rcpt-To: victim@example.com

Arrival-Date: 2025-01-20 14:32:18 GMT

Original message headers:
From: support@yourdomain.com
To: victim@example.com
Subject: Urgent: Verify Your Account
Date: Mon, 20 Jan 2025 14:30:00 +0000
...`}
              </pre>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                When to Investigate RUF Reports
              </h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="text-warning mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Unknown IP addresses</strong> - May indicate
                    spoofing or unauthorized sending
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="text-warning mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Suspicious subject lines</strong> - Phishing
                    attempts often have urgent or threatening language
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="text-warning mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Legitimate services failing</strong> - May indicate
                    configuration issues
                  </span>
                </div>
              </div>
            </div>

            <Alert variant="warning">
              <strong>Privacy Note:</strong> Many receivers (Google, Microsoft)
              do not send forensic reports due to privacy concerns. Don&apos;t
              rely solely on RUF reports for monitoring.
            </Alert>
          </Card>

          {/* Section 4: Common Patterns */}
          <Card className="mb-8" id="common-patterns">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Search className="text-primary mr-3 h-6 w-6" />
              Common Report Patterns & What They Mean
            </h2>

            <div className="space-y-6">
              {/* Pattern 1 */}
              <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
                <h3 className="mb-2 font-semibold text-green-900 dark:text-green-100">
                  ✅ Perfect: Both SPF and DKIM Pass
                </h3>
                <pre className="mb-2 overflow-x-auto rounded bg-gray-900 p-2 text-xs text-gray-100">
                  {`<dkim>pass</dkim>
<spf>pass</spf>
<disposition>none</disposition>`}
                </pre>
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>What it means:</strong> Email is properly
                  authenticated. No action needed. This is the goal for all
                  legitimate email.
                </p>
              </div>

              {/* Pattern 2 */}
              <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950">
                <h3 className="mb-2 font-semibold text-yellow-900 dark:text-yellow-100">
                  ⚠️ Caution: SPF Fails, DKIM Passes (Email Forwarding)
                </h3>
                <pre className="mb-2 overflow-x-auto rounded bg-gray-900 p-2 text-xs text-gray-100">
                  {`<dkim>pass</dkim>
<spf>fail</spf>
<disposition>none</disposition>`}
                </pre>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>What it means:</strong> Email forwarding detected. SPF
                  fails because the forwarding server&apos;s IP isn&apos;t in
                  your SPF record, but DKIM still passes. DMARC passes overall
                  (only needs one). Common with personal email forwarding rules.
                </p>
              </div>

              {/* Pattern 3 */}
              <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950">
                <h3 className="mb-2 font-semibold text-orange-900 dark:text-orange-100">
                  ⚠️ Action Needed: Only One Passing (Lack of Redundancy)
                </h3>
                <pre className="mb-2 overflow-x-auto rounded bg-gray-900 p-2 text-xs text-gray-100">
                  {`<dkim>none</dkim>
<spf>pass</spf>
<disposition>none</disposition>`}
                </pre>
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  <strong>What it means:</strong> Email passes DMARC but lacks
                  redundancy. If SPF breaks (forwarding, IP change), DMARC will
                  fail. Configure DKIM for this sender as backup.
                </p>
              </div>

              {/* Pattern 4 */}
              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
                <h3 className="mb-2 font-semibold text-red-900 dark:text-red-100">
                  🚨 Critical: Both SPF and DKIM Fail
                </h3>
                <pre className="mb-2 overflow-x-auto rounded bg-gray-900 p-2 text-xs text-gray-100">
                  {`<dkim>fail</dkim>
<spf>fail</spf>
<disposition>quarantine</disposition>
<source_ip>185.220.101.45</source_ip>
<count>1</count>`}
                </pre>
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>What it means:</strong> Complete authentication
                  failure. Check: (1) Is this a legitimate sender that needs
                  configuration? (2) Is this spoofing? Unknown IPs with
                  count=1-5 and suspicious patterns often indicate spoofing
                  attempts.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 5: Troubleshooting Workflow */}
          <Card className="mb-8" id="troubleshooting">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Settings className="text-primary mr-3 h-6 w-6" />
              Troubleshooting Workflow
            </h2>

            <p className="mb-4 text-gray-600 dark:text-gray-300">
              When you find authentication failures in reports, follow this
              systematic workflow:
            </p>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <h3 className="mb-2 flex items-center font-semibold text-gray-900 dark:text-white">
                  <span className="bg-primary mr-2 flex h-6 w-6 items-center justify-center rounded-full text-sm text-white">
                    1
                  </span>
                  Identify the Source IP
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                  Run reverse DNS lookup to identify who owns the IP:
                </p>
                <pre className="overflow-x-auto rounded bg-gray-900 p-2 text-xs text-gray-100">
                  {`dig -x 185.220.101.45 +short`}
                </pre>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Or use WHOIS lookup to get organization details.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <h3 className="mb-2 flex items-center font-semibold text-gray-900 dark:text-white">
                  <span className="bg-primary mr-2 flex h-6 w-6 items-center justify-center rounded-full text-sm text-white">
                    2
                  </span>
                  Check Email Volume
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    <strong>High volume (100+):</strong> Likely legitimate
                    service (ESP, email forwarding)
                  </li>
                  <li>
                    <strong>Medium volume (10-100):</strong> Could be internal
                    system or small ESP
                  </li>
                  <li>
                    <strong>Low volume (1-10):</strong> Individual emails or
                    potential spoofing
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <h3 className="mb-2 flex items-center font-semibold text-gray-900 dark:text-white">
                  <span className="bg-primary mr-2 flex h-6 w-6 items-center justify-center rounded-full text-sm text-white">
                    3
                  </span>
                  Verify Legitimacy
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                  Ask your team:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
                  <li>Do we use this email service provider?</li>
                  <li>Is this a known third-party sending on our behalf?</li>
                  <li>Could this be a legitimate business partner?</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <h3 className="mb-2 flex items-center font-semibold text-gray-900 dark:text-white">
                  <span className="bg-primary mr-2 flex h-6 w-6 items-center justify-center rounded-full text-sm text-white">
                    4
                  </span>
                  Take Action
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong className="text-success">If Legitimate:</strong>
                    <ul className="mt-1 list-disc pl-5 text-gray-600 dark:text-gray-300">
                      <li>Add IP/domain to SPF record</li>
                      <li>Configure DKIM signing with the provider</li>
                      <li>Monitor for 1-2 weeks to verify resolution</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-destructive">If Spoofing:</strong>
                    <ul className="mt-1 list-disc pl-5 text-gray-600 dark:text-gray-300">
                      <li>No action needed (DMARC is working as intended)</li>
                      <li>Monitor to ensure volume doesn&apos;t increase</li>
                      <li>
                        Move to p=quarantine or p=reject to block these attempts
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Section 6: Automation */}
          <Card className="mb-8" id="automation">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Zap className="text-primary mr-3 h-6 w-6" />
              Automation & Tools
            </h2>

            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Manual report analysis doesn&apos;t scale. Here&apos;s how to
              automate:
            </p>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Option 1: Free Tools
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                <li>
                  <Link
                    href="/tools/xml-converter"
                    className="text-primary hover:underline"
                  >
                    TrustYourInbox XML to JSON Converter
                  </Link>{" "}
                  - Convert XML reports to readable format
                </li>
                <li>
                  <Link
                    href="/tools/dmarc-analyzer"
                    className="text-primary hover:underline"
                  >
                    DMARC Analyzer
                  </Link>{" "}
                  - Visualize report data and trends
                </li>
                <li>
                  <strong>Parsedmarc</strong> - Open source Python tool for
                  parsing reports
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Option 2: Automated Platforms (Recommended for Scale)
              </h3>
              <div className="border-primary bg-primary/5 rounded-lg border p-4">
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  TrustYourInbox Platform Features:
                </h4>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    Automatic report collection and parsing (no manual
                    downloads)
                  </li>
                  <li>Real-time dashboards with pass/fail rates and trends</li>
                  <li>
                    Automatic IP identification with known sender database
                  </li>
                  <li>Alerts for new senders or authentication failures</li>
                  <li>One-click SPF/DKIM configuration recommendations</li>
                  <li>
                    Progressive enforcement automation (p=none → p=reject)
                  </li>
                </ul>
              </div>
            </div>

            <Alert variant="success">
              <strong>Time Savings:</strong> Automated platforms reduce report
              analysis from 2-3 hours/week to 15 minutes/week for most
              organizations.
            </Alert>
          </Card>

          {/* Section 7: Best Practices */}
          <Card className="mb-8" id="best-practices">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Shield className="text-primary mr-3 h-6 w-6" />
              Best Practices & Next Steps
            </h2>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Report Monitoring Schedule
              </h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-success mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Daily:</strong> Check for critical failures (both
                    SPF and DKIM failing)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-success mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Weekly:</strong> Review new IP addresses and senders
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-success mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Monthly:</strong> Analyze pass rate trends and
                    policy effectiveness
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Key Metrics to Track
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    DMARC Pass Rate
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Target: 95%+ passing. Below 90% indicates configuration
                    issues.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    Unique Sender IPs
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Monitor for sudden increases that may indicate unauthorized
                    sending.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    Email Volume
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Track total volume over time. Sharp drops may indicate
                    delivery issues.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    Policy Compliance
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Ensure receivers are honoring your DMARC policy correctly.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Next Steps
              </h3>
              <ol className="list-decimal space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                <li>
                  Set up automated report collection (use TrustYourInbox or
                  similar platform)
                </li>
                <li>
                  Establish baseline pass rate and identify all legitimate
                  senders
                </li>
                <li>Configure missing SPF/DKIM for any legitimate failures</li>
                <li>
                  Move to progressive enforcement once 95%+ pass rate achieved
                </li>
                <li>
                  Implement ongoing monitoring and alerting for new issues
                </li>
              </ol>
            </div>
          </Card>
        </div>

        {/* Related Guides */}
        <Card className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Related Guides
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/guides/understanding-dmarc-reports"
              className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <Mail className="text-primary mb-3 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                Understanding DMARC Reports
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Learn the fundamentals of RUA and RUF reports
              </p>
            </Link>

            <Link
              href="/guides/reading-aggregate-reports"
              className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <FileText className="text-primary mb-3 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                Reading Aggregate Reports
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Deep dive into XML structure and interpretation
              </p>
            </Link>

            <Link
              href="/guides/identifying-legitimate-senders"
              className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <Search className="text-primary mb-3 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                Identifying Legitimate Senders
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Distinguish authorized sources from spoofing
              </p>
            </Link>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <Card className="border-primary border-2">
            <div className="text-center">
              <Zap className="text-primary mx-auto mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Automate Report Analysis
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Stop manually parsing XML. TrustYourInbox automatically analyzes
                all reports and alerts you to issues.
              </p>
              <Button size="lg" className="w-full" asChild>
                <Link href="/demo">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <Settings className="text-primary mx-auto mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Use Free Report Tools
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Convert and analyze DMARC reports with our free online tools.
              </p>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <Link href="/tools">
                  Explore Free Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>

        {/* Free Tools */}
        <Card>
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Free Report Analysis Tools
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/tools/xml-converter"
              className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <FileText className="text-primary mb-3 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                XML to JSON Converter
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Convert XML reports to readable JSON format
              </p>
            </Link>

            <Link
              href="/tools/dmarc-analyzer"
              className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <TrendingUp className="text-primary mb-3 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                DMARC Analyzer
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Visualize report data and authentication trends
              </p>
            </Link>

            <Link
              href="/tools/forensic-report-viewer"
              className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <AlertTriangle className="text-primary mb-3 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                Forensic Report Viewer
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Analyze RUF reports and email headers
              </p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
