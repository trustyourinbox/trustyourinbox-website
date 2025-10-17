"use client"

import Link from "next/link"
import { ArrowRight, Play, CheckCircle2, Shield, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Image from "next/image"

const stats = [
  { value: "1,247", label: "Domains Protected", icon: Shield },
  { value: "2.4M", label: "Emails Analyzed/mo", icon: TrendingUp },
  { value: "98.7%", label: "Customer Satisfaction", icon: Users },
]

const customerLogos = [
  { name: "Microsoft", src: "/images/logos/microsoft.svg", width: 120, height: 40 },
  { name: "Google", src: "/images/logos/google.svg", width: 100, height: 40 },
  { name: "Salesforce", src: "/images/logos/salesforce.svg", width: 130, height: 40 },
  { name: "IBM", src: "/images/logos/ibm.svg", width: 80, height: 40 },
]

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium">
              <div className="flex h-2 w-2 items-center justify-center flex-shrink-0">
                <div className="h-full w-full animate-pulse rounded-full bg-primary"></div>
              </div>
              <span className="text-primary">Trusted by 1,200+ IT teams worldwide</span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                Stop Email Spoofing in{" "}
                <span className="text-primary">
                  Minutes
                </span>
                , Not Months
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                DMARC analytics that IT teams and MSPs actually want to use. Deploy, monitor, and enforce email security without the complexity.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="gap-2 text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto bg-gradient-to-r from-primary to-accent-hover hover:opacity-90">
                Start Free Trial
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto">
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                View Live Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 sm:pt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">No credit card required</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="space-y-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
            {/* Glow effects */}
            <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 h-40 w-40 sm:h-72 sm:w-72 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 h-40 w-40 sm:h-72 sm:w-72 rounded-full bg-accent-hover/20 blur-3xl"></div>

            {/* Dashboard mockup - will be replaced with real screenshot */}
            <div className="relative">
              <div className="rounded-xl sm:rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-background/50 to-background backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="aspect-[16/10] p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 via-background to-background">
                  {/* Window chrome */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500/80"></div>
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500/80"></div>
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-muted-foreground hidden sm:block">Analytics Dashboard</div>
                  </div>

                  {/* Dashboard content */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* Stats row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                      <div className="col-span-1 rounded-xl bg-background/90 backdrop-blur-sm p-4 border border-primary/10 shadow-sm">
                        <div className="text-3xl font-bold text-primary">94.2%</div>
                        <div className="text-xs text-muted-foreground mt-1">Compliance</div>
                      </div>
                      <div className="col-span-1 rounded-xl bg-background/90 backdrop-blur-sm p-4 border border-border shadow-sm">
                        <div className="text-3xl font-bold text-foreground">2.4M</div>
                        <div className="text-xs text-muted-foreground mt-1">Emails</div>
                      </div>
                      <div className="col-span-2 rounded-xl bg-background/90 backdrop-blur-sm p-4 border border-border shadow-sm">
                        <div className="text-xs text-muted-foreground mb-2">Authentication Methods</div>
                        <div className="flex gap-1.5 h-4">
                          <div className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-sm"></div>
                          <div className="flex-1 bg-gradient-to-t from-primary/70 to-primary/40 rounded-sm"></div>
                          <div className="flex-1 bg-gradient-to-t from-primary/40 to-primary/20 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* Chart area */}
                    <div className="rounded-xl bg-background/90 backdrop-blur-sm p-3 sm:p-4 md:p-6 border border-border shadow-sm">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="text-xs sm:text-sm font-medium text-foreground">Compliance Trends</div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground">Last 30 days</div>
                      </div>
                      <div className="flex items-end gap-1 sm:gap-1.5 h-16 sm:h-20 md:h-24">
                        {[65, 70, 75, 82, 88, 91, 94, 92, 95, 97, 94, 96].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-primary via-primary/80 to-primary/60 rounded-t-sm transition-all hover:from-primary/80"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-2 -bottom-2 sm:-right-4 sm:-bottom-4 rounded-lg sm:rounded-xl bg-background border-2 border-primary/20 shadow-xl p-2.5 sm:p-3 md:p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-primary to-accent-hover flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-foreground">98% Protection</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Active now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
