import Link from "next/link";
import {
  Shield,
  Zap,
  Users,
  BarChart3,
  Lock,
  CheckCircle,
  ArrowRight,
  Building2,
  Clock,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title:
    "DMARC Software for Enterprise: Automated Monitoring & Compliance | TrustYourInbox",
  description:
    "Enterprise DMARC platform protecting Fortune 500 companies. Automated deployment, unlimited domains, SSO, SLA guarantees. Deploy DMARC 4x faster with expert support.",
  keywords: [
    "DMARC software enterprise",
    "enterprise DMARC solution",
    "DMARC for large organizations",
    "enterprise email security",
    "DMARC compliance enterprise",
    "automated DMARC deployment",
  ],
  openGraph: {
    title:
      "DMARC Software for Enterprise: Automated Monitoring & Compliance | TrustYourInbox",
    description:
      "Enterprise DMARC platform protecting Fortune 500 companies. Automated deployment, unlimited domains, SSO, SLA guarantees.",
    type: "website",
  },
};

export default function EnterprisePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "TrustYourInbox Enterprise DMARC Platform",
    description:
      "Enterprise-grade DMARC monitoring and email security platform for large organizations",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "USD",
      priceValidUntil: "2025-12-31",
    },
  };

  return (
    <div className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="from-primary/5 to-background relative overflow-hidden bg-gradient-to-b py-16 sm:py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <Building2 className="text-primary h-4 w-4" />
              <span className="text-primary">Enterprise Solution</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Enterprise DMARC Software That{" "}
              <span className="text-primary">
                Scales With Your Organization
              </span>
            </h1>

            <p className="text-muted-foreground mb-8 text-lg sm:text-xl md:text-2xl">
              Protect your brand reputation and email deliverability with
              automated DMARC deployment, unlimited domains, and
              enterprise-grade security. Trusted by leading organizations
              worldwide.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  Request Enterprise Demo
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:border-primary/50 hover:bg-primary/5 gap-2"
                >
                  View Enterprise Pricing
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">
                  SOC 2 Type II Compliant
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">
                  99.9% SLA Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Leading Enterprises Choose TrustYourInbox */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Why Leading Enterprises Choose TrustYourInbox
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Purpose-built for large organizations with complex email
              infrastructures and strict security requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "4x Faster Deployment",
                description:
                  "Automated DMARC implementation gets you from p=none to p=reject in weeks, not months. Our guided process eliminates guesswork.",
              },
              {
                icon: Shield,
                title: "Unlimited Domains",
                description:
                  "Manage all your domains, subdomains, and subsidiaries from a single dashboard. No per-domain pricing surprises.",
              },
              {
                icon: Users,
                title: "SSO & Role-Based Access",
                description:
                  "Integrate with your existing identity provider (SAML, OAuth). Granular permissions for teams across departments.",
              },
              {
                icon: BarChart3,
                title: "Executive Dashboards",
                description:
                  "Real-time security insights and compliance status for C-level stakeholders. Export reports for auditors and regulators.",
              },
              {
                icon: Lock,
                title: "Enterprise Security",
                description:
                  "SOC 2 Type II certified, GDPR compliant, with optional on-premise deployment for highly regulated industries.",
              },
              {
                icon: Clock,
                title: "24/7 Dedicated Support",
                description:
                  "Named technical account manager, priority SLA, and direct engineering escalation. We're here when you need us.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="border-border/40 bg-card hover:border-primary/30 rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <div className="bg-primary/10 mb-4 inline-flex rounded-lg p-3">
                  <feature.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features for Enterprise */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Key Features for Enterprise Organizations
            </h2>
          </div>

          <div className="mx-auto max-w-5xl space-y-12">
            {/* Feature 1 */}
            <div className="border-border bg-card rounded-lg border p-8">
              <h3 className="mb-4 text-2xl font-bold">
                Automated DMARC Deployment
              </h3>
              <p className="text-muted-foreground mb-4">
                Skip manual DNS configuration and report analysis. Our
                automation handles the complexity:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Automatic discovery of all email-sending sources across your
                    infrastructure
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    AI-powered threat detection identifies unauthorized senders
                    instantly
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Guided policy progression from monitoring to enforcement
                    with safety checks
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    One-click SPF flattening to avoid DNS lookup limits
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="border-border bg-card rounded-lg border p-8">
              <h3 className="mb-4 text-2xl font-bold">
                Real-Time Threat Detection
              </h3>
              <p className="text-muted-foreground mb-4">
                Monitor your email authentication 24/7 with instant alerts for
                suspicious activity:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Live dashboard shows authentication status across all
                    domains
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Instant Slack/Teams/email alerts for policy violations or
                    new threats
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Forensic report analysis with actionable remediation steps
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Threat intelligence feed from 1,200+ monitored domains
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="border-border bg-card rounded-lg border p-8">
              <h3 className="mb-4 text-2xl font-bold">
                Executive Dashboards & Reporting
              </h3>
              <p className="text-muted-foreground mb-4">
                Make email security visible to leadership with
                executive-friendly reporting:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Compliance dashboard shows DMARC, SPF, DKIM status at a
                    glance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Automated weekly/monthly reports for stakeholders and
                    auditors
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Export compliance evidence for PCI DSS, SOC 2, ISO 27001
                    audits
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Custom reports filtered by department, subsidiary, or region
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="border-border bg-card rounded-lg border p-8">
              <h3 className="mb-4 text-2xl font-bold">
                Team Collaboration & Governance
              </h3>
              <p className="text-muted-foreground mb-4">
                Enable cross-functional teams to manage email security together:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Unlimited team members with granular role-based permissions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Approval workflows for policy changes (quarantine → reject)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    Audit log tracks all configuration changes and user actions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    SSO integration with Okta, Azure AD, Google Workspace,
                    OneLogin
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Deployment Process */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Enterprise Deployment Process
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Our proven methodology gets enterprise customers to full DMARC
              enforcement in 4-8 weeks.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {[
              {
                phase: "Phase 1",
                title: "Discovery & Planning",
                duration: "Week 1-2",
                items: [
                  "Kickoff call with your dedicated account manager",
                  "Audit of current email infrastructure and sending sources",
                  "Identify all domains, subdomains, and third-party senders",
                  "Create deployment roadmap with milestones and success criteria",
                ],
              },
              {
                phase: "Phase 2",
                title: "Implementation",
                duration: "Week 3-4",
                items: [
                  "Deploy DMARC records in monitor mode (p=none)",
                  "Configure aggregate and forensic reporting",
                  "Set up team access with SSO and role-based permissions",
                  "Integrate with your existing security tools (SIEM, ticketing)",
                ],
              },
              {
                phase: "Phase 3",
                title: "Monitoring & Optimization",
                duration: "Week 5-8",
                items: [
                  "Analyze DMARC reports to identify all legitimate senders",
                  "Fix SPF/DKIM alignment issues with third-party services",
                  "Gradually increase policy from none → quarantine → reject",
                  "Train your team on ongoing monitoring and maintenance",
                ],
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className="border-border bg-card rounded-lg border p-6"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <div className="text-primary mb-1 text-sm font-semibold">
                      {phase.phase}
                    </div>
                    <h3 className="text-foreground text-xl font-bold">
                      {phase.title}
                    </h3>
                  </div>
                  <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
                    {phase.duration}
                  </div>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Compliance & Security
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Built for highly regulated industries with enterprise-grade
              security and compliance certifications.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="bg-card border-border rounded-lg border p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold">
                    Security Certifications
                  </h3>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary h-5 w-5" />
                      <span>SOC 2 Type II Certified</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary h-5 w-5" />
                      <span>GDPR Compliant</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary h-5 w-5" />
                      <span>ISO 27001 Aligned</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary h-5 w-5" />
                      <span>HIPAA Compliant Infrastructure</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold">Compliance Support</h3>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary h-5 w-5" />
                      <span>PCI DSS v4.0 DMARC requirement (March 2025)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary h-5 w-5" />
                      <span>
                        Google/Yahoo/Microsoft 2025 compliance (July 15)
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary h-5 w-5" />
                      <span>SOC 2 audit evidence export</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-primary h-5 w-5" />
                      <span>Compliance dashboard for regulators</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Business Impact */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              ROI & Business Impact
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Measurable security improvements and cost savings from DMARC
              deployment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-card border-border rounded-lg border p-6 text-center">
              <div className="text-primary mb-2 text-4xl font-bold">40%</div>
              <div className="text-muted-foreground">
                Reduction in email security incidents
              </div>
            </div>
            <div className="bg-card border-border rounded-lg border p-6 text-center">
              <div className="text-primary mb-2 text-4xl font-bold">25%</div>
              <div className="text-muted-foreground">
                Improvement in email deliverability
              </div>
            </div>
            <div className="bg-card border-border rounded-lg border p-6 text-center">
              <div className="text-primary mb-2 text-4xl font-bold">4x</div>
              <div className="text-muted-foreground">
                Faster deployment vs manual implementation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Enterprise Pricing
            </h2>
          </div>

          <div className="bg-card border-primary/20 mx-auto max-w-3xl rounded-lg border p-8 text-center">
            <div className="mb-4">
              <div className="text-foreground mb-2 text-5xl font-bold">
                Starting at $199
                <span className="text-muted-foreground text-2xl font-normal">
                  /month
                </span>
              </div>
              <p className="text-muted-foreground">
                Custom pricing for 100+ domains
              </p>
            </div>

            <div className="text-muted-foreground mb-6 space-y-2 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>Unlimited domains and users</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>SSO (SAML/OAuth) integration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>Dedicated account manager</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>99.9% SLA with support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>Custom integrations available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>On-premise deployment option</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full gap-2 sm:w-auto"
                >
                  Request Demo
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                q: "How long does enterprise deployment take?",
                a: "Most enterprises achieve full DMARC enforcement (p=reject) in 4-8 weeks. Our automated deployment and dedicated account manager accelerate the process significantly compared to manual implementation, which can take 6-12 months.",
              },
              {
                q: "Do you support SSO (Single Sign-On)?",
                a: "Yes, our enterprise plan includes SSO integration with all major identity providers including Okta, Azure AD, Google Workspace, OneLogin, and any SAML 2.0 or OAuth 2.0 compliant provider.",
              },
              {
                q: "What SLA guarantees do you offer?",
                a: "Enterprise customers receive a 99.9% uptime SLA with service credits for any downtime. Our dedicated support team provides priority response times and direct engineering escalation when needed.",
              },
              {
                q: "Can we white-label for our subsidiaries?",
                a: "Yes, enterprise customers can white-label the platform for subsidiaries or business units. Contact our sales team to discuss multi-tenant deployment options.",
              },
              {
                q: "What integrations do you support?",
                a: "We integrate with major email platforms (Microsoft 365, Google Workspace), SIEM tools (Splunk, Datadog), ticketing systems (Jira, ServiceNow), and communication platforms (Slack, Teams). Custom integrations are available via our REST API.",
              },
              {
                q: "Is on-premise deployment available?",
                a: "Yes, for highly regulated industries or organizations with strict data residency requirements, we offer on-premise or private cloud deployment options. Contact sales for details.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border-border bg-card rounded-lg border p-6"
              >
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="from-primary/10 to-background bg-gradient-to-b py-16 sm:py-20">
        <div className="container">
          <div className="border-primary/20 from-primary/5 mx-auto max-w-3xl rounded-lg border bg-gradient-to-br to-transparent p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Protect Your Enterprise?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join leading organizations protecting their email domains with
              TrustYourInbox. Start your enterprise deployment today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full gap-2 sm:w-auto"
                >
                  Request Enterprise Demo
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
