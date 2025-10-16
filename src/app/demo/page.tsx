"use client"

import Link from "next/link"
import { Play, BarChart3, Shield, Globe, FileText, Users, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

const demoSteps = [
  {
    number: "01",
    title: "Connect Your Domain",
    description: "Add your domain and verify ownership through DNS. We'll guide you through publishing your DMARC record.",
    icon: Globe,
    features: ["DNS verification", "Guided setup", "Record generation"],
  },
  {
    number: "02",
    title: "Upload DMARC Reports",
    description: "Upload aggregate reports (XML/GZIP/ZIP) or configure automatic delivery. Start seeing data immediately.",
    icon: FileText,
    features: ["Drag & drop upload", "Bulk processing", "Auto-import from email"],
  },
  {
    number: "03",
    title: "Analyze Authentication",
    description: "View comprehensive dashboards showing DMARC compliance, SPF/DKIM authentication, and sender patterns.",
    icon: BarChart3,
    features: ["Real-time analytics", "Trend analysis", "Failure detection"],
  },
  {
    number: "04",
    title: "Enforce & Protect",
    description: "Gradually move from monitoring to enforcement. Protect your domain from spoofing and phishing attacks.",
    icon: Shield,
    features: ["Progressive enforcement", "Policy recommendations", "Automated alerts"],
  },
]

const features = [
  { icon: BarChart3, title: "4 Dashboard Views", desc: "Executive, Analytics, Trends, Failures" },
  { icon: FileText, title: "Report Management", desc: "Upload, parse, analyze RUA reports" },
  { icon: Globe, title: "Multi-Domain", desc: "Monitor unlimited domains" },
  { icon: Users, title: "Team Collaboration", desc: "RBAC with SSO support" },
  { icon: Shield, title: "Security Tools", desc: "DMARC, SPF, DKIM analyzers" },
  { icon: CheckCircle, title: "Compliance Tracking", desc: "Real-time authentication metrics" },
]

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium mb-6">
              <Play className="h-4 w-4 mr-2 text-primary" />
              <span className="text-primary">Product Walkthrough</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              See <span className="text-primary">TrustYourInbox</span> in Action
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover how easy it is to monitor DMARC compliance, analyze reports, and protect your email domain from spoofing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Play className="h-5 w-5" />
                Watch Video Demo
              </Button>
              <Link href="/signup">
                <Button size="lg" variant="outline">
                  Try It Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Screenshot Placeholder */}
      <section className="py-12 -mt-8">
        <div className="container max-w-5xl">
          <div className="relative rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-background/50 to-background backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Video Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-muted/30 via-background to-background flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex p-6 rounded-full bg-primary/10 mb-4">
                  <Play className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Product Demo Video</h3>
                <p className="text-muted-foreground">
                  4-minute walkthrough of TrustYourInbox features
                </p>
              </div>
            </div>

            {/* Video Controls Mockup */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Play className="h-5 w-5" />
                </button>
                <div className="flex-1 h-1 bg-muted rounded-full">
                  <div className="h-full w-1/3 bg-primary rounded-full"></div>
                </div>
                <span className="text-sm text-muted-foreground">1:20 / 4:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Four simple steps to complete DMARC protection
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {demoSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                      <div className="inline-flex p-3 rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    <div className="space-y-2">
                      {step.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Screenshot Placeholder */}
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <div className="rounded-xl border border-border bg-gradient-to-br from-muted/30 to-background aspect-video flex items-center justify-center">
                      <Icon className="h-16 w-16 text-primary/20" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What You&apos;ll Get</h2>
            <p className="text-lg text-muted-foreground">
              Complete DMARC monitoring and email security platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border border-border bg-background"
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Callout */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background p-12 text-center">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Want to Try It Yourself?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sign up for a free account and explore TrustYourInbox with your own data. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/tools">
                <Button size="lg" variant="outline">
                  Try Free Tools
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-secondary/30">
        <div className="container max-w-3xl">
          <div className="text-center">
            <div className="text-6xl mb-6">&quot;</div>
            <blockquote className="text-2xl font-medium mb-6">
              TrustYourInbox made DMARC implementation painless. We went from p=none to p=reject in just 3 weeks without any delivery issues.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div>
                <div className="font-bold">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">IT Director, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Protect Your Domain?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join 1,200+ IT teams using TrustYourInbox for DMARC compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">
                  Start Free Trial
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
  )
}
