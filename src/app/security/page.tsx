import Link from "next/link";
import {
  Shield,
  ChevronRight,
  Lock,
  Eye,
  AlertCircle,
  CheckCircle,
  FileText,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Data Encryption",
    description:
      "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
  },
  {
    icon: Eye,
    title: "Access Controls",
    description:
      "Role-based access control (RBAC) and multi-factor authentication (MFA) for all accounts.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description:
      "Regular third-party security assessments and penetration testing to identify vulnerabilities.",
  },
  {
    icon: CheckCircle,
    title: "SOC 2 Type II",
    description:
      "Certified compliant with SOC 2 Type II standards for security, availability, and confidentiality.",
  },
  {
    icon: FileText,
    title: "Data Backup",
    description:
      "Automated daily backups with point-in-time recovery and disaster recovery procedures.",
  },
  {
    icon: AlertCircle,
    title: "Incident Response",
    description:
      "24/7 security monitoring and documented incident response procedures for rapid threat mitigation.",
  },
];

const complianceStandards = [
  { name: "SOC 2 Type II", status: "Certified" },
  { name: "GDPR", status: "Compliant" },
  { name: "CCPA", status: "Compliant" },
  { name: "ISO 27001", status: "In Progress" },
];

export default function SecurityPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b">
        <div className="container py-4">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Security</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="bg-primary/10 mb-6 inline-flex rounded-full p-4">
              <Shield className="text-primary h-8 w-8" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Security at <span className="text-primary">TrustYourInbox</span>
            </h1>
            <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
              Your security is our top priority. We implement industry-leading
              practices to protect your data and maintain the trust you place in
              us.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Security Measures</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive security controls to protect your email
              authentication data
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="border-border bg-background rounded-md border p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="bg-primary/10 mb-4 inline-flex rounded-lg p-3">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Compliance & Certifications
              </h2>
              <p className="text-muted-foreground text-lg">
                We meet rigorous industry standards for security and privacy
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {complianceStandards.map((standard) => (
                <div
                  key={standard.name}
                  className="border-border bg-background flex items-center justify-between rounded-md border p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <CheckCircle className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">{standard.name}</h3>
                      <p className="text-muted-foreground text-sm">
                        {standard.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Security */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Infrastructure Security</h2>

            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-xl font-bold">Cloud Infrastructure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are hosted on enterprise-grade cloud
                  infrastructure with physically secure data centers, redundant
                  network connectivity, and DDoS protection. We leverage
                  industry-leading cloud providers with proven security track
                  records.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold">Network Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All network traffic is protected by firewalls, intrusion
                  detection systems (IDS), and intrusion prevention systems
                  (IPS). We implement network segmentation to isolate critical
                  systems and data.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold">Application Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our applications undergo regular security testing, including
                  static code analysis, dynamic application security testing
                  (DAST), and manual penetration testing by certified security
                  professionals.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold">Employee Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All employees undergo background checks and security awareness
                  training. Access to production systems and customer data is
                  strictly limited on a need-to-know basis with comprehensive
                  audit logging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">
              Data Protection & Privacy
            </h2>

            <div className="space-y-6">
              <div className="border-border bg-background rounded-md border p-6">
                <h3 className="mb-2 text-lg font-bold">Encryption at Rest</h3>
                <p className="text-muted-foreground">
                  All customer data is encrypted using AES-256 encryption.
                  Encryption keys are managed using secure key management
                  systems with regular key rotation.
                </p>
              </div>

              <div className="border-border bg-background rounded-md border p-6">
                <h3 className="mb-2 text-lg font-bold">
                  Encryption in Transit
                </h3>
                <p className="text-muted-foreground">
                  All data transmission uses TLS 1.3 with strong cipher suites.
                  We enforce HTTPS for all web traffic and secure protocols for
                  API communications.
                </p>
              </div>

              <div className="border-border bg-background rounded-md border p-6">
                <h3 className="mb-2 text-lg font-bold">Data Residency</h3>
                <p className="text-muted-foreground">
                  Customer data is stored in secure data centers with options
                  for data residency in specific geographic regions to meet
                  compliance requirements.
                </p>
              </div>

              <div className="border-border bg-background rounded-md border p-6">
                <h3 className="mb-2 text-lg font-bold">Data Retention</h3>
                <p className="text-muted-foreground">
                  We retain customer data only as long as necessary to provide
                  services or as required by law. Secure data deletion
                  procedures ensure complete removal when no longer needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vulnerability Disclosure */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="border-primary/20 from-primary/5 to-background rounded-lg border-2 bg-gradient-to-br p-8">
              <div className="bg-primary/10 mb-4 inline-flex rounded-lg p-3">
                <AlertCircle className="text-primary h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">
                Responsible Disclosure
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We welcome reports from security researchers who discover
                potential vulnerabilities in our systems. If you believe
                you&apos;ve found a security issue, please report it
                responsibly.
              </p>

              <div className="mb-6 space-y-4">
                <div>
                  <h3 className="mb-2 font-bold">How to Report</h3>
                  <p className="text-muted-foreground text-sm">
                    Email security issues to{" "}
                    <a
                      href="mailto:security@trustyourinbox.com"
                      className="text-primary hover:underline"
                    >
                      security@trustyourinbox.com
                    </a>{" "}
                    with detailed information about the vulnerability.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold">Our Commitment</h3>
                  <p className="text-muted-foreground text-sm">
                    We will acknowledge receipt within 24 hours, investigate
                    promptly, and work with you to address confirmed
                    vulnerabilities. We do not take legal action against
                    security researchers who report issues in good faith.
                  </p>
                </div>
              </div>

              <a
                href="mailto:security@trustyourinbox.com"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors"
              >
                Report Security Issue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Questions About Security?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              For security inquiries, compliance questions, or to request our
              security documentation, please contact our security team.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:security@trustyourinbox.com"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold transition-colors"
              >
                Contact Security Team
              </a>
              <Link
                href="/privacy"
                className="border-border hover:bg-muted inline-flex items-center justify-center rounded-lg border px-8 py-3 text-sm font-semibold transition-colors"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
