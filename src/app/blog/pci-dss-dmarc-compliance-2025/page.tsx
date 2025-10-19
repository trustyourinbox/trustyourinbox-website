import Link from "next/link";
import {
  Shield,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  CreditCard,
  Lock,
  BarChart2,
  FileCheck,
  Users,
  Target,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata = {
  title:
    "PCI DSS 4.0 & DMARC Compliance 2025: Email Security Requirements Guide",
  description:
    "Complete guide to PCI DSS 4.0 DMARC requirements for payment card data protection. Learn how DMARC aligns with PCI DSS controls, implementation steps, compliance deadlines (March 31, 2025), and avoid non-compliance penalties up to $100K/month.",
  keywords: [
    "PCI DSS DMARC compliance",
    "PCI DSS 4.0 email security",
    "DMARC PCI DSS requirements",
    "payment card industry compliance",
    "PCI DSS email authentication",
    "DMARC payment security",
    "PCI DSS 2025 deadline",
    "email spoofing prevention PCI",
  ],
  openGraph: {
    title: "PCI DSS 4.0 & DMARC Compliance 2025: Email Security Requirements",
    description:
      "Complete guide to PCI DSS 4.0 DMARC requirements. Implementation steps, compliance deadlines, and penalty avoidance.",
    type: "article",
    publishedTime: "2025-01-19T00:00:00Z",
  },
};

export default function PCIDssDmarcCompliance2025() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="border-border border-b">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary font-medium">Compliance</span>
          </div>

          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            PCI DSS 4.0 & DMARC Compliance 2025: Protecting Payment Card Data
            Through Email Security
          </h1>

          <div className="text-muted-foreground mb-8 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>January 19, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span>Compliance</span>
            </div>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed">
            PCI DSS 4.0 introduces stricter email security requirements as
            organizations face the <strong>March 31, 2025</strong> deadline.
            While DMARC isn&apos;t explicitly mandated by PCI DSS, it&apos;s
            becoming essential for meeting multiple PCI requirements related to
            phishing prevention, access control, and data protection. Penalties
            for non-compliance can reach <strong>$100,000/month</strong>.
            Here&apos;s how to align DMARC with PCI DSS 4.0.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Critical Deadline Alert */}
        <Alert variant="warning" className="mb-8">
          <AlertTriangle className="h-5 w-5" />
          <div>
            <div className="font-semibold">PCI DSS 4.0 Compliance Deadline</div>
            <div className="text-muted-foreground mt-1 text-sm">
              <strong>March 31, 2025</strong>: All organizations must be
              compliant with PCI DSS 4.0 requirements, including enhanced email
              security controls and phishing prevention measures.
            </div>
          </div>
        </Alert>

        {/* Table of Contents */}
        <Card className="mb-12">
          <div className="p-6">
            <h2 className="text-foreground mb-4 text-lg font-semibold">
              In This Guide
            </h2>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a
                  href="#why-dmarc-matters"
                  className="hover:text-primary transition-colors"
                >
                  Why DMARC Matters for PCI DSS Compliance
                </a>
              </li>
              <li>
                <a
                  href="#pci-requirements"
                  className="hover:text-primary transition-colors"
                >
                  PCI DSS 4.0 Requirements Addressed by DMARC
                </a>
              </li>
              <li>
                <a
                  href="#implementation"
                  className="hover:text-primary transition-colors"
                >
                  Implementing DMARC for PCI Compliance
                </a>
              </li>
              <li>
                <a
                  href="#documentation"
                  className="hover:text-primary transition-colors"
                >
                  Documentation and Audit Evidence
                </a>
              </li>
              <li>
                <a
                  href="#compliance-checklist"
                  className="hover:text-primary transition-colors"
                >
                  PCI DSS Email Security Compliance Checklist
                </a>
              </li>
              <li>
                <a
                  href="#penalties"
                  className="hover:text-primary transition-colors"
                >
                  Non-Compliance Penalties and Risks
                </a>
              </li>
            </ul>
          </div>
        </Card>

        {/* Why DMARC Matters for PCI DSS */}
        <section id="why-dmarc-matters" className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Why DMARC Matters for PCI DSS Compliance
          </h2>

          <div className="prose-custom mb-6">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              PCI DSS 4.0 significantly strengthens phishing prevention and
              email security requirements. While DMARC isn&apos;t explicitly
              named in PCI DSS, it directly supports compliance with multiple
              requirements:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <div className="bg-destructive/10 mb-4 inline-flex rounded-full p-3">
                  <Shield className="text-destructive h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  70% of Data Breaches
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Start with phishing emails. DMARC prevents domain spoofing
                  attacks that target payment card data and cardholder
                  information.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-warning/10 mb-4 inline-flex rounded-full p-3">
                  <CreditCard className="text-warning h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  $100K/Month Penalties
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Non-compliance with PCI DSS can result in fines up to $100,000
                  per month, plus increased transaction fees and loss of payment
                  processing privileges.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <Lock className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Multi-Layered Protection
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  DMARC works with SPF and DKIM to create defense-in-depth email
                  authentication required by PCI DSS Requirement 5.4.1.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-success/10 mb-4 inline-flex rounded-full p-3">
                  <FileCheck className="text-success h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Audit Evidence
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  DMARC reports provide documented proof of phishing prevention
                  measures for PCI DSS assessors and QSAs.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* PCI DSS Requirements Addressed by DMARC */}
        <section id="pci-requirements" className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            PCI DSS 4.0 Requirements Addressed by DMARC
          </h2>

          <div className="prose-custom mb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              DMARC implementation helps satisfy multiple PCI DSS 4.0
              requirements related to security awareness, access control, and
              protective measures:
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <span className="text-primary text-lg font-bold">
                      5.4.1
                    </span>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Requirement 5.4.1: Phishing Attacks Protection
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      <strong>PCI Requirement:</strong> Personnel are made aware
                      of the threat from phishing attacks and are educated on
                      how to detect and report phishing and related social
                      engineering attacks.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success text-sm font-medium">
                        ✓ How DMARC Helps:
                      </p>
                      <p className="text-muted-foreground mt-1 text-sm">
                        DMARC with p=reject policy prevents spoofed emails from
                        reaching employees, reducing phishing exposure by up to
                        90% and complementing security awareness training.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <span className="text-primary text-lg font-bold">
                      8.2.1
                    </span>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Requirement 8.2.1: User Identity Verification
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      <strong>PCI Requirement:</strong> User identity is
                      verified before modifying authentication credentials.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success text-sm font-medium">
                        ✓ How DMARC Helps:
                      </p>
                      <p className="text-muted-foreground mt-1 text-sm">
                        SPF and DKIM authentication verify sender identity,
                        preventing credential reset phishing attacks that target
                        administrative accounts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <span className="text-primary text-lg font-bold">
                      12.6.3
                    </span>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Requirement 12.6.3: Security Incident Detection & Response
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      <strong>PCI Requirement:</strong> Security incidents are
                      detected, documented, and reported.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success text-sm font-medium">
                        ✓ How DMARC Helps:
                      </p>
                      <p className="text-muted-foreground mt-1 text-sm">
                        DMARC aggregate and forensic reports document spoofing
                        attempts, providing evidence of security incidents and
                        email-based attack patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <span className="text-primary text-lg font-bold">
                      11.3.1
                    </span>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Requirement 11.3.1: External Penetration Testing
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      <strong>PCI Requirement:</strong> External penetration
                      testing is performed including testing of email systems.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success text-sm font-medium">
                        ✓ How DMARC Helps:
                      </p>
                      <p className="text-muted-foreground mt-1 text-sm">
                        DMARC p=reject demonstrates robust email system
                        hardening that pen testers cannot bypass via domain
                        spoofing attacks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Implementation Steps */}
        <section id="implementation" className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Implementing DMARC for PCI Compliance
          </h2>

          <div className="prose-custom mb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Follow this phased approach to implement DMARC in alignment with
              PCI DSS timelines:
            </p>
          </div>

          <div className="space-y-4">
            {/* Phase 1 */}
            <Card className="border-primary/20">
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Phase 1: Discovery & Assessment (Week 1-2)
                    </h3>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Inventory all domains used for cardholder
                          communications
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Audit current SPF and DKIM configurations using{" "}
                          <Link
                            href="/tools/spf-surveyor"
                            className="text-primary hover:underline"
                          >
                            SPF Surveyor
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/tools/dkim-validator"
                            className="text-primary hover:underline"
                          >
                            DKIM Validator
                          </Link>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Identify all legitimate email sources (CRM, payment
                          gateways, support systems)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Check current DMARC status with{" "}
                          <Link
                            href="/tools/dmarc-domain-checker"
                            className="text-primary hover:underline"
                          >
                            DMARC Domain Checker
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 2 */}
            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-muted flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <span className="text-foreground font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Phase 2: Foundation Setup (Week 3-4)
                    </h3>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Configure SPF records for all authorized mail servers
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Implement DKIM signing on all outbound payment-related
                          emails
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Deploy initial DMARC policy at p=none for monitoring
                          using{" "}
                          <Link
                            href="/tools/dmarc-policy-generator"
                            className="text-primary hover:underline"
                          >
                            DMARC Policy Generator
                          </Link>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>Set up DMARC aggregate report collection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 3 */}
            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-muted flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <span className="text-foreground font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Phase 3: Monitoring & Tuning (Week 5-6)
                    </h3>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Analyze DMARC reports to identify unauthorized sources
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Fix SPF/DKIM authentication failures for legitimate
                          senders
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Document all authorized email sources for audit trail
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Test impact with{" "}
                          <Link
                            href="/tools/dmarc-policy-impact-simulator"
                            className="text-primary hover:underline"
                          >
                            DMARC Policy Impact Simulator
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 4 */}
            <Card className="border-success/20">
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-success/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <span className="text-success font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Phase 4: Enforcement (Week 7-8)
                    </h3>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Upgrade to p=quarantine for 2-4 weeks of testing
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Monitor quarantine impact on legitimate email delivery
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Move to p=reject for full protection and PCI alignment
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          Enable forensic reports (ruf tags) for security
                          incident documentation
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Alert variant="info" className="mt-6">
            <Shield className="h-5 w-5" />
            <div>
              <div className="font-semibold">
                Automated Deployment Available
              </div>
              <div className="text-muted-foreground mt-1 text-sm">
                TrustYourInbox automates this entire process, getting you from
                p=none to p=reject in 1-2 weeks instead of 8 weeks. Our platform
                handles authentication fixes, monitoring, and generates
                PCI-compliant audit documentation automatically.{" "}
                <Link href="/demo" className="text-primary hover:underline">
                  Start free trial
                </Link>
              </div>
            </div>
          </Alert>
        </section>

        {/* Documentation and Audit Evidence */}
        <section id="documentation" className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Documentation and Audit Evidence
          </h2>

          <div className="prose-custom mb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              PCI DSS assessors and QSAs require documented evidence of email
              security controls. DMARC provides comprehensive audit trails:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <FileCheck className="text-primary h-6 w-6" />
                  <h3 className="text-foreground text-lg font-semibold">
                    Required Documentation
                  </h3>
                </div>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>DMARC policy records (TXT records from DNS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>SPF and DKIM authentication configurations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Monthly DMARC aggregate reports showing compliance rates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Forensic reports of spoofing attempts (if enabled)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Change logs documenting policy progression (p=none →
                      p=quarantine → p=reject)
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <BarChart2 className="text-primary h-6 w-6" />
                  <h3 className="text-foreground text-lg font-semibold">
                    Key Compliance Metrics
                  </h3>
                </div>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>DMARC Compliance Rate:</strong> Target 95%+ pass
                      rate
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>SPF/DKIM Alignment:</strong> 100% for critical
                      payment emails
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Spoofing Attempts Blocked:</strong> Document all
                      rejected emails
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Policy Enforcement Level:</strong> p=reject on all
                      payment domains
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Monitoring Coverage:</strong> 100% of domains
                      handling CHD
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Compliance Checklist */}
        <section id="compliance-checklist" className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            PCI DSS Email Security Compliance Checklist
          </h2>

          <Card>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="border-border mt-1 h-5 w-5 rounded"
                  />
                  <div>
                    <p className="text-foreground font-medium">
                      SPF records configured for all domains handling cardholder
                      data
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Use{" "}
                      <Link
                        href="/tools/spf-surveyor"
                        className="text-primary hover:underline"
                      >
                        SPF Surveyor
                      </Link>{" "}
                      to verify configuration
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="border-border mt-1 h-5 w-5 rounded"
                  />
                  <div>
                    <p className="text-foreground font-medium">
                      DKIM signing enabled on all outbound payment-related
                      emails
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Validate with{" "}
                      <Link
                        href="/tools/dkim-validator"
                        className="text-primary hover:underline"
                      >
                        DKIM Validator
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="border-border mt-1 h-5 w-5 rounded"
                  />
                  <div>
                    <p className="text-foreground font-medium">
                      DMARC policy at p=reject for maximum protection
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Generate policy using{" "}
                      <Link
                        href="/tools/dmarc-policy-generator"
                        className="text-primary hover:underline"
                      >
                        DMARC Policy Generator
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="border-border mt-1 h-5 w-5 rounded"
                  />
                  <div>
                    <p className="text-foreground font-medium">
                      DMARC aggregate reports collected and reviewed monthly
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Automated monitoring recommended for continuous compliance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="border-border mt-1 h-5 w-5 rounded"
                  />
                  <div>
                    <p className="text-foreground font-medium">
                      Forensic reports enabled for security incident
                      documentation
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Required for PCI Requirement 12.6.3 compliance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="border-border mt-1 h-5 w-5 rounded"
                  />
                  <div>
                    <p className="text-foreground font-medium">
                      All email sources authorized and documented
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Maintain inventory of CRM, payment gateway, support
                      systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="border-border mt-1 h-5 w-5 rounded"
                  />
                  <div>
                    <p className="text-foreground font-medium">
                      Subdomain policy (sp=reject) configured
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Check with{" "}
                      <Link
                        href="/tools/dmarc-subdomain-policy-checker"
                        className="text-primary hover:underline"
                      >
                        Subdomain Policy Checker
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="border-border mt-1 h-5 w-5 rounded"
                  />
                  <div>
                    <p className="text-foreground font-medium">
                      Email security awareness training updated to reference
                      DMARC protection
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Aligns with PCI DSS Requirement 5.4.1
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="border-border mt-1 h-5 w-5 rounded"
                  />
                  <div>
                    <p className="text-foreground font-medium">
                      Quarterly review process established for DMARC compliance
                      metrics
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Document as part of PCI DSS security review process
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="border-border mt-1 h-5 w-5 rounded"
                  />
                  <div>
                    <p className="text-foreground font-medium">
                      Audit evidence prepared for QSA assessment
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Include all documentation listed in previous section
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Penalties and Risks */}
        <section id="penalties" className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Non-Compliance Penalties and Risks
          </h2>

          <div className="prose-custom mb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              PCI DSS non-compliance carries severe financial and operational
              consequences:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-destructive/20">
              <div className="p-6">
                <h3 className="text-foreground mb-4 text-lg font-semibold">
                  Financial Penalties
                </h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">
                      $5K-$100K
                    </span>
                    <span>Monthly fines from payment card brands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">$10-$100</span>
                    <span>Per-transaction fees during non-compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">
                      $50K-$500K
                    </span>
                    <span>Data breach notification costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">Millions</span>
                    <span>Class-action lawsuits and fraud reimbursement</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="border-warning/20">
              <div className="p-6">
                <h3 className="text-foreground mb-4 text-lg font-semibold">
                  Operational Consequences
                </h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-warning mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Termination of payment processing privileges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-warning mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Increased transaction fees (indefinitely)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-warning mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Mandatory forensic investigations ($30K-$500K)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-warning mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Brand damage and customer trust loss</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <Alert variant="error" className="mt-6">
            <AlertTriangle className="h-5 w-5" />
            <div>
              <div className="font-semibold">
                Email Phishing: Leading Cause of Data Breaches
              </div>
              <div className="mt-1 text-sm">
                According to Verizon&apos;s 2024 Data Breach Investigations
                Report, 68% of breaches involved phishing. Without DMARC
                protection, your organization is vulnerable to the exact attack
                vector responsible for most PCI compliance failures.
              </div>
            </div>
          </Alert>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <div className="p-8">
              <div className="mb-6 text-center">
                <h2 className="text-foreground mb-3 text-2xl font-bold">
                  Achieve PCI DSS Email Security Compliance in 1-2 Weeks
                </h2>
                <p className="text-muted-foreground mx-auto max-w-2xl">
                  TrustYourInbox automates DMARC implementation and generates
                  PCI-compliant documentation automatically. Meet the March 31,
                  2025 deadline with confidence.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="border-primary/20 bg-background flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
                  <Target className="text-primary h-8 w-8" />
                  <h3 className="text-foreground font-semibold">
                    For Payment Processors
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Protect cardholder data with automated DMARC enforcement,
                    comprehensive audit trails, and 24/7 expert support.
                  </p>
                  <Link href="/demo" className="mt-auto">
                    <Button size="lg" className="w-full">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="border-border bg-background flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
                  <Users className="text-primary h-8 w-8" />
                  <h3 className="text-foreground font-semibold">
                    For QSAs & Auditors
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Provide clients with turnkey email security compliance
                    evidence: DMARC reports, authentication metrics, and
                    incident documentation.
                  </p>
                  <Link href="/solutions/msp" className="mt-auto">
                    <Button size="lg" variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Free Tools Section */}
        <section>
          <h2 className="text-foreground mb-6 text-2xl font-bold">
            Free PCI DSS Email Security Tools
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/tools/dmarc-domain-checker">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DMARC Domain Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Check DMARC policy status for payment domains
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/spf-surveyor">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    SPF Surveyor
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Verify SPF authentication for email sources
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dkim-validator">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DKIM Validator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Validate DKIM signing on payment emails
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dmarc-policy-generator">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DMARC Policy Generator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Generate PCI-compliant DMARC policies
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dmarc-policy-impact-simulator">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Policy Impact Simulator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Test enforcement impact before deployment
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/domain-security-checker">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Domain Security Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive security audit for payment domains
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
