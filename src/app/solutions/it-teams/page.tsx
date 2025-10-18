import Link from "next/link";
import {
  ArrowRight,
  Server,
  Settings,
  BarChart2,
  ShieldCheck,
  Shield,
  CheckCircle2,
  FileText,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "DMARC Solution for IT Teams - TrustYourInbox",
  description:
    "Simplify DMARC implementation with built-in analysis tools, interactive dashboards, and bulk report processing designed for IT teams.",
};

export default function ITTeamsSolutionPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-primary/5 to-background relative overflow-hidden bg-gradient-to-b py-16 sm:py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <Server className="text-primary h-4 w-4" />
              <span className="text-primary">For IT Teams</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              DMARC Made Simple{" "}
              <span className="text-primary">for IT Teams</span>
            </h1>

            <p className="text-muted-foreground mb-8 text-lg sm:text-xl md:text-2xl">
              Deploy email authentication without the complexity. Built-in
              tools, visual analytics, and guided workflows that IT teams
              actually want to use.
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
              Everything IT Teams Need
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              All the tools and analytics to implement and maintain DMARC
              without the headaches
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {itFeatures.map((feature) => {
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
                Why IT Teams Choose TrustYourInbox
              </h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {itBenefits.map((benefit, index) => (
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
          <div className="border-primary/20 from-primary/5 mx-auto max-w-3xl rounded-2xl border bg-gradient-to-br to-transparent p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Simplify DMARC?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Join 1,200+ IT teams who have successfully deployed DMARC with
              TrustYourInbox
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

const itFeatures = [
  {
    title: "Built-in Analysis Tools",
    description:
      "DMARC Analyzer, SPF Analyzer, and record generator all in one platform—no external tools needed.",
    icon: Settings,
  },
  {
    title: "Interactive Analytics Dashboards",
    description:
      "Pie charts, area charts, and bar charts showing compliance, trends, and performance at a glance.",
    icon: BarChart2,
  },
  {
    title: "Bulk Report Processing",
    description:
      "Upload multiple DMARC reports (XML, GZIP, ZIP) with progress tracking and automated analysis.",
    icon: ShieldCheck,
  },
  {
    title: "Real-time Monitoring",
    description:
      "Live authentication status updates and instant alerts for policy changes or security issues.",
    icon: Zap,
  },
  {
    title: "Guided Implementation",
    description:
      "Step-by-step workflows to configure DMARC, SPF, and DKIM correctly the first time.",
    icon: FileText,
  },
  {
    title: "Security Insights",
    description:
      "Actionable recommendations to improve your email authentication and prevent spoofing.",
    icon: Shield,
  },
];

const itBenefits = [
  {
    title: "Deploy in Minutes, Not Months",
    description:
      "Guided setup and built-in tools help you go from zero to enforced DMARC policy in record time.",
  },
  {
    title: "No Specialized Knowledge Required",
    description:
      "Plain-English explanations and visual dashboards make DMARC accessible to any IT professional.",
  },
  {
    title: "Save Hours Every Week",
    description:
      "Automated report processing and visual analytics eliminate manual XML parsing and spreadsheet work.",
  },
  {
    title: "Prove Compliance Easily",
    description:
      "Generate compliance reports for audits, security reviews, or stakeholder updates with one click.",
  },
];
