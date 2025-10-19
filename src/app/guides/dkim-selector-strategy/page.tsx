import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Alert } from "@/components/ui/Alert";
import {
  Tag,
  ArrowRight,
  Shuffle,
  CheckCircle,
  AlertTriangle,
  Code,
  FileText,
  Key,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DKIM Selector Strategy: Managing Multiple Selectors | Guide 2025",
  description:
    "Master DKIM selectors for flexible email authentication. Learn selector naming, key rotation strategies, and how to manage multiple DKIM keys per domain.",
  keywords: [
    "DKIM selector",
    "DKIM selector strategy",
    "multiple DKIM keys",
    "DKIM key rotation",
    "DKIM selector naming",
    "DKIM best practices",
  ],
  openGraph: {
    title: "DKIM Selector Strategy: Managing Multiple Selectors",
    description:
      "Master DKIM selectors for flexible email authentication. Learn selector naming, key rotation strategies, and managing multiple DKIM keys.",
    type: "article",
    url: "https://trustyourinbox.com/guides/dkim-selector-strategy",
  },
};

export default function DkimSelectorStrategy() {
  return (
    <div className="bg-background min-h-screen">
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
            <span className="text-foreground">DKIM Selector Strategy</span>
          </div>
        </div>
      </div>

      <div className="border-border bg-muted/30 border-b">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
            DKIM Setup
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            DKIM Selector Strategy
          </h1>
          <p className="text-muted-foreground mb-6 text-xl">
            Use DKIM selectors to manage multiple keys, rotate credentials
            safely, and organize email authentication across services.
          </p>
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>6 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              What Are DKIM Selectors?
            </h2>
            <p className="text-muted-foreground mb-6">
              A DKIM selector is a label that identifies which DKIM key to use
              for verification. It allows you to have multiple DKIM keys per
              domain.
            </p>
            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                DNS Record Structure:
              </h3>
              <div className="bg-muted mb-4 rounded-lg p-3">
                <code className="text-primary block text-sm">
                  [selector]._domainkey.yourdomain.com
                </code>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex gap-3">
                  <div className="text-muted-foreground w-32 shrink-0">
                    Example 1:
                  </div>
                  <code className="text-primary">
                    default._domainkey.example.com
                  </code>
                </div>
                <div className="flex gap-3">
                  <div className="text-muted-foreground w-32 shrink-0">
                    Example 2:
                  </div>
                  <code className="text-primary">
                    google._domainkey.example.com
                  </code>
                </div>
                <div className="flex gap-3">
                  <div className="text-muted-foreground w-32 shrink-0">
                    Example 3:
                  </div>
                  <code className="text-primary">
                    2025-01._domainkey.example.com
                  </code>
                </div>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Why Use Multiple Selectors?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Shuffle className="text-primary h-5 w-5" />
                  <h3 className="text-lg font-semibold">Key Rotation</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Switch between keys smoothly without downtime during rotation.
                </p>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Tag className="text-primary h-5 w-5" />
                  <h3 className="text-lg font-semibold">Service Separation</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Different keys for Google Workspace vs SendGrid vs Salesforce.
                </p>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <h3 className="text-lg font-semibold">Testing</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Test new keys before switching production traffic.
                </p>
              </Card>

              <Card className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Code className="text-primary h-5 w-5" />
                  <h3 className="text-lg font-semibold">Environment Split</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Separate keys for staging vs production environments.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Selector Naming Best Practices
            </h2>
            <div className="space-y-4">
              <Card className="border-green-500/50 bg-green-500/5 p-5">
                <h3 className="mb-3 font-semibold">Recommended Patterns:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <div>
                      <strong>Date-based:</strong>{" "}
                      <code className="text-primary">2025-01</code>,{" "}
                      <code className="text-primary">2025-07</code> (rotation
                      tracking)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <div>
                      <strong>Service-based:</strong>{" "}
                      <code className="text-primary">google</code>,{" "}
                      <code className="text-primary">sendgrid</code>,{" "}
                      <code className="text-primary">salesforce</code>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <div>
                      <strong>Version-based:</strong>{" "}
                      <code className="text-primary">v1</code>,{" "}
                      <code className="text-primary">v2</code>,{" "}
                      <code className="text-primary">v3</code>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <div>
                      <strong>Environment:</strong>{" "}
                      <code className="text-primary">prod</code>,{" "}
                      <code className="text-primary">staging</code>
                    </div>
                  </div>
                </div>
              </Card>

              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <div>
                  <div className="font-semibold">Keep Selectors Simple</div>
                  <p className="mb-0 text-sm">
                    Use lowercase letters, numbers, and hyphens only. Avoid
                    special characters. Max 63 characters.
                  </p>
                </div>
              </Alert>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Key Rotation Strategy</h2>
            <p className="text-muted-foreground mb-6">
              Use selectors to rotate DKIM keys without email delivery
              interruption.
            </p>
            <Card className="mb-6 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Zero-Downtime Rotation Process:
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium">
                      Generate new key with new selector
                    </div>
                    <code className="text-primary block text-xs">
                      2025-01._domainkey.example.com
                    </code>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium">
                      Publish new DNS record
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Both old and new keys are now active
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-sm font-bold">3</span>
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium">
                      Update mail server to use new selector
                    </div>
                    <p className="text-muted-foreground text-xs">
                      New emails signed with new key
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-sm font-bold">4</span>
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium">
                      Wait 48 hours
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Allow in-flight emails to be verified
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-sm font-bold">5</span>
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium">
                      Remove old DNS record
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Complete migration to new key
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Related Guides</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/guides/generating-dkim-keys" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    Generating DKIM Keys
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Create secure DKIM keys
                  </p>
                  <div className="text-primary flex items-center gap-1 text-sm">
                    <span>Read guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>

              <Link href="/guides/what-is-dkim" className="group">
                <Card className="hover:border-primary h-full p-5 transition-colors">
                  <h3 className="group-hover:text-primary mb-2 font-semibold">
                    What is DKIM?
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    DKIM fundamentals
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
                    Fix DKIM issues
                  </p>
                  <div className="text-primary flex items-center gap-1 text-sm">
                    <span>Read guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-primary/5 border-primary/20 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">
                Manage DKIM Selectors Easily
              </h2>
              <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                Check your DKIM selectors and keys with our free tool, or let
                our platform handle selector management automatically.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/tools/dkim-record-checker">
                  <Button size="lg" className="min-w-[200px]">
                    <Key className="mr-2 h-4 w-4" />
                    Check DKIM Selectors
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
        </div>
      </div>
    </div>
  );
}
