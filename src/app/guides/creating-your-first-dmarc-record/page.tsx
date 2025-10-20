import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Mail,
  Clock,
  Settings,
  BookOpen,
  Lock,
  Wrench,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title:
    "Creating Your First DMARC Record: Complete Setup Guide 2025 | TrustYourInbox",
  description:
    "Step-by-step guide to creating and deploying your first DMARC record. Learn DNS setup, policy selection, and best practices for email authentication success.",
  keywords: [
    "DMARC record creation",
    "first DMARC setup",
    "DMARC DNS configuration",
    "create DMARC policy",
    "DMARC implementation guide",
    "email authentication setup",
  ],
  openGraph: {
    title: "Creating Your First DMARC Record: Complete Setup Guide 2025",
    description:
      "Step-by-step guide to creating and deploying your first DMARC record with best practices for success.",
    type: "article",
    url: "https://trustyourinbox.com/guides/creating-your-first-dmarc-record",
  },
};

export default function CreatingYourFirstDMARCRecordGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/guides"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Guides
            </Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <span className="text-gray-900 dark:text-gray-100">
              Creating Your First DMARC Record
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="bg-success/10 text-success dark:bg-success/20 mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium">
            <Shield className="mr-2 h-4 w-4" />
            DMARC Implementation
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Creating Your First DMARC Record
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A practical, step-by-step guide to creating and deploying your first
            DMARC record. Learn what each tag means, how to choose the right
            policy, and best practices for a successful rollout.
          </p>
        </div>

        {/* Reading Time & Difficulty */}
        <div className="mb-12 flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>12 min read</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Beginner Level</span>
          </div>
        </div>

        {/* Prerequisites */}
        <Card className="mb-12">
          <div className="flex items-start space-x-4">
            <div className="bg-warning/10 dark:bg-warning/20 rounded-lg p-3">
              <AlertTriangle className="text-warning h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Prerequisites Before You Begin
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="text-success mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                  <span>
                    <strong>SPF record deployed</strong> - DMARC requires SPF
                    for authentication
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-success mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                  <span>
                    <strong>DKIM configured</strong> - At least one DKIM
                    selector active
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-success mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                  <span>
                    <strong>DNS access</strong> - Ability to add TXT records to
                    your domain
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-success mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                  <span>
                    <strong>Email to receive reports</strong> - For aggregate
                    and forensic reports
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Section 1: Understanding DMARC Record Structure */}
          <Card className="mb-8">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Settings className="text-primary mr-3 h-6 w-6" />
              Understanding DMARC Record Structure
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              A DMARC record is a DNS TXT record published at{" "}
              <code>_dmarc.yourdomain.com</code> that tells email receivers how
              to handle authentication failures.
            </p>

            <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Basic DMARC Record Anatomy
              </h3>
              <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                {`v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com`}
              </pre>
              <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start">
                  <span className="text-primary mr-2 font-mono font-semibold">
                    v=DMARC1
                  </span>
                  <span>- Protocol version (always DMARC1)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2 font-mono font-semibold">
                    p=none
                  </span>
                  <span>
                    - Policy (none, quarantine, or reject) - what receivers
                    should do
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2 font-mono font-semibold">
                    rua=
                  </span>
                  <span>
                    - Aggregate report email - where to send daily reports
                  </span>
                </div>
              </div>
            </div>

            <Alert variant="info" className="mb-4">
              <strong>Important:</strong> Tags must be separated by semicolons
              (;) and spaces. Order doesn&apos;t matter except v=DMARC1 must be
              first.
            </Alert>
          </Card>

          {/* Section 2: Step-by-Step Record Creation */}
          <Card className="mb-8">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Wrench className="text-primary mr-3 h-6 w-6" />
              Step-by-Step Record Creation
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="border-primary border-l-4 pl-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Step 1: Start with Monitoring Mode (p=none)
                </h3>
                <p className="mb-3 text-gray-600 dark:text-gray-300">
                  Always begin with <code>p=none</code> to collect data without
                  affecting email delivery. This lets you identify all
                  legitimate senders before enforcement.
                </p>
                <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                  {`v=DMARC1; p=none; rua=mailto:dmarc-reports@yourdomain.com`}
                </pre>
                <Alert variant="success" className="mt-3">
                  <strong>Recommended Duration:</strong> Monitor for 2-4 weeks
                  minimum before moving to enforcement.
                </Alert>
              </div>

              {/* Step 2 */}
              <div className="border-primary border-l-4 pl-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Step 2: Add Report Destinations
                </h3>
                <p className="mb-3 text-gray-600 dark:text-gray-300">
                  Specify where to send aggregate (RUA) and forensic (RUF)
                  reports. You can use multiple addresses separated by commas.
                </p>
                <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                  {`v=DMARC1; p=none;
rua=mailto:dmarc@yourdomain.com,mailto:reports@trustyourinbox.com;
ruf=mailto:forensic@yourdomain.com`}
                </pre>
                <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div>
                    <strong>rua</strong> - Aggregate reports (daily summaries,
                    all providers support)
                  </div>
                  <div>
                    <strong>ruf</strong> - Forensic reports (real-time failures,
                    limited provider support)
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border-primary border-l-4 pl-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Step 3: Configure Alignment Mode (Optional)
                </h3>
                <p className="mb-3 text-gray-600 dark:text-gray-300">
                  Control how strictly domains must match for SPF and DKIM
                  authentication.
                </p>
                <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                  {`v=DMARC1; p=none;
rua=mailto:dmarc@yourdomain.com;
aspf=r; adkim=r`}
                </pre>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-primary mr-2 font-mono">aspf=r</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      - SPF alignment (r=relaxed allows subdomains, s=strict
                      requires exact match)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 font-mono">adkim=r</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      - DKIM alignment (r=relaxed allows subdomains, s=strict
                      requires exact match)
                    </span>
                  </div>
                </div>
                <Alert variant="info" className="mt-3">
                  <strong>Default:</strong> If not specified, both default to
                  relaxed (r). Most organizations should use relaxed alignment.
                </Alert>
              </div>

              {/* Step 4 */}
              <div className="border-primary border-l-4 pl-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Step 4: Set Percentage for Gradual Rollout
                </h3>
                <p className="mb-3 text-gray-600 dark:text-gray-300">
                  Use the <code>pct</code> tag to apply your policy to only a
                  percentage of emails during enforcement rollout.
                </p>
                <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                  {`v=DMARC1; p=quarantine;
rua=mailto:dmarc@yourdomain.com;
pct=10`}
                </pre>
                <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div>
                    <strong>pct=10</strong> - Apply policy to 10% of failing
                    emails
                  </div>
                  <div>
                    <strong>pct=100</strong> - Apply to all emails (default if
                    not specified)
                  </div>
                </div>
                <Alert variant="warning" className="mt-3">
                  <strong>Strategy:</strong> Start with pct=10, monitor for 1
                  week, then increase to 25%, 50%, 100% over 4-6 weeks.
                </Alert>
              </div>

              {/* Step 5 */}
              <div className="border-primary border-l-4 pl-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Step 5: Add Subdomain Policy (Optional)
                </h3>
                <p className="mb-3 text-gray-600 dark:text-gray-300">
                  Specify a different policy for subdomains using the{" "}
                  <code>sp</code> tag.
                </p>
                <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                  {`v=DMARC1; p=reject;
rua=mailto:dmarc@yourdomain.com;
sp=quarantine`}
                </pre>
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  <strong>Example:</strong> Main domain uses p=reject (strict),
                  but subdomains use sp=quarantine (less strict) during
                  transition.
                </div>
              </div>
            </div>
          </Card>

          {/* Section 3: Common DMARC Record Examples */}
          <Card className="mb-8">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Mail className="text-primary mr-3 h-6 w-6" />
              Common DMARC Record Examples
            </h2>

            <div className="space-y-6">
              {/* Example 1 */}
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Starter Record (Monitoring Only)
                </h3>
                <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                  {`v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com`}
                </pre>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <strong>Use case:</strong> First deployment, collecting data
                  to understand email sources.
                </p>
              </div>

              {/* Example 2 */}
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Gradual Quarantine Rollout
                </h3>
                <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                  {`v=DMARC1; p=quarantine; pct=25;
rua=mailto:dmarc@yourdomain.com;
ruf=mailto:forensic@yourdomain.com`}
                </pre>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <strong>Use case:</strong> Moving from monitoring to
                  enforcement, applying policy to 25% of failures.
                </p>
              </div>

              {/* Example 3 */}
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Full Enforcement with Forensics
                </h3>
                <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                  {`v=DMARC1; p=reject;
rua=mailto:dmarc@yourdomain.com;
ruf=mailto:forensic@yourdomain.com;
fo=1`}
                </pre>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <strong>Use case:</strong> Mature implementation with full
                  protection and detailed failure reports.
                </p>
              </div>

              {/* Example 4 */}
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Enterprise with Third-Party Reporting
                </h3>
                <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                  {`v=DMARC1; p=reject;
rua=mailto:dmarc@yourdomain.com,mailto:reports@trustyourinbox.com;
sp=quarantine;
pct=100;
adkim=s; aspf=s`}
                </pre>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <strong>Use case:</strong> Enterprise deployment with strict
                  alignment, managed service reports, and subdomain protection.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 4: DNS Deployment */}
          <Card className="mb-8">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Lock className="text-primary mr-3 h-6 w-6" />
              Deploying Your Record to DNS
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  DNS Record Configuration
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                          Field
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                          Type
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                          TXT
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                          Name/Host
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                          _dmarc
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                          Value
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                          v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                          TTL
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                          3600 (1 hour) or 300 (5 min) during initial testing
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <Alert variant="warning" className="mb-4">
                <strong>Common Mistake:</strong> Some DNS providers require just
                &quot;_dmarc&quot; as the host name, while others need
                &quot;_dmarc.yourdomain.com&quot;. Check your provider&apos;s
                documentation.
              </Alert>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  Verification Steps
                </h3>
                <ol className="list-decimal space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Add the TXT record to your DNS zone file through your DNS
                    provider
                  </li>
                  <li>
                    Wait 5-60 minutes for DNS propagation (depends on your TTL)
                  </li>
                  <li>
                    Verify the record using our{" "}
                    <Link
                      href="/tools/dmarc-domain-checker"
                      className="text-primary hover:underline"
                    >
                      DMARC Domain Checker
                    </Link>
                  </li>
                  <li>
                    Send test emails and check for DMARC authentication headers
                  </li>
                  <li>
                    Wait 24-48 hours for first aggregate reports to arrive
                  </li>
                </ol>
              </div>

              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Command Line Verification
                </h4>
                <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
                  {`# Linux/Mac
dig _dmarc.yourdomain.com TXT +short

# Windows
nslookup -type=TXT _dmarc.yourdomain.com`}
                </pre>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Expected output should show your DMARC record value.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 5: Progressive Rollout Timeline */}
          <Card className="mb-8">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Clock className="text-primary mr-3 h-6 w-6" />
              Recommended Rollout Timeline
            </h2>

            <div className="space-y-4">
              {/* Week 1-2 */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                  Weeks 1-2: Monitoring Phase
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                  <code>p=none</code>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
                  <li>Deploy DMARC record with p=none</li>
                  <li>Collect aggregate reports daily</li>
                  <li>Identify all legitimate email sources</li>
                  <li>Fix SPF/DKIM for any legitimate failures</li>
                </ul>
              </div>

              {/* Week 3-4 */}
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                  Weeks 3-4: Initial Quarantine (10%)
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                  <code>p=quarantine; pct=10</code>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
                  <li>Move to quarantine with 10% application</li>
                  <li>Monitor for any delivery issues</li>
                  <li>Watch for complaints from users</li>
                </ul>
              </div>

              {/* Week 5-6 */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                  Weeks 5-6: Increase to 25-50%
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                  <code>p=quarantine; pct=50</code>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
                  <li>Gradually increase percentage if no issues</li>
                  <li>Continue monitoring reports</li>
                  <li>Address any new failures quickly</li>
                </ul>
              </div>

              {/* Week 7-8 */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                  Weeks 7-8: Full Quarantine
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                  <code>p=quarantine; pct=100</code>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
                  <li>Apply quarantine to 100% of failing emails</li>
                  <li>Verify SPF/DKIM pass rates remain high (95%+)</li>
                  <li>Prepare for final move to p=reject</li>
                </ul>
              </div>

              {/* Week 9+ */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                  Week 9+: Full Protection
                </h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                  <code>p=reject</code>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
                  <li>Move to p=reject for maximum protection</li>
                  <li>Maintain ongoing monitoring</li>
                  <li>Review reports weekly for new issues</li>
                </ul>
              </div>
            </div>

            <Alert variant="success" className="mt-4">
              <strong>Success Metric:</strong> Aim for 95%+ DMARC pass rate
              before moving to the next enforcement level.
            </Alert>
          </Card>

          {/* Section 6: Common Mistakes to Avoid */}
          <Card className="mb-8">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <AlertTriangle className="text-warning mr-3 h-6 w-6" />
              Common Mistakes to Avoid
            </h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
                <h3 className="mb-2 font-semibold text-red-900 dark:text-red-100">
                  ❌ Starting with p=reject
                </h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Why it&apos;s bad:</strong> You&apos;ll immediately
                  block legitimate emails you weren&apos;t aware of. Always
                  start with p=none.
                </p>
              </div>

              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
                <h3 className="mb-2 font-semibold text-red-900 dark:text-red-100">
                  ❌ No report destination (missing rua tag)
                </h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Why it&apos;s bad:</strong> You won&apos;t receive
                  data about authentication failures and can&apos;t monitor your
                  deployment.
                </p>
              </div>

              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
                <h3 className="mb-2 font-semibold text-red-900 dark:text-red-100">
                  ❌ Syntax errors (missing semicolons, wrong order)
                </h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Why it&apos;s bad:</strong> Invalid records will be
                  ignored entirely, leaving you unprotected.
                </p>
              </div>

              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
                <h3 className="mb-2 font-semibold text-red-900 dark:text-red-100">
                  ❌ Deploying without SPF/DKIM first
                </h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Why it&apos;s bad:</strong> DMARC requires at least
                  one of SPF or DKIM to pass. Without them, all emails fail
                  authentication.
                </p>
              </div>

              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
                <h3 className="mb-2 font-semibold text-red-900 dark:text-red-100">
                  ❌ Not monitoring reports regularly
                </h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Why it&apos;s bad:</strong> New email sources or
                  configuration changes can break authentication without you
                  knowing.
                </p>
              </div>

              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
                <h3 className="mb-2 font-semibold text-red-900 dark:text-red-100">
                  ❌ Multiple DMARC records
                </h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Why it&apos;s bad:</strong> Having more than one DMARC
                  TXT record at _dmarc.yourdomain.com causes all records to be
                  ignored per RFC 7489.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 7: Next Steps After Deployment */}
          <Card className="mb-8">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <ArrowRight className="text-primary mr-3 h-6 w-6" />
              Next Steps After Deployment
            </h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    1. Monitor Your Reports Daily
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Review aggregate reports to identify authentication
                    failures. Use our{" "}
                    <Link
                      href="/tools/xml-converter"
                      className="text-primary hover:underline"
                    >
                      XML to JSON Converter
                    </Link>{" "}
                    for easier analysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    2. Authorize Legitimate Sources
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Add any legitimate third-party senders to your SPF record or
                    configure DKIM signing for them.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    3. Plan Your Enforcement Rollout
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Follow the progressive timeline above to safely move from
                    p=none to p=quarantine to p=reject.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    4. Consider Subdomain Protection
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Add DMARC records for subdomains or use the sp tag to
                    protect them. Read our{" "}
                    <Link
                      href="/guides/subdomain-dmarc-policies"
                      className="text-primary hover:underline"
                    >
                      Subdomain DMARC Policies Guide
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="text-success mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    5. Implement Ongoing Monitoring
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Set up automated report processing with TrustYourInbox to
                    catch issues before they impact delivery.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Related Guides */}
        <Card className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Related Guides
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/guides/what-is-dmarc"
              className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <Shield className="text-primary mb-3 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                What is DMARC?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Learn DMARC fundamentals before creating your record
              </p>
            </Link>

            <Link
              href="/guides/understanding-dmarc-reports"
              className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <Mail className="text-primary mb-3 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                Understanding DMARC Reports
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Learn how to read and interpret your DMARC reports
              </p>
            </Link>

            <Link
              href="/guides/moving-to-p-reject-safely"
              className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <Lock className="text-primary mb-3 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                Moving to p=reject Safely
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Progressive strategy for maximum email protection
              </p>
            </Link>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <Card className="border-primary border-2">
            <div className="text-center">
              <Shield className="text-primary mx-auto mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Generate Your DMARC Record
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Use our free DMARC Policy Generator to create a validated record
                in seconds.
              </p>
              <Button size="lg" className="w-full" asChild>
                <Link href="/tools/dmarc-policy-generator">
                  Generate DMARC Record
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <Mail className="text-primary mx-auto mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Automate DMARC Management
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Let TrustYourInbox handle reports, monitoring, and enforcement
                rollout for you.
              </p>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <Link href="/product">
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>

        {/* Free Tools Section */}
        <Card>
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Free DMARC Tools
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/tools/dmarc-policy-generator"
              className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <Settings className="text-primary mb-3 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                DMARC Policy Generator
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Create validated DMARC records with our interactive tool
              </p>
            </Link>

            <Link
              href="/tools/dmarc-domain-checker"
              className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <CheckCircle className="text-primary mb-3 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                DMARC Domain Checker
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Verify your DMARC record is deployed correctly
              </p>
            </Link>

            <Link
              href="/tools/xml-converter"
              className="group hover:border-primary block rounded-lg border border-gray-200 p-6 transition-colors dark:border-gray-700"
            >
              <Mail className="text-primary mb-3 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-semibold text-gray-900 dark:text-white">
                XML to JSON Converter
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Convert aggregate reports to readable JSON format
              </p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
