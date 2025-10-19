import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Key,
  Lock,
  FileSignature,
  BookOpen,
  Home,
  Mail,
  AlertTriangle,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata = {
  title: "What is DKIM? Email Signature Authentication Explained | Guide 2025",
  description:
    "DKIM (DomainKeys Identified Mail) adds cryptographic signatures to emails to prove authenticity. Learn how DKIM works, why it matters for email deliverability, and how to set up DKIM signing for your domain.",
  keywords: [
    "what is DKIM",
    "DKIM explained",
    "email signature",
    "DKIM authentication",
    "email security",
    "DKIM setup",
    "cryptographic signature",
    "email deliverability",
  ],
  openGraph: {
    title: "What is DKIM? Email Signature Authentication Explained",
    description:
      "Learn what DKIM is, how cryptographic signatures protect your emails, and why DKIM is essential for deliverability.",
    type: "article",
  },
};

export default function WhatIsDkim() {
  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
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
            <span className="text-foreground font-medium">What is DKIM?</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-border border-b">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
            <BookOpen className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-medium">
              Getting Started
            </span>
          </div>

          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            What is DKIM? Email Signature Authentication Explained
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed">
            DKIM (DomainKeys Identified Mail) adds a cryptographic signature to
            your emails to prove they haven&apos;t been tampered with and truly
            come from your domain. Learn how DKIM works, why it&apos;s critical
            for email deliverability, and how to implement it.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Simple Definition */}
        <section className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <div className="p-8">
              <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                <FileSignature className="text-primary h-8 w-8" />
              </div>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                DKIM in Simple Terms
              </h2>
              <p className="text-foreground mb-4 text-lg leading-relaxed">
                DKIM is like a <strong>tamper-proof wax seal</strong> on your
                emails. It uses encryption to prove that an email actually came
                from your domain and wasn&apos;t modified during transit. If
                anyone changes even one character, the seal breaks.
              </p>
              <div className="bg-success/10 rounded-lg p-4">
                <p className="text-success text-sm font-medium">
                  <strong>Bottom Line:</strong> DKIM proves your emails are
                  authentic and unchanged, improving deliverability and trust.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* How DKIM Works */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            How DKIM Works: The Digital Signature Process
          </h2>

          <Card>
            <div className="p-6">
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                      <span className="text-primary text-sm font-bold">1</span>
                    </div>
                    <div className="border-border mt-2 h-full w-px border-l-2" />
                  </div>
                  <div className="pb-6">
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Email Signing (Sender Side)
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      When your mail server sends an email, it creates a unique
                      signature by:
                    </p>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>
                        • Hashing key email headers (From, To, Subject, body)
                      </li>
                      <li>• Encrypting the hash with your private DKIM key</li>
                      <li>
                        • Adding the signature to the email header as
                        &quot;DKIM-Signature&quot;
                      </li>
                    </ul>
                    <div className="bg-muted/30 mt-3 rounded-lg p-3">
                      <p className="text-muted-foreground text-xs">
                        <strong>Private Key:</strong> Stored on your mail server
                        (never shared)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                      <span className="text-primary text-sm font-bold">2</span>
                    </div>
                    <div className="border-border mt-2 h-full w-px border-l-2" />
                  </div>
                  <div className="pb-6">
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Email Transmission
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      The email travels through the internet with the signature
                      attached. If anyone modifies the email (changes subject,
                      body, or From address), the signature becomes invalid.
                    </p>
                    <div className="border-border rounded-lg border p-3">
                      <p className="text-foreground mb-1 text-sm font-medium">
                        Example DKIM Header:
                      </p>
                      <code className="text-primary block text-xs">
                        DKIM-Signature: v=1; a=rsa-sha256; d=yourcompany.com;
                        s=selector1; c=relaxed/relaxed; bh=abc123...;
                        b=xyz789...
                      </code>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-success/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                      <span className="text-success text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Signature Verification (Receiver Side)
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      When Gmail/Outlook receives the email, they:
                    </p>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>
                        • Look up your public DKIM key at{" "}
                        <code>selector1._domainkey.yourcompany.com</code>
                      </li>
                      <li>• Decrypt the signature using the public key</li>
                      <li>
                        • Compare the decrypted hash to a new hash of the email
                      </li>
                      <li>• If they match: ✓ DKIM pass (authentic email)</li>
                      <li>
                        • If they don&apos;t match: ✗ DKIM fail (tampered or
                        forged)
                      </li>
                    </ul>
                    <div className="bg-success/10 mt-3 rounded-lg p-3">
                      <p className="text-success text-xs font-medium">
                        ✓ Public Key: Published in DNS (visible to everyone)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Why DKIM Matters */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Why DKIM is Critical for Email Deliverability
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <div className="bg-success/10 mb-4 inline-flex rounded-full p-3">
                  <Mail className="text-success h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  1. Higher Inbox Placement
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  Gmail and Outlook prioritize emails with valid DKIM
                  signatures. Emails without DKIM are 3x more likely to land in
                  spam. DKIM is a strong positive signal for deliverability.
                </p>
                <div className="bg-success/10 rounded-lg p-3">
                  <p className="text-success text-xs font-medium">
                    ✓ 15-20% improvement in inbox placement rates
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-success/10 mb-4 inline-flex rounded-full p-3">
                  <Lock className="text-success h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  2. Prevents Email Tampering
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  DKIM ensures no one can modify your email in transit.
                  Attackers can&apos;t change the &quot;From&quot; address, add
                  malicious links, or alter the message content without breaking
                  the signature.
                </p>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-muted-foreground text-xs">
                    Protection against man-in-the-middle attacks
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-success/10 mb-4 inline-flex rounded-full p-3">
                  <Shield className="text-success h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  3. Required for DMARC
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  DMARC relies on DKIM (and SPF) to work. Without DKIM, you
                  can&apos;t implement full DMARC protection at p=reject. DKIM
                  also survives email forwarding better than SPF.
                </p>
                <div className="bg-success/10 rounded-lg p-3">
                  <p className="text-success text-xs font-medium">
                    ✓ Essential component of DMARC authentication
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-success/10 mb-4 inline-flex rounded-full p-3">
                  <CheckCircle2 className="text-success h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  4. Builds Sender Reputation
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  Consistent DKIM signing builds your domain&apos;s reputation
                  with email providers. Over time, this improves deliverability,
                  engagement rates, and reduces spam complaints.
                </p>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-muted-foreground text-xs">
                    Long-term email marketing success depends on DKIM
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* DKIM Selectors */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Understanding DKIM Selectors
          </h2>

          <Card>
            <div className="p-6">
              <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                <Key className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-foreground mb-3 text-xl font-semibold">
                What is a Selector?
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                A <strong>selector</strong> is a label that identifies which
                DKIM key to use for verification. You can have multiple DKIM
                keys for different purposes (e.g., different mail servers, email
                service providers, or key rotation).
              </p>

              <div className="space-y-3">
                <div className="border-border rounded-lg border p-4">
                  <p className="text-foreground mb-2 text-sm font-medium">
                    Example: Primary Mail Server
                  </p>
                  <code className="text-primary block text-xs">
                    Selector: default
                    <br />
                    DNS Record: default._domainkey.yourcompany.com
                  </code>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <p className="text-foreground mb-2 text-sm font-medium">
                    Example: Salesforce Marketing Cloud
                  </p>
                  <code className="text-primary block text-xs">
                    Selector: salesforce
                    <br />
                    DNS Record: salesforce._domainkey.yourcompany.com
                  </code>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <p className="text-foreground mb-2 text-sm font-medium">
                    Example: Google Workspace
                  </p>
                  <code className="text-primary block text-xs">
                    Selector: google
                    <br />
                    DNS Record: google._domainkey.yourcompany.com
                  </code>
                </div>
              </div>

              <Alert variant="info" className="mt-6">
                <Shield className="h-5 w-5" />
                <div>
                  <div className="font-semibold">
                    Pro Tip: Use Descriptive Selectors
                  </div>
                  <div className="text-muted-foreground mt-1 text-sm">
                    Name your selectors based on the mail server or service
                    (e.g., &quot;mailchimp&quot;, &quot;hubspot&quot;,
                    &quot;server1&quot;) to easily identify which system is
                    sending which emails.
                  </div>
                </div>
              </Alert>
            </div>
          </Card>
        </section>

        {/* Common Failures */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Common DKIM Failure Reasons
          </h2>

          <div className="space-y-4">
            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="mb-3 flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-1 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Missing or Incorrect DNS Record
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      The public key isn&apos;t published in DNS, or the
                      selector/domain is wrong. Receiver can&apos;t find the key
                      to verify the signature.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success mb-1 text-sm font-medium">
                        Solution:
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Use{" "}
                        <Link
                          href="/tools/dkim-validator"
                          className="text-primary hover:underline"
                        >
                          DKIM Validator
                        </Link>{" "}
                        to verify your DNS record is published correctly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="mb-3 flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-1 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Email Modified in Transit
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Mailing list servers or email forwarders changed the email
                      content, breaking the signature. This is common with
                      discussion groups or auto-forwarding rules.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success mb-1 text-sm font-medium">
                        Solution:
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Use &quot;relaxed&quot; canonicalization (c=relaxed) to
                        allow minor formatting changes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="mb-3 flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-1 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Expired or Rotated Keys
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      The private key used to sign the email doesn&apos;t match
                      the public key in DNS anymore (key was rotated but DNS
                      wasn&apos;t updated, or vice versa).
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success mb-1 text-sm font-medium">
                        Solution:
                      </p>
                      <p className="text-muted-foreground text-xs">
                        When rotating keys, publish new public key in DNS BEFORE
                        switching mail server to new private key
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            How to Set Up DKIM
          </h2>

          <Card>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground mb-1 font-medium">
                      Step 1: Generate DKIM Keys
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Create a public/private key pair (2048-bit RSA
                      recommended). Your email service provider or mail server
                      usually provides this. See our{" "}
                      <Link
                        href="/guides/generating-dkim-keys"
                        className="text-primary hover:underline"
                      >
                        Generating DKIM Keys
                      </Link>{" "}
                      guide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground mb-1 font-medium">
                      Step 2: Publish Public Key in DNS
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Add a TXT record at{" "}
                      <code>selector._domainkey.yourdomain.com</code> with the
                      public key value. This allows receivers to verify your
                      signatures
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground mb-1 font-medium">
                      Step 3: Configure Mail Server Signing
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Install the private key on your mail server and enable
                      DKIM signing. The server will automatically sign all
                      outgoing emails
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground mb-1 font-medium">
                      Step 4: Test &amp; Verify
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Send test emails and verify DKIM passes using our{" "}
                      <Link
                        href="/tools/dkim-validator"
                        className="text-primary hover:underline"
                      >
                        DKIM Validator
                      </Link>
                      . Check email headers for &quot;DKIM=pass&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Related Guides */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-2xl font-bold">
            Related Guides
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/guides/what-is-dmarc">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    What is DMARC?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Learn how DMARC uses DKIM for email protection
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/guides/generating-dkim-keys">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Generating DKIM Keys
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Step-by-step guide to creating DKIM keys
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/guides/dkim-selector-strategy">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DKIM Selector Strategy
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Best practices for DKIM key rotation
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <div className="p-8 text-center">
              <h2 className="text-foreground mb-4 text-3xl font-bold">
                Automated DKIM Setup in Minutes
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                TrustYourInbox automatically configures DKIM for all your email
                services. We generate keys, publish DNS records, and verify
                signing is working correctly. No manual configuration needed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/demo">
                  <Button size="lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/tools/dkim-validator">
                  <Button size="lg" variant="outline">
                    Validate DKIM Free
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Free Tools */}
        <section>
          <h2 className="text-foreground mb-6 text-2xl font-bold">
            Free DKIM Tools
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/tools/dkim-validator">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DKIM Validator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Check if your DKIM signature is valid
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dkim-inspector">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DKIM Inspector
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Analyze DKIM records and troubleshoot issues
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
                    Verify DKIM, SPF, and DMARC together
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
                    Check SPF record (DKIM&apos;s companion protocol)
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dmarc-analyzer">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DMARC Analyzer
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    See how DMARC uses your DKIM signatures
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dmarc-policy-generator">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DMARC Policy Generator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Generate DMARC policy that uses DKIM
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
