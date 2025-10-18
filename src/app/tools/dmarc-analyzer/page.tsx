"use client";

import { useState } from "react";
import { ToolLayout, Button, Input, Card } from "@/components/ui";
import { DMARCStatus } from "@/components/ui/DMARCStatus";
import {
  Shield,
  Mail,
  Key,
  FileText,
  ArrowRight,
  Copy,
  Info,
  AlertTriangle,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

function parseDMARC(record: string) {
  const tags: { tag: string; value: string }[] = [];
  record.split(";").forEach((part) => {
    const [tag, ...rest] = part.trim().split("=");
    if (tag && rest.length) {
      tags.push({ tag: tag.trim(), value: rest.join("=").trim() });
    }
  });
  return tags;
}

function getTagExplanation(tag: string, value: string) {
  switch (tag) {
    case "v":
      return "Version of DMARC. Should always be DMARC1.";
    case "p":
      if (value === "none")
        return "No enforcement. Only monitoring. Not recommended for production.";
      if (value === "quarantine")
        return "Suspicious emails will be sent to spam/junk. Good protection.";
      if (value === "reject")
        return "Strictest policy. Unauthorized emails will be rejected. Best protection.";
      return "Policy for domain.";
    case "sp":
      return "Policy for subdomains.";
    case "rua":
      return "Aggregate report email(s).";
    case "ruf":
      return "Forensic report email(s).";
    case "pct":
      return "Percentage of messages subjected to filtering.";
    case "adkim":
      return "Alignment mode for DKIM (r=relaxed, s=strict).";
    case "aspf":
      return "Alignment mode for SPF (r=relaxed, s=strict).";
    case "fo":
      return "Failure reporting options.";
    case "rf":
      return "Format for forensic reports.";
    default:
      return "";
  }
}

function getPolicyType(
  tags: { tag: string; value: string }[]
): "reject" | "quarantine" | "none" | "no-policy" {
  const p = tags.find((t) => t.tag === "p")?.value;
  if (p === "reject") return "reject";
  if (p === "quarantine") return "quarantine";
  if (p === "none") return "none";
  return "no-policy";
}

function getRecommendations(tags: { tag: string; value: string }[]) {
  const recommendations: {
    type: "warning" | "info" | "success";
    message: string;
  }[] = [];

  // Check version
  const version = tags.find((t) => t.tag === "v")?.value;
  if (!version || version !== "DMARC1") {
    recommendations.push({
      type: "warning",
      message: "Add or update the DMARC version to v=DMARC1",
    });
  }

  // Check policy
  const policy = tags.find((t) => t.tag === "p")?.value;
  if (!policy) {
    recommendations.push({
      type: "warning",
      message:
        "Add a DMARC policy (p=) to specify how to handle unauthorized emails",
    });
  } else if (policy === "none") {
    recommendations.push({
      type: "warning",
      message:
        "Consider upgrading from p=none to p=quarantine or p=reject for better protection",
    });
  }

  // Check reporting
  const rua = tags.find((t) => t.tag === "rua")?.value;
  if (!rua) {
    recommendations.push({
      type: "info",
      message:
        "Add a DMARC aggregate reporting address (rua=) to monitor your email authentication",
    });
  }

  const ruf = tags.find((t) => t.tag === "ruf")?.value;
  if (!ruf) {
    recommendations.push({
      type: "info",
      message:
        "Add a DMARC forensic reporting address (ruf=) to receive detailed failure reports",
    });
  }

  // Check subdomain policy
  const sp = tags.find((t) => t.tag === "sp")?.value;
  if (!sp) {
    recommendations.push({
      type: "info",
      message:
        "Consider adding a subdomain policy (sp=) to protect your subdomains",
    });
  }

  // Success message if all critical components are present
  if (
    version === "DMARC1" &&
    policy &&
    (policy === "reject" || policy === "quarantine") &&
    rua
  ) {
    recommendations.push({
      type: "success",
      message:
        "Great job! Your DMARC record is well configured with strong protection",
    });
  }

  return recommendations;
}

export default function DMARCAnalyzerPage() {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState<{ tag: string; value: string }[] | null>(
    null
  );
  const [policyType, setPolicyType] = useState<
    "reject" | "quarantine" | "none" | "no-policy" | null
  >(null);
  const [loading, setLoading] = useState(false);

  function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const parsed = parseDMARC(input);
    setTags(parsed);
    setPolicyType(getPolicyType(parsed));
    setLoading(false);
  }

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-foreground mb-3 flex items-center gap-2 text-sm font-semibold">
          <Shield className="text-primary h-4 w-4" />
          About DMARC
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          DMARC (Domain-based Message Authentication, Reporting, and
          Conformance) helps protect your domain from email spoofing and
          phishing attacks.
        </p>
      </div>

      <div>
        <h3 className="text-foreground mb-3 flex items-center gap-2 text-sm font-semibold">
          <Info className="text-primary h-4 w-4" />
          Common Tags
        </h3>
        <ul className="space-y-2.5 text-sm">
          {[
            { code: "v=DMARC1", desc: "Version" },
            { code: "p=none", desc: "Monitoring only" },
            { code: "p=quarantine", desc: "Send to spam" },
            { code: "p=reject", desc: "Reject email" },
            { code: "rua=", desc: "Aggregate reports" },
            { code: "ruf=", desc: "Forensic reports" },
          ].map((item) => (
            <li key={item.code} className="flex items-start gap-2">
              <code className="bg-primary/10 text-primary rounded px-2 py-0.5 font-mono text-xs">
                {item.code}
              </code>
              <span className="text-muted-foreground">{item.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const recommendations = tags ? getRecommendations(tags) : [];

  return (
    <ToolLayout
      title="DMARC Analyzer"
      description="Paste a DMARC record below to analyze its configuration and get best-practice recommendations."
      sidebarContent={sidebarContent}
    >
      {/* Main Tool Card - Premium Design */}
      <div className="group border-border/40 from-background/60 via-background/40 to-background/20 hover:border-primary/20 hover:shadow-primary/5 relative overflow-hidden rounded-lg border bg-gradient-to-br p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl sm:p-8">
        {/* Hover glow effect */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="from-primary/10 to-primary/10 absolute -inset-1 rounded-lg bg-gradient-to-r via-purple-500/10 blur-xl" />
        </div>

        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="from-primary/15 shadow-primary/5 rounded-md bg-gradient-to-br to-purple-500/15 p-2.5 shadow-lg">
              <Shield className="text-primary h-6 w-6" />
            </div>
            <h2 className="text-foreground text-2xl font-bold tracking-tight">
              Analyze DMARC Record
            </h2>
          </div>

          <form onSubmit={handleAnalyze} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="dmarc"
                className="text-foreground mb-2 block text-sm font-medium"
              >
                DMARC Record
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FileText className="text-muted-foreground h-5 w-5" />
                  </div>
                  <Input
                    id="dmarc"
                    type="text"
                    placeholder="v=DMARC1; p=reject; rua=mailto:reports@example.com; ..."
                    className="h-11 pl-10"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="from-primary h-11 min-w-[140px] gap-2 bg-gradient-to-r to-purple-500 text-white hover:opacity-90"
                  disabled={loading || !input}
                >
                  {loading ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
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
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Analyze
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* DMARC Status Display */}
      {policyType && (
        <div className="mt-6">
          <DMARCStatus policy={policyType} />
        </div>
      )}

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="border-border/40 from-background/60 via-background/40 to-background/20 mt-6 rounded-lg border bg-gradient-to-br p-6 backdrop-blur-xl">
          <h3 className="text-foreground mb-4 flex items-center gap-2 text-lg font-semibold">
            <Sparkles className="text-primary h-5 w-5" />
            Recommendations
          </h3>
          <ul className="space-y-3">
            {recommendations.map((rec, i) => {
              const Icon =
                rec.type === "success"
                  ? CheckCircle
                  : rec.type === "warning"
                    ? AlertTriangle
                    : Info;
              const iconColor =
                rec.type === "success"
                  ? "text-green-500"
                  : rec.type === "warning"
                    ? "text-amber-500"
                    : "text-blue-500";

              return (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    className={`mt-0.5 h-5 w-5 flex-shrink-0 ${iconColor}`}
                  />
                  <span className="text-foreground text-sm leading-relaxed">
                    {rec.message}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Tag Breakdown */}
      {tags && (
        <div className="mt-6 space-y-4">
          <h3 className="text-foreground text-lg font-semibold">
            Record Breakdown
          </h3>
          {tags.map(({ tag, value }) => (
            <div
              key={tag}
              className="border-border/40 from-background/60 to-background/20 hover:border-primary/20 rounded-lg border bg-gradient-to-br p-4 backdrop-blur-xl transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-foreground mb-1 font-semibold">{tag}</h4>
                  <p className="text-muted-foreground text-sm">
                    {getTagExplanation(tag, value)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    navigator.clipboard.writeText(`${tag}=${value}`)
                  }
                  className="flex-shrink-0"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-muted/50 text-foreground mt-3 rounded-md p-3 font-mono text-sm">
                {value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Related Tools */}
      <div className="mt-8 mb-8">
        <div className="mb-4">
          <h2 className="text-foreground text-xl font-bold tracking-tight">
            Related Tools
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">
            More email authentication tools
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
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
                  Validate and troubleshoot SPF records
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
                  Verify DKIM signatures and configuration
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/tools/domain-security-checker"
            className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
                <Shield className="text-primary h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                  Domain Security Checker
                </h3>
                <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                  Comprehensive security analysis for your domain
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </ToolLayout>
  );
}
