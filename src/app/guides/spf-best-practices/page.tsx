import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Alert } from "@/components/ui/Alert";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  Search,
  Shield,
  FileText,
  Code,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SPF Best Practices: Optimize Email Authentication | Guide 2025",
  description:
    "Master SPF best practices for optimal email deliverability. Learn proper qualifiers, lookup optimization, subdomain strategies, and how to maintain SPF records for maximum security.",
  keywords: [
    "SPF best practices",
    "optimize SPF record",
    "SPF configuration tips",
    "SPF security",
    "SPF maintenance",
    "SPF qualifiers",
    "SPF optimization",
    "email authentication best practices",
  ],
  openGraph: {
    title: "SPF Best Practices: Optimize Email Authentication",
    description:
      "Master SPF best practices for optimal email deliverability. Learn proper qualifiers, lookup optimization, subdomain strategies, and maintenance tips.",
    type: "article",
    url: "https://trustyourinbox.com/guides/spf-best-practices",
  },
};

export default function SpfBestPractices() {
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
            <span className="text-foreground">SPF Best Practices</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="border-border bg-muted/30 border-b">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
            SPF Configuration
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            SPF Best Practices
          </h1>
          <p className="text-muted-foreground mb-6 text-xl">
            Optimize your SPF records for maximum security and deliverability.
            Expert strategies for qualifiers, lookup management, and long-term
            maintenance.
          </p>
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              <span>Best Practices</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Use the Right Qualifier */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              1. Use the Right &quot;all&quot; Qualifier
            </h2>

            <p className="text-muted-foreground mb-6">
              The <code className="text-primary">all</code> qualifier determines
              what happens to emails that don&apos;t match your SPF record.
              Choosing the right one is critical for security and
              deliverability.
            </p>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold">-all (Fail)</h3>
                </div>
                <code className="text-primary mb-3 block text-sm">
                  v=spf1 include:_spf.google.com -all
                </code>
                <p className="text-muted-foreground mb-3 text-sm">
                  <strong>Recommended for production.</strong> Rejects
                  unauthorized emails outright.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Maximum security</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Prevents domain spoofing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-yellow-600" />
                    <span>Can block legitimate email if misconfigured</span>
                  </div>
                </div>
              </Card>

              <Card className="border-yellow-500/50 bg-yellow-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <h3 className="text-lg font-semibold">~all (SoftFail)</h3>
                </div>
                <code className="text-primary mb-3 block text-sm">
                  v=spf1 include:_spf.google.com ~all
                </code>
                <p className="text-muted-foreground mb-3 text-sm">
                  <strong>Recommended for testing.</strong> Marks unauthorized
                  emails as suspicious but delivers them.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Safe for initial deployment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Won&apos;t block legitimate email</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-yellow-600" />
                    <span>Less protection against spoofing</span>
                  </div>
                </div>
              </Card>

              <Card className="border-blue-500/50 bg-blue-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-lg text-blue-600">?</span>
                  <h3 className="text-lg font-semibold">?all (Neutral)</h3>
                </div>
                <code className="text-primary mb-3 block text-sm">
                  v=spf1 include:_spf.google.com ?all
                </code>
                <p className="text-muted-foreground mb-3 text-sm">
                  <strong>Not recommended.</strong> Provides no guidance to
                  receiving servers.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-3 w-3 shrink-0 text-red-600" />
                    <span>No protection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-3 w-3 shrink-0 text-red-600" />
                    <span>Same as having no SPF</span>
                  </div>
                </div>
              </Card>

              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold">+all (Pass)</h3>
                </div>
                <code className="text-primary mb-3 block text-sm">
                  v=spf1 include:_spf.google.com +all
                </code>
                <p className="text-muted-foreground mb-3 text-sm">
                  <strong>NEVER use.</strong> Allows anyone to send email from
                  your domain.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-3 w-3 shrink-0 text-red-600" />
                    <span>Security vulnerability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-3 w-3 shrink-0 text-red-600" />
                    <span>Enables domain spoofing</span>
                  </div>
                </div>
              </Card>
            </div>

            <Alert variant="success" className="mb-6">
              <CheckCircle className="h-4 w-4" />
              <div>
                <div className="font-semibold">Recommendation</div>
                <p className="mb-0 text-sm">
                  Start with <code className="text-primary">~all</code> for 2-4
                  weeks to test, then move to{" "}
                  <code className="text-primary">-all</code> for production
                  security.
                </p>
              </div>
            </Alert>
          </section>

          {/* Stay Under 10 Lookups */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              2. Stay Under 10 DNS Lookups
            </h2>

            <p className="text-muted-foreground mb-6">
              The 10 lookup limit is strictly enforced. Exceeding it causes
              PermError and email delivery failures.
            </p>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">Quick Checklist:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-sm">
                    <strong>Count nested includes:</strong> Google = 3 lookups,
                    Microsoft = 2, SendGrid = 1
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-sm">
                    <strong>Remove unused mechanisms:</strong> Delete mx, a, or
                    old ESP includes
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-sm">
                    <strong>Use ip4:/ip6: when possible:</strong> Static IPs
                    don&apos;t count as lookups
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-sm">
                    <strong>Leave headroom:</strong> Target 7-8 lookups max, not
                    10
                  </span>
                </div>
              </div>
            </Card>

            <Link href="/guides/spf-10-dns-lookup-limit">
              <Button variant="outline">
                <ArrowRight className="mr-2 h-4 w-4" />
                Full Guide: SPF 10 DNS Lookup Limit
              </Button>
            </Link>
          </section>

          {/* Use Subdomains Strategically */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              3. Use Subdomains Strategically
            </h2>

            <p className="text-muted-foreground mb-6">
              Separate different email types across subdomains to isolate lookup
              counts and improve organization.
            </p>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Recommended Subdomain Strategy:
              </h3>
              <div className="space-y-4">
                <div className="border-border rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <code className="text-primary text-sm">example.com</code>
                    <span className="text-muted-foreground text-xs">
                      Primary domain
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2 text-sm">
                    Corporate email (Google Workspace, Microsoft 365)
                  </p>
                  <code className="bg-muted block rounded p-2 text-xs">
                    v=spf1 include:_spf.google.com -all
                  </code>
                  <p className="text-muted-foreground mt-2 text-xs">
                    3 lookups
                  </p>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <code className="text-primary text-sm">
                      marketing.example.com
                    </code>
                    <span className="text-muted-foreground text-xs">
                      Marketing subdomain
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2 text-sm">
                    Marketing emails (SendGrid, Mailchimp)
                  </p>
                  <code className="bg-muted block rounded p-2 text-xs">
                    v=spf1 include:sendgrid.net include:servers.mcsv.net -all
                  </code>
                  <p className="text-muted-foreground mt-2 text-xs">
                    2 lookups (isolated)
                  </p>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <code className="text-primary text-sm">
                      app.example.com
                    </code>
                    <span className="text-muted-foreground text-xs">
                      App subdomain
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2 text-sm">
                    Transactional emails (Postmark, AWS SES)
                  </p>
                  <code className="bg-muted block rounded p-2 text-xs">
                    v=spf1 include:spf.mtasv.net include:amazonses.com -all
                  </code>
                  <p className="text-muted-foreground mt-2 text-xs">
                    2 lookups (isolated)
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                <p className="text-sm">
                  <strong className="text-green-600">Benefit:</strong> Each
                  subdomain has its own 10 lookup limit. Total capacity: 30+
                  lookups across all domains.
                </p>
              </div>
            </Card>
          </section>

          {/* Keep Records Simple */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              4. Keep SPF Records Simple and Readable
            </h2>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <Card className="border-green-500/50 bg-green-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold">Good Example</h3>
                </div>
                <code className="bg-muted mb-3 block rounded p-3 text-xs">
                  v=spf1 include:_spf.google.com include:sendgrid.net -all
                </code>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Clear and concise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Only necessary mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Easy to audit</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold">Bad Example</h3>
                </div>
                <code className="bg-muted mb-3 block rounded p-3 text-xs break-all">
                  v=spf1 mx a include:_spf.google.com include:old-esp.com
                  include:unused.net ip4:192.0.2.1 ip4:192.0.2.2 ~all
                </code>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Cluttered and long</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Unused mechanisms (mx, a, old ESPs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Hard to maintain</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Document Changes */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              5. Document Your SPF Configuration
            </h2>

            <p className="text-muted-foreground mb-6">
              Maintain documentation of your SPF setup for easier
              troubleshooting and team handoffs.
            </p>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">What to Document:</h3>
              <div className="space-y-3">
                <div className="border-border rounded-lg border p-3">
                  <div className="mb-1 text-sm font-medium">
                    Current SPF Record
                  </div>
                  <code className="text-primary block text-xs">
                    v=spf1 include:_spf.google.com include:sendgrid.net -all
                  </code>
                  <p className="text-muted-foreground mt-2 text-xs">
                    Last updated: 2025-01-15 | DNS Lookups: 4/10
                  </p>
                </div>

                <div className="border-border rounded-lg border p-3">
                  <div className="mb-1 text-sm font-medium">
                    Email Service Providers
                  </div>
                  <ul className="text-muted-foreground space-y-1 text-xs">
                    <li>
                      • Google Workspace - include:_spf.google.com (3 lookups)
                    </li>
                    <li>• SendGrid - include:sendgrid.net (1 lookup)</li>
                  </ul>
                </div>

                <div className="border-border rounded-lg border p-3">
                  <div className="mb-1 text-sm font-medium">Change History</div>
                  <ul className="text-muted-foreground space-y-1 text-xs">
                    <li>• 2025-01-15: Removed Mailchimp (no longer used)</li>
                    <li>• 2024-12-01: Added SendGrid for marketing</li>
                    <li>
                      • 2024-10-10: Moved to -all from ~all (production ready)
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* Monitor and Test */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              6. Monitor SPF Performance Regularly
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="mb-4 text-lg font-semibold">
                  Monthly Checklist:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    <div className="text-sm">
                      <strong>Check DNS lookup count</strong>
                      <p className="text-muted-foreground text-xs">
                        ESPs can add nested includes without notice
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    <div className="text-sm">
                      <strong>Review DMARC aggregate reports</strong>
                      <p className="text-muted-foreground text-xs">
                        Identify SPF failures and unauthorized senders
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    <div className="text-sm">
                      <strong>Test email delivery</strong>
                      <p className="text-muted-foreground text-xs">
                        Send test emails from all services to major providers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    <div className="text-sm">
                      <strong>Audit authorized senders</strong>
                      <p className="text-muted-foreground text-xs">
                        Remove unused ESPs and old includes
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex gap-4">
                <Link href="/tools/spf-record-checker">
                  <Button>
                    <Search className="mr-2 h-4 w-4" />
                    Check SPF Record
                  </Button>
                </Link>
                <Link href="/tools/dmarc-xml-converter">
                  <Button variant="outline">View DMARC Reports</Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Common SPF Mistakes to Avoid
            </h2>

            <div className="space-y-4">
              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-2 flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">Multiple SPF Records</h3>
                    <p className="text-muted-foreground text-sm">
                      Only one SPF record allowed per domain. Multiple records
                      cause PermError.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-2 flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Using mx or a Without Need
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Most organizations don&apos;t send email from web/mail
                      servers. Remove these to save lookups.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-2 flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Forgetting Subdomains
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Subdomains need their own SPF records or inherit parent
                      domain policy.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-2 flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Not Testing Before Production
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Always start with ~all for 2-4 weeks to catch issues
                      before enforcing -all.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-2 flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Exceeding 255 Characters
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      SPF records have a 255-character limit per string. Use
                      subdomains if you hit this limit.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Related Guides */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Related Guides</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/guides/spf-record-basics" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    SPF Record Basics
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Learn SPF syntax and mechanisms
                  </p>
                  <div className="text-primary flex items-center gap-1 text-sm">
                    <span>Read guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>

              <Link href="/guides/spf-10-dns-lookup-limit" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    SPF 10 DNS Lookup Limit
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Fix PermError and reduce lookups
                  </p>
                  <div className="text-primary flex items-center gap-1 text-sm">
                    <span>Read guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>

              <Link href="/guides/spf-include-chains" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    SPF Include Chains
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Managing complex SPF setups
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
                Optimize Your SPF Configuration
              </h2>
              <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                Use our free SPF checker to validate your record against these
                best practices, or let our platform manage SPF optimization
                automatically.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/tools/spf-record-checker">
                  <Button size="lg" className="min-w-[200px]">
                    <Shield className="mr-2 h-4 w-4" />
                    Validate SPF Record
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
            <h2 className="mb-6 text-3xl font-bold">Free SPF Tools</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/tools/spf-record-checker" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <Search className="text-primary mb-3 h-6 w-6" />
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    SPF Record Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Validate syntax and lookup count
                  </p>
                </Card>
              </Link>

              <Link href="/tools/spf-record-generator" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <Code className="text-primary mb-3 h-6 w-6" />
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    SPF Record Generator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Create optimized SPF records
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
                    Monitor SPF pass rates
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
