"use client";

import Link from "next/link";
import {
  Play,
  BarChart3,
  Shield,
  Globe,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const demoSteps = [
  {
    number: "01",
    title: "Connect Your Domain",
    description:
      "Add your domain and verify ownership through DNS. We'll guide you through publishing your DMARC record.",
    icon: Globe,
    features: ["DNS verification", "Guided setup", "Record generation"],
  },
  {
    number: "02",
    title: "Upload DMARC Reports",
    description:
      "Upload aggregate reports (XML/GZIP/ZIP) or configure automatic delivery. Start seeing data immediately.",
    icon: FileText,
    features: [
      "Drag & drop upload",
      "Bulk processing",
      "Auto-import from email",
    ],
  },
  {
    number: "03",
    title: "Analyze Authentication",
    description:
      "View comprehensive dashboards showing DMARC compliance, SPF/DKIM authentication, and sender patterns.",
    icon: BarChart3,
    features: ["Real-time analytics", "Trend analysis", "Failure detection"],
  },
  {
    number: "04",
    title: "Enforce & Protect",
    description:
      "Gradually move from monitoring to enforcement. Protect your domain from spoofing and phishing attacks.",
    icon: Shield,
    features: [
      "Progressive enforcement",
      "Policy recommendations",
      "Automated alerts",
    ],
  },
];

const features = [
  {
    icon: BarChart3,
    title: "4 Dashboard Views",
    desc: "Executive, Analytics, Trends, Failures",
  },
  {
    icon: FileText,
    title: "Report Management",
    desc: "Upload, parse, analyze RUA reports",
  },
  { icon: Globe, title: "Multi-Domain", desc: "Monitor unlimited domains" },
  { icon: Users, title: "Team Collaboration", desc: "RBAC with SSO support" },
  { icon: Shield, title: "Security Tools", desc: "DMARC, SPF, DKIM analyzers" },
  {
    icon: CheckCircle,
    title: "Compliance Tracking",
    desc: "Real-time authentication metrics",
  },
];

export default function DemoPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <Play className="text-primary mr-2 h-4 w-4" />
              <span className="text-primary">Product Walkthrough</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              See <span className="text-primary">TrustYourInbox</span> in Action
            </h1>
            <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
              Discover how easy it is to monitor DMARC compliance, analyze
              reports, and protect your email domain from spoofing.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
      <section className="-mt-8 py-12">
        <div className="container max-w-5xl">
          <div className="border-primary/20 from-background/50 to-background relative overflow-hidden rounded-lg border-2 bg-gradient-to-br shadow-2xl backdrop-blur-xl">
            {/* Video Placeholder */}
            <div className="from-muted/30 via-background to-background flex aspect-video items-center justify-center bg-gradient-to-br">
              <div className="text-center">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-6">
                  <Play className="text-primary h-16 w-16" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Product Demo Video</h3>
                <p className="text-muted-foreground">
                  4-minute walkthrough of TrustYourInbox features
                </p>
              </div>
            </div>

            {/* Video Controls Mockup */}
            <div className="from-background/90 absolute right-0 bottom-0 left-0 bg-gradient-to-t to-transparent p-6">
              <div className="flex items-center gap-4">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-2 transition-colors">
                  <Play className="h-5 w-5" />
                </button>
                <div className="bg-muted h-1 flex-1 rounded-full">
                  <div className="bg-primary h-full w-1/3 rounded-full"></div>
                </div>
                <span className="text-muted-foreground text-sm">
                  1:20 / 4:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">How It Works</h2>
            <p className="text-muted-foreground text-lg">
              Four simple steps to complete DMARC protection
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-12">
            {demoSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="grid items-center gap-8 md:grid-cols-2"
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="text-primary/20 text-6xl font-bold">
                        {step.number}
                      </div>
                      <div className="bg-primary/10 inline-flex rounded-md p-3">
                        <Icon className="text-primary h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      {step.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="text-primary h-4 w-4" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Screenshot Placeholder */}
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <div className="border-border from-muted/30 to-background flex aspect-video items-center justify-center rounded-md border bg-gradient-to-br">
                      <Icon className="text-primary/20 h-16 w-16" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">What You&apos;ll Get</h2>
            <p className="text-muted-foreground text-lg">
              Complete DMARC monitoring and email security platform
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="border-border bg-background rounded-md border p-6"
                >
                  <div className="bg-primary/10 mb-4 inline-flex rounded-lg p-3">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Callout */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="border-primary/20 from-primary/5 to-background rounded-lg border-2 bg-gradient-to-br p-12 text-center">
            <div className="bg-primary/10 mb-6 inline-flex rounded-full p-4">
              <BarChart3 className="text-primary h-8 w-8" />
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              Want to Try It Yourself?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Sign up for a free account and explore TrustYourInbox with your
              own data. No credit card required.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
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
      <section className="bg-secondary/30 py-24">
        <div className="container max-w-3xl">
          <div className="text-center">
            <div className="mb-6 text-6xl">&quot;</div>
            <blockquote className="mb-6 text-2xl font-medium">
              TrustYourInbox made DMARC implementation painless. We went from
              p=none to p=reject in just 3 weeks without any delivery issues.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div>
                <div className="font-bold">Sarah Chen</div>
                <div className="text-muted-foreground text-sm">
                  IT Director, TechCorp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Protect Your Domain?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join leading companies using TrustYourInbox for DMARC compliance
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button size="lg">Start Free Trial</Button>
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
