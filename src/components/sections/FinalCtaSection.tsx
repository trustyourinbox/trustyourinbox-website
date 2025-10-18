"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { motion } from "framer-motion";
import DemoRequestForm from "@/components/DemoRequestForm";

export default function FinalCtaSection() {
  return (
    <section className="from-secondary/30 via-secondary/20 to-background relative overflow-hidden bg-gradient-to-b py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="bg-grid-white/[0.02] absolute inset-0 bg-[size:60px_60px]" />
      <div className="bg-primary/10 absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-3xl" />

      <div className="relative z-10 container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium sm:text-base">
            <Shield className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
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
          <p className="text-muted-foreground mb-8 text-base leading-relaxed sm:text-lg md:text-xl">
            Join 1,200+ IT teams and MSPs who trust TrustYourInbox to protect
            their email domains from spoofing and phishing attacks. Start your
            free 14-day trial today—no credit card required.
          </p>

          {/* CTAs */}
          <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/25 inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 sm:text-lg"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <DemoRequestForm
              triggerButton={
                <button className="group border-border bg-background hover:border-primary/50 hover:bg-primary/5 inline-flex items-center justify-center gap-2 rounded-lg border-2 px-8 py-4 text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95 sm:text-lg">
                  Schedule Demo
                </button>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
