"use client"

import type { Metadata } from 'next'
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, Search, Bell, ArrowRight, Shield, Mail, Lock } from "lucide-react"
import { useState } from "react"
import DmarcSolutionSection from "@/components/sections/DmarcSolutionSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import { Button } from "@/components/ui/Button"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  const [domain, setDomain] = useState('');

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                Trusted by 1000+ IT Teams Worldwide
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent leading-[1.4]">
                Reduce Email Spoofing by 98% with DMARC Enforcement
              </h1>
              <p className="text-xl text-muted-foreground">
                Protect your domain from email spoofing and phishing attacks with our automated DMARC solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Demo
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
            <div className="relative mx-auto max-w-[600px]">
              <div className="relative rounded-lg border bg-background p-6 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-muted-foreground">DMARC Dashboard</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-3/4 rounded bg-muted"></div>
                    <div className="h-3 w-1/2 rounded bg-muted"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-md border bg-muted/30 p-6 text-center">
                      <div className="text-3xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Pass Rate</div>
                    </div>
                    <div className="rounded-md border bg-muted/30 p-6 text-center">
                      <div className="text-3xl font-bold text-destructive">2%</div>
                      <div className="text-sm text-muted-foreground">Fail Rate</div>
                    </div>
                  </div>
                  <div className="rounded-md border bg-muted/30 p-6">
                    <div className="mb-3 text-base font-medium">DMARC Status</div>
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-full rounded-full bg-muted">
                        <div className="h-3 w-3/4 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary/20 blur-xl"></div>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-xl"></div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/10 bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>
      </section>

      {/* DMARC Solution Section */}
      <DmarcSolutionSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Features Section */}
      <FeaturesSection />
    </div>
  )
}
