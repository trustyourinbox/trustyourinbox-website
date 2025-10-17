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
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 xl:gap-16">
          {/* Left: Content */}
          <div className="space-y-6 sm:space-y-8 lg:pr-8">
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
              <Link href="/signup">
                <Button
                  size="lg"
                  className="to-accent-hover h-11 w-full gap-2 bg-gradient-to-r from-primary px-6 text-sm hover:opacity-90 sm:h-12 sm:w-auto sm:px-8 sm:text-base"
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

            {/* Customer Logos */}
            <div className="border-t border-border pt-6 sm:pt-8">
              <p className="mb-4 text-center text-xs text-muted-foreground sm:text-left sm:text-sm">
                Trusted by leading organizations
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:justify-start sm:gap-8">
                {customerLogos.map((logo) => (
                  <div key={logo.name} className="flex-shrink-0">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={logo.width}
                      height={logo.height}
                      className="h-8 w-auto object-contain sm:h-10"
                    />
                  </div>
                ))}
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

            {/* Real Dashboard Screenshot */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl border-2 border-primary/20 bg-gradient-to-br from-background/50 to-background shadow-2xl backdrop-blur-xl sm:rounded-2xl">
                <Image
                  src="/images/app-screenshots/dashboard-overview.png"
                  alt="TrustYourInbox Dashboard - Executive analytics showing DMARC score, authentication rates, email volume trends, and top sending sources"
                  width={1200}
                  height={750}
                  className="h-auto w-full"
                  priority
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
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
