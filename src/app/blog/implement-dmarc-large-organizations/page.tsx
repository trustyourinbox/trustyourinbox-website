import Link from "next/link";
import {
  Shield,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Building2,
  Users,
  Network,
  GitBranch,
  FileText,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata = {
  title:
    "How to Implement DMARC in Large Organizations: Enterprise Deployment Guide 2025",
  description:
    "Complete guide to deploying DMARC across large enterprises with 1,000+ employees. Learn phased rollout strategies, multi-domain management, stakeholder coordination, change management, and how to reach p=reject in 1-2 weeks vs 6+ months.",
  keywords: [
    "DMARC implementation enterprise",
    "large organization DMARC",
    "enterprise DMARC deployment",
    "multi-domain DMARC",
    "DMARC rollout strategy",
    "enterprise email security",
    "DMARC change management",
    "Fortune 500 DMARC",
  ],
  openGraph: {
    title:
      "How to Implement DMARC in Large Organizations: Enterprise Guide 2025",
    description:
      "Complete enterprise DMARC deployment guide. Phased rollout, multi-domain management, stakeholder coordination.",
    type: "article",
    publishedTime: "2025-01-19T00:00:00Z",
  },
};

export default function ImplementDmarcLargeOrganizations() {
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
            <span className="text-primary font-medium">
              Implementation Guide
            </span>
          </div>

          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            How to Implement DMARC in Large Organizations: Enterprise Deployment
            Guide 2025
          </h1>

          <div className="text-muted-foreground mb-8 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>January 19, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>13 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>Enterprise</span>
            </div>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Implementing DMARC across a large enterprise with multiple domains,
            business units, and email systems is complex but achievable. This
            guide provides a proven framework for Fortune 500 organizations to
            deploy DMARC at scale, coordinate across stakeholders, and reach{" "}
            <strong>p=reject in 1-2 weeks instead of 6+ months</strong>.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Key Stats */}
        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-primary/20">
              <div className="p-6 text-center">
                <div className="text-primary mb-2 text-3xl font-bold">6-12</div>
                <p className="text-muted-foreground text-sm">
                  Months for traditional enterprise DMARC deployment
                </p>
              </div>
            </Card>
            <Card className="border-success/20">
              <div className="p-6 text-center">
                <div className="text-success mb-2 text-3xl font-bold">
                  1-2 weeks
                </div>
                <p className="text-muted-foreground text-sm">
                  With automated workflows and proper planning
                </p>
              </div>
            </Card>
            <Card className="border-warning/20">
              <div className="p-6 text-center">
                <div className="text-warning mb-2 text-3xl font-bold">67%</div>
                <p className="text-muted-foreground text-sm">
                  Of enterprises fail first DMARC deployment attempt
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Table of Contents */}
        <Card className="mb-12">
          <div className="p-6">
            <h2 className="text-foreground mb-4 text-lg font-semibold">
              In This Guide
            </h2>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a
                  href="#challenges"
                  className="hover:text-primary transition-colors"
                >
                  Unique Challenges for Large Organizations
                </a>
              </li>
              <li>
                <a
                  href="#stakeholders"
                  className="hover:text-primary transition-colors"
                >
                  Stakeholder Coordination & Buy-In
                </a>
              </li>
              <li>
                <a
                  href="#phased-rollout"
                  className="hover:text-primary transition-colors"
                >
                  Phased Rollout Strategy
                </a>
              </li>
              <li>
                <a
                  href="#multi-domain"
                  className="hover:text-primary transition-colors"
                >
                  Multi-Domain Management
                </a>
              </li>
              <li>
                <a
                  href="#change-management"
                  className="hover:text-primary transition-colors"
                >
                  Change Management & Communication
                </a>
              </li>
              <li>
                <a
                  href="#common-pitfalls"
                  className="hover:text-primary transition-colors"
                >
                  Common Pitfalls and How to Avoid Them
                </a>
              </li>
            </ul>
          </div>
        </Card>

        {/* Challenges */}
        <section id="challenges" className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Unique Challenges for Large Organizations
          </h2>

          <div className="prose-custom mb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Large enterprises face specific obstacles that small businesses
              don&apos;t encounter when implementing DMARC:
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-warning/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Network className="text-warning h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Email Infrastructure Complexity
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      Multiple email systems sending on behalf of your domains:
                      Microsoft 365, Google Workspace, marketing platforms
                      (Salesforce, HubSpot), HR systems (Workday), ERP systems
                      (SAP, Oracle), customer support (Zendesk), and legacy
                      on-premise servers.
                    </p>
                    <div className="bg-warning/10 rounded-lg p-3">
                      <p className="text-warning text-sm font-medium">
                        Challenge: Discovering all email sources takes 2-4 weeks
                        without automation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-warning/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <GitBranch className="text-warning h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Multi-Domain Portfolio
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      50+ domains across brands, regions, and business units.
                      Some domains are customer-facing (corporate.com,
                      brand.com), while others are operational (internal IT,
                      no-reply addresses, legacy acquisitions).
                    </p>
                    <div className="bg-warning/10 rounded-lg p-3">
                      <p className="text-warning text-sm font-medium">
                        Challenge: Prioritizing domain rollout and managing
                        different risk profiles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-warning/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Users className="text-warning h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Organizational Silos
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      Email systems are managed by different teams: IT Security,
                      Infrastructure, Marketing Operations, Sales Enablement, HR
                      Tech. Each team has different priorities, budgets, and
                      timelines.
                    </p>
                    <div className="bg-warning/10 rounded-lg p-3">
                      <p className="text-warning text-sm font-medium">
                        Challenge: Getting buy-in and coordination across 5-10
                        stakeholder groups
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-warning/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <FileText className="text-warning h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Change Control Processes
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      DNS changes require CAB approval, security review, and
                      maintenance windows. Marketing campaigns can&apos;t be
                      disrupted. Email delivery is business-critical with zero
                      tolerance for outages.
                    </p>
                    <div className="bg-warning/10 rounded-lg p-3">
                      <p className="text-warning text-sm font-medium">
                        Challenge: Navigating enterprise change management adds
                        4-8 weeks to timeline
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Stakeholder Coordination */}
        <section id="stakeholders" className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Stakeholder Coordination & Buy-In
          </h2>

          <div className="prose-custom mb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Successful enterprise DMARC implementation requires executive
              sponsorship and cross-functional collaboration:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-4 flex items-center gap-2 text-lg font-semibold">
                  <CheckCircle2 className="text-success h-5 w-5" />
                  Executive Sponsor (Required)
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>
                    <strong>Who:</strong> CISO, CIO, or VP of IT Security
                  </li>
                  <li>
                    <strong>Role:</strong> Budget approval, cross-team mandate,
                    escalation path
                  </li>
                  <li>
                    <strong>Value Prop:</strong> Brand protection, phishing
                    prevention, compliance
                  </li>
                  <li>
                    <strong>Time Investment:</strong> 2-3 hours (kickoff +
                    monthly check-ins)
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-4 flex items-center gap-2 text-lg font-semibold">
                  <CheckCircle2 className="text-success h-5 w-5" />
                  IT Security Team (Lead)
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>
                    <strong>Who:</strong> Security engineers, email security
                    specialists
                  </li>
                  <li>
                    <strong>Role:</strong> Project ownership, policy
                    enforcement, monitoring
                  </li>
                  <li>
                    <strong>Deliverables:</strong> DMARC policies, SPF/DKIM
                    configs, reports
                  </li>
                  <li>
                    <strong>Time Investment:</strong> 20-40 hours (full
                    deployment)
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-4 flex items-center gap-2 text-lg font-semibold">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  IT Infrastructure Team
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>
                    <strong>Who:</strong> Network admins, DNS managers, email
                    admins
                  </li>
                  <li>
                    <strong>Role:</strong> DNS record updates, mail server
                    configs
                  </li>
                  <li>
                    <strong>Deliverables:</strong> SPF records, DKIM keys, DNS
                    changes
                  </li>
                  <li>
                    <strong>Time Investment:</strong> 10-20 hours (initial setup
                    + changes)
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-4 flex items-center gap-2 text-lg font-semibold">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  Marketing Operations
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>
                    <strong>Who:</strong> Marketing tech, email marketing,
                    MarTech admins
                  </li>
                  <li>
                    <strong>Role:</strong> Third-party email platform inventory,
                    DKIM setup
                  </li>
                  <li>
                    <strong>Deliverables:</strong> List of ESPs (Salesforce,
                    Mailchimp, etc.)
                  </li>
                  <li>
                    <strong>Time Investment:</strong> 5-10 hours (inventory +
                    testing)
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-4 flex items-center gap-2 text-lg font-semibold">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  Application Owners
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>
                    <strong>Who:</strong> ERP admins, HR systems, CRM owners
                  </li>
                  <li>
                    <strong>Role:</strong> Identify transactional email sources
                  </li>
                  <li>
                    <strong>Deliverables:</strong> Email source documentation,
                    SPF includes
                  </li>
                  <li>
                    <strong>Time Investment:</strong> 3-5 hours (per
                    application)
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-4 flex items-center gap-2 text-lg font-semibold">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  Communications Team
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>
                    <strong>Who:</strong> Internal comms, change management
                  </li>
                  <li>
                    <strong>Role:</strong> Stakeholder messaging, training
                    materials
                  </li>
                  <li>
                    <strong>Deliverables:</strong> Email announcements, FAQs,
                    runbooks
                  </li>
                  <li>
                    <strong>Time Investment:</strong> 5-8 hours (materials
                    creation)
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Phased Rollout Strategy */}
        <section id="phased-rollout" className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Phased Rollout Strategy
          </h2>

          <Alert variant="info" className="mb-6">
            <Shield className="h-5 w-5" />
            <div>
              <div className="font-semibold">
                Recommended: Start with Low-Risk Domains
              </div>
              <div className="text-muted-foreground mt-1 text-sm">
                Begin with internal-only domains or legacy brands with minimal
                email volume. This allows you to test processes and build
                confidence before tackling high-volume customer-facing domains.
              </div>
            </div>
          </Alert>

          <div className="space-y-6">
            {/* Phase 1 */}
            <Card className="border-primary/20">
              <div className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Phase 1: Discovery & Inventory (Week 1-2)
                    </h3>
                    <div className="mb-4 grid gap-3 md:grid-cols-2">
                      <div>
                        <p className="text-muted-foreground mb-2 text-sm font-medium">
                          Domain Inventory:
                        </p>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>✓ List all corporate domains (50-200 domains)</li>
                          <li>
                            ✓ Categorize by risk: High (customer), Medium
                            (internal), Low (legacy)
                          </li>
                          <li>✓ Identify email volume per domain</li>
                          <li>
                            ✓ Check existing SPF/DKIM with{" "}
                            <Link
                              href="/tools/domain-security-checker"
                              className="text-primary hover:underline"
                            >
                              Domain Security Checker
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-2 text-sm font-medium">
                          Email Source Discovery:
                        </p>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>✓ Survey stakeholders for email systems</li>
                          <li>
                            ✓ Review existing SPF records for authorized senders
                          </li>
                          <li>
                            ✓ Deploy DMARC p=none on pilot domain for visibility
                          </li>
                          <li>
                            ✓ Collect 7-14 days of DMARC reports to find all
                            sources
                          </li>
                        </ul>
                      </div>
                    </div>
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
                      Phase 2: Pilot Domain (Week 3-4)
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Select 1-2 low-risk domains for pilot deployment:
                    </p>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          <strong>Configure SPF:</strong> Add all authorized
                          senders to SPF record
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          <strong>Enable DKIM:</strong> Set up signing on all
                          mail servers and ESPs
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          <strong>Monitor at p=none:</strong> 7 days to validate
                          100% pass rate
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          <strong>Test p=quarantine:</strong> 7 days to verify
                          no legitimate email blocked
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>
                          <strong>Move to p=reject:</strong> Full enforcement on
                          pilot domain
                        </span>
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
                      Phase 3: Tier 2 Domains (Week 5-6)
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Roll out to medium-priority domains (internal comms,
                      regional sites):
                    </p>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          Deploy SPF/DKIM using lessons from pilot (reuse
                          configs)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          Parallel deployment across 5-10 domains simultaneously
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          Automated monitoring reduces manual review time
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          Fast-track to p=reject (3-5 days per policy level)
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
                      Phase 4: Critical Domains (Week 7-8)
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Deploy to high-volume customer-facing domains
                      (corporate.com, brand.com):
                    </p>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-success">•</span>
                        <span>
                          <strong>Extended monitoring:</strong> 14 days at
                          p=none for comprehensive discovery
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success">•</span>
                        <span>
                          <strong>Gradual enforcement:</strong> Use percentage
                          tags (pct=10, pct=50, pct=100)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success">•</span>
                        <span>
                          <strong>Business hour changes:</strong> Deploy during
                          low-volume periods
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success">•</span>
                        <span>
                          <strong>Rollback plan:</strong> Documented process to
                          revert to p=none if issues
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Multi-Domain Management */}
        <section id="multi-domain" className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Multi-Domain Management Best Practices
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <Zap className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Centralized Policy Management
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  Use a single DMARC monitoring platform for all domains.
                  TrustYourInbox provides unified dashboards for 50+ domains,
                  eliminating spreadsheet tracking and manual report
                  aggregation.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>✓ Single pane of glass for compliance status</li>
                  <li>✓ Bulk policy updates across domain portfolios</li>
                  <li>✓ Automated alerting for authentication failures</li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <FileText className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Documentation Standards
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  Maintain a domain inventory with ownership, email volume, and
                  enforcement status. Document all authorized email sources per
                  domain for audit trails.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>✓ Domain owner contact information</li>
                  <li>✓ Business criticality classification</li>
                  <li>✓ SPF include statements and DKIM selectors</li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <GitBranch className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Subdomain Strategy
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  Set sp=reject in your DMARC policy to protect all subdomains
                  automatically. Prevents attackers from using
                  fake.corporate.com for phishing.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>
                    ✓ Check with{" "}
                    <Link
                      href="/tools/dmarc-subdomain-policy-checker"
                      className="text-primary hover:underline"
                    >
                      Subdomain Policy Checker
                    </Link>
                  </li>
                  <li>✓ Explicit subdomains override parent policy</li>
                  <li>✓ Wildcard DNS records need separate DMARC</li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="bg-primary/10 mb-4 inline-flex rounded-full p-3">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Delegation & Access Control
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  Grant regional IT teams or business unit admins access to
                  their specific domains only. Prevents accidental
                  cross-contamination between brands.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>✓ Role-based access control (RBAC)</li>
                  <li>✓ Read-only access for stakeholders</li>
                  <li>✓ Audit logs for all policy changes</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Change Management */}
        <section id="change-management" className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Change Management & Communication
          </h2>

          <div className="prose-custom mb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Enterprise DMARC deployment is 30% technical and 70% change
              management. Use this communication framework:
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-4 text-lg font-semibold">
                  Kickoff Communication (Week 0)
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-muted-foreground mb-2 text-sm font-medium">
                      To: All Stakeholders
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Subject:</strong> [Action Required] DMARC Email
                      Security Initiative
                    </p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      <strong>Content:</strong> Project goals, timeline,
                      expected impact, stakeholder responsibilities, executive
                      sponsor endorsement
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2 text-sm font-medium">
                      Attachments:
                    </p>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>✓ Project charter (1-pager)</li>
                      <li>✓ Stakeholder RACI matrix</li>
                      <li>✓ FAQ document</li>
                      <li>✓ Survey link for email source inventory</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-4 text-lg font-semibold">
                  Weekly Status Updates (Week 1-8)
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Send every Friday to stakeholders and executive sponsor:
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Progress This Week:</strong> Domains deployed,
                      policy changes, issues resolved
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Metrics:</strong> % domains at p=reject,
                      authentication pass rates, spoofing attempts blocked
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Blockers:</strong> Outstanding action items,
                      escalations needed
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Next Week:</strong> Domains in queue, expected
                      milestones
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-4 text-lg font-semibold">
                  Completion Announcement (Week 8)
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Company-wide email celebrating success:
                </p>
                <div className="bg-success/10 rounded-lg p-4">
                  <p className="text-success mb-2 text-sm font-medium">
                    Success Metrics to Highlight:
                  </p>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>
                      ✓ &quot;100% of corporate domains protected with DMARC
                      p=reject&quot;
                    </li>
                    <li>
                      ✓ &quot;99.8% email authentication pass rate across 50+
                      domains&quot;
                    </li>
                    <li>
                      ✓ &quot;Blocked 15,000+ spoofing attempts in first
                      month&quot;
                    </li>
                    <li>
                      ✓ &quot;Achieved compliance with Google/Yahoo 2025
                      mandates&quot;
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Common Pitfalls */}
        <section id="common-pitfalls" className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            Common Pitfalls and How to Avoid Them
          </h2>

          <div className="space-y-4">
            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="mb-3 flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-1 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Pitfall #1: Incomplete Email Source Discovery
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      <strong>Problem:</strong> Missing email sources cause
                      authentication failures and false positives after
                      enforcement.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success mb-2 text-sm font-medium">
                        Solution:
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>
                          ✓ Run DMARC p=none for 14+ days to capture all sources
                        </li>
                        <li>
                          ✓ Survey all application owners (HR, ERP, CRM, support
                          systems)
                        </li>
                        <li>
                          ✓ Check invoice/contract systems for ESP relationships
                        </li>
                        <li>
                          ✓ Review firewall logs for outbound SMTP connections
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="mb-3 flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-1 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Pitfall #2: Rushing to p=reject
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      <strong>Problem:</strong> Moving too quickly blocks
                      legitimate email and creates business disruption.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success mb-2 text-sm font-medium">
                        Solution:
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>
                          ✓ Require 95%+ pass rate at p=none before moving to
                          p=quarantine
                        </li>
                        <li>
                          ✓ Test p=quarantine for 7+ days to verify no user
                          complaints
                        </li>
                        <li>
                          ✓ Use pct= tags for gradual rollout (10% → 50% → 100%)
                        </li>
                        <li>✓ Deploy during low-volume periods (weekends)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="mb-3 flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-1 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Pitfall #3: SPF Record Lookup Limit (10 DNS Lookups)
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      <strong>Problem:</strong> Too many SPF includes cause
                      PermError and authentication failures.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success mb-2 text-sm font-medium">
                        Solution:
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>
                          ✓ Use{" "}
                          <Link
                            href="/tools/spf-surveyor"
                            className="text-primary hover:underline"
                          >
                            SPF Surveyor
                          </Link>{" "}
                          to check lookup count
                        </li>
                        <li>
                          ✓ Flatten SPF records by replacing includes with IP
                          ranges
                        </li>
                        <li>
                          ✓ Use ip4: and ip6: mechanisms instead of include:
                        </li>
                        <li>
                          ✓ Remove outdated or unused email sources from SPF
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="mb-3 flex items-start gap-3">
                  <AlertTriangle className="text-destructive mt-1 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      Pitfall #4: Ignoring Subdomains
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      <strong>Problem:</strong> Attackers use
                      phishing.corporate.com for spoofing attacks.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success mb-2 text-sm font-medium">
                        Solution:
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>✓ Set sp=reject in parent domain DMARC policy</li>
                        <li>
                          ✓ Verify with{" "}
                          <Link
                            href="/tools/dmarc-subdomain-policy-checker"
                            className="text-primary hover:underline"
                          >
                            Subdomain Policy Checker
                          </Link>
                        </li>
                        <li>
                          ✓ Create explicit DMARC records for email-sending
                          subdomains
                        </li>
                        <li>
                          ✓ Use v=DMARC1; p=reject; for non-sending subdomains
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <div className="p-8">
              <div className="mb-6 text-center">
                <h2 className="text-foreground mb-3 text-2xl font-bold">
                  Deploy DMARC Across Your Enterprise in 1-2 Weeks
                </h2>
                <p className="text-muted-foreground mx-auto max-w-2xl">
                  TrustYourInbox automates multi-domain DMARC deployment for
                  large organizations. Get from discovery to p=reject 4x faster
                  with centralized management, automated workflows, and 24/7
                  expert support.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="border-primary/20 bg-background flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
                  <Building2 className="text-primary h-8 w-8" />
                  <h3 className="text-foreground font-semibold">
                    For Enterprise IT Teams
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Manage 50+ domains from a single dashboard. Automated
                    discovery, policy enforcement, and compliance reporting for
                    Fortune 500 organizations.
                  </p>
                  <Link href="/demo" className="mt-auto">
                    <Button size="lg" className="w-full">
                      Schedule Enterprise Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="border-border bg-background flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
                  <Shield className="text-primary h-8 w-8" />
                  <h3 className="text-foreground font-semibold">
                    For Security Consultants
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    White-label DMARC deployment for your enterprise clients.
                    Reduce implementation time from 6 months to 6 weeks with our
                    MSP platform.
                  </p>
                  <Link href="/solutions/msp" className="mt-auto">
                    <Button size="lg" variant="outline" className="w-full">
                      Learn About MSP Solutions
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
            Free Enterprise DMARC Tools
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/tools/domain-security-checker">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Domain Security Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Audit all domains in your portfolio for DMARC readiness
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
                    Check SPF lookup limits across multiple domains
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dmarc-subdomain-policy-checker">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Subdomain Policy Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Verify subdomain protection (sp=reject) for brand safety
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
                    Generate standardized policies for domain portfolios
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
                    Test enforcement impact before enterprise rollout
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/tools/dmarc-analyzer">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    DMARC Analyzer
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Analyze existing DMARC policies for compliance gaps
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
