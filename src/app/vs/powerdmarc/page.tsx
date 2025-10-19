import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Shield,
  Zap,
  DollarSign,
  Users,
  BarChart2,
  Clock,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "TrustYourInbox vs PowerDMARC: Features, Pricing & Comparison 2025",
  description:
    "Compare TrustYourInbox and PowerDMARC for DMARC monitoring. See pricing differences, feature comparison, deployment speed, and why leading companies choose TrustYourInbox over PowerDMARC.",
  keywords: [
    "TrustYourInbox vs PowerDMARC",
    "PowerDMARC alternative",
    "DMARC software comparison",
    "PowerDMARC pricing",
    "best DMARC tool",
    "PowerDMARC competitor",
  ],
  openGraph: {
    title: "TrustYourInbox vs PowerDMARC: Complete Comparison 2025",
    description:
      "Compare features, pricing, and deployment speed. See why companies choose TrustYourInbox over PowerDMARC.",
    type: "website",
  },
};

export default function TrustYourInboxVsPowerDMARC() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="border-border border-b">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Comparison Guide
            </div>
            <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              TrustYourInbox vs PowerDMARC
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Comparing features, pricing, and deployment speed for enterprise
              DMARC platforms. See why companies choose TrustYourInbox for 4x
              faster deployment and transparent pricing.
            </p>
          </div>

          {/* Quick Comparison Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-primary/20">
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                    <Shield className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground text-lg font-bold">
                      TrustYourInbox
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Modern, Fast, Transparent
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="text-success h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      4x faster deployment
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-success h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Free tools + Enterprise platform
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-success h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Transparent pricing from day 1
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-success h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Automated enforcement workflow
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-full">
                    <Shield className="text-muted-foreground h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground text-lg font-bold">
                      PowerDMARC
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Established, Feature-Rich
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="text-muted-foreground h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Comprehensive security suite
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-muted-foreground h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      AI-powered threat intelligence
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="text-destructive h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Complex pricing (quote-based)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="text-destructive h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Longer deployment cycles
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Pricing Comparison */}
        <section className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-3 text-3xl font-bold">
              Pricing Comparison
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Compare transparent pricing models and total cost of ownership
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* TrustYourInbox Pricing */}
            <Card className="border-primary/20">
              <div className="p-8">
                <div className="mb-6 text-center">
                  <h3 className="text-foreground mb-2 text-xl font-bold">
                    TrustYourInbox
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-foreground text-4xl font-bold">
                      $99
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Per domain, unlimited emails
                  </p>
                </div>

                <ul className="mb-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Free tier available:</strong> All monitoring tools
                      free forever
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Transparent pricing:</strong> No hidden fees or
                      usage caps
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Unlimited DMARC aggregate reports
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Real-time monitoring and alerts
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Automated policy enforcement workflow
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      MSP/reseller discounts (80%+ margins)
                    </span>
                  </li>
                </ul>

                <Link href="/demo">
                  <Button className="w-full" size="lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* PowerDMARC Pricing */}
            <Card>
              <div className="p-8">
                <div className="mb-6 text-center">
                  <h3 className="text-foreground mb-2 text-xl font-bold">
                    PowerDMARC
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-foreground text-4xl font-bold">
                      $8+
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Starting price, custom quotes required
                  </p>
                </div>

                <ul className="mb-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Free plan: Basic monitoring (personal use)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Quote-based pricing:</strong> Must contact sales
                      for enterprise
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Email volume limits (10K-50K per tier)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      AI-powered threat intelligence (paid add-on)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Managed services available (additional cost)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Multi-tenant MSP dashboard (custom pricing)
                    </span>
                  </li>
                </ul>

                <Button className="w-full" size="lg" variant="outline">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-3 text-3xl font-bold">
              Feature-by-Feature Comparison
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Side-by-side comparison of key features and capabilities
            </p>
          </div>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-border bg-muted/30 border-b">
                  <tr>
                    <th className="text-foreground px-6 py-4 text-left text-sm font-semibold">
                      Feature
                    </th>
                    <th className="text-foreground px-6 py-4 text-center text-sm font-semibold">
                      TrustYourInbox
                    </th>
                    <th className="text-foreground px-6 py-4 text-center text-sm font-semibold">
                      PowerDMARC
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-border divide-y">
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      DMARC Monitoring
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      SPF & DKIM Validation
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Aggregate Report Parsing
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Deployment Speed
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-success text-sm font-semibold">
                        1-2 weeks
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-muted-foreground text-sm">
                        4-8 weeks
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Free Tools Available
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-muted-foreground mx-auto h-5 w-5 opacity-50" />
                      <span className="text-muted-foreground block text-xs">
                        Limited
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Automated Enforcement Workflow
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="text-destructive mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      White-Label MSP Dashboard
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Transparent Pricing
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="text-destructive mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Email Volume Limits
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-success text-sm font-semibold">
                        Unlimited
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-muted-foreground text-sm">
                        10K-50K/tier
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      AI Threat Intelligence
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-muted-foreground mx-auto h-5 w-5 opacity-50" />
                      <span className="text-muted-foreground block text-xs">
                        Roadmap
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      BIMI Support
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      MTA-STS & TLS-RPT
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Why Choose TrustYourInbox */}
        <section className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-3 text-3xl font-bold">
              Why Companies Choose TrustYourInbox
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Key advantages that make TrustYourInbox the preferred choice
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <Zap className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  4x Faster Deployment
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Get to p=reject in 1-2 weeks vs 4-8 weeks. Automated workflows
                  guide you from monitoring to enforcement without manual
                  complexity.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <DollarSign className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Transparent Pricing
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  $99/month per domain with unlimited emails. No hidden fees, no
                  volume caps, no surprise invoices. Know your costs from day 1.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Free Tools Forever
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Access all monitoring tools free forever. Test DMARC policies,
                  check DNS records, analyze reports - no credit card required.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  MSP-Optimized
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  White-label dashboards, reseller pricing with 80%+ margins,
                  multi-tenant management. Built specifically for MSP workflows.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <BarChart2 className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Actionable Insights
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Clear recommendations, not just data dumps. Know exactly what
                  to fix and how to fix it with step-by-step guidance.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <Clock className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  24/7 Expert Support
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Real humans with DMARC expertise available 24/7. Not just
                  ticket queues - get answers from email authentication
                  specialists.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="border-primary/20 bg-primary/5">
            <div className="p-12 text-center">
              <h2 className="text-foreground mb-4 text-3xl font-bold">
                Ready to Deploy DMARC 4x Faster?
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                Try TrustYourInbox free for 14 days. No credit card required.
                See why companies switch from PowerDMARC for faster deployment
                and transparent pricing.
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
                    Try Free Tools
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
