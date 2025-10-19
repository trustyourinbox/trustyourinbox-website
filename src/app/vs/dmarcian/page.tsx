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
  TrendingUp,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function TrustYourInboxVsDmarcian() {
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
              TrustYourInbox vs Dmarcian
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Comparing features, pricing, and deployment speed for enterprise
              DMARC platforms. See why companies choose TrustYourInbox for 4x
              faster deployment, transparent pricing, and modern automation.
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
                      Modern, Fast, Automated
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="text-success h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      4x faster deployment (1-2 weeks)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-success h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Transparent pricing: $99/month
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-success h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Automated enforcement workflow
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-success h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Free tools + Enterprise platform
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
                      Dmarcian
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Established, Enterprise-Focused
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="text-muted-foreground h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Industry pioneer since 2012
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-muted-foreground h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Strong brand recognition
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="text-destructive h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Quote-based pricing only
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
              Compare transparent pricing vs. custom quotes and total cost of
              ownership
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
                      <strong>Public pricing:</strong> See costs before talking
                      to sales
                    </span>
                  </li>
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
                      <strong>No hidden costs:</strong> No setup fees,
                      contracts, or volume caps
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

            {/* Dmarcian Pricing */}
            <Card>
              <div className="p-8">
                <div className="mb-6 text-center">
                  <h3 className="text-foreground mb-2 text-xl font-bold">
                    Dmarcian
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-foreground text-4xl font-bold">
                      Custom
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Quote-based pricing, contact sales required
                  </p>
                </div>

                <ul className="mb-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <X className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>No public pricing:</strong> Must request custom
                      quote
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Sales process required:</strong> Multiple calls
                      before pricing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Variable pricing:</strong> Costs depend on volume,
                      domains, features
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Comprehensive DMARC monitoring included
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Expert consulting services available
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Enterprise SLA options
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

          {/* Pricing Transparency Note */}
          <div className="mt-8">
            <Card className="border-primary/20 bg-primary/5">
              <div className="p-6">
                <h3 className="text-foreground mb-3 flex items-center gap-2 text-lg font-semibold">
                  <TrendingUp className="text-primary h-5 w-5" />
                  Why Transparent Pricing Matters
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-muted-foreground mb-2 text-sm font-medium">
                      TrustYourInbox Approach:
                    </p>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>✓ See pricing instantly on website</li>
                      <li>✓ Calculate costs before trials</li>
                      <li>✓ Budget accurately from day 1</li>
                      <li>✓ No sales pressure or negotiations</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2 text-sm font-medium">
                      Dmarcian Approach:
                    </p>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>✗ Hidden pricing until sales call</li>
                      <li>✗ Multiple meetings required</li>
                      <li>✗ Pricing varies by negotiation</li>
                      <li>✗ Delayed procurement process</li>
                    </ul>
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
                      Dmarcian
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
                  <tr className="bg-muted/20">
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Automated Enforcement Workflow
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                      <span className="text-muted-foreground block text-xs">
                        Built-in
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="text-destructive mx-auto h-5 w-5" />
                      <span className="text-muted-foreground block text-xs">
                        Manual
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
                        Limited
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Pricing Transparency
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                      <span className="text-muted-foreground block text-xs">
                        Public
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="text-destructive mx-auto h-5 w-5" />
                      <span className="text-muted-foreground block text-xs">
                        Quote-based
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
                        Available
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
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
                        Varies by plan
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
                      Expert Consulting
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                      <span className="text-muted-foreground block text-xs">
                        24/7 Support
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="text-success mx-auto h-5 w-5" />
                      <span className="text-muted-foreground block text-xs">
                        Premium Add-on
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="text-foreground px-6 py-4 text-sm font-medium">
                      Implementation Speed
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-success text-sm font-semibold">
                        Self-service
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-muted-foreground text-sm">
                        Guided setup
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
              Why Companies Choose TrustYourInbox
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Key advantages that make TrustYourInbox the modern alternative
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
                  Reach p=reject in 1-2 weeks vs 4-8 weeks with Dmarcian.
                  Automated workflows eliminate manual policy tuning and
                  guesswork.
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
                  See costs upfront: $99/month per domain. No sales calls, no
                  negotiations, no surprises. Budget accurately from day one.
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
                  11+ DMARC, SPF, and DKIM tools available free. Test policies,
                  validate records, analyze reports - no enterprise license
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
                  MSP-Optimized
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built for MSPs with white-label dashboards, 80%+ margins, and
                  multi-tenant management. Scale profitably without complex
                  contracts.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <BarChart2 className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Automated Workflows
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Step-by-step enforcement automation guides you from p=none to
                  p=reject. No manual analysis or spreadsheet tracking needed.
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
                  Real DMARC specialists available around the clock. No premium
                  consulting fees - expert support included with every plan.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* When to Choose Dmarcian */}
        <section className="mb-16">
          <Card className="border-muted">
            <div className="p-8">
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                When Dmarcian Might Be Right
              </h2>
              <p className="text-muted-foreground mb-4">
                Dmarcian can be a good fit for:
              </p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    <strong>Enterprises requiring extensive consulting:</strong>{" "}
                    If you need hands-on implementation services and dedicated
                    account management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    <strong>
                      Organizations with complex vendor requirements:
                    </strong>{" "}
                    If procurement mandates established vendors with long track
                    records
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    <strong>Companies needing extensive training:</strong> If
                    your team requires comprehensive onboarding and education
                    programs
                  </span>
                </li>
              </ul>
              <div className="bg-primary/10 border-primary/30 mt-6 rounded-lg border p-4">
                <p className="text-primary text-sm font-medium">
                  💡 Note: Most organizations find TrustYourInbox&apos;s
                  automated workflows, transparent pricing, and 24/7 expert
                  support provide better value without the lengthy sales process
                  and quote-based pricing uncertainty.
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
                Ready to Deploy DMARC 4x Faster?
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                Try TrustYourInbox free for 14 days. No credit card required, no
                sales calls, no custom quotes. See transparent pricing and
                modern automation in action.
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
