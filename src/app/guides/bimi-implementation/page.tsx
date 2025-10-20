import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Users,
  Image,
  Shield,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = {
  title:
    "BIMI Implementation: Brand Indicators for Message Identification | 2025",
  description:
    "Implement BIMI to display your logo in Gmail and Outlook inboxes. Learn VMC requirements, SVG logo specs, and how BIMI improves email open rates by 10-20%.",
  keywords: [
    "BIMI implementation",
    "Brand Indicators for Message Identification",
    "BIMI logo email",
    "VMC certificate",
    "email logo Gmail",
    "BIMI requirements",
    "brand logo inbox",
    "BIMI setup guide",
  ],
  openGraph: {
    title: "BIMI Implementation: Brand Indicators for Message Identification",
    description:
      "Display your brand logo in Gmail and Outlook with BIMI. Complete implementation guide with VMC requirements and ROI analysis.",
    type: "article",
    url: "https://trustyourinbox.com/guides/bimi-implementation",
  },
};

export default function BIMIImplementationPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <section className="border-border border-b py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground flex items-center transition-colors"
            >
              <Home className="h-4 w-4" />
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/guides"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Guides
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">
              BIMI Implementation
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <Users className="text-primary mr-2 h-4 w-4" />
              <span className="text-primary">Advanced Topics</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              BIMI Implementation
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Brand Indicators for Message Identification (BIMI) displays your
              company logo next to authenticated emails in Gmail and Outlook.
              Studies show BIMI increases open rates by 10-20% and builds brand
              trust.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-muted-foreground">
                  Updated January 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* What is BIMI */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Image className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">What is BIMI?</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                BIMI lets you display your brand logo next to authenticated
                emails in supported email clients. When implemented correctly,
                Gmail and Outlook show your logo in the inbox, increasing brand
                visibility and trust.
              </p>
              <div className="bg-muted/50 mb-6 rounded-lg p-6">
                <h3 className="mb-3 text-lg font-semibold">
                  How It Looks to Recipients:
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Gmail:</strong> Your logo appears as a circular
                    avatar next to the sender name in the inbox list
                  </p>
                  <p>
                    <strong>Outlook/Yahoo:</strong> Logo displays next to sender
                    in inbox and when email is opened
                  </p>
                  <p>
                    <strong>Apple Mail:</strong> No BIMI support yet (as of Jan
                    2025)
                  </p>
                </div>
              </div>
              <Alert variant="info" className="mb-6">
                <TrendingUp className="h-4 w-4" />
                <div>
                  <div className="font-semibold">Impact on Open Rates</div>
                  <div className="text-sm">
                    Industry studies show BIMI increases email open rates by
                    10-20% on average. Recipients are more likely to open emails
                    from brands they visually recognize.
                  </div>
                </div>
              </Alert>
            </Card>

            {/* Requirements */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">BIMI Requirements</h2>
              </div>
              <div className="space-y-6">
                <div className="border-primary/20 bg-primary/5 rounded-lg p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle className="text-primary h-6 w-6" />
                    <h3 className="text-xl font-semibold">
                      1. DMARC Policy (p=quarantine or p=reject)
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    You MUST have DMARC enforcement enabled. p=none is not
                    sufficient for BIMI.
                  </p>
                  <div className="bg-background rounded-md p-4 font-mono text-xs">
                    <p className="text-success font-semibold">
                      ✅ v=DMARC1; p=reject; (works)
                    </p>
                    <p className="text-success font-semibold">
                      ✅ v=DMARC1; p=quarantine; (works)
                    </p>
                    <p className="text-destructive mt-2 font-semibold">
                      ❌ v=DMARC1; p=none; (does NOT work)
                    </p>
                  </div>
                </div>

                <div className="border-primary/20 bg-primary/5 rounded-lg p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle className="text-primary h-6 w-6" />
                    <h3 className="text-xl font-semibold">
                      2. VMC (Verified Mark Certificate)
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    VMC is a digital certificate proving you own your logo
                    trademark. Required by Gmail (not required by Yahoo/Outlook
                    but recommended).
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Cost:</strong> $1,000 - $1,500/year
                    </p>
                    <p className="text-sm">
                      <strong>Providers:</strong> DigiCert, Entrust
                    </p>
                    <p className="text-sm">
                      <strong>Requirement:</strong> Registered trademark for
                      your logo
                    </p>
                  </div>
                  <Alert variant="warning" className="mt-4">
                    <DollarSign className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Trademark Required</div>
                      <div className="text-sm">
                        You must have a registered trademark (USPTO in US, EUIPO
                        in EU, etc.) for your logo before purchasing VMC. This
                        can take 6-12 months if you don&apos;t have one yet.
                      </div>
                    </div>
                  </Alert>
                </div>

                <div className="border-primary/20 bg-primary/5 rounded-lg p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle className="text-primary h-6 w-6" />
                    <h3 className="text-xl font-semibold">
                      3. SVG Logo File (Tiny PS format)
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Your logo must be in SVG Tiny Portable/Secure format with
                    specific requirements:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2 text-sm">
                    <li>
                      <strong>Format:</strong> SVG Tiny PS (Portable/Secure)
                      version 1.2
                    </li>
                    <li>
                      <strong>Size:</strong> Square aspect ratio (1:1
                      recommended)
                    </li>
                    <li>
                      <strong>File size:</strong> Under 32 KB
                    </li>
                    <li>
                      <strong>Colors:</strong> Solid colors only (no gradients,
                      transparency, or animations)
                    </li>
                    <li>
                      <strong>External references:</strong> None allowed (all
                      embedded)
                    </li>
                    <li>
                      <strong>Scripts:</strong> No JavaScript
                    </li>
                  </ul>
                </div>

                <div className="border-primary/20 bg-primary/5 rounded-lg p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle className="text-primary h-6 w-6" />
                    <h3 className="text-xl font-semibold">
                      4. BIMI DNS Record
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Publish a TXT record at default._bimi.yourdomain.com:
                  </p>
                  <div className="bg-background rounded-md p-4 font-mono text-xs">
                    <p>default._bimi.yourdomain.com TXT</p>
                    <p>&quot;v=BIMI1; l=https://yourdomain.com/logo.svg;</p>
                    <p>a=https://yourdomain.com/vmc.pem&quot;</p>
                  </div>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Where: l= is logo URL, a= is VMC certificate URL
                  </p>
                </div>
              </div>
            </Card>

            {/* Implementation Steps */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Step-by-Step Implementation
              </h2>
              <div className="space-y-4">
                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">
                      Ensure DMARC p=quarantine or p=reject
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    BIMI will not work without enforced DMARC policy. Complete
                    your DMARC rollout to p=quarantine or p=reject before
                    starting BIMI.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">
                      Register Logo Trademark (if needed)
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    File trademark application with USPTO (US) or equivalent:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-1 text-sm">
                    <li>
                      Cost: $250-$400 filing fee + attorney fees ($500-$2,000)
                    </li>
                    <li>Timeline: 6-12 months for approval</li>
                    <li>Class: Typically Class 35 (business services)</li>
                  </ul>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">
                      Create SVG Tiny PS Logo
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Convert your logo to SVG Tiny PS format:
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Option 1:</strong> Use online BIMI SVG converters
                      (bimigroup.org/svg-converter)
                    </p>
                    <p className="text-sm">
                      <strong>Option 2:</strong> Hire designer familiar with
                      BIMI specs
                    </p>
                    <p className="text-sm">
                      <strong>Validation:</strong> Use BIMI Inspector to verify
                      SVG meets requirements
                    </p>
                  </div>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      4
                    </div>
                    <h3 className="text-lg font-semibold">
                      Purchase VMC Certificate
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Buy from authorized VMC providers:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-1 text-sm">
                    <li>
                      <strong>DigiCert:</strong> $1,499/year (most popular)
                    </li>
                    <li>
                      <strong>Entrust:</strong> $1,200/year
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Required documents: Trademark certificate, business
                    registration, logo files
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      5
                    </div>
                    <h3 className="text-lg font-semibold">
                      Host SVG and VMC Files
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Upload files to publicly accessible HTTPS URLs:
                  </p>
                  <div className="bg-background rounded-md p-4 font-mono text-xs">
                    <p>https://yourdomain.com/bimi/logo.svg</p>
                    <p>https://yourdomain.com/bimi/vmc.pem</p>
                  </div>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Requirements: Valid SSL certificate, public access (no
                    auth), correct MIME types (image/svg+xml,
                    application/x-pem-file)
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      6
                    </div>
                    <h3 className="text-lg font-semibold">
                      Publish BIMI DNS Record
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Add TXT record to DNS:
                  </p>
                  <div className="bg-background rounded-md p-4 font-mono text-xs">
                    <p>Name: default._bimi.yourdomain.com</p>
                    <p>Type: TXT</p>
                    <p>Value: &quot;v=BIMI1;</p>
                    <p>l=https://yourdomain.com/bimi/logo.svg;</p>
                    <p>a=https://yourdomain.com/bimi/vmc.pem&quot;</p>
                  </div>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      7
                    </div>
                    <h3 className="text-lg font-semibold">
                      Wait for Propagation (7-14 days)
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Gmail and other providers need time to crawl your BIMI
                    record, fetch VMC, validate logo. Allow 7-14 days before
                    logo starts appearing in inboxes.
                  </p>
                </Card>

                <Card className="border-primary/20 bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                      8
                    </div>
                    <h3 className="text-lg font-semibold">Test & Verify</h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Send test emails to Gmail and check if logo appears:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-1 text-sm">
                    <li>Use BIMI Inspector (bimigroup.org/inspector)</li>
                    <li>Send from authenticated domain to Gmail address</li>
                    <li>Check inbox list view for logo avatar</li>
                    <li>Monitor over 2-3 weeks as Gmail validates</li>
                  </ul>
                </Card>
              </div>
            </Card>

            {/* Cost Analysis */}
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <DollarSign className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Total Cost Analysis</h2>
              </div>
              <div className="space-y-4">
                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">One-Time Costs</h3>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>
                      • Trademark filing: $250-$2,500 (if not registered yet)
                    </li>
                    <li>• SVG logo creation: $0-$500 (depends on designer)</li>
                    <li>
                      • Initial setup: $0 (DIY) or $500-$1,000 (consultant)
                    </li>
                  </ul>
                  <p className="mt-3 text-sm">
                    <strong>Total one-time: $250-$4,000</strong>
                  </p>
                </div>

                <div className="border-border rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">Annual Recurring</h3>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• VMC certificate renewal: $1,200-$1,500/year</li>
                    <li>• Trademark maintenance: $0 (first 5 years)</li>
                  </ul>
                  <p className="mt-3 text-sm">
                    <strong>Total annual: $1,200-$1,500/year</strong>
                  </p>
                </div>

                <Alert variant="info">
                  <TrendingUp className="h-4 w-4" />
                  <div>
                    <div className="font-semibold">ROI Calculation</div>
                    <div className="text-sm">
                      If BIMI increases open rates by 15% on 1M marketing emails
                      with $0.10 value per open: 150,000 additional opens ×
                      $0.10 = $15,000 annual value. VMC cost: $1,500. ROI: 10x
                    </div>
                  </div>
                </Alert>
              </div>
            </Card>

            {/* Common Issues */}
            <Card className="p-8">
              <h2 className="mb-6 text-3xl font-bold">
                Common Implementation Issues
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-warning mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Logo not appearing after 2 weeks
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Check: DMARC policy is p=quarantine/reject, VMC is valid,
                      SVG meets Tiny PS specs, DNS record is correct, files are
                      publicly accessible over HTTPS
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-warning mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">SVG file rejected</p>
                    <p className="text-muted-foreground text-sm">
                      Common causes: Gradients, transparency, animations,
                      external fonts, JavaScript. Use BIMI Inspector to validate
                      SVG compliance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-warning mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">VMC validation fails</p>
                    <p className="text-muted-foreground text-sm">
                      Verify: Trademark registered, VMC matches logo in SVG, VMC
                      not expired, certificate chain is complete
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Related Guides */}
            <Card className="bg-secondary/30 p-8">
              <h2 className="mb-6 text-2xl font-bold">Related Guides</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/guides/moving-to-p-reject-safely"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    Moving to p=reject
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Required for BIMI
                  </p>
                </Link>
                <Link
                  href="/guides/dmarc-for-email-marketing"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    DMARC for Email Marketing
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    BIMI boosts open rates
                  </p>
                </Link>
                <Link
                  href="/guides/what-is-dmarc"
                  className="border-border bg-background hover:border-primary/30 group rounded-lg border p-4 transition-all hover:shadow-md"
                >
                  <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                    What is DMARC?
                  </h3>
                  <p className="text-muted-foreground text-sm">DMARC basics</p>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-border to-secondary/30 border-t bg-gradient-to-b from-transparent py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              BIMI Implementation Service
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              TrustYourInbox helps you implement BIMI including trademark
              guidance, SVG creation, VMC purchase assistance, and validation.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Request BIMI Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="bg-secondary/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Free BIMI Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/tools/dmarc-analyzer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Shield className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  DMARC Analyzer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Check if p=reject
                </p>
              </Link>
              <Link
                href="https://bimigroup.org/inspector"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <Image className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  BIMI Inspector
                </h3>
                <p className="text-muted-foreground text-sm">
                  Validate BIMI record
                </p>
              </Link>
              <Link
                href="https://bimigroup.org/svg-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background hover:border-primary/30 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <TrendingUp className="text-primary mb-3 h-8 w-8" />
                <h3 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                  SVG Converter
                </h3>
                <p className="text-muted-foreground text-sm">
                  Create BIMI-compliant SVG
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
