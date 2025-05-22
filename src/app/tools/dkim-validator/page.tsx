"use client";

import { useState } from "react";
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaKey, FaCopy, FaInfoCircle, FaTrophy, FaMedal, FaShieldAlt, FaServer } from "react-icons/fa";
import { Buffer } from "buffer";
// @ts-expect-error: asn1.js has no types
import asn1 from "asn1.js";
import { ToolLayout, Button, Input, Card, Alert } from "@/components/ui";

function parseDKIMRecord(record: string) {
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
    const SubjectPublicKeyInfo = asn1.define('SubjectPublicKeyInfo', function(this: any) {
      this.seq().obj(
        this.key('algorithm').seq().obj(
          this.key('algorithm').objid(),
          this.key('parameters').optional().any()
        ),
        this.key('subjectPublicKey').bitstr()
      );
    });
    const info = SubjectPublicKeyInfo.decode(der, 'der');
    const RSAPublicKey = asn1.define('RSAPublicKey', function(this: any) {
      this.seq().obj(
        this.key('modulus').int(),
        this.key('publicExponent').int()
      );
    });
    const pubKeyDer = info.subjectPublicKey.data;
    const rsa = RSAPublicKey.decode(pubKeyDer, 'der');
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
  const warnings: { icon: JSX.Element; color: string; message: string }[] = [];
  if (!fields.v || fields.v !== "DKIM1") {
    warnings.push({
      icon: <FaTimesCircle className="text-red-500 w-4 h-4" />,
      color: "text-red-700 bg-red-50 border-red-200",
      message: "Missing or invalid version (v=DKIM1) field."
    });
  }
  if (!fields.p) {
    warnings.push({
      icon: <FaTimesCircle className="text-red-500 w-4 h-4" />,
      color: "text-red-700 bg-red-50 border-red-200",
      message: "Missing public key (p) field."
    });
  } else if (fields.p.length < 200) {
    warnings.push({
      icon: <FaExclamationTriangle className="text-yellow-500 w-4 h-4" />,
      color: "text-yellow-700 bg-yellow-50 border-yellow-200",
      message: "Public key is unusually short. Should be at least 1024 bits."
    });
  }
  if (fields.t && fields.t.includes("y")) {
    warnings.push({
      icon: <FaInfoCircle className="text-yellow-500 w-4 h-4" />,
      color: "text-yellow-700 bg-yellow-50 border-yellow-200",
      message: "Testing mode is enabled (t=y). DKIM signature may not be enforced."
    });
  }
  return warnings;
}

function getRecommendations(fields: Record<string, string>, keyLength: number | null) {
  const recommendations: { type: 'warning' | 'info' | 'success'; message: string }[] = [];

  // Version check
  if (!fields.v || fields.v !== "DKIM1") {
    recommendations.push({
      type: 'warning',
      message: "Update to DKIM version 1 (v=DKIM1) for better compatibility and security."
    });
  }

  // Key type check
  if (fields.k && fields.k !== "rsa") {
    recommendations.push({
      type: 'warning',
      message: "Use RSA key type for maximum compatibility with email providers."
    });
  }

  // Key length check
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

  // Testing mode check
  if (fields.t && fields.t.includes("y")) {
    recommendations.push({
      type: 'info',
      message: "Remove testing mode (t=y) once you've verified DKIM is working correctly."
    });
  }

  // Hash algorithms check
  if (!fields.h || !fields.h.includes("sha256")) {
    recommendations.push({
      type: 'warning',
      message: "Add SHA-256 (sha256) to your hash algorithms for better security."
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
  { tag: "p", name: "Public Key", desc: "The base64-encoded public key used to verify signatures." },
  { tag: "t", name: "Flags", desc: "Optional flags. 'y' means testing mode, 's' means strict domain." },
  { tag: "h", name: "Hash Algorithms", desc: "Acceptable hash algorithms (e.g., sha256)." },
  { tag: "n", name: "Notes", desc: "Notes for the record (optional, informational)." },
  { tag: "g", name: "Granularity", desc: "Acceptable local-parts for signing addresses (rarely used)." },
  { tag: "s", name: "Service Type", desc: "Service type (should be '*', rarely used)." },
];

export default function DKIMValidatorPage() {
  const [input, setInput] = useState("");
  const [record, setRecord] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleValidate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setRecord(null);
    if (!input.trim()) {
      setError("Please paste a DKIM record.");
      return;
    }
    setRecord(input.trim());
  }

  const fields = record ? parseDKIMRecord(record) : {};
  const keyLength = fields.p ? getKeyLength(fields.p) : null;
  const { score, rating, badges, dots } = record ? getGradeAndScore(fields) : { score: 0, rating: 1, badges: [], dots: [] };
  const warnings = record ? getWarnings(fields) : [];
  const recommendations = record ? getRecommendations(fields, keyLength) : [];

  // Get status color based on rating
  const getStatusColor = (rating: number) => {
    if (rating >= 4) return "bg-green-50 border-green-200";
    if (rating >= 3) return "bg-blue-50 border-blue-200";
    if (rating >= 2) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 flex items-center gap-1.5">
          <FaShieldAlt className="w-4 h-4 text-blue-600" />
          About DKIM Validation
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          DKIM (DomainKeys Identified Mail) validation ensures your email authentication is properly configured. This tool helps you verify your DKIM record format and security.
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
      title="DKIM Validator"
      description="Validate and analyze DKIM records for proper configuration and security. Paste a DKIM record to get started."
      sidebarContent={sidebarContent}
    >
      <Card>
        <form onSubmit={handleValidate} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="dkim-record" className="block text-sm font-medium text-gray-700">
              DKIM Record
            </label>
            <textarea
              id="dkim-record"
              placeholder="Paste DKIM record (TXT value) here..."
              value={input}
              onChange={e => setInput(e.target.value)}
              required
              rows={4}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button type="submit" disabled={!input.trim()}>
            Validate DKIM Record
          </Button>
        </form>
      </Card>

      {record && (
        <div className="space-y-6 mt-6">
          {/* Rating and Score Card */}
          <Card className={getStatusColor(rating)}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < rating
                          ? rating >= 4
                            ? "bg-green-500"
                            : rating >= 3
                            ? "bg-blue-500"
                            : rating >= 2
                            ? "bg-yellow-500"
                            : "bg-red-500"
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">DKIM Score: {score}/100</h3>
                  <p className="text-sm text-gray-500">Based on key strength, version, and configuration</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Status Dots */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex flex-wrap gap-4">
                {dots.map((dot, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${dot.color}`} />
                    <span className="text-sm text-gray-600">{dot.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations Section */}
            {recommendations.length > 0 && (
              <div className="border-t border-gray-100 pt-4 mt-4">
                <h3 className="font-semibold text-gray-900 mb-3">Recommendations</h3>
                <div className="space-y-3">
                  {recommendations.map((rec, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        rec.type === 'warning' ? 'bg-red-50' :
                        rec.type === 'info' ? 'bg-blue-50' :
                        'bg-green-50'
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
              </div>
            )}

            {/* Warnings Section */}
            {warnings.length > 0 && (
              <div className="border-t border-gray-100 pt-4 mt-4">
                <h3 className="font-semibold text-gray-900 mb-3">Warnings and Suggestions</h3>
                <div className="space-y-3">
                  {warnings.map((w, i) => (
                    <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${w.color}`}>
                      <div className="mt-0.5">{w.icon}</div>
                      <p className="text-sm">{w.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
    </ToolLayout>
  );
} 