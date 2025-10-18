"use client";

import { Shield, Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <Shield className="text-primary mr-2 h-4 w-4" />
              <span className="text-primary">About TrustYourInbox</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              Making Email Security{" "}
              <span className="text-primary">Accessible</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
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
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                Email security shouldn&apos;t be complicated. We built
                TrustYourInbox because we saw too many IT teams and MSPs
                struggling with complex DMARC implementations that took months
                to deploy and were difficult to maintain.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our platform makes DMARC analytics simple, visual, and
                actionable - so you can protect your domains in minutes, not
                months.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-border bg-background rounded-2xl border p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-xl p-3">
                  <Target className="text-primary h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Simplicity First</h3>
                <p className="text-muted-foreground text-sm">
                  Complex problems deserve elegant solutions
                </p>
              </div>
              <div className="border-border bg-background rounded-2xl border p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-xl p-3">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Security Focus</h3>
                <p className="text-muted-foreground text-sm">
                  Protecting brands and building trust
                </p>
              </div>
              <div className="border-border bg-background rounded-2xl border p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-xl p-3">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Customer Success</h3>
                <p className="text-muted-foreground text-sm">
                  Your success is our success
                </p>
              </div>
              <div className="border-border bg-background rounded-2xl border p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-xl p-3">
                  <Zap className="text-primary h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Fast Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Continuously improving our platform
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="border-border grid gap-8 border-t pt-12 md:grid-cols-4">
            <div className="text-center">
              <div className="text-primary mb-2 text-4xl font-bold">1,247</div>
              <div className="text-muted-foreground text-sm">
                Protected Domains
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary mb-2 text-4xl font-bold">2.4M</div>
              <div className="text-muted-foreground text-sm">
                Emails Analyzed Monthly
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary mb-2 text-4xl font-bold">98.7%</div>
              <div className="text-muted-foreground text-sm">
                Customer Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary mb-2 text-4xl font-bold">24/7</div>
              <div className="text-muted-foreground text-sm">
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
            <p className="text-muted-foreground mb-8 text-lg">
              Join leading companies protecting their domains with
              TrustYourInbox
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/signup"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="border-border hover:bg-muted inline-flex items-center justify-center rounded-lg border px-8 py-3 text-sm font-semibold transition-colors"
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
