"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ui/ToolLayout";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaCopy,
  FaExclamationTriangle,
} from "react-icons/fa";
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
    const lines = bulkInput
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    setSubdomains((prev) => [...prev, ...lines]);
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
  const total = subdomains.filter((s) => s.trim()).length;
  const covered = results.filter(
    (r) =>
      r.policyType === "strict" ||
      r.policyType === "inherited" ||
      r.policyType === "weak"
  ).length;
  const strict = results.filter((r) => r.policyType === "strict").length;
  const inherited = results.filter((r) => r.policyType === "inherited").length;
  const weak = results.filter((r) => r.policyType === "weak").length;
  const missing = results.filter((r) => r.policyType === "missing").length;
  const coverage = total ? Math.round((covered / total) * 100) : 0;

  const sidebarContent = (
    <>
      <h4 className="mb-2 font-semibold">Best Practices for Subdomain DMARC</h4>
      <ul className="mb-3 list-disc pl-5 text-sm">
        <li>
          Set explicit DMARC policies for all subdomains, especially those used
          for mail.
        </li>
        <li>
          Use <b>p=reject</b> for sensitive or unused subdomains.
        </li>
        <li>Inherited policies are better than none, but explicit is best.</li>
        <li>Monitor reports to detect abuse of unprotected subdomains.</li>
      </ul>
      <div className="mb-3">
        <span className="mb-1 inline-block rounded bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800">
          Why Coverage Matters
        </span>
        <p className="text-xs text-gray-600">
          Attackers often exploit unprotected subdomains. Full coverage helps
          prevent spoofing and phishing.
        </p>
      </div>
      <h4 className="mb-2 font-semibold">Learn More</h4>
      <ul className="list-disc pl-5 text-sm">
        <li>
          <a
            href="https://dmarc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            DMARC.org: Official DMARC Documentation
          </a>
        </li>
        <li>
          <a href="/guides/dmarc" className="text-primary underline">
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
          <div className="mb-6 flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">
              DMARC Subdomain Policy Checker
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="domain" className="text-sm font-medium">
                  Domain
                </label>
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <Input
                    id="domain"
                    type="text"
                    placeholder="example.com"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="h-11 border-gray-200 pl-10 focus:border-primary focus:ring-ring"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subdomains</label>
                <div className="space-y-2">
                  {subdomains.map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        </div>
                        <Input
                          type="text"
                          placeholder="mail.example.com"
                          value={sub}
                          onChange={(e) =>
                            handleSubdomainChange(idx, e.target.value)
                          }
                          className="h-11 border-gray-200 pl-10 focus:border-primary focus:ring-ring"
                        />
                      </div>
                      {subdomains.length > 1 && (
                        <button
                          type="button"
                          className="rounded p-1.5 text-red-500 hover:bg-red-50 hover:text-red-700"
                          onClick={() => removeSubdomain(idx)}
                          aria-label="Remove subdomain"
                        >
                          <FaTimesCircle className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    className="rounded px-2 py-1 text-sm font-semibold text-primary hover:bg-secondary hover:text-foreground"
                    onClick={addSubdomain}
                  >
                    + Add another subdomain
                  </button>
                  <span className="text-xs text-gray-400">or</span>
                  <button
                    type="button"
                    className="rounded px-2 py-1 text-sm font-semibold text-primary hover:bg-secondary hover:text-foreground"
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
                className="h-[calc(100%-2rem)] w-full rounded border border-gray-200 p-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                rows={6}
                placeholder="Paste a list of subdomains, one per line"
                value={bulkInput}
                onChange={(e) => setBulkInput(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <Button
              onClick={handleCheck}
              disabled={
                !domain || subdomains.every((s) => !s.trim()) || loading
              }
              className="min-w-[120px] bg-primary text-white hover:bg-primary"
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
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Results</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Coverage:</span>
              <span className="font-semibold text-primary">{coverage}%</span>
            </div>
          </div>
          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg bg-green-50 p-3">
              <div className="text-sm text-gray-600">Strict</div>
              <div className="text-2xl font-bold text-green-600">{strict}</div>
            </div>
            <div className="rounded-lg bg-secondary p-3">
              <div className="text-sm text-gray-600">Inherited</div>
              <div className="text-2xl font-bold text-primary">{inherited}</div>
            </div>
            <div className="rounded-lg bg-yellow-50 p-3">
              <div className="text-sm text-gray-600">Weak</div>
              <div className="text-2xl font-bold text-yellow-600">{weak}</div>
            </div>
            <div className="rounded-lg bg-red-50 p-3">
              <div className="text-sm text-gray-600">Missing</div>
              <div className="text-2xl font-bold text-red-600">{missing}</div>
            </div>
          </div>
          <div className="space-y-4">
            {results.map((result, idx) => (
              <div key={idx} className="rounded-lg border border-gray-200 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{result.subdomain}</span>
                    {result.policyType === "strict" && (
                      <span className="inline-flex items-center rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        <FaCheckCircle className="mr-1 h-3 w-3" />
                        Strict
                      </span>
                    )}
                    {result.policyType === "inherited" && (
                      <span className="inline-flex items-center rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-foreground">
                        <FaInfoCircle className="mr-1 h-3 w-3" />
                        Inherited
                      </span>
                    )}
                    {result.policyType === "weak" && (
                      <span className="inline-flex items-center rounded bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                        <FaExclamationTriangle className="mr-1 h-3 w-3" />
                        Weak
                      </span>
                    )}
                    {result.policyType === "missing" && (
                      <span className="inline-flex items-center rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                        <FaTimesCircle className="mr-1 h-3 w-3" />
                        Missing
                      </span>
                    )}
                  </div>
                  {result.policy && (
                    <button
                      type="button"
                      className="flex items-center gap-1 rounded px-2 py-1 text-sm font-medium text-primary hover:bg-secondary hover:text-foreground"
                      onClick={() => handleCopy(idx, result.policy)}
                    >
                      {copiedIdx === idx ? (
                        <>
                          <FaCheckCircle className="h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="h-4 w-4" />
                          Copy Policy
                        </>
                      )}
                    </button>
                  )}
                </div>
                {result.policy && (
                  <div className="mb-2 rounded bg-gray-50 p-3 font-mono text-sm">
                    {result.policy}
                  </div>
                )}
                <p className="text-sm text-gray-600">{result.recommendation}</p>
              </div>
            ))}
          </div>
        </Card>
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
        </div>
      </div>
    </ToolLayout>
  );
}
