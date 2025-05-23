"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ui/ToolLayout";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FaShieldAlt, FaCheckCircle, FaTimesCircle, FaInfoCircle, FaExclamationTriangle, FaLock, FaEnvelope, FaServer } from "react-icons/fa";
import { Shield, Mail, Lock, Database, AlertTriangle, XCircle, Info, Key, Globe, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/Progress";
import { Badge } from "@/components/ui/Badge";
import { CardHeader, CardContent, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
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
          icon: <FaEnvelope className="w-5 h-5 text-blue-600" />,
          checks: [
            {
              name: "DMARC",
              status: "pass",
              description: "DMARC policy is properly configured",
              recommendation: "No action needed",
              details: "v=DMARC1; p=reject; rua=mailto:dmarc@example.com"
            },
            {
              name: "SPF",
              status: "warning",
              description: "SPF record found but could be improved",
              recommendation: "Consider adding more specific IP ranges",
              details: "v=spf1 include:_spf.google.com ~all"
            },
            {
              name: "DKIM",
              status: "pass",
              description: "DKIM is properly configured",
              recommendation: "No action needed"
            }
          ]
        },
        {
          name: "Transport Security",
          icon: <FaLock className="w-5 h-5 text-green-600" />,
          checks: [
            {
              name: "MTA-STS",
              status: "fail",
              description: "MTA-STS not configured",
              recommendation: "Implement MTA-STS for secure email transport",
              details: "Missing _mta-sts TXT record"
            },
            {
              name: "TLS-RPT",
              status: "fail",
              description: "TLS-RPT not configured",
              recommendation: "Add TLS-RPT for monitoring TLS issues"
            }
          ]
        },
        {
          name: "DNS Security",
          icon: <FaServer className="w-5 h-5 text-purple-600" />,
          checks: [
            {
              name: "DNSSEC",
              status: "info",
              description: "DNSSEC not implemented",
              recommendation: "Consider implementing DNSSEC for enhanced security"
            },
            {
              name: "FCrDNS",
              status: "pass",
              description: "Forward Confirmed Reverse DNS is properly configured",
              recommendation: "No action needed"
            }
          ]
        }
      ]);
      setLoading(false);
    }, 1500);
  }

  // Calculate overall security score
  const totalChecks = results.reduce((acc, cat) => acc + cat.checks.length, 0);
  const passedChecks = results.reduce((acc, cat) => 
    acc + cat.checks.filter(check => check.status === "pass").length, 0);
  const securityScore = totalChecks ? Math.round((passedChecks / totalChecks) * 100) : 0;

  // Helper for dynamic progress bar color
  function getProgressColor(score: number) {
    if (score < 50) return "bg-red-500";
    if (score < 80) return "bg-amber-400";
    return "bg-green-500";
  }

  return (
    <ToolLayout
      title="Domain Security Checker"
      description="TrustYourInbox's comprehensive security analysis for your domain. Instantly check DMARC, SPF, DKIM, MTA-STS, and more—get actionable, expert recommendations."
      sidebarContent={
        <>
          <h4 className="font-semibold mb-2 text-brand">Why Domain Security?</h4>
          <p className="mb-3 text-sm text-brand-dark">
            TrustYourInbox helps you protect your brand and users from phishing and spoofing. Secure your domain with industry-leading best practices.
          </p>
          <div className="mb-3">
            <span className="inline-block bg-brand/10 text-brand text-xs font-semibold px-2 py-0.5 rounded mb-1">Key Protections</span>
            <ul className="list-disc pl-5 text-sm text-brand-dark">
              <li>DMARC, SPF, DKIM authentication</li>
              <li>MTA-STS & TLS-RPT for secure delivery</li>
              <li>DNSSEC & FCrDNS for DNS integrity</li>
            </ul>
          </div>
          <h4 className="font-semibold mb-2 text-brand">Resources</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <a href="/guides/email-security" className="text-brand underline">
                Email Security Best Practices
              </a>
            </li>
            <li>
              <a href="/tools/dmarc-analyzer" className="text-brand underline">
                DMARC Analyzer
              </a>
            </li>
          </ul>
        </>
      }
    >
      <Card className="w-full border-0 shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Domain Security Checker</h2>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleCheck(); }} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="domain" className="text-sm font-medium">
                Domain Name
              </label>
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Globe className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="domain"
                  type="text"
                  placeholder="yourdomain.com"
                  className="pl-10 h-11 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                  value={domain}
                  onChange={e => setDomain(e.target.value)}
                  required
                  pattern="^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white min-w-[120px]"
                disabled={loading || !domain}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-white"
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
        <div className="container mx-auto py-8 px-4 max-w-5xl">
          <Card className="border border-gray-200 shadow-sm overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Shield className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold mb-1">Security Score</h2>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{securityScore}%</span>
                      <Badge variant="outline" className={`border-0 px-2 py-0.5 text-xs ${securityScore < 50 ? 'bg-red-400 text-white' : securityScore < 80 ? 'bg-amber-400 text-white' : 'bg-green-500 text-white'}`}>
                        {securityScore < 50 ? 'Critical' : securityScore < 80 ? 'Needs Improvement' : 'Excellent'}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-1">
                    {passedChecks} of {totalChecks} security checks passed
                  </div>
                  <Progress value={securityScore} className={`h-2 w-48 ${getProgressColor(securityScore)}`} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 bg-slate-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Email Authentication */}
                <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-b border-gray-100 rounded-t-lg">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-semibold">Email Authentication</span>
                  </div>
                  <div className="p-3 space-y-3">
                    {/* DMARC */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-xs">DMARC</div>
                        {getStatusBadge(results[0].checks[0].status)}
                      </div>
                      <p className="text-xs text-muted-foreground">{results[0].checks[0].description}</p>
                      {results[0].checks[0].details && (
                        <div className="bg-slate-50 p-1 rounded text-xs font-mono border border-gray-100">{results[0].checks[0].details}</div>
                      )}
                      <p className="text-xs text-blue-600">Recommendation: {results[0].checks[0].recommendation}</p>
                    </div>
                    <Separator />
                    {/* SPF */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-xs">SPF</div>
                        {getStatusBadge(results[0].checks[1].status)}
                      </div>
                      <p className="text-xs text-muted-foreground">{results[0].checks[1].description}</p>
                      {results[0].checks[1].details && (
                        <div className="bg-slate-50 p-1 rounded text-xs font-mono border border-gray-100">{results[0].checks[1].details}</div>
                      )}
                      <p className="text-xs text-blue-600">Recommendation: {results[0].checks[1].recommendation}</p>
                    </div>
                    <Separator />
                    {/* DKIM */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-xs">DKIM</div>
                        {getStatusBadge(results[0].checks[2].status)}
                      </div>
                      <p className="text-xs text-muted-foreground">{results[0].checks[2].description}</p>
                      <p className="text-xs text-blue-600">Recommendation: {results[0].checks[2].recommendation}</p>
                    </div>
                  </div>
                </div>
                {/* Transport Security */}
                <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-b border-gray-100 rounded-t-lg">
                    <Lock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-semibold">Transport Security</span>
                  </div>
                  <div className="p-3 space-y-3">
                    {/* MTA-STS */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-xs">MTA-STS</div>
                        {getStatusBadge(results[1].checks[0].status)}
                      </div>
                      <p className="text-xs text-muted-foreground">{results[1].checks[0].description}</p>
                      {results[1].checks[0].details && (
                        <div className="bg-slate-50 p-1 rounded text-xs font-mono border border-gray-100">{results[1].checks[0].details}</div>
                      )}
                      <p className="text-xs text-blue-600">Recommendation: {results[1].checks[0].recommendation}</p>
                    </div>
                    <Separator />
                    {/* TLS-RPT */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-xs">TLS-RPT</div>
                        {getStatusBadge(results[1].checks[1].status)}
                      </div>
                      <p className="text-xs text-muted-foreground">{results[1].checks[1].description}</p>
                      <p className="text-xs text-blue-600">Recommendation: {results[1].checks[1].recommendation}</p>
                    </div>
                  </div>
                </div>
                {/* DNS Security */}
                <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-b border-gray-100 rounded-t-lg">
                    <Database className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-semibold">DNS Security</span>
                  </div>
                  <div className="p-3 space-y-3">
                    {/* DNSSEC */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-xs">DNSSEC</div>
                        {getStatusBadge(results[2].checks[0].status)}
                      </div>
                      <p className="text-xs text-muted-foreground">{results[2].checks[0].description}</p>
                      <p className="text-xs text-blue-600">Recommendation: {results[2].checks[0].recommendation}</p>
                    </div>
                    <Separator />
                    {/* FCrDNS */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-xs">FCrDNS</div>
                        {getStatusBadge(results[2].checks[1].status)}
                      </div>
                      <p className="text-xs text-muted-foreground">{results[2].checks[1].description}</p>
                      <p className="text-xs text-blue-600">Recommendation: {results[2].checks[1].recommendation}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Critical Issues Section */}
              <Card className="mt-6 border-red-100 bg-red-50 shadow-none">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-red-700 mb-1">Critical Issues Detected:</h3>
                      <ul className="list-disc list-inside space-y-1 text-red-700 text-xs">
                        {results[1].checks.filter(c => c.status === 'fail').map((check, idx) => (
                          <li key={idx}><span className="font-medium">{check.name}:</span> {check.recommendation}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Recommendations Section */}
              <div className="mt-6">
                <TooltipProvider>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-base font-semibold">Security Improvement Tips</h3>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs text-xs">These recommendations will help improve your domain security score</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Example recommendations, you can make this dynamic if you wish */}
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <XCircle className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xs">Configure MTA-STS</h4>
                      <p className="text-xs text-muted-foreground">
                        MTA-STS helps ensure that emails are only delivered over secure connections.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <XCircle className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xs">Add TLS-RPT</h4>
                      <p className="text-xs text-muted-foreground">
                        TLS-RPT allows you to receive reports about TLS connectivity issues.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xs">Improve SPF Record</h4>
                      <p className="text-xs text-muted-foreground">
                        Add more specific IP ranges to your SPF record for better security.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <Info className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xs">Implement DNSSEC</h4>
                      <p className="text-xs text-muted-foreground">
                        DNSSEC adds an additional layer of security to your DNS records.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="mt-12 mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Related Tools</h2>
          <p className="text-muted-foreground mt-1">Explore more email authentication tools to secure your domain</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/tools/dmarc-analyzer"
            className="group relative overflow-hidden rounded-lg border p-5 transition-all hover:shadow-md border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full p-2 bg-blue-100 dark:bg-blue-900">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:underline">DMARC Analyzer</h3>
                <p className="text-sm text-muted-foreground mt-1">Analyze your DMARC configuration and get detailed reports</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>

          <Link
            href="/tools/spf-surveyor"
            className="group relative overflow-hidden rounded-lg border p-5 transition-all hover:shadow-md border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full p-2 bg-green-100 dark:bg-green-900">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:underline">SPF Surveyor</h3>
                <p className="text-sm text-muted-foreground mt-1">Validate and troubleshoot your SPF records</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>

          <Link
            href="/tools/dkim-validator"
            className="group relative overflow-hidden rounded-lg border p-5 transition-all hover:shadow-md border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full p-2 bg-purple-100 dark:bg-purple-900">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:underline">DKIM Validator</h3>
                <p className="text-sm text-muted-foreground mt-1">Verify your DKIM signatures and configuration</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
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
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Pass</Badge>;
    case "fail":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Fail</Badge>;
    case "warning":
      return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Warning</Badge>;
    case "info":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Info</Badge>;
    default:
      return null;
  }
} 