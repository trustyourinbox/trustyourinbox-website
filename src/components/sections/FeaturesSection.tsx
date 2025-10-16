import { Shield, BarChart2, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">Comprehensive DMARC Protection</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform simplifies email authentication and provides the tools you need to secure your domain.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: "Comprehensive Analytics Dashboard",
    description:
      "Interactive charts and visualizations showing authentication methods distribution, compliance trends, and domain performance with real-time data.",
    icon: BarChart2,
  },
  {
    title: "DMARC & SPF Analysis Tools",
    description:
      "Built-in analyzers to validate DMARC records, analyze SPF configurations, check DNS lookups, and get actionable recommendations.",
    icon: Shield,
  },
  {
    title: "Bulk Report Processing",
    description: "Upload and process DMARC aggregate reports (RUA) in bulk. Supports XML, GZIP, and ZIP formats with progress tracking.",
    icon: Mail,
  },
  {
    title: "Multi-Domain Management",
    description: "Register, verify, and manage multiple domains from a single dashboard. Filter by status, verification, and track domain quotas.",
    icon: Shield,
  },
  {
    title: "Sender Intelligence & Insights",
    description: "Analyze email senders with detailed insights. Identify legitimate sources and detect unauthorized senders across your domains.",
    icon: BarChart2,
  },
  {
    title: "Team Collaboration & RBAC",
    description: "Role-based access control with Owner, Admin, Project Manager, Member, and Viewer roles. Manage team members, invitations, and MFA status.",
    icon: Mail,
  },
  {
    title: "Historical Trends Analysis",
    description: "Time-series analysis of authentication trends with 7, 30, 90, and 365-day views. Compare multiple domains over time.",
    icon: BarChart2,
  },
  {
    title: "Failure Pattern Detection",
    description: "Dedicated dashboard for analyzing DMARC failures, identifying failure rates, and understanding error patterns to improve security.",
    icon: Shield,
  },
  {
    title: "DMARC Record Generator",
    description: "Generate properly configured DMARC DNS records with policy settings and reporting configuration through a guided interface.",
    icon: Mail,
  },
] 