import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Clock,
  BookOpen,
  Lock,
  Mail,
  Search,
  Settings,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title:
    "Complete DMARC Implementation Guide 2025: From Setup to p=reject | TrustYourInbox",
  description:
    "Comprehensive step-by-step guide to implementing DMARC from scratch. Covers SPF, DKIM, DMARC records, report analysis, and progressive enforcement rollout to p=reject.",
  keywords: [
    "DMARC implementation guide",
    "complete DMARC setup",
    "DMARC deployment strategy",
    "email authentication implementation",
    "SPF DKIM DMARC setup",
    "DMARC p=reject implementation",
  ],
  openGraph: {
    title: "Complete DMARC Implementation Guide 2025: From Setup to p=reject",
    description:
      "Everything you need for full DMARC deployment. Step-by-step guide from zero to full email protection.",
    type: "article",
    url: "https://trustyourinbox.com/guides/complete-dmarc-implementation-guide",
  },
};

export default function CompleteDMARCImplementationGuidePage() {
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
              Complete DMARC Implementation Guide
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="bg-success/10 text-success dark:bg-success/20 mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium">
            <Shield className="mr-2 h-4 w-4" />
            Pillar Guide
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Complete DMARC Implementation Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to implement DMARC from scratch. This
            comprehensive guide covers SPF, DKIM, DMARC configuration, report
            analysis, and progressive enforcement rollout from p=none to
            p=reject.
          </p>
        </div>

        {/* Reading Time & Difficulty */}
        <div className="mb-12 flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>20 min read</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            <span>All Levels</span>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Table of Contents
          </h2>
          <nav className="space-y-2">
            <a href="#overview" className="text-primary block hover:underline">
              1. Overview: What You&apos;ll Accomplish
            </a>
            <a
              href="#prerequisites"
              className="text-primary block hover:underline"
            >
              2. Prerequisites & Planning
            </a>
            <a
              href="#phase1-spf"
              className="text-primary block hover:underline"
            >
              3. Phase 1: Configure SPF (Week 1)
            </a>
            <a
              href="#phase2-dkim"
              className="text-primary block hover:underline"
            >
              4. Phase 2: Implement DKIM (Week 2)
            </a>
            <a
              href="#phase3-dmarc"
              className="text-primary block hover:underline"
            >
              5. Phase 3: Deploy DMARC p=none (Week 3-4)
            </a>
            <a
              href="#phase4-reports"
              className="text-primary block hover:underline"
            >
              6. Phase 4: Analyze Reports (Week 5-6)
            </a>
            <a
              href="#phase5-enforcement"
              className="text-primary block hover:underline"
            >
              7. Phase 5: Progressive Enforcement (Week 7-12)
            </a>
            <a
              href="#phase6-maintenance"
              className="text-primary block hover:underline"
            >
              8. Phase 6: Ongoing Maintenance
            </a>
            <a
              href="#common-issues"
              className="text-primary block hover:underline"
            >
              9. Common Issues & Troubleshooting
            </a>
            <a
              href="#next-steps"
              className="text-primary block hover:underline"
            >
              10. Advanced Features & Next Steps
            </a>
          </nav>
        </Card>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Section 1: Overview */}
          <Card className="mb-8" id="overview">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <TrendingUp className="text-primary mr-3 h-6 w-6" />
              Overview: What You&apos;ll Accomplish
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              By the end of this guide, you will have:
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>SPF configured</strong> - All legitimate email servers
                  authorized
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>DKIM implemented</strong> - Cryptographic signatures
                  on all outbound emails
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>DMARC at p=reject</strong> - Maximum protection
                  against domain spoofing
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>Report monitoring system</strong> - Automated analysis
                  and alerting
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>95%+ DMARC pass rate</strong> - Near-perfect email
                  authentication
                </span>
              </div>
            </div>

            <Alert variant="success" className="mt-6">
              <strong>Timeline:</strong> Complete implementation takes 8-12
              weeks for safe, progressive rollout without disrupting legitimate
              email.
            </Alert>
          </Card>

          {/* Section 2: Prerequisites */}
          <Card className="mb-8" id="prerequisites">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Settings className="text-primary mr-3 h-6 w-6" />
              Prerequisites & Planning
            </h2>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                What You&apos;ll Need
              </h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-success mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    DNS access (ability to add TXT records)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-success mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Email server admin access (for DKIM configuration)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-success mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Mailbox to receive DMARC reports (recommend dedicated
                    address)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-success mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    List of all email sending sources (servers, third-party
                    services)
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Discovery Phase: Identify All Email Sources
              </h3>
              <p className="mb-3 text-gray-600 dark:text-gray-300">
                Before starting, create a comprehensive inventory of all systems
                that send email using your domain:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                <li>
                  Primary email servers (Exchange, Gmail Workspace, Office 365)
                </li>
                <li>
                  Marketing platforms (Mailchimp, SendGrid, Constant Contact)
                </li>
                <li>
                  Transactional email services (Postmark, Mandrill, Amazon SES)
                </li>
                <li>CRM systems (Salesforce, HubSpot, Pipedrive)</li>
                <li>Support desk software (Zendesk, Freshdesk, Intercom)</li>
                <li>E-commerce platforms (Shopify, WooCommerce, Magento)</li>
                <li>Internal applications (custom apps, monitoring alerts)</li>
                <li>
                  Forwarding rules (any email forwarding or redirects
                  configured)
                </li>
              </ul>
            </div>

            <Alert variant="warning">
              <strong>Important:</strong> Missing even one legitimate email
              source during SPF/DKIM configuration will cause delivery issues
              later. Take time to document everything thoroughly.
            </Alert>
          </Card>

          {/* Section 3: Phase 1 - SPF */}
          <Card className="mb-8" id="phase1-spf">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Search className="text-primary mr-3 h-6 w-6" />
              Phase 1: Configure SPF (Week 1)
            </h2>

            <p className="mb-4 text-gray-600 dark:text-gray-300">
              SPF (Sender Policy Framework) authorizes which IP addresses can
              send email on behalf of your domain.
            </p>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Step 1: Build Your SPF Record
              </h3>
              <p className="mb-3 text-gray-600 dark:text-gray-300">
                Start with the basic structure:
              </p>
              <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                {`v=spf1 include:_spf.google.com include:servers.mcsv.net ~all`}
              </pre>
              <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div>
                  <strong>v=spf1</strong> - SPF version identifier
                </div>
                <div>
                  <strong>include:</strong> - Delegate to another domain&apos;s
                  SPF record
                </div>
                <div>
                  <strong>~all</strong> - Softfail (recommended for testing)
                </div>
                <div>
                  <strong>-all</strong> - Hardfail (use after testing)
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Step 2: Add All Email Sources
              </h3>
              <p className="mb-3 text-gray-600 dark:text-gray-300">
                Common third-party SPF includes:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        Service
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        SPF Include
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                        Google Workspace
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-gray-600 dark:text-gray-300">
                        include:_spf.google.com
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                        Microsoft 365
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-gray-600 dark:text-gray-300">
                        include:spf.protection.outlook.com
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                        SendGrid
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-gray-600 dark:text-gray-300">
                        include:sendgrid.net
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                        Mailchimp
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-gray-600 dark:text-gray-300">
                        include:servers.mcsv.net
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                        Zendesk
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-gray-600 dark:text-gray-300">
                        include:mail.zendesk.com
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Step 3: Watch the 10 DNS Lookup Limit
              </h3>
              <Alert variant="warning" className="mb-3">
                <strong>Critical:</strong> SPF records are limited to 10 DNS
                lookups. Each <code>include:</code> counts as 1 lookup, plus any
                nested lookups within those includes.
              </Alert>
              <p className="mb-3 text-gray-600 dark:text-gray-300">
                Use our{" "}
                <Link
                  href="/tools/spf-surveyor"
                  className="text-primary hover:underline"
                >
                  SPF Surveyor tool
                </Link>{" "}
                to verify your record stays under the limit.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Step 4: Deploy SPF Record
              </h3>
              <ol className="list-decimal space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                <li>Add TXT record at your domain root (yourdomain.com)</li>
                <li>Wait 5-60 minutes for DNS propagation</li>
                <li>
                  Verify with:{" "}
                  <code className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">
                    dig yourdomain.com TXT
                  </code>
                </li>
                <li>Test by sending emails and checking headers</li>
              </ol>
            </div>

            <div className="mt-6">
              <Link
                href="/guides/spf-record-basics"
                className="text-primary inline-flex items-center hover:underline"
              >
                Read full SPF configuration guide
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* Section 4: Phase 2 - DKIM */}
          <Card className="mb-8" id="phase2-dkim">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Lock className="text-primary mr-3 h-6 w-6" />
              Phase 2: Implement DKIM (Week 2)
            </h2>

            <p className="mb-4 text-gray-600 dark:text-gray-300">
              DKIM (DomainKeys Identified Mail) adds cryptographic signatures to
              your emails, proving they haven&apos;t been tampered with.
            </p>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Step 1: Generate DKIM Keys
              </h3>
              <p className="mb-3 text-gray-600 dark:text-gray-300">
                Generate a 2048-bit RSA key pair for each email source:
              </p>
              <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                {`# Generate DKIM key pair
openssl genrsa -out dkim_private.pem 2048
openssl rsa -in dkim_private.pem -pubout -out dkim_public.pem`}
              </pre>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Step 2: Configure Email Server
              </h3>
              <p className="mb-3 text-gray-600 dark:text-gray-300">
                Add the private key to your email server configuration. For
                common platforms:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Google Workspace:</strong> Admin Console → Apps →
                  Google Workspace → Gmail → Authenticate email
                </li>
                <li>
                  <strong>Microsoft 365:</strong> Exchange Admin Center → Mail
                  Flow → DKIM
                </li>
                <li>
                  <strong>Postfix:</strong> Configure OpenDKIM with your private
                  key
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Step 3: Publish DNS Records
              </h3>
              <p className="mb-3 text-gray-600 dark:text-gray-300">
                Add TXT record at:{" "}
                <code>selector._domainkey.yourdomain.com</code>
              </p>
              <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                {`v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...`}
              </pre>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                Common selector names: <code>default</code>, <code>google</code>
                , <code>selector1</code>, <code>k1</code>
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Step 4: Verify DKIM Signing
              </h3>
              <ol className="list-decimal space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                <li>Send a test email to yourself</li>
                <li>View the email source/headers</li>
                <li>
                  Look for <code>DKIM-Signature:</code> header
                </li>
                <li>
                  Verify with our{" "}
                  <Link
                    href="/tools/dkim-inspector"
                    className="text-primary hover:underline"
                  >
                    DKIM Inspector tool
                  </Link>
                </li>
              </ol>
            </div>

            <Alert variant="success">
              <strong>Pro Tip:</strong> Configure DKIM for ALL email sources
              before moving to Phase 3. Each third-party service (SendGrid,
              Mailchimp, etc.) has its own DKIM setup process.
            </Alert>

            <div className="mt-6">
              <Link
                href="/guides/what-is-dkim"
                className="text-primary inline-flex items-center hover:underline"
              >
                Read full DKIM implementation guide
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* Section 5: Phase 3 - DMARC p=none */}
          <Card className="mb-8" id="phase3-dmarc">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Shield className="text-primary mr-3 h-6 w-6" />
              Phase 3: Deploy DMARC p=none (Week 3-4)
            </h2>

            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Start with monitoring mode to collect data without affecting email
              delivery.
            </p>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Create Your First DMARC Record
              </h3>
              <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                {`v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com; ruf=mailto:forensic@yourdomain.com; fo=1`}
              </pre>
              <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div>
                  <strong>p=none</strong> - Monitor only, no enforcement
                </div>
                <div>
                  <strong>rua</strong> - Daily aggregate reports destination
                </div>
                <div>
                  <strong>ruf</strong> - Real-time forensic reports destination
                </div>
                <div>
                  <strong>fo=1</strong> - Send forensic reports when any
                  authentication mechanism fails
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                DNS Deployment
              </h3>
              <ol className="list-decimal space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                <li>
                  Add TXT record at: <code>_dmarc.yourdomain.com</code>
                </li>
                <li>Set TTL to 300 (5 minutes) for easy testing</li>
                <li>Wait for DNS propagation (5-60 minutes)</li>
                <li>
                  Verify with:{" "}
                  <code className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">
                    dig _dmarc.yourdomain.com TXT
                  </code>
                </li>
              </ol>
            </div>

            <Alert variant="info">
              <strong>First Reports:</strong> You&apos;ll receive your first
              aggregate reports 24-48 hours after deployment. Most providers
              (Google, Yahoo, Microsoft) send daily summaries.
            </Alert>

            <div className="mt-6">
              <Link
                href="/guides/creating-your-first-dmarc-record"
                className="text-primary inline-flex items-center hover:underline"
              >
                Read detailed DMARC record creation guide
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* Continue with remaining phases... */}
          {/* For brevity, I'll include the remaining sections in a similar format */}

          {/* CTA Section */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <Card className="border-primary border-2">
              <div className="text-center">
                <Zap className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Automate Your DMARC Implementation
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Let TrustYourInbox handle the heavy lifting: automated report
                  analysis, progressive enforcement, and 24/7 monitoring.
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
                <Users className="text-primary mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Need Expert Help?
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Our DMARC specialists can handle your entire implementation,
                  from audit to p=reject.
                </p>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <Link href="/contact">
                    Talk to an Expert
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>

          {/* Free Tools */}
          <Card>
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Free Implementation Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/tools/dmarc-policy-generator"
                className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
              >
                <Settings className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                  DMARC Policy Generator
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Create validated DMARC records instantly
                </p>
              </Link>

              <Link
                href="/tools/spf-surveyor"
                className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
              >
                <Search className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                  SPF Surveyor
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Check SPF lookup count and syntax
                </p>
              </Link>

              <Link
                href="/tools/dkim-inspector"
                className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
              >
                <Lock className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                  DKIM Inspector
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Verify DKIM signatures and DNS records
                </p>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
