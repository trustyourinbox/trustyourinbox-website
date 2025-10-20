"use client";

import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Search,
  Key,
  RefreshCw,
  FileText,
  Shield,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title: "DKIM Troubleshooting: Fix Common DKIM Issues & Errors | Guide 2025",
  description:
    "Fix DKIM signature failures, DNS record errors, and authentication issues. Comprehensive troubleshooting guide for DKIM problems with step-by-step solutions.",
  keywords: [
    "DKIM troubleshooting",
    "DKIM signature failed",
    "DKIM DNS error",
    "fix DKIM",
    "DKIM not working",
    "DKIM authentication failed",
    "DKIM permerror",
    "DKIM temperror",
    "DKIM selector not found",
    "DKIM key mismatch",
  ],
  openGraph: {
    title: "DKIM Troubleshooting: Fix Common DKIM Issues & Errors | Guide",
    description:
      "Fix DKIM signature failures, DNS record errors, and authentication issues. Step-by-step solutions for common DKIM problems.",
    type: "article",
    url: "https://trustyourinbox.com/guides/dkim-troubleshooting",
  },
};

export default function DKIMTroubleshootingPage() {
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
              DKIM Troubleshooting
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <FileText className="text-primary mr-2 h-4 w-4" />
              <span className="text-primary">DKIM Setup</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              DKIM Troubleshooting: Fix Common Issues
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              DKIM signature failures? DNS errors? Authentication issues? This
              guide provides step-by-step solutions to the most common DKIM
              problems you&apos;ll encounter.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">10 min read</span>
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
            {/* Common DKIM Errors */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-destructive/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <XCircle className="text-destructive h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Common DKIM Errors</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    1. DKIM Signature Failed (dkim=fail)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The most common DKIM error. The signature exists but
                    doesn&apos;t match the email content.
                  </p>
                  <Alert variant="warning" className="mb-4">
                    <AlertTriangle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Common Cause</div>
                      <div className="text-sm">
                        Email content was modified in transit (mailing lists,
                        forwarding, spam filters adding footers).
                      </div>
                    </div>
                  </Alert>
                  <p className="text-muted-foreground mb-3">
                    <strong>How to diagnose:</strong>
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>
                      Check DMARC aggregate reports for failing IP addresses
                    </li>
                    <li>Look for pattern: Do failures come from one source?</li>
                    <li>
                      Test email directly (not through mailing list/forwarder)
                    </li>
                    <li>
                      Compare DKIM signature headers with body hash in email
                      source
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    <strong>Solutions:</strong>
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>
                      If failures are from mailing lists: Add
                      &quot;List-Unsubscribe&quot; header to reduce
                      modifications
                    </li>
                    <li>
                      If failures are from forwarders: Use SRS (Sender Rewriting
                      Scheme) or ARC
                    </li>
                    <li>
                      Ensure mail server isn&apos;t modifying content after
                      signing
                    </li>
                    <li>Use relaxed canonicalization (c=relaxed/relaxed)</li>
                  </ul>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    2. DKIM PermError (Permanent Error)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    DNS record is malformed, missing, or has syntax errors.
                  </p>
                  <Alert variant="error" className="mb-4">
                    <XCircle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Critical Issue</div>
                      <div className="text-sm">
                        PermError means DKIM is completely broken. Receiving
                        servers cannot validate your signatures.
                      </div>
                    </div>
                  </Alert>
                  <p className="text-muted-foreground mb-3">
                    <strong>Common causes:</strong>
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>
                      DNS record doesn&apos;t exist for selector (deleted or
                      never published)
                    </li>
                    <li>
                      Public key missing or malformed (p= tag empty or invalid
                      Base64)
                    </li>
                    <li>DNS record exceeds 255 character limit per string</li>
                    <li>Incorrect DNS record type (should be TXT)</li>
                    <li>Special characters not properly escaped</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    <strong>How to fix:</strong>
                  </p>
                  <div className="bg-muted/50 mt-3 rounded-md p-4 font-mono text-sm">
                    <p className="text-muted-foreground mb-2">
                      # 1. Test DNS lookup manually
                    </p>
                    <p>dig TXT selector._domainkey.yourdomain.com</p>
                    <p className="text-muted-foreground mt-4 mb-2">
                      # 2. If no record found, publish it correctly:
                    </p>
                    <p>selector._domainkey.yourdomain.com TXT</p>
                    <p>&quot;v=DKIM1; k=rsa; p=MIGfMA0GCS...&quot;</p>
                    <p className="text-muted-foreground mt-4 mb-2">
                      # 3. If record too long (&gt;255 chars), split it:
                    </p>
                    <p>
                      &quot;v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GN&quot;
                    </p>
                    <p>&quot;ADCBiQKBgQC...&quot; (continued)</p>
                  </div>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    3. DKIM TempError (Temporary Error)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    DNS lookup failed due to timeout or temporary DNS issues.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <strong>Common causes:</strong>
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>DNS server temporarily down or slow to respond</li>
                    <li>
                      Network issues between receiving server and your DNS
                    </li>
                    <li>DNS rate limiting or firewall blocking</li>
                    <li>Recently published record not yet propagated</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    <strong>Solutions:</strong>
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>
                      Wait and retry - TempErrors usually resolve themselves
                    </li>
                    <li>
                      Check DNS server uptime and response times (use monitoring
                      tools)
                    </li>
                    <li>
                      Use reliable DNS providers (Cloudflare, Route53, etc.)
                    </li>
                    <li>Set appropriate TTL values (3600-86400 seconds)</li>
                  </ul>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    4. DKIM Selector Not Found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Email header references a selector that doesn&apos;t exist
                    in DNS.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <strong>Example error:</strong>
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
                    <p>DKIM-Signature: v=1; a=rsa-sha256;</p>
                    <p className="text-destructive">
                      s=march2025; (← selector)
                    </p>
                    <p>d=yourdomain.com;</p>
                    <p className="text-muted-foreground mt-2">
                      # But DNS lookup fails:
                    </p>
                    <p className="text-destructive">
                      march2025._domainkey.yourdomain.com NOT FOUND
                    </p>
                  </div>
                  <p className="text-muted-foreground mt-4 mb-3">
                    <strong>Solutions:</strong>
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>
                      Verify selector name in email header matches DNS record
                      name
                    </li>
                    <li>Check for typos in selector name</li>
                    <li>
                      If recently rotated keys, ensure old selector still
                      published for 48 hours
                    </li>
                    <li>
                      Publish the missing selector or update mail server config
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Diagnostic Steps */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Search className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Step-by-Step DKIM Diagnostics
                </h2>
              </div>
              <div className="space-y-4">
                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">
                      Check Email Source
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    View raw email source to see DKIM signature headers and
                    authentication results. Look for DKIM-Signature header and
                    Authentication-Results.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">
                      Verify DNS Record Exists
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Use dig or nslookup to check DNS:
                  </p>
                  <div className="bg-background rounded-md p-3 font-mono text-xs">
                    <p>dig TXT selector._domainkey.yourdomain.com</p>
                    <p className="text-muted-foreground mt-2">
                      # Should return: v=DKIM1; k=rsa; p=...
                    </p>
                  </div>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">
                      Validate Public Key Format
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Public key must be valid Base64 encoded string. No spaces,
                    no line breaks in p= tag. Should start with MII or MIG for
                    RSA keys.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      4
                    </div>
                    <h3 className="text-lg font-semibold">
                      Test Private/Public Key Match
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Generate hash from both keys and compare:
                  </p>
                  <div className="bg-background rounded-md p-3 font-mono text-xs">
                    <p>
                      openssl rsa -in private.pem -pubout -outform PEM | openssl
                      md5
                    </p>
                    <p>echo &quot;p=value&quot; | base64 -d | openssl md5</p>
                    <p className="text-muted-foreground mt-2">
                      # Hashes should match
                    </p>
                  </div>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      5
                    </div>
                    <h3 className="text-lg font-semibold">Send Test Email</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Send to Gmail or mail-tester.com and check
                    Authentication-Results header. Should show dkim=pass.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      6
                    </div>
                    <h3 className="text-lg font-semibold">
                      Check DMARC Reports
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Review aggregate reports for DKIM failures. Look for
                    patterns: specific IPs, ESPs, or time periods with failures.
                  </p>
                </Card>
              </div>
            </Card>

            {/* Quick Fixes */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-success/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <CheckCircle className="text-success h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Quick Fix Checklist</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">DNS Record Published</p>
                    <p className="text-muted-foreground text-sm">
                      selector._domainkey.yourdomain.com TXT record exists
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Selector Name Matches</p>
                    <p className="text-muted-foreground text-sm">
                      Email header s= tag matches DNS record name
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Public Key Valid Base64</p>
                    <p className="text-muted-foreground text-sm">
                      p= tag contains valid Base64 encoded RSA public key
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Private/Public Keys Match</p>
                    <p className="text-muted-foreground text-sm">
                      Private key on mail server corresponds to public key in
                      DNS
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">DNS Propagated (48 hours)</p>
                    <p className="text-muted-foreground text-sm">
                      Wait 48 hours after DNS changes before testing globally
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Relaxed Canonicalization Used
                    </p>
                    <p className="text-muted-foreground text-sm">
                      c=relaxed/relaxed allows minor modifications without
                      breaking signatures
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Key Size 2048-bit or Higher</p>
                    <p className="text-muted-foreground text-sm">
                      1024-bit keys deprecated by Gmail/Microsoft - use 2048-bit
                      RSA
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Advanced Troubleshooting */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <RefreshCw className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Advanced Troubleshooting</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Key Rotation Gone Wrong
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    If DKIM suddenly fails after rotating keys:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>
                      Verify new selector is published in DNS and propagated
                      globally
                    </li>
                    <li>
                      Check mail server config updated to use new selector name
                    </li>
                    <li>
                      Ensure old selector still active for 48 hours (in-flight
                      emails)
                    </li>
                    <li>Test new selector with dig before removing old one</li>
                  </ul>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Multiple Email Services
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Each ESP should use its own DKIM selector:
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
                    <p>
                      google._domainkey.yourdomain.com TXT
                      &quot;v=DKIM1;...&quot;
                    </p>
                    <p>
                      sendgrid._domainkey.yourdomain.com TXT
                      &quot;v=DKIM1;...&quot;
                    </p>
                    <p>
                      salesforce._domainkey.yourdomain.com TXT
                      &quot;v=DKIM1;...&quot;
                    </p>
                  </div>
                  <p className="text-muted-foreground mt-3">
                    This prevents conflicts and makes troubleshooting easier.
                  </p>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Signature Expired
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    DKIM signatures have optional expiration (x= tag):
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
                    <p>DKIM-Signature: v=1; a=rsa-sha256;</p>
                    <p>s=selector; d=domain.com;</p>
                    <p className="text-destructive">
                      x=1735689600; (← signature expires Jan 1, 2025)
                    </p>
                  </div>
                  <p className="text-muted-foreground mt-3">
                    If signatures expire too quickly, extend expiration or
                    remove x= tag entirely.
                  </p>
                </div>
              </div>
            </Card>

            {/* Prevention Best Practices */}
            <Alert variant="info">
              <Key className="h-4 w-4" />
              <div>
                <div className="mb-2 font-semibold">
                  Prevention Best Practices
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Monitor DMARC reports weekly for DKIM failures</li>
                  <li>• Set up alerts for DNS record changes or deletions</li>
                  <li>
                    • Use reliable DNS providers with high uptime (99.9%+)
                  </li>
                  <li>• Test DKIM after any mail server or DNS changes</li>
                  <li>
                    • Document all selectors, keys, and rotation schedules
                  </li>
                  <li>
                    • Rotate keys every 6-12 months following zero-downtime
                    process
                  </li>
                  <li>
                    • Use c=relaxed/relaxed to tolerate minor content
                    modifications
                  </li>
                </ul>
              </div>
            </Alert>

            {/* Related Guides */}
            <Card className="bg-secondary/30 p-8">
              <h2 className="mb-6 text-2xl font-bold">Related Guides</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/guides/what-is-dkim"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    What is DKIM?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Understanding DKIM signatures
                  </p>
                </Link>
                <Link
                  href="/guides/generating-dkim-keys"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    Generating DKIM Keys
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Create secure RSA key pairs
                  </p>
                </Link>
                <Link
                  href="/guides/dkim-selector-strategy"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    DKIM Selector Strategy
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Manage multiple selectors
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
              Automatic DKIM Monitoring & Alerts
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              TrustYourInbox monitors your DKIM health 24/7 and alerts you
              instantly when issues are detected. No more manual
              troubleshooting.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">See Platform Demo</Link>
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
              Free DKIM Testing Tools
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
                  Check DKIM alignment in reports
                </p>
              </Link>
              <Link
                href="/tools/email-header-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <FileText className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  Email Header Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Debug DKIM signatures
                </p>
              </Link>
              <Link
                href="/tools/dmarc-policy-generator"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Shield className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  Policy Generator
                </h3>
                <p className="text-muted-foreground text-sm">
                  Create DMARC records
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
