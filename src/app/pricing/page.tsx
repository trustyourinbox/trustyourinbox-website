"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, X, DollarSign, Shield, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/Button"

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
]

const comparisonFeatures = [
  { category: "Core Features", features: [
    { name: "Domains", free: "1", business: "5", enterprise: "Unlimited" },
    { name: "Team Members", free: "1", business: "10", enterprise: "Unlimited" },
    { name: "Email Volume/Month", free: "100", business: "1,000", enterprise: "Unlimited" },
    { name: "Report Storage", free: "30 days", business: "1 year", enterprise: "Unlimited" },
  ]},
  { category: "Analytics & Reporting", features: [
    { name: "Basic Dashboard", free: true, business: true, enterprise: true },
    { name: "Advanced Analytics", free: false, business: true, enterprise: true },
    { name: "Historical Trends", free: false, business: true, enterprise: true },
    { name: "Custom Reports", free: false, business: false, enterprise: true },
    { name: "Export (CSV/PDF)", free: false, business: true, enterprise: true },
  ]},
  { category: "Security Tools", features: [
    { name: "DMARC Analyzer", free: true, business: true, enterprise: true },
    { name: "SPF Analyzer", free: true, business: true, enterprise: true },
    { name: "Policy Generator", free: true, business: true, enterprise: true },
    { name: "Sender Intelligence", free: false, business: true, enterprise: true },
    { name: "Failure Analysis", free: false, business: true, enterprise: true },
  ]},
  { category: "Support & SLA", features: [
    { name: "Email Support", free: false, business: true, enterprise: true },
    { name: "Priority Support", free: false, business: true, enterprise: true },
    { name: "Dedicated Support", free: false, business: false, enterprise: true },
    { name: "SLA Guarantee", free: false, business: false, enterprise: true },
    { name: "Onboarding Assistance", free: false, business: false, enterprise: true },
  ]},
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium mb-6">
              <DollarSign className="h-4 w-4 mr-2 text-primary" />
              <span className="text-primary">Simple, Transparent Pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Choose Your <span className="text-primary">Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Start free, upgrade as you grow. No credit card required for trial.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 p-1 rounded-lg bg-secondary">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-background shadow-sm"
                    : "hover:bg-background/50"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingPeriod === "annual"
                    ? "bg-background shadow-sm"
                    : "hover:bg-background/50"
                }`}
              >
                Annual <span className="text-primary ml-1">(Save 20%)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 -mt-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => {
              const displayPrice = billingPeriod === "annual" && plan.price > 0
                ? Math.round(plan.price * 0.8)
                : plan.price

              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border-2 bg-background p-8 transition-all duration-300 ${
                    plan.popular
                      ? "border-primary shadow-2xl scale-105 lg:-translate-y-4"
                      : "border-border hover:shadow-xl hover:border-primary/30"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">${displayPrice}</span>
                      <span className="text-muted-foreground">/{plan.period === "forever" ? "forever" : billingPeriod === "annual" ? "month" : plan.period}</span>
                    </div>
                    {billingPeriod === "annual" && plan.price > 0 && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Billed ${displayPrice * 12}/year
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <Button
                    className={`w-full mb-8 ${plan.popular ? "" : "variant-outline"}`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature.name} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground/60"}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-secondary/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Compare Plans</h2>
            <p className="text-lg text-muted-foreground">
              Detailed feature breakdown across all plans
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-background rounded-lg border border-border">
                <div className="font-bold">Features</div>
                <div className="text-center font-bold">Free</div>
                <div className="text-center font-bold text-primary">Business</div>
                <div className="text-center font-bold">Enterprise</div>
              </div>

              {/* Table Body */}
              {comparisonFeatures.map((category) => (
                <div key={category.category} className="mb-8">
                  <h3 className="text-lg font-bold mb-4 px-4">{category.category}</h3>
                  <div className="space-y-2">
                    {category.features.map((feature) => (
                      <div
                        key={feature.name}
                        className="grid grid-cols-4 gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
                      >
                        <div>{feature.name}</div>
                        <div className="text-center">
                          {typeof feature.free === "boolean" ? (
                            feature.free ? (
                              <Check className="h-5 w-5 text-primary mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm">{feature.free}</span>
                          )}
                        </div>
                        <div className="text-center">
                          {typeof feature.business === "boolean" ? (
                            feature.business ? (
                              <Check className="h-5 w-5 text-primary mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-medium">{feature.business}</span>
                          )}
                        </div>
                        <div className="text-center">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="h-5 w-5 text-primary mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-medium">{feature.enterprise}</span>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes! You can upgrade or downgrade at any time. Upgrades take effect immediately, downgrades at the end of your billing cycle."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, Amex) and ACH transfers for Enterprise plans."
              },
              {
                q: "Is there a setup fee?",
                a: "No setup fees for any plan. What you see is what you pay."
              },
              {
                q: "What happens if I exceed my limits?",
                a: "We'll notify you at 80% and 100% usage. You can upgrade anytime to increase limits."
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 30-day money-back guarantee on all paid plans."
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start protecting your domain today with a 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold hover:bg-muted transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
