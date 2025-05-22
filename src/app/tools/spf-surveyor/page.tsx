"use client";
import { useState, useRef } from "react";
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle, FaServer, FaGlobe, FaShieldAlt, FaExclamationCircle, FaNetworkWired, FaChevronRight, FaChevronDown, FaCopy, FaTrophy, FaKey } from "react-icons/fa";
import { ToolLayout, Button, Input, Card, Alert } from "@/components/ui";

interface SPFNode {
  domain: string;
  record: string;
  includes: SPFNode[];
  ip4: string[];
  ip6: string[];
  mx: string[];
  a: string[];
  all: string;
  dnsLookups: number;
  totalIp4Blocks: number;
  totalIp6Blocks: number;
}

function SPFTreeNode({ node, level = 0 }: { node: SPFNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(level === 0);

  return (
    <div className="border-l-2 border-gray-200 pl-4 ml-2">
      <div 
        className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {node.includes.length > 0 && (
          <span className="text-gray-400 hover:text-gray-600 transition-colors">
            {isExpanded ? <FaChevronDown className="w-4 h-4" /> : <FaChevronRight className="w-4 h-4" />}
          </span>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">{node.domain}</span>
            <span className="text-sm text-gray-500">({node.dnsLookups} DNS lookups)</span>
          </div>
          {!isExpanded && node.includes.length > 0 && (
            <div className="text-sm text-gray-500 mt-1">
              Click to expand and view details
            </div>
          )}
        </div>
      </div>
      
      {isExpanded && (
        <div className="space-y-4 mt-2">
          <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm break-all border border-gray-200">
            {node.record}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {node.ip4.length > 0 && (
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                  <FaServer className="text-blue-600" />
                  IPv4 Addresses ({node.totalIp4Blocks} blocks)
                </h4>
                <ul className="space-y-1">
                  {node.ip4.map((ip, i) => (
                    <li key={i} className="text-sm text-gray-600">{ip}</li>
                  ))}
                </ul>
              </div>
            )}
            {node.ip6.length > 0 && (
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                  <FaServer className="text-blue-600" />
                  IPv6 Addresses ({node.totalIp6Blocks} blocks)
                </h4>
                <ul className="space-y-1">
                  {node.ip6.map((ip, i) => (
                    <li key={i} className="text-sm text-gray-600">{ip}</li>
                  ))}
                </ul>
              </div>
            )}
            {node.mx.length > 0 && (
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                  <FaGlobe className="text-blue-600" />
                  MX Records
                </h4>
                <ul className="space-y-1">
                  {node.mx.map((mx, i) => (
                    <li key={i} className="text-sm text-gray-600">{mx}</li>
                  ))}
                </ul>
              </div>
            )}
            {node.a.length > 0 && (
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                  <FaNetworkWired className="text-blue-600" />
                  A Records
                </h4>
                <ul className="space-y-1">
                  {node.a.map((a, i) => (
                    <li key={i} className="text-sm text-gray-600">{a}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {node.includes.map((include, i) => (
            <SPFTreeNode key={i} node={include} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function getDnsLookupStatus(lookups: number) {
  if (lookups < 7) {
    return {
      status: "Good",
      color: "text-green-700 bg-green-50 border-green-200",
      icon: <FaCheckCircle className="text-green-600 w-5 h-5" />,
      message: "Safe: Well within SPF DNS lookup limits."
    };
  } else if (lookups < 10) {
    return {
      status: "Warning",
      color: "text-yellow-700 bg-yellow-50 border-yellow-200",
      icon: <FaExclamationTriangle className="text-yellow-500 w-5 h-5" />,
      message: "Warning: Approaching the 10 DNS lookup limit."
    };
  } else {
    return {
      status: "Critical",
      color: "text-red-700 bg-red-50 border-red-200",
      icon: <FaTimesCircle className="text-red-600 w-5 h-5" />,
      message: "Critical: Exceeds SPF DNS lookup limit! SPF will fail."
    };
  }
}

function getAllMechanismStatus(all: string) {
  if (all === "-all") {
    return {
      label: "Strict (-all)",
      color: "bg-green-100 text-green-800 border-green-200",
      icon: <FaCheckCircle className="text-green-600 w-4 h-4" />,
      tooltip: "Best practice: Only allow explicitly authorized senders."
    };
  } else if (all === "~all") {
    return {
      label: "SoftFail (~all)",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      icon: <FaExclamationTriangle className="text-yellow-500 w-4 h-4" />,
      tooltip: "SoftFail: Not as strict, may allow unauthorized senders."
    };
  } else if (all === "+all" || all === "all") {
    return {
      label: "Permissive (+all)",
      color: "bg-red-100 text-red-800 border-red-200",
      icon: <FaTimesCircle className="text-red-600 w-4 h-4" />,
      tooltip: "Permissive: Allows any sender. Not recommended!"
    };
  } else {
    return {
      label: all,
      color: "bg-gray-100 text-gray-800 border-gray-200",
      icon: <FaInfoCircle className="text-gray-500 w-4 h-4" />,
      tooltip: "Custom or unknown policy."
    };
  }
}

function getGradeAndScore(spfTree: SPFNode) {
  const dots: { color: string; message: string }[] = [];
  let color = "bg-red-50 text-red-700 border-red-200";
  let icon = <FaTimesCircle className="text-red-600 w-7 h-7" />;
  let message = "High risk: SPF configuration needs improvement.";

  // Dot 1: DNS Lookups
  if (spfTree.dnsLookups < 7) {
    dots.push({ color: "bg-green-500", message: "Good DNS lookup count" });
  } else if (spfTree.dnsLookups < 10) {
    dots.push({ color: "bg-yellow-500", message: "High DNS lookup count" });
  } else {
    dots.push({ color: "bg-red-500", message: "Exceeds DNS lookup limit" });
  }

  // Dot 2: SPF Policy
  if (spfTree.all === "-all") {
    dots.push({ color: "bg-green-500", message: "Strict SPF policy (-all)" });
  } else if (spfTree.all === "~all") {
    dots.push({ color: "bg-yellow-500", message: "SoftFail SPF policy (~all)" });
  } else {
    dots.push({ color: "bg-red-500", message: "Permissive SPF policy" });
  }

  // Dot 3: Record Length
  if (spfTree.record.length <= 255) {
    dots.push({ color: "bg-green-500", message: "Good record length" });
  } else {
    dots.push({ color: "bg-red-500", message: "Record exceeds 255 characters" });
  }

  // Dot 4: Includes Configuration
  if (spfTree.includes.length > 0) {
    dots.push({ color: "bg-green-500", message: "Includes configured" });
  } else {
    dots.push({ color: "bg-yellow-500", message: "No includes configured" });
  }

  // Dot 5: IP Addresses
  if (spfTree.totalIp4Blocks > 0 || spfTree.totalIp6Blocks > 0) {
    dots.push({ color: "bg-green-500", message: "IP addresses configured" });
  } else {
    dots.push({ color: "bg-yellow-500", message: "No IP addresses configured" });
  }

  // Calculate overall status based on dots
  const greenDots = dots.filter(dot => dot.color === "bg-green-500").length;
  const yellowDots = dots.filter(dot => dot.color === "bg-yellow-500").length;

  if (greenDots >= 4) {
    color = "bg-green-100 text-green-800 border-green-200";
    icon = <FaTrophy className="text-yellow-500 w-7 h-7" />;
    message = "Excellent! SPF is well configured.";
  } else if (greenDots + yellowDots >= 4) {
    color = "bg-yellow-100 text-yellow-800 border-yellow-200";
    icon = <FaCheckCircle className="text-yellow-500 w-7 h-7" />;
    message = "Fair. SPF needs some improvements.";
  }

  return { dots, color, icon, message };
}

function getRecommendations(spfTree: SPFNode) {
  const recommendations: { type: 'warning' | 'info' | 'success'; message: string }[] = [];
  const { dots } = getGradeAndScore(spfTree);
  const greenDots = dots.filter(dot => dot.color === "bg-green-500").length;

  // DNS lookup recommendations
  if (spfTree.dnsLookups >= 10) {
    recommendations.push({
      type: 'warning',
      message: "Your SPF record exceeds the 10 DNS lookup limit. Consider SPF flattening to reduce lookups."
    });
  } else if (spfTree.dnsLookups >= 7) {
    recommendations.push({
      type: 'info',
      message: "Your SPF record has a high number of DNS lookups. Consider optimizing to improve reliability."
    });
  }

  // All mechanism recommendations
  if (spfTree.all === "+all" || spfTree.all === "all") {
    recommendations.push({
      type: 'warning',
      message: "Your SPF record uses a permissive policy. Change to '-all' for better security."
    });
  } else if (spfTree.all === "~all") {
    recommendations.push({
      type: 'info',
      message: "Consider upgrading from '~all' to '-all' for stricter SPF enforcement."
    });
  }

  // Record length recommendations
  if (spfTree.record.length > 255) {
    recommendations.push({
      type: 'warning',
      message: "Your SPF record exceeds 255 characters. Consider splitting or optimizing the record."
    });
  }

  // General recommendations based on dots
  if (greenDots >= 4) {
    recommendations.push({
      type: 'success',
      message: "Your SPF configuration is strong. Keep monitoring for any changes in best practices."
    });
  } else if (greenDots >= 3) {
    recommendations.push({
      type: 'info',
      message: "Your SPF configuration is acceptable but could be improved for better security."
    });
  } else {
    recommendations.push({
      type: 'warning',
      message: "Your SPF configuration needs significant improvements. Review all recommendations above."
    });
  }

  return recommendations;
}

export default function SPFSurveyorPage() {
  const [domain, setDomain] = useState("");
  const [spfTree, setSpfTree] = useState<SPFNode | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const spfRecordRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSpfTree(null);

    try {
      const response = await fetch(`/api/dns/spf?domain=${encodeURIComponent(domain)}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch SPF record");
      }

      if (!data.spf) {
        setError("No SPF record found for this domain");
        return;
      }

      setSpfTree(data.spf);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  function handleCopy(record: string) {
    navigator.clipboard.writeText(record);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  function getWarnings(spfTree: SPFNode) {
    const warnings: { icon: JSX.Element; color: string; message: string }[] = [];
    // Risky mechanism: +all or all
    if (spfTree.all === "+all" || spfTree.all === "all") {
      warnings.push({
        icon: <FaExclamationTriangle className="text-red-500 w-4 h-4" />,
        color: "text-red-700 bg-red-50 border-red-200",
        message: "Risky: The SPF record uses '+all' or 'all', which allows any sender. This is not recommended."
      });
    }
    // SPF record length
    if (spfTree.record.length > 255) {
      warnings.push({
        icon: <FaExclamationTriangle className="text-yellow-500 w-4 h-4" />,
        color: "text-yellow-700 bg-yellow-50 border-yellow-200",
        message: `Warning: The SPF record is ${spfTree.record.length} characters long. DNS TXT records over 255 characters may be truncated or cause issues.`
      });
    }
    // SPF flattening suggestion
    if (spfTree.dnsLookups >= 8) {
      warnings.push({
        icon: <FaInfoCircle className="text-blue-500 w-4 h-4" />,
        color: "text-blue-700 bg-blue-50 border-blue-200",
        message: "Suggestion: Consider SPF flattening to reduce DNS lookups and improve reliability."
      });
    }
    return warnings;
  }

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 flex items-center gap-1.5">
          <FaShieldAlt className="w-4 h-4 text-blue-600" />
          About SPF
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          SPF (Sender Policy Framework) is an email authentication method that helps prevent email spoofing by specifying which mail servers are authorized to send email for your domain.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 flex items-center gap-1.5">
          <FaInfoCircle className="w-4 h-4 text-blue-600" />
          What We Check
        </h3>
        <ul className="text-sm text-gray-500 space-y-2 mt-2">
          <li className="flex items-start gap-2">
            <FaServer className="w-4 h-4 text-blue-600 mt-0.5" />
            <span>DNS lookup count and limits</span>
          </li>
          <li className="flex items-start gap-2">
            <FaServer className="w-4 h-4 text-blue-600 mt-0.5" />
            <span>SPF policy and mechanisms</span>
          </li>
          <li className="flex items-start gap-2">
            <FaServer className="w-4 h-4 text-blue-600 mt-0.5" />
            <span>Record structure and length</span>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <ToolLayout
      title="SPF Surveyor"
      description="Analyze your SPF record to identify authorized email sources and ensure proper configuration."
      sidebarContent={sidebarContent}
    >
      <Card>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Domain Name"
            placeholder="yourdomain.com"
            value={domain}
            onChange={e => setDomain(e.target.value)}
            required
            pattern="^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          />
          <Button type="submit" disabled={loading || !domain}>
            {loading ? "Analyzing..." : "Analyze SPF Record"}
          </Button>
        </form>
      </Card>

      {error && (
        <Alert variant="error" className="mt-6">
          {error}
        </Alert>
      )}

      {spfTree && (
        <div className="space-y-6 mt-6">
          {/* Status Card */}
          {(() => {
            const { dots, color, icon, message } = getGradeAndScore(spfTree);
            return (
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
            );
          })()}

          {/* Recommendations Section */}
          {(() => {
            const recommendations = getRecommendations(spfTree);
            return (
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
            );
          })()}

          {/* SPF Record Card */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FaShieldAlt className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-xl text-gray-900">SPF Record</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(spfTree.record)}
              >
                <FaCopy className="mr-2" />
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <pre className="whitespace-pre-wrap break-all text-gray-800 bg-gray-50 rounded p-2 border border-gray-100 text-xs">{spfTree.record}</pre>
          </Card>

          {/* SPF Tree Visualization */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">SPF Record Tree</h3>
            <SPFTreeNode node={spfTree} />
          </Card>
        </div>
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
          <a href="/tools/dkim-validator" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <FaKey className="w-5 h-5" />
            <span>DKIM Validator</span>
          </a>
        </div>
      </Card>
    </ToolLayout>
  );
} 