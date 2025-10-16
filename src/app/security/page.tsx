import Link from "next/link"
import { Shield, ChevronRight, Lock, Eye, AlertCircle, CheckCircle, FileText } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption."
  },
  {
    icon: Eye,
    title: "Access Controls",
    description: "Role-based access control (RBAC) and multi-factor authentication (MFA) for all accounts."
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Regular third-party security assessments and penetration testing to identify vulnerabilities."
  },
  {
    icon: CheckCircle,
    title: "SOC 2 Type II",
    description: "Certified compliant with SOC 2 Type II standards for security, availability, and confidentiality."
  },
  {
    icon: FileText,
    title: "Data Backup",
    description: "Automated daily backups with point-in-time recovery and disaster recovery procedures."
  },
  {
    icon: AlertCircle,
    title: "Incident Response",
    description: "24/7 security monitoring and documented incident response procedures for rapid threat mitigation."
  },
]

const complianceStandards = [
  { name: "SOC 2 Type II", status: "Certified" },
  { name: "GDPR", status: "Compliant" },
  { name: "CCPA", status: "Compliant" },
  { name: "ISO 27001", status: "In Progress" },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-secondary/30">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Security</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security at <span className="text-primary">TrustYourInbox</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Your security is our top priority. We implement industry-leading practices to protect your data
              and maintain the trust you place in us.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Security Measures</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive security controls to protect your email authentication data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compliance & Certifications</h2>
              <p className="text-lg text-muted-foreground">
                We meet rigorous industry standards for security and privacy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {complianceStandards.map((standard) => (
                <div
                  key={standard.name}
                  className="flex items-center justify-between p-6 rounded-xl border border-border bg-background"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">{standard.name}</h3>
                      <p className="text-sm text-muted-foreground">{standard.status}</p>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Infrastructure Security</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Cloud Infrastructure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are hosted on enterprise-grade cloud infrastructure with physically secure data
                  centers, redundant network connectivity, and DDoS protection. We leverage industry-leading
                  cloud providers with proven security track records.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Network Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All network traffic is protected by firewalls, intrusion detection systems (IDS), and
                  intrusion prevention systems (IPS). We implement network segmentation to isolate critical
                  systems and data.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Application Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our applications undergo regular security testing, including static code analysis, dynamic
                  application security testing (DAST), and manual penetration testing by certified security
                  professionals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Employee Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All employees undergo background checks and security awareness training. Access to production
                  systems and customer data is strictly limited on a need-to-know basis with comprehensive
                  audit logging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Data Protection & Privacy</h2>

            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="text-lg font-bold mb-2">Encryption at Rest</h3>
                <p className="text-muted-foreground">
                  All customer data is encrypted using AES-256 encryption. Encryption keys are managed using
                  secure key management systems with regular key rotation.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="text-lg font-bold mb-2">Encryption in Transit</h3>
                <p className="text-muted-foreground">
                  All data transmission uses TLS 1.3 with strong cipher suites. We enforce HTTPS for all web
                  traffic and secure protocols for API communications.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="text-lg font-bold mb-2">Data Residency</h3>
                <p className="text-muted-foreground">
                  Customer data is stored in secure data centers with options for data residency in specific
                  geographic regions to meet compliance requirements.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="text-lg font-bold mb-2">Data Retention</h3>
                <p className="text-muted-foreground">
                  We retain customer data only as long as necessary to provide services or as required by law.
                  Secure data deletion procedures ensure complete removal when no longer needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vulnerability Disclosure */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                <AlertCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Responsible Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We welcome reports from security researchers who discover potential vulnerabilities in our
                systems. If you believe you&apos;ve found a security issue, please report it responsibly.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-bold mb-2">How to Report</h3>
                  <p className="text-sm text-muted-foreground">
                    Email security issues to{" "}
                    <a href="mailto:security@trustyourinbox.com" className="text-primary hover:underline">
                      security@trustyourinbox.com
                    </a>{" "}
                    with detailed information about the vulnerability.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Our Commitment</h3>
                  <p className="text-sm text-muted-foreground">
                    We will acknowledge receipt within 24 hours, investigate promptly, and work with you to
                    address confirmed vulnerabilities. We do not take legal action against security researchers
                    who report issues in good faith.
                  </p>
                </div>
              </div>

              <a
                href="mailto:security@trustyourinbox.com"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Report Security Issue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Security?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              For security inquiries, compliance questions, or to request our security documentation, please
              contact our security team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:security@trustyourinbox.com"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Security Team
              </a>
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold hover:bg-muted transition-colors"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
