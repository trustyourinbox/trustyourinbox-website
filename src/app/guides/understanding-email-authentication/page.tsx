import Link from "next/link";
import {
  Shield,
  ArrowRight,
  Mail,
  Lock,
  CheckCircle2,
  BookOpen,
  Home,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata = {
  title:
    "Understanding Email Authentication: SPF, DKIM, DMARC Explained | Guide 2025",
  description:
    "Complete guide to email authentication protocols. Learn how SPF, DKIM, and DMARC work together to prevent email fraud, improve deliverability, and protect your domain from spoofing.",
  keywords: [
    "email authentication",
    "SPF DKIM DMARC",
    "email security",
    "authentication protocols",
    "email verification",
    "domain authentication",
  ],
  openGraph: {
    title: "Email Authentication: SPF, DKIM, DMARC Explained Together",
    description:
      "Understand how SPF, DKIM, and DMARC work together for complete email security.",
    type: "article",
  },
};

export default function UnderstandingEmailAuthentication() {
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
              Email Authentication
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
            Understanding Email Authentication: SPF, DKIM & DMARC
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Email authentication uses three protocols—SPF, DKIM, and DMARC—to
            verify emails are legitimate. Learn how they work together to stop
            spoofing and improve deliverability.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* The Three Protocols */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            The Three Authentication Protocols
          </h2>
          <div className="space-y-6">
            <Card>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-xl font-semibold">
                      SPF (Sender Policy Framework)
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      <strong>What:</strong> Lists which mail servers can send
                      email for your domain
                      <br />
                      <strong>How:</strong> DNS TXT record with approved IP
                      addresses
                      <br />
                      <strong>Checks:</strong> &quot;Is this email from an
                      authorized server?&quot;
                    </p>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <code className="text-primary text-xs">
                        v=spf1 ip4:192.0.2.0 include:_spf.google.com ~all
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Lock className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-xl font-semibold">
                      DKIM (DomainKeys Identified Mail)
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      <strong>What:</strong> Cryptographic signature proving
                      email authenticity
                      <br />
                      <strong>How:</strong> Mail server signs emails with
                      private key, receivers verify with public key in DNS
                      <br />
                      <strong>Checks:</strong> &quot;Has this email been
                      tampered with?&quot;
                    </p>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <code className="text-primary text-xs">
                        DKIM-Signature: v=1; a=rsa-sha256; d=yourdomain.com...
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-success/20">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-success/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Shield className="text-success h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-xl font-semibold">
                      DMARC (Domain-based Message Authentication)
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      <strong>What:</strong> Policy telling receivers what to do
                      when SPF/DKIM fail
                      <br />
                      <strong>How:</strong> DNS TXT record with enforcement
                      policy (none/quarantine/reject) + reporting
                      <br />
                      <strong>Checks:</strong> &quot;What should I do with
                      failed emails?&quot;
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <code className="text-primary text-xs">
                        v=DMARC1; p=reject; rua=mailto:reports@yourdomain.com
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* How They Work Together */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            How They Work Together
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
                      SPF Check
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Receiving server checks if sender IP is in your SPF
                      record. Pass = authorized server. Fail = unauthorized.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 font-semibold">
                      DKIM Check
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Server verifies DKIM signature using your public key. Pass
                      = authentic email. Fail = tampered or forged.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-success/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <span className="text-success text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 font-semibold">
                      DMARC Policy
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      If both SPF and DKIM fail, DMARC policy determines action:
                      deliver (p=none), spam (p=quarantine), or block
                      (p=reject).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Quick Comparison
          </h2>
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-border bg-muted/30 border-b">
                  <tr>
                    <th className="text-foreground px-6 py-4 text-left text-sm font-semibold">
                      Feature
                    </th>
                    <th className="text-foreground px-6 py-4 text-left text-sm font-semibold">
                      SPF
                    </th>
                    <th className="text-foreground px-6 py-4 text-left text-sm font-semibold">
                      DKIM
                    </th>
                    <th className="text-foreground px-6 py-4 text-left text-sm font-semibold">
                      DMARC
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-border divide-y">
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Verifies
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      Sender IP
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      Email signature
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      Domain alignment
                    </td>
                  </tr>
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Setup
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      DNS TXT record
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      DNS + mail config
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      DNS TXT record
                    </td>
                  </tr>
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Enforcement
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      None
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      None
                    </td>
                    <td className="text-success px-6 py-4 text-sm font-medium">
                      Yes (p=reject)
                    </td>
                  </tr>
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Reports
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      No
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-sm">
                      No
                    </td>
                    <td className="text-success px-6 py-4 text-sm font-medium">
                      Yes (daily)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Implementation Order */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Implementation Order
          </h2>
          <Alert variant="info">
            <Shield className="h-5 w-5" />
            <div>
              <div className="font-semibold">Setup Sequence</div>
              <div className="text-muted-foreground mt-1 text-sm">
                1. <strong>SPF first:</strong> Authorize your mail servers
                <br />
                2. <strong>DKIM second:</strong> Enable email signing
                <br />
                3. <strong>DMARC last:</strong> Set policy and collect reports
                <br />
                <br />
                DMARC requires SPF and DKIM to function properly.
              </div>
            </div>
          </Alert>
        </section>

        {/* Related Guides */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-2xl font-bold">
            Related Guides
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/guides/spf-record-basics">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    SPF Record Basics
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Deep dive into SPF
                  </p>
                </div>
              </Card>
            </Link>
            <Link href="/guides/what-is-dkim">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    What is DKIM?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Understanding DKIM signatures
                  </p>
                </div>
              </Card>
            </Link>
            <Link href="/guides/what-is-dmarc">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    What is DMARC?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    DMARC policy explained
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <div className="p-8 text-center">
              <h2 className="text-foreground mb-4 text-3xl font-bold">
                Automated Email Authentication
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                TrustYourInbox configures SPF, DKIM, and DMARC automatically. No
                DNS expertise required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/demo">
                  <Button size="lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/tools/domain-security-checker">
                  <Button size="lg" variant="outline">
                    Check Your Authentication
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Free Tools */}
        <section>
          <h2 className="text-foreground mb-6 text-2xl font-bold">
            Free Authentication Tools
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/tools/domain-security-checker">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Domain Security Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Check SPF, DKIM, DMARC together
                  </p>
                </div>
              </Card>
            </Link>
            <Link href="/tools/spf-surveyor">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    SPF Surveyor
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Analyze your SPF record
                  </p>
                </div>
              </Card>
            </Link>
            <Link href="/tools/dkim-validator">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DKIM Validator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Verify DKIM signatures
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
