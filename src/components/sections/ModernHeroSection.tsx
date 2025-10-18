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
  { value: "1,200+", label: "Domains Protected", icon: Shield },
  { value: "2.4M+", label: "Emails Analyzed/mo", icon: TrendingUp },
  { value: "98.7%", label: "Customer Satisfaction", icon: Users },
];

export default function ModernHeroSection() {
  return (
    <section className="bg-background relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-mesh)" }}
      />

      {/* Content */}
      <div className="relative z-10 container py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 xl:gap-16">
          {/* Left: Content */}
          <div className="space-y-6 sm:space-y-8 lg:pr-8">
            {/* Badge */}
            <div className="border-primary/20 bg-primary/5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm">
              <div className="flex h-2 w-2 flex-shrink-0 items-center justify-center">
                <div className="bg-primary h-full w-full animate-pulse rounded-full"></div>
              </div>
              <span className="text-primary">
                Chosen by leading companies worldwide
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl leading-snug font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Stop Email Spoofing in{" "}
                <span className="text-primary">Minutes</span>, Not Months
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                DMARC analytics that IT teams and MSPs actually want to use.
                Deploy, monitor, and enforce email security without the
                complexity.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="to-accent-hover from-primary h-11 w-full gap-2 bg-gradient-to-r px-6 text-sm hover:opacity-90 sm:h-12 sm:w-auto sm:px-8 sm:text-base"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 w-full gap-2 px-6 text-sm sm:h-12 sm:w-auto sm:px-8 sm:text-base"
                >
                  <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                  View Live Demo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-2 sm:gap-6 sm:pt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">
                  No credit card required
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">Cancel anytime</span>
              </div>
            </div>

            {/* Stats */}
            <div className="border-border grid grid-cols-3 gap-3 border-t pt-6 sm:gap-6 sm:pt-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="space-y-1 text-center sm:text-left"
                  >
                    <div className="flex items-center justify-center gap-1.5 sm:justify-start sm:gap-2">
                      <Icon className="text-primary h-3.5 w-3.5 flex-shrink-0 sm:h-4 sm:w-4" />
                      <div className="text-foreground text-lg font-bold sm:text-2xl md:text-3xl">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-muted-foreground text-[10px] leading-tight sm:text-xs sm:leading-normal">
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
            <div className="bg-primary/20 absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl sm:-top-20 sm:-right-20 sm:h-72 sm:w-72"></div>
            <div className="bg-accent-hover/20 absolute -bottom-10 -left-10 h-40 w-40 rounded-full blur-3xl sm:-bottom-20 sm:-left-20 sm:h-72 sm:w-72"></div>

            {/* Real Dashboard Screenshot */}
            <div className="relative">
              <div className="border-primary/20 from-background/50 to-background overflow-hidden rounded-md border-2 bg-gradient-to-br shadow-2xl backdrop-blur-xl sm:rounded-lg">
                <Image
                  src="/images/app-screenshots/dashboard-overview.png"
                  alt="TrustYourInbox Dashboard - Executive analytics showing DMARC score, authentication rates, email volume trends, and top sending sources"
                  width={1200}
                  height={750}
                  className="h-auto w-full"
                  priority
                  fetchPriority="high"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
              </div>

              {/* Floating badge */}
              <div className="border-primary/20 bg-background absolute -right-2 -bottom-2 rounded-md border-2 p-2.5 shadow-xl backdrop-blur-sm sm:-right-4 sm:-bottom-4 sm:rounded-md sm:p-3 md:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="to-accent-hover from-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br sm:h-10 sm:w-10">
                    <Shield className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <div className="text-foreground text-xs font-semibold sm:text-sm">
                      98% Protection
                    </div>
                    <div className="text-muted-foreground text-[10px] sm:text-xs">
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
