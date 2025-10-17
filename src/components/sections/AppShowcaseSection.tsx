"use client";

import Image from "next/image";
import { Shield, FileText, Wrench, Globe } from "lucide-react";
import { motion } from "framer-motion";

const screenshots = [
  {
    title: "Executive Dashboard",
    description:
      "Real-time DMARC analytics with compliance scores, authentication rates, and threat monitoring. Visual trends and actionable insights at a glance.",
    image: "/images/app-screenshots/dashboard-overview.png",
    icon: Shield,
    features: [
      "DMARC Score Tracking",
      "Authentication Rate Monitoring",
      "Threat Detection",
      "30-Day Trends",
    ],
  },
  {
    title: "Domain Management",
    description:
      "Register, verify, and monitor unlimited domains from a single dashboard. Track verification status and security compliance across your entire portfolio.",
    image: "/images/app-screenshots/domains-management.png",
    icon: Globe,
    features: [
      "Multi-Domain Support",
      "Verification Tracking",
      "Status Monitoring",
      "Bulk Operations",
    ],
  },
  {
    title: "Report Analysis",
    description:
      "Process and analyze DMARC aggregate reports with detailed breakdowns by reporting organization, date range, and compliance metrics.",
    image: "/images/app-screenshots/reports-management.png",
    icon: FileText,
    features: [
      "Bulk Report Upload",
      "Compliance Analysis",
      "Historical Data",
      "Export Capabilities",
    ],
  },
  {
    title: "Security Tools",
    description:
      "Built-in DMARC, SPF, and DKIM analyzers with real-time validation, DNS lookup checks, and actionable security recommendations.",
    image: "/images/app-screenshots/security-tools.png",
    icon: Wrench,
    features: [
      "DMARC Analyzer",
      "SPF Validator",
      "DMARC Generator",
      "Report Decoder",
    ],
  },
];

export default function AppShowcaseSection() {
  return (
    <section className="bg-gradient-to-b from-secondary/30 via-secondary/20 to-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium sm:mb-6 sm:px-4 sm:text-sm">
            <Shield className="mr-2 h-3 w-3 flex-shrink-0 text-primary sm:h-4 sm:w-4" />
            <span className="text-primary">See It In Action</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Powerful Features,{" "}
            <span className="text-primary">Beautiful UI</span>
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
            Experience the dashboard that makes DMARC management effortless for
            IT teams and MSPs.
          </p>
        </motion.div>

        {/* Screenshots */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {screenshots.map((screenshot, index) => {
            const Icon = screenshot.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? "" : "lg:col-start-2"}`}>
                  <div className="inline-flex rounded-lg bg-primary/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary transition-transform duration-300 hover:rotate-12" />
                  </div>

                  <div>
                    <h3 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                      {screenshot.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {screenshot.description}
                    </p>
                  </div>

                  <ul className="grid grid-cols-2 gap-3">
                    {screenshot.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm sm:text-base"
                      >
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot */}
                <div
                  className={`relative ${isEven ? "lg:col-start-2" : "lg:col-start-1"}`}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute ${isEven ? "-right-8" : "-left-8"} -top-8 h-64 w-64 rounded-full bg-primary/10 blur-3xl`}
                  ></div>

                  <div className="relative overflow-hidden rounded-xl border-2 border-primary/20 bg-background shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src={screenshot.image}
                      alt={`${screenshot.title} - ${screenshot.description}`}
                      width={1200}
                      height={750}
                      className="h-auto w-full"
                      quality={90}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center sm:mt-20 md:mt-24">
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 sm:p-10 md:p-12">
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              Ready to Experience It Yourself?
            </h3>
            <p className="mb-6 text-base text-muted-foreground sm:text-lg">
              Start your free 14-day trial and see why teams love TrustYourInbox
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start Free Trial
              </a>
              <a
                href="/demo"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold transition-colors hover:bg-primary/10"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
