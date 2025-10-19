"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  X,
  DollarSign,
  Shield,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Free",
    price: 0,
    period: "forever",
    description: "Perfect for testing and small personal websites",
    features: [
      { name: "1 domain", included: true },
      { name: "1 user", included: true },
      { name: "100 emails/month", included: true },
      { name: "Basic dashboard", included: true },
      { name: "DMARC analyzer tool", included: true },
      { name: "Email support", included: false },
      { name: "Advanced analytics", included: false },
      { name: "Team collaboration", included: false },
      { name: "API access", included: false },
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Business",
    price: 49,
    period: "per month",
    description: "For growing teams and businesses",
    features: [
      { name: "5 domains", included: true },
      { name: "10 users", included: true },
      { name: "1,000 emails/month", included: true },
      { name: "Advanced analytics", included: true },
      { name: "All security tools", included: true },
      { name: "Priority email support", included: true },
      { name: "Report export (CSV/PDF)", included: true },
      { name: "Team collaboration", included: true },
      { name: "API access", included: true },
    ],
    cta: "Start Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    period: "per month",
    description: "For large organizations with advanced needs",
    features: [
      { name: "Unlimited domains", included: true },
      { name: "Unlimited users", included: true },
      { name: "Unlimited emails", included: true },
      { name: "All features", included: true },
      { name: "Dedicated support", included: true },
      { name: "SLA guarantee", included: true },
      { name: "SSO (SAML/OAuth)", included: true },
      { name: "Custom integrations", included: true },
      { name: "On-premise option", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const comparisonFeatures = [
  {
    category: "Core Features",
    features: [
      { name: "Domains", free: "1", business: "5", enterprise: "Unlimited" },
      {
        name: "Team Members",
        free: "1",
        business: "10",
        enterprise: "Unlimited",
      },
      {
        name: "Email Volume/Month",
        free: "100",
        business: "1,000",
        enterprise: "Unlimited",
      },
      {
        name: "Report Storage",
        free: "30 days",
        business: "1 year",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    category: "Analytics & Reporting",
    features: [
      { name: "Basic Dashboard", free: true, business: true, enterprise: true },
      {
        name: "Advanced Analytics",
        free: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Historical Trends",
        free: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Custom Reports",
        free: false,
        business: false,
        enterprise: true,
      },
      {
        name: "Export (CSV/PDF)",
        free: false,
        business: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Security Tools",
    features: [
      { name: "DMARC Analyzer", free: true, business: true, enterprise: true },
      { name: "SPF Analyzer", free: true, business: true, enterprise: true },
      {
        name: "Policy Generator",
        free: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Sender Intelligence",
        free: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Failure Analysis",
        free: false,
        business: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support & SLA",
    features: [
      { name: "Email Support", free: false, business: true, enterprise: true },
      {
        name: "Priority Support",
        free: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Dedicated Support",
        free: false,
        business: false,
        enterprise: true,
      },
      { name: "SLA Guarantee", free: false, business: false, enterprise: true },
      {
        name: "Onboarding Assistance",
        free: false,
        business: false,
        enterprise: true,
      },
    ],
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly"
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="border-primary/20 bg-primary/5 mb-4 inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium sm:mb-6 sm:px-4 sm:text-sm">
              <DollarSign className="text-primary mr-2 h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
              <span className="text-primary">Simple, Transparent Pricing</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Choose Your <span className="text-primary">Plan</span>
            </h1>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg md:text-xl">
              Start free, upgrade as you grow. No credit card required for
              trial.
            </p>

            {/* Billing Toggle */}
            <div className="bg-secondary inline-flex items-center gap-2 rounded-lg p-1 sm:gap-3">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`touch-target rounded-md px-4 py-2 text-xs font-medium transition-all sm:px-6 sm:text-sm ${
                  billingPeriod === "monthly"
                    ? "bg-background shadow-sm"
                    : "hover:bg-background/50"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={`touch-target rounded-md px-4 py-2 text-xs font-medium transition-all sm:px-6 sm:text-sm ${
                  billingPeriod === "annual"
                    ? "bg-background shadow-sm"
                    : "hover:bg-background/50"
                }`}
              >
                Annual{" "}
                <span className="text-primary ml-1 hidden sm:inline">
                  (Save 20%)
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="-mt-8 py-8 sm:-mt-12 sm:py-12">
        <div className="container">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => {
              const displayPrice =
                billingPeriod === "annual" && plan.price > 0
                  ? Math.round(plan.price * 0.8)
                  : plan.price;

              return (
                <div
                  key={plan.name}
                  className={`bg-background relative rounded-lg border-2 p-8 transition-all duration-300 ${
                    plan.popular
                      ? "border-primary scale-105 shadow-2xl lg:-translate-y-4"
                      : "border-border hover:border-primary/30 hover:shadow-xl"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground rounded-full px-4 py-1 text-xs font-bold">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">
                        ${displayPrice}
                      </span>
                      <span className="text-muted-foreground">
                        /
                        {plan.period === "forever"
                          ? "forever"
                          : billingPeriod === "annual"
                            ? "month"
                            : plan.period}
                      </span>
                    </div>
                    {billingPeriod === "annual" && plan.price > 0 && (
                      <p className="text-muted-foreground mt-2 text-sm">
                        Billed ${displayPrice * 12}/year
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <Button
                    className={`mb-6 w-full ${plan.popular ? "to-accent-hover from-primary gap-2 bg-gradient-to-r text-white hover:opacity-90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  {/* Divider */}
                  <div className="border-border mb-6 border-t"></div>

                  {/* Included Features */}
                  <div className="space-y-3">
                    {plan.features
                      .filter((f) => f.included)
                      .map((feature) => (
                        <div
                          key={feature.name}
                          className="flex items-start gap-3"
                        >
                          <Check className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                          <span>{feature.name}</span>
                        </div>
                      ))}
                  </div>

                  {/* Excluded Features */}
                  {plan.features.filter((f) => !f.included).length > 0 && (
                    <div className="border-border mt-6 border-t pt-4">
                      <p className="text-muted-foreground mb-2 text-xs font-medium">
                        Not included:
                      </p>
                      <div className="text-muted-foreground/60 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                        {plan.features
                          .filter((f) => !f.included)
                          .map((feature) => (
                            <span key={feature.name}>• {feature.name}</span>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-secondary/30 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container max-w-6xl">
          <div className="mb-8 text-center sm:mb-10 md:mb-12">
            <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
              Compare Plans
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Detailed feature breakdown across all plans
            </p>
          </div>

          <div className="scroll-container relative">
            {/* Scroll indicator for mobile */}
            <div className="from-secondary/30 via-secondary/60 pointer-events-none absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l to-transparent md:hidden"></div>
            <div className="bg-card min-w-[600px] overflow-hidden rounded-xl shadow-lg">
              {/* Table Header - Sticky */}
              <div className="bg-card/95 border-border sticky top-0 z-10 grid grid-cols-4 gap-4 border-b-2 p-4 backdrop-blur-sm">
                <div className="font-bold">Features</div>
                <div className="text-center font-bold">Free</div>
                <div className="text-primary text-center font-bold">
                  Business
                </div>
                <div className="text-center font-bold">Enterprise</div>
              </div>

              {/* Table Body */}
              {comparisonFeatures.map((category) => (
                <div key={category.category}>
                  <div className="bg-muted/50 border-border sticky top-[73px] z-[9] border-y px-4 py-3">
                    <h3 className="text-base font-bold sm:text-lg">
                      {category.category}
                    </h3>
                  </div>
                  <div>
                    {category.features.map((feature, idx) => (
                      <div
                        key={feature.name}
                        className={`hover:bg-muted/30 border-border grid grid-cols-4 gap-4 border-b p-3.5 transition-colors sm:p-4 ${
                          idx === category.features.length - 1
                            ? "border-b-0"
                            : ""
                        }`}
                      >
                        <div>{feature.name}</div>
                        <div className="text-center">
                          {typeof feature.free === "boolean" ? (
                            feature.free ? (
                              <Check className="text-primary mx-auto h-5 w-5" />
                            ) : (
                              <X className="text-muted-foreground/40 mx-auto h-5 w-5" />
                            )
                          ) : (
                            <span className="text-sm">{feature.free}</span>
                          )}
                        </div>
                        <div className="text-center">
                          {typeof feature.business === "boolean" ? (
                            feature.business ? (
                              <Check className="text-primary mx-auto h-5 w-5" />
                            ) : (
                              <X className="text-muted-foreground/40 mx-auto h-5 w-5" />
                            )
                          ) : (
                            <span className="text-sm font-medium">
                              {feature.business}
                            </span>
                          )}
                        </div>
                        <div className="text-center">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="text-primary mx-auto h-5 w-5" />
                            ) : (
                              <X className="text-muted-foreground/40 mx-auto h-5 w-5" />
                            )
                          ) : (
                            <span className="text-sm font-medium">
                              {feature.enterprise}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes! You can upgrade or downgrade at any time. Upgrades take effect immediately, downgrades at the end of your billing cycle.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, Amex) and ACH transfers for Enterprise plans.",
              },
              {
                q: "Is there a setup fee?",
                a: "No setup fees for any plan. What you see is what you pay.",
              },
              {
                q: "What happens if I exceed my limits?",
                a: "We'll notify you at 80% and 100% usage. You can upgrade anytime to increase limits.",
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 30-day money-back guarantee on all paid plans.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border-border bg-background rounded-md border p-6"
              >
                <h3 className="mb-2 font-bold">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Start protecting your domain today with a 14-day free trial. No
              credit card required.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="to-accent-hover from-primary gap-2 bg-gradient-to-r text-white hover:opacity-90"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
