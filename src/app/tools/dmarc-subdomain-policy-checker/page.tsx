"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ui/ToolLayout";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FaSearch, FaCheckCircle, FaTimesCircle, FaInfoCircle, FaCopy, FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import { Shield, Mail, Key, ArrowRight } from "lucide-react";

interface SubdomainResult {
  subdomain: string;
  hasPolicy: boolean;
  policyType: "strict" | "inherited" | "missing" | "weak";
  policy?: string;
  recommendation: string;
}

export default function DMARCSubdomainPolicyCheckerPage() {
  const [domain, setDomain] = useState("");
  const [subdomains, setSubdomains] = useState<string[]>([""]);
  const [bulkInput, setBulkInput] = useState("");
  const [results, setResults] = useState<SubdomainResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  function handleSubdomainChange(idx: number, value: string) {
    setSubdomains((prev) => prev.map((s, i) => (i === idx ? value : s)));
  }

  function addSubdomain() {
    setSubdomains((prev) => [...prev, ""]);
  }

  function removeSubdomain(idx: number) {
    setSubdomains((prev) => prev.filter((_, i) => i !== idx));
  }

  function handleBulkAdd() {
    const lines = bulkInput.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    setSubdomains(prev => [...prev, ...lines]);
    setBulkInput("");
  }

  async function handleCheck() {
    setError(null);
    setLoading(true);
    // TODO: Replace with real DNS lookup logic
    setTimeout(() => {
      setResults(
        subdomains
          .filter((s) => s.trim())
          .map((sub, idx) => {
            // Simulate logic: 'secure' = strict, 'mail' = inherited, 'test' = weak, else missing
            let policyType: SubdomainResult["policyType"] = "missing";
            let policy: string | undefined = undefined;
            if (sub.startsWith("secure")) {
              policyType = "strict";
              policy = `v=DMARC1; p=reject; rua=mailto:dmarc@${domain}`;
            } else if (sub.startsWith("mail")) {
              policyType = "inherited";
              policy = `Inherited from parent: v=DMARC1; p=quarantine; rua=mailto:dmarc@${domain}`;
            } else if (sub.startsWith("test")) {
              policyType = "weak";
              policy = `v=DMARC1; p=none; rua=mailto:dmarc@${domain}`;
            }
            return {
              subdomain: sub,
              hasPolicy: policyType !== "missing",
              policyType,
              policy,
              recommendation:
                policyType === "strict"
                  ? "No action needed. Subdomain has a strict DMARC policy."
                  : policyType === "inherited"
                  ? "Consider setting an explicit policy for this subdomain."
                  : policyType === "weak"
                  ? "Strengthen this subdomain's policy to p=quarantine or p=reject."
                  : "Add a DMARC policy for this subdomain to ensure full coverage.",
            };
          })
      );
      setLoading(false);
    }, 1000);
  }

  function handleCopy(idx: number, policy?: string) {
    if (!policy) return;
    navigator.clipboard.writeText(policy);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  }

  // Coverage summary
  const total = subdomains.filter(s => s.trim()).length;
  const covered = results.filter(r => r.policyType === "strict" || r.policyType === "inherited" || r.policyType === "weak").length;
  const strict = results.filter(r => r.policyType === "strict").length;
  const inherited = results.filter(r => r.policyType === "inherited").length;
  const weak = results.filter(r => r.policyType === "weak").length;
  const missing = results.filter(r => r.policyType === "missing").length;
  const coverage = total ? Math.round((covered / total) * 100) : 0;

  const sidebarContent = (
    <>
      <h4 className="font-semibold mb-2">Best Practices for Subdomain DMARC</h4>
      <ul className="list-disc pl-5 mb-3 text-sm">
        <li>Set explicit DMARC policies for all subdomains, especially those used for mail.</li>
        <li>Use <b>p=reject</b> for sensitive or unused subdomains.</li>
        <li>Inherited policies are better than none, but explicit is best.</li>
        <li>Monitor reports to detect abuse of unprotected subdomains.</li>
      </ul>
      <div className="mb-3">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded mb-1">Why Coverage Matters</span>
        <p className="text-xs text-gray-600">
          Attackers often exploit unprotected subdomains. Full coverage helps prevent spoofing and phishing.
        </p>
      </div>
      <h4 className="font-semibold mb-2">Learn More</h4>
      <ul className="list-disc pl-5 text-sm">
        <li>
          <a href="https://dmarc.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            DMARC.org: Official DMARC Documentation
          </a>
        </li>
        <li>
          <a href="/guides/dmarc" className="text-blue-600 underline">
            TrustYourInbox DMARC Guide
          </a>
        </li>
      </ul>
    </>
  );

  return (
    <ToolLayout
      title="DMARC Subdomain Policy Checker"
      description="Check DMARC policy coverage across your domain's subdomains."
      sidebarContent={sidebarContent}
    >
      <Card className="w-full border-0 shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold">DMARC Subdomain Policy Checker</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="domain" className="text-sm font-medium">
                  Domain
                </label>
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <Input
                    id="domain"
                    type="text"
                    placeholder="example.com"
                    value={domain}
                    onChange={e => setDomain(e.target.value)}
                    className="pl-10 h-11 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subdomains</label>
                <div className="space-y-2">
                  {subdomains.map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <Input
                          type="text"
                          placeholder="mail.example.com"
                          value={sub}
                          onChange={e => handleSubdomainChange(idx, e.target.value)}
                          className="pl-10 h-11 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                        />
                      </div>
                      {subdomains.length > 1 && (
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700 p-1.5 hover:bg-red-50 rounded"
                          onClick={() => removeSubdomain(idx)}
                          aria-label="Remove subdomain"
                        >
                          <FaTimesCircle className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold hover:bg-blue-50 px-2 py-1 rounded"
                    onClick={addSubdomain}
                  >
                    + Add another subdomain
                  </button>
                  <span className="text-gray-400 text-xs">or</span>
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold hover:bg-blue-50 px-2 py-1 rounded"
                    onClick={handleBulkAdd}
                    disabled={!bulkInput.trim()}
                  >
                    Bulk Add
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="bulkInput" className="text-sm font-medium">
                Bulk Import
              </label>
              <textarea
                id="bulkInput"
                className="w-full h-[calc(100%-2rem)] border border-gray-200 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                rows={6}
                placeholder="Paste a list of subdomains, one per line"
                value={bulkInput}
                onChange={e => setBulkInput(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <Button
              onClick={handleCheck}
              disabled={!domain || subdomains.every(s => !s.trim()) || loading}
              className="bg-blue-600 hover:bg-blue-700 text-white min-w-[120px]"
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
                  Check Policies <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {results.length > 0 && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Results</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Coverage:</span>
              <span className="font-semibold text-blue-600">{coverage}%</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">Strict</div>
              <div className="text-2xl font-bold text-green-600">{strict}</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">Inherited</div>
              <div className="text-2xl font-bold text-blue-600">{inherited}</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">Weak</div>
              <div className="text-2xl font-bold text-yellow-600">{weak}</div>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">Missing</div>
              <div className="text-2xl font-bold text-red-600">{missing}</div>
            </div>
          </div>
          <div className="space-y-4">
            {results.map((result, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{result.subdomain}</span>
                    {result.policyType === "strict" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        <FaCheckCircle className="w-3 h-3 mr-1" />
                        Strict
                      </span>
                    )}
                    {result.policyType === "inherited" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        <FaInfoCircle className="w-3 h-3 mr-1" />
                        Inherited
                      </span>
                    )}
                    {result.policyType === "weak" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                        <FaExclamationTriangle className="w-3 h-3 mr-1" />
                        Weak
                      </span>
                    )}
                    {result.policyType === "missing" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                        <FaTimesCircle className="w-3 h-3 mr-1" />
                        Missing
                      </span>
                    )}
                  </div>
                  {result.policy && (
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:bg-blue-50 px-2 py-1 rounded flex items-center gap-1"
                      onClick={() => handleCopy(idx, result.policy)}
                    >
                      {copiedIdx === idx ? (
                        <>
                          <FaCheckCircle className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4" />
                          Copy Policy
                        </>
                      )}
                    </button>
                  )}
                </div>
                {result.policy && (
                  <div className="bg-gray-50 rounded p-3 text-sm font-mono mb-2">{result.policy}</div>
                )}
                <p className="text-sm text-gray-600">{result.recommendation}</p>
              </div>
            ))}
          </div>
        </Card>
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
            href="/tools/dkim-validator"
            className="group relative overflow-hidden rounded-lg border p-5 transition-all hover:shadow-md border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full p-2 bg-purple-100 dark:bg-purple-900">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:underline">DKIM Validator</h3>
                <p className="text-sm text-muted-foreground mt-1">Verify your DKIM signatures and configuration</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>
      </div>
    </ToolLayout>
  );
} 