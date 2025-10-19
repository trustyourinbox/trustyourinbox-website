import Link from "next/link";
import {
  Shield,
  ArrowRight,
  Mail,
  Server,
  CheckCircle2,
  BookOpen,
  Home,
  AlertTriangle,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata = {
  title: "SPF Record Basics: Email Server Authorization Explained | Guide 2025",
  description:
    "Learn SPF (Sender Policy Framework) basics. Understand how SPF records authorize mail servers, prevent spoofing, and improve deliverability. Includes syntax guide and examples.",
  keywords: [
    "SPF record",
    "SPF basics",
    "Sender Policy Framework",
    "email authentication",
    "SPF syntax",
    "authorize mail servers",
  ],
  openGraph: {
    title: "SPF Record Basics: Authorize Your Mail Servers",
    description:
      "Complete beginner guide to SPF records and email server authorization.",
    type: "article",
  },
};

export default function SpfRecordBasics() {
  return (
    <div className="bg-background min-h-screen">
      <div className="border-border border-b">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4" />
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/guides"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Guides
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">
              SPF Record Basics
            </span>
          </div>
        </div>
      </div>

      <div className="border-border border-b">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
            <BookOpen className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-medium">
              Getting Started
            </span>
          </div>
          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            SPF Record Basics: Authorize Your Mail Servers
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            SPF (Sender Policy Framework) tells email receivers which servers
            are authorized to send email for your domain. Learn how SPF works,
            basic syntax, and how to create your first SPF record.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <div className="p-8">
              <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                <Server className="text-primary h-8 w-8" />
              </div>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                SPF in Simple Terms
              </h2>
              <p className="text-foreground mb-4 text-lg leading-relaxed">
                SPF is a <strong>whitelist of authorized mail servers</strong>{" "}
                for your domain. It&apos;s a DNS record that says &quot;only
                these IP addresses can send email as @yourdomain.com&quot;.
              </p>
              <div className="bg-success/10 rounded-lg p-4">
                <p className="text-success text-sm font-medium">
                  <strong>Bottom Line:</strong> SPF prevents spammers from
                  forging your domain by listing approved senders.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            How SPF Works
          </h2>
          <Card>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 font-semibold">
                      Email Sent
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Someone sends an email claiming to be from{" "}
                      <code>you@yourdomain.com</code> from IP address
                      192.0.2.100
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 font-semibold">
                      SPF Lookup
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Receiving server checks DNS for your SPF record at{" "}
                      <code>yourdomain.com</code>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-success/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <span className="text-success text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 font-semibold">
                      Verification
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      If 192.0.2.100 is in your SPF record → ✓ SPF pass
                      (authorized)
                      <br />
                      If not in your SPF record → ✗ SPF fail (unauthorized)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            SPF Record Syntax
          </h2>
          <div className="space-y-6">
            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-3 text-xl font-semibold">
                  Basic Structure
                </h3>
                <div className="bg-muted/30 rounded-lg p-4">
                  <code className="text-primary block text-sm">
                    v=spf1 ip4:192.0.2.0 include:_spf.google.com ~all
                  </code>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="border-border rounded-lg border p-3">
                    <p className="text-foreground mb-1 text-sm font-medium">
                      v=spf1
                    </p>
                    <p className="text-muted-foreground text-xs">
                      SPF version (always v=spf1)
                    </p>
                  </div>
                  <div className="border-border rounded-lg border p-3">
                    <p className="text-foreground mb-1 text-sm font-medium">
                      ip4:192.0.2.0
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Authorize specific IPv4 address
                    </p>
                  </div>
                  <div className="border-border rounded-lg border p-3">
                    <p className="text-foreground mb-1 text-sm font-medium">
                      include:_spf.google.com
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Include another domain&apos;s SPF record (for Google
                      Workspace)
                    </p>
                  </div>
                  <div className="border-border rounded-lg border p-3">
                    <p className="text-foreground mb-1 text-sm font-medium">
                      ~all
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Soft fail for everything else (recommended for testing)
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-3 text-xl font-semibold">
                  Common Mechanisms
                </h3>
                <div className="space-y-3">
                  <div className="border-border rounded-lg border p-3">
                    <code className="text-primary mb-1 block text-sm">
                      ip4:192.0.2.0/24
                    </code>
                    <p className="text-muted-foreground text-xs">
                      Authorize IPv4 address or range
                    </p>
                  </div>
                  <div className="border-border rounded-lg border p-3">
                    <code className="text-primary mb-1 block text-sm">
                      ip6:2001:db8::1
                    </code>
                    <p className="text-muted-foreground text-xs">
                      Authorize IPv6 address
                    </p>
                  </div>
                  <div className="border-border rounded-lg border p-3">
                    <code className="text-primary mb-1 block text-sm">
                      include:_spf.example.com
                    </code>
                    <p className="text-muted-foreground text-xs">
                      Include another SPF record (for ESPs)
                    </p>
                  </div>
                  <div className="border-border rounded-lg border p-3">
                    <code className="text-primary mb-1 block text-sm">mx</code>
                    <p className="text-muted-foreground text-xs">
                      Authorize servers in MX records
                    </p>
                  </div>
                  <div className="border-border rounded-lg border p-3">
                    <code className="text-primary mb-1 block text-sm">a</code>
                    <p className="text-muted-foreground text-xs">
                      Authorize domain&apos;s A record IP
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-3 text-xl font-semibold">
                  Qualifiers (All Tag)
                </h3>
                <div className="space-y-3">
                  <div className="border-border rounded-lg border p-3">
                    <code className="text-primary mb-1 block text-sm">
                      ~all (SoftFail)
                    </code>
                    <p className="text-muted-foreground text-xs">
                      Recommended for testing - accept but mark as suspicious
                    </p>
                  </div>
                  <div className="border-success/30 rounded-lg border p-3">
                    <code className="text-success mb-1 block text-sm">
                      -all (Fail)
                    </code>
                    <p className="text-muted-foreground text-xs">
                      Recommended for production - reject unauthorized senders
                    </p>
                  </div>
                  <div className="border-border rounded-lg border p-3">
                    <code className="text-primary mb-1 block text-sm">
                      ?all (Neutral)
                    </code>
                    <p className="text-muted-foreground text-xs">
                      No policy - not recommended
                    </p>
                  </div>
                  <div className="border-border rounded-lg border p-3">
                    <code className="text-primary mb-1 block text-sm">
                      +all (Pass)
                    </code>
                    <p className="text-muted-foreground text-xs">
                      Allow all - NEVER use this!
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Real-World Examples
          </h2>
          <div className="space-y-4">
            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-2 font-semibold">
                  Google Workspace Only
                </h3>
                <div className="bg-muted/30 rounded-lg p-3">
                  <code className="text-primary block text-sm">
                    v=spf1 include:_spf.google.com ~all
                  </code>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  For companies using only Google Workspace for email
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-2 font-semibold">
                  Microsoft 365 + Marketing Platform
                </h3>
                <div className="bg-muted/30 rounded-lg p-3">
                  <code className="text-primary block text-sm">
                    v=spf1 include:spf.protection.outlook.com
                    include:servers.mcsv.net ~all
                  </code>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Microsoft 365 + Mailchimp email sending
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-2 font-semibold">
                  Multiple Services + Own Server
                </h3>
                <div className="bg-muted/30 rounded-lg p-3">
                  <code className="text-primary block text-sm">
                    v=spf1 ip4:192.0.2.0 include:_spf.google.com
                    include:sendgrid.net -all
                  </code>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Own mail server + Google Workspace + SendGrid with strict
                  policy
                </p>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Important Limits
          </h2>
          <Alert variant="warning">
            <AlertTriangle className="h-5 w-5" />
            <div>
              <div className="font-semibold">10 DNS Lookup Limit</div>
              <div className="text-muted-foreground mt-1 text-sm">
                SPF has a hard limit of 10 DNS lookups. Each{" "}
                <code>include:</code> counts as one lookup. Exceeding this
                causes SPF PermError and authentication failure. Use{" "}
                <Link
                  href="/tools/spf-surveyor"
                  className="text-primary hover:underline"
                >
                  SPF Surveyor
                </Link>{" "}
                to check your lookup count.
              </div>
            </div>
          </Alert>
        </section>

        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-2xl font-bold">
            Related Guides
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/guides/understanding-email-authentication">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Email Authentication
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    How SPF fits with DKIM and DMARC
                  </p>
                </div>
              </Card>
            </Link>
            <Link href="/guides/spf-include-chains">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    SPF Include Chains
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Managing multiple includes
                  </p>
                </div>
              </Card>
            </Link>
            <Link href="/guides/spf-10-dns-lookup-limit">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    SPF Lookup Limit
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Fix PermError issues
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <div className="p-8 text-center">
              <h2 className="text-foreground mb-4 text-3xl font-bold">
                Automated SPF Management
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                TrustYourInbox automatically configures SPF for all your email
                services and keeps it updated.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/demo">
                  <Button size="lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/tools/spf-surveyor">
                  <Button size="lg" variant="outline">
                    Check Your SPF Free
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-foreground mb-6 text-2xl font-bold">
            Free SPF Tools
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/tools/spf-surveyor">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    SPF Surveyor
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Check SPF record and lookup count
                  </p>
                </div>
              </Card>
            </Link>
            <Link href="/tools/domain-security-checker">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Domain Security Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Verify SPF, DKIM, DMARC
                  </p>
                </div>
              </Card>
            </Link>
            <Link href="/tools/dmarc-policy-generator">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DMARC Generator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Create DMARC policy (requires SPF)
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
