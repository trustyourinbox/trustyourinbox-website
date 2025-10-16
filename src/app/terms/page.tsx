import Link from "next/link"
import { FileText, ChevronRight } from "lucide-react"

export default function TermsPage() {
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
            <span className="text-foreground">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Last updated: January 16, 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of TrustYourInbox&apos;s DMARC
              monitoring and email authentication services (&quot;Services&quot;). By using our Services, you agree to be
              bound by these Terms.
            </p>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By creating an account or using our Services, you acknowledge that you have read, understood,
                  and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these
                  Terms, you may not use our Services.
                </p>
                <p>
                  You represent that you are at least 18 years old and have the legal capacity to enter into
                  these Terms. If you are using our Services on behalf of an organization, you represent that you
                  have the authority to bind that organization to these Terms.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>TrustYourInbox provides:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>DMARC aggregate report (RUA) processing and analysis</li>
                  <li>DMARC forensic report (RUF) parsing and visualization</li>
                  <li>Email authentication monitoring (SPF, DKIM, DMARC)</li>
                  <li>Domain security analysis and policy recommendations</li>
                  <li>Alerting and notification services</li>
                  <li>API access for integration with your systems</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time,
                  with or without notice.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Account Creation:</strong> You must provide accurate,
                  current, and complete information when creating an account. You are responsible for maintaining
                  the confidentiality of your account credentials.
                </p>
                <p>
                  <strong className="text-foreground">Account Security:</strong> You are responsible for all
                  activities that occur under your account. Notify us immediately of any unauthorized use of your
                  account.
                </p>
                <p>
                  <strong className="text-foreground">One Account per User:</strong> You may not create multiple
                  accounts or share your account with others without our permission.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Subscription Plans and Payment</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Free Plan:</strong> Our free plan provides limited access
                  to our Services with usage restrictions. Free accounts may be subject to additional limitations
                  or termination at our discretion.
                </p>
                <p>
                  <strong className="text-foreground">Paid Plans:</strong> Paid subscription plans provide
                  enhanced features and higher usage limits. You agree to pay all fees associated with your
                  chosen plan.
                </p>
                <p>
                  <strong className="text-foreground">Billing:</strong> Subscription fees are billed in advance
                  on a recurring basis (monthly or annual). All fees are non-refundable except as required by law
                  or as specified in our refund policy.
                </p>
                <p>
                  <strong className="text-foreground">Price Changes:</strong> We may change our pricing at any
                  time. Price changes will apply to your next billing cycle after notice.
                </p>
                <p>
                  <strong className="text-foreground">Cancellation:</strong> You may cancel your subscription at
                  any time. Cancellations take effect at the end of your current billing period.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Acceptable Use</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others, including intellectual property rights</li>
                  <li>Upload or transmit viruses, malware, or other malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
                  <li>Use our Services to send spam or unsolicited communications</li>
                  <li>Reverse engineer, decompile, or disassemble our Services</li>
                  <li>Use automated systems (bots, scrapers) without our written permission</li>
                  <li>Resell or redistribute our Services without authorization</li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate accounts that violate these acceptable use
                  guidelines.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Data and Privacy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Your Data:</strong> You retain ownership of all data you
                  submit to our Services. You grant us a license to process, store, and analyze your data solely
                  to provide our Services.
                </p>
                <p>
                  <strong className="text-foreground">Data Processing:</strong> We process DMARC reports and
                  email authentication data in accordance with our Privacy Policy and applicable data protection
                  laws.
                </p>
                <p>
                  <strong className="text-foreground">Data Security:</strong> We implement reasonable security
                  measures to protect your data, but we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All content, features, and functionality of our Services, including but not limited to text,
                  graphics, logos, icons, images, software, and data compilations, are the exclusive property of
                  TrustYourInbox and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You are granted a limited, non-exclusive, non-transferable license to use our Services for your
                  internal business purposes in accordance with these Terms.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Service Availability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We strive to provide reliable Services with minimal downtime. However, we do not guarantee
                  uninterrupted or error-free access to our Services. We may perform scheduled maintenance or
                  emergency repairs that temporarily affect availability.
                </p>
                <p>
                  <strong className="text-foreground">SLA:</strong> Enterprise customers may have service level
                  agreements (SLAs) that specify uptime guarantees and remedies for service disruptions.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRUSTYOURINBOX SHALL NOT BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
                  PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
                </p>
                <p>
                  OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL
                  NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You agree to indemnify, defend, and hold harmless TrustYourInbox and its officers, directors,
                  employees, and agents from any claims, liabilities, damages, losses, and expenses arising from
                  your use of our Services, your violation of these Terms, or your violation of any rights of
                  others.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may suspend or terminate your access to our Services at any time, with or without cause,
                  with or without notice. Reasons for termination may include violation of these Terms,
                  non-payment, or fraudulent activity.
                </p>
                <p>
                  Upon termination, your right to use our Services immediately ceases. We may delete your account
                  and data in accordance with our data retention policies.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">12. Governing Law and Disputes</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These Terms are governed by the laws of [Jurisdiction], without regard to its conflict of law
                  provisions. Any disputes arising from these Terms or our Services shall be resolved through
                  binding arbitration in accordance with the rules of [Arbitration Organization].
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update these Terms from time to time. We will notify you of material changes by email or
                  through our platform. Your continued use of our Services after changes constitutes acceptance
                  of the updated Terms.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>If you have questions about these Terms of Service, please contact us:</p>
                <ul className="list-none space-y-2">
                  <li>
                    <strong className="text-foreground">Email:</strong>{" "}
                    <a href="mailto:legal@trustyourinbox.com" className="text-primary hover:underline">
                      legal@trustyourinbox.com
                    </a>
                  </li>
                  <li>
                    <strong className="text-foreground">Mail:</strong> TrustYourInbox, Inc., [Address]
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
