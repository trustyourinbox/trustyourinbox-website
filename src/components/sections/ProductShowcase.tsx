"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  BarChart3,
  Wrench,
  Globe,
  Users,
  FileText,
  Search,
  TrendingUp,
} from "lucide-react";

type Tab = "platform" | "tools" | "teams";

const tabs = [
  { id: "platform" as Tab, label: "Platform Overview", icon: BarChart3 },
  { id: "tools" as Tab, label: "Built-in Tools", icon: Wrench },
  { id: "teams" as Tab, label: "For Your Team", icon: Users },
];

const platformFeatures = [
  {
    title: "Comprehensive Analytics",
    description:
      "Interactive dashboards with real-time DMARC compliance tracking, authentication trends, and visual reporting.",
    icon: BarChart3,
    image: "/images/bento-grid/comprehensive-analytics.png",
    features: [
      "Real-time compliance scores",
      "Authentication rate monitoring",
      "Visual trend analysis",
      "Custom date ranges",
    ],
  },
  {
    title: "Multi-Domain Management",
    description:
      "Register, verify, and monitor unlimited domains from a single dashboard with advanced filtering and status tracking.",
    icon: Globe,
    image: "/images/bento-grid/multi-domain-dashboard.png",
    features: [
      "Unlimited domain support",
      "Verification tracking",
      "Bulk operations",
      "CSV import/export",
    ],
  },
  {
    title: "Report Processing",
    description:
      "Upload and analyze DMARC aggregate reports in bulk. Supports XML, GZIP, and ZIP formats with progress tracking.",
    icon: FileText,
    image: "/images/bento-grid/bulk-report-processing.png",
    features: [
      "Bulk report upload",
      "Multiple format support",
      "Progress tracking",
      "Historical analysis",
    ],
  },
  {
    title: "Historical Trends",
    description:
      "Time-series analysis with 7, 30, 90, and 365-day views. Compare multiple domains and track long-term security improvements.",
    icon: TrendingUp,
    image: "/images/bento-grid/historical-trends.png",
    features: [
      "Multi-timeframe views",
      "Domain comparison",
      "Trend identification",
      "Export capabilities",
    ],
  },
];

const toolFeatures = [
  {
    title: "DMARC Analyzer",
    description:
      "Validate your DMARC configuration instantly with policy status, coverage percentage, DNS lookup counts, and alignment details.",
    icon: Shield,
    image: "/images/bento-grid/dmarc-spf-tools.png",
    features: [
      "Real-time validation",
      "Security status assessment",
      "Policy analysis",
      "Actionable recommendations",
    ],
  },
  {
    title: "SPF Analyzer",
    description:
      "Deep dive into SPF configuration with mechanism breakdown, DNS lookup counting, and authorized source identification.",
    icon: Search,
    image: "/images/tools/spf-analyzer.png",
    features: [
      "Mechanism breakdown",
      "DNS lookup counting",
      "10-lookup limit tracking",
      "Source identification",
    ],
  },
  {
    title: "DMARC Generator",
    description:
      "Generate properly configured DMARC DNS records with guided policy configuration and reporting setup.",
    icon: FileText,
    image: "/images/tools/dmarc-generator.png",
    features: [
      "Guided configuration",
      "Policy recommendations",
      "RUA/RUF setup",
      "One-click generation",
    ],
  },
];

const teamFeatures = [
  {
    title: "Role-Based Access Control",
    description:
      "Owner, Admin, Project Manager, Member, and Viewer roles with granular permissions and MFA support.",
    icon: Users,
    image: "/images/bento-grid/team-collaboration.png",
    features: [
      "5 role levels",
      "Granular permissions",
      "MFA support",
      "Team invitations",
    ],
  },
  {
    title: "Sender Intelligence",
    description:
      "Analyze email senders with detailed insights. Identify legitimate sources and detect unauthorized senders across domains.",
    icon: Shield,
    image: "/images/bento-grid/sender-intelligence.png",
    features: [
      "Sender identification",
      "Threat detection",
      "Source validation",
      "Cross-domain analysis",
    ],
  },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<Tab>("platform");

  const getActiveFeatures = () => {
    switch (activeTab) {
      case "platform":
        return platformFeatures;
      case "tools":
        return toolFeatures;
      case "teams":
        return teamFeatures;
    }
  };

  const features = getActiveFeatures();

  return (
    <section className="from-background via-secondary/20 to-secondary/30 bg-gradient-to-b py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16"
        >
          <div className="border-primary/20 bg-primary/5 mb-4 inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium sm:mb-6 sm:px-4 sm:text-sm">
            <Shield className="text-primary mr-2 h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
            <span className="text-primary">Everything You Need</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Email Security, <span className="text-primary">Simplified</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
            Professional-grade DMARC tools and analytics designed for teams that
            value both security and simplicity.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-12 sm:gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all sm:px-6 sm:py-3 sm:text-base ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-16 sm:space-y-20 md:space-y-24"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={feature.title}
                className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? "" : "lg:col-start-2"}`}>
                  <div className="bg-primary/10 hover:bg-primary/20 inline-flex rounded-lg p-3 transition-all duration-300 hover:scale-110">
                    <Icon className="text-primary h-6 w-6 transition-transform duration-300 hover:rotate-12" />
                  </div>

                  <div>
                    <h3 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {feature.features.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm sm:text-base"
                      >
                        <svg
                          className="text-primary h-5 w-5 flex-shrink-0"
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
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot */}
                <div
                  className={`relative ${isEven ? "lg:col-start-2" : "lg:col-start-1"}`}
                >
                  <div
                    className={`absolute ${isEven ? "-right-8" : "-left-8"} bg-primary/10 -top-8 h-64 w-64 rounded-full blur-3xl`}
                  ></div>

                  <div className="border-primary/20 bg-background relative overflow-hidden rounded-xl border-2 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src={feature.image}
                      alt={`${feature.title} screenshot`}
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
              </div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center sm:mt-20 md:mt-24">
          <div className="border-primary/20 from-primary/5 mx-auto max-w-2xl rounded-2xl border bg-gradient-to-br to-transparent p-8 sm:p-10 md:p-12">
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              Ready to Experience It Yourself?
            </h3>
            <p className="text-muted-foreground mb-6 text-base sm:text-lg">
              Start your free 14-day trial and see why teams love TrustYourInbox
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/signup"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/product"
                className="border-border hover:bg-primary/10 inline-flex items-center justify-center rounded-lg border px-8 py-3 text-sm font-semibold transition-colors"
              >
                View All Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
