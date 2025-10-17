"use client"

import { BarChart3, Shield, FileText, Globe, Users, TrendingUp, Search, Zap } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Comprehensive Analytics",
    description: "Interactive dashboards with pie charts, area charts, and bar graphs showing authentication methods, compliance trends, and domain performance.",
    icon: BarChart3,
    size: "large", // 2 columns
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Bulk Report Processing",
    description: "Upload and process multiple DMARC reports (XML, GZIP, ZIP) with real-time progress tracking.",
    icon: FileText,
    size: "small",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "DMARC & SPF Tools",
    description: "Built-in analyzers to validate records, check DNS lookups, and get actionable recommendations.",
    icon: Search,
    size: "small",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Multi-Domain Dashboard",
    description: "Register, verify, and manage unlimited domains with advanced filtering and status tracking.",
    icon: Globe,
    size: "medium",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Team Collaboration",
    description: "Role-based access control with Owner, Admin, Project Manager, Member, and Viewer roles. MFA support included.",
    icon: Users,
    size: "medium",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Historical Trends",
    description: "Time-series analysis with 7, 30, 90, and 365-day views. Compare multiple domains over time.",
    icon: TrendingUp,
    size: "small",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Real-time Monitoring",
    description: "Live authentication status updates and instant alerts for policy changes or security issues.",
    icon: Zap,
    size: "small",
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    title: "Sender Intelligence",
    description: "Analyze email senders with detailed insights. Identify legitimate sources and detect unauthorized senders across domains.",
    icon: Shield,
    size: "large",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
]

export default function BentoGridFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium mb-6">
            <Shield className="h-4 w-4 mr-2 text-primary" />
            <span className="text-primary">Everything You Need</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Email Security,{" "}
            <span className="text-primary">
              Simplified
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional-grade DMARC tools and analytics designed for teams that value both security and simplicity.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const getGridSpan = () => {
              if (feature.size === "large") return "md:col-span-2"
              if (feature.size === "medium") return "md:col-span-2 lg:col-span-1"
              return ""
            }

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 ${getGridSpan()}`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Screenshot Placeholder (for larger cards) */}
                  {feature.size === "large" && (
                    <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4 overflow-hidden">
                      <div className="flex items-end gap-1 h-20 mb-2">
                        {[65, 70, 75, 82, 88, 91, 94, 92].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-primary to-primary/40 rounded-t-sm"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-16 bg-muted rounded"></div>
                        <div className="h-2 w-12 bg-muted rounded"></div>
                        <div className="h-2 w-20 bg-muted rounded"></div>
                      </div>
                    </div>
                  )}

                  {/* Arrow indicator on hover */}
                  <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Want to see it in action?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Try Live Demo
            </a>
            <a
              href="/features"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-primary/10 transition-colors"
            >
              View All Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
