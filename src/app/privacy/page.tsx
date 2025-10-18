import Link from "next/link";
import { Shield, ChevronRight } from "lucide-react";

export default function PrivacyPage() {
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
            <span className="text-foreground">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="bg-primary/10 rounded-md p-3">
                <Shield className="text-primary h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Last updated: January 16, 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-slate max-w-none">
            <p className="mb-8 text-lg leading-relaxed">
              At TrustYourInbox, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our DMARC monitoring and email
              authentication services.
            </p>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">
                1. Information We Collect
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  <strong className="text-foreground">
                    Account Information:
                  </strong>{" "}
                  When you create an account, we collect your name, email
                  address, company name, and password.
                </p>
                <p>
                  <strong className="text-foreground">Domain Data:</strong> We
                  collect and process DMARC aggregate reports (RUA) and forensic
                  reports (RUF) for the domains you monitor. This includes email
                  authentication data, sender information, and delivery
                  statistics.
                </p>
                <p>
                  <strong className="text-foreground">Usage Data:</strong> We
                  automatically collect information about your interactions with
                  our platform, including IP addresses, browser type, device
                  information, and usage patterns.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">
                2. How We Use Your Information
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Provide, maintain, and improve our DMARC monitoring services
                  </li>
                  <li>Process and analyze DMARC reports for your domains</li>
                  <li>
                    Send you technical alerts, security notifications, and
                    product updates
                  </li>
                  <li>Respond to your support requests and communications</li>
                  <li>
                    Detect and prevent fraud, abuse, and security incidents
                  </li>
                  <li>
                    Comply with legal obligations and enforce our terms of
                    service
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">
                3. Data Sharing and Disclosure
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  We do not sell, rent, or trade your personal information. We
                  may share your information in the following limited
                  circumstances:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong className="text-foreground">
                      Service Providers:
                    </strong>{" "}
                    We may share data with third-party service providers who
                    perform services on our behalf (e.g., hosting, analytics).
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Legal Requirements:
                    </strong>{" "}
                    We may disclose information if required by law or in
                    response to valid legal requests.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Business Transfers:
                    </strong>{" "}
                    In the event of a merger, acquisition, or sale of assets,
                    your information may be transferred.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">4. Data Security</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  We implement industry-standard security measures to protect
                  your information, including:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Encryption of data in transit (TLS/SSL) and at rest
                    (AES-256)
                  </li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>
                    Secure data centers with physical and network security
                  </li>
                  <li>Employee training on data protection best practices</li>
                </ul>
                <p>
                  However, no method of transmission over the internet is 100%
                  secure. While we strive to protect your information, we cannot
                  guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">5. Data Retention</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  We retain your personal information and DMARC report data for
                  as long as your account is active or as needed to provide
                  services. Report data retention periods depend on your
                  subscription plan:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Free plan: 30 days</li>
                  <li>Business plan: 1 year</li>
                  <li>
                    Enterprise plan: Unlimited (or as specified in your
                    agreement)
                  </li>
                </ul>
                <p>
                  After account deletion, we may retain certain information for
                  legal compliance, dispute resolution, and fraud prevention.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">6. Your Rights</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Access, correct, or delete your personal information</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>
                    Data portability (receive your data in a machine-readable
                    format)
                  </li>
                  <li>Withdraw consent for data processing</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@trustyourinbox.com"
                    className="text-primary hover:underline"
                  >
                    privacy@trustyourinbox.com
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">
                7. Cookies and Tracking
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  We use cookies and similar tracking technologies to improve
                  your experience, analyze usage, and deliver personalized
                  content. You can control cookies through your browser
                  settings.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">
                8. International Data Transfers
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Your information may be transferred to and processed in
                  countries other than your country of residence. We ensure
                  appropriate safeguards are in place for international data
                  transfers in compliance with applicable laws.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">
                9. Children&apos;s Privacy
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Our services are not intended for individuals under the age of
                  16. We do not knowingly collect personal information from
                  children.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">
                10. Changes to This Policy
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of significant changes by email or through our
                  platform. Continued use of our services after changes
                  constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  If you have questions about this Privacy Policy, please
                  contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li>
                    <strong className="text-foreground">Email:</strong>{" "}
                    <a
                      href="mailto:privacy@trustyourinbox.com"
                      className="text-primary hover:underline"
                    >
                      privacy@trustyourinbox.com
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">Mail:</strong>{" "}
                    TrustYourInbox, Inc., [Address]
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
