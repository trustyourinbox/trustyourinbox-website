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
  let color = "bg-red-50 text-red-700 border-red-200";
  let icon = <FaTimesCircle className="h-7 w-7 text-red-600" />;
  let message = "High risk: DKIM configuration needs improvement.";

  // Check version
  if (fields.v === "DKIM1") {
    score += 1;
    dots.push({ color: "bg-green-500", message: "Valid DKIM version" });
  } else {
    dots.push({
      color: "bg-red-500",
      message: "Invalid or missing DKIM version",
    });
  }

  // Check key type
  if (fields.k === "rsa") {
    score += 1;
    dots.push({ color: "bg-green-500", message: "RSA key type" });
  } else {
    dots.push({ color: "bg-red-500", message: "Invalid or missing key type" });
  }

  // Check key length
  if (keyLength) {
    if (keyLength >= 2048) {
      score += 1;
      dots.push({ color: "bg-green-500", message: "Strong key (2048+ bits)" });
    } else if (keyLength >= 1024) {
      score += 1;
      dots.push({
        color: "bg-yellow-500",
        message: "Standard key (1024 bits)",
      });
    } else {
      dots.push({ color: "bg-red-500", message: "Weak key (<1024 bits)" });
    }
  } else {
    dots.push({
      color: "bg-red-500",
      message: "Invalid or missing public key",
    });
  }

  // Check testing mode
  if (fields.t === "y") {
    dots.push({ color: "bg-yellow-500", message: "Testing mode enabled" });
  } else {
    score += 1;
    dots.push({ color: "bg-green-500", message: "Testing mode disabled" });
  }

  // Check hash algorithms
  if (fields.h?.includes("sha256")) {
    score += 1;
    dots.push({ color: "bg-green-500", message: "SHA-256 support" });
  } else {
    dots.push({ color: "bg-red-500", message: "Missing SHA-256 support" });
  }

  // Calculate color based on score
  if (score >= 4) {
    color = "bg-green-100 text-green-800 border-green-200";
    icon = <FaTrophy className="h-7 w-7 text-yellow-500" />;
    message = "Excellent! DKIM is well configured.";
  } else if (score >= 3) {
    color = "bg-yellow-100 text-yellow-800 border-yellow-200";
    icon = <FaCheckCircle className="h-7 w-7 text-yellow-500" />;
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
        color: "bg-red-50 text-red-700 border-red-200",
        icon: <FaTimesCircle className="h-7 w-7 text-red-600" />,
        message: "High risk: DKIM configuration needs improvement.",
      };
  const recommendations = record
    ? getRecommendations(fields, keyLength, score)
    : [];

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h3 className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
          <FaShieldAlt className="h-4 w-4 text-primary" />
          About DKIM
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          DKIM (DomainKeys Identified Mail) is an email authentication method
          that allows the receiver to verify that an email was indeed sent and
          authorized by the owner of the domain.
        </p>
      </div>

      <div>
        <h3 className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
          <FaInfoCircle className="h-4 w-4 text-primary" />
          What We Check
        </h3>
        <ul className="mt-2 space-y-2 text-sm text-gray-500">
          <li className="flex items-start gap-2">
            <FaKey className="mt-0.5 h-4 w-4 text-primary" />
            <span>DKIM record version and format</span>
          </li>
          <li className="flex items-start gap-2">
            <FaKey className="mt-0.5 h-4 w-4 text-primary" />
            <span>Public key presence and length</span>
          </li>
          <li className="flex items-start gap-2">
            <FaKey className="mt-0.5 h-4 w-4 text-primary" />
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
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">DKIM Inspector</h2>
          </div>

          <form onSubmit={handleCheck} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                    className="h-11 border-gray-200 pl-10 focus:border-primary focus:ring-ring"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    required
                    pattern="^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="selector" className="text-sm font-medium">
                  DKIM Selector
                </label>
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaFileAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="selector"
                    type="text"
                    placeholder="selector (e.g., google, default)"
                    className="h-11 border-gray-200 pl-10 focus:border-primary focus:ring-ring"
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
                className="min-w-[120px] bg-primary text-white hover:bg-primary"
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
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaShieldAlt className="h-6 w-6 text-primary/70" />
                <span className="text-xl font-bold text-gray-900">Status</span>
              </div>
              {icon}
            </div>

            <p className="mb-4 text-sm">{message}</p>

            {/* Status Dots */}
            <div className="flex flex-wrap gap-4">
              {dots.map((dot, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${dot.color}`} />
                  <span className="text-sm text-gray-600">{dot.message}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Recommendations Section */}
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

          {/* DKIM Record Card */}
          <Card>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaKey className="h-6 w-6 text-primary/70" />
                <span className="text-xl font-bold text-gray-900">
                  DKIM Record
                </span>
                {keyLength && (
                  <span
                    className={`ml-2 rounded-full border px-2 py-0.5 text-xs font-semibold ${keyLength < 1024 ? "border-red-200 bg-red-100 text-red-800" : "border-green-200 bg-green-100 text-green-800"}`}
                    title="Bit length of the DKIM public key"
                  >
                    {keyLength} bits
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <pre className="flex-1 whitespace-pre-wrap break-all rounded border border-gray-100 bg-gray-50 p-2 text-xs text-gray-800">
                {record}
              </pre>
              <CopyButton value={record} />
            </div>
          </Card>

          {/* Parsed Fields */}
          <Card>
            <h3 className="mb-4 font-semibold text-gray-900">Parsed Fields</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {Object.entries(fields).map(([k, v]) => (
                <div key={k} className="flex items-center gap-2">
                  <span className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-primary">
                    {k}
                  </span>
                  <span className="break-all text-xs text-gray-800">{v}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* DKIM Tag Legend */}
          <Card>
            <h3 className="mb-4 font-semibold text-gray-900">
              DKIM Tag Legend
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {DKIM_TAG_LEGEND.map(({ tag, name, desc }) => (
                <div key={tag} className="flex items-start gap-3">
                  <span className="mt-0.5 rounded bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                    {tag}
                  </span>
                  <div>
                    <span className="font-semibold text-gray-900">{name}</span>
                    <span className="block text-sm text-gray-600">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {error && (
        <Alert variant="error" className="mt-6">
          {error}
        </Alert>
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
            href="/tools/dmarc-analyzer"
            className="group relative overflow-hidden rounded-lg border border-primary/20 bg-secondary p-5 transition-all hover:shadow-md dark:border-primary dark:bg-primary"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2 dark:bg-primary">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:underline">
                  DMARC Analyzer
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Analyze your DMARC configuration and get detailed reports
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>

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
            href="/tools/domain-security-checker"
            className="group relative overflow-hidden rounded-lg border border-purple-200 bg-purple-50 p-5 transition-all hover:shadow-md dark:border-purple-800 dark:bg-purple-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:underline">
                  Domain Security Checker
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Check your domain&apos;s overall email security configuration
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
