import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Globe,
  Tag,
  Database,
  Shield,
  Users,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "DMARC Solution for MSPs - TrustYourInbox",
  description:
    "Scale your DMARC services with multi-domain management, team collaboration, and bulk operations designed specifically for Managed Service Providers.",
};

export default function MSPSolutionPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-primary/5 to-background relative overflow-hidden bg-gradient-to-b py-16 sm:py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <Building2 className="text-primary h-4 w-4" />
              <span className="text-primary">For MSPs</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              DMARC Management{" "}
              <span className="text-primary">Built for MSPs</span>
            </h1>

            <p className="text-muted-foreground mb-8 text-lg sm:text-xl md:text-2xl">
              Scale your email security services with multi-client management,
              white-label capabilities, and automation tools designed for
              service providers.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="border-border hover:border-primary/50 hover:bg-primary/5 inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 text-base font-semibold transition-all"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Everything MSPs Need
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Manage multiple client domains efficiently with purpose-built
              tools for service providers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mspFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="border-border bg-card rounded-lg border p-6 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="bg-primary/10 mb-4 inline-flex rounded-lg p-3">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground mb-2 text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="from-secondary/30 to-background bg-gradient-to-b py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Why MSPs Choose TrustYourInbox
              </h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {mspBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="border-border bg-background flex gap-4 rounded-lg border p-6"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                      <CheckCircle2 className="text-primary h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="border-primary/20 from-primary/5 mx-auto max-w-3xl rounded-lg border bg-gradient-to-br to-transparent p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Scale Your DMARC Services?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Join leading MSPs who trust TrustYourInbox to manage their
              clients&apos; email security
            </p>
            <Link
              href="/signup"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3 text-base font-semibold transition-all"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const mspFeatures = [
  {
    title: "Multi-Domain Dashboard",
    description:
      "Register, verify, and filter domains with status tracking and quota management across all your clients.",
    icon: Globe,
  },
  {
    title: "Team Collaboration (RBAC)",
    description:
      "Owner, Admin, Project Manager, Member, and Viewer roles with MFA support for secure multi-user access.",
    icon: Tag,
  },
  {
    title: "Bulk Import & Operations",
    description:
      "Import multiple domains via CSV and process reports in bulk with progress tracking to save time.",
    icon: Database,
  },
  {
    title: "Client Segmentation",
    description:
      "Organize clients by tags, groups, or custom attributes for easy management and reporting.",
    icon: Users,
  },
  {
    title: "Comprehensive Analytics",
    description:
      "Per-client dashboards with compliance tracking, trends, and detailed reporting for each domain.",
    icon: BarChart3,
  },
  {
    title: "White-Label Ready",
    description:
      "Deliver DMARC services under your brand with customizable reporting and client portals.",
    icon: Shield,
  },
];

const mspBenefits = [
  {
    title: "Scalable Pricing for MSPs",
    description:
      "Flexible pricing tiers that grow with your client base. Volume discounts for managing multiple domains.",
  },
  {
    title: "Time-Saving Automation",
    description:
      "Automated report processing, bulk operations, and scheduled reporting reduce manual work by 80%.",
  },
  {
    title: "Client-Ready Reporting",
    description:
      "Generate professional reports for clients showing DMARC compliance, trends, and security improvements.",
  },
  {
    title: "Expert Support",
    description:
      "Dedicated MSP support team to help you onboard clients and troubleshoot issues quickly.",
  },
];
