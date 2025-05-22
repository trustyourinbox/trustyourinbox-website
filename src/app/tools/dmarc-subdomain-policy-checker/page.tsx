"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ui/ToolLayout";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FaSearch, FaCheckCircle, FaTimesCircle, FaInfoCircle, FaCopy, FaExclamationTriangle } from "react-icons/fa";

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

  return (
    <ToolLayout
      title="DMARC Subdomain Policy Checker"
      description="Check DMARC policy coverage for your domain and subdomains. Ensure all subdomains are protected with the right DMARC policy."
      sidebarContent={
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
      }
    >
      <Card className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-white border border-blue-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FaSearch className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Check Subdomain DMARC Policies</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-2 text-gray-700">Domain</label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="example.com"
                  value={domain}
                  onChange={e => setDomain(e.target.value)}
                  className="max-w-md pl-10 bg-white"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block font-medium mb-2 text-gray-700">Subdomains</label>
              <div className="space-y-2">
                {subdomains.map((sub, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Input
                        type="text"
                        placeholder="mail.example.com"
                        value={sub}
                        onChange={e => handleSubdomainChange(idx, e.target.value)}
                        className="pl-10 bg-white"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
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
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-2 text-gray-700">Bulk Import</label>
              <textarea
                className="w-full h-[calc(100%-2rem)] border border-gray-200 rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white"
                rows={6}
                placeholder="Paste a list of subdomains, one per line"
                value={bulkInput}
                onChange={e => setBulkInput(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <Button
            onClick={handleCheck}
            disabled={!domain || subdomains.every(s => !s.trim()) || loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow transition-all"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Checking...
              </span>
            ) : (
              "Check Policies"
            )}
          </Button>
          {error && (
            <div className="text-red-600 text-sm flex items-center gap-2">
              <FaTimesCircle className="w-4 h-4" />
              {error}
            </div>
          )}
        </div>
      </Card>
      {/* Coverage Summary */}
      {results.length > 0 && (
        <Card className="mb-8 p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Coverage Summary</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Overall Coverage</span>
                  <span className="text-lg font-semibold text-gray-900">{coverage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      width: `${coverage}%`,
                      background: coverage >= 80 ? 'linear-gradient(90deg, #059669 0%, #10B981 100%)' :
                                coverage >= 50 ? 'linear-gradient(90deg, #D97706 0%, #F59E0B 100%)' :
                                'linear-gradient(90deg, #DC2626 0%, #EF4444 100%)'
                    }}
                  />
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {covered} of {total} subdomains protected
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <FaCheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-600">Strict</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{strict}</div>
                  <div className="text-xs text-gray-500">subdomains</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <FaInfoCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-600">Inherited</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{inherited}</div>
                  <div className="text-xs text-gray-500">subdomains</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <FaExclamationTriangle className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-600">Weak</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{weak}</div>
                  <div className="text-xs text-gray-500">subdomains</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <FaTimesCircle className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-gray-600">Missing</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{missing}</div>
                  <div className="text-xs text-gray-500">subdomains</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <h3 className="font-medium text-gray-900 mb-3">Recommendations</h3>
              <ul className="space-y-2">
                {missing > 0 && (
                  <li className="flex items-start gap-2 text-sm">
                    <FaTimesCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Add DMARC policies to {missing} unprotected subdomain{missing > 1 ? 's' : ''}</span>
                  </li>
                )}
                {weak > 0 && (
                  <li className="flex items-start gap-2 text-sm">
                    <FaExclamationTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Strengthen weak policies on {weak} subdomain{weak > 1 ? 's' : ''}</span>
                  </li>
                )}
                {inherited > 0 && (
                  <li className="flex items-start gap-2 text-sm">
                    <FaInfoCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Consider explicit policies for {inherited} inherited subdomain{inherited > 1 ? 's' : ''}</span>
                  </li>
                )}
                {strict === total && (
                  <li className="flex items-start gap-2 text-sm">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>All subdomains have strict DMARC policies</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
              <h3 className="font-medium text-gray-900">Detailed Results</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subdomain</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effective Policy</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommendation</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {results.map((r, idx) => (
                    <tr key={r.subdomain} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="font-mono text-sm text-gray-900">{r.subdomain}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {r.policyType === "strict" && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-800 text-xs font-medium border border-green-200">
                            <FaCheckCircle className="w-3.5 h-3.5" />
                            Strict
                          </span>
                        )}
                        {r.policyType === "inherited" && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-medium border border-blue-200">
                            <FaInfoCircle className="w-3.5 h-3.5" />
                            Inherited
                          </span>
                        )}
                        {r.policyType === "weak" && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-50 text-yellow-800 text-xs font-medium border border-yellow-200">
                            <FaExclamationTriangle className="w-3.5 h-3.5" />
                            Weak
                          </span>
                        )}
                        {r.policyType === "missing" && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-800 text-xs font-medium border border-red-200">
                            <FaTimesCircle className="w-3.5 h-3.5" />
                            Missing
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-mono text-xs text-gray-700 bg-gray-50 px-2 py-1 rounded border border-gray-200">
                          {r.policy || <span className="text-gray-400">None</span>}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-sm text-gray-600">{r.recommendation}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {r.policy && (
                          <button
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-100 hover:bg-blue-50 text-xs font-medium border border-gray-200 text-gray-700 transition-colors"
                            onClick={() => handleCopy(idx, r.policy)}
                            aria-label="Copy DMARC record"
                          >
                            <FaCopy className="w-3.5 h-3.5" />
                            {copiedIdx === idx ? "Copied!" : "Copy"}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Related Tools</h3>
        <ul className="list-disc list-inside text-blue-700">
          <li><a href="/tools/dmarc-analyzer" className="underline">DMARC Analyzer</a></li>
          <li><a href="/tools/dmarc-policy-generator" className="underline">DMARC Policy Generator</a></li>
          <li><a href="/tools/dmarc-domain-checker" className="underline">DMARC Domain Checker</a></li>
        </ul>
      </div>
    </ToolLayout>
  );
} 