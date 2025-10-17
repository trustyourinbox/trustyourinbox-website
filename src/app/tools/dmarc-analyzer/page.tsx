"use client";

import { useState } from "react";
import {
  FaCopy,
  FaShieldAlt,
  FaInfoCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaServer,
  FaKey,
} from "react-icons/fa";
import { ToolLayout, Button, Input, Card } from "@/components/ui";
import { DMARCStatus } from "@/components/ui/DMARCStatus";
import { Shield, Mail, Key, FileText, ArrowRight } from "lucide-react";
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
        <h3 className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
          <FaShieldAlt className="h-4 w-4 text-primary" />
          About DMARC
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          DMARC (Domain-based Message Authentication, Reporting, and
          Conformance) helps protect your domain from email spoofing and
          phishing.
        </p>
      </div>

      <div>
        <h3 className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
          <FaInfoCircle className="h-4 w-4 text-primary" />
          Common Tags
        </h3>
        <ul className="mt-2 space-y-2 text-sm text-gray-500">
          <li className="flex items-start gap-2">
            <code className="rounded bg-gray-100 px-1.5 py-0.5 text-primary">
              v=DMARC1
            </code>
            <span>Version</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="rounded bg-gray-100 px-1.5 py-0.5 text-primary">
              p=none
            </code>
            <span>Monitoring only</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="rounded bg-gray-100 px-1.5 py-0.5 text-primary">
              p=quarantine
            </code>
            <span>Send to spam</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="rounded bg-gray-100 px-1.5 py-0.5 text-primary">
              p=reject
            </code>
            <span>Reject email</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="rounded bg-gray-100 px-1.5 py-0.5 text-primary">
              rua=
            </code>
            <span>Aggregate reports</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="rounded bg-gray-100 px-1.5 py-0.5 text-primary">
              ruf=
            </code>
            <span>Forensic reports</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const recommendations = tags ? getRecommendations(tags) : [];

  return (
    <ToolLayout
      title="DMARC Analyzer"
      description="Paste a DMARC record below to analyze its configuration and get best-practice advice."
      sidebarContent={sidebarContent}
    >
      <Card className="w-full border-0 shadow-lg">
        <div className="p-6">
          <div className="mb-6 flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">DMARC Analyzer</h2>
          </div>

          <form onSubmit={handleAnalyze} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="dmarc" className="text-sm font-medium">
                DMARC Record
              </label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="dmarc"
                    type="text"
                    placeholder="v=DMARC1; p=reject; rua=mailto:reports@example.com; ..."
                    className="h-11 border-gray-200 pl-10 focus:border-primary focus:ring-ring"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="min-w-[120px] bg-primary text-white hover:bg-primary"
                  disabled={loading || !input}
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
                      Analyzing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Analyze <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Card>

      {policyType && (
        <div className="mt-6">
          <DMARCStatus policy={policyType} />
        </div>
      )}

      {recommendations.length > 0 && (
        <Card className="mt-6" title="Recommendations">
          <ul className="space-y-2">
            {recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaInfoCircle className="mt-0.5 h-4 w-4 text-primary" />
                <span>{rec.message}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {tags && (
        <div className="mt-6 space-y-4">
          {tags.map(({ tag, value }) => (
            <Card key={tag}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{tag}</h3>
                  <p className="text-sm text-gray-500">
                    {getTagExplanation(tag, value)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    navigator.clipboard.writeText(`${tag}=${value}`)
                  }
                >
                  <FaCopy className="mr-2" />
                  Copy
                </Button>
              </div>
              <div className="mt-2 rounded bg-gray-50 p-3 font-mono text-sm">
                {value}
              </div>
            </Card>
          ))}
        </div>
      )}

      <div className="mb-8 mt-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Related Tools</h2>
          <p className="mt-1 text-muted-foreground">
            Explore more email authentication tools to secure your domain
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Link
            href="/tools/spf-surveyor"
            className="group relative overflow-hidden rounded-lg border border-green-200 bg-green-50 p-5 transition-all hover:shadow-md dark:border-green-800 dark:bg-green-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:underline">
                  SPF Surveyor
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Validate and troubleshoot your SPF records
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>

          <Link
            href="/tools/dkim-validator"
            className="group relative overflow-hidden rounded-lg border border-purple-200 bg-purple-50 p-5 transition-all hover:shadow-md dark:border-purple-800 dark:bg-purple-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:underline">
                  DKIM Validator
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Verify your DKIM signatures and configuration
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>

          <Link
            href="/tools/domain-security-checker"
            className="group relative overflow-hidden rounded-lg border border-primary/20 bg-secondary p-5 transition-all hover:shadow-md dark:border-primary dark:bg-primary"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2 dark:bg-primary">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:underline">
                  Domain Security Checker
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Comprehensive security analysis for your domain
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>
      </div>
    </ToolLayout>
  );
}
