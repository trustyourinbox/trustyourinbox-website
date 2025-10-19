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

export default function TrustYourInboxVsEasyDMARC() {
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
              TrustYourInbox vs EasyDMARC
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Comparing features, pricing, and scalability for enterprise DMARC
              platforms. See why companies choose TrustYourInbox for unlimited
              email volumes and transparent enterprise pricing.
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
                      Enterprise-Ready, Unlimited Scale
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="text-success h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Unlimited email volume
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
                      $99/month transparent pricing
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-success h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      4x faster deployment
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
                      EasyDMARC
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Small Business Focus
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="text-muted-foreground h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Lower entry price ($35.99/mo)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-muted-foreground h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Good for small domains
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="text-destructive h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Email volume limits (100K-1M)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="text-destructive h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Price increases with scale
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
              Compare transparent pricing models and how costs scale with email
              volume
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
                      <strong>Unlimited email volume:</strong> Same price for
                      100K or 100M emails
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Predictable costs:</strong> No surprise charges as
                      you scale
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

            {/* EasyDMARC Pricing */}
            <Card>
              <div className="p-8">
                <div className="mb-6 text-center">
                  <h3 className="text-foreground mb-2 text-xl font-bold">
                    EasyDMARC
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-foreground text-4xl font-bold">
                      $35.99+
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Starting price, increases with volume
                  </p>
                </div>

                <ul className="mb-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Free plan: 1 domain, basic monitoring
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Volume limits:</strong> $35.99 (100K emails) to
                      $71.99 (1M emails)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Overage fees:</strong> Additional charges for
                      exceeding limits
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      DMARC, SPF, DKIM monitoring included
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      BIMI support on higher tiers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      API access on Business+ plans
                    </span>
                  </li>
                </ul>

                <Button className="w-full" size="lg" variant="outline">
                  View EasyDMARC Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Pricing Example */}
          <div className="mt-8">
            <Card className="border-warning/30 bg-warning/5">
              <div className="p-6">
                <h3 className="text-foreground mb-4 text-lg font-semibold">
                  Cost Comparison: Enterprise Email Volume
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-muted-foreground mb-2 text-sm">
                      <strong>Scenario:</strong> 5 million emails/month
                    </p>
                    <p className="text-success text-sm">
                      <strong>TrustYourInbox:</strong> $99/month (unlimited
                      volume)
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2 text-sm">
                      <strong>Same scenario</strong>
                    </p>
                    <p className="text-destructive text-sm">
                      <strong>EasyDMARC:</strong> $71.99+ (1M limit) + overage
                      fees
                    </p>
                  </div>
                </div>
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
                      EasyDMARC
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
                      Email Volume Limits
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-success text-sm font-semibold">
                        Unlimited
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-destructive text-sm font-semibold">
                        100K-1M/tier
                      </span>
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
                        2-4 weeks
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Free Tools Available
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                      <span className="text-muted-foreground block text-xs">
                        11+ Tools
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-muted-foreground mx-auto h-5 w-5 opacity-50" />
                      <span className="text-muted-foreground block text-xs">
                        Basic Only
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
                      <Check className="text-muted-foreground mx-auto h-5 w-5 opacity-50" />
                      <span className="text-muted-foreground block text-xs">
                        Manual
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      White-Label MSP Dashboard
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                      <span className="text-muted-foreground block text-xs">
                        80%+ Margins
                      </span>
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
                      Transparent Pricing
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-warning mx-auto h-5 w-5" />
                      <span className="text-muted-foreground block text-xs">
                        Volume-based
                      </span>
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
                  <tr>
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      API Access
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                      <span className="text-muted-foreground block text-xs">
                        All Plans
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-muted-foreground mx-auto h-5 w-5 opacity-50" />
                      <span className="text-muted-foreground block text-xs">
                        Business+
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Customer Base
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-muted-foreground text-sm">
                        1,200+ Domains
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-muted-foreground text-sm">
                        83K+ Businesses
                      </span>
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
              Why Enterprises Choose TrustYourInbox
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Key advantages for high-volume email senders
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <Zap className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Unlimited Email Volume
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Process 100K or 100M emails per month at the same $99 price.
                  No overage fees, no volume tiers, no surprises as you scale.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <DollarSign className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Predictable Enterprise Costs
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Budget confidently with transparent per-domain pricing.
                  EasyDMARC&apos;s volume limits mean costs increase
                  unpredictably with growth.
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
                  Access 11+ DMARC, SPF, and DKIM tools free forever. Test
                  policies, validate records, analyze reports - no credit card
                  required.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  MSP-Optimized Platform
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built for MSPs with white-label dashboards, 80%+ reseller
                  margins, and multi-tenant management. Scale your security
                  offerings profitably.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <BarChart2 className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Automated Enforcement
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Move from p=none to p=reject in 1-2 weeks with guided
                  workflows. No manual policy adjustments or guesswork required.
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
                  Real DMARC experts available around the clock. Not chatbots or
                  ticket queues - get personalized guidance from email security
                  specialists.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* When to Choose EasyDMARC */}
        <section className="mb-16">
          <Card className="border-muted">
            <div className="p-8">
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                When EasyDMARC Might Be Right
              </h2>
              <p className="text-muted-foreground mb-4">
                EasyDMARC can be a good fit for:
              </p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    <strong>Small businesses</strong> with low email volume
                    (&lt;100K/month) looking for budget pricing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    <strong>Single domain monitoring</strong> with predictable,
                    low volume
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    <strong>Basic DMARC compliance</strong> without advanced
                    automation needs
                  </span>
                </li>
              </ul>
              <div className="bg-warning/10 border-warning/30 mt-6 rounded-lg border p-4">
                <p className="text-warning text-sm font-medium">
                  ⚠️ Important: EasyDMARC&apos;s volume-based pricing can become
                  expensive quickly for enterprises. A domain sending 5M
                  emails/month exceeds their 1M tier limit, requiring upgrades
                  or overage fees.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="border-primary/20 bg-primary/5">
            <div className="p-12 text-center">
              <h2 className="text-foreground mb-4 text-3xl font-bold">
                Scale Without Limits, Budget With Confidence
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                Try TrustYourInbox free for 14 days. No credit card required,
                unlimited email volume. See why enterprises choose predictable
                pricing over volume-based tiers.
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
