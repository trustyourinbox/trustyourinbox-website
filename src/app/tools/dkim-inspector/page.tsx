"use client";

import { useState } from "react";
import { FaKey, FaCopy, FaInfoCircle, FaShieldAlt, FaExclamationTriangle, FaCheckCircle, FaTimesCircle, FaTrophy, FaServer } from "react-icons/fa";
import { Buffer } from "buffer";
// @ts-expect-error: asn1.js has no types
import asn1 from "asn1.js";
import { ToolLayout, Button, Input, Card, Alert } from "@/components/ui";
import Link from "next/link";
import { Shield, Mail, Key } from "lucide-react";

function parseDKIMRecord(record: string) {
  // Parse DKIM record into key-value pairs
  const fields: Record<string, string> = {};
  record.split(";").forEach(part => {
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
    const SubjectPublicKeyInfo = asn1.define('SubjectPublicKeyInfo', function(this: any) {
      // https://tools.ietf.org/html/rfc5280#section-4.1
      this.seq().obj(
        this.key('algorithm').seq().obj(
          this.key('algorithm').objid(),
          this.key('parameters').optional().any()
        ),
        this.key('subjectPublicKey').bitstr()
      );
    });
    const info = SubjectPublicKeyInfo.decode(der, 'der');
    // Now decode the RSAPublicKey
    const RSAPublicKey = asn1.define('RSAPublicKey', function(this: any) {
      this.seq().obj(
        this.key('modulus').int(),
        this.key('publicExponent').int()
      );
    });
    const pubKeyDer = info.subjectPublicKey.data;
    const rsa = RSAPublicKey.decode(pubKeyDer, 'der');
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
  { tag: "p", name: "Public Key", desc: "The base64-encoded public key used to verify signatures." },
  { tag: "t", name: "Flags", desc: "Optional flags. 'y' means testing mode, 's' means strict domain." },
  { tag: "h", name: "Hash Algorithms", desc: "Acceptable hash algorithms (e.g., sha256)." },
  { tag: "n", name: "Notes", desc: "Notes for the record (optional, informational)." },
  { tag: "g", name: "Granularity", desc: "Acceptable local-parts for signing addresses (rarely used)." },
  { tag: "s", name: "Service Type", desc: "Service type (should be '*', rarely used)." },
];

function getGradeAndScore(fields: Record<string, string>, keyLength: number | null) {
  let score = 0;
  const dots: { color: string; message: string }[] = [];
  let color = "bg-red-50 text-red-700 border-red-200";
  let icon = <FaTimesCircle className="text-red-600 w-7 h-7" />;
  let message = "High risk: DKIM configuration needs improvement.";

  // Check version
  if (fields.v === "DKIM1") {
    score += 1;
    dots.push({ color: "bg-green-500", message: "Valid DKIM version" });
  } else {
    dots.push({ color: "bg-red-500", message: "Invalid or missing DKIM version" });
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
      dots.push({ color: "bg-yellow-500", message: "Standard key (1024 bits)" });
    } else {
      dots.push({ color: "bg-red-500", message: "Weak key (<1024 bits)" });
    }
  } else {
    dots.push({ color: "bg-red-500", message: "Invalid or missing public key" });
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
    icon = <FaTrophy className="text-yellow-500 w-7 h-7" />;
    message = "Excellent! DKIM is well configured.";
  } else if (score >= 3) {
    color = "bg-yellow-100 text-yellow-800 border-yellow-200";
    icon = <FaCheckCircle className="text-yellow-500 w-7 h-7" />;
    message = "Fair. DKIM needs some improvements.";
  }

  return { score, dots, color, icon, message };
}

function getRecommendations(fields: Record<string, string>, keyLength: number | null, score: number) {
  const recommendations: { type: 'warning' | 'info' | 'success'; message: string }[] = [];

  // Version recommendations
  if (fields.v !== "DKIM1") {
    recommendations.push({
      type: 'warning',
      message: "Update to DKIM version 1 (v=DKIM1) for better compatibility and security."
    });
  }

  // Key length recommendations
  if (keyLength) {
    if (keyLength < 1024) {
      recommendations.push({
        type: 'warning',
        message: "Upgrade to at least a 1024-bit key for better security. 2048-bit keys are recommended."
      });
    } else if (keyLength < 2048) {
      recommendations.push({
        type: 'info',
        message: "Consider upgrading to a 2048-bit key for enhanced security."
      });
    }
  }

  // Testing mode recommendations
  if (fields.t === "y") {
    recommendations.push({
      type: 'info',
      message: "Remove testing mode (t=y) once you've verified DKIM is working correctly."
    });
  }

  // Hash algorithm recommendations
  if (!fields.h?.includes("sha256")) {
    recommendations.push({
      type: 'warning',
      message: "Add SHA-256 (sha256) to your hash algorithms for better security."
    });
  }

  // General recommendations based on score (using 5-dot system)
  if (score >= 4) {
    recommendations.push({
      type: 'success',
      message: "Your DKIM configuration is strong. Keep monitoring for any changes in best practices."
    });
  } else if (score >= 3) {
    recommendations.push({
      type: 'info',
      message: "Your DKIM configuration is acceptable but could be improved for better security."
    });
  } else {
    recommendations.push({
      type: 'warning',
      message: "Your DKIM configuration needs improvements. Review the recommendations above."
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
      const res = await fetch(`/api/dkim-inspect?domain=${encodeURIComponent(domain)}&selector=${encodeURIComponent(selector)}`);
      const data = await res.json();
      if (!res.ok || !data.record) {
        setError(data.error || "No DKIM record found for this selector/domain.");
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
  const { score, dots, color, icon, message } = record ? getGradeAndScore(fields, keyLength) : { score: 0, dots: [], color: "bg-red-50 text-red-700 border-red-200", icon: <FaTimesCircle className="text-red-600 w-7 h-7" />, message: "High risk: DKIM configuration needs improvement." };
  const recommendations = record ? getRecommendations(fields, keyLength, score) : [];

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 flex items-center gap-1.5">
          <FaShieldAlt className="w-4 h-4 text-blue-600" />
          About DKIM
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          DKIM (DomainKeys Identified Mail) is an email authentication method that allows the receiver to verify that an email was indeed sent and authorized by the owner of the domain.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 flex items-center gap-1.5">
          <FaInfoCircle className="w-4 h-4 text-blue-600" />
          What We Check
        </h3>
        <ul className="text-sm text-gray-500 space-y-2 mt-2">
          <li className="flex items-start gap-2">
            <FaKey className="w-4 h-4 text-blue-600 mt-0.5" />
            <span>DKIM record version and format</span>
          </li>
          <li className="flex items-start gap-2">
            <FaKey className="w-4 h-4 text-blue-600 mt-0.5" />
            <span>Public key presence and length</span>
          </li>
          <li className="flex items-start gap-2">
            <FaKey className="w-4 h-4 text-blue-600 mt-0.5" />
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
      <Card>
        <form onSubmit={handleCheck} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Domain Name"
              placeholder="yourdomain.com"
              value={domain}
              onChange={e => setDomain(e.target.value)}
              required
              pattern="^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
            <Input
              label="DKIM Selector"
              placeholder="selector (e.g., google, default)"
              value={selector}
              onChange={e => setSelector(e.target.value)}
              required
            />
          </div>
          <Button type="submit" disabled={loading || !domain || !selector}>
            {loading ? "Inspecting..." : "Inspect DKIM Record"}
          </Button>
        </form>
      </Card>

      {record && (
        <div className="space-y-6 mt-6">
          {/* Status Card */}
          <Card className={color}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FaShieldAlt className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-xl text-gray-900">Status</span>
              </div>
              {icon}
            </div>

            <p className="text-sm mb-4">{message}</p>

            {/* Status Dots */}
            <div className="flex flex-wrap gap-4">
              {dots.map((dot, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${dot.color}`} />
                  <span className="text-sm text-gray-600">{dot.message}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Recommendations Section */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-3">Recommendations</h3>
            <div className="space-y-3">
              {recommendations.map((rec, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-3 rounded-lg border ${
                    rec.type === 'warning' ? 'border-red-200' :
                    rec.type === 'info' ? 'border-blue-200' :
                    'border-green-200'
                  }`}
                >
                  <div className={`mt-0.5 ${
                    rec.type === 'warning' ? 'text-red-600' :
                    rec.type === 'info' ? 'text-blue-600' :
                    'text-green-600'
                  }`}>
                    {rec.type === 'warning' ? <FaExclamationTriangle className="w-5 h-5" /> :
                     rec.type === 'info' ? <FaInfoCircle className="w-5 h-5" /> :
                     <FaCheckCircle className="w-5 h-5" />}
                  </div>
                  <p className={`text-sm ${
                    rec.type === 'warning' ? 'text-red-700' :
                    rec.type === 'info' ? 'text-blue-700' :
                    'text-green-700'
                  }`}>
                    {rec.message}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* DKIM Record Card */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FaKey className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-xl text-gray-900">DKIM Record</span>
                {keyLength && (
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold border ${keyLength < 1024 ? "bg-red-100 text-red-800 border-red-200" : "bg-green-100 text-green-800 border-green-200"}`} title="Bit length of the DKIM public key">
                    {keyLength} bits
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <pre className="whitespace-pre-wrap break-all text-gray-800 bg-gray-50 rounded p-2 border border-gray-100 text-xs flex-1">{record}</pre>
              <CopyButton value={record} />
            </div>
          </Card>

          {/* Parsed Fields */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Parsed Fields</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(fields).map(([k, v]) => (
                <div key={k} className="flex items-center gap-2">
                  <span className="font-mono text-xs bg-blue-50 text-blue-700 rounded px-2 py-0.5">{k}</span>
                  <span className="text-gray-800 break-all text-xs">{v}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* DKIM Tag Legend */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">DKIM Tag Legend</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DKIM_TAG_LEGEND.map(({ tag, name, desc }) => (
                <div key={tag} className="flex items-start gap-3">
                  <span className="font-mono text-xs bg-blue-100 text-blue-700 rounded px-2 py-0.5 mt-0.5">{tag}</span>
                  <div>
                    <span className="font-semibold text-gray-900">{name}</span>
                    <span className="block text-gray-600 text-sm">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {recommendations.length > 0 && (
        <Card className="mt-6" title="Recommendations">
          <ul className="space-y-2">
            {recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaInfoCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                <span>{rec.message}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Related Tools */}
      <Card className="mt-8" title="Related Tools">
        <div className="flex flex-wrap gap-4">
          <a href="/tools/dmarc-analyzer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <FaShieldAlt className="w-5 h-5" />
            <span>DMARC Analyzer</span>
          </a>
          <a href="/tools/dmarc-domain-checker" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <FaShieldAlt className="w-5 h-5" />
            <span>DMARC Domain Checker</span>
          </a>
          <a href="/tools/spf-surveyor" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <FaServer className="w-5 h-5" />
            <span>SPF Surveyor</span>
          </a>
        </div>
      </Card>

      {error && (
        <Alert variant="error" className="mt-6">
          {error}
        </Alert>
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
            href="/tools/domain-security-checker"
            className="group relative overflow-hidden rounded-lg border p-5 transition-all hover:shadow-md border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full p-2 bg-purple-100 dark:bg-purple-900">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:underline">Domain Security Checker</h3>
                <p className="text-sm text-muted-foreground mt-1">Comprehensive security analysis for your domain</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>
      </div>
    </ToolLayout>
  );
} 