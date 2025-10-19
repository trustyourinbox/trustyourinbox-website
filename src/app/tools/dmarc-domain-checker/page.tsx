"use client";

import { useState } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Shield,
  Key,
  Mail,
  Trophy,
  Medal,
  Copy,
  Info,
  Server,
  Globe,
  ArrowRight,
} from "lucide-react";
import { ToolLayout, Button, Input, Card, Alert } from "@/components/ui";
import { DMARCStatus } from "@/components/ui/DMARCStatus";
import FAQSchema from "@/components/FAQSchema";
import Link from "next/link";

export const metadata = {
  title: "Free DMARC Checker: Lookup Domain Records Instantly | TrustYourInbox",
  description:
    "Check your domain's DMARC, SPF, and DKIM records instantly with our free tool. Get comprehensive email security analysis, policy recommendations, and compliance status in seconds.",
  keywords: [
    "DMARC checker",
    "DMARC lookup",
    "check DMARC record",
    "domain email security",
    "SPF DKIM DMARC checker",
    "email authentication checker",
  ],
  openGraph: {
    title:
      "Free DMARC Checker: Lookup Domain Records Instantly | TrustYourInbox",
    description:
      "Check your domain's DMARC, SPF, and DKIM records instantly. Get comprehensive email security analysis and recommendations.",
    type: "website",
  },
};

type DMARCPolicy = "reject" | "quarantine" | "none" | "no-policy";

function getStatusIcon(status: "success" | "warning" | "error") {
  if (status === "success")
    return <CheckCircle2 className="text-success h-6 w-6" />;
  if (status === "warning")
    return <AlertTriangle className="text-warning h-6 w-6" />;
  return <XCircle className="text-destructive h-6 w-6" />;
}

function parseDMARCRecord(record: string) {
  const fields: Record<string, string> = {};
  record.split(";").forEach((part) => {
    const [k, ...rest] = part.trim().split("=");
    if (k && rest.length) fields[k.trim()] = rest.join("=").trim();
  });
  return fields;
}

function parseSPFRecord(record: string) {
  return record.split(" ").map((part) => part.trim());
}

function getGradeAndScore(dmarcFields: Record<string, string>) {
  let score = 0;
  const badges: string[] = [];
  const dots: { color: string; label: string }[] = [];
  let grade = "F";
  let color = "bg-destructive/10 text-destructive border-destructive/20";
  let icon = <XCircle className="text-destructive h-7 w-7" />;
  let message = "High risk: DMARC record is missing or invalid.";
  let dmarcPolicy: "reject" | "quarantine" | "none" | "no-policy" = "no-policy";

  // Check DMARC version
  if (dmarcFields.v === "DMARC1") {
    score += 20;
    badges.push("DMARC1 Version");
    dots.push({ color: "bg-success", label: "Valid DMARC version" });
  } else {
    dots.push({ color: "bg-destructive", label: "Invalid DMARC version" });
  }

  // Check policy
  if (dmarcFields.p) {
    if (dmarcFields.p === "reject") {
      score += 40;
      badges.push("Reject Policy");
      dots.push({ color: "bg-success", label: "Strong policy (reject)" });
      dmarcPolicy = "reject";
    } else if (dmarcFields.p === "quarantine") {
      score += 30;
      badges.push("Quarantine Policy");
      dots.push({ color: "bg-success", label: "Good policy (quarantine)" });
      dmarcPolicy = "quarantine";
    } else if (dmarcFields.p === "none") {
      score += 10;
      badges.push("None Policy");
      dots.push({ color: "bg-warning", label: "Weak policy (none)" });
      dmarcPolicy = "none";
    }
  } else {
    dots.push({ color: "bg-destructive", label: "No policy defined" });
  }

  // Check subdomain policy
  if (dmarcFields.sp) {
    if (dmarcFields.sp === "reject") {
      score += 20;
      badges.push("Subdomain Reject");
      dots.push({ color: "bg-success", label: "Strong subdomain policy" });
    } else if (dmarcFields.sp === "quarantine") {
      score += 15;
      badges.push("Subdomain Quarantine");
      dots.push({ color: "bg-success", label: "Good subdomain policy" });
    }
  }

  // Check reporting
  if (dmarcFields.rua) {
    score += 10;
    badges.push("Aggregate Reports");
    dots.push({ color: "bg-success", label: "Aggregate reporting enabled" });
  }
  if (dmarcFields.ruf) {
    score += 10;
    badges.push("Forensic Reports");
    dots.push({ color: "bg-success", label: "Forensic reporting enabled" });
  }

  // Calculate grade
  if (score >= 90) {
    grade = "A";
    color = "bg-success/10 text-success border-success/20";
    icon = <Trophy className="text-warning h-7 w-7" />;
    message = "Excellent! DMARC is well configured.";
  } else if (score >= 80) {
    grade = "B";
    color = "bg-primary/10 text-foreground border-primary/20";
    icon = <Medal className="text-warning h-7 w-7" />;
    message = "Good! DMARC is properly configured.";
  } else if (score >= 70) {
    grade = "C";
    color = "bg-warning/10 text-warning border-warning/20";
    icon = <CheckCircle2 className="text-warning h-7 w-7" />;
    message = "Fair. DMARC needs some improvements.";
  } else if (score >= 50) {
    grade = "D";
    color = "bg-warning/10 text-warning border-warning/20";
    icon = <AlertTriangle className="text-warning h-7 w-7" />;
    message = "Poor. DMARC needs significant improvements.";
  }

  return { score, grade, color, icon, message, badges, dots, dmarcPolicy };
}

function getWarnings(result: any) {
  const warnings: {
    icon: React.ReactElement;
    color: string;
    message: string;
  }[] = [];
  if (!result.dmarc) {
    warnings.push({
      icon: <AlertTriangle className="text-destructive h-4 w-4" />,
      color: "text-destructive bg-destructive/10 border-destructive/20",
      message:
        "DMARC record is missing. Your domain is vulnerable to spoofing.",
    });
  } else if (result.dmarc && /p=none/.test(result.dmarc)) {
    warnings.push({
      icon: <Info className="text-warning h-4 w-4" />,
      color: "text-warning bg-warning/10 border-warning/20",
      message:
        "DMARC policy is 'none'. Monitoring only; enforcement is not active.",
    });
  }
  if (!result.spf) {
    warnings.push({
      icon: <AlertTriangle className="text-destructive h-4 w-4" />,
      color: "text-destructive bg-destructive/10 border-destructive/20",
      message: "SPF record is missing. SPF helps prevent unauthorized senders.",
    });
  }
  if (!result.dkim || !result.dkim.some((d: any) => d.record)) {
    warnings.push({
      icon: <AlertTriangle className="text-destructive h-4 w-4" />,
      color: "text-destructive bg-destructive/10 border-destructive/20",
      message:
        "DKIM record is missing. DKIM helps verify message authenticity.",
    });
  } else if (result.dkim && result.dkim.some((d: any) => !d.record)) {
    warnings.push({
      icon: <Info className="text-warning h-4 w-4" />,
      color: "text-warning bg-warning/10 border-warning/20",
      message:
        "Some DKIM selectors are missing. Add all recommended selectors.",
    });
  }
  if (result.dmarc && result.dmarc.length > 255) {
    warnings.push({
      icon: <Info className="text-warning h-4 w-4" />,
      color: "text-warning bg-warning/10 border-warning/20",
      message: `DMARC record is ${result.dmarc.length} characters long. DNS TXT records over 255 characters may be truncated or cause issues.`,
    });
  }
  return warnings;
}

function getRecommendations(
  dmarc: string | null | undefined,
  spf: string | null | undefined,
  dkimSelectors: string[]
) {
  const recommendations: {
    type: "warning" | "info" | "success";
    message: string;
  }[] = [];

  // DMARC recommendations
  if (!dmarc) {
    recommendations.push({
      type: "warning",
      message: "Add a DMARC record to protect your domain from email spoofing",
    });
  } else {
    const fields = parseDMARCRecord(dmarc);
    if (fields.p === "none") {
      recommendations.push({
        type: "warning",
        message:
          'Upgrade your DMARC policy from "none" to "quarantine" or "reject" for better protection',
      });
    }
    if (!fields.rua) {
      recommendations.push({
        type: "info",
        message:
          "Add a DMARC aggregate reporting address (rua) to monitor your email authentication",
      });
    }
  }

  // SPF recommendations
  if (!spf) {
    recommendations.push({
      type: "warning",
      message: "Add an SPF record to specify authorized email servers",
    });
  } else {
    const spfFields = parseSPFRecord(spf);
    if (!spfFields.includes("-all")) {
      recommendations.push({
        type: "info",
        message:
          'Consider using "-all" in your SPF record for stricter enforcement',
      });
    }
  }

  // DKIM recommendations
  if (dkimSelectors.length === 0) {
    recommendations.push({
      type: "warning",
      message:
        "Add DKIM records to improve email deliverability and prevent spoofing",
    });
  }

  // Success message if all three are configured
  if (dmarc && spf && dkimSelectors.length > 0) {
    recommendations.push({
      type: "success",
      message:
        "Great job! Your domain has all three email authentication methods configured",
    });
  }

  return recommendations;
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
    >
      <Copy className="mr-2 h-4 w-4" />
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
}

function RelatedTools() {
  const tools = [
    {
      id: "dmarc-analyzer",
      name: "DMARC Analyzer",
      description: "Analyze DMARC configuration and get detailed reports",
      icon: Shield,
      href: "/tools/dmarc-analyzer",
    },
    {
      id: "spf-surveyor",
      name: "SPF Surveyor",
      description: "Validate and troubleshoot SPF records",
      icon: Mail,
      href: "/tools/spf-surveyor",
    },
    {
      id: "dkim-validator",
      name: "DKIM Validator",
      description: "Verify DKIM signatures and configuration",
      icon: Key,
      href: "/tools/dkim-validator",
    },
  ];

  return (
    <div className="mt-8 mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold tracking-tight">Related Tools</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          More email authentication tools
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.id}
              href={tool.href}
              className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
                  <Icon className="text-primary h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                    {tool.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function DMARCDomainCheckerPage() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    dmarc: string | null;
    spf: string | null;
    dkim: { selector: string; record: string | null }[];
    error?: string;
  }>(null);

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(
        `/api/dmarc-check?domain=${encodeURIComponent(domain)}`
      );
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({
        dmarc: null,
        spf: null,
        dkim: [],
        error: "Error fetching DNS records.",
      });
    } finally {
      setLoading(false);
    }
  }

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-foreground flex items-center gap-1.5 text-sm font-medium">
          <Shield className="text-primary h-4 w-4" />
          About Domain Authentication
        </h3>
        <p className="text-muted-foreground mt-2 text-sm">
          Email authentication helps protect your domain from spoofing and
          phishing. This tool checks your DMARC, SPF, and DKIM records.
        </p>
      </div>

      <div>
        <h3 className="text-foreground flex items-center gap-1.5 text-sm font-medium">
          <Info className="text-primary h-4 w-4" />
          What We Check
        </h3>
        <ul className="text-muted-foreground mt-2 space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <Shield className="text-primary mt-0.5 h-4 w-4" />
            <span>DMARC record and policy</span>
          </li>
          <li className="flex items-start gap-2">
            <Mail className="text-primary mt-0.5 h-4 w-4" />
            <span>SPF record and mechanisms</span>
          </li>
          <li className="flex items-start gap-2">
            <Key className="text-primary mt-0.5 h-4 w-4" />
            <span>DKIM records and selectors</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const dmarcFields = result?.dmarc ? parseDMARCRecord(result.dmarc) : {};
  const spfFields = result?.spf ? parseSPFRecord(result.spf) : [];
  const { score, grade, color, icon, message, badges, dots, dmarcPolicy } =
    getGradeAndScore(dmarcFields);
  const warnings = getWarnings(dmarcFields);
  const recommendations = getRecommendations(
    result?.dmarc,
    result?.spf,
    result?.dkim.map((d) => d.selector) || []
  );

  return (
    <ToolLayout
      title="DMARC Domain Checker"
      description="Check your domain's email authentication configuration and get actionable recommendations."
      sidebarContent={sidebarContent}
    >
      <Card className="w-full border-0 shadow-lg">
        <div className="p-6">
          <div className="mb-6 flex items-center gap-2">
            <Shield className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">DMARC Checker</h2>
          </div>

          <form onSubmit={handleCheck} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="domain"
                className="mb-2 block text-sm font-medium"
              >
                Domain
              </label>
              <div className="flex gap-3">
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
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="to-accent-hover from-primary min-w-[120px] gap-2 bg-gradient-to-r text-white hover:opacity-90"
                  disabled={loading}
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
                      Check <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Card>

      {result && (
        <div className="mt-6 space-y-6">
          {/* DMARC Status */}
          <DMARCStatus policy={dmarcPolicy} />

          {/* Status Card */}
          <Card>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="text-primary/70 h-6 w-6" />
                  <span className="text-foreground text-xl font-bold">
                    Status
                  </span>
                </div>
              </div>

              {/* Status Dots */}
              <div className="flex flex-wrap gap-4">
                {dots.map((dot, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${dot.color}`} />
                    <span className="text-muted-foreground text-sm">
                      {dot.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Recommendations Section */}
          {recommendations.length > 0 && (
            <Card className="mt-6">
              <div className="p-6">
                <h3 className="text-foreground mb-4 text-lg font-semibold">
                  Recommendations
                </h3>
                <ul className="space-y-2">
                  {recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Info className="text-primary mt-0.5 h-4 w-4" />
                      <span className="text-foreground">{rec.message}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )}

          {/* Record Cards */}
          <div className="space-y-4">
            {/* DMARC */}
            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="text-primary/70 h-6 w-6" />
                    <span className="text-foreground text-xl font-bold">
                      DMARC
                    </span>
                  </div>
                  {result.dmarc ? (
                    <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold">
                      Valid
                    </span>
                  ) : (
                    <span className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-semibold">
                      Missing
                    </span>
                  )}
                </div>
                {result.dmarc ? (
                  <>
                    <div className="text-muted-foreground mb-2 text-sm">
                      Policy:{" "}
                      <span className="text-foreground font-semibold">
                        {result.dmarc.match(/p=([a-zA-Z]+)/)?.[0] || "Unknown"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <pre className="border-border bg-muted/30 text-foreground flex-1 rounded border p-2 font-mono text-xs break-all whitespace-pre-wrap">
                        {result.dmarc}
                      </pre>
                      <CopyButton value={result.dmarc} />
                    </div>
                  </>
                ) : (
                  <div className="text-muted-foreground font-medium">
                    No DMARC record found
                  </div>
                )}
              </div>
            </Card>

            {/* SPF */}
            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary/70 h-6 w-6" />
                    <span className="text-foreground text-xl font-bold">
                      SPF
                    </span>
                  </div>
                  {result.spf ? (
                    <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold">
                      Valid
                    </span>
                  ) : (
                    <span className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-semibold">
                      Missing
                    </span>
                  )}
                </div>
                {result.spf ? (
                  <>
                    <div className="text-muted-foreground mb-2 text-sm">
                      All mechanisms present
                    </div>
                    <div className="flex items-center gap-2">
                      <pre className="border-border bg-muted/30 text-foreground flex-1 rounded border p-2 font-mono text-xs break-all whitespace-pre-wrap">
                        {result.spf}
                      </pre>
                      <CopyButton value={result.spf} />
                    </div>
                  </>
                ) : (
                  <div className="text-muted-foreground font-medium">
                    No SPF record found
                  </div>
                )}
              </div>
            </Card>

            {/* DKIM */}
            <Card>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Key className="text-primary/70 h-6 w-6" />
                    <span className="text-foreground text-xl font-bold">
                      DKIM
                    </span>
                  </div>
                  {result.dkim &&
                  result.dkim.length > 0 &&
                  result.dkim.some((d) => d.record) ? (
                    <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold">
                      Valid
                    </span>
                  ) : (
                    <span className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-semibold">
                      Missing
                    </span>
                  )}
                </div>
                {result.dkim &&
                result.dkim.length > 0 &&
                result.dkim.some((d) => d.record) ? (
                  <div className="space-y-3">
                    {result.dkim
                      .filter((d) => d.record)
                      .map((d) => (
                        <div key={d.selector}>
                          <div className="text-muted-foreground mb-1 text-xs">
                            Selector:{" "}
                            <span className="text-foreground font-semibold">
                              {d.selector}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <pre className="border-border bg-muted/30 text-foreground flex-1 rounded border p-2 font-mono text-xs break-all whitespace-pre-wrap">
                              {d.record as string}
                            </pre>
                            <CopyButton value={d.record as string} />
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-muted-foreground font-medium">
                    No DKIM records found (checked common selectors)
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* FAQ Schema for SEO */}
      <FAQSchema
        faqs={[
          {
            question: "How do I check my DMARC record?",
            answer:
              "You can check your DMARC record using our free DMARC Domain Checker tool above. Simply enter your domain name (e.g., example.com), and we'll automatically query your DNS records at _dmarc.yourdomain.com to retrieve your DMARC policy, along with SPF and DKIM configurations. Results appear instantly with a security grade and specific recommendations.",
          },
          {
            question: "What is a DMARC lookup?",
            answer:
              "A DMARC lookup is a DNS query that retrieves the DMARC TXT record published at _dmarc.yourdomain.com. This record contains your DMARC policy (none, quarantine, or reject), reporting email addresses (rua/ruf), alignment modes, and other configuration settings. Our tool performs this lookup automatically and presents the results in an easy-to-understand format.",
          },
          {
            question: "Why does my domain have no DMARC record?",
            answer:
              "If your domain has no DMARC record, it means you haven't published a DMARC policy in your DNS. This leaves your domain vulnerable to email spoofing and phishing attacks. To fix this, use our DMARC Policy Generator to create a record, then publish it as a TXT record at _dmarc.yourdomain.com in your DNS settings. Start with p=none to monitor without affecting email delivery.",
          },
          {
            question: "What's the difference between DMARC, SPF, and DKIM?",
            answer:
              "DMARC, SPF, and DKIM work together for email security. SPF lists authorized IP addresses that can send email for your domain. DKIM adds cryptographic signatures to verify message authenticity. DMARC builds on both by telling receivers what to do when SPF or DKIM fails (none/quarantine/reject) and provides reporting. Our checker validates all three protocols simultaneously.",
          },
          {
            question: "How often should I check my DMARC record?",
            answer:
              "Check your DMARC record whenever you change email providers, add new sending services, modify SPF/DKIM settings, or update your DMARC policy. For continuous protection, use our automated monitoring platform instead of manual checks - you'll get real-time alerts when issues arise, policy changes are detected, or authentication failures occur.",
          },
        ]}
      />

      {/* FAQ Display Section */}
      <div className="mt-8 mb-8">
        <div className="mb-4">
          <h2 className="text-foreground text-xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Common questions about DMARC lookups and domain checking
          </p>
        </div>

        <div className="space-y-4">
          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              How do I check my DMARC record?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              Enter your domain name in our free tool above. We&apos;ll
              automatically query your DNS at _dmarc.yourdomain.com and show
              your DMARC, SPF, and DKIM records with a security grade and
              recommendations.
            </p>
          </details>

          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              Why does my domain have no DMARC record?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              No DMARC record means you haven&apos;t published a DMARC policy in
              DNS. This leaves your domain vulnerable to spoofing. Use our DMARC
              Policy Generator to create a record, then publish it at
              _dmarc.yourdomain.com.
            </p>
          </details>

          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              What&apos;s the difference between DMARC, SPF, and DKIM?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              SPF lists authorized sending IPs, DKIM adds cryptographic
              signatures, and DMARC tells receivers what to do when
              authentication fails. Our checker validates all three
              simultaneously.
            </p>
          </details>
        </div>
      </div>

      {/* Related Tools */}
      <RelatedTools />
    </ToolLayout>
  );
}
