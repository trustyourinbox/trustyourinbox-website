import Link from "next/link";
import {
  Shield,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Users,
  BookOpen,
  Home,
  AlertTriangle,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata = {
  title:
    "Why DMARC Matters: Protect Your Business from Email Fraud | Guide 2025",
  description:
    "DMARC prevents email spoofing, phishing attacks, and brand damage. Learn why DMARC is critical for your business, the cost of not having it, and compliance requirements for 2025.",
  keywords: [
    "why DMARC matters",
    "DMARC importance",
    "email security benefits",
    "prevent phishing",
    "email fraud protection",
    "DMARC compliance",
    "brand protection",
  ],
  openGraph: {
    title: "Why DMARC Matters: Business Impact & Benefits",
    description:
      "Understand why every business needs DMARC to prevent fraud, protect reputation, and ensure email deliverability.",
    type: "article",
  },
};

export default function WhyDmarcMatters() {
  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="border-border border-b">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4" />
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/guides"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Guides
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">
              Why DMARC Matters
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="border-border border-b">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
            <BookOpen className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-medium">
              Getting Started
            </span>
          </div>
          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Why DMARC Matters: Protect Your Domain from Email Fraud
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            DMARC isn&apos;t just another technical checkbox—it&apos;s critical
            protection for your business. Learn why DMARC matters, the real cost
            of email fraud, and why Google and Yahoo now require it.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* The Real Cost */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            The Real Cost of Not Having DMARC
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="bg-destructive/10 mb-4 inline-flex rounded-full p-3">
                  <DollarSign className="text-destructive h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  $125,000 Average BEC Attack
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Business Email Compromise (BEC) attacks cost an average of
                  $125K per incident. Attackers send fake emails from your CEO
                  asking for wire transfers. DMARC at p=reject blocks 100% of
                  these.
                </p>
              </div>
            </Card>

            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="bg-destructive/10 mb-4 inline-flex rounded-full p-3">
                  <Users className="text-destructive h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Lost Customer Trust
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  When customers receive scam emails from your domain, 60% lose
                  trust in your brand. Customer acquisition costs 5x more than
                  retention—protect what you&apos;ve built.
                </p>
              </div>
            </Card>

            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="bg-destructive/10 mb-4 inline-flex rounded-full p-3">
                  <TrendingUp className="text-destructive h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Email Deliverability Damage
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Spammers using your domain hurt your sender reputation.
                  Marketing emails land in spam, reducing open rates by 40-60%.
                  Lost revenue from email marketing can exceed $50K/year.
                </p>
              </div>
            </Card>

            <Card className="border-destructive/20">
              <div className="p-6">
                <div className="bg-destructive/10 mb-4 inline-flex rounded-full p-3">
                  <AlertTriangle className="text-destructive h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Compliance Penalties
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Google/Yahoo now reject emails without DMARC from bulk
                  senders. Non-compliance means emails bounce, customers
                  don&apos;t receive invoices/updates, and you violate email
                  regulations.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold">
            5 Critical Business Benefits of DMARC
          </h2>
          <div className="space-y-6">
            <Card>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-success/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Shield className="text-success h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-xl font-semibold">
                      1. Stop Phishing Attacks Cold
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      91% of cyberattacks start with email. DMARC at p=reject
                      blocks 100% of spoofed emails pretending to be from your
                      domain. No more fake CEO emails asking for wire transfers.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success text-xs font-medium">
                        ✓ Prevent: BEC attacks, credential harvesting, malware
                        distribution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-success/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Lock className="text-success h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-xl font-semibold">
                      2. Protect Brand Reputation
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Your brand took years to build—don&apos;t let scammers
                      destroy it overnight. DMARC ensures only legitimate emails
                      from your company reach customers, maintaining trust and
                      credibility.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success text-xs font-medium">
                        ✓ Protect: Brand integrity, customer relationships,
                        market position
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-success/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <TrendingUp className="text-success h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-xl font-semibold">
                      3. Improve Email Deliverability
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Domains with DMARC p=reject see 10-15% higher inbox
                      placement. Gmail and Outlook prioritize authenticated
                      domains. Your marketing emails, sales outreach, and
                      transactional messages actually reach customers.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success text-xs font-medium">
                        ✓ Increase: Open rates, engagement, revenue from email
                        marketing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-success/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <CheckCircle2 className="text-success h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-xl font-semibold">
                      4. Meet Compliance Requirements
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Google and Yahoo mandate DMARC for bulk senders (5,000+
                      emails/day) as of February 2024. PCI DSS 4.0 also requires
                      email authentication for payment card data. DMARC
                      isn&apos;t optional anymore.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success text-xs font-medium">
                        ✓ Comply with: Google/Yahoo mandates, PCI DSS 4.0, SOC
                        2, ISO 27001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-success/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Shield className="text-success h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-xl font-semibold">
                      5. Gain Visibility into Email Traffic
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      DMARC reports show you exactly who&apos;s sending email as
                      your domain. Discover unauthorized services, old marketing
                      platforms, and shadow IT sending emails you didn&apos;t
                      know about.
                    </p>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success text-xs font-medium">
                        ✓ Monitor: All email sources, authentication rates,
                        spoofing attempts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Compliance Alert */}
        <section className="mb-12">
          <Alert variant="warning">
            <AlertTriangle className="h-5 w-5" />
            <div>
              <div className="font-semibold">2025 Compliance Deadlines</div>
              <div className="text-muted-foreground mt-1 text-sm">
                <strong>Google/Yahoo:</strong> DMARC required NOW for bulk
                senders (5,000+ emails/day).
                <br />
                <strong>PCI DSS 4.0:</strong> Email authentication required by
                March 31, 2025.
                <br />
                Without DMARC, your emails will bounce or go to spam.
              </div>
            </div>
          </Alert>
        </section>

        {/* Related Guides */}
        <section className="mb-12">
          <h2 className="text-foreground mb-6 text-2xl font-bold">
            Related Guides
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/guides/what-is-dmarc">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    What is DMARC?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Learn the basics of DMARC
                  </p>
                </div>
              </Card>
            </Link>
            <Link href="/guides/dmarc-quick-start-guide">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Quick Start Guide
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Get DMARC set up in 15 minutes
                  </p>
                </div>
              </Card>
            </Link>
            <Link href="/guides/dmarc-policy-levels-explained">
              <Card className="hover:border-primary/50 h-full transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Policy Levels
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    p=none vs p=quarantine vs p=reject
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <div className="p-8 text-center">
              <h2 className="text-foreground mb-4 text-3xl font-bold">
                Get DMARC Protection Today
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                Don&apos;t wait for a costly attack. TrustYourInbox gets you to
                p=reject in 1-2 weeks with automated setup, monitoring, and
                enforcement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/demo">
                  <Button size="lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/tools/domain-security-checker">
                  <Button size="lg" variant="outline">
                    Check Your Domain Free
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Free Tools */}
        <section>
          <h2 className="text-foreground mb-6 text-2xl font-bold">
            Free DMARC Tools
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/tools/domain-security-checker">
              <Card className="hover:border-primary/50 transition-colors">
                <div className="p-4">
                  <h3 className="text-foreground mb-2 font-semibold">
                    Domain Security Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    See if you have DMARC protection
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
                    Create your first DMARC record
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
                    Analyze your current DMARC setup
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
