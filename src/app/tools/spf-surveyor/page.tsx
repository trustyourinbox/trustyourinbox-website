"use client";
import { useState, useRef } from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaInfoCircle,
  FaServer,
  FaGlobe,
  FaShieldAlt,
  FaExclamationCircle,
  FaNetworkWired,
  FaChevronRight,
  FaChevronDown,
  FaCopy,
  FaTrophy,
  FaKey,
  FaFileAlt,
} from "react-icons/fa";
import { ToolLayout, Button, Input, Card, Alert } from "@/components/ui";
import Link from "next/link";
import { Shield, Key, Mail, ArrowRight, Globe } from "lucide-react";

interface SPFNode {
  domain: string;
  record: string;
  includes: SPFNode[];
  ip4: string[];
  ip6: string[];
  mx: string[];
  a: string[];
  all: string;
  dnsLookups: number;
  totalIp4Blocks: number;
  totalIp6Blocks: number;
}

function SPFTreeNode({ node, level = 0 }: { node: SPFNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(level === 0);

  return (
    <div className="ml-2 border-l-2 border-gray-200 pl-4">
      <div
        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {node.includes.length > 0 && (
          <span className="text-gray-400 transition-colors hover:text-gray-600">
            {isExpanded ? (
              <FaChevronDown className="h-4 w-4" />
            ) : (
              <FaChevronRight className="h-4 w-4" />
            )}
          </span>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">{node.domain}</span>
            <span className="text-sm text-gray-500">
              ({node.dnsLookups} DNS lookups)
            </span>
          </div>
          {!isExpanded && node.includes.length > 0 && (
            <div className="mt-1 text-sm text-gray-500">
              Click to expand and view details
            </div>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="mt-2 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 font-mono text-sm break-all">
            {node.record}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {node.ip4.length > 0 && (
              <div className="rounded-lg border border-gray-200 bg-white p-3">
                <h4 className="mb-2 flex items-center gap-2 font-medium text-gray-900">
                  <FaServer className="text-primary" />
                  IPv4 Addresses ({node.totalIp4Blocks} blocks)
                </h4>
                <ul className="space-y-1">
                  {node.ip4.map((ip, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      {ip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {node.ip6.length > 0 && (
              <div className="rounded-lg border border-gray-200 bg-white p-3">
                <h4 className="mb-2 flex items-center gap-2 font-medium text-gray-900">
                  <FaServer className="text-primary" />
                  IPv6 Addresses ({node.totalIp6Blocks} blocks)
                </h4>
                <ul className="space-y-1">
                  {node.ip6.map((ip, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      {ip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {node.mx.length > 0 && (
              <div className="rounded-lg border border-gray-200 bg-white p-3">
                <h4 className="mb-2 flex items-center gap-2 font-medium text-gray-900">
                  <FaGlobe className="text-primary" />
                  MX Records
                </h4>
                <ul className="space-y-1">
                  {node.mx.map((mx, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      {mx}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {node.a.length > 0 && (
              <div className="rounded-lg border border-gray-200 bg-white p-3">
                <h4 className="mb-2 flex items-center gap-2 font-medium text-gray-900">
                  <FaNetworkWired className="text-primary" />A Records
                </h4>
                <ul className="space-y-1">
                  {node.a.map((a, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {node.includes.map((include, i) => (
            <SPFTreeNode key={i} node={include} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function getDnsLookupStatus(lookups: number) {
  if (lookups < 7) {
    return {
      status: "Good",
      color: "text-green-700 bg-green-50 border-green-200",
      icon: <FaCheckCircle className="h-5 w-5 text-green-600" />,
      message: "Safe: Well within SPF DNS lookup limits.",
    };
  } else if (lookups < 10) {
    return {
      status: "Warning",
      color: "text-yellow-700 bg-yellow-50 border-yellow-200",
      icon: <FaExclamationTriangle className="h-5 w-5 text-yellow-500" />,
      message: "Warning: Approaching the 10 DNS lookup limit.",
    };
  } else {
    return {
      status: "Critical",
      color: "text-red-700 bg-red-50 border-red-200",
      icon: <FaTimesCircle className="h-5 w-5 text-red-600" />,
      message: "Critical: Exceeds SPF DNS lookup limit! SPF will fail.",
    };
  }
}

function getAllMechanismStatus(all: string) {
  if (all === "-all") {
    return {
      label: "Strict (-all)",
      color: "bg-green-100 text-green-800 border-green-200",
      icon: <FaCheckCircle className="h-4 w-4 text-green-600" />,
      tooltip: "Best practice: Only allow explicitly authorized senders.",
    };
  } else if (all === "~all") {
    return {
      label: "SoftFail (~all)",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      icon: <FaExclamationTriangle className="h-4 w-4 text-yellow-500" />,
      tooltip: "SoftFail: Not as strict, may allow unauthorized senders.",
    };
  } else if (all === "+all" || all === "all") {
    return {
      label: "Permissive (+all)",
      color: "bg-red-100 text-red-800 border-red-200",
      icon: <FaTimesCircle className="h-4 w-4 text-red-600" />,
      tooltip: "Permissive: Allows any sender. Not recommended!",
    };
  } else {
    return {
      label: all,
      color: "bg-gray-100 text-gray-800 border-gray-200",
      icon: <FaInfoCircle className="h-4 w-4 text-gray-500" />,
      tooltip: "Custom or unknown policy.",
    };
  }
}

function getGradeAndScore(spfTree: SPFNode) {
  const dots: { color: string; message: string }[] = [];
  let color = "bg-red-50 text-red-700 border-red-200";
  let icon = <FaTimesCircle className="h-7 w-7 text-red-600" />;
  let message = "High risk: SPF configuration needs improvement.";

  // Dot 1: DNS Lookups
  if (spfTree.dnsLookups < 7) {
    dots.push({ color: "bg-green-500", message: "Good DNS lookup count" });
  } else if (spfTree.dnsLookups < 10) {
    dots.push({ color: "bg-yellow-500", message: "High DNS lookup count" });
  } else {
    dots.push({ color: "bg-red-500", message: "Exceeds DNS lookup limit" });
  }

  // Dot 2: SPF Policy
  if (spfTree.all === "-all") {
    dots.push({ color: "bg-green-500", message: "Strict SPF policy (-all)" });
  } else if (spfTree.all === "~all") {
    dots.push({
      color: "bg-yellow-500",
      message: "SoftFail SPF policy (~all)",
    });
  } else {
    dots.push({ color: "bg-red-500", message: "Permissive SPF policy" });
  }

  // Dot 3: Record Length
  if (spfTree.record.length <= 255) {
    dots.push({ color: "bg-green-500", message: "Good record length" });
  } else {
    dots.push({
      color: "bg-red-500",
      message: "Record exceeds 255 characters",
    });
  }

  // Dot 4: Includes Configuration
  if (spfTree.includes.length > 0) {
    dots.push({ color: "bg-green-500", message: "Includes configured" });
  } else {
    dots.push({ color: "bg-yellow-500", message: "No includes configured" });
  }

  // Dot 5: IP Addresses
  if (spfTree.totalIp4Blocks > 0 || spfTree.totalIp6Blocks > 0) {
    dots.push({ color: "bg-green-500", message: "IP addresses configured" });
  } else {
    dots.push({
      color: "bg-yellow-500",
      message: "No IP addresses configured",
    });
  }

  // Calculate overall status based on dots
  const greenDots = dots.filter((dot) => dot.color === "bg-green-500").length;
  const yellowDots = dots.filter((dot) => dot.color === "bg-yellow-500").length;

  if (greenDots >= 4) {
    color = "bg-green-100 text-green-800 border-green-200";
    icon = <FaTrophy className="h-7 w-7 text-yellow-500" />;
    message = "Excellent! SPF is well configured.";
  } else if (greenDots + yellowDots >= 4) {
    color = "bg-yellow-100 text-yellow-800 border-yellow-200";
    icon = <FaCheckCircle className="h-7 w-7 text-yellow-500" />;
    message = "Fair. SPF needs some improvements.";
  }

  return { dots, color, icon, message };
}

function getRecommendations(spfTree: SPFNode) {
  const recommendations: {
    type: "warning" | "info" | "success";
    message: string;
  }[] = [];
  const { dots } = getGradeAndScore(spfTree);
  const greenDots = dots.filter((dot) => dot.color === "bg-green-500").length;

  // DNS lookup recommendations
  if (spfTree.dnsLookups >= 10) {
    recommendations.push({
      type: "warning",
      message:
        "Your SPF record exceeds the 10 DNS lookup limit. Consider SPF flattening to reduce lookups.",
    });
  } else if (spfTree.dnsLookups >= 7) {
    recommendations.push({
      type: "info",
      message:
        "Your SPF record has a high number of DNS lookups. Consider optimizing to improve reliability.",
    });
  }

  // All mechanism recommendations
  if (spfTree.all === "+all" || spfTree.all === "all") {
    recommendations.push({
      type: "warning",
      message:
        "Your SPF record uses a permissive policy. Change to '-all' for better security.",
    });
  } else if (spfTree.all === "~all") {
    recommendations.push({
      type: "info",
      message:
        "Consider upgrading from '~all' to '-all' for stricter SPF enforcement.",
    });
  }

  // Record length recommendations
  if (spfTree.record.length > 255) {
    recommendations.push({
      type: "warning",
      message:
        "Your SPF record exceeds 255 characters. Consider splitting or optimizing the record.",
    });
  }

  // General recommendations based on dots
  if (greenDots >= 4) {
    recommendations.push({
      type: "success",
      message:
        "Your SPF configuration is strong. Keep monitoring for any changes in best practices.",
    });
  } else if (greenDots >= 3) {
    recommendations.push({
      type: "info",
      message:
        "Your SPF configuration is acceptable but could be improved for better security.",
    });
  } else {
    recommendations.push({
      type: "warning",
      message:
        "Your SPF configuration needs significant improvements. Review all recommendations above.",
    });
  }

  return recommendations;
}

export default function SPFSurveyorPage() {
  const [domain, setDomain] = useState("");
  const [spfTree, setSpfTree] = useState<SPFNode | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const spfRecordRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSpfTree(null);

    try {
      const response = await fetch(
        `/api/dns/spf?domain=${encodeURIComponent(domain)}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch SPF record");
      }

      if (!data.spf) {
        setError("No SPF record found for this domain");
        return;
      }

      setSpfTree(data.spf);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  function handleCopy(record: string) {
    navigator.clipboard.writeText(record);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  function getWarnings(spfTree: SPFNode) {
    const warnings: {
      icon: React.ReactElement;
      color: string;
      message: string;
    }[] = [];
    // Risky mechanism: +all or all
    if (spfTree.all === "+all" || spfTree.all === "all") {
      warnings.push({
        icon: <FaExclamationTriangle className="h-4 w-4 text-red-500" />,
        color: "text-red-700 bg-red-50 border-red-200",
        message:
          "Risky: The SPF record uses '+all' or 'all', which allows any sender. This is not recommended.",
      });
    }
    // SPF record length
    if (spfTree.record.length > 255) {
      warnings.push({
        icon: <FaExclamationTriangle className="h-4 w-4 text-yellow-500" />,
        color: "text-yellow-700 bg-yellow-50 border-yellow-200",
        message: `Warning: The SPF record is ${spfTree.record.length} characters long. DNS TXT records over 255 characters may be truncated or cause issues.`,
      });
    }
    // SPF flattening suggestion
    if (spfTree.dnsLookups >= 8) {
      warnings.push({
        icon: <FaInfoCircle className="text-primary h-4 w-4" />,
        color: "text-primary bg-secondary border-primary/20",
        message:
          "Suggestion: Consider SPF flattening to reduce DNS lookups and improve reliability.",
      });
    }
    return warnings;
  }

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h3 className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
          <FaShieldAlt className="text-primary h-4 w-4" />
          About SPF
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          SPF (Sender Policy Framework) is an email authentication method that
          helps prevent email spoofing by specifying which mail servers are
          authorized to send email for your domain.
        </p>
      </div>

      <div>
        <h3 className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
          <FaInfoCircle className="text-primary h-4 w-4" />
          What We Check
        </h3>
        <ul className="mt-2 space-y-2 text-sm text-gray-500">
          <li className="flex items-start gap-2">
            <FaServer className="text-primary mt-0.5 h-4 w-4" />
            <span>DNS lookup count and limits</span>
          </li>
          <li className="flex items-start gap-2">
            <FaServer className="text-primary mt-0.5 h-4 w-4" />
            <span>SPF policy and mechanisms</span>
          </li>
          <li className="flex items-start gap-2">
            <FaServer className="text-primary mt-0.5 h-4 w-4" />
            <span>Record structure and length</span>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <ToolLayout
      title="SPF Surveyor"
      description="Analyze your SPF record to identify authorized email sources and ensure proper configuration."
      sidebarContent={sidebarContent}
    >
      <Card className="w-full border-0 shadow-lg">
        <div className="p-6">
          <div className="mb-6 flex items-center gap-2">
            <Shield className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">SPF Surveyor</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="domain" className="text-sm font-medium">
                Domain Name
              </label>
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Globe className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="domain"
                  type="text"
                  placeholder="yourdomain.com"
                  className="focus:border-primary focus:ring-ring h-11 border-gray-200 pl-10"
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
                className="bg-primary hover:bg-primary min-w-[120px] text-white"
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
                    Analyzing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Analyze <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </Card>

      {error && (
        <Alert variant="error" className="mt-6">
          {error}
        </Alert>
      )}

      {spfTree && (
        <div className="mt-6 space-y-6">
          {/* Status Card */}
          {(() => {
            const { dots, color, icon, message } = getGradeAndScore(spfTree);
            return (
              <Card className={color}>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaShieldAlt className="text-primary/70 h-6 w-6" />
                    <span className="text-xl font-bold text-gray-900">
                      Status
                    </span>
                  </div>
                  {icon}
                </div>

                <p className="mb-4 text-sm">{message}</p>

                {/* Status Dots */}
                <div className="flex flex-wrap gap-4">
                  {dots.map((dot, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${dot.color}`} />
                      <span className="text-sm text-gray-600">
                        {dot.message}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })()}

          {/* Recommendations Section */}
          {(() => {
            const recommendations = getRecommendations(spfTree);
            return (
              <Card>
                <h3 className="mb-3 font-semibold text-gray-900">
                  Recommendations
                </h3>
                <div className="space-y-3">
                  {recommendations.map((rec, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 rounded-lg border p-3 ${
                        rec.type === "warning"
                          ? "border-red-200"
                          : rec.type === "info"
                            ? "border-primary/20"
                            : "border-green-200"
                      }`}
                    >
                      <div
                        className={`mt-0.5 ${
                          rec.type === "warning"
                            ? "text-red-600"
                            : rec.type === "info"
                              ? "text-primary"
                              : "text-green-600"
                        }`}
                      >
                        {rec.type === "warning" ? (
                          <FaExclamationTriangle className="h-5 w-5" />
                        ) : rec.type === "info" ? (
                          <FaInfoCircle className="h-5 w-5" />
                        ) : (
                          <FaCheckCircle className="h-5 w-5" />
                        )}
                      </div>
                      <p
                        className={`text-sm ${
                          rec.type === "warning"
                            ? "text-red-700"
                            : rec.type === "info"
                              ? "text-primary"
                              : "text-green-700"
                        }`}
                      >
                        {rec.message}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })()}

          {/* SPF Record Card */}
          <Card>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaServer className="text-primary/70 h-6 w-6" />
                <span className="text-xl font-bold text-gray-900">
                  SPF Record
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <pre className="flex-1 rounded border border-gray-100 bg-gray-50 p-2 text-xs break-all whitespace-pre-wrap text-gray-800">
                {spfTree.record}
              </pre>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(spfTree.record)}
              >
                <FaCopy className="mr-2" />
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </Card>

          {/* SPF Tree */}
          <Card>
            <h3 className="mb-4 font-semibold text-gray-900">
              SPF Record Analysis
            </h3>
            <SPFTreeNode node={spfTree} />
          </Card>
        </div>
      )}

      <div className="mt-12 mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Related Tools</h2>
          <p className="text-muted-foreground mt-1">
            Explore more email authentication tools to secure your domain
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Link
            href="/tools/dmarc-analyzer"
            className="group border-primary/20 bg-secondary dark:border-primary dark:bg-primary relative overflow-hidden rounded-lg border p-5 transition-all hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 dark:bg-primary rounded-full p-2">
                <Shield className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:underline">
                  DMARC Analyzer
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  Analyze your DMARC configuration and get detailed reports
                </p>
              </div>
            </div>
            <div className="bg-primary absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"></div>
          </Link>

          <Link
            href="/tools/dkim-inspector"
            className="group relative overflow-hidden rounded-lg border border-green-200 bg-green-50 p-5 transition-all hover:shadow-md dark:border-green-800 dark:bg-green-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                <Key className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:underline">
                  DKIM Inspector
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  Validate and troubleshoot your DKIM records
                </p>
              </div>
            </div>
            <div className="bg-primary absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"></div>
          </Link>

          <Link
            href="/tools/domain-security-checker"
            className="group relative overflow-hidden rounded-lg border border-purple-200 bg-purple-50 p-5 transition-all hover:shadow-md dark:border-purple-800 dark:bg-purple-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                <Mail className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:underline">
                  Domain Security Checker
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  Check your domain&apos;s overall email security configuration
                </p>
              </div>
            </div>
            <div className="bg-primary absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>
      </div>
    </ToolLayout>
  );
}
