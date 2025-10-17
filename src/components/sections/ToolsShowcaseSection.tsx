"use client";

import { Shield, Wrench, FileCode, Search } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ToolsShowcaseSection() {
  return (
    <section className="bg-gradient-to-b from-background via-secondary/20 to-secondary/30 py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-[58rem] text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Wrench className="mr-2 h-4 w-4" />
            Powerful Built-in Tools
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Everything You Need to Secure Email
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Professional-grade tools for DMARC analysis, SPF validation, and
            record generation—all built right into the platform.
          </p>
        </motion.div>

        <div className="space-y-24">
          {/* DMARC Analyzer Tool */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-12 md:grid-cols-2"
          >
            <div className="order-2 md:order-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  DMARC Analyzer
                </h3>
              </div>
              <p className="mb-6 text-lg text-muted-foreground">
                Validate your DMARC configuration instantly. Our analyzer checks
                your domain&apos;s DMARC and SPF records, shows policy status,
                coverage percentage, DNS lookup counts, and alignment details.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">
                    Real-time domain validation with security status
                    (SECURE/WARNING/FAIL)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">
                    Policy analysis (none/quarantine/reject) with coverage
                    metrics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">
                    Actionable recommendations for improving security
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-xl border-2 border-primary/20 bg-background shadow-2xl">
                <Image
                  src="/images/bento-grid/dmarc-spf-tools.png"
                  alt="DMARC Analyzer Tool Screenshot"
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                  quality={90}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          </motion.div>

          {/* SPF Analyzer Tool */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid items-center gap-12 md:grid-cols-2"
          >
            <div>
              <div className="relative overflow-hidden rounded-xl border-2 border-primary/20 bg-background shadow-2xl">
                <Image
                  src="/images/tools/spf-analyzer.png"
                  alt="SPF Analyzer Tool Screenshot"
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                  quality={90}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  SPF Analyzer
                </h3>
              </div>
              <p className="mb-6 text-lg text-muted-foreground">
                Deep dive into your SPF configuration. Analyze SPF records,
                break down mechanisms, count DNS lookups, identify authorized
                sources, and receive expert recommendations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">
                    Comprehensive mechanism breakdown and validation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">
                    DNS lookup counting to avoid the 10-lookup limit
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">
                    Authorized source identification and analysis
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* DMARC Generator Tool */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid items-center gap-12 md:grid-cols-2"
          >
            <div className="order-2 md:order-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-3">
                  <FileCode className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  DMARC Record Generator
                </h3>
              </div>
              <p className="mb-6 text-lg text-muted-foreground">
                Generate properly configured DMARC DNS records in seconds. Set
                policies, configure reporting addresses, and get deployment
                instructions—all through a guided interface.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">
                    Guided policy configuration (monitoring, quarantine, reject)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">
                    RUA/RUF reporting address setup
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">
                    One-click DNS record generation
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-xl border-2 border-primary/20 bg-background shadow-2xl">
                <Image
                  src="/images/tools/dmarc-generator.png"
                  alt="DMARC Generator Tool Screenshot"
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                  quality={90}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
