"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ui/ToolLayout";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import FAQSchema from "@/components/FAQSchema";
import Link from "next/link";

import {
  Shield,
  Mail,
  Key,
  ArrowRight,
  Search,
  CheckCircle2,
  XCircle,
  Info,
  Copy,
  AlertTriangle,
  Globe,
  Home,
} from "lucide-react";

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
        <span className="bg-warning/10 text-warning mb-1 inline-block rounded px-2 py-0.5 text-xs font-semibold">
          Why Coverage Matters
        </span>
        <p className="text-muted-foreground text-xs">
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
            <Shield className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">
              DMARC Subdomain Policy Checker
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="domain"
                  className="mb-2 block text-sm font-medium"
                >
                  Domain
                </label>
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Globe className="text-muted-foreground h-5 w-5" />
                  </div>
                  <Input
                    id="domain"
                    type="text"
                    placeholder="example.com"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="border-border focus:border-primary focus:ring-ring h-11 pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="mb-2 block text-sm font-medium">
                  Subdomains
                </label>
                <div className="space-y-2">
                  {subdomains.map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Home className="text-muted-foreground h-5 w-5" />
                        </div>
                        <Input
                          type="text"
                          placeholder="mail.example.com"
                          value={sub}
                          onChange={(e) =>
                            handleSubdomainChange(idx, e.target.value)
                          }
                          className="border-border focus:border-primary focus:ring-ring h-11 pl-10"
                        />
                      </div>
                      {subdomains.length > 1 && (
                        <button
                          type="button"
                          className="text-destructive hover:bg-destructive/10 rounded p-1.5"
                          onClick={() => removeSubdomain(idx)}
                          aria-label="Remove subdomain"
                        >
                          <XCircle className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    className="text-primary hover:bg-secondary hover:text-foreground rounded px-2 py-1 text-sm font-semibold"
                    onClick={addSubdomain}
                  >
                    + Add another subdomain
                  </button>
                  <span className="text-muted-foreground text-xs">or</span>
                  <button
                    type="button"
                    className="text-primary hover:bg-secondary hover:text-foreground rounded px-2 py-1 text-sm font-semibold"
                    onClick={handleBulkAdd}
                    disabled={!bulkInput.trim()}
                  >
                    Bulk Add
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="bulkInput"
                className="mb-2 block text-sm font-medium"
              >
                Bulk Import
              </label>
              <textarea
                id="bulkInput"
                className="border-border focus:border-primary focus:ring-ring h-[calc(100%-2rem)] w-full rounded border p-3 text-sm focus:ring-2 focus:outline-none"
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
              size="lg"
              className="to-accent-hover from-primary min-w-[120px] gap-2 bg-gradient-to-r text-white hover:opacity-90"
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
            <h2 className="text-foreground text-xl font-semibold">Results</h2>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">Coverage:</span>
              <span className="text-primary font-semibold">{coverage}%</span>
            </div>
          </div>
          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="bg-success/10 border-success/20 rounded-lg border p-3">
              <div className="text-muted-foreground text-sm">Strict</div>
              <div className="text-success text-2xl font-bold">{strict}</div>
            </div>
            <div className="bg-primary/10 border-primary/20 rounded-lg border p-3">
              <div className="text-muted-foreground text-sm">Inherited</div>
              <div className="text-primary text-2xl font-bold">{inherited}</div>
            </div>
            <div className="bg-warning/10 border-warning/20 rounded-lg border p-3">
              <div className="text-muted-foreground text-sm">Weak</div>
              <div className="text-warning text-2xl font-bold">{weak}</div>
            </div>
            <div className="bg-destructive/10 border-destructive/20 rounded-lg border p-3">
              <div className="text-muted-foreground text-sm">Missing</div>
              <div className="text-destructive text-2xl font-bold">
                {missing}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {results.map((result, idx) => (
              <div key={idx} className="border-border rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-foreground font-medium">
                      {result.subdomain}
                    </span>
                    {result.policyType === "strict" && (
                      <span className="bg-success/10 text-success inline-flex items-center rounded px-2 py-0.5 text-xs font-medium">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Strict
                      </span>
                    )}
                    {result.policyType === "inherited" && (
                      <span className="bg-primary/10 text-primary inline-flex items-center rounded px-2 py-0.5 text-xs font-medium">
                        <Info className="mr-1 h-3 w-3" />
                        Inherited
                      </span>
                    )}
                    {result.policyType === "weak" && (
                      <span className="bg-warning/10 text-warning inline-flex items-center rounded px-2 py-0.5 text-xs font-medium">
                        <AlertTriangle className="mr-1 h-3 w-3" />
                        Weak
                      </span>
                    )}
                    {result.policyType === "missing" && (
                      <span className="bg-destructive/10 text-destructive inline-flex items-center rounded px-2 py-0.5 text-xs font-medium">
                        <XCircle className="mr-1 h-3 w-3" />
                        Missing
                      </span>
                    )}
                  </div>
                  {result.policy && (
                    <button
                      type="button"
                      className="text-primary hover:bg-primary/10 flex items-center gap-1 rounded px-2 py-1 text-sm font-medium"
                      onClick={() => handleCopy(idx, result.policy)}
                    >
                      {copiedIdx === idx ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy Policy
                        </>
                      )}
                    </button>
                  )}
                </div>
                {result.policy && (
                  <div className="bg-muted/30 text-foreground mb-2 rounded p-3 font-mono text-sm">
                    {result.policy}
                  </div>
                )}
                <p className="text-muted-foreground text-sm">
                  {result.recommendation}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* FAQ Schema for SEO */}
      <FAQSchema
        faqs={[
          {
            question: "What is a DMARC subdomain policy?",
            answer:
              "A DMARC subdomain policy (sp=) is an optional tag in your DMARC record that specifies how email receivers should handle messages from your subdomains. If you don't set sp=, subdomains inherit the main domain's policy (p=). You can set sp=quarantine or sp=reject to enforce stricter policies on subdomains than your main domain.",
          },
          {
            question: "Do subdomains need their own DMARC records?",
            answer:
              "No, subdomains don't need separate DMARC records by default - they inherit the policy from the main domain's DMARC record at _dmarc.example.com. However, you can publish specific DMARC records for individual subdomains at _dmarc.subdomain.example.com if you need different policies. The sp= tag in your main record sets a default policy for all subdomains.",
          },
          {
            question: "What does sp= mean in DMARC?",
            answer:
              "sp= is the subdomain policy tag in DMARC that defines how email receivers should treat messages from your subdomains when authentication fails. Valid values are sp=none (monitor only), sp=quarantine (send to spam), or sp=reject (block completely). If sp= is not specified, subdomains use the same policy as p= (the main domain policy).",
          },
          {
            question: "How do I protect subdomains with DMARC?",
            answer:
              "To protect subdomains, add the sp= tag to your main domain's DMARC record. For example: 'v=DMARC1; p=quarantine; sp=reject' applies quarantine to the main domain but reject to all subdomains. Alternatively, publish individual DMARC records for specific subdomains at _dmarc.subdomain.example.com. Our tool checks both approaches.",
          },
          {
            question: "Why are subdomains vulnerable without DMARC?",
            answer:
              "Subdomains without DMARC protection can be exploited for phishing attacks. Attackers often use subdomains like 'secure.yourcompany.com' or 'support.yourcompany.com' to impersonate your organization because users trust any @yourcompany.com address. Even if your main domain has DMARC p=reject, subdomains may only have p=none unless you explicitly set sp=reject.",
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
            Common questions about DMARC subdomain policies
          </p>
        </div>

        <div className="space-y-4">
          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              What is a DMARC subdomain policy?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              A DMARC subdomain policy (sp=) specifies how receivers should
              handle messages from your subdomains. If not set, subdomains
              inherit the main domain&apos;s policy (p=). You can set stricter
              policies for subdomains.
            </p>
          </details>

          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              Do subdomains need their own DMARC records?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              No, by default subdomains inherit the main domain&apos;s policy.
              You can publish specific records for individual subdomains at
              _dmarc.subdomain.example.com if needed, or use sp= tag for all
              subdomains.
            </p>
          </details>

          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              Why are subdomains vulnerable without DMARC?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              Attackers often use subdomains like
              &apos;secure.yourcompany.com&apos; for phishing because users
              trust any @yourcompany.com address. Without sp=reject, subdomains
              may only have weak p=none protection.
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
            href="/tools/dkim-validator"
            className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
                <Key className="text-primary h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                  DKIM Validator
                </h3>
                <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                  Verify DKIM signatures and configuration
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </ToolLayout>
  );
}
