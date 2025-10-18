"use client";

import { Shield, Wrench, FileCode, Search } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ToolsShowcaseSection() {
  return (
    <section className="from-background via-secondary/20 to-secondary/30 bg-gradient-to-b py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-[58rem] text-center"
        >
          <div className="bg-primary/10 text-primary mb-4 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
            <Wrench className="mr-2 h-4 w-4" />
            Powerful Built-in Tools
          </div>
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything You Need to Secure Email
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
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
                <div className="bg-primary/10 rounded-lg p-3">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground text-2xl font-bold">
                  DMARC Analyzer
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Validate your DMARC configuration instantly. Our analyzer checks
                your domain&apos;s DMARC and SPF records, shows policy status,
                coverage percentage, DNS lookup counts, and alignment details.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span className="text-foreground">
                    Real-time domain validation with security status
                    (SECURE/WARNING/FAIL)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span className="text-foreground">
                    Policy analysis (none/quarantine/reject) with coverage
                    metrics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span className="text-foreground">
                    Actionable recommendations for improving security
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="border-primary/20 bg-background relative overflow-hidden rounded-md border-2 shadow-2xl">
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
              <div className="border-primary/20 bg-background relative overflow-hidden rounded-md border-2 shadow-2xl">
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
                <div className="bg-primary/10 rounded-lg p-3">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground text-2xl font-bold">
                  SPF Analyzer
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Deep dive into your SPF configuration. Analyze SPF records,
                break down mechanisms, count DNS lookups, identify authorized
                sources, and receive expert recommendations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span className="text-foreground">
                    Comprehensive mechanism breakdown and validation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span className="text-foreground">
                    DNS lookup counting to avoid the 10-lookup limit
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
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
                <div className="bg-primary/10 rounded-lg p-3">
                  <FileCode className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground text-2xl font-bold">
                  DMARC Record Generator
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Generate properly configured DMARC DNS records in seconds. Set
                policies, configure reporting addresses, and get deployment
                instructions—all through a guided interface.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span className="text-foreground">
                    Guided policy configuration (monitoring, quarantine, reject)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span className="text-foreground">
                    RUA/RUF reporting address setup
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                  </div>
                  <span className="text-foreground">
                    One-click DNS record generation
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="border-primary/20 bg-background relative overflow-hidden rounded-md border-2 shadow-2xl">
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
