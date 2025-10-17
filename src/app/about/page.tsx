"use client";

import { Shield, Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary/30 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium">
              <Shield className="mr-2 h-4 w-4 text-primary" />
              <span className="text-primary">About TrustYourInbox</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              Making Email Security{" "}
              <span className="text-primary">Accessible</span>
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground">
              We&apos;re on a mission to help organizations of all sizes protect
              their email domains from spoofing, phishing, and brand abuse
              through simple, powerful DMARC analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24">
        <div className="container">
          <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">Our Mission</h2>
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                Email security shouldn&apos;t be complicated. We built
                TrustYourInbox because we saw too many IT teams and MSPs
                struggling with complex DMARC implementations that took months
                to deploy and were difficult to maintain.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our platform makes DMARC analytics simple, visual, and
                actionable - so you can protect your domains in minutes, not
                months.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Simplicity First</h3>
                <p className="text-sm text-muted-foreground">
                  Complex problems deserve elegant solutions
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Security Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Protecting brands and building trust
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Customer Success</h3>
                <p className="text-sm text-muted-foreground">
                  Your success is our success
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Fast Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Continuously improving our platform
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-8 border-t border-border pt-12 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">1,247</div>
              <div className="text-sm text-muted-foreground">
                Protected Domains
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">2.4M</div>
              <div className="text-sm text-muted-foreground">
                Emails Analyzed Monthly
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">98.7%</div>
              <div className="text-sm text-muted-foreground">
                Customer Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">
                Monitoring & Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Secure Your Email?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join over 1,200 IT teams protecting their domains with
              TrustYourInbox
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold transition-colors hover:bg-muted"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
