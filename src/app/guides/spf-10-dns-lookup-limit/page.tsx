import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Alert } from "@/components/ui/Alert";
import {
  AlertTriangle,
  XCircle,
  ArrowRight,
  Search,
  Settings,
  Zap,
  CheckCircle,
  TrendingDown,
  FileText,
  Code,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SPF 10 DNS Lookup Limit: Causes, Fixes & Solutions | Guide 2025",
  description:
    "Fix SPF PermaError and 'too many DNS lookups' errors. Learn why SPF has a 10 lookup limit, how to count lookups, and proven strategies to reduce them. Step-by-step troubleshooting guide.",
  keywords: [
    "SPF 10 lookup limit",
    "SPF too many DNS lookups",
    "SPF PermError",
    "fix SPF 10 lookups",
    "reduce SPF lookups",
    "SPF include limit",
    "SPF DNS lookup error",
    "SPF permerror too many DNS lookups",
    "SPF flattening",
    "SPF optimization",
  ],
  openGraph: {
    title: "SPF 10 DNS Lookup Limit: Causes, Fixes & Solutions",
    description:
      "Fix SPF PermaError and 'too many DNS lookups' errors. Learn why SPF has a 10 lookup limit and how to reduce your lookup count with proven strategies.",
    type: "article",
    url: "https://trustyourinbox.com/guides/spf-10-dns-lookup-limit",
  },
};

export default function Spf10DnsLookupLimit() {
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
            <span className="text-foreground">SPF 10 DNS Lookup Limit</span>
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
            SPF 10 DNS Lookup Limit
          </h1>
          <p className="text-muted-foreground mb-6 text-xl">
            Why SPF has a 10 lookup limit, how it breaks your email, and proven
            strategies to fix PermError without losing mail delivery.
          </p>
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <AlertTriangle className="h-4 w-4" />
              <span>Common Pain Point</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="h-4 w-4" />
              <span>Actionable Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* The Problem */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              The Problem: Too Many DNS Lookups
            </h2>

            <Alert variant="error" className="mb-6">
              <XCircle className="h-4 w-4" />
              <div>
                <div className="font-semibold">
                  SPF PermError: Too Many DNS Lookups
                </div>
                <p className="mb-0 text-sm">
                  When your SPF record exceeds 10 DNS lookups, mail servers
                  return a <strong>PermError</strong> (permanent error). This
                  can cause legitimate emails to be rejected or marked as spam.
                </p>
              </div>
            </Alert>

            <p className="text-muted-foreground mb-6">
              The SPF specification (RFC 7208) limits SPF records to a maximum
              of <strong>10 DNS lookups</strong> to prevent abuse and reduce DNS
              load. This limit is strictly enforced by all major email providers
              including Gmail, Outlook, and Yahoo.
            </p>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold">What Breaks</h3>
                </div>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>SPF returns PermError instead of Pass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>DMARC alignment fails (SPF not passing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Emails go to spam or get rejected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Deliverability drops significantly</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-yellow-500/50 bg-yellow-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <h3 className="text-lg font-semibold">Why It Happens</h3>
                </div>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>
                      Each <code className="text-primary">include:</code> counts
                      as 1 lookup
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>Included SPF records also lookup recursively</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>
                      Using multiple ESPs (Google, Microsoft, SendGrid...)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>MX and A mechanisms trigger additional lookups</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* How to Count Lookups */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              How to Count DNS Lookups
            </h2>

            <p className="text-muted-foreground mb-6">
              Understanding which SPF mechanisms trigger DNS lookups is critical
              to staying under the 10 lookup limit.
            </p>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Mechanisms That Count as Lookups
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-red-500/10">
                    <span className="text-sm font-bold text-red-600">+1</span>
                  </div>
                  <div>
                    <code className="text-primary mb-1 block text-sm">
                      include:_spf.google.com
                    </code>
                    <p className="text-muted-foreground text-xs">
                      <strong>include:</strong> Each include= counts as 1
                      lookup, PLUS any lookups in the included record
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-red-500/10">
                    <span className="text-sm font-bold text-red-600">+1</span>
                  </div>
                  <div>
                    <code className="text-primary mb-1 block text-sm">
                      a:mail.example.com
                    </code>
                    <p className="text-muted-foreground text-xs">
                      <strong>a:</strong> Looks up A record (and AAAA if
                      present) = 1 lookup
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-red-500/10">
                    <span className="text-sm font-bold text-red-600">+1</span>
                  </div>
                  <div>
                    <code className="text-primary mb-1 block text-sm">mx</code>
                    <p className="text-muted-foreground text-xs">
                      <strong>mx:</strong> Looks up MX record = 1 lookup (+
                      additional lookups for each MX host)
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-red-500/10">
                    <span className="text-sm font-bold text-red-600">+1</span>
                  </div>
                  <div>
                    <code className="text-primary mb-1 block text-sm">ptr</code>
                    <p className="text-muted-foreground text-xs">
                      <strong>ptr:</strong> Reverse DNS lookup = 1 lookup
                      (DEPRECATED - avoid using)
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-red-500/10">
                    <span className="text-sm font-bold text-red-600">+1</span>
                  </div>
                  <div>
                    <code className="text-primary mb-1 block text-sm">
                      exists:%{"{"}i{"}"}.spf.example.com
                    </code>
                    <p className="text-muted-foreground text-xs">
                      <strong>exists:</strong> Checks if a DNS record exists = 1
                      lookup
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Mechanisms That DON&apos;T Count
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-green-500/10">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <code className="text-primary mb-1 block text-sm">
                      ip4:192.0.2.0/24
                    </code>
                    <p className="text-muted-foreground text-xs">
                      <strong>ip4:</strong> Static IPv4 address - NO lookup
                      required
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-green-500/10">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <code className="text-primary mb-1 block text-sm">
                      ip6:2001:db8::/32
                    </code>
                    <p className="text-muted-foreground text-xs">
                      <strong>ip6:</strong> Static IPv6 address - NO lookup
                      required
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-green-500/10">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <code className="text-primary mb-1 block text-sm">
                      ~all
                    </code>
                    <p className="text-muted-foreground text-xs">
                      <strong>all:</strong> Match-all qualifier - NO lookup
                      required
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Alert variant="info" className="mb-6">
              <Settings className="h-4 w-4" />
              <div>
                <div className="font-semibold">Use Our Free Tool</div>
                <p className="mb-2 text-sm">
                  Check your SPF lookup count automatically with our SPF Record
                  Checker:
                </p>
                <Link href="/tools/spf-record-checker">
                  <Button variant="outline" size="sm">
                    Check My SPF Lookups
                  </Button>
                </Link>
              </div>
            </Alert>
          </section>

          {/* Example: Counting Real SPF Record */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Example: Counting a Real SPF Record
            </h2>

            <p className="text-muted-foreground mb-4">
              Let&apos;s count the DNS lookups in this common SPF record:
            </p>

            <div className="bg-muted mb-6 rounded-lg p-4">
              <div className="mb-2 text-sm font-medium">Your SPF Record:</div>
              <code className="text-primary block text-sm break-all">
                v=spf1 include:_spf.google.com
                include:spf.protection.outlook.com include:sendgrid.net
                include:_spf.salesforce.com mx a -all
              </code>
            </div>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Lookup Count Breakdown:
              </h3>
              <div className="space-y-3">
                <div className="border-border flex items-start justify-between gap-4 border-b pb-3">
                  <div>
                    <code className="text-primary mb-1 block text-xs">
                      include:_spf.google.com
                    </code>
                    <p className="text-muted-foreground text-xs">
                      1 lookup + 2 nested includes (gmail.com, googlemail.com)
                    </p>
                  </div>
                  <div className="text-muted-foreground shrink-0 text-sm font-semibold">
                    = 3 lookups
                  </div>
                </div>

                <div className="border-border flex items-start justify-between gap-4 border-b pb-3">
                  <div>
                    <code className="text-primary mb-1 block text-xs">
                      include:spf.protection.outlook.com
                    </code>
                    <p className="text-muted-foreground text-xs">
                      1 lookup + 1 nested include
                    </p>
                  </div>
                  <div className="text-muted-foreground shrink-0 text-sm font-semibold">
                    = 2 lookups
                  </div>
                </div>

                <div className="border-border flex items-start justify-between gap-4 border-b pb-3">
                  <div>
                    <code className="text-primary mb-1 block text-xs">
                      include:sendgrid.net
                    </code>
                    <p className="text-muted-foreground text-xs">
                      1 lookup (no nested includes)
                    </p>
                  </div>
                  <div className="text-muted-foreground shrink-0 text-sm font-semibold">
                    = 1 lookup
                  </div>
                </div>

                <div className="border-border flex items-start justify-between gap-4 border-b pb-3">
                  <div>
                    <code className="text-primary mb-1 block text-xs">
                      include:_spf.salesforce.com
                    </code>
                    <p className="text-muted-foreground text-xs">
                      1 lookup + 2 nested includes
                    </p>
                  </div>
                  <div className="text-muted-foreground shrink-0 text-sm font-semibold">
                    = 3 lookups
                  </div>
                </div>

                <div className="border-border flex items-start justify-between gap-4 border-b pb-3">
                  <div>
                    <code className="text-primary mb-1 block text-xs">mx</code>
                    <p className="text-muted-foreground text-xs">
                      MX record lookup for yourdomain.com
                    </p>
                  </div>
                  <div className="text-muted-foreground shrink-0 text-sm font-semibold">
                    = 1 lookup
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 pb-3">
                  <div>
                    <code className="text-primary mb-1 block text-xs">a</code>
                    <p className="text-muted-foreground text-xs">
                      A record lookup for yourdomain.com
                    </p>
                  </div>
                  <div className="text-muted-foreground shrink-0 text-sm font-semibold">
                    = 1 lookup
                  </div>
                </div>

                <div className="border-border border-t-2 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Total DNS Lookups:</span>
                    <span className="text-xl font-bold text-red-600">
                      11 lookups
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2 text-xs">
                    ❌ <strong>OVER THE LIMIT!</strong> This SPF record will
                    return PermError
                  </p>
                </div>
              </div>
            </Card>

            <Alert variant="error">
              <AlertTriangle className="h-4 w-4" />
              <div>
                <div className="font-semibold">Result: PermError</div>
                <p className="mb-0 text-sm">
                  This SPF record exceeds 10 lookups and will fail SPF checks.
                  You must reduce the lookup count to 10 or below.
                </p>
              </div>
            </Alert>
          </section>

          {/* Solutions */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              5 Strategies to Reduce DNS Lookups
            </h2>

            <div className="space-y-6">
              {/* Strategy 1 */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Replace include: with ip4:/ip6:
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      The most effective solution: replace{" "}
                      <code className="text-primary">include:</code> statements
                      with direct IP addresses (if IPs are static).
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                      <XCircle className="h-4 w-4 text-red-600" />
                      <span>Before (3 lookups):</span>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="text-xs">include:_spf.google.com</code>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>After (0 lookups):</span>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="block text-xs">
                        ip4:209.85.220.0/19 ip4:64.233.160.0/19
                        ip4:66.102.0.0/20
                      </code>
                    </div>
                    <p className="text-muted-foreground mt-2 text-xs">
                      💡 <strong>Savings: 3 lookups</strong> (but requires
                      manual IP updates when Google changes IPs)
                    </p>
                  </div>
                </div>

                <Alert variant="warning" className="mt-4">
                  <AlertTriangle className="h-4 w-4" />
                  <div>
                    <p className="mb-0 text-sm">
                      <strong>Trade-off:</strong> You must manually update IPs
                      when your ESP changes them. Only use for static IPs.
                    </p>
                  </div>
                </Alert>
              </Card>

              {/* Strategy 2 */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Remove Unnecessary Mechanisms
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Audit your SPF record and remove mechanisms you no longer
                      use.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    <div className="text-sm">
                      <strong>Remove mx mechanism</strong> - unless you send
                      email from your MX servers (most don&apos;t)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    <div className="text-sm">
                      <strong>Remove a mechanism</strong> - unless you send from
                      your web server
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    <div className="text-sm">
                      <strong>Remove old ESP includes</strong> - if you switched
                      providers and forgot to clean up
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    <div className="text-sm">
                      <strong>Never use ptr</strong> - deprecated mechanism that
                      adds unnecessary lookups
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                  <p className="text-sm">
                    <strong className="text-green-600">Typical Savings:</strong>{" "}
                    1-3 lookups by removing unused mechanisms
                  </p>
                </div>
              </Card>

              {/* Strategy 3 */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Use SPF Macros for Subdomains
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Move third-party senders to subdomains with separate SPF
                      records.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="mb-2 text-sm font-medium">
                      Main Domain SPF (reduced lookups):
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="text-xs">
                        v=spf1 include:_spf.google.com -all
                      </code>
                    </div>
                    <p className="text-muted-foreground mt-2 text-xs">
                      Only 3 lookups for primary email
                    </p>
                  </div>

                  <div>
                    <div className="mb-2 text-sm font-medium">
                      Marketing Subdomain SPF:
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="text-xs">
                        marketing.example.com → v=spf1 include:sendgrid.net -all
                      </code>
                    </div>
                    <p className="text-muted-foreground mt-2 text-xs">
                      1 lookup for SendGrid marketing emails
                    </p>
                  </div>

                  <div>
                    <div className="mb-2 text-sm font-medium">
                      CRM Subdomain SPF:
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="text-xs">
                        crm.example.com → v=spf1 include:_spf.salesforce.com
                        -all
                      </code>
                    </div>
                    <p className="text-muted-foreground mt-2 text-xs">
                      3 lookups for Salesforce emails
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-blue-500/20 bg-blue-500/5 p-3">
                  <p className="text-sm">
                    <strong className="text-primary">Result:</strong> Main
                    domain stays under 10 lookups. Each subdomain has its own
                    limit.
                  </p>
                </div>
              </Card>

              {/* Strategy 4 */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      SPF Flattening (Advanced)
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Replace <code className="text-primary">include:</code>{" "}
                      statements with the IP addresses they resolve to.
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm">
                  SPF flattening services automatically monitor included SPF
                  records and update your record with the resolved IP addresses.
                </p>

                <div className="mb-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm font-semibold">Pros & Cons:</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="mb-2 text-xs font-medium text-green-600">
                        ✓ Advantages:
                      </div>
                      <ul className="text-muted-foreground space-y-1 text-xs">
                        <li>• Reduces lookups to near zero</li>
                        <li>• Automated IP updates</li>
                        <li>• Maintains ESP compatibility</li>
                      </ul>
                    </div>
                    <div>
                      <div className="mb-2 text-xs font-medium text-red-600">
                        ✗ Disadvantages:
                      </div>
                      <ul className="text-muted-foreground space-y-1 text-xs">
                        <li>• Requires paid service</li>
                        <li>• Very long SPF records</li>
                        <li>• May hit 255-character limit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Strategy 5 */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Consolidate Email Providers
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Reduce the number of email service providers you use.
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm">
                  If you&apos;re using 5+ different email services (Google
                  Workspace, Microsoft 365, SendGrid, Mailchimp, Salesforce,
                  etc.), consider consolidating:
                </p>

                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <TrendingDown className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      Use one ESP for all marketing/transactional email
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingDown className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      Configure third-party apps to send via your main ESP (SMTP
                      relay)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingDown className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      Migrate legacy systems to modern providers with fewer
                      lookups
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Testing & Verification */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Testing Your Optimized SPF Record
            </h2>

            <p className="text-muted-foreground mb-6">
              After making changes, verify your SPF record is under 10 lookups
              and still authorizes all legitimate senders.
            </p>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Verification Checklist:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-sm">
                    <strong>Check lookup count:</strong> Use SPF checker tool to
                    confirm ≤ 10 lookups
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-sm">
                    <strong>Test all email sources:</strong> Send test emails
                    from each ESP/service
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-sm">
                    <strong>Monitor DMARC reports:</strong> Watch for SPF
                    failures in aggregate reports
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-sm">
                    <strong>Wait 24-48 hours:</strong> Allow DNS propagation
                    before declaring success
                  </span>
                </div>
              </div>
            </Card>

            <div className="flex gap-4">
              <Link href="/tools/spf-record-checker">
                <Button>Check My SPF Record</Button>
              </Link>
              <Link href="/tools/dmarc-xml-converter">
                <Button variant="outline">View DMARC Reports</Button>
              </Link>
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

              <Link href="/guides/spf-best-practices" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    SPF Best Practices
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Optimize your SPF configuration
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
                Fix Your SPF Lookup Issues
              </h2>
              <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                Use our free SPF Record Checker to count your DNS lookups and
                identify optimization opportunities, or let our platform manage
                SPF across all your domains automatically.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/tools/spf-record-checker">
                  <Button size="lg" className="min-w-[200px]">
                    <Search className="mr-2 h-4 w-4" />
                    Check SPF Lookups
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
                    Check DNS lookup count and validate syntax
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
                    View SPF failures in DMARC reports
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
