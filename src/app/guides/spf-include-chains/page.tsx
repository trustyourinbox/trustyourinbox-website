import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Alert } from "@/components/ui/Alert";
import {
  AlertTriangle,
  ArrowRight,
  Search,
  Link2,
  Layers,
  FileText,
  Code,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SPF Include Chains: Managing Complex SPF Setups | Guide 2025",
  description:
    "Master SPF include chains for complex email setups. Learn how nested includes work, count recursive lookups, and optimize multi-ESP configurations without hitting the 10 lookup limit.",
  keywords: [
    "SPF include chains",
    "SPF nested includes",
    "SPF include mechanism",
    "complex SPF setup",
    "SPF recursive lookups",
    "manage multiple ESPs",
    "SPF include best practices",
    "SPF chain optimization",
  ],
  openGraph: {
    title: "SPF Include Chains: Managing Complex SPF Setups",
    description:
      "Master SPF include chains for complex email setups. Learn how nested includes work, count recursive lookups, and optimize multi-ESP configurations.",
    type: "article",
    url: "https://trustyourinbox.com/guides/spf-include-chains",
  },
};

export default function SpfIncludeChains() {
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
            <span className="text-foreground">SPF Include Chains</span>
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
            SPF Include Chains
          </h1>
          <p className="text-muted-foreground mb-6 text-xl">
            How nested SPF includes work, why they consume multiple DNS lookups,
            and strategies for managing complex multi-ESP email setups.
          </p>
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Layers className="h-4 w-4" />
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* What Are Include Chains */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              What Are SPF Include Chains?
            </h2>

            <p className="text-muted-foreground mb-6">
              An SPF include chain occurs when one SPF record references another
              using the <code className="text-primary">include:</code>{" "}
              mechanism, and that referenced record contains its own{" "}
              <code className="text-primary">include:</code> statements. This
              creates a chain (or tree) of DNS lookups.
            </p>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">Simple Example:</h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 text-sm font-medium">
                    Your domain: example.com
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <code className="text-primary text-xs">
                      v=spf1 include:_spf.google.com -all
                    </code>
                  </div>
                  <p className="text-muted-foreground mt-2 text-xs">
                    1 include statement (but not just 1 lookup!)
                  </p>
                </div>

                <div>
                  <div className="mb-2 text-sm font-medium">
                    Google&apos;s SPF: _spf.google.com
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <code className="text-primary block text-xs">
                      v=spf1 include:_netblocks.google.com
                      include:_netblocks2.google.com
                      include:_netblocks3.google.com ~all
                    </code>
                  </div>
                  <p className="text-muted-foreground mt-2 text-xs">
                    Google&apos;s record has 3 nested includes!
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-3">
                <p className="text-sm">
                  <strong>Total Lookups:</strong> 1 (your include) + 3
                  (Google&apos;s nested includes) ={" "}
                  <strong className="text-yellow-600">4 DNS lookups</strong>{" "}
                  from a single include!
                </p>
              </div>
            </Card>

            <Alert variant="warning" className="mb-6">
              <AlertTriangle className="h-4 w-4" />
              <div>
                <div className="font-semibold">Hidden Lookup Costs</div>
                <p className="mb-0 text-sm">
                  When you add{" "}
                  <code className="text-primary">include:_spf.google.com</code>,
                  you&apos;re not consuming 1 lookup—you&apos;re consuming
                  however many lookups Google&apos;s SPF record uses (currently
                  3-4).
                </p>
              </div>
            </Alert>
          </section>

          {/* How Include Chains Work */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              How Include Chains Work: DNS Resolution Process
            </h2>

            <p className="text-muted-foreground mb-6">
              When a mail server checks your SPF record, it follows the include
              chain recursively:
            </p>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Step-by-Step Resolution:
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium">
                      Lookup your domain&apos;s SPF record
                    </div>
                    <code className="text-primary block text-xs">
                      TXT lookup: example.com
                    </code>
                    <p className="text-muted-foreground mt-1 text-xs">
                      Returns: v=spf1 include:_spf.google.com -all
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium">
                      Follow the include (Lookup #1)
                    </div>
                    <code className="text-primary block text-xs">
                      TXT lookup: _spf.google.com
                    </code>
                    <p className="text-muted-foreground mt-1 text-xs">
                      Returns: v=spf1 include:_netblocks.google.com
                      include:_netblocks2.google.com ...
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-sm font-bold">3</span>
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium">
                      Follow nested includes (Lookups #2, #3, #4...)
                    </div>
                    <code className="text-primary mb-1 block text-xs">
                      TXT lookup: _netblocks.google.com
                    </code>
                    <code className="text-primary mb-1 block text-xs">
                      TXT lookup: _netblocks2.google.com
                    </code>
                    <code className="text-primary block text-xs">
                      TXT lookup: _netblocks3.google.com
                    </code>
                    <p className="text-muted-foreground mt-1 text-xs">
                      Each nested include = additional lookup
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-sm font-bold">4</span>
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium">
                      Collect all IP addresses
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Combine IP ranges from all included records into a single
                      authorized sender list
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Common ESP Include Chains */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Common ESP Include Chains & Their Lookup Costs
            </h2>

            <p className="text-muted-foreground mb-6">
              Different email service providers have different include chain
              depths. Here&apos;s what popular ESPs actually consume:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold">Google Workspace</h3>
                  <span className="text-primary text-xl font-bold">3</span>
                </div>
                <code className="text-primary mb-3 block text-xs">
                  include:_spf.google.com
                </code>
                <div className="text-muted-foreground space-y-1 text-xs">
                  <div>→ include:_netblocks.google.com</div>
                  <div>→ include:_netblocks2.google.com</div>
                  <div>→ include:_netblocks3.google.com</div>
                </div>
                <div className="mt-3 text-xs">
                  <strong className="text-yellow-600">Cost:</strong> 3 lookups
                </div>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold">Microsoft 365</h3>
                  <span className="text-primary text-xl font-bold">2</span>
                </div>
                <code className="text-primary mb-3 block text-xs">
                  include:spf.protection.outlook.com
                </code>
                <div className="text-muted-foreground space-y-1 text-xs">
                  <div>→ include:spf-a.outlook.com</div>
                  <div className="opacity-50">(no further nesting)</div>
                </div>
                <div className="mt-3 text-xs">
                  <strong className="text-yellow-600">Cost:</strong> 2 lookups
                </div>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold">SendGrid</h3>
                  <span className="text-primary text-xl font-bold">1</span>
                </div>
                <code className="text-primary mb-3 block text-xs">
                  include:sendgrid.net
                </code>
                <div className="text-muted-foreground space-y-1 text-xs">
                  <div className="opacity-50">(no nested includes)</div>
                </div>
                <div className="mt-3 text-xs">
                  <strong className="text-green-600">Cost:</strong> 1 lookup
                </div>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold">Salesforce</h3>
                  <span className="text-primary text-xl font-bold">3</span>
                </div>
                <code className="text-primary mb-3 block text-xs">
                  include:_spf.salesforce.com
                </code>
                <div className="text-muted-foreground space-y-1 text-xs">
                  <div>→ Multiple nested includes</div>
                </div>
                <div className="mt-3 text-xs">
                  <strong className="text-yellow-600">Cost:</strong> 3 lookups
                </div>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold">Mailchimp</h3>
                  <span className="text-primary text-xl font-bold">1</span>
                </div>
                <code className="text-primary mb-3 block text-xs">
                  include:servers.mcsv.net
                </code>
                <div className="text-muted-foreground space-y-1 text-xs">
                  <div className="opacity-50">(no nested includes)</div>
                </div>
                <div className="mt-3 text-xs">
                  <strong className="text-green-600">Cost:</strong> 1 lookup
                </div>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold">Zendesk</h3>
                  <span className="text-primary text-xl font-bold">1</span>
                </div>
                <code className="text-primary mb-3 block text-xs">
                  include:mail.zendesk.com
                </code>
                <div className="text-muted-foreground space-y-1 text-xs">
                  <div className="opacity-50">(no nested includes)</div>
                </div>
                <div className="mt-3 text-xs">
                  <strong className="text-green-600">Cost:</strong> 1 lookup
                </div>
              </Card>
            </div>

            <Alert variant="info" className="mt-6">
              <Link2 className="h-4 w-4" />
              <div>
                <div className="font-semibold">Lookup Costs Change</div>
                <p className="mb-0 text-sm">
                  ESPs can modify their SPF records anytime. Always verify
                  current lookup counts with an SPF checker before making
                  changes.
                </p>
              </div>
            </Alert>
          </section>

          {/* Calculating Total Lookups */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Calculating Total Lookups in Complex Chains
            </h2>

            <p className="text-muted-foreground mb-6">
              Here&apos;s how to calculate your total lookup count when using
              multiple ESPs:
            </p>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Example: Multi-ESP Setup
              </h3>

              <div className="bg-muted mb-4 rounded-lg p-4">
                <div className="mb-2 text-sm font-medium">Your SPF Record:</div>
                <code className="text-primary block text-xs break-all">
                  v=spf1 include:_spf.google.com include:sendgrid.net
                  include:servers.mcsv.net mx -all
                </code>
              </div>

              <div className="space-y-3">
                <div className="border-border flex items-center justify-between border-b pb-2">
                  <span className="text-sm">include:_spf.google.com</span>
                  <span className="text-muted-foreground text-sm font-semibold">
                    3 lookups
                  </span>
                </div>
                <div className="border-border flex items-center justify-between border-b pb-2">
                  <span className="text-sm">include:sendgrid.net</span>
                  <span className="text-muted-foreground text-sm font-semibold">
                    1 lookup
                  </span>
                </div>
                <div className="border-border flex items-center justify-between border-b pb-2">
                  <span className="text-sm">include:servers.mcsv.net</span>
                  <span className="text-muted-foreground text-sm font-semibold">
                    1 lookup
                  </span>
                </div>
                <div className="border-border flex items-center justify-between border-b pb-2">
                  <span className="text-sm">mx</span>
                  <span className="text-muted-foreground text-sm font-semibold">
                    1 lookup
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-bold text-green-600">
                    6 lookups
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mt-4 text-xs">
                ✓ Under the 10 lookup limit with 4 lookups to spare
              </p>
            </Card>
          </section>

          {/* Managing Complex Chains */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Strategies for Managing Include Chains
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
                      Choose ESPs with Shallow Include Chains
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      When selecting email service providers, prefer those with
                      fewer nested includes.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                    <div className="mb-2 text-xs font-semibold text-green-600">
                      ✓ Low Lookup ESPs (1 lookup):
                    </div>
                    <ul className="text-muted-foreground space-y-1 text-xs">
                      <li>• SendGrid</li>
                      <li>• Mailchimp</li>
                      <li>• Postmark</li>
                      <li>• Zendesk</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-3">
                    <div className="mb-2 text-xs font-semibold text-yellow-600">
                      ⚠ High Lookup ESPs (3+ lookups):
                    </div>
                    <ul className="text-muted-foreground space-y-1 text-xs">
                      <li>• Google Workspace (3)</li>
                      <li>• Salesforce (3)</li>
                      <li>• Microsoft 365 (2)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Strategy 2 */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Use Subdomains for High-Lookup ESPs
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Offload heavy include chains to separate subdomains.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="mb-2 text-sm font-medium">
                      Main Domain (Primary Email):
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="text-xs">
                        example.com → v=spf1 include:sendgrid.net -all
                      </code>
                    </div>
                    <p className="text-muted-foreground mt-1 text-xs">
                      Only 1 lookup
                    </p>
                  </div>
                  <div>
                    <div className="mb-2 text-sm font-medium">
                      Marketing Subdomain (Salesforce):
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="text-xs">
                        marketing.example.com → v=spf1
                        include:_spf.salesforce.com -all
                      </code>
                    </div>
                    <p className="text-muted-foreground mt-1 text-xs">
                      3 lookups (isolated)
                    </p>
                  </div>
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
                      Monitor ESP SPF Changes
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      ESPs can change their SPF records anytime, potentially
                      adding nested includes.
                    </p>
                  </div>
                </div>

                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Check SPF lookup count monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Subscribe to ESP change notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Use monitoring tools to track DNS changes</span>
                  </li>
                </ul>
              </Card>

              {/* Strategy 4 */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Consolidate Through SMTP Relay
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Route all email through a single ESP to minimize includes.
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-3 text-sm">
                  Instead of adding includes for every service, configure
                  third-party apps to send via your primary ESP:
                </p>

                <div className="bg-muted rounded-lg p-4">
                  <div className="mb-2 text-xs font-medium">Example:</div>
                  <div className="text-muted-foreground space-y-1 text-xs">
                    <div>• Primary ESP: SendGrid (1 lookup)</div>
                    <div>• Salesforce → send via SendGrid SMTP relay</div>
                    <div>• Zendesk → send via SendGrid SMTP relay</div>
                    <div>• Custom app → send via SendGrid SMTP relay</div>
                  </div>
                  <p className="mt-3 text-xs">
                    <strong>Result:</strong> Only 1 include instead of 4+
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Best Practices</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-green-500/50 bg-green-500/5 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <span className="text-green-600">✓</span> Do
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>→ Test lookup count before deployment</li>
                  <li>→ Document which ESPs use nested includes</li>
                  <li>→ Leave 2-3 lookups of headroom</li>
                  <li>→ Prefer ESPs with shallow include chains</li>
                  <li>→ Use subdomains for complex setups</li>
                </ul>
              </Card>

              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <span className="text-red-600">✗</span> Don&apos;t
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>→ Assume 1 include = 1 lookup</li>
                  <li>→ Add includes without checking depth</li>
                  <li>→ Max out at exactly 10 lookups</li>
                  <li>→ Forget to recheck after ESP changes</li>
                  <li>→ Mix too many high-lookup ESPs</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Related Guides */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Related Guides</h2>
            <div className="grid gap-4 md:grid-cols-3">
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

              <Link href="/guides/spf-record-basics" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    SPF Record Basics
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Understanding SPF syntax
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
                    Optimize SPF configuration
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
                Check Your Include Chain Depth
              </h2>
              <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                Use our free SPF Record Checker to analyze your include chains
                and see exactly how many lookups each ESP consumes.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/tools/spf-record-checker">
                  <Button size="lg" className="min-w-[200px]">
                    <Search className="mr-2 h-4 w-4" />
                    Analyze SPF Record
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
                    Count lookups and validate chains
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

              <Link href="/tools/spf-surveyor" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <Settings className="text-primary mb-3 h-6 w-6" />
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    SPF Surveyor
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Deep analysis of SPF chains
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
