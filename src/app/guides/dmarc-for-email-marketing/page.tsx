"use client";

import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Users,
  Mail,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Target,
  BarChart3,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title:
    "DMARC for Email Marketing: Best Practices for Bulk Email | Guide 2025",
  description:
    "Optimize email marketing deliverability with DMARC. Learn best practices for bulk email campaigns with Mailchimp, SendGrid, and other ESPs to improve inbox placement.",
  keywords: [
    "DMARC email marketing",
    "bulk email DMARC",
    "email marketing deliverability",
    "DMARC Mailchimp",
    "DMARC SendGrid",
    "marketing email authentication",
    "bulk email SPF DKIM",
    "email campaign deliverability",
  ],
  openGraph: {
    title: "DMARC for Email Marketing: Best Practices for Bulk Email",
    description:
      "Improve email marketing deliverability with proper DMARC, SPF, and DKIM configuration for bulk email campaigns.",
    type: "article",
    url: "https://trustyourinbox.com/guides/dmarc-for-email-marketing",
  },
};

export default function DMARCForEmailMarketingPage() {
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
              DMARC for Email Marketing
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <Users className="text-primary mr-2 h-4 w-4" />
              <span className="text-primary">Advanced Topics</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              DMARC for Email Marketing
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Email marketing is one of the highest-value communication
              channels, but bulk email has unique deliverability challenges.
              Learn how to configure DMARC for maximum inbox placement.
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
            {/* Why DMARC Matters for Marketing */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Target className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Why DMARC Matters for Marketing
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Email marketing has unique deliverability requirements that make
                DMARC critical:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Higher Volume = Higher Scrutiny
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Gmail, Outlook, and Yahoo monitor bulk email senders more
                      closely. DMARC p=reject significantly improves sender
                      reputation and inbox placement rates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BarChart3 className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Measurable Impact on ROI</p>
                    <p className="text-muted-foreground text-sm">
                      Industry data shows DMARC enforcement increases inbox
                      placement by 10-15% on average. For a 100,000 subscriber
                      list, that&apos;s 10,000-15,000 more emails delivered.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Brand Protection from Spoofing
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Phishers target your marketing campaigns by spoofing your
                      domain. DMARC p=reject prevents them from sending fake
                      promotional emails that damage your brand.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Required for Advanced Features
                    </p>
                    <p className="text-muted-foreground text-sm">
                      BIMI (Brand Indicators for Message Identification)
                      requires DMARC p=quarantine or p=reject. BIMI displays
                      your logo in Gmail/Outlook inboxes, increasing open rates
                      by 10-20%.
                    </p>
                  </div>
                </div>
              </div>
              <Alert variant="info" className="mt-6">
                <CheckCircle className="h-4 w-4" />
                <div>
                  <div className="font-semibold">
                    Data: DMARC Impact on Marketing
                  </div>
                  <div className="text-sm">
                    Organizations that implement DMARC p=reject see average
                    inbox placement rates improve from 85% to 95%. That&apos;s a
                    12% increase in emails reaching subscribers.
                  </div>
                </div>
              </Alert>
            </Card>

            {/* Marketing-Specific Challenges */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-destructive/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <AlertTriangle className="text-destructive h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Email Marketing Authentication Challenges
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    1. Email Forwarding and List-Unsubscribe
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Marketing emails are frequently forwarded and shared. This
                    breaks SPF alignment:
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 text-sm">
                    <p className="mb-2">
                      <strong>Original send:</strong>
                    </p>
                    <p className="font-mono text-xs">
                      From: marketing@yourdomain.com
                    </p>
                    <p className="font-mono text-xs">
                      SPF: PASS (SendGrid IP authorized)
                    </p>
                    <p className="font-mono text-xs">DKIM: PASS</p>
                    <p className="mt-3 mb-2">
                      <strong>After forwarding:</strong>
                    </p>
                    <p className="font-mono text-xs">
                      From: marketing@yourdomain.com
                    </p>
                    <p className="text-destructive font-mono text-xs">
                      SPF: FAIL (forwarded from user&apos;s Gmail, not SendGrid)
                    </p>
                    <p className="font-mono text-xs">
                      DKIM: PASS (still valid)
                    </p>
                  </div>
                  <Alert variant="info" className="mt-4">
                    <CheckCircle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Solution</div>
                      <div className="text-sm">
                        DKIM alignment still passes! Marketing emails must have
                        DKIM configured. SPF alone is not sufficient for
                        forwarding scenarios.
                      </div>
                    </div>
                  </Alert>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    2. High Volume Triggers Throttling
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Sending 100,000+ emails per campaign can trigger
                    rate-limiting and spam filters:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>
                      Gmail limits bulk senders to ~500-1,000 emails/hour
                      without DMARC
                    </li>
                    <li>
                      With DMARC p=reject, limits increase to 10,000+/hour for
                      trusted senders
                    </li>
                    <li>
                      Yahoo and Outlook have similar throttling based on sender
                      reputation
                    </li>
                  </ul>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    3. Engagement Metrics and DMARC
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    ISPs track engagement (opens, clicks, unsubscribes) to
                    determine sender reputation:
                  </p>
                  <div className="bg-muted/50 rounded-md p-4">
                    <p className="text-sm">
                      <strong>Without DMARC:</strong> Low engagement emails
                      (newsletters, promotions) go to spam folder, reducing
                      future deliverability.
                    </p>
                    <p className="mt-2 text-sm">
                      <strong>With DMARC p=reject:</strong> Authenticated sender
                      gets benefit of the doubt. Emails start in inbox, giving
                      you a chance to earn engagement.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Best Practices for Marketing */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <CheckCircle className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  DMARC Best Practices for Email Marketing
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    1. Use a Dedicated Marketing Subdomain
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Separate marketing campaigns from transactional email:
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
                    <p className="text-muted-foreground mb-2">
                      # Transactional email (high engagement, high priority)
                    </p>
                    <p>noreply@yourdomain.com</p>
                    <p>support@yourdomain.com</p>
                    <p className="text-muted-foreground mt-4 mb-2">
                      # Marketing campaigns (lower engagement, bulk sends)
                    </p>
                    <p className="text-primary font-semibold">
                      newsletter@marketing.yourdomain.com
                    </p>
                    <p className="text-primary font-semibold">
                      promotions@marketing.yourdomain.com
                    </p>
                  </div>
                  <Alert variant="info" className="mt-4">
                    <CheckCircle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Benefits</div>
                      <div className="text-sm">
                        Subdomain isolation protects main domain reputation. If
                        marketing emails have low engagement, it doesn&apos;t
                        affect transactional email deliverability.
                      </div>
                    </div>
                  </Alert>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    2. Configure DKIM for All Marketing ESPs
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    DKIM is MORE important than SPF for marketing because it
                    survives forwarding:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Mailchimp</p>
                        <p className="text-muted-foreground text-sm">
                          Settings → Domains → Authenticate → Add CNAME records
                          (k1._domainkey, k2._domainkey)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">SendGrid</p>
                        <p className="text-muted-foreground text-sm">
                          Settings → Sender Authentication → Authenticate Domain
                          → Add s1/s2 CNAME records
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">HubSpot</p>
                        <p className="text-muted-foreground text-sm">
                          Settings → Domains & URLs → Email Sending Domain →
                          Connect Domain → Add DKIM records
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    3. Start with p=none for Marketing Subdomain
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Monitor marketing email authentication for 2-4 weeks:
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
                    <p className="text-muted-foreground mb-2">
                      # _dmarc.marketing.yourdomain.com TXT
                    </p>
                    <p>v=DMARC1; p=none;</p>
                    <p>rua=mailto:marketing-dmarc@yourdomain.com;</p>
                    <p>pct=100</p>
                  </div>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Check reports to ensure all marketing campaigns pass SPF
                    and/or DKIM alignment before moving to enforcement.
                  </p>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    4. Progressive Enforcement for Marketing
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Use pct= tag to gradually enforce policy on marketing
                    emails:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-muted-foreground mb-2 text-sm font-semibold">
                        Week 1-2: Test on 10% of traffic
                      </p>
                      <div className="bg-muted/50 rounded-md p-3 font-mono text-xs">
                        <p>v=DMARC1; p=quarantine; pct=10;</p>
                        <p>rua=mailto:marketing-dmarc@yourdomain.com</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-2 text-sm font-semibold">
                        Week 3-4: Increase to 50%
                      </p>
                      <div className="bg-muted/50 rounded-md p-3 font-mono text-xs">
                        <p>v=DMARC1; p=quarantine; pct=50;</p>
                        <p>rua=mailto:marketing-dmarc@yourdomain.com</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-2 text-sm font-semibold">
                        Week 5+: Full enforcement
                      </p>
                      <div className="bg-muted/50 rounded-md p-3 font-mono text-xs">
                        <p>v=DMARC1; p=reject; pct=100;</p>
                        <p>rua=mailto:marketing-dmarc@yourdomain.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    5. Monitor Campaign Performance Weekly
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Track these metrics to measure DMARC impact on marketing:
                  </p>
                  <div className="space-y-3">
                    <div className="border-border rounded-lg border p-4">
                      <p className="mb-1 font-semibold">Inbox Placement Rate</p>
                      <p className="text-muted-foreground text-sm">
                        % of emails delivered to inbox (not spam). Target: 95%+
                        with DMARC p=reject.
                      </p>
                    </div>
                    <div className="border-border rounded-lg border p-4">
                      <p className="mb-1 font-semibold">Open Rate</p>
                      <p className="text-muted-foreground text-sm">
                        % of delivered emails opened. Improved inbox placement
                        increases opens by 10-15%.
                      </p>
                    </div>
                    <div className="border-border rounded-lg border p-4">
                      <p className="mb-1 font-semibold">Bounce Rate</p>
                      <p className="text-muted-foreground text-sm">
                        % of emails rejected by receiving servers. Should stay
                        low (&lt;2%) with proper DMARC.
                      </p>
                    </div>
                    <div className="border-border rounded-lg border p-4">
                      <p className="mb-1 font-semibold">
                        DMARC Compliance Rate
                      </p>
                      <p className="text-muted-foreground text-sm">
                        % of marketing emails passing DMARC. Target: 100% before
                        moving to p=reject.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Advanced Marketing Tactics */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <TrendingUp className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Advanced Tactics for High-Volume Senders
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Warm Up New Marketing Subdomains
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Don&apos;t send to 100,000 subscribers immediately from a
                    new subdomain:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold">
                        Day 1
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Send to 1,000 most engaged subscribers
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold">
                        Day 3
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Increase to 5,000 subscribers
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold">
                        Day 7
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Increase to 25,000 subscribers
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold">
                        Day 14
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Full list (100,000+)
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    This builds sender reputation gradually. DMARC p=reject
                    helps ISPs trust you faster during warmup.
                  </p>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Implement BIMI for Brand Recognition
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    BIMI displays your logo in Gmail/Outlook for authenticated
                    emails:
                  </p>
                  <Alert variant="info" className="mb-3">
                    <CheckCircle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Requirements</div>
                      <div className="text-sm">
                        1. DMARC p=quarantine or p=reject
                        <br />
                        2. Valid VMC (Verified Mark Certificate) -
                        $1,000-$1,500/year
                        <br />
                        3. SVG logo file hosted on your domain
                        <br />
                        4. BIMI DNS record published
                      </div>
                    </div>
                  </Alert>
                  <p className="text-muted-foreground text-sm">
                    BIMI increases open rates by 10-20% for marketing emails.
                    Worth the investment for high-volume senders.
                  </p>
                </div>

                <div className="border-border border-t pt-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Use ARC for Mailing Lists
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    ARC (Authenticated Received Chain) preserves authentication
                    through mailing lists:
                  </p>
                  <p className="text-muted-foreground text-sm">
                    If you send to LinkedIn groups, Google Groups, or industry
                    mailing lists, ask your ESP if they support ARC. It prevents
                    DMARC failures when lists modify email content.
                  </p>
                </div>
              </div>
            </Card>

            {/* Common Marketing Mistakes */}
            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <div>
                <div className="mb-2 font-semibold">
                  Common Email Marketing DMARC Mistakes
                </div>
                <ul className="space-y-1 text-sm">
                  <li>
                    • Sending marketing from main domain instead of subdomain
                    (contaminates primary domain reputation)
                  </li>
                  <li>
                    • Configuring SPF but not DKIM (SPF breaks on forwarding)
                  </li>
                  <li>
                    • Jumping to p=reject without monitoring reports first
                  </li>
                  <li>• Not warming up new subdomains or IP addresses</li>
                  <li>
                    • Sending to purchased/scraped lists (kills sender
                    reputation even with DMARC)
                  </li>
                  <li>
                    • Ignoring engagement metrics (unsubscribes, spam
                    complaints)
                  </li>
                  <li>
                    • Using generic &quot;From&quot; addresses (noreply@)
                    instead of real names
                  </li>
                </ul>
              </div>
            </Alert>

            {/* ROI Impact */}
            <Card className="bg-success/5 border-success/20 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-success/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <BarChart3 className="text-success h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Measurable Impact on Marketing ROI
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4">
                  <p className="mb-2 text-lg font-semibold">
                    Example: 100,000 Subscriber List
                  </p>
                  <div className="text-muted-foreground space-y-2 text-sm">
                    <p>
                      <strong>Without DMARC:</strong>
                    </p>
                    <p>• Inbox placement: 85%</p>
                    <p>• Emails in inbox: 85,000</p>
                    <p>• Open rate: 20%</p>
                    <p>• Opens: 17,000</p>
                    <p className="mt-3">
                      <strong>With DMARC p=reject:</strong>
                    </p>
                    <p className="text-success">
                      • Inbox placement: 95% (+10%)
                    </p>
                    <p className="text-success">• Emails in inbox: 95,000</p>
                    <p>• Open rate: 22% (improved trust)</p>
                    <p className="text-success font-semibold">
                      • Opens: 20,900 (+3,900 opens = +23% improvement)
                    </p>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-4">
                  <p className="mb-2 font-semibold">Business Impact</p>
                  <p className="text-muted-foreground text-sm">
                    If each open generates $0.50 in revenue (industry average
                    for e-commerce):
                  </p>
                  <p className="text-success mt-2 text-lg font-bold">
                    +$1,950 per campaign
                  </p>
                  <p className="text-muted-foreground text-sm">
                    For 50 campaigns/year:{" "}
                    <strong className="text-success">
                      $97,500 additional revenue
                    </strong>
                  </p>
                </div>
              </div>
            </Card>

            {/* Related Guides */}
            <Card className="bg-secondary/30 p-8">
              <h2 className="mb-6 text-2xl font-bold">Related Guides</h2>
              <div className="grid gap-4 md:grid-cols-3">
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
                  href="/guides/subdomain-dmarc-policies"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    Subdomain DMARC Policies
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Marketing subdomain setup
                  </p>
                </Link>
                <Link
                  href="/guides/moving-to-p-reject-safely"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    Moving to p=reject Safely
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Progressive rollout
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
              Maximize Marketing Deliverability
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              TrustYourInbox provides campaign-level DMARC analytics for
              marketing teams. See inbox placement rates, authentication status,
              and deliverability trends per campaign.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">See Marketing Analytics</Link>
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
              Free Marketing Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/tools/dmarc-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Mail className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  DMARC Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check subdomain policies
                </p>
              </Link>
              <Link
                href="/tools/dmarc-policy-impact-simulator"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <BarChart3 className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  Impact Simulator
                </h3>
                <p className="text-muted-foreground text-sm">
                  Predict deliverability impact
                </p>
              </Link>
              <Link
                href="/tools/email-header-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Target className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  Header Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Debug authentication
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
