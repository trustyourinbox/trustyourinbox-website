import BentoGridFeatures from "@/components/sections/BentoGridFeatures";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

export const metadata = {
  title: "Product Features - TrustYourInbox DMARC Platform",
  description:
    "Explore comprehensive DMARC analytics, multi-domain management, team collaboration, and powerful security tools designed for IT teams and MSPs.",
};

export default function ProductPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-primary/5 to-background relative overflow-hidden bg-gradient-to-b py-16 sm:py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <Shield className="text-primary h-4 w-4" />
              <span className="text-primary">Full Feature Overview</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Everything You Need for{" "}
              <span className="text-primary">DMARC Success</span>
            </h1>

            <p className="text-muted-foreground mb-8 text-lg sm:text-xl md:text-2xl">
              Professional-grade DMARC analytics, domain management, and
              security tools built for IT teams and MSPs who value simplicity
              without sacrificing power.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="border-border hover:border-primary/50 hover:bg-primary/5 inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 text-base font-semibold transition-all"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <BentoGridFeatures />

      {/* Detailed Features Grid */}
      <FeaturesSection />

      {/* Bottom CTA */}
      <section className="from-secondary/30 to-background bg-gradient-to-b py-16 sm:py-20">
        <div className="container">
          <div className="border-primary/20 from-primary/5 mx-auto max-w-3xl rounded-2xl border bg-gradient-to-br to-transparent p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Join 1,200+ teams protecting their email domains with
              TrustYourInbox
            </p>
            <Link
              href="/signup"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3 text-base font-semibold transition-all"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
