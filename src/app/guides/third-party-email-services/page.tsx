"use client";

import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Users,
  CheckCircle,
  AlertTriangle,
  Settings,
  Mail,
  Globe,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title:
    "Third-Party Email Services: Configure SendGrid, Mailchimp & More | Guide",
  description:
    "Configure DMARC, SPF, and DKIM for third-party email services like SendGrid, Mailchimp, Salesforce, Zendesk. Prevent authentication failures with proper ESP setup.",
  keywords: [
    "third-party email service DMARC",
    "SendGrid DMARC",
    "Mailchimp DMARC",
    "Salesforce DMARC",
    "Zendesk DMARC",
    "ESP email authentication",
    "configure email service provider",
    "third-party sender SPF",
    "ESP DKIM setup",
  ],
  openGraph: {
    title: "Third-Party Email Services: Configure SendGrid, Mailchimp & More",
    description:
      "Learn how to properly configure DMARC, SPF, and DKIM for third-party email services to prevent authentication failures.",
    type: "article",
    url: "https://trustyourinbox.com/guides/third-party-email-services",
  },
};

export default function ThirdPartyEmailServicesPage() {
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
              Third-Party Email Services
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
              Third-Party Email Service Configuration
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              SendGrid, Mailchimp, Salesforce, Zendesk - most organizations use
              multiple email service providers. Learn how to configure each one
              to pass DMARC authentication.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">12 min read</span>
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
                <div className="bg-destructive/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <AlertTriangle className="text-destructive h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  The Third-Party Challenge
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                When third-party email services send on your behalf, they can
                fail DMARC authentication if not configured properly:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Wrong &quot;From&quot; Address
                    </p>
                    <p className="text-muted-foreground text-sm">
                      ESP sends from their domain (sendgrid.net) instead of
                      yours (yourdomain.com), causing SPF/DKIM misalignment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Missing DKIM Configuration</p>
                    <p className="text-muted-foreground text-sm">
                      DKIM keys not generated or DNS records not published,
                      failing DKIM authentication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">SPF Not Updated</p>
                    <p className="text-muted-foreground text-sm">
                      Your SPF record doesn&apos;t include the ESP&apos;s
                      sending servers (include:sendgrid.net, etc.).
                    </p>
                  </div>
                </div>
              </div>
              <Alert variant="info" className="mt-6">
                <CheckCircle className="h-4 w-4" />
                <div>
                  <div className="font-semibold">The Solution</div>
                  <div className="text-sm">
                    For each ESP, you need to: (1) Configure custom
                    &quot;From&quot; domain, (2) Set up DKIM signing with your
                    domain, (3) Add ESP to SPF record. This guide shows you how
                    for popular services.
                  </div>
                </div>
              </Alert>
            </Card>

            {/* SendGrid Configuration */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">SendGrid Configuration</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                SendGrid is a transactional email service used for password
                resets, notifications, etc.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 1: Add Sender Authentication Domain
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    In SendGrid dashboard: Settings → Sender Authentication →
                    Authenticate Your Domain
                  </p>
                  <div className="bg-muted/50 rounded-md p-4">
                    <p className="text-sm">
                      <strong>Domain:</strong> yourdomain.com (or subdomain like
                      mail.yourdomain.com)
                    </p>
                    <p className="text-muted-foreground mt-2 text-xs">
                      SendGrid will generate DNS records for you to add
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 2: Add DNS Records
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    SendGrid provides 3 DNS records to publish:
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-xs">
                    <p className="text-muted-foreground mb-2">
                      # 1. DKIM record (for signing)
                    </p>
                    <p>
                      s1._domainkey.yourdomain.com CNAME
                      s1.domainkey.u12345.wl123.sendgrid.net
                    </p>
                    <p>
                      s2._domainkey.yourdomain.com CNAME
                      s2.domainkey.u12345.wl123.sendgrid.net
                    </p>
                    <p className="text-muted-foreground mt-3 mb-2">
                      # 2. Tracking subdomain (optional)
                    </p>
                    <p>em1234.yourdomain.com CNAME u12345.wl123.sendgrid.net</p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 3: Update SPF Record
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Add SendGrid to your SPF record:
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
                    <p>v=spf1</p>
                    <p className="text-primary font-semibold">
                      include:sendgrid.net
                    </p>
                    <p>include:_spf.google.com</p>
                    <p>~all</p>
                  </div>
                  <Alert variant="info" className="mt-4">
                    <CheckCircle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">
                        SendGrid SPF Lookup Cost
                      </div>
                      <div className="text-sm">
                        include:sendgrid.net = 1 DNS lookup (efficient!)
                      </div>
                    </div>
                  </Alert>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 4: Verify in SendGrid
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    After DNS records propagate (24-48 hours), click
                    &quot;Verify&quot; in SendGrid dashboard. Status should
                    change to &quot;Verified&quot;.
                  </p>
                </div>
              </div>
            </Card>

            {/* Mailchimp Configuration */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Mailchimp Configuration</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Mailchimp is used for email marketing campaigns and newsletters.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 1: Verify Domain
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    In Mailchimp: Settings → Domains → Add & Verify Domain
                  </p>
                  <div className="bg-muted/50 rounded-md p-4">
                    <p className="text-sm">
                      <strong>Domain:</strong> yourdomain.com
                    </p>
                    <p className="text-muted-foreground mt-2 text-xs">
                      Mailchimp will send verification email to
                      admin@yourdomain.com
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 2: Enable DKIM Authentication
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    After verification, click &quot;Authenticate&quot; to get
                    DKIM records:
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-xs">
                    <p className="text-muted-foreground mb-2">
                      # Add these CNAME records:
                    </p>
                    <p>k1._domainkey.yourdomain.com CNAME dkim.mcsv.net</p>
                    <p>k2._domainkey.yourdomain.com CNAME dkim2.mcsv.net</p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 3: Update SPF Record
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Add Mailchimp servers to SPF:
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
                    <p>v=spf1</p>
                    <p className="text-primary font-semibold">
                      include:servers.mcsv.net
                    </p>
                    <p>include:sendgrid.net</p>
                    <p>include:_spf.google.com</p>
                    <p>~all</p>
                  </div>
                  <Alert variant="info" className="mt-4">
                    <CheckCircle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">
                        Mailchimp SPF Lookup Cost
                      </div>
                      <div className="text-sm">
                        include:servers.mcsv.net = 1 DNS lookup
                      </div>
                    </div>
                  </Alert>
                </div>
              </div>
            </Card>

            {/* Salesforce Marketing Cloud */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Globe className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Salesforce Marketing Cloud
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Enterprise marketing automation and CRM email.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 1: Configure SAP (Sender Authentication Package)
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    In Salesforce Marketing Cloud: Admin → Sender Authentication
                  </p>
                  <div className="bg-muted/50 rounded-md p-4">
                    <p className="text-sm">
                      <strong>Sending Domain:</strong> yourdomain.com
                    </p>
                    <p className="text-sm">
                      <strong>Subdomain (optional):</strong>{" "}
                      marketing.yourdomain.com
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 2: Add DNS Records from SAP
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Salesforce provides custom DKIM and SPF records:
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-xs">
                    <p className="text-muted-foreground mb-2">
                      # DKIM selectors (provided by Salesforce)
                    </p>
                    <p>
                      sfmc._domainkey.yourdomain.com TXT &quot;v=DKIM1; k=rsa;
                      p=...&quot;
                    </p>
                    <p className="text-muted-foreground mt-3 mb-2">
                      # SPF include
                    </p>
                    <p>include:cust-spf.exacttarget.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 3: Update SPF Record
                  </h3>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
                    <p>v=spf1</p>
                    <p className="text-primary font-semibold">
                      include:cust-spf.exacttarget.com
                    </p>
                    <p>include:sendgrid.net</p>
                    <p>include:servers.mcsv.net</p>
                    <p>~all</p>
                  </div>
                  <Alert variant="warning" className="mt-4">
                    <AlertTriangle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">High SPF Lookup Cost</div>
                      <div className="text-sm">
                        include:cust-spf.exacttarget.com = 3 DNS lookups! Watch
                        your total SPF lookup count.
                      </div>
                    </div>
                  </Alert>
                </div>
              </div>
            </Card>

            {/* Zendesk Configuration */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Zendesk Configuration</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Customer support ticket notifications and responses.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 1: Configure Support Email Address
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    In Zendesk: Admin → Channels → Email → Add Address
                  </p>
                  <div className="bg-muted/50 rounded-md p-4">
                    <p className="text-sm">
                      <strong>Email:</strong> support@yourdomain.com
                    </p>
                    <p className="text-muted-foreground mt-2 text-xs">
                      Zendesk will verify ownership via email confirmation
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 2: Enable Domain Authentication
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    In Zendesk: Admin → Channels → Email → Authentication
                  </p>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-xs">
                    <p className="text-muted-foreground mb-2">
                      # DKIM record (Zendesk provides)
                    </p>
                    <p>
                      zendesk1._domainkey.yourdomain.com CNAME
                      zendesk1._domainkey.zendesk.com
                    </p>
                    <p>
                      zendesk2._domainkey.yourdomain.com CNAME
                      zendesk2._domainkey.zendesk.com
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">
                    Step 3: Update SPF Record
                  </h3>
                  <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
                    <p>v=spf1</p>
                    <p className="text-primary font-semibold">
                      include:mail.zendesk.com
                    </p>
                    <p>include:sendgrid.net</p>
                    <p>include:servers.mcsv.net</p>
                    <p>~all</p>
                  </div>
                  <Alert variant="info" className="mt-4">
                    <CheckCircle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">
                        Zendesk SPF Lookup Cost
                      </div>
                      <div className="text-sm">
                        include:mail.zendesk.com = 1 DNS lookup
                      </div>
                    </div>
                  </Alert>
                </div>
              </div>
            </Card>

            {/* Common ESP Quick Reference */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Quick Reference: Popular ESPs
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-border border-b">
                    <tr>
                      <th className="pb-3 text-left font-semibold">ESP</th>
                      <th className="pb-3 text-left font-semibold">
                        SPF Include
                      </th>
                      <th className="pb-3 text-left font-semibold">
                        DNS Lookups
                      </th>
                      <th className="pb-3 text-left font-semibold">
                        DKIM Setup
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-border divide-y">
                    <tr>
                      <td className="py-3 font-medium">SendGrid</td>
                      <td className="py-3 font-mono text-xs">
                        include:sendgrid.net
                      </td>
                      <td className="py-3">1</td>
                      <td className="py-3 text-xs">CNAME provided</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Mailchimp</td>
                      <td className="py-3 font-mono text-xs">
                        include:servers.mcsv.net
                      </td>
                      <td className="py-3">1</td>
                      <td className="py-3 text-xs">CNAME provided</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Salesforce</td>
                      <td className="py-3 font-mono text-xs">
                        include:cust-spf.exacttarget.com
                      </td>
                      <td className="text-destructive py-3 font-semibold">3</td>
                      <td className="py-3 text-xs">TXT record (SAP)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Zendesk</td>
                      <td className="py-3 font-mono text-xs">
                        include:mail.zendesk.com
                      </td>
                      <td className="py-3">1</td>
                      <td className="py-3 text-xs">CNAME provided</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Postmark</td>
                      <td className="py-3 font-mono text-xs">
                        include:spf.mtasv.net
                      </td>
                      <td className="py-3">1</td>
                      <td className="py-3 text-xs">TXT provided</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Amazon SES</td>
                      <td className="py-3 font-mono text-xs">
                        include:amazonses.com
                      </td>
                      <td className="py-3">1</td>
                      <td className="py-3 text-xs">Manual key generation</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">HubSpot</td>
                      <td className="py-3 font-mono text-xs">
                        include:_spf.hubspotemail.net
                      </td>
                      <td className="py-3">2</td>
                      <td className="py-3 text-xs">CNAME provided</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Intercom</td>
                      <td className="py-3 font-mono text-xs">
                        include:_spf.intercom.io
                      </td>
                      <td className="py-3">1</td>
                      <td className="py-3 text-xs">CNAME provided</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Best Practices */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Settings className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Best Practices for Third-Party Services
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Use Subdomains for ESPs</p>
                    <p className="text-muted-foreground text-sm">
                      marketing.yourdomain.com for Mailchimp,
                      support.yourdomain.com for Zendesk. Isolates SPF lookups
                      and makes troubleshooting easier.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Always Enable DKIM for ESPs</p>
                    <p className="text-muted-foreground text-sm">
                      Even if SPF passes, DKIM provides an extra layer of
                      protection and improves deliverability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Monitor SPF 10 Lookup Limit</p>
                    <p className="text-muted-foreground text-sm">
                      Each include: counts toward the limit. Track total lookups
                      across all ESPs. Use SPF flattening if approaching 10.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Test Before Production</p>
                    <p className="text-muted-foreground text-sm">
                      Send test emails from each ESP to Gmail/Outlook. Check
                      Authentication-Results header to verify SPF/DKIM pass.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Document All ESP Configurations
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Keep a list of all third-party services, their SPF
                      includes, DKIM selectors, and DNS records. Critical for
                      troubleshooting and onboarding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Review DMARC Reports Weekly</p>
                    <p className="text-muted-foreground text-sm">
                      Check for new ESPs appearing in reports. Team members may
                      add services without notifying IT.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Troubleshooting */}
            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <div>
                <div className="mb-2 font-semibold">
                  Common ESP Configuration Mistakes
                </div>
                <ul className="space-y-1 text-sm">
                  <li>
                    • Using ESP&apos;s default domain instead of custom domain
                    (noreply@sendgrid.net instead of noreply@yourdomain.com)
                  </li>
                  <li>
                    • Forgetting to add DNS records after configuring in ESP
                    dashboard
                  </li>
                  <li>
                    • Not waiting for DNS propagation (24-48 hours) before
                    testing
                  </li>
                  <li>
                    • Adding SPF include but not configuring DKIM (or vice
                    versa)
                  </li>
                  <li>
                    • Exceeding SPF 10 DNS lookup limit with too many ESPs
                  </li>
                  <li>• Not testing ESP emails after configuration</li>
                </ul>
              </div>
            </Alert>

            {/* Related Guides */}
            <Card className="bg-secondary/30 p-8">
              <h2 className="mb-6 text-2xl font-bold">Related Guides</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/guides/spf-record-basics"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    SPF Record Basics
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Understanding include: mechanism
                  </p>
                </Link>
                <Link
                  href="/guides/spf-10-dns-lookup-limit"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    SPF 10 DNS Lookup Limit
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Avoid PermError with ESPs
                  </p>
                </Link>
                <Link
                  href="/guides/what-is-dkim"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    What is DKIM?
                  </h3>
                  <p className="text-muted-foreground text-sm">DKIM for ESPs</p>
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
              Automatic ESP Discovery & Monitoring
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              TrustYourInbox automatically detects all your email service
              providers from DMARC reports and monitors their authentication
              health. No manual tracking needed.
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
              Free ESP Testing Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/tools/spf-surveyor"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Globe className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  SPF Surveyor
                </h3>
                <p className="text-muted-foreground text-sm">
                  Verify ESP SPF includes
                </p>
              </Link>
              <Link
                href="/tools/dmarc-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Mail className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  DMARC Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check ESP alignment
                </p>
              </Link>
              <Link
                href="/tools/email-header-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Settings className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  Header Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Debug ESP authentication
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
