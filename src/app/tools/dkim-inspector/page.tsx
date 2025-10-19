"use client";

import { useState } from "react";
import {
  FaKey,
  FaCopy,
  FaInfoCircle,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle,
  FaTrophy,
  FaServer,
  FaFileAlt,
} from "react-icons/fa";
import { Buffer } from "buffer";
// @ts-expect-error: asn1.js has no types
import asn1 from "asn1.js";
import { ToolLayout, Button, Input, Card, Alert } from "@/components/ui";
import Link from "next/link";
import { Shield, Mail, Key, ArrowRight, Globe } from "lucide-react";

function parseDKIMRecord(record: string) {
  // Parse DKIM record into key-value pairs
  const fields: Record<string, string> = {};
  record.split(";").forEach((part) => {
    const [k, ...rest] = part.trim().split("=");
    if (k && rest.length) fields[k.trim()] = rest.join("=").trim();
  });
  return fields;
}

function getKeyLength(p: string | undefined): number | null {
  if (!p) return null;
  try {
    const der = Buffer.from(p, "base64");
    // ASN.1 definition for SubjectPublicKeyInfo (RFC 5280)
    const SubjectPublicKeyInfo = asn1.define(
      "SubjectPublicKeyInfo",
      function (this: any) {
        // https://tools.ietf.org/html/rfc5280#section-4.1
        this.seq().obj(
          this.key("algorithm")
            .seq()
            .obj(
              this.key("algorithm").objid(),
              this.key("parameters").optional().any()
            ),
          this.key("subjectPublicKey").bitstr()
        );
      }
    );
    const info = SubjectPublicKeyInfo.decode(der, "der");
    // Now decode the RSAPublicKey
    const RSAPublicKey = asn1.define("RSAPublicKey", function (this: any) {
      this.seq().obj(
        this.key("modulus").int(),
        this.key("publicExponent").int()
      );
    });
    const pubKeyDer = info.subjectPublicKey.data;
    const rsa = RSAPublicKey.decode(pubKeyDer, "der");
    // modulus is a BN.js instance; get bitLength
    return rsa.modulus.bitLength();
  } catch {
    return null;
  }
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

const DKIM_TAG_LEGEND: { tag: string; name: string; desc: string }[] = [
  { tag: "v", name: "Version", desc: "The DKIM version. Should be DKIM1." },
  { tag: "k", name: "Key Type", desc: "The key type. Usually 'rsa'." },
  {
    tag: "p",
    name: "Public Key",
    desc: "The base64-encoded public key used to verify signatures.",
  },
  {
    tag: "t",
    name: "Flags",
    desc: "Optional flags. 'y' means testing mode, 's' means strict domain.",
  },
  {
    tag: "h",
    name: "Hash Algorithms",
    desc: "Acceptable hash algorithms (e.g., sha256).",
  },
  {
    tag: "n",
    name: "Notes",
    desc: "Notes for the record (optional, informational).",
  },
  {
    tag: "g",
    name: "Granularity",
    desc: "Acceptable local-parts for signing addresses (rarely used).",
  },
  {
    tag: "s",
    name: "Service Type",
    desc: "Service type (should be '*', rarely used).",
  },
];

function getGradeAndScore(
  fields: Record<string, string>,
  keyLength: number | null
) {
  let score = 0;
  const dots: { color: string; message: string }[] = [];
  let color = "bg-destructive/10 text-destructive border-destructive/20";
  let icon = <FaTimesCircle className="text-destructive h-7 w-7" />;
  let message = "High risk: DKIM configuration needs improvement.";

  // Check version
  if (fields.v === "DKIM1") {
    score += 1;
    dots.push({ color: "bg-success", message: "Valid DKIM version" });
  } else {
    dots.push({
      color: "bg-destructive",
      message: "Invalid or missing DKIM version",
    });
  }

  // Check key type
  if (fields.k === "rsa") {
    score += 1;
    dots.push({ color: "bg-success", message: "RSA key type" });
  } else {
    dots.push({
      color: "bg-destructive",
      message: "Invalid or missing key type",
    });
  }

  // Check key length
  if (keyLength) {
    if (keyLength >= 2048) {
      score += 1;
      dots.push({ color: "bg-success", message: "Strong key (2048+ bits)" });
    } else if (keyLength >= 1024) {
      score += 1;
      dots.push({
        color: "bg-warning",
        message: "Standard key (1024 bits)",
      });
    } else {
      dots.push({ color: "bg-destructive", message: "Weak key (<1024 bits)" });
    }
  } else {
    dots.push({
      color: "bg-destructive",
      message: "Invalid or missing public key",
    });
  }

  // Check testing mode
  if (fields.t === "y") {
    dots.push({ color: "bg-warning", message: "Testing mode enabled" });
  } else {
    score += 1;
    dots.push({ color: "bg-success", message: "Testing mode disabled" });
  }

  // Check hash algorithms
  if (fields.h?.includes("sha256")) {
    score += 1;
    dots.push({ color: "bg-success", message: "SHA-256 support" });
  } else {
    dots.push({ color: "bg-destructive", message: "Missing SHA-256 support" });
  }

  // Calculate color based on score
  if (score >= 4) {
    color = "bg-success/10 text-success border-success/20";
    icon = <FaTrophy className="text-warning h-7 w-7" />;
    message = "Excellent! DKIM is well configured.";
  } else if (score >= 3) {
    color = "bg-warning/10 text-warning border-warning/20";
    icon = <FaCheckCircle className="text-warning h-7 w-7" />;
    message = "Fair. DKIM needs some improvements.";
  }

  return { score, dots, color, icon, message };
}

function getRecommendations(
  fields: Record<string, string>,
  keyLength: number | null,
  score: number
) {
  const recommendations: {
    type: "warning" | "info" | "success";
    message: string;
  }[] = [];

  // Version recommendations
  if (fields.v !== "DKIM1") {
    recommendations.push({
      type: "warning",
      message:
        "Update to DKIM version 1 (v=DKIM1) for better compatibility and security.",
    });
  }

  // Key length recommendations
  if (keyLength) {
    if (keyLength < 1024) {
      recommendations.push({
        type: "warning",
        message:
          "Upgrade to at least a 1024-bit key for better security. 2048-bit keys are recommended.",
      });
    } else if (keyLength < 2048) {
      recommendations.push({
        type: "info",
        message: "Consider upgrading to a 2048-bit key for enhanced security.",
      });
    }
  }

  // Testing mode recommendations
  if (fields.t === "y") {
    recommendations.push({
      type: "info",
      message:
        "Remove testing mode (t=y) once you've verified DKIM is working correctly.",
    });
  }

  // Hash algorithm recommendations
  if (!fields.h?.includes("sha256")) {
    recommendations.push({
      type: "warning",
      message:
        "Add SHA-256 (sha256) to your hash algorithms for better security.",
    });
  }

  // General recommendations based on score (using 5-dot system)
  if (score >= 4) {
    recommendations.push({
      type: "success",
      message:
        "Your DKIM configuration is strong. Keep monitoring for any changes in best practices.",
    });
  } else if (score >= 3) {
    recommendations.push({
      type: "info",
      message:
        "Your DKIM configuration is acceptable but could be improved for better security.",
    });
  } else {
    recommendations.push({
      type: "warning",
      message:
        "Your DKIM configuration needs improvements. Review the recommendations above.",
    });
  }

  return recommendations;
}

export default function DKIMInspectorPage() {
  const [domain, setDomain] = useState("");
  const [selector, setSelector] = useState("");
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRecord(null);
    try {
      const res = await fetch(
        `/api/dkim-inspect?domain=${encodeURIComponent(domain)}&selector=${encodeURIComponent(selector)}`
      );
      const data = await res.json();
      if (!res.ok || !data.record) {
        setError(
          data.error || "No DKIM record found for this selector/domain."
        );
      } else {
        setRecord(data.record);
      }
    } catch (err) {
      setError("Error fetching DKIM record.");
    } finally {
      setLoading(false);
    }
  }

  const fields = record ? parseDKIMRecord(record) : {};
  const keyLength = fields.p ? getKeyLength(fields.p) : null;
  const { score, dots, color, icon, message } = record
    ? getGradeAndScore(fields, keyLength)
    : {
        score: 0,
        dots: [],
        color: "bg-destructive/10 text-destructive border-destructive/20",
        icon: <FaTimesCircle className="text-destructive h-7 w-7" />,
        message: "High risk: DKIM configuration needs improvement.",
      };
  const recommendations = record
    ? getRecommendations(fields, keyLength, score)
    : [];

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-foreground flex items-center gap-1.5 text-sm font-medium">
          <FaShieldAlt className="text-primary h-4 w-4" />
          About DKIM
        </h3>
        <p className="text-muted-foreground mt-2 text-sm">
          DKIM (DomainKeys Identified Mail) is an email authentication method
          that allows the receiver to verify that an email was indeed sent and
          authorized by the owner of the domain.
        </p>
      </div>

      <div>
        <h3 className="text-foreground flex items-center gap-1.5 text-sm font-medium">
          <FaInfoCircle className="text-primary h-4 w-4" />
          What We Check
        </h3>
        <ul className="text-muted-foreground mt-2 space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <FaKey className="text-primary mt-0.5 h-4 w-4" />
            <span>DKIM record version and format</span>
          </li>
          <li className="flex items-start gap-2">
            <FaKey className="text-primary mt-0.5 h-4 w-4" />
            <span>Public key presence and length</span>
          </li>
          <li className="flex items-start gap-2">
            <FaKey className="text-primary mt-0.5 h-4 w-4" />
            <span>Testing mode flags</span>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <ToolLayout
      title="DKIM Inspector"
      description="Inspect and validate DKIM records for your domain. Enter a domain and selector to get started."
      sidebarContent={sidebarContent}
    >
      <Card className="w-full border-0 shadow-lg">
        <div className="p-6">
          <div className="mb-6 flex items-center gap-2">
            <Shield className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">DKIM Inspector</h2>
          </div>

          <form onSubmit={handleCheck} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

              <div className="space-y-2">
                <label
                  htmlFor="selector"
                  className="mb-2 block text-sm font-medium"
                >
                  DKIM Selector
                </label>
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaFileAlt className="text-muted-foreground h-5 w-5" />
                  </div>
                  <Input
                    id="selector"
                    type="text"
                    placeholder="selector (e.g., google, default)"
                    className="focus:border-primary focus:ring-ring border-border h-11 pl-10"
                    value={selector}
                    onChange={(e) => setSelector(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                size="lg"
                className="to-accent-hover from-primary min-w-[120px] gap-2 bg-gradient-to-r text-white hover:opacity-90"
                disabled={loading || !domain || !selector}
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
                    Inspecting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Inspect <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </Card>

      {record && (
        <div className="mt-6 space-y-6">
          {/* Status Card */}
          <Card className={color}>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-primary/70 h-6 w-6" />
                  <span className="text-foreground text-xl font-bold">
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
                    <span className="text-muted-foreground text-sm">
                      {dot.message}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Recommendations Section */}
          <Card>
            <div className="p-6">
              <h3 className="text-foreground mb-3 font-semibold">
                Recommendations
              </h3>
              <div className="space-y-3">
                {recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 rounded-lg border p-3 ${
                      rec.type === "warning"
                        ? "border-destructive/20"
                        : rec.type === "info"
                          ? "border-primary/20"
                          : "border-success/20"
                    }`}
                  >
                    <div
                      className={`mt-0.5 ${
                        rec.type === "warning"
                          ? "text-destructive"
                          : rec.type === "info"
                            ? "text-primary"
                            : "text-success"
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
                          ? "text-destructive"
                          : rec.type === "info"
                            ? "text-primary"
                            : "text-success"
                      }`}
                    >
                      {rec.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* DKIM Record Card */}
          <Card>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaKey className="text-primary/70 h-6 w-6" />
                  <span className="text-foreground text-xl font-bold">
                    DKIM Record
                  </span>
                  {keyLength && (
                    <span
                      className={`ml-2 rounded-full border px-2 py-0.5 text-xs font-semibold ${keyLength < 1024 ? "border-destructive/20 bg-destructive/10 text-destructive" : "border-success/20 bg-success/10 text-success"}`}
                      title="Bit length of the DKIM public key"
                    >
                      {keyLength} bits
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <pre className="border-border bg-muted text-foreground flex-1 rounded border p-2 text-xs break-all whitespace-pre-wrap">
                  {record}
                </pre>
                <CopyButton value={record} />
              </div>
            </div>
          </Card>

          {/* Parsed Fields */}
          <Card>
            <div className="p-6">
              <h3 className="text-foreground mb-4 font-semibold">
                Parsed Fields
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {Object.entries(fields).map(([k, v]) => (
                  <div key={k} className="flex items-center gap-2">
                    <span className="bg-secondary text-primary rounded px-2 py-0.5 font-mono text-xs">
                      {k}
                    </span>
                    <span className="text-foreground text-xs break-all">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* DKIM Tag Legend */}
          <Card>
            <div className="p-6">
              <h3 className="text-foreground mb-4 font-semibold">
                DKIM Tag Legend
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {DKIM_TAG_LEGEND.map(({ tag, name, desc }) => (
                  <div key={tag} className="flex items-start gap-3">
                    <span className="bg-primary/10 text-primary mt-0.5 rounded px-2 py-0.5 font-mono text-xs">
                      {tag}
                    </span>
                    <div>
                      <span className="text-foreground font-semibold">
                        {name}
                      </span>
                      <span className="text-muted-foreground block text-sm">
                        {desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}

      {error && (
        <Alert variant="error" className="mt-6">
          {error}
        </Alert>
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
                  Validate and troubleshoot SPF records
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
                <Key className="text-primary h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                  Domain Security Checker
                </h3>
                <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                  Check your domain&apos;s overall email security configuration
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </ToolLayout>
  );
}
