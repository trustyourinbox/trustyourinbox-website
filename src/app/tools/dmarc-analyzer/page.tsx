"use client";

import { useState } from "react";
import { FaCopy, FaShieldAlt, FaInfoCircle, FaExclamationTriangle, FaCheckCircle, FaServer, FaKey } from "react-icons/fa";
import { ToolLayout, Button, Input, Card } from "@/components/ui";
import { DMARCStatus } from "@/components/ui/DMARCStatus";

function parseDMARC(record: string) {
  const tags: { tag: string; value: string }[] = [];
  record.split(';').forEach(part => {
    const [tag, ...rest] = part.trim().split('=');
    if (tag && rest.length) {
      tags.push({ tag: tag.trim(), value: rest.join('=').trim() });
    }
  });
  return tags;
}

function getTagExplanation(tag: string, value: string) {
  switch (tag) {
    case 'v':
      return 'Version of DMARC. Should always be DMARC1.';
    case 'p':
      if (value === 'none') return 'No enforcement. Only monitoring. Not recommended for production.';
      if (value === 'quarantine') return 'Suspicious emails will be sent to spam/junk. Good protection.';
      if (value === 'reject') return 'Strictest policy. Unauthorized emails will be rejected. Best protection.';
      return 'Policy for domain.';
    case 'sp':
      return 'Policy for subdomains.';
    case 'rua':
      return 'Aggregate report email(s).';
    case 'ruf':
      return 'Forensic report email(s).';
    case 'pct':
      return 'Percentage of messages subjected to filtering.';
    case 'adkim':
      return 'Alignment mode for DKIM (r=relaxed, s=strict).';
    case 'aspf':
      return 'Alignment mode for SPF (r=relaxed, s=strict).';
    case 'fo':
      return 'Failure reporting options.';
    default:
      return '';
  }
}

function getPolicyType(tags: { tag: string; value: string }[]): "reject" | "quarantine" | "none" | "no-policy" {
  const p = tags.find(t => t.tag === 'p')?.value;
  if (p === 'reject') return 'reject';
  if (p === 'quarantine') return 'quarantine';
  if (p === 'none') return 'none';
  return 'no-policy';
}

function getRecommendations(tags: { tag: string; value: string }[]) {
  const recommendations: { type: 'warning' | 'info' | 'success'; message: string }[] = [];

  // Check version
  const version = tags.find(t => t.tag === 'v')?.value;
  if (!version || version !== 'DMARC1') {
    recommendations.push({
      type: 'warning',
      message: 'Add or update the DMARC version to v=DMARC1'
    });
  }

  // Check policy
  const policy = tags.find(t => t.tag === 'p')?.value;
  if (!policy) {
    recommendations.push({
      type: 'warning',
      message: 'Add a DMARC policy (p=) to specify how to handle unauthorized emails'
    });
  } else if (policy === 'none') {
    recommendations.push({
      type: 'warning',
      message: 'Consider upgrading from p=none to p=quarantine or p=reject for better protection'
    });
  }

  // Check reporting
  const rua = tags.find(t => t.tag === 'rua')?.value;
  if (!rua) {
    recommendations.push({
      type: 'info',
      message: 'Add a DMARC aggregate reporting address (rua=) to monitor your email authentication'
    });
  }

  const ruf = tags.find(t => t.tag === 'ruf')?.value;
  if (!ruf) {
    recommendations.push({
      type: 'info',
      message: 'Add a DMARC forensic reporting address (ruf=) to receive detailed failure reports'
    });
  }

  // Check subdomain policy
  const sp = tags.find(t => t.tag === 'sp')?.value;
  if (!sp) {
    recommendations.push({
      type: 'info',
      message: 'Consider adding a subdomain policy (sp=) to protect your subdomains'
    });
  }

  // Success message if all critical components are present
  if (version === 'DMARC1' && policy && (policy === 'reject' || policy === 'quarantine') && rua) {
    recommendations.push({
      type: 'success',
      message: 'Great job! Your DMARC record is well configured with strong protection'
    });
  }

  return recommendations;
}

export default function DMARCAnalyzerPage() {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState<{ tag: string; value: string }[] | null>(null);
  const [policyType, setPolicyType] = useState<"reject" | "quarantine" | "none" | "no-policy" | null>(null);

  function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    const parsed = parseDMARC(input);
    setTags(parsed);
    setPolicyType(getPolicyType(parsed));
  }

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 flex items-center gap-1.5">
          <FaShieldAlt className="w-4 h-4 text-blue-600" />
          About DMARC
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          DMARC (Domain-based Message Authentication, Reporting, and Conformance) helps protect your domain from email spoofing and phishing.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 flex items-center gap-1.5">
          <FaInfoCircle className="w-4 h-4 text-blue-600" />
          Common Tags
        </h3>
        <ul className="text-sm text-gray-500 space-y-2 mt-2">
          <li className="flex items-start gap-2">
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-blue-600">v=DMARC1</code>
            <span>Version</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-blue-600">p=none</code>
            <span>Monitoring only</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-blue-600">p=quarantine</code>
            <span>Send to spam</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-blue-600">p=reject</code>
            <span>Reject email</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-blue-600">rua=</code>
            <span>Aggregate reports</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-blue-600">ruf=</code>
            <span>Forensic reports</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const recommendations = tags ? getRecommendations(tags) : [];

  return (
    <ToolLayout
      title="DMARC Analyzer"
      description="Paste a DMARC record below to analyze its configuration and get best-practice advice."
      sidebarContent={sidebarContent}
    >
      <Card>
        <form onSubmit={handleAnalyze} className="space-y-4">
          <Input
            label="DMARC Record"
            placeholder="v=DMARC1; p=reject; rua=mailto:reports@example.com; ..."
            value={input}
            onChange={e => setInput(e.target.value)}
            required
          />
          <Button type="submit" disabled={!input}>
            Analyze
          </Button>
        </form>
      </Card>

      {policyType && (
        <div className="mt-6">
          <DMARCStatus policy={policyType} />
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
          <a href="/tools/dmarc-domain-checker" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <FaShieldAlt className="w-5 h-5" />
            <span>DMARC Domain Checker</span>
          </a>
          <a href="/tools/spf-surveyor" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <FaServer className="w-5 h-5" />
            <span>SPF Surveyor</span>
          </a>
          <a href="/tools/dkim-validator" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <FaKey className="w-5 h-5" />
            <span>DKIM Validator</span>
          </a>
        </div>
      </Card>

      {tags && (
        <div className="mt-6 space-y-4">
          {tags.map(({ tag, value }) => (
            <Card key={tag}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{tag}</h3>
                  <p className="text-sm text-gray-500">{getTagExplanation(tag, value)}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(`${tag}=${value}`)}
                >
                  <FaCopy className="mr-2" />
                  Copy
                </Button>
              </div>
              <div className="mt-2 font-mono text-sm bg-gray-50 p-3 rounded">
                {value}
              </div>
            </Card>
          ))}
        </div>
      )}
    </ToolLayout>
  );
} 