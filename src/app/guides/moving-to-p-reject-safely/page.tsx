"use client";

import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title: "Moving to DMARC p=reject Safely: Progressive Rollout Guide | 2025",
  description:
    "Step-by-step guide to safely move from p=none to p=reject. Progressive DMARC enforcement strategy that prevents email delivery issues while achieving full protection.",
  keywords: [
    "DMARC p=reject",
    "DMARC enforcement",
    "DMARC progressive rollout",
    "move to DMARC reject",
    "DMARC quarantine to reject",
    "DMARC deployment strategy",
    "safe DMARC rollout",
    "DMARC pct tag",
  ],
  openGraph: {
    title: "Moving to DMARC p=reject Safely: Progressive Rollout Guide",
    description:
      "Learn how to safely move from p=none to p=reject using progressive enforcement. Prevent email delivery issues while achieving maximum protection.",
    type: "article",
    url: "https://trustyourinbox.com/guides/moving-to-p-reject-safely",
  },
};

export default function MovingToPRejectSafelyPage() {
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
              Moving to p=reject Safely
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <Shield className="text-primary mr-2 h-4 w-4" />
              <span className="text-primary">DMARC Implementation</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Moving to p=reject Safely
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              p=reject is the gold standard for DMARC protection, but jumping
              directly to it can break legitimate email delivery. This guide
              shows you how to progressively roll out enforcement safely.
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
            {/* Why p=reject is Important */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Why p=reject Matters</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                DMARC has three policy levels with increasing protection:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-warning/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                    <span className="text-warning font-mono text-sm font-bold">
                      p=none
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Monitor Only (No Protection)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Receiving servers do nothing with DMARC failures.
                      Attackers can still spoof your domain. Only use for
                      initial setup and monitoring.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-warning/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                    <span className="text-warning font-mono text-sm font-bold">
                      p=quar
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Quarantine (Partial Protection)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Failed emails go to spam/junk folder. Better than nothing,
                      but sophisticated users check spam folders. Not full
                      protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-success/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                    <span className="text-success font-mono text-sm font-bold">
                      p=reject
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Reject (Maximum Protection) ✓ RECOMMENDED
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Failed emails are completely blocked before reaching the
                      inbox. This is the only policy that truly prevents domain
                      spoofing.
                    </p>
                  </div>
                </div>
              </div>
              <Alert variant="info" className="mt-6">
                <CheckCircle className="h-4 w-4" />
                <div>
                  <div className="font-semibold">Industry Standard</div>
                  <div className="text-sm">
                    Google, Microsoft, and major financial institutions all use
                    p=reject. It&apos;s required for BIMI (brand indicators) and
                    recommended by all security frameworks.
                  </div>
                </div>
              </Alert>
            </Card>

            {/* The Risk: Moving Too Fast */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-destructive/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <AlertTriangle className="text-destructive h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  The Risk: Moving Too Fast
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Jumping directly to p=reject without proper validation can
                cause:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Legitimate Emails Blocked</p>
                    <p className="text-muted-foreground text-sm">
                      Third-party services not properly configured (Salesforce,
                      Zendesk, SendGrid) will fail authentication and be
                      rejected.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email Forwarding Breaks</p>
                    <p className="text-muted-foreground text-sm">
                      Forwarded emails often fail SPF alignment. If you have
                      users forwarding to Gmail/Outlook, those emails will be
                      rejected.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Mailing List Issues</p>
                    <p className="text-muted-foreground text-sm">
                      Some mailing lists modify email content (adding footers,
                      subject prefixes), breaking DKIM signatures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Hidden Email Sources</p>
                    <p className="text-muted-foreground text-sm">
                      Marketing automation, CRM systems, monitoring alerts - you
                      might discover email sources you didn&apos;t know existed.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Progressive Rollout Strategy */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <TrendingUp className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Progressive Rollout Strategy
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                The safest path to p=reject uses a 4-phase approach with
                validation at each step:
              </p>
              <div className="space-y-4">
                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        Phase 1: Monitor (p=none)
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Duration: 2-4 weeks
                      </p>
                    </div>
                  </div>
                  <div className="bg-background rounded-md p-4 font-mono text-sm">
                    <p>v=DMARC1; p=none;</p>
                    <p>rua=mailto:dmarc@yourdomain.com;</p>
                    <p>pct=100</p>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    <strong>Goal:</strong> Collect baseline data on all email
                    sources. Identify legitimate senders and fix SPF/DKIM for
                    services failing authentication.
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Review DMARC reports daily for first week
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Document all email sources (Google, SendGrid,
                        Salesforce, etc.)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Fix failing senders by configuring SPF and DKIM
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Target: 95%+ DMARC compliance before moving to Phase 2
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        Phase 2: Gradual Quarantine (pct=25, then 50, then 100)
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Duration: 3-6 weeks total
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-muted-foreground mb-2 text-sm font-semibold">
                        Week 1-2: Apply to 25% of email
                      </p>
                      <div className="bg-background rounded-md p-3 font-mono text-xs">
                        <p>v=DMARC1; p=quarantine;</p>
                        <p className="text-primary font-semibold">pct=25;</p>
                        <p>rua=mailto:dmarc@yourdomain.com</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-2 text-sm font-semibold">
                        Week 3-4: Increase to 50%
                      </p>
                      <div className="bg-background rounded-md p-3 font-mono text-xs">
                        <p>v=DMARC1; p=quarantine;</p>
                        <p className="text-primary font-semibold">pct=50;</p>
                        <p>rua=mailto:dmarc@yourdomain.com</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-2 text-sm font-semibold">
                        Week 5-6: Full enforcement (100%)
                      </p>
                      <div className="bg-background rounded-md p-3 font-mono text-xs">
                        <p>v=DMARC1; p=quarantine;</p>
                        <p className="text-primary font-semibold">pct=100;</p>
                        <p>rua=mailto:dmarc@yourdomain.com</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    <strong>Goal:</strong> Test enforcement gradually. The pct=
                    tag tells receiving servers to only apply the policy to X%
                    of failing emails. This limits blast radius.
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Monitor user complaints about missing emails
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Check spam folders for legitimate emails quarantined
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Fix any newly discovered failing senders
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        Phase 3: Gradual Reject (pct=25, then 50, then 100)
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Duration: 3-6 weeks total
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-muted-foreground mb-2 text-sm font-semibold">
                        Week 1-2: Apply to 25% of email
                      </p>
                      <div className="bg-background rounded-md p-3 font-mono text-xs">
                        <p>v=DMARC1; p=reject;</p>
                        <p className="text-primary font-semibold">pct=25;</p>
                        <p>rua=mailto:dmarc@yourdomain.com</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-2 text-sm font-semibold">
                        Week 3-4: Increase to 50%
                      </p>
                      <div className="bg-background rounded-md p-3 font-mono text-xs">
                        <p>v=DMARC1; p=reject;</p>
                        <p className="text-primary font-semibold">pct=50;</p>
                        <p>rua=mailto:dmarc@yourdomain.com</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-2 text-sm font-semibold">
                        Week 5-6: Full enforcement (100%)
                      </p>
                      <div className="bg-background rounded-md p-3 font-mono text-xs">
                        <p>v=DMARC1; p=reject;</p>
                        <p className="text-primary font-semibold">pct=100;</p>
                        <p>rua=mailto:dmarc@yourdomain.com</p>
                      </div>
                    </div>
                  </div>
                  <Alert variant="warning" className="mt-4">
                    <AlertTriangle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Critical Phase</div>
                      <div className="text-sm">
                        p=reject blocks emails completely. Monitor VERY closely
                        during this phase. Have rollback plan ready.
                      </div>
                    </div>
                  </Alert>
                </Card>

                <Card className="border-success/20 bg-success/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-success flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        Phase 4: Full Enforcement (p=reject, pct=100)
                      </h3>
                      <p className="text-muted-foreground text-sm">Ongoing</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-md p-4 font-mono text-sm">
                    <p>v=DMARC1; p=reject; pct=100;</p>
                    <p>rua=mailto:dmarc@yourdomain.com;</p>
                    <p>ruf=mailto:forensic@yourdomain.com</p>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    <strong>Congratulations!</strong> Your domain is now fully
                    protected against spoofing. Continue monitoring reports to
                    catch any new email sources.
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Monitor weekly DMARC reports for new failures
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Set up alerts for authentication failures
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Document your email sources for future reference
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Timeline Visual */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Clock className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">
                  Typical Timeline: 8-16 Weeks
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="text-muted-foreground w-24 flex-shrink-0 text-sm font-semibold">
                    Weeks 1-4
                  </div>
                  <div className="flex-1">
                    <div className="bg-warning/20 mb-2 h-2 rounded-full">
                      <div className="bg-warning h-2 w-1/4 rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      p=none - Monitor and fix authentication
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-muted-foreground w-24 flex-shrink-0 text-sm font-semibold">
                    Weeks 5-10
                  </div>
                  <div className="flex-1">
                    <div className="bg-warning/20 mb-2 h-2 rounded-full">
                      <div className="bg-warning h-2 w-3/5 rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      p=quarantine with pct=25, 50, 100 progression
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-muted-foreground w-24 flex-shrink-0 text-sm font-semibold">
                    Weeks 11-16
                  </div>
                  <div className="flex-1">
                    <div className="bg-success/20 mb-2 h-2 rounded-full">
                      <div className="bg-success h-2 w-full rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      p=reject with pct=25, 50, 100 progression
                    </p>
                  </div>
                </div>
              </div>
              <Alert variant="info" className="mt-6">
                <BarChart3 className="h-4 w-4" />
                <div>
                  <div className="font-semibold">Faster for Simple Setups</div>
                  <div className="text-sm">
                    If you only use Google Workspace or Microsoft 365 with no
                    third-party email services, you can move faster (4-6 weeks
                    total). Complex environments with many ESPs take longer.
                  </div>
                </div>
              </Alert>
            </Card>

            {/* Monitoring & Validation */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <BarChart3 className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Key Metrics to Monitor</h2>
              </div>
              <div className="space-y-4">
                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">DMARC Compliance Rate</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Percentage of email passing DMARC (SPF or DKIM aligned)
                  </p>
                  <div className="bg-muted/50 rounded-md p-3">
                    <p className="text-sm">
                      <strong>Target:</strong> 95%+ before moving to next phase
                    </p>
                    <p className="text-muted-foreground text-xs">
                      If compliance drops below 95%, pause rollout and
                      investigate failures
                    </p>
                  </div>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">
                    Volume of Failing Messages
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Number of emails failing DMARC per day
                  </p>
                  <div className="bg-muted/50 rounded-md p-3">
                    <p className="text-sm">
                      <strong>Target:</strong> Less than 5% of total volume
                    </p>
                    <p className="text-muted-foreground text-xs">
                      High failure volume = major email sources not configured
                      correctly
                    </p>
                  </div>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">
                    User Complaints About Missing Email
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Support tickets reporting undelivered emails
                  </p>
                  <div className="bg-muted/50 rounded-md p-3">
                    <p className="text-sm">
                      <strong>Target:</strong> Zero complaints related to DMARC
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Any complaints = rollback immediately and investigate
                    </p>
                  </div>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">Forensic Report Volume</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Real-time failure notifications (ruf= tag)
                  </p>
                  <div className="bg-muted/50 rounded-md p-3">
                    <p className="text-sm">
                      <strong>Target:</strong> Only spoofing attempts, not
                      legitimate senders
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Legitimate senders in forensic reports = configuration
                      issue
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Rollback Plan */}
            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <div>
                <div className="mb-2 font-semibold">
                  Emergency Rollback Plan
                </div>
                <p className="mb-3 text-sm">
                  If you discover legitimate emails being blocked:
                </p>
                <ol className="ml-4 list-decimal space-y-1 text-sm">
                  <li>
                    Immediately change DMARC policy back to previous phase
                    (e.g., p=reject pct=50 → p=quarantine pct=100)
                  </li>
                  <li>
                    DNS changes propagate in 5-60 minutes depending on TTL
                  </li>
                  <li>
                    Identify failing sender from DMARC reports or user
                    complaints
                  </li>
                  <li>Fix SPF/DKIM configuration for that sender</li>
                  <li>
                    Wait 1 week monitoring with fixed config before
                    re-attempting rollout
                  </li>
                </ol>
              </div>
            </Alert>

            {/* Common Pitfalls */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Common Pitfalls to Avoid
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Skipping the p=quarantine Phase
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Going directly from p=none to p=reject is risky. Always
                      use p=quarantine as intermediate step.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Not Testing Subdomain Policies
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Don&apos;t forget sp= tag for subdomains. Test
                      marketing.domain.com, app.domain.com separately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Rushing Through pct= Progression
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Give each pct= step at least 1-2 weeks. Don&apos;t jump
                      from pct=25 to pct=100 immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Ignoring DMARC Reports</p>
                    <p className="text-muted-foreground text-sm">
                      Review reports DAILY during rollout. Weekly after reaching
                      p=reject. Set up automated alerts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Not Communicating with Stakeholders
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Inform marketing, sales, and support teams about the
                      rollout. They should watch for delivery issues.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Related Guides */}
            <Card className="bg-secondary/30 p-8">
              <h2 className="mb-6 text-2xl font-bold">Related Guides</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/guides/dmarc-policy-levels-explained"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    DMARC Policy Levels
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    None, Quarantine, and Reject
                  </p>
                </Link>
                <Link
                  href="/guides/subdomain-dmarc-policies"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    Subdomain Policies
                  </h3>
                  <p className="text-muted-foreground text-sm">Using sp= tag</p>
                </Link>
                <Link
                  href="/guides/spf-record-basics"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    SPF Record Basics
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Fix SPF alignment
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
              Automated Progressive Rollout
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              TrustYourInbox automates your p=reject rollout with built-in
              safety checks and monitoring. No manual policy changes needed.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">See Automated Rollout</Link>
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
              Free DMARC Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/tools/dmarc-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Shield className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  DMARC Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check current policy
                </p>
              </Link>
              <Link
                href="/tools/dmarc-policy-generator"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <TrendingUp className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  Policy Generator
                </h3>
                <p className="text-muted-foreground text-sm">
                  Create progressive policies
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
                  Predict rollout impact
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
