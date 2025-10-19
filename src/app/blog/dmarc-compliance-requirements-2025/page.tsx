import Link from "next/link";
import {
  Shield,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Mail,
  Key,
  BarChart2,
  ExternalLink,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata = {
  title:
    "DMARC Compliance Requirements 2025: Critical Deadlines & Implementation Guide",
  description:
    "Complete guide to 2025 DMARC compliance requirements from Google, Yahoo, and Microsoft. Learn enforcement deadlines (May 5 & July 15), bulk sender rules, and step-by-step implementation to avoid email blocking.",
  keywords: [
    "DMARC compliance 2025",
    "DMARC requirements 2025",
    "Google DMARC mandate",
    "Yahoo DMARC requirements",
    "Microsoft DMARC enforcement",
    "bulk sender requirements",
    "email authentication 2025",
    "DMARC compliance deadline",
  ],
  openGraph: {
    title:
      "DMARC Compliance Requirements 2025: Critical Deadlines & Implementation Guide",
    description:
      "Complete guide to 2025 DMARC compliance. Enforcement deadlines, bulk sender rules, and implementation steps.",
    type: "article",
    publishedTime: "2025-01-15T00:00:00Z",
  },
};

export default function DMARCComplianceRequirements2025() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="border-border border-b">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary font-medium">Industry News</span>
          </div>

          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            DMARC Compliance Requirements 2025: Critical Deadlines You
            Can&apos;t Miss
          </h1>

          <div className="text-muted-foreground mb-8 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Industry News</span>
            </div>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Google, Yahoo, and Microsoft are enforcing strict DMARC compliance
            requirements for bulk email senders in 2025. With enforcement
            deadlines on <strong>May 5</strong> and{" "}
            <strong>July 15, 2025</strong>, businesses that don&apos;t comply
            will face email blocking, spam filtering, and severe deliverability
            issues. Here&apos;s everything you need to know to avoid disruption.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Critical Deadline Alert */}
        <Alert variant="warning" className="mb-8">
          <AlertTriangle className="h-5 w-5" />
          <div>
            <div className="font-semibold">Critical Compliance Deadlines</div>
            <div className="text-muted-foreground mt-1 text-sm">
              <strong>May 5, 2025</strong>: Microsoft begins blocking
              non-compliant email
              <br />
              <strong>July 15, 2025</strong>: Full enforcement by Google, Yahoo,
              and Microsoft
            </div>
          </div>
        </Alert>

        <article className="prose-custom">
          {/* Executive Summary */}
          <section className="mb-12">
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              Executive Summary
            </h2>
            <div className="bg-muted/30 border-primary/20 rounded-lg border-l-4 p-6">
              <p className="text-foreground mb-3 text-base leading-relaxed">
                In October 2023, Google and Yahoo announced mandatory DMARC
                requirements for bulk email senders, effective February 2024.
                Microsoft joined in 2025. These requirements apply to any
                organization sending <strong>5,000+ emails per day</strong> to
                Gmail, Yahoo, Outlook, Hotmail, or Live.com addresses.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                Non-compliance results in emails being sent to spam or blocked
                entirely. This guide covers enforcement timelines, technical
                requirements, and step-by-step implementation.
              </p>
            </div>
          </section>

          {/* Who Must Comply */}
          <section className="mb-12">
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              Who Must Comply?
            </h2>
            <p className="text-muted-foreground mb-4 text-base leading-relaxed">
              These requirements apply to <strong>bulk senders</strong> - any
              organization sending 5,000 or more messages per day to Gmail,
              Yahoo, or Microsoft consumer mailboxes (Outlook.com, Hotmail.com,
              Live.com).
            </p>

            <Card className="mb-6">
              <div className="p-6">
                <h3 className="text-foreground mb-4 text-lg font-semibold">
                  Common Bulk Senders
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>
                      <strong>Marketing teams</strong> sending newsletters,
                      promotional emails, or campaigns
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>
                      <strong>SaaS platforms</strong> sending transactional
                      emails, notifications, or alerts
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>
                      <strong>E-commerce businesses</strong> with order
                      confirmations, shipping updates, receipts
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>
                      <strong>Educational institutions</strong> sending student
                      communications and announcements
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>
                      <strong>Financial services</strong> with account alerts,
                      statements, and customer communications
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <p className="text-muted-foreground text-sm italic">
              <strong>Note:</strong> Even if you send fewer than 5,000 emails
              per day, implementing DMARC is a security best practice that
              improves deliverability and protects your brand from spoofing.
            </p>
          </section>

          {/* 2025 Enforcement Timeline */}
          <section className="mb-12">
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              2025 Enforcement Timeline
            </h2>
            <div className="space-y-4">
              <Card className="border-primary/20 bg-primary/5">
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Calendar className="text-primary h-5 w-5" />
                    <h3 className="text-foreground text-lg font-semibold">
                      February 2024 (Initial Rollout)
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Google and Yahoo began enforcing requirements for bulk
                    senders. DMARC policy of p=none required at minimum.
                    One-click unsubscribe and spam rate &lt;0.3% became
                    mandatory.
                  </p>
                </div>
              </Card>

              <Card className="border-warning/20 bg-warning/5">
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle className="text-warning h-5 w-5" />
                    <h3 className="text-foreground text-lg font-semibold">
                      May 5, 2025 (Microsoft Enforcement Begins)
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Microsoft begins rejecting emails from bulk senders that
                    don&apos;t meet requirements for Outlook.com, Hotmail.com,
                    and Live.com. Non-compliant emails delivered to spam or
                    blocked outright.
                  </p>
                </div>
              </Card>

              <Card className="border-destructive/20 bg-destructive/5">
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle className="text-destructive h-5 w-5" />
                    <h3 className="text-foreground text-lg font-semibold">
                      July 15, 2025 (Full Enforcement)
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Google, Yahoo, and Microsoft finalize enforcement. Strict
                    blocking of non-compliant bulk senders. No grace period.
                    Emails that fail authentication will be rejected or sent to
                    spam with no exceptions.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Technical Requirements */}
          <section className="mb-12">
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              Technical Requirements for Compliance
            </h2>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              To comply with 2025 DMARC requirements, bulk senders must
              implement three core email authentication protocols and meet
              additional deliverability standards.
            </p>

            {/* Requirement 1: SPF */}
            <Card className="mb-4">
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-foreground text-lg font-semibold">
                    1. SPF (Sender Policy Framework)
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  SPF authenticates the IP addresses authorized to send email
                  for your domain. Publish an SPF record in DNS listing all
                  legitimate sending servers.
                </p>
                <div className="border-border bg-muted/30 rounded border p-3">
                  <code className="text-foreground font-mono text-xs">
                    v=spf1 include:_spf.google.com include:sendgrid.net -all
                  </code>
                </div>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Must stay under 10 DNS lookups (use SPF flattening if
                      needed)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Use -all (hard fail) or ~all (soft fail) qualifier
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Requirement 2: DKIM */}
            <Card className="mb-4">
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <Key className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-foreground text-lg font-semibold">
                    2. DKIM (DomainKeys Identified Mail)
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  DKIM adds cryptographic signatures to email headers, proving
                  messages haven&apos;t been altered in transit and come from
                  authorized servers.
                </p>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Use 2048-bit RSA keys (minimum 1024-bit)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Publish public key in DNS at
                      selector._domainkey.yourdomain.com
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Configure mail servers to sign outgoing messages with
                      private key
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Requirement 3: DMARC */}
            <Card className="mb-4">
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <Shield className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-foreground text-lg font-semibold">
                    3. DMARC (Required Policy Level)
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  DMARC builds on SPF and DKIM by telling email receivers what
                  to do when authentication fails. Publish a DMARC policy in DNS
                  at _dmarc.yourdomain.com.
                </p>
                <div className="border-border bg-muted/30 rounded border p-3">
                  <code className="text-foreground font-mono text-xs">
                    v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com; pct=100
                  </code>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Minimum policy: p=none</strong> (monitoring mode
                      is acceptable for Google/Yahoo compliance)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Must align with either SPF or DKIM (not both required)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="text-warning mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Recommended: p=quarantine or p=reject</strong> for
                      maximum protection after monitoring
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional Requirements */}
            <Card className="border-primary/20 bg-primary/5">
              <div className="p-6">
                <h3 className="text-foreground mb-4 text-lg font-semibold">
                  Additional Requirements Beyond Authentication
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-0.5 text-lg font-bold">
                      1
                    </div>
                    <div>
                      <div className="text-foreground font-semibold">
                        One-Click Unsubscribe
                      </div>
                      <p className="text-muted-foreground mt-1">
                        Implement RFC 8058 List-Unsubscribe-Post header for
                        one-click unsubscribe. Users must be able to unsubscribe
                        without logging in or visiting external pages.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-0.5 text-lg font-bold">
                      2
                    </div>
                    <div>
                      <div className="text-foreground font-semibold">
                        Spam Rate &lt; 0.3%
                      </div>
                      <p className="text-muted-foreground mt-1">
                        Maintain spam complaint rate below 0.3% in Google
                        Postmaster Tools. Exceeding this threshold triggers
                        blocking or spam filtering.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-0.5 text-lg font-bold">
                      3
                    </div>
                    <div>
                      <div className="text-foreground font-semibold">
                        Valid Forward/Reverse DNS
                      </div>
                      <p className="text-muted-foreground mt-1">
                        Sending IP addresses must have valid PTR records
                        (reverse DNS) matching the forward DNS. Required for
                        authentication to pass.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Implementation Guide */}
          <section className="mb-12">
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              Step-by-Step Implementation Guide
            </h2>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              Follow this proven deployment path to achieve compliance without
              disrupting email delivery.
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="border-border border-l-primary border-l-4 pl-6">
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Step 1: Audit Current Email Infrastructure (Week 1)
                </h3>
                <ul className="text-muted-foreground ml-5 list-disc space-y-2 text-sm">
                  <li>
                    Identify all systems sending email on your behalf (marketing
                    platforms, CRMs, support tools, etc.)
                  </li>
                  <li>
                    Document IP addresses and domains used by each sending
                    source
                  </li>
                  <li>
                    Check existing SPF/DKIM records using our{" "}
                    <Link
                      href="/tools/domain-security-checker"
                      className="text-primary hover:underline"
                    >
                      Domain Security Checker
                    </Link>
                  </li>
                  <li>Review email volume to confirm bulk sender status</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="border-border border-l-primary border-l-4 pl-6">
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Step 2: Implement SPF and DKIM (Week 2)
                </h3>
                <ul className="text-muted-foreground ml-5 list-disc space-y-2 text-sm">
                  <li>
                    Create or update SPF record with all authorized sending IPs
                  </li>
                  <li>Use our SPF Surveyor tool to validate and optimize</li>
                  <li>Generate DKIM keys (2048-bit) for each sending domain</li>
                  <li>Publish DKIM public keys in DNS</li>
                  <li>
                    Configure mail servers/ESPs to sign messages with private
                    keys
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="border-border border-l-primary border-l-4 pl-6">
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Step 3: Deploy DMARC in Monitor Mode (Week 3-6)
                </h3>
                <ul className="text-muted-foreground ml-5 list-disc space-y-2 text-sm">
                  <li>
                    Publish DMARC record with p=none policy to start monitoring
                  </li>
                  <li>
                    Configure rua= email to receive aggregate reports daily
                  </li>
                  <li>
                    Monitor reports for 2-4 weeks to identify authentication
                    issues
                  </li>
                  <li>
                    Fix any SPF/DKIM failures from legitimate senders before
                    enforcement
                  </li>
                  <li>
                    Use our{" "}
                    <Link
                      href="/tools/dmarc-analyzer"
                      className="text-primary hover:underline"
                    >
                      DMARC Analyzer
                    </Link>{" "}
                    to validate configuration
                  </li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="border-border border-l-primary border-l-4 pl-6">
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Step 4: Enforce DMARC Policy (Week 7+)
                </h3>
                <ul className="text-muted-foreground ml-5 list-disc space-y-2 text-sm">
                  <li>
                    After confirming all legitimate email passes authentication,
                    update to p=quarantine
                  </li>
                  <li>
                    Use our{" "}
                    <Link
                      href="/tools/dmarc-policy-impact-simulator"
                      className="text-primary hover:underline"
                    >
                      Policy Impact Simulator
                    </Link>{" "}
                    to test before changing policy
                  </li>
                  <li>
                    Monitor for 2-4 more weeks, then move to p=reject for
                    maximum protection
                  </li>
                  <li>
                    Continuously monitor aggregate reports for new
                    authentication failures
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Consequences of Non-Compliance */}
          <section className="mb-12">
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              Consequences of Non-Compliance
            </h2>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              Failing to meet 2025 DMARC requirements will have severe impacts
              on your email program and business operations.
            </p>

            <Card className="border-destructive/20 bg-destructive/5">
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <div className="text-foreground mb-1 font-semibold">
                        Email Blocking and Spam Filtering
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Non-compliant emails will be automatically sent to spam
                        folders or blocked entirely. Gmail, Yahoo, and Microsoft
                        will reject messages that fail authentication.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <div className="text-foreground mb-1 font-semibold">
                        Revenue Loss
                      </div>
                      <p className="text-muted-foreground text-sm">
                        E-commerce order confirmations, shipping notifications,
                        and marketing campaigns won&apos;t reach customers. Lost
                        sales, abandoned carts, and reduced customer engagement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <div className="text-foreground mb-1 font-semibold">
                        Operational Disruption
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Critical business communications (password resets,
                        account alerts, system notifications) may not be
                        delivered. Customer support and operational workflows
                        disrupted.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <div className="text-foreground mb-1 font-semibold">
                        Brand Reputation Damage
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Customers may perceive your organization as
                        untrustworthy or technically incompetent when emails
                        don&apos;t arrive. Competitors with proper
                        authentication gain advantage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Free Tools CTA */}
          <section className="mb-12">
            <Card className="border-primary/20 bg-primary/5">
              <div className="p-8 text-center">
                <Shield className="text-primary mx-auto mb-4 h-12 w-12" />
                <h2 className="text-foreground mb-3 text-2xl font-bold">
                  Get Compliant in 4 Weeks with Our Free Tools
                </h2>
                <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-base">
                  TrustYourInbox provides all the tools you need to achieve 2025
                  DMARC compliance - for free. Check your current status,
                  generate policies, and analyze reports.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/tools/domain-security-checker">
                    <Button size="lg">
                      <Shield className="mr-2 h-4 w-4" />
                      Check My Domain
                    </Button>
                  </Link>
                  <Link href="/tools/dmarc-policy-generator">
                    <Button size="lg" variant="outline">
                      Generate DMARC Policy
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              Conclusion
            </h2>
            <p className="text-muted-foreground mb-4 text-base leading-relaxed">
              The 2025 DMARC compliance requirements from Google, Yahoo, and
              Microsoft represent a major shift in email authentication
              standards. With enforcement deadlines on <strong>May 5</strong>{" "}
              and <strong>July 15, 2025</strong>, bulk senders must act now to
              avoid email blocking and deliverability issues.
            </p>
            <p className="text-muted-foreground mb-4 text-base leading-relaxed">
              While implementing SPF, DKIM, and DMARC may seem complex, the
              process is straightforward with the right tools and guidance.
              Start with monitoring mode (p=none) to understand your email
              ecosystem, fix authentication issues, then gradually enforce
              stricter policies.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Don&apos;t wait until the deadline. Begin your compliance journey
              today using our free tools, or{" "}
              <Link href="/demo" className="text-primary hover:underline">
                schedule a demo
              </Link>{" "}
              to see how our automated platform can deploy DMARC 4x faster than
              manual implementation.
            </p>
          </section>
        </article>

        {/* Related Articles */}
        <div className="border-border mt-12 border-t pt-8">
          <h3 className="text-foreground mb-6 text-xl font-bold">
            Related Resources
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/tools/dmarc-analyzer"
              className="border-border bg-card hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-lg"
            >
              <div className="mb-2 flex items-center gap-2">
                <Shield className="text-primary h-5 w-5" />
                <h4 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                  DMARC Analyzer
                </h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Check your current DMARC configuration and compliance status
              </p>
            </Link>

            <Link
              href="/tools/dmarc-policy-generator"
              className="border-border bg-card hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-lg"
            >
              <div className="mb-2 flex items-center gap-2">
                <BarChart2 className="text-primary h-5 w-5" />
                <h4 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                  DMARC Policy Generator
                </h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Generate compliant DMARC records in seconds
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
