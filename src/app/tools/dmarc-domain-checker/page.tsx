"use client";

import { useState } from "react";
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaShieldAlt, FaKey, FaEnvelope, FaTrophy, FaMedal, FaCopy, FaInfoCircle, FaServer } from "react-icons/fa";
import { ToolLayout, Button, Input, Card, Alert } from "@/components/ui";
import { DMARCStatus } from "@/components/ui/DMARCStatus";
import { Shield, Mail, Key, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

type DMARCPolicy = "reject" | "quarantine" | "none" | "no-policy";

function getStatusIcon(status: "success" | "warning" | "error") {
  if (status === "success") return <FaCheckCircle className="text-green-600 w-6 h-6" />;
  if (status === "warning") return <FaExclamationTriangle className="text-yellow-500 w-6 h-6" />;
  return <FaTimesCircle className="text-red-600 w-6 h-6" />;
}

function parseDMARCRecord(record: string) {
  const fields: Record<string, string> = {};
  record.split(";").forEach(part => {
    const [k, ...rest] = part.trim().split("=");
    if (k && rest.length) fields[k.trim()] = rest.join("=").trim();
  });
  return fields;
}

function parseSPFRecord(record: string) {
  return record.split(" ").map(part => part.trim());
}

function getGradeAndScore(dmarcFields: Record<string, string>) {
  let score = 0;
  const badges: string[] = [];
  const dots: { color: string; label: string }[] = [];
  let grade = "F";
  let color = "bg-red-50 text-red-700 border-red-200";
  let icon = <FaTimesCircle className="text-red-600 w-7 h-7" />;
  let message = "High risk: DMARC record is missing or invalid.";
  let dmarcPolicy: 'reject' | 'quarantine' | 'none' | 'no-policy' = 'no-policy';

  // Check DMARC version
  if (dmarcFields.v === "DMARC1") {
    score += 20;
    badges.push("DMARC1 Version");
    dots.push({ color: "bg-green-500", label: "Valid DMARC version" });
  } else {
    dots.push({ color: "bg-red-500", label: "Invalid DMARC version" });
  }

  // Check policy
  if (dmarcFields.p) {
    if (dmarcFields.p === "reject") {
      score += 40;
      badges.push("Reject Policy");
      dots.push({ color: "bg-green-500", label: "Strong policy (reject)" });
      dmarcPolicy = 'reject';
    } else if (dmarcFields.p === "quarantine") {
      score += 30;
      badges.push("Quarantine Policy");
      dots.push({ color: "bg-green-500", label: "Good policy (quarantine)" });
      dmarcPolicy = 'quarantine';
    } else if (dmarcFields.p === "none") {
      score += 10;
      badges.push("None Policy");
      dots.push({ color: "bg-yellow-500", label: "Weak policy (none)" });
      dmarcPolicy = 'none';
    }
  } else {
    dots.push({ color: "bg-red-500", label: "No policy defined" });
  }

  // Check subdomain policy
  if (dmarcFields.sp) {
    if (dmarcFields.sp === "reject") {
      score += 20;
      badges.push("Subdomain Reject");
      dots.push({ color: "bg-green-500", label: "Strong subdomain policy" });
    } else if (dmarcFields.sp === "quarantine") {
      score += 15;
      badges.push("Subdomain Quarantine");
      dots.push({ color: "bg-green-500", label: "Good subdomain policy" });
    }
  }

  // Check reporting
  if (dmarcFields.rua) {
    score += 10;
    badges.push("Aggregate Reports");
    dots.push({ color: "bg-green-500", label: "Aggregate reporting enabled" });
  }
  if (dmarcFields.ruf) {
    score += 10;
    badges.push("Forensic Reports");
    dots.push({ color: "bg-green-500", label: "Forensic reporting enabled" });
  }

  // Calculate grade
  if (score >= 90) {
    grade = "A";
    color = "bg-green-100 text-green-800 border-green-200";
    icon = <FaTrophy className="text-yellow-500 w-7 h-7" />;
    message = "Excellent! DMARC is well configured.";
  } else if (score >= 80) {
    grade = "B";
    color = "bg-primary/10 text-foreground border-primary/20";
    icon = <FaMedal className="text-yellow-500 w-7 h-7" />;
    message = "Good! DMARC is properly configured.";
  } else if (score >= 70) {
    grade = "C";
    color = "bg-yellow-100 text-yellow-800 border-yellow-200";
    icon = <FaCheckCircle className="text-yellow-500 w-7 h-7" />;
    message = "Fair. DMARC needs some improvements.";
  } else if (score >= 50) {
    grade = "D";
    color = "bg-orange-100 text-orange-800 border-orange-200";
    icon = <FaExclamationTriangle className="text-orange-500 w-7 h-7" />;
    message = "Poor. DMARC needs significant improvements.";
  }

  return { score, grade, color, icon, message, badges, dots, dmarcPolicy };
}

function getWarnings(result: any) {
  const warnings: { icon: JSX.Element; color: string; message: string }[] = [];
  if (!result.dmarc) {
    warnings.push({
      icon: <FaExclamationTriangle className="text-red-500 w-4 h-4" />,
      color: "text-red-700 bg-red-50 border-red-200",
      message: "DMARC record is missing. Your domain is vulnerable to spoofing."
    });
  } else if (result.dmarc && /p=none/.test(result.dmarc)) {
    warnings.push({
      icon: <FaInfoCircle className="text-yellow-500 w-4 h-4" />,
      color: "text-yellow-700 bg-yellow-50 border-yellow-200",
      message: "DMARC policy is 'none'. Monitoring only; enforcement is not active."
    });
  }
  if (!result.spf) {
    warnings.push({
      icon: <FaExclamationTriangle className="text-red-500 w-4 h-4" />,
      color: "text-red-700 bg-red-50 border-red-200",
      message: "SPF record is missing. SPF helps prevent unauthorized senders."
    });
  }
  if (!result.dkim || !result.dkim.some((d: any) => d.record)) {
    warnings.push({
      icon: <FaExclamationTriangle className="text-red-500 w-4 h-4" />,
      color: "text-red-700 bg-red-50 border-red-200",
      message: "DKIM record is missing. DKIM helps verify message authenticity."
    });
  } else if (result.dkim && result.dkim.some((d: any) => !d.record)) {
    warnings.push({
      icon: <FaInfoCircle className="text-yellow-500 w-4 h-4" />,
      color: "text-yellow-700 bg-yellow-50 border-yellow-200",
      message: "Some DKIM selectors are missing. Add all recommended selectors."
    });
  }
  if (result.dmarc && result.dmarc.length > 255) {
    warnings.push({
      icon: <FaInfoCircle className="text-yellow-500 w-4 h-4" />,
      color: "text-yellow-700 bg-yellow-50 border-yellow-200",
      message: `DMARC record is ${result.dmarc.length} characters long. DNS TXT records over 255 characters may be truncated or cause issues.`
    });
  }
  return warnings;
}

function getRecommendations(dmarc: string | null | undefined, spf: string | null | undefined, dkimSelectors: string[]) {
  const recommendations: { type: 'warning' | 'info' | 'success'; message: string }[] = [];

  // DMARC recommendations
  if (!dmarc) {
    recommendations.push({
      type: 'warning',
      message: 'Add a DMARC record to protect your domain from email spoofing'
    });
  } else {
    const fields = parseDMARCRecord(dmarc);
    if (fields.p === 'none') {
      recommendations.push({
        type: 'warning',
        message: 'Upgrade your DMARC policy from "none" to "quarantine" or "reject" for better protection'
      });
    }
    if (!fields.rua) {
      recommendations.push({
        type: 'info',
        message: 'Add a DMARC aggregate reporting address (rua) to monitor your email authentication'
      });
    }
  }

  // SPF recommendations
  if (!spf) {
    recommendations.push({
      type: 'warning',
      message: 'Add an SPF record to specify authorized email servers'
    });
  } else {
    const spfFields = parseSPFRecord(spf);
    if (!spfFields.includes('-all')) {
      recommendations.push({
        type: 'info',
        message: 'Consider using "-all" in your SPF record for stricter enforcement'
      });
    }
  }

  // DKIM recommendations
  if (dkimSelectors.length === 0) {
    recommendations.push({
      type: 'warning',
      message: 'Add DKIM records to improve email deliverability and prevent spoofing'
    });
  }

  // Success message if all three are configured
  if (dmarc && spf && dkimSelectors.length > 0) {
    recommendations.push({
      type: 'success',
      message: 'Great job! Your domain has all three email authentication methods configured'
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
      <FaCopy className="mr-2" />
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
}

function RelatedTools() {
  const tools = [
    {
      id: "dmarc-analyzer",
      name: "DMARC Analyzer",
      description: "Analyze your DMARC configuration and get detailed reports",
      icon: <Shield className="h-6 w-6 text-primary" />,
      href: "/tools/dmarc-analyzer",
      color: "bg-secondary dark:bg-primary",
      borderColor: "border-primary/20 dark:border-primary",
      iconBg: "bg-primary/10 dark:bg-primary",
    },
    {
      id: "spf-surveyor",
      name: "SPF Surveyor",
      description: "Validate and troubleshoot your SPF records",
      icon: <Mail className="h-6 w-6 text-primary" />,
      href: "/tools/spf-surveyor",
      color: "bg-green-50 dark:bg-green-950",
      borderColor: "border-green-200 dark:border-green-800",
      iconBg: "bg-green-100 dark:bg-green-900",
    },
    {
      id: "dkim-validator",
      name: "DKIM Validator",
      description: "Verify your DKIM signatures and configuration",
      icon: <Key className="h-6 w-6 text-primary" />,
      href: "/tools/dkim-validator",
      color: "bg-purple-50 dark:bg-purple-950",
      borderColor: "border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-100 dark:bg-purple-900",
    },
  ];

  return (
    <div className="mt-12 mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Related Tools</h2>
        <p className="text-muted-foreground mt-1">Explore more email authentication tools to secure your domain</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.href}
            className={`group relative overflow-hidden rounded-lg border p-5 transition-all hover:shadow-md ${tool.borderColor} ${tool.color}`}
          >
            <div className="flex items-start gap-4">
              <div className={`rounded-full p-2 ${tool.iconBg}`}>{tool.icon}</div>
              <div>
                <h3 className="font-semibold text-lg group-hover:underline">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>
        ))}
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
      const res = await fetch(`/api/dmarc-check?domain=${encodeURIComponent(domain)}`);
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ dmarc: null, spf: null, dkim: [], error: "Error fetching DNS records." });
    } finally {
      setLoading(false);
    }
  }

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 flex items-center gap-1.5">
          <FaShieldAlt className="w-4 h-4 text-primary" />
          About Domain Authentication
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Email authentication helps protect your domain from spoofing and phishing. This tool checks your DMARC, SPF, and DKIM records.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 flex items-center gap-1.5">
          <FaInfoCircle className="w-4 h-4 text-primary" />
          What We Check
        </h3>
        <ul className="text-sm text-gray-500 space-y-2 mt-2">
          <li className="flex items-start gap-2">
            <FaShieldAlt className="w-4 h-4 text-primary mt-0.5" />
            <span>DMARC record and policy</span>
          </li>
          <li className="flex items-start gap-2">
            <FaEnvelope className="w-4 h-4 text-primary mt-0.5" />
            <span>SPF record and mechanisms</span>
          </li>
          <li className="flex items-start gap-2">
            <FaKey className="w-4 h-4 text-primary mt-0.5" />
            <span>DKIM records and selectors</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const dmarcFields = result?.dmarc ? parseDMARCRecord(result.dmarc) : {};
  const spfFields = result?.spf ? parseSPFRecord(result.spf) : [];
  const { score, grade, color, icon, message, badges, dots, dmarcPolicy } = getGradeAndScore(dmarcFields);
  const warnings = getWarnings(dmarcFields);
  const recommendations = getRecommendations(result?.dmarc, result?.spf, result?.dkim.map(d => d.selector) || []);

  return (
    <ToolLayout
      title="DMARC Domain Checker"
      description="Check your domain's email authentication configuration and get actionable recommendations."
      sidebarContent={sidebarContent}
    >
      <Card className="w-full border-0 shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">DMARC Checker</h2>
          </div>

          <form onSubmit={handleCheck} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="domain" className="text-sm font-medium">
                Domain
              </label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Globe className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="domain"
                    type="text"
                    placeholder="yourdomain.com"
                    className="pl-10 h-11 border-gray-200 focus:border-primary focus:ring-ring"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary text-white min-w-[120px]"
                  disabled={loading}
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
        <div className="space-y-6 mt-6">
          {/* DMARC Status */}
          <DMARCStatus policy={dmarcPolicy} />

          {/* Status Card */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FaShieldAlt className="w-6 h-6 text-primary/70" />
                <span className="font-bold text-xl text-gray-900">Status</span>
              </div>
            </div>

            {/* Status Dots */}
            <div className="flex flex-wrap gap-4">
              {dots.map((dot, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${dot.color}`} />
                  <span className="text-sm text-gray-600">{dot.label}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Recommendations Section */}
          {recommendations.length > 0 && (
            <Card className="mt-6" title="Recommendations">
              <ul className="space-y-2">
                {recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaInfoCircle className="w-4 h-4 text-primary mt-0.5" />
                    <span>{rec.message}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Record Cards */}
          <div className="space-y-4">
            {/* DMARC */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="w-6 h-6 text-primary/70" />
                  <span className="font-bold text-xl text-gray-900">DMARC</span>
                </div>
                {result.dmarc ? (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">Valid</span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-500">Missing</span>
                )}
              </div>
              {result.dmarc ? (
                <>
                  <div className="text-gray-500 text-sm mb-2">Policy: <span className="font-semibold text-gray-700">{result.dmarc.match(/p=([a-zA-Z]+)/)?.[0] || "Unknown"}</span></div>
                  <div className="flex items-center gap-2">
                    <pre className="whitespace-pre-wrap break-all text-gray-700 bg-gray-50 rounded p-2 border border-gray-100 text-xs flex-1 font-mono">{result.dmarc}</pre>
                    <CopyButton value={result.dmarc} />
                  </div>
                </>
              ) : (
                <div className="text-gray-400 font-medium">No DMARC record found</div>
              )}
            </Card>

            {/* SPF */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-6 h-6 text-primary/70" />
                  <span className="font-bold text-xl text-gray-900">SPF</span>
                </div>
                {result.spf ? (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">Valid</span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-500">Missing</span>
                )}
              </div>
              {result.spf ? (
                <>
                  <div className="text-gray-500 text-sm mb-2">All mechanisms present</div>
                  <div className="flex items-center gap-2">
                    <pre className="whitespace-pre-wrap break-all text-gray-700 bg-gray-50 rounded p-2 border border-gray-100 text-xs flex-1 font-mono">{result.spf}</pre>
                    <CopyButton value={result.spf} />
                  </div>
                </>
              ) : (
                <div className="text-gray-400 font-medium">No SPF record found</div>
              )}
            </Card>

            {/* DKIM */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FaKey className="w-6 h-6 text-primary/70" />
                  <span className="font-bold text-xl text-gray-900">DKIM</span>
                </div>
                {result.dkim && result.dkim.length > 0 && result.dkim.some(d => d.record) ? (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">Valid</span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-500">Missing</span>
                )}
              </div>
              {result.dkim && result.dkim.length > 0 && result.dkim.some(d => d.record) ? (
                <div className="space-y-3">
                  {result.dkim.filter(d => d.record).map(d => (
                    <div key={d.selector}>
                      <div className="text-gray-500 text-xs mb-1">Selector: <span className="font-semibold text-gray-700">{d.selector}</span></div>
                      <div className="flex items-center gap-2">
                        <pre className="whitespace-pre-wrap break-all text-gray-700 bg-gray-50 rounded p-2 border border-gray-100 text-xs flex-1 font-mono">{d.record as string}</pre>
                        <CopyButton value={d.record as string} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-400 font-medium">No DKIM records found (checked common selectors)</div>
              )}
            </Card>
          </div>
        </div>
      )}

      {/* Related Tools */}
      <RelatedTools />
    </ToolLayout>
  );
} 