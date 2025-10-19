import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Alert } from "@/components/ui/Alert";
import {
  Key,
  ArrowRight,
  Shield,
  Terminal,
  CheckCircle,
  AlertTriangle,
  Code,
  Lock,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Generating DKIM Keys: Create Strong Email Signatures | Guide 2025",
  description:
    "Learn how to generate DKIM keys for email authentication. Step-by-step instructions for creating RSA 2048-bit keys, publishing DNS records, and testing DKIM signatures.",
  keywords: [
    "generate DKIM keys",
    "DKIM key generation",
    "create DKIM signature",
    "DKIM RSA keys",
    "DKIM setup",
    "DKIM public key",
    "DKIM private key",
    "email authentication keys",
  ],
  openGraph: {
    title: "Generating DKIM Keys: Create Strong Email Signatures",
    description:
      "Learn how to generate DKIM keys for email authentication. Step-by-step instructions for creating RSA 2048-bit keys and publishing DNS records.",
    type: "article",
    url: "https://trustyourinbox.com/guides/generating-dkim-keys",
  },
};

export default function GeneratingDkimKeys() {
  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="border-border border-b">
        <div className="container mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/guides"
              className="text-muted-foreground hover:text-foreground"
            >
              Guides
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Generating DKIM Keys</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="border-border bg-muted/30 border-b">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
            DKIM Setup
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Generating DKIM Keys
          </h1>
          <p className="text-muted-foreground mb-6 text-xl">
            Create secure RSA key pairs for DKIM email authentication. Learn
            proper key sizes, generation methods, and DNS publishing.
          </p>
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Key className="h-4 w-4" />
              <span>Technical</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* What Are DKIM Keys */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">What Are DKIM Keys?</h2>

            <p className="text-muted-foreground mb-6">
              DKIM uses public-key cryptography to sign emails. You need two
              keys:
            </p>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <Card className="border-blue-500/50 bg-blue-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold">Private Key</h3>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  Kept secret on your mail server. Signs outgoing emails.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Stored on mail server</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Never shared publicly</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Used to create signatures</span>
                  </div>
                </div>
              </Card>

              <Card className="border-green-500/50 bg-green-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Key className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold">Public Key</h3>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  Published in DNS. Receiving servers use it to verify
                  signatures.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Published as DNS TXT record</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Publicly accessible</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Used to verify signatures</span>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Key Size Recommendations */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Choosing the Right Key Size
            </h2>

            <p className="text-muted-foreground mb-6">
              DKIM supports different RSA key sizes. Larger keys are more secure
              but slower to process.
            </p>

            <div className="space-y-4">
              <Card className="border-green-500/50 bg-green-500/5 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">2048-bit RSA</h3>
                  <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    RECOMMENDED
                  </span>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  Industry standard. Excellent security with good performance.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Supported by all major email providers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Secure for 10+ years</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Fast signature verification</span>
                  </div>
                </div>
              </Card>

              <Card className="border-blue-500/50 bg-blue-500/5 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">4096-bit RSA</h3>
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    HIGH SECURITY
                  </span>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  Maximum security. Use for highly sensitive environments.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                    <span>Future-proof security</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-yellow-600" />
                    <span>Slower signature generation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-yellow-600" />
                    <span>Larger DNS records (may exceed 255 chars)</span>
                  </div>
                </div>
              </Card>

              <Card className="border-red-500/50 bg-red-500/5 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">1024-bit RSA</h3>
                  <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                    NOT RECOMMENDED
                  </span>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  Weak security. Being deprecated by major providers.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Vulnerable to modern attacks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Google/Microsoft rejecting 1024-bit keys</span>
                  </div>
                </div>
              </Card>
            </div>

            <Alert variant="success" className="mt-6">
              <Shield className="h-4 w-4" />
              <div>
                <div className="font-semibold">Best Practice</div>
                <p className="mb-0 text-sm">
                  Use <strong>2048-bit RSA keys</strong> for the best balance of
                  security and performance. Only use 4096-bit if you have
                  specific compliance requirements.
                </p>
              </div>
            </Alert>
          </section>

          {/* Generation Methods */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              How to Generate DKIM Keys
            </h2>

            <p className="text-muted-foreground mb-6">
              There are three main ways to generate DKIM keys:
            </p>

            <div className="space-y-6">
              {/* Method 1: OpenSSL */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Using OpenSSL (Command Line)
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Best for Linux/Mac servers. Gives you complete control.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="mb-2 text-sm font-medium">
                      Step 1: Generate Private Key
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="block text-xs">
                        openssl genrsa -out dkim_private.pem 2048
                      </code>
                    </div>
                    <p className="text-muted-foreground mt-2 text-xs">
                      Creates a 2048-bit RSA private key
                    </p>
                  </div>

                  <div>
                    <div className="mb-2 text-sm font-medium">
                      Step 2: Extract Public Key
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="block text-xs">
                        openssl rsa -in dkim_private.pem -pubout -outform der
                        2&gt;/dev/null | openssl base64 -A
                      </code>
                    </div>
                    <p className="text-muted-foreground mt-2 text-xs">
                      Outputs base64-encoded public key for DNS
                    </p>
                  </div>

                  <Alert variant="warning">
                    <AlertTriangle className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">
                        Secure Your Private Key!
                      </div>
                      <p className="mb-0 text-sm">
                        Set strict permissions:{" "}
                        <code className="text-primary">
                          chmod 600 dkim_private.pem
                        </code>
                        . Never share this file.
                      </p>
                    </div>
                  </Alert>
                </div>
              </Card>

              {/* Method 2: ESP Dashboard */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Using Your ESP Dashboard
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Easiest method. Most email providers generate DKIM keys
                      automatically.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="border-border rounded-lg border p-3">
                    <div className="mb-1 text-sm font-medium">
                      Google Workspace
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Admin Console → Apps → Google Workspace → Gmail →
                      Authenticate Email → Generate New Record
                    </p>
                  </div>

                  <div className="border-border rounded-lg border p-3">
                    <div className="mb-1 text-sm font-medium">
                      Microsoft 365
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Exchange Admin Center → Mail Flow → DKIM → Enable for your
                      domain
                    </p>
                  </div>

                  <div className="border-border rounded-lg border p-3">
                    <div className="mb-1 text-sm font-medium">
                      SendGrid/Mailchimp/Postmark
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Domain Authentication settings → Generate DKIM keys
                      automatically
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                  <p className="text-sm">
                    <strong className="text-green-600">Benefit:</strong> ESP
                    manages key rotation and storage automatically.
                  </p>
                </div>
              </Card>

              {/* Method 3: Online Tools */}
              <Card className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">
                      Using Online DKIM Generators
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Quick option for testing. Use with caution for production.
                    </p>
                  </div>
                </div>

                <Alert variant="warning">
                  <AlertTriangle className="h-4 w-4" />
                  <div>
                    <div className="font-semibold">Security Warning</div>
                    <p className="mb-0 text-sm">
                      Online tools see your private key during generation. Only
                      use reputable sources or generate keys locally for
                      production systems.
                    </p>
                  </div>
                </Alert>
              </Card>
            </div>
          </section>

          {/* Publishing to DNS */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Publishing DKIM Keys to DNS
            </h2>

            <p className="text-muted-foreground mb-6">
              After generating keys, publish the public key as a DNS TXT record.
            </p>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">DNS Record Format:</h3>

              <div className="space-y-4">
                <div>
                  <div className="mb-2 text-sm font-medium">
                    Record Name (Hostname):
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <code className="text-primary text-sm">
                      [selector]._domainkey.yourdomain.com
                    </code>
                  </div>
                  <p className="text-muted-foreground mt-2 text-xs">
                    Example:{" "}
                    <code className="text-primary">
                      default._domainkey.example.com
                    </code>
                  </p>
                </div>

                <div>
                  <div className="mb-2 text-sm font-medium">Record Type:</div>
                  <div className="bg-muted rounded-lg p-3">
                    <code className="text-primary text-sm">TXT</code>
                  </div>
                </div>

                <div>
                  <div className="mb-2 text-sm font-medium">Record Value:</div>
                  <div className="bg-muted rounded-lg p-3">
                    <code className="block text-xs break-all">
                      v=DKIM1; k=rsa;
                      p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...
                    </code>
                  </div>
                  <p className="text-muted-foreground mt-2 text-xs">
                    • v=DKIM1 (version)
                    <br />
                    • k=rsa (key type)
                    <br />• p=... (public key in base64)
                  </p>
                </div>
              </div>
            </Card>

            <Alert variant="info" className="mb-6">
              <Terminal className="h-4 w-4" />
              <div>
                <div className="font-semibold">Verify DNS Propagation</div>
                <p className="mb-2 text-sm">
                  Check your DKIM record is published correctly:
                </p>
                <div className="bg-muted rounded p-2">
                  <code className="text-xs">
                    nslookup -type=txt default._domainkey.yourdomain.com
                  </code>
                </div>
              </div>
            </Alert>
          </section>

          {/* Testing DKIM */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Testing Your DKIM Keys</h2>

            <p className="text-muted-foreground mb-6">
              After publishing, verify DKIM is working correctly.
            </p>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Verification Checklist:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <div className="text-sm">
                    <strong>Check DNS record</strong>
                    <p className="text-muted-foreground text-xs">
                      Use DKIM checker tool or command line to verify public key
                      is published
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <div className="text-sm">
                    <strong>Send test email</strong>
                    <p className="text-muted-foreground text-xs">
                      Send to Gmail, check email headers for DKIM=pass
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <div className="text-sm">
                    <strong>Review DMARC reports</strong>
                    <p className="text-muted-foreground text-xs">
                      Monitor DKIM alignment in aggregate reports
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex gap-4">
              <Link href="/tools/dkim-record-checker">
                <Button>
                  <Shield className="mr-2 h-4 w-4" />
                  Check DKIM Record
                </Button>
              </Link>
              <Link href="/tools/dmarc-xml-converter">
                <Button variant="outline">View DMARC Reports</Button>
              </Link>
            </div>
          </section>

          {/* Key Rotation */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              DKIM Key Rotation Best Practices
            </h2>

            <p className="text-muted-foreground mb-6">
              Rotate DKIM keys periodically to maintain security.
            </p>

            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Recommended Schedule:
              </h3>
              <div className="space-y-4">
                <div className="border-border rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Every 6-12 months
                    </span>
                    <span className="rounded-full bg-green-600 px-2 py-1 text-xs text-white">
                      Standard
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Regular rotation for good security hygiene
                  </p>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Immediately</span>
                    <span className="rounded-full bg-red-600 px-2 py-1 text-xs text-white">
                      If Compromised
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Rotate if private key is exposed or server is breached
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Related Guides */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Related Guides</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/guides/what-is-dkim" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    What is DKIM?
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Understand DKIM basics
                  </p>
                  <div className="text-primary flex items-center gap-1 text-sm">
                    <span>Read guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>

              <Link href="/guides/dkim-selector-strategy" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    DKIM Selector Strategy
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Managing multiple selectors
                  </p>
                  <div className="text-primary flex items-center gap-1 text-sm">
                    <span>Read guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>

              <Link href="/guides/dkim-troubleshooting" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    DKIM Troubleshooting
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Fix common DKIM issues
                  </p>
                  <div className="text-primary flex items-center gap-1 text-sm">
                    <span>Read guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <Card className="bg-primary/5 border-primary/20 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">
                Verify Your DKIM Setup
              </h2>
              <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                Use our free DKIM checker to verify your keys are published
                correctly, or let our platform manage DKIM across all your
                domains.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/tools/dkim-record-checker">
                  <Button size="lg" className="min-w-[200px]">
                    <Key className="mr-2 h-4 w-4" />
                    Check DKIM Keys
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="outline" size="lg" className="min-w-[200px]">
                    See Platform Demo
                  </Button>
                </Link>
              </div>
            </Card>
          </section>

          {/* Free Tools */}
          <section>
            <h2 className="mb-6 text-3xl font-bold">Free DKIM Tools</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/tools/dkim-record-checker" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <Shield className="text-primary mb-3 h-6 w-6" />
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    DKIM Record Checker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Verify DKIM signatures
                  </p>
                </Card>
              </Link>

              <Link href="/tools/dkim-record-generator" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <Code className="text-primary mb-3 h-6 w-6" />
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    DKIM Key Generator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Generate DKIM key pairs
                  </p>
                </Card>
              </Link>

              <Link href="/tools/dmarc-xml-converter" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <FileText className="text-primary mb-3 h-6 w-6" />
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    DMARC XML Converter
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Monitor DKIM pass rates
                  </p>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
