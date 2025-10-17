"use client";

import Link from "next/link";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const stats = [
  { value: "1,247", label: "Domains Protected", icon: Shield },
  { value: "2.4M", label: "Emails Analyzed/mo", icon: TrendingUp },
  { value: "98.7%", label: "Customer Satisfaction", icon: Users },
];

const customerLogos = [
  {
    name: "Microsoft",
    src: "/images/logos/microsoft.svg",
    width: 120,
    height: 40,
  },
  { name: "Google", src: "/images/logos/google.svg", width: 100, height: 40 },
  {
    name: "Salesforce",
    src: "/images/logos/salesforce.svg",
    width: 130,
    height: 40,
  },
  { name: "IBM", src: "/images/logos/ibm.svg", width: 80, height: 40 },
];

export default function ModernHeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Gradient Mesh Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-mesh)" }}
      />

      {/* Content */}
      <div className="container relative z-10 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm">
              <div className="flex h-2 w-2 flex-shrink-0 items-center justify-center">
                <div className="h-full w-full animate-pulse rounded-full bg-primary"></div>
              </div>
              <span className="text-primary">
                Trusted by 1,200+ IT teams worldwide
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Stop Email Spoofing in{" "}
                <span className="text-primary">Minutes</span>, Not Months
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl lg:text-2xl">
                DMARC analytics that IT teams and MSPs actually want to use.
                Deploy, monitor, and enforce email security without the
                complexity.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                className="to-accent-hover h-11 w-full gap-2 bg-gradient-to-r from-primary px-6 text-sm hover:opacity-90 sm:h-12 sm:w-auto sm:px-8 sm:text-base"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 w-full gap-2 px-6 text-sm sm:h-12 sm:w-auto sm:px-8 sm:text-base"
              >
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                View Live Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-2 sm:gap-6 sm:pt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  No credit card required
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Cancel anytime</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-3 sm:gap-6 sm:pt-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="space-y-1 text-center sm:text-left"
                  >
                    <div className="flex items-center justify-center gap-2 sm:justify-start">
                      <Icon className="h-4 w-4 flex-shrink-0 text-primary" />
                      <div className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="relative order-first mt-8 lg:order-last lg:mt-0">
            {/* Glow effects */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl sm:-right-20 sm:-top-20 sm:h-72 sm:w-72"></div>
            <div className="bg-accent-hover/20 absolute -bottom-10 -left-10 h-40 w-40 rounded-full blur-3xl sm:-bottom-20 sm:-left-20 sm:h-72 sm:w-72"></div>

            {/* Dashboard mockup - will be replaced with real screenshot */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl border-2 border-primary/20 bg-gradient-to-br from-background/50 to-background shadow-2xl backdrop-blur-xl sm:rounded-2xl">
                <div className="aspect-[16/10] bg-gradient-to-br from-muted/30 via-background to-background p-4 sm:p-6 md:p-8">
                  {/* Window chrome */}
                  <div className="mb-4 flex items-center justify-between sm:mb-6">
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500/80 sm:h-3 sm:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500/80 sm:h-3 sm:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500/80 sm:h-3 sm:w-3"></div>
                    </div>
                    <div className="hidden text-xs font-semibold text-muted-foreground sm:block sm:text-sm">
                      Analytics Dashboard
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* Stats row */}
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                      <div className="col-span-1 rounded-xl border border-primary/10 bg-background/90 p-4 shadow-sm backdrop-blur-sm">
                        <div className="text-3xl font-bold text-primary">
                          94.2%
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          Compliance
                        </div>
                      </div>
                      <div className="col-span-1 rounded-xl border border-border bg-background/90 p-4 shadow-sm backdrop-blur-sm">
                        <div className="text-3xl font-bold text-foreground">
                          2.4M
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          Emails
                        </div>
                      </div>
                      <div className="col-span-2 rounded-xl border border-border bg-background/90 p-4 shadow-sm backdrop-blur-sm">
                        <div className="mb-2 text-xs text-muted-foreground">
                          Authentication Methods
                        </div>
                        <div className="flex h-4 gap-1.5">
                          <div className="flex-1 rounded-sm bg-gradient-to-t from-primary to-primary/60"></div>
                          <div className="flex-1 rounded-sm bg-gradient-to-t from-primary/70 to-primary/40"></div>
                          <div className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-primary/20"></div>
                        </div>
                      </div>
                    </div>

                    {/* Chart area */}
                    <div className="rounded-xl border border-border bg-background/90 p-3 shadow-sm backdrop-blur-sm sm:p-4 md:p-6">
                      <div className="mb-3 flex items-center justify-between sm:mb-4">
                        <div className="text-xs font-medium text-foreground sm:text-sm">
                          Compliance Trends
                        </div>
                        <div className="text-[10px] text-muted-foreground sm:text-xs">
                          Last 30 days
                        </div>
                      </div>
                      <div className="flex h-16 items-end gap-1 sm:h-20 sm:gap-1.5 md:h-24">
                        {[65, 70, 75, 82, 88, 91, 94, 92, 95, 97, 94, 96].map(
                          (height, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t-sm bg-gradient-to-t from-primary via-primary/80 to-primary/60 transition-all hover:from-primary/80"
                              style={{ height: `${height}%` }}
                            ></div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 rounded-lg border-2 border-primary/20 bg-background p-2.5 shadow-xl backdrop-blur-sm sm:-bottom-4 sm:-right-4 sm:rounded-xl sm:p-3 md:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="to-accent-hover flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary sm:h-10 sm:w-10">
                    <Shield className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground sm:text-sm">
                      98% Protection
                    </div>
                    <div className="text-[10px] text-muted-foreground sm:text-xs">
                      Active now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
