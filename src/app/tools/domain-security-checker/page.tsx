"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ui/ToolLayout";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaExclamationTriangle,
  FaLock,
  FaEnvelope,
  FaServer,
} from "react-icons/fa";
import {
  Shield,
  Mail,
  Lock,
  Database,
  AlertTriangle,
  XCircle,
  Info,
  Key,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Progress } from "@/components/ui/Progress";
import { Badge } from "@/components/ui/Badge";
import { CardHeader, CardContent, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import Link from "next/link";

interface SecurityCheck {
  name: string;
  status: "pass" | "fail" | "warning" | "info";
  description: string;
  recommendation: string;
  details?: string;
}

interface SecurityCategory {
  name: string;
  icon: React.ReactNode;
  checks: SecurityCheck[];
}

export default function DomainSecurityCheckerPage() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<SecurityCategory[]>([]);

  async function handleCheck() {
    setError(null);
    setLoading(true);
    // TODO: Replace with real security checks
    setTimeout(() => {
      setResults([
        {
          name: "Email Authentication",
          icon: <FaEnvelope className="text-primary h-5 w-5" />,
          checks: [
            {
              name: "DMARC",
              status: "pass",
              description: "DMARC policy is properly configured",
              recommendation: "No action needed",
              details: "v=DMARC1; p=reject; rua=mailto:dmarc@example.com",
            },
            {
              name: "SPF",
              status: "warning",
              description: "SPF record found but could be improved",
              recommendation: "Consider adding more specific IP ranges",
              details: "v=spf1 include:_spf.google.com ~all",
            },
            {
              name: "DKIM",
              status: "pass",
              description: "DKIM is properly configured",
              recommendation: "No action needed",
            },
          ],
        },
        {
          name: "Transport Security",
          icon: <FaLock className="text-primary h-5 w-5" />,
          checks: [
            {
              name: "MTA-STS",
              status: "fail",
              description: "MTA-STS not configured",
              recommendation: "Implement MTA-STS for secure email transport",
              details: "Missing _mta-sts TXT record",
            },
            {
              name: "TLS-RPT",
              status: "fail",
              description: "TLS-RPT not configured",
              recommendation: "Add TLS-RPT for monitoring TLS issues",
            },
          ],
        },
        {
          name: "DNS Security",
          icon: <FaServer className="text-primary h-5 w-5" />,
          checks: [
            {
              name: "DNSSEC",
              status: "info",
              description: "DNSSEC not implemented",
              recommendation:
                "Consider implementing DNSSEC for enhanced security",
            },
            {
              name: "FCrDNS",
              status: "pass",
              description:
                "Forward Confirmed Reverse DNS is properly configured",
              recommendation: "No action needed",
            },
          ],
        },
      ]);
      setLoading(false);
    }, 1500);
  }

  // Calculate overall security score
  const totalChecks = results.reduce((acc, cat) => acc + cat.checks.length, 0);
  const passedChecks = results.reduce(
    (acc, cat) =>
      acc + cat.checks.filter((check) => check.status === "pass").length,
    0
  );
  const securityScore = totalChecks
    ? Math.round((passedChecks / totalChecks) * 100)
    : 0;

  // Helper for dynamic progress bar color
  function getProgressColor(score: number) {
    if (score < 50) return "bg-destructive";
    if (score < 80) return "bg-warning";
    return "bg-success";
  }

  return (
    <ToolLayout
      title="Domain Security Checker"
      description="TrustYourInbox's comprehensive security analysis for your domain. Instantly check DMARC, SPF, DKIM, MTA-STS, and more—get actionable, expert recommendations."
      sidebarContent={
        <>
          <h4 className="text-foreground mb-2 font-semibold">
            Why Domain Security?
          </h4>
          <p className="text-muted-foreground mb-3 text-sm">
            TrustYourInbox helps you protect your brand and users from phishing
            and spoofing. Secure your domain with industry-leading best
            practices.
          </p>
          <div className="mb-3">
            <span className="bg-primary/10 text-primary mb-1 inline-block rounded px-2 py-0.5 text-xs font-semibold">
              Key Protections
            </span>
            <ul className="text-muted-foreground list-disc pl-5 text-sm">
              <li>DMARC, SPF, DKIM authentication</li>
              <li>MTA-STS & TLS-RPT for secure delivery</li>
              <li>DNSSEC & FCrDNS for DNS integrity</li>
            </ul>
          </div>
          <h4 className="text-foreground mb-2 font-semibold">Resources</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <a
                href="/guides/email-security"
                className="text-primary underline"
              >
                Email Security Best Practices
              </a>
            </li>
            <li>
              <a
                href="/tools/dmarc-analyzer"
                className="text-primary underline"
              >
                DMARC Analyzer
              </a>
            </li>
          </ul>
        </>
      }
    >
      <Card className="w-full border-0 shadow-lg">
        <div className="p-6">
          <div className="mb-6 flex items-center gap-2">
            <Shield className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">Domain Security Checker</h2>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCheck();
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label
                htmlFor="domain"
                className="mb-2 block text-sm font-medium"
              >
                Domain Name
              </label>
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Globe className="text-muted-foreground h-5 w-5" />
                </div>
                <Input
                  id="domain"
                  type="text"
                  placeholder="yourdomain.com"
                  className="focus:border-primary focus:ring-ring border-border h-11 pl-10"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  required
                  pattern="^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                size="lg"
                className="to-accent-hover from-primary min-w-[120px] gap-2 bg-gradient-to-r text-white hover:opacity-90"
                disabled={loading || !domain}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Checking...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Check Now <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </Card>

      {results.length > 0 && (
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <Card className="border-border overflow-hidden border shadow-sm">
            <CardHeader className="to-accent-hover from-primary bg-gradient-to-r p-6 text-white">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-white/20 p-2">
                    <Shield className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="mb-1 text-base font-semibold">
                      Security Score
                    </h2>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">
                        {securityScore}%
                      </span>
                      <Badge
                        variant="outline"
                        className={`border-0 px-2 py-0.5 text-xs ${securityScore < 50 ? "bg-destructive/90 text-white" : securityScore < 80 ? "bg-warning/90 text-white" : "bg-success/90 text-white"}`}
                      >
                        {securityScore < 50
                          ? "Critical"
                          : securityScore < 80
                            ? "Needs Improvement"
                            : "Excellent"}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-sm">
                    {passedChecks} of {totalChecks} security checks passed
                  </div>
                  <Progress
                    value={securityScore}
                    className={`h-2 w-48 ${getProgressColor(securityScore)}`}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="bg-muted p-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Email Authentication */}
                <div className="border-border bg-card rounded-lg border shadow-sm">
                  <div className="border-border bg-muted flex items-center gap-2 rounded-t-lg border-b px-4 py-2">
                    <Mail className="text-primary h-4 w-4" />
                    <span className="text-sm font-semibold">
                      Email Authentication
                    </span>
                  </div>
                  <div className="space-y-3 p-3">
                    {/* DMARC */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-medium">DMARC</div>
                        {getStatusBadge(results[0].checks[0].status)}
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {results[0].checks[0].description}
                      </p>
                      {results[0].checks[0].details && (
                        <div className="border-border bg-muted rounded border p-1 font-mono text-xs">
                          {results[0].checks[0].details}
                        </div>
                      )}
                      <p className="text-primary text-xs">
                        Recommendation: {results[0].checks[0].recommendation}
                      </p>
                    </div>
                    <Separator />
                    {/* SPF */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-medium">SPF</div>
                        {getStatusBadge(results[0].checks[1].status)}
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {results[0].checks[1].description}
                      </p>
                      {results[0].checks[1].details && (
                        <div className="border-border bg-muted rounded border p-1 font-mono text-xs">
                          {results[0].checks[1].details}
                        </div>
                      )}
                      <p className="text-primary text-xs">
                        Recommendation: {results[0].checks[1].recommendation}
                      </p>
                    </div>
                    <Separator />
                    {/* DKIM */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-medium">DKIM</div>
                        {getStatusBadge(results[0].checks[2].status)}
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {results[0].checks[2].description}
                      </p>
                      <p className="text-primary text-xs">
                        Recommendation: {results[0].checks[2].recommendation}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Transport Security */}
                <div className="border-border bg-card rounded-lg border shadow-sm">
                  <div className="border-border bg-muted flex items-center gap-2 rounded-t-lg border-b px-4 py-2">
                    <Lock className="text-primary h-4 w-4" />
                    <span className="text-sm font-semibold">
                      Transport Security
                    </span>
                  </div>
                  <div className="space-y-3 p-3">
                    {/* MTA-STS */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-medium">MTA-STS</div>
                        {getStatusBadge(results[1].checks[0].status)}
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {results[1].checks[0].description}
                      </p>
                      {results[1].checks[0].details && (
                        <div className="border-border bg-muted rounded border p-1 font-mono text-xs">
                          {results[1].checks[0].details}
                        </div>
                      )}
                      <p className="text-primary text-xs">
                        Recommendation: {results[1].checks[0].recommendation}
                      </p>
                    </div>
                    <Separator />
                    {/* TLS-RPT */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-medium">TLS-RPT</div>
                        {getStatusBadge(results[1].checks[1].status)}
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {results[1].checks[1].description}
                      </p>
                      <p className="text-primary text-xs">
                        Recommendation: {results[1].checks[1].recommendation}
                      </p>
                    </div>
                  </div>
                </div>
                {/* DNS Security */}
                <div className="border-border bg-card rounded-lg border shadow-sm">
                  <div className="border-border bg-muted flex items-center gap-2 rounded-t-lg border-b px-4 py-2">
                    <Database className="text-primary h-4 w-4" />
                    <span className="text-sm font-semibold">DNS Security</span>
                  </div>
                  <div className="space-y-3 p-3">
                    {/* DNSSEC */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-medium">DNSSEC</div>
                        {getStatusBadge(results[2].checks[0].status)}
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {results[2].checks[0].description}
                      </p>
                      <p className="text-primary text-xs">
                        Recommendation: {results[2].checks[0].recommendation}
                      </p>
                    </div>
                    <Separator />
                    {/* FCrDNS */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-medium">FCrDNS</div>
                        {getStatusBadge(results[2].checks[1].status)}
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {results[2].checks[1].description}
                      </p>
                      <p className="text-primary text-xs">
                        Recommendation: {results[2].checks[1].recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Critical Issues Section */}
              <Card className="border-destructive/20 bg-destructive/10 mt-6 shadow-none">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-destructive/20 rounded-full p-2">
                      <AlertTriangle className="text-destructive h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-destructive mb-1 text-base font-semibold">
                        Critical Issues Detected:
                      </h3>
                      <ul className="text-destructive list-inside list-disc space-y-1 text-xs">
                        {results[1].checks
                          .filter((c) => c.status === "fail")
                          .map((check, idx) => (
                            <li key={idx}>
                              <span className="font-medium">{check.name}:</span>{" "}
                              {check.recommendation}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Recommendations Section */}
              <div className="mt-6">
                <TooltipProvider>
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-base font-semibold">
                      Security Improvement Tips
                    </h3>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="text-muted-foreground h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs text-xs">
                          These recommendations will help improve your domain
                          security score
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {/* Example recommendations, you can make this dynamic if you wish */}
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <XCircle className="text-destructive h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium">Configure MTA-STS</h4>
                      <p className="text-muted-foreground text-xs">
                        MTA-STS helps ensure that emails are only delivered over
                        secure connections.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <XCircle className="text-destructive h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium">Add TLS-RPT</h4>
                      <p className="text-muted-foreground text-xs">
                        TLS-RPT allows you to receive reports about TLS
                        connectivity issues.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium">
                        Improve SPF Record
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        Add more specific IP ranges to your SPF record for
                        better security.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <Info className="text-primary h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium">Implement DNSSEC</h4>
                      <p className="text-muted-foreground text-xs">
                        DNSSEC adds an additional layer of security to your DNS
                        records.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="mt-8 mb-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold tracking-tight">Related Tools</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            More email authentication tools
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Link
            href="/tools/dmarc-analyzer"
            className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
                <Shield className="text-primary h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                  DMARC Analyzer
                </h3>
                <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                  Analyze DMARC configuration and get detailed reports
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/tools/spf-surveyor"
            className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
                <Mail className="text-primary h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                  SPF Surveyor
                </h3>
                <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                  Validate and troubleshoot your SPF records
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/tools/dkim-validator"
            className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
                <Key className="text-primary h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                  DKIM Validator
                </h3>
                <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                  Verify your DKIM signatures and configuration
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </ToolLayout>
  );
}

// Helper for status badge
function getStatusBadge(status: string) {
  switch (status) {
    case "pass":
      return (
        <Badge className="bg-success/10 text-success hover:bg-success/10">
          Pass
        </Badge>
      );
    case "fail":
      return (
        <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/10">
          Fail
        </Badge>
      );
    case "warning":
      return (
        <Badge className="bg-warning/10 text-warning hover:bg-warning/10">
          Warning
        </Badge>
      );
    case "info":
      return (
        <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
          Info
        </Badge>
      );
    default:
      return null;
  }
}
