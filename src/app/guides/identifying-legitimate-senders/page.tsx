import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Globe,
  CheckCircle,
  XCircle,
  Search,
  Shield,
  AlertTriangle,
  FileText,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title: "Identifying Legitimate Senders: Whitelist vs Blocklist | DMARC Guide",
  description:
    "Learn how to identify legitimate email senders in DMARC reports. Distinguish between authorized ESPs and spoofing attempts with IP analysis and authentication patterns.",
  keywords: [
    "identify legitimate senders",
    "DMARC whitelist",
    "authorized email sources",
    "legitimate vs spoofing",
    "IP address analysis",
    "email sender verification",
    "DMARC sender identification",
    "ESP identification",
  ],
  openGraph: {
    title:
      "Identifying Legitimate Senders: Whitelist vs Blocklist | DMARC Guide",
    description:
      "Master the art of distinguishing legitimate email senders from spoofing attempts using DMARC report analysis.",
    type: "article",
    url: "https://trustyourinbox.com/guides/identifying-legitimate-senders",
  },
};

export default function IdentifyingLegitimateSendersPage() {
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
              Identifying Legitimate Senders
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
              Identifying Legitimate Senders
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              The hardest part of DMARC deployment is determining which senders
              are legitimate (and need SPF/DKIM configured) versus spoofing
              attempts (to block). This guide teaches you how to make that
              distinction confidently.
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
            {/* The Challenge */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <AlertTriangle className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">The Challenge</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                When you first enable DMARC reporting with p=none, you&apos;ll
                receive reports showing dozens of IP addresses sending email on
                your behalf. The critical question: which are legitimate?
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Legitimate Senders (Configure SPF/DKIM)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Google Workspace, SendGrid, Mailchimp, Salesforce - your
                      actual email infrastructure that needs authentication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Spoofing Attempts (Block with DMARC)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Unknown IPs from suspicious networks trying to impersonate
                      your domain. These should be rejected.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-warning mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Unknown (Investigate Further)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Low-volume senders, one-off services, or edge cases that
                      require investigation before deciding.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* 5 Ways to Identify */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Search className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  5 Ways to Identify Legitimate Senders
                </h2>
              </div>
              <div className="space-y-6">
                <div className="border-primary/20 bg-primary/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    1. Reverse DNS Lookup
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Check if the IP has a proper hostname that reveals the
                    service:
                  </p>
                  <div className="bg-background mb-4 rounded-md p-4 font-mono text-xs">
                    <p className="text-muted-foreground mb-2">
                      # Check reverse DNS:
                    </p>
                    <p>dig -x 209.85.220.41</p>
                    <p className="text-success mt-3">
                      Result: mail-sor-f41.google.com
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong className="text-success">✅ Legitimate:</strong>{" "}
                      mail-sor-f41.google.com, sendgrid.net, mcsv.net
                      (Mailchimp)
                    </p>
                    <p className="text-sm">
                      <strong className="text-destructive">
                        ❌ Suspicious:
                      </strong>{" "}
                      &quot;unknown&quot;, generic hostnames, residential ISP
                      networks
                    </p>
                  </div>
                </div>

                <div className="border-primary/20 bg-primary/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    2. WHOIS IP Lookup
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Find who owns the IP address:
                  </p>
                  <div className="bg-background mb-4 rounded-md p-4 font-mono text-xs">
                    <p className="text-muted-foreground mb-2">
                      # Check IP ownership:
                    </p>
                    <p>whois 209.85.220.41</p>
                    <p className="mt-3">OrgName: Google LLC</p>
                    <p>NetRange: 209.85.128.0 - 209.85.255.255</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong className="text-success">✅ Legitimate:</strong>{" "}
                      Google, Microsoft, SendGrid, AWS, Mailchimp
                    </p>
                    <p className="text-sm">
                      <strong className="text-destructive">
                        ❌ Suspicious:
                      </strong>{" "}
                      Unknown companies, residential ISPs, VPN providers, Tor
                      networks
                    </p>
                  </div>
                </div>

                <div className="border-primary/20 bg-primary/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    3. Email Volume Patterns
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Analyze message counts in DMARC reports:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-success/10 rounded-md p-3">
                      <p className="text-sm">
                        <strong className="text-success">
                          ✅ High Volume (1,000+ messages/day):
                        </strong>
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Usually legitimate. Your primary email server (Google
                        Workspace: 15,000/day), marketing ESP (SendGrid:
                        5,000/day).
                      </p>
                    </div>
                    <div className="bg-destructive/10 rounded-md p-3">
                      <p className="text-sm">
                        <strong className="text-destructive">
                          ❌ Low Volume (1-50 messages/day):
                        </strong>
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Could be spoofing attempts (testing before larger
                        attack) OR legitimate low-traffic service. Investigate
                        further.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-primary/20 bg-primary/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    4. Authentication Status
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Check if SPF/DKIM are passing or failing:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-success/10 rounded-md p-3">
                      <p className="text-sm">
                        <strong className="text-success">
                          ✅ SPF/DKIM Passing:
                        </strong>
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Already configured correctly. These are definitely
                        legitimate senders you&apos;ve set up before.
                      </p>
                    </div>
                    <div className="bg-warning/10 rounded-md p-3">
                      <p className="text-sm">
                        <strong className="text-warning">
                          ⚠️ Partially Passing (SPF OR DKIM):
                        </strong>
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Likely legitimate but needs configuration. Example:
                        SendGrid with SPF passing but DKIM not set up yet.
                      </p>
                    </div>
                    <div className="bg-destructive/10 rounded-md p-3">
                      <p className="text-sm">
                        <strong className="text-destructive">
                          ❌ Both Failing:
                        </strong>
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Either new legitimate service (not configured yet) OR
                        spoofing. Use other signals (IP, volume, etc.) to
                        decide.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-primary/20 bg-primary/5 rounded-lg p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    5. Internal Verification
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Ask your team if they recognize the sender:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2 text-sm">
                    <li>
                      <strong>Marketing team:</strong> Do you use SendGrid,
                      Mailchimp, HubSpot?
                    </li>
                    <li>
                      <strong>Sales team:</strong> Do you use Salesforce,
                      Outreach, SalesLoft?
                    </li>
                    <li>
                      <strong>Support team:</strong> Do you use Zendesk,
                      Intercom, Freshdesk?
                    </li>
                    <li>
                      <strong>IT team:</strong> Any monitoring tools sending
                      alerts via email?
                    </li>
                  </ul>
                  <Alert variant="info" className="mt-4">
                    <FileText className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Pro Tip</div>
                      <div className="text-sm">
                        Create a spreadsheet of all ESPs and services your
                        company uses. Include IP ranges, SPF includes, and DKIM
                        selectors for each.
                      </div>
                    </div>
                  </Alert>
                </div>
              </div>
            </Card>

            {/* Common Legitimate Senders */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Common Legitimate Senders (IP Ranges)
              </h2>
              <p className="text-muted-foreground mb-6">
                Here are IP ranges for popular email services. If you see these
                in reports, they&apos;re likely legitimate:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-border border-b">
                    <tr>
                      <th className="pb-3 text-left font-semibold">Service</th>
                      <th className="pb-3 text-left font-semibold">
                        IP Range Examples
                      </th>
                      <th className="pb-3 text-left font-semibold">
                        Hostname Pattern
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-border divide-y">
                    <tr>
                      <td className="py-3 font-medium">Google Workspace</td>
                      <td className="py-3 font-mono text-xs">
                        209.85.x.x, 172.253.x.x
                      </td>
                      <td className="py-3 font-mono text-xs">
                        mail-*.google.com
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Microsoft 365</td>
                      <td className="py-3 font-mono text-xs">
                        40.92.x.x, 40.107.x.x
                      </td>
                      <td className="py-3 font-mono text-xs">*.outlook.com</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">SendGrid</td>
                      <td className="py-3 font-mono text-xs">
                        167.89.x.x, 168.245.x.x
                      </td>
                      <td className="py-3 font-mono text-xs">*.sendgrid.net</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Mailchimp</td>
                      <td className="py-3 font-mono text-xs">
                        205.201.x.x, 198.2.x.x
                      </td>
                      <td className="py-3 font-mono text-xs">*.mcsv.net</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Amazon SES</td>
                      <td className="py-3 font-mono text-xs">
                        54.240.x.x, 52.x.x.x
                      </td>
                      <td className="py-3 font-mono text-xs">
                        *.amazonses.com
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Salesforce</td>
                      <td className="py-3 font-mono text-xs">136.147.x.x</td>
                      <td className="py-3 font-mono text-xs">
                        *.exacttarget.com
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Zendesk</td>
                      <td className="py-3 font-mono text-xs">192.161.x.x</td>
                      <td className="py-3 font-mono text-xs">*.zendesk.com</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">HubSpot</td>
                      <td className="py-3 font-mono text-xs">148.105.x.x</td>
                      <td className="py-3 font-mono text-xs">
                        *.hubspotemail.net
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Red Flags for Spoofing */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-destructive/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <XCircle className="text-destructive h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Red Flags for Spoofing</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Residential/ISP IP Addresses
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Comcast, AT&T, Verizon residential networks. Legitimate
                      businesses use dedicated mail servers, not home
                      connections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">VPN/Proxy/Tor Networks</p>
                    <p className="text-muted-foreground text-sm">
                      IP ranges associated with anonymization services. Often
                      used by attackers to hide identity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">High-Risk Countries</p>
                    <p className="text-muted-foreground text-sm">
                      If you don&apos;t operate in Russia, China, Nigeria, etc.
                      and see IPs from there - likely spoofing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">No Reverse DNS</p>
                    <p className="text-muted-foreground text-sm">
                      dig -x returns &quot;NXDOMAIN&quot; or generic hostname.
                      Legitimate mail servers always have proper reverse DNS.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Sudden Spike in Failures</p>
                    <p className="text-muted-foreground text-sm">
                      Unknown IP suddenly sending 10,000+ failing messages/day.
                      This is an active attack campaign.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Decision Framework */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Decision Framework</h2>
              </div>
              <div className="space-y-4">
                <Card className="border-success/20 bg-success/5 p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    ✅ Configure Authentication (Definitely Legitimate)
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Add to SPF and configure DKIM if:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-1 text-sm">
                    <li>Known ESP (Google, SendGrid, Mailchimp, etc.)</li>
                    <li>High volume (&gt;1,000 messages/day)</li>
                    <li>Proper reverse DNS with ESP hostname</li>
                    <li>Team confirms they use this service</li>
                    <li>Already partially passing (SPF OR DKIM working)</li>
                  </ul>
                </Card>

                <Card className="border-destructive/20 bg-destructive/5 p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    ❌ Block with DMARC (Definitely Spoofing)
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Let DMARC p=reject block if:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-1 text-sm">
                    <li>Unknown IP from suspicious network</li>
                    <li>No reverse DNS or generic hostname</li>
                    <li>Low volume (&lt;50 messages/day)</li>
                    <li>Both SPF and DKIM failing</li>
                    <li>No one on your team recognizes the source</li>
                  </ul>
                </Card>

                <Card className="border-warning/20 bg-warning/5 p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    ⚠️ Investigate Further (Unknown)
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Keep DMARC p=none and monitor for 2 weeks if:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-1 text-sm">
                    <li>Unknown service but legitimate-looking IP/hostname</li>
                    <li>Medium volume (50-500 messages/day)</li>
                    <li>One authentication method passing</li>
                    <li>Could be legacy system or forgotten integration</li>
                  </ul>
                  <p className="text-muted-foreground mt-3 text-sm">
                    After 2 weeks: If still active and no team recognition,
                    treat as spoofing.
                  </p>
                </Card>
              </div>
            </Card>

            {/* Related Guides */}
            <Card className="bg-secondary/30 p-8">
              <h2 className="mb-6 text-2xl font-bold">Related Guides</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/guides/reading-aggregate-reports"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    Reading Aggregate Reports
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Find sender IPs in reports
                  </p>
                </Link>
                <Link
                  href="/guides/third-party-email-services"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    Third-Party Email Services
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Configure ESPs
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
                    Add legitimate senders
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
              Automatic Sender Identification
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              TrustYourInbox automatically identifies known ESPs and flags
              suspicious sources. No manual IP lookups needed.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">See Sender Intelligence</Link>
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
              Free Sender Analysis Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/tools/dmarc-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Search className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  DMARC Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check your policy
                </p>
              </Link>
              <Link
                href="/tools/spf-surveyor"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Shield className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  SPF Surveyor
                </h3>
                <p className="text-muted-foreground text-sm">
                  See authorized IPs
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
                  Parse aggregate reports
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
