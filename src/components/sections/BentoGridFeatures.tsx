"use client";

import {
  BarChart3,
  Shield,
  FileText,
  Globe,
  Users,
  TrendingUp,
  Search,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Comprehensive Analytics",
    description:
      "Interactive dashboards with pie charts, area charts, and bar graphs showing authentication methods, compliance trends, and domain performance.",
    icon: BarChart3,
    size: "large", // 2 columns
    gradient: "from-blue-500/20 to-indigo-500/20",
    image: "/images/bento-grid/comprehensive-analytics.png",
    href: "/features/analytics",
  },
  {
    title: "Bulk Report Processing",
    description:
      "Upload and process multiple DMARC reports (XML, GZIP, ZIP) with real-time progress tracking.",
    icon: FileText,
    size: "small",
    gradient: "from-purple-500/20 to-pink-500/20",
    image: "/images/bento-grid/bulk-report-processing.png",
    href: "/features/reports",
  },
  {
    title: "DMARC & SPF Tools",
    description:
      "Built-in analyzers to validate records, check DNS lookups, and get actionable recommendations.",
    icon: Search,
    size: "small",
    gradient: "from-green-500/20 to-emerald-500/20",
    image: "/images/bento-grid/dmarc-spf-tools.png",
    href: "/features/tools",
  },
  {
    title: "Multi-Domain Dashboard",
    description:
      "Register, verify, and manage unlimited domains with advanced filtering and status tracking.",
    icon: Globe,
    size: "medium",
    gradient: "from-orange-500/20 to-red-500/20",
    image: "/images/bento-grid/multi-domain-dashboard.png",
    href: "/features/domains",
  },
  {
    title: "Team Collaboration",
    description:
      "Role-based access control with Owner, Admin, Project Manager, Member, and Viewer roles. MFA support included.",
    icon: Users,
    size: "medium",
    gradient: "from-cyan-500/20 to-blue-500/20",
    image: "/images/bento-grid/team-collaboration.png",
    href: "/features/collaboration",
  },
  {
    title: "Historical Trends",
    description:
      "Time-series analysis with 7, 30, 90, and 365-day views. Compare multiple domains over time.",
    icon: TrendingUp,
    size: "small",
    gradient: "from-yellow-500/20 to-orange-500/20",
    image: "/images/bento-grid/historical-trends.png",
    href: "/features/trends",
  },
  {
    title: "Real-time Monitoring",
    description:
      "Live authentication status updates and instant alerts for policy changes or security issues.",
    icon: Zap,
    size: "small",
    gradient: "from-pink-500/20 to-purple-500/20",
    image: "/images/bento-grid/real-time-monitoring.png",
    href: "/features/monitoring",
  },
  {
    title: "Sender Intelligence",
    description:
      "Analyze email senders with detailed insights. Identify legitimate sources and detect unauthorized senders across domains.",
    icon: Shield,
    size: "large",
    gradient: "from-indigo-500/20 to-purple-500/20",
    image: "/images/bento-grid/sender-intelligence.png",
    href: "/features/sender-intelligence",
  },
];

export default function BentoGridFeatures() {
  return (
    <section className="bg-gradient-to-b from-background via-secondary/20 to-secondary/30 py-12 sm:py-16 md:py-20 lg:py-24">
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
            <span className="text-primary">Everything You Need</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Email Security, <span className="text-primary">Simplified</span>
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
            Professional-grade DMARC tools and analytics designed for teams that
            value both security and simplicity.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const getGridSpan = () => {
              if (feature.size === "large") return "sm:col-span-2";
              if (feature.size === "medium")
                return "sm:col-span-2 lg:col-span-1";
              return "";
            };

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href={feature.href}
                  className={`group relative block overflow-hidden rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer hover:border-primary/30 hover:shadow-2xl sm:rounded-2xl sm:p-6 md:p-8 ${getGridSpan()}`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col">
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6">
                      <div className="inline-flex rounded-lg bg-primary/10 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 sm:rounded-xl sm:p-3">
                        <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-6 sm:h-6 sm:w-6" />
                      </div>
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary sm:mb-3 sm:text-xl">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {feature.description}
                      </p>
                    </div>

                    {/* Screenshot */}
                    {feature.image && (
                      <div className="mt-4 overflow-hidden rounded-lg border border-border bg-muted/30">
                        <Image
                          src={feature.image}
                          alt={`${feature.title} screenshot`}
                          width={600}
                          height={400}
                          className="h-auto w-full object-cover"
                          quality={90}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                        />
                      </div>
                    )}

                    {/* Arrow indicator on hover */}
                    <div className="absolute bottom-5 left-5 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
                      <span>Learn more</span>
                      <svg
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center sm:mt-12 md:mt-16">
          <p className="mb-4 text-sm text-muted-foreground sm:text-base">
            Want to see it in action?
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#demo"
              className="touch-target inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              Try Live Demo
            </a>
            <a
              href="/features"
              className="touch-target inline-flex w-full items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-primary/10 sm:w-auto"
            >
              View All Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
