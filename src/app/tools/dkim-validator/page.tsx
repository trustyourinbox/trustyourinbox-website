"use client";

import { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaKey,
  FaCopy,
  FaInfoCircle,
  FaTrophy,
  FaMedal,
  FaShieldAlt,
  FaServer,
  FaFileAlt,
} from "react-icons/fa";
import { Buffer } from "buffer";
// @ts-expect-error: asn1.js has no types
import asn1 from "asn1.js";
import { ToolLayout, Button, Input, Card, Alert } from "@/components/ui";
import { Shield, Mail, Key, ArrowRight } from "lucide-react";
import Link from "next/link";

function parseDKIMRecord(record: string) {
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
    const SubjectPublicKeyInfo = asn1.define(
      "SubjectPublicKeyInfo",
      function (this: any) {
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
    const RSAPublicKey = asn1.define("RSAPublicKey", function (this: any) {
      this.seq().obj(
        this.key("modulus").int(),
        this.key("publicExponent").int()
      );
    });
    const pubKeyDer = info.subjectPublicKey.data;
    const rsa = RSAPublicKey.decode(pubKeyDer, "der");
    return rsa.modulus.bitLength();
  } catch {
    return null;
  }
}

function getGradeAndScore(fields: Record<string, string>) {
  let score = 0;
  const badges: string[] = [];
  const dots: { color: string; label: string }[] = [];

  // Check version
  if (fields.v === "DKIM1") {
    score += 40;
    badges.push("Valid Version");
    dots.push({ color: "bg-green-500", label: "Valid DKIM version" });
  } else {
    badges.push("Invalid Version");
    dots.push({ color: "bg-red-500", label: "Invalid DKIM version" });
  }

  // Check key type
  if (fields.k === "rsa" || !fields.k) {
    score += 20;
    badges.push("RSA Key");
    dots.push({ color: "bg-green-500", label: "RSA key type" });
  } else {
    dots.push({ color: "bg-red-500", label: "Non-RSA key type" });
  }

  // Check public key
  if (fields.p && fields.p.length > 200) {
    score += 30;
    badges.push("Public Key Present");
    dots.push({ color: "bg-green-500", label: "Strong public key" });
  } else {
    dots.push({ color: "bg-red-500", label: "Weak or missing public key" });
  }

  // Check testing mode
  if (!fields.t) {
    score += 10;
    badges.push("No Testing Flag");
    dots.push({ color: "bg-green-500", label: "Production mode" });
  } else if (fields.t.includes("y")) {
    badges.push("Testing Mode");
    dots.push({ color: "bg-yellow-500", label: "Testing mode enabled" });
  }

  // Calculate rating (1-5 dots)
  let rating = 1;
  if (score >= 90) rating = 5;
  else if (score >= 80) rating = 4;
  else if (score >= 70) rating = 3;
  else if (score >= 60) rating = 2;

  return { score, rating, badges, dots };
}

function getWarnings(fields: Record<string, string>) {
  const warnings: {
    icon: React.ReactElement;
    color: string;
    message: string;
  }[] = [];
  if (!fields.v || fields.v !== "DKIM1") {
    warnings.push({
      icon: <FaTimesCircle className="h-4 w-4 text-red-500" />,
      color: "text-red-700 bg-red-50 border-red-200",
      message: "Missing or invalid version (v=DKIM1) field.",
    });
  }
  if (!fields.p) {
    warnings.push({
      icon: <FaTimesCircle className="h-4 w-4 text-red-500" />,
      color: "text-red-700 bg-red-50 border-red-200",
      message: "Missing public key (p) field.",
    });
  } else if (fields.p.length < 200) {
    warnings.push({
      icon: <FaExclamationTriangle className="h-4 w-4 text-yellow-500" />,
      color: "text-yellow-700 bg-yellow-50 border-yellow-200",
      message: "Public key is unusually short. Should be at least 1024 bits.",
    });
  }
  if (fields.t && fields.t.includes("y")) {
    warnings.push({
      icon: <FaInfoCircle className="h-4 w-4 text-yellow-500" />,
      color: "text-yellow-700 bg-yellow-50 border-yellow-200",
      message:
        "Testing mode is enabled (t=y). DKIM signature may not be enforced.",
    });
  }
  return warnings;
}

function getRecommendations(
  fields: Record<string, string>,
  keyLength: number | null
) {
  const recommendations: {
    type: "warning" | "info" | "success";
    message: string;
  }[] = [];

  // Version check
  if (!fields.v || fields.v !== "DKIM1") {
    recommendations.push({
      type: "warning",
      message:
        "Update to DKIM version 1 (v=DKIM1) for better compatibility and security.",
    });
  }

  // Key type check
  if (fields.k && fields.k !== "rsa") {
    recommendations.push({
      type: "warning",
      message:
        "Use RSA key type for maximum compatibility with email providers.",
    });
  }

  // Key length check
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

  // Testing mode check
  if (fields.t && fields.t.includes("y")) {
    recommendations.push({
      type: "info",
      message:
        "Remove testing mode (t=y) once you've verified DKIM is working correctly.",
    });
  }

  // Hash algorithms check
  if (!fields.h || !fields.h.includes("sha256")) {
    recommendations.push({
      type: "warning",
      message:
        "Add SHA-256 (sha256) to your hash algorithms for better security.",
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

export default function DKIMValidatorPage() {
  const [input, setInput] = useState("");
  const [fields, setFields] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleValidate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const parsed = parseDKIMRecord(input);
      setFields(parsed);
    } catch (err) {
      setError("Invalid DKIM record format. Please check your input.");
    }
    setLoading(false);
  }

  const getStatusColor = (rating: number) => {
    switch (rating) {
      case 5:
        return "text-green-600";
      case 4:
        return "text-primary";
      case 3:
        return "text-yellow-600";
      case 2:
        return "text-orange-600";
      default:
        return "text-red-600";
    }
  };

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h3 className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
          <FaShieldAlt className="text-primary h-4 w-4" />
          About DKIM
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          DKIM (DomainKeys Identified Mail) adds a digital signature to your
          emails, allowing recipients to verify the message hasn&apos;t been
          tampered with.
        </p>
      </div>

      <div>
        <h3 className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
          <FaInfoCircle className="text-primary h-4 w-4" />
          Common Tags
        </h3>
        <ul className="mt-2 space-y-2 text-sm text-gray-500">
          {DKIM_TAG_LEGEND.slice(0, 5).map(({ tag, name, desc }) => (
            <li key={tag} className="flex items-start gap-2">
              <code className="text-primary rounded bg-gray-100 px-1.5 py-0.5">
                {tag}=
              </code>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <ToolLayout
      title="DKIM Validator"
      description="Validate your DKIM record and get detailed analysis of your configuration."
      sidebarContent={sidebarContent}
    >
      <Card className="w-full border-0 shadow-lg">
        <div className="p-6">
          <div className="mb-6 flex items-center gap-2">
            <Shield className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">DKIM Validator</h2>
          </div>

          <form onSubmit={handleValidate} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="dkim" className="text-sm font-medium">
                DKIM Record
              </label>
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaFileAlt className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="dkim"
                  type="text"
                  placeholder="v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA..."
                  className="focus:border-primary focus:ring-ring h-11 border-gray-200 pl-10"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary min-w-[120px] text-white"
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
                    Validating...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Validate <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </Card>

      {fields && (
        <div className="mt-6 space-y-6">
          {/* Rating and Score Card */}
          <Card>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 rounded-full ${
                        i < getGradeAndScore(fields).rating
                          ? "bg-primary"
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    DKIM Configuration Score
                  </h3>
                  <p className="text-sm text-gray-500">
                    Based on best practices and security standards
                  </p>
                </div>
              </div>
              <div className="text-primary text-3xl font-bold">
                {getGradeAndScore(fields).score}%
              </div>
            </div>
          </Card>

          {/* Warnings Card */}
          {getWarnings(fields).length > 0 && (
            <Card>
              <div className="space-y-4">
                {getWarnings(fields).map((warning, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 rounded-lg p-3 ${warning.color}`}
                  >
                    {warning.icon}
                    <p className="text-sm">{warning.message}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Recommendations Card */}
          {getRecommendations(fields, getKeyLength(fields.p)).length > 0 && (
            <Card>
              <div className="space-y-4">
                {getRecommendations(fields, getKeyLength(fields.p)).map(
                  (rec, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FaInfoCircle className="text-primary mt-0.5 h-4 w-4" />
                      <span>{rec.message}</span>
                    </div>
                  )
                )}
              </div>
            </Card>
          )}
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
            href="/tools/spf-surveyor"
            className="group relative overflow-hidden rounded-lg border border-green-200 bg-green-50 p-5 transition-all hover:shadow-md dark:border-green-800 dark:bg-green-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                <Mail className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:underline">
                  SPF Surveyor
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  Validate and troubleshoot your SPF records
                </p>
              </div>
            </div>
            <div className="bg-primary absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"></div>
          </Link>

          <Link
            href="/tools/dmarc-subdomain-policy-checker"
            className="group relative overflow-hidden rounded-lg border border-purple-200 bg-purple-50 p-5 transition-all hover:shadow-md dark:border-purple-800 dark:bg-purple-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                <Key className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:underline">
                  DMARC Subdomain Policy Checker
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  Check DMARC policy coverage across your subdomains
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
