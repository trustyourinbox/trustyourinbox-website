"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 via-secondary/20 to-background py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="bg-grid-white/[0.02] absolute inset-0 bg-[size:60px_60px]" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium sm:text-base">
            <Shield className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
            <span className="text-primary">
              Start Protecting Your Domain Today
            </span>
          </div>

          {/* Headline */}
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Secure Your{" "}
            <span className="text-primary">Email Domain?</span>
          </h2>

          {/* Description */}
          <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Join 1,200+ IT teams and MSPs who trust TrustYourInbox to protect
            their email domains from spoofing and phishing attacks. Start your
            free 14-day trial today—no credit card required.
          </p>

          {/* CTAs */}
          <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-95 sm:text-lg"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/demo"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-border bg-background px-8 py-4 text-base font-semibold transition-all duration-200 hover:scale-105 hover:border-primary/50 hover:bg-primary/5 active:scale-95 sm:text-lg"
            >
              Request Demo
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground sm:gap-6 sm:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-border pt-12 sm:grid-cols-3">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary sm:text-4xl">
                1,200+
              </div>
              <div className="text-sm text-muted-foreground sm:text-base">
                Teams Protected
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary sm:text-4xl">
                2.4M+
              </div>
              <div className="text-sm text-muted-foreground sm:text-base">
                Emails Analyzed Monthly
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary sm:text-4xl">
                98.7%
              </div>
              <div className="text-sm text-muted-foreground sm:text-base">
                Customer Satisfaction
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
