"use client"

import { Shield, Target, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2 text-primary" />
              <span className="text-primary">About TrustYourInbox</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Making Email Security <span className="text-primary">Accessible</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We&apos;re on a mission to help organizations of all sizes protect their email domains from spoofing, phishing, and brand abuse through simple, powerful DMARC analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Email security shouldn&apos;t be complicated. We built TrustYourInbox because we saw too many IT teams and MSPs struggling with complex DMARC implementations that took months to deploy and were difficult to maintain.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform makes DMARC analytics simple, visual, and actionable - so you can protect your domains in minutes, not months.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Simplicity First</h3>
                <p className="text-sm text-muted-foreground">
                  Complex problems deserve elegant solutions
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Security Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Protecting brands and building trust
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Customer Success</h3>
                <p className="text-sm text-muted-foreground">
                  Your success is our success
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Fast Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Continuously improving our platform
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1,247</div>
              <div className="text-sm text-muted-foreground">Protected Domains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2.4M</div>
              <div className="text-sm text-muted-foreground">Emails Analyzed Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98.7%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring & Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Email?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join over 1,200 IT teams protecting their domains with TrustYourInbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold hover:bg-muted transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
