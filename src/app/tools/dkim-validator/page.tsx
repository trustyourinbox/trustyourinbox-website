"use client";

import { useState } from "react";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Key,
  Copy,
  Info,
  Trophy,
  Award,
  Shield,
  Server,
  FileText,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Buffer } from "buffer";
// @ts-expect-error: asn1.js has no types
import asn1 from "asn1.js";
import { ToolLayout, Button, Input, Card, Alert } from "@/components/ui";
import FAQSchema from "@/components/FAQSchema";
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
    dots.push({ color: "bg-success", label: "Valid DKIM version" });
  } else {
    badges.push("Invalid Version");
    dots.push({ color: "bg-destructive", label: "Invalid DKIM version" });
  }

  // Check key type
  if (fields.k === "rsa" || !fields.k) {
    score += 20;
    badges.push("RSA Key");
    dots.push({ color: "bg-success", label: "RSA key type" });
  } else {
    dots.push({ color: "bg-destructive", label: "Non-RSA key type" });
  }

  // Check public key
  if (fields.p && fields.p.length > 200) {
    score += 30;
    badges.push("Public Key Present");
    dots.push({ color: "bg-success", label: "Strong public key" });
  } else {
    dots.push({ color: "bg-destructive", label: "Weak or missing public key" });
  }

  // Check testing mode
  if (!fields.t) {
    score += 10;
    badges.push("No Testing Flag");
    dots.push({ color: "bg-success", label: "Production mode" });
  } else if (fields.t.includes("y")) {
    badges.push("Testing Mode");
    dots.push({ color: "bg-warning", label: "Testing mode enabled" });
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
      icon: <XCircle className="text-destructive h-4 w-4" />,
      color: "text-destructive bg-destructive/10 border-destructive/20",
      message: "Missing or invalid version (v=DKIM1) field.",
    });
  }
  if (!fields.p) {
    warnings.push({
      icon: <XCircle className="text-destructive h-4 w-4" />,
      color: "text-destructive bg-destructive/10 border-destructive/20",
      message: "Missing public key (p) field.",
    });
  } else if (fields.p.length < 200) {
    warnings.push({
      icon: <AlertTriangle className="text-warning h-4 w-4" />,
      color: "text-warning bg-warning/10 border-warning/20",
      message: "Public key is unusually short. Should be at least 1024 bits.",
    });
  }
  if (fields.t && fields.t.includes("y")) {
    warnings.push({
      icon: <Info className="text-warning h-4 w-4" />,
      color: "text-warning bg-warning/10 border-warning/20",
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
      <Copy className="mr-2" />
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

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-foreground flex items-center gap-1.5 text-sm font-medium">
          <Shield className="text-primary h-4 w-4" />
          About DKIM
        </h3>
        <p className="text-muted-foreground mt-2 text-sm">
          DKIM (DomainKeys Identified Mail) adds a digital signature to your
          emails, allowing recipients to verify the message hasn&apos;t been
          tampered with.
        </p>
      </div>

      <div>
        <h3 className="text-foreground flex items-center gap-1.5 text-sm font-medium">
          <Info className="text-primary h-4 w-4" />
          Common Tags
        </h3>
        <ul className="text-muted-foreground mt-2 space-y-2 text-sm">
          {DKIM_TAG_LEGEND.slice(0, 5).map(({ tag, name, desc }) => (
            <li key={tag} className="flex items-start gap-2">
              <code className="text-primary bg-muted rounded px-1.5 py-0.5">
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
              <label htmlFor="dkim" className="mb-2 block text-sm font-medium">
                DKIM Record
              </label>
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FileText className="text-muted-foreground h-5 w-5" />
                </div>
                <Input
                  id="dkim"
                  type="text"
                  placeholder="v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA..."
                  className="focus:border-primary focus:ring-ring border-border h-11 pl-10"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                size="lg"
                className="to-accent-hover from-primary min-w-[120px] gap-2 bg-gradient-to-r text-white hover:opacity-90"
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
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-foreground font-medium">
                    DKIM Configuration Score
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Based on best practices and security standards
                  </p>
                  <div className="mt-2 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-2 rounded-full ${
                          i < getGradeAndScore(fields).rating
                            ? "bg-primary"
                            : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-primary text-3xl font-bold">
                  {getGradeAndScore(fields).score}%
                </div>
              </div>
            </div>
          </Card>

          {/* Warnings Card */}
          {getWarnings(fields).length > 0 && (
            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-4 text-lg font-semibold">
                  Warnings
                </h3>
                <div className="space-y-3">
                  {getWarnings(fields).map((warning, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 rounded-lg px-3 py-2.5 ${warning.color}`}
                    >
                      {warning.icon}
                      <p className="text-sm">{warning.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {/* Recommendations Card */}
          {getRecommendations(fields, getKeyLength(fields.p)).length > 0 && (
            <Card>
              <div className="p-6">
                <h3 className="text-foreground mb-4 text-lg font-semibold">
                  Recommendations
                </h3>
                <div className="space-y-4">
                  {getRecommendations(fields, getKeyLength(fields.p)).map(
                    (rec, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Info className="text-primary mt-0.5 h-4 w-4" />
                        <span>{rec.message}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </Card>
          )}
        </div>
      )}

      {/* FAQ Schema for SEO */}
      <FAQSchema
        faqs={[
          {
            question: "What is DKIM?",
            answer:
              "DKIM (DomainKeys Identified Mail) is an email authentication method that uses cryptographic signatures to verify that an email message was sent by an authorized server and wasn't altered in transit. It adds a digital signature to the email header using a private key, which receiving servers verify using the public key published in your DNS records.",
          },
          {
            question: "How do I check my DKIM record?",
            answer:
              "You can check your DKIM record using our free DKIM Validator tool above. You'll need your domain name and DKIM selector (usually 'default', 'google', or 'k1'). We'll query your DNS at selector._domainkey.yourdomain.com to retrieve and validate your DKIM public key, checking for common issues like missing records, syntax errors, or weak key lengths.",
          },
          {
            question: "What is a DKIM selector?",
            answer:
              "A DKIM selector is a unique identifier that allows you to have multiple DKIM keys for the same domain. It's part of the DNS record name (selector._domainkey.domain.com) and appears in the DKIM-Signature header of signed emails. Common selectors include 'default', 'google', 'k1', or custom names. You can have different selectors for different email services or servers.",
          },
          {
            question: "What key length should I use for DKIM?",
            answer:
              "For DKIM, use at least 1024-bit RSA keys, though 2048-bit keys are recommended for better security. Keys shorter than 1024 bits are considered weak and may be rejected by some email receivers. While 4096-bit keys offer more security, they can cause DNS record size issues and aren't widely necessary. 2048-bit provides the best balance of security and compatibility.",
          },
          {
            question: "Why is my DKIM record failing validation?",
            answer:
              "Common DKIM validation failures include: no DKIM record published in DNS, incorrect selector name, syntax errors in the DNS record, missing required tags (v=DKIM1; k=rsa; p=publickey), key size too small (<1024 bits), or DNS propagation delays after recent changes. Our DKIM Validator identifies the specific issue and provides recommendations to fix it.",
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
            Common questions about DKIM validation
          </p>
        </div>

        <div className="space-y-4">
          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              What is DKIM?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              DKIM is an email authentication method using cryptographic
              signatures to verify emails weren&apos;t altered and came from
              authorized servers. It adds a digital signature verified by
              receiving servers.
            </p>
          </details>

          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              What is a DKIM selector?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              A DKIM selector is a unique identifier allowing multiple DKIM keys
              per domain. It&apos;s part of the DNS record name
              (selector._domainkey.domain.com). Common selectors:
              &apos;default&apos;, &apos;google&apos;, &apos;k1&apos;.
            </p>
          </details>

          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              What key length should I use for DKIM?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              Use 2048-bit RSA keys for DKIM (recommended). Minimum 1024-bit,
              though keys under 1024 are weak. 2048-bit provides best
              security/compatibility balance.
            </p>
          </details>
        </div>
      </div>

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
            href="/tools/dmarc-subdomain-policy-checker"
            className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
                <Key className="text-primary h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                  DMARC Subdomain Policy Checker
                </h3>
                <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                  Check DMARC policy coverage across your subdomains
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </ToolLayout>
  );
}
