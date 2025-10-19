import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Percent,
  Eye,
  Ban,
  Inbox,
  BookOpen,
  Home,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata = {
  title:
    "DMARC Policy Levels Explained: p=none vs p=quarantine vs p=reject | Guide 2025",
  description:
    "Complete guide to DMARC policy levels (p=none, p=quarantine, p=reject). Learn when to use each enforcement level, risks, benefits, deployment timeline, and how pct tags enable gradual rollout. Reach p=reject safely in 2-3 weeks.",
  keywords: [
    "DMARC policy levels",
    "p=none vs p=quarantine vs p=reject",
    "DMARC enforcement",
    "DMARC pct tag",
    "DMARC policy guide",
    "DMARC implementation",
    "email security policy",
    "DMARC p=reject",
  ],
  openGraph: {
    title: "DMARC Policy Levels Explained: Complete Guide 2025",
    description:
      "Understand DMARC policy levels. Learn when to use p=none, p=quarantine, or p=reject for maximum email security.",
    type: "article",
  },
};

export default function DmarcPolicyLevelsExplained() {
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
            <span className="text-foreground font-medium">
              DMARC Policy Levels Explained
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-border border-b">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
            <BookOpen className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-medium">
              DMARC Implementation Guide
            </span>
          </div>

          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            DMARC Policy Levels Explained: p=none vs p=quarantine vs p=reject
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Choosing the right DMARC policy (p=none, p=quarantine, or p=reject)
            is critical for email security. This guide compares all three
            enforcement levels, explains when to use each, and shows how to
            progress safely from monitoring to full protection in 2-3 weeks.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Quick Comparison: At a Glance
          </h2>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-border bg-muted/30 border-b">
                  <tr>
                    <th className="text-foreground px-6 py-4 text-left text-sm font-semibold">
                      Policy
                    </th>
                    <th className="text-foreground px-6 py-4 text-center text-sm font-semibold">
                      Protection Level
                    </th>
                    <th className="text-foreground px-6 py-4 text-center text-sm font-semibold">
                      Risk
                    </th>
                    <th className="text-foreground px-6 py-4 text-center text-sm font-semibold">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-border divide-y">
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      p=none
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-destructive text-sm font-semibold">
                        0% (Monitoring only)
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-success text-sm font-semibold">
                        None
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-muted-foreground text-sm">
                        Discovery phase
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      p=quarantine
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-warning text-sm font-semibold">
                        ~70% (Spam folder)
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-warning text-sm font-semibold">
                        Low
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-muted-foreground text-sm">
                        Testing phase
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      p=reject
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-success text-sm font-semibold">
                        100% (Full block)
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-destructive text-sm font-semibold">
                        Medium
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-muted-foreground text-sm">
                        Production
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Policy Details */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Policy-by-Policy Breakdown
          </h2>

          <div className="space-y-6">
            {/* p=none */}
            <Card className="border-muted">
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-muted flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Eye className="text-foreground h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground mb-2 text-2xl font-semibold">
                      p=none (Monitoring Mode)
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      <strong>What it does:</strong> Collects data about email
                      authentication but takes no enforcement action. Failed
                      emails are delivered normally.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-success mb-2 text-sm font-medium">
                          ✓ Pros:
                        </p>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Zero risk of blocking legitimate email</li>
                          <li>• Discover all email sources sending as you</li>
                          <li>• Identify SPF/DKIM configuration issues</li>
                          <li>• Safe for initial deployment</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-destructive mb-2 text-sm font-medium">
                          ✗ Cons:
                        </p>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Provides zero protection from spoofing</li>
                          <li>• Attackers can still impersonate your domain</li>
                          <li>
                            • Not compliant with 2025 Google/Yahoo mandates
                          </li>
                          <li>• Should only be temporary (7-14 days)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-muted/30 mt-4 rounded-lg p-4">
                      <p className="text-foreground mb-2 text-sm font-semibold">
                        Example DMARC Record:
                      </p>
                      <code className="text-primary block rounded bg-black/5 p-2 text-xs dark:bg-white/5">
                        v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com;
                        ruf=mailto:forensic@yourdomain.com; pct=100
                      </code>
                    </div>

                    <Alert variant="warning" className="mt-4">
                      <AlertTriangle className="h-5 w-5" />
                      <div>
                        <div className="font-semibold">
                          Use Case: Discovery Phase Only
                        </div>
                        <div className="text-muted-foreground mt-1 text-sm">
                          Deploy p=none when first implementing DMARC to
                          discover email sources. Move to p=quarantine within
                          7-14 days after validating 95%+ authentication pass
                          rate.
                        </div>
                      </div>
                    </Alert>
                  </div>
                </div>
              </div>
            </Card>

            {/* p=quarantine */}
            <Card className="border-warning/20">
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-warning/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Inbox className="text-warning h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground mb-2 text-2xl font-semibold">
                      p=quarantine (Junk/Spam Folder)
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      <strong>What it does:</strong> Emails failing DMARC checks
                      are marked as spam/junk but still delivered to
                      recipients&apos; spam folders.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-success mb-2 text-sm font-medium">
                          ✓ Pros:
                        </p>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Moderate protection (~70% effective)</li>
                          <li>
                            • Legitimate email recoverable from spam folder
                          </li>
                          <li>
                            • Safe stepping stone between p=none and p=reject
                          </li>
                          <li>• Allows testing without hard blocks</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-destructive mb-2 text-sm font-medium">
                          ✗ Cons:
                        </p>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Some users still see spoofed emails in spam</li>
                          <li>
                            • Not maximum protection (advanced attackers may
                            bypass)
                          </li>
                          <li>• Legitimate emails in spam reduce trust</li>
                          <li>
                            • Still not 100% compliant with best practices
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-warning/10 mt-4 rounded-lg p-4">
                      <p className="text-foreground mb-2 text-sm font-semibold">
                        Example DMARC Record:
                      </p>
                      <code className="text-primary block rounded bg-black/5 p-2 text-xs dark:bg-white/5">
                        v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com;
                        pct=100; adkim=r; aspf=r
                      </code>
                    </div>

                    <Alert variant="info" className="mt-4">
                      <Shield className="h-5 w-5" />
                      <div>
                        <div className="font-semibold">
                          Use Case: Testing & Gradual Rollout
                        </div>
                        <div className="text-muted-foreground mt-1 text-sm">
                          Use p=quarantine for 7-14 days to verify no legitimate
                          email is being quarantined. Monitor user complaints
                          before moving to p=reject for full protection.
                        </div>
                      </div>
                    </Alert>
                  </div>
                </div>
              </div>
            </Card>

            {/* p=reject */}
            <Card className="border-success/20">
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-success/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Ban className="text-success h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground mb-2 text-2xl font-semibold">
                      p=reject (Full Enforcement)
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      <strong>What it does:</strong> Emails failing DMARC checks
                      are completely blocked at the mail server level. They
                      never reach the recipient&apos;s inbox or spam folder.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-success mb-2 text-sm font-medium">
                          ✓ Pros:
                        </p>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>
                            • <strong>100% protection</strong> from domain
                            spoofing
                          </li>
                          <li>• Compliant with Google/Yahoo 2025 mandates</li>
                          <li>
                            • Best practice recommended by security experts
                          </li>
                          <li>
                            • Protects brand reputation and customer trust
                          </li>
                          <li>• Required for BIMI (brand logo in inbox)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-destructive mb-2 text-sm font-medium">
                          ✗ Cons:
                        </p>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>
                            • Risk of blocking legitimate email if misconfigured
                          </li>
                          <li>
                            • Requires 95%+ authentication pass rate first
                          </li>
                          <li>• No recovery for blocked emails</li>
                          <li>• Needs careful testing at p=quarantine first</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-success/10 mt-4 rounded-lg p-4">
                      <p className="text-foreground mb-2 text-sm font-semibold">
                        Example DMARC Record:
                      </p>
                      <code className="text-primary block rounded bg-black/5 p-2 text-xs dark:bg-white/5">
                        v=DMARC1; p=reject; sp=reject;
                        rua=mailto:dmarc@yourdomain.com; pct=100; adkim=s;
                        aspf=s
                      </code>
                    </div>

                    <Alert variant="success" className="mt-4">
                      <CheckCircle2 className="h-5 w-5" />
                      <div>
                        <div className="font-semibold">
                          Use Case: Production & Maximum Security
                        </div>
                        <div className="text-muted-foreground mt-1 text-sm">
                          Deploy p=reject once you have verified 95%+
                          authentication pass rate and tested at p=quarantine.
                          This is the target policy for all production domains
                          to achieve maximum email security.
                        </div>
                      </div>
                    </Alert>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* pct Tag for Gradual Rollout */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Using the pct Tag for Gradual Rollout
          </h2>

          <div className="prose-custom mb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The <strong>pct</strong> (percentage) tag allows you to gradually
              roll out DMARC enforcement, reducing risk of blocking legitimate
              email:
            </p>
          </div>

          <Card>
            <div className="p-6">
              <div className="mb-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <Percent className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-3 text-xl font-semibold">
                  How pct Works
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  The pct tag specifies what percentage of failing messages the
                  policy applies to. For example, <code>pct=50</code> means only
                  50% of emails failing DMARC will be quarantined/rejected. The
                  other 50% are treated as if the policy were p=none.
                </p>
              </div>

              <div className="space-y-3">
                <div className="border-border rounded-lg border p-4">
                  <p className="text-foreground mb-2 font-medium">
                    Week 1: Start with 10% enforcement
                  </p>
                  <code className="text-primary block rounded bg-black/5 p-2 text-xs dark:bg-white/5">
                    v=DMARC1; p=quarantine; pct=10; rua=mailto:...
                  </code>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Only 10% of failing emails are quarantined. Monitor for
                    issues with low impact.
                  </p>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <p className="text-foreground mb-2 font-medium">
                    Week 2: Increase to 50% enforcement
                  </p>
                  <code className="text-primary block rounded bg-black/5 p-2 text-xs dark:bg-white/5">
                    v=DMARC1; p=quarantine; pct=50; rua=mailto:...
                  </code>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Half of failing emails are quarantined. Gain confidence with
                    moderate exposure.
                  </p>
                </div>

                <div className="border-success/30 bg-success/5 rounded-lg border p-4">
                  <p className="text-foreground mb-2 font-medium">
                    Week 3: Full 100% enforcement
                  </p>
                  <code className="text-primary block rounded bg-black/5 p-2 text-xs dark:bg-white/5">
                    v=DMARC1; p=reject; pct=100; rua=mailto:...
                  </code>
                  <p className="text-muted-foreground mt-2 text-sm">
                    All failing emails are rejected. Full DMARC protection
                    achieved.
                  </p>
                </div>
              </div>

              <Alert variant="info" className="mt-6">
                <Shield className="h-5 w-5" />
                <div>
                  <div className="font-semibold">
                    Pro Tip: Skip pct for p=none
                  </div>
                  <div className="text-muted-foreground mt-1 text-sm">
                    Don&apos;t use pct with p=none - it has no effect since
                    p=none doesn&apos;t enforce anything. Start using pct when
                    moving to p=quarantine or p=reject.
                  </div>
                </div>
              </Alert>
            </div>
          </Card>
        </section>

        {/* Recommended Deployment Timeline */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Recommended Deployment Timeline
          </h2>

          <Card>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-muted flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                      <span className="text-foreground text-sm font-bold">
                        1
                      </span>
                    </div>
                    <div className="border-border mt-2 h-full w-px border-l-2" />
                  </div>
                  <div className="pb-6">
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Days 1-7: Deploy p=none
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Collect DMARC reports to discover all email sources. Goal:
                      Identify and fix SPF/DKIM authentication issues.
                    </p>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <p className="text-muted-foreground text-sm">
                        <strong>Success Metric:</strong> 95%+ authentication
                        pass rate across all email sources
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-muted flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                      <span className="text-foreground text-sm font-bold">
                        2
                      </span>
                    </div>
                    <div className="border-border mt-2 h-full w-px border-l-2" />
                  </div>
                  <div className="pb-6">
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Days 8-14: Upgrade to p=quarantine
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Test enforcement in spam folder. Optional: Use pct=50 for
                      gradual rollout.
                    </p>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <p className="text-muted-foreground text-sm">
                        <strong>Success Metric:</strong> No user complaints
                        about missing legitimate emails
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-success/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                      <span className="text-success text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Day 15+: Move to p=reject
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Full enforcement and maximum protection. Continue
                      monitoring DMARC reports monthly.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success text-sm font-semibold">
                        ✓ Target Achieved: 100% DMARC protection in 2-3 weeks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Alert variant="success" className="mt-6">
            <CheckCircle2 className="h-5 w-5" />
            <div>
              <div className="font-semibold">
                Automated Deployment: 1-2 Weeks Instead of 6+ Months
              </div>
              <div className="text-muted-foreground mt-1 text-sm">
                TrustYourInbox automates this entire timeline. We discover email
                sources, fix authentication issues, and progress through p=none
                → p=quarantine → p=reject automatically. Deploy DMARC 4x faster
                than manual processes.{" "}
                <Link href="/demo" className="text-primary hover:underline">
                  Start free trial
                </Link>
              </div>
            </div>
          </Alert>
        </section>

        {/* Policy Decision Flowchart */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Which Policy Should You Use Right Now?
          </h2>

          <Card>
            <div className="p-6">
              <div className="space-y-4">
                <div className="border-muted rounded-lg border-2 p-4">
                  <p className="text-foreground mb-3 font-semibold">
                    ❓ Do you have a DMARC record deployed?
                  </p>
                  <div className="ml-6 space-y-3">
                    <div>
                      <p className="text-destructive mb-2 font-medium">
                        ✗ No → Start with p=none
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Generate your first DMARC policy with{" "}
                        <Link
                          href="/tools/dmarc-policy-generator"
                          className="text-primary hover:underline"
                        >
                          DMARC Policy Generator
                        </Link>{" "}
                        and deploy p=none for discovery
                      </p>
                    </div>
                    <div>
                      <p className="text-success mb-2 font-medium">
                        ✓ Yes → Continue below
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-muted rounded-lg border-2 p-4">
                  <p className="text-foreground mb-3 font-semibold">
                    ❓ What is your current policy?
                  </p>
                  <div className="ml-6 space-y-3">
                    <div>
                      <p className="text-muted-foreground mb-2 font-medium">
                        Currently p=none:
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>
                          • Check authentication pass rate in DMARC reports
                        </li>
                        <li>• If 95%+ pass rate → Upgrade to p=quarantine</li>
                        <li>• If &lt;95% pass rate → Fix SPF/DKIM first</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-2 font-medium">
                        Currently p=quarantine:
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Monitor for user complaints (7-14 days)</li>
                        <li>• If no issues → Upgrade to p=reject</li>
                        <li>
                          • If complaints → Investigate authentication failures
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-success mb-2 font-medium">
                        Currently p=reject:
                      </p>
                      <ul className="text-success space-y-1 text-sm">
                        <li>✓ You&apos;re fully protected!</li>
                        <li>✓ Continue monthly DMARC report monitoring</li>
                        <li>
                          ✓ Consider enabling BIMI for brand logo in inbox
                        </li>
                      </ul>
                    </div>
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
            <Link href="/guides/dmarc-quick-start-guide">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DMARC Quick Start Guide
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Get started with DMARC in 15 minutes
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/guides/moving-to-p-reject-safely">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Moving to p=reject Safely
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Step-by-step guide to full enforcement
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/guides/creating-your-first-dmarc-record">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Creating Your First DMARC Record
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Beginner-friendly DMARC setup guide
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
                Get to p=reject in 1-2 Weeks, Not Months
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                TrustYourInbox automates the entire DMARC deployment process. We
                progress through p=none → p=quarantine → p=reject automatically,
                fixing authentication issues along the way. No manual policy
                updates or guesswork required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/demo">
                  <Button size="lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/tools/dmarc-policy-generator">
                  <Button size="lg" variant="outline">
                    Generate DMARC Policy Free
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Free Tools */}
        <section>
          <h2 className="text-foreground mb-6 text-2xl font-bold">
            Free DMARC Policy Tools
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/tools/dmarc-domain-checker">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DMARC Domain Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Check what policy your domain currently has
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
                    Generate p=none, p=quarantine, or p=reject policies
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
                    Analyze your current policy for issues
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dmarc-policy-impact-simulator">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Policy Impact Simulator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Test policy changes before deployment
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
                    Comprehensive DMARC, SPF, DKIM audit
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
                    Check SPF authentication for your domain
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
