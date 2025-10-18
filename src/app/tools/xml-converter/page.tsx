"use client";

import { useState, useRef } from "react";
import {
  FaFileAlt,
  FaUpload,
  FaTimesCircle,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { ToolLayout, Card, Button, Input, Alert } from "@/components/ui";
import { Shield, Mail, Key } from "lucide-react";
import Link from "next/link";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_TYPES = [
  "application/xml",
  "text/xml",
  "application/gzip",
  "application/x-gzip",
  "application/zip",
  ".xml",
  ".gz",
  ".zip",
];

function getFileIcon(type: string) {
  if (type.includes("zip"))
    return <FaFileAlt className="text-primary h-5 w-5" />;
  if (type.includes("gzip"))
    return <FaFileAlt className="h-5 w-5 text-green-600" />;
  return <FaFileAlt className="h-5 w-5 text-gray-600" />;
}

function getDispositionChartData(records: any[]) {
  const counts: Record<string, number> = {};
  records.forEach((r) => {
    const disp = r.disposition || "none";
    counts[disp] = (counts[disp] || 0) + Number(r.count || 1);
  });
  const labels = Object.keys(counts);
  const data = labels.map((l) => counts[l]);
  return {
    labels,
    datasets: [
      {
        label: "Messages",
        data,
        backgroundColor: [
          "#22c55e", // pass
          "#f59e42", // quarantine
          "#ef4444", // fail
          "#3b82f6", // none/other
          "#a855f7",
          "#fbbf24",
        ],
        borderColor: "#e5e7eb",
        borderWidth: 2,
      },
    ],
  };
}

function getSourceIpChartData(records: any[]) {
  const counts: Record<string, number> = {};
  records.forEach((r) => {
    const ip = r.source_ip || "unknown";
    counts[ip] = (counts[ip] || 0) + Number(r.count || 1);
  });
  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  const labels = sorted.map(([ip]) => ip);
  const data = sorted.map(([, count]) => count);
  return {
    labels,
    datasets: [
      {
        label: "Messages",
        data,
        backgroundColor: "#3b82f6",
        borderRadius: 2,
        barPercentage: 0.7,
        borderSkipped: false,
      },
    ],
  };
}

function getDkimSpfChartData(records: any[]) {
  let dkimPass = 0,
    dkimFail = 0,
    spfPass = 0,
    spfFail = 0;
  records.forEach((r) => {
    if (r.dkim === "pass") dkimPass += Number(r.count || 1);
    else dkimFail += Number(r.count || 1);
    if (r.spf === "pass") spfPass += Number(r.count || 1);
    else spfFail += Number(r.count || 1);
  });
  return {
    labels: ["DKIM", "SPF"],
    datasets: [
      {
        label: "Pass",
        data: [dkimPass, spfPass],
        backgroundColor: "#22c55e",
        borderRadius: 2,
        barPercentage: 0.7,
        borderSkipped: false,
      },
      {
        label: "Fail",
        data: [dkimFail, spfFail],
        backgroundColor: "#ef4444",
        borderRadius: 2,
        barPercentage: 0.7,
        borderSkipped: false,
      },
    ],
  };
}

const chartOptions = {
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
      labels: {
        font: { size: 14, family: "inherit" },
        color: "#334155",
        padding: 20,
      },
    },
    tooltip: {
      enabled: true,
      backgroundColor: "#fff",
      titleColor: "#0f172a",
      bodyColor: "#334155",
      borderColor: "#e5e7eb",
      borderWidth: 1,
      padding: 12,
      caretSize: 8,
      cornerRadius: 6,
      displayColors: true,
    },
    title: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 10,
  },
  scales: {
    x: {
      grid: {
        color: "#e5e7eb",
        borderDash: [2, 2],
      },
      ticks: {
        color: "#64748b",
        font: { size: 13 },
      },
    },
    y: {
      grid: {
        color: "#e5e7eb",
        borderDash: [2, 2],
      },
      ticks: {
        color: "#64748b",
        font: { size: 13 },
      },
    },
  },
};

function RelatedTools() {
  const tools = [
    {
      id: "dmarc-analyzer",
      name: "DMARC Analyzer",
      description: "Analyze your DMARC configuration and get detailed reports",
      icon: <Shield className="text-primary h-6 w-6" />,
      href: "/tools/dmarc-analyzer",
      color: "bg-secondary dark:bg-primary",
      borderColor: "border-primary/20 dark:border-primary",
      iconBg: "bg-primary/10 dark:bg-primary",
    },
    {
      id: "spf-surveyor",
      name: "SPF Surveyor",
      description: "Validate and troubleshoot your SPF records",
      icon: <Mail className="text-primary h-6 w-6" />,
      href: "/tools/spf-surveyor",
      color: "bg-green-50 dark:bg-green-950",
      borderColor: "border-green-200 dark:border-green-800",
      iconBg: "bg-green-100 dark:bg-green-900",
    },
    {
      id: "dkim-validator",
      name: "DKIM Validator",
      description: "Verify your DKIM signatures and configuration",
      icon: <Key className="text-primary h-6 w-6" />,
      href: "/tools/dkim-validator",
      color: "bg-purple-50 dark:bg-purple-950",
      borderColor: "border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-100 dark:bg-purple-900",
    },
  ];

  return (
    <div className="mt-12 mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Related Tools</h2>
        <p className="text-muted-foreground mt-1">
          Explore more email authentication tools to secure your domain
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.href}
            className={`group relative overflow-hidden rounded-lg border p-5 transition-all hover:shadow-md ${tool.borderColor} ${tool.color}`}
          >
            <div className="flex items-start gap-4">
              <div className={`rounded-full p-2 ${tool.iconBg}`}>
                {tool.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:underline">
                  {tool.name}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {tool.description}
                </p>
              </div>
            </div>
            <div className="bg-primary absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function XMLConverterPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState<{ [name: string]: boolean }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFiles(selected: FileList | null) {
    if (!selected) return;
    setError(null);
    const valid: File[] = [];
    for (const file of Array.from(selected)) {
      if (file.size > MAX_FILE_SIZE) {
        setError(`File ${file.name} exceeds 10MB limit.`);
        continue;
      }
      if (
        !ACCEPTED_TYPES.some(
          (type) => file.type.includes(type) || file.name.endsWith(type)
        )
      ) {
        setError(`File ${file.name} is not a supported format.`);
        continue;
      }
      valid.push(file);
    }
    setFiles((prev) => [...prev, ...valid]);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }

  function handleBrowse() {
    fileInputRef.current?.click();
  }

  function handleRemove(idx: number) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
    setResults((prev) => prev.filter((_, i) => i !== idx));
  }

  async function handleProcess() {
    setError(null);
    setLoading(true);
    setResults([]);
    try {
      const formData = new FormData();
      files.forEach((f) => formData.append("file", f));
      const res = await fetch("/api/xml-converter", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to process files.");
      setResults(data.files);
    } catch (err: any) {
      setError(err.message || "Failed to process files.");
    } finally {
      setLoading(false);
    }
  }

  function toggleExpand(name: string) {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  }

  // Sidebar content
  const sidebarContent = (
    <div>
      <h4 className="mb-2 font-semibold">About DMARC XML Converter</h4>
      <p className="mb-2">
        Upload DMARC XML feedback files (compressed or uncompressed) to view
        them in a human-readable format. Supported formats: .xml, .gz, .zip.
      </p>
      <ul className="mb-2 list-disc pl-5 text-sm">
        <li>Maximum file size: 10MB</li>
        <li>Multiple files supported</li>
        <li>All processing is done securely in the cloud</li>
      </ul>
      <p className="text-xs text-gray-500">
        Need help?{" "}
        <a href="/docs" className="text-primary hover:underline">
          Read the docs
        </a>{" "}
        or{" "}
        <a href="/contact" className="text-primary hover:underline">
          contact support
        </a>
        .
      </p>
    </div>
  );

  return (
    <ToolLayout
      title="DMARC XML Converter"
      description="Upload DMARC XML feedback files (compressed or uncompressed) and view them in a human-readable format."
      sidebarContent={sidebarContent}
    >
      <div className="container">
        <Card className="mb-8">
          <div
            className="border-primary/30 bg-secondary hover:bg-primary/10 flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-8 transition"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={handleBrowse}
            tabIndex={0}
            role="button"
            aria-label="Upload DMARC XML files"
          >
            <FaUpload className="text-primary mb-2 h-10 w-10" />
            <span className="text-primary font-semibold">
              Drag and drop DMARC XML, .gz, or .zip files here
            </span>
            <span className="mt-1 text-sm text-gray-500">
              or click to browse
            </span>
            <span className="mt-2 text-xs text-gray-400">
              Maximum file size: 10MB. Multiple files supported.
            </span>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              multiple
              accept=".xml,.gz,.zip,application/xml,text/xml,application/gzip,application/x-gzip,application/zip"
              onChange={(e) => handleFiles(e.target.files)}
            />
          </div>
          {error && (
            <div className="mt-4">
              <Alert variant="error" title="Error">
                {error}
              </Alert>
            </div>
          )}
        </Card>
        {files.length > 0 && (
          <Card className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">
                Uploaded Files
              </span>
              <span className="ml-4 flex-1 border-b border-gray-200" />
            </div>
            <ul className="divide-y divide-gray-100">
              {files.map((file, idx) => {
                const ext = file.name.split(".").pop()?.toUpperCase() || "FILE";
                return (
                  <li
                    key={file.name + idx}
                    className="group mb-2 flex items-center gap-4 rounded-lg bg-white px-3 py-4 transition-shadow hover:shadow-md"
                    style={{ minHeight: 64 }}
                  >
                    <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      {getFileIcon(file.type || file.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="max-w-xs truncate font-medium text-gray-900">
                          {file.name}
                        </span>
                        <span
                          className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold ${ext === "XML" ? "border-primary/20 bg-secondary text-primary" : ext === "ZIP" ? "border-green-200 bg-green-50 text-green-700" : "border-gray-200 bg-gray-50 text-gray-600"}`}
                        >
                          {ext}
                        </span>
                        <span className="text-xs text-gray-400">
                          {(file.size / 1024).toFixed(1)} KB
                        </span>
                        {/* Checkmark for new file (static for now) */}
                        <span
                          className="ml-1 text-green-500"
                          aria-label="File added"
                        >
                          ✓
                        </span>
                      </div>
                    </div>
                    <button
                      aria-label={`Remove file ${file.name}`}
                      title="Remove file"
                      className="border-primary/20 text-primary hover:bg-secondary hover:text-foreground ml-2 rounded-full border p-2 transition group-hover:shadow"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(idx);
                      }}
                      type="button"
                    >
                      <FaTimesCircle className="h-4 w-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 flex flex-col items-center gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleProcess}
                disabled={loading || files.length === 0}
                className="mx-auto w-56 shadow-md"
                aria-label="Process uploaded files"
              >
                {loading ? "Processing..." : "Process Files"}
              </Button>
              {error && (
                <Alert variant="error" title="Error">
                  {error}
                </Alert>
              )}
            </div>
          </Card>
        )}
        {results.length > 0 && (
          <div className="space-y-8">
            {results.map((res, idx) => (
              <Card
                key={res.name + idx}
                className="border-primary/20 bg-secondary"
              >
                <div
                  className="flex cursor-pointer items-center gap-2"
                  onClick={() => toggleExpand(res.name)}
                >
                  {expanded[res.name] ? (
                    <FaChevronDown className="text-primary h-4 w-4" />
                  ) : (
                    <FaChevronRight className="text-primary h-4 w-4" />
                  )}
                  <span className="text-foreground font-semibold">
                    {res.name}
                  </span>
                  {res.error ? (
                    <span className="ml-2 rounded-full border border-red-200 bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-800">
                      Error
                    </span>
                  ) : (
                    <span className="ml-2 rounded-full border border-green-200 bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                      Processed
                    </span>
                  )}
                </div>
                {expanded[res.name] && (
                  <div className="mt-4">
                    {res.error ? (
                      <Alert variant="error" title="Processing Error">
                        {res.error}
                      </Alert>
                    ) : (
                      <div>
                        <div className="mb-2 text-gray-700">
                          <span className="font-semibold">Org:</span>{" "}
                          {res.summary.org || (
                            <span className="text-gray-400">N/A</span>
                          )}
                          <br />
                          <span className="font-semibold">Domain:</span>{" "}
                          {res.summary.domain || (
                            <span className="text-gray-400">N/A</span>
                          )}
                          <br />
                          <span className="font-semibold">
                            Date Range:
                          </span>{" "}
                          {res.summary.date_range.begin} -{" "}
                          {res.summary.date_range.end}
                          <br />
                          <span className="font-semibold">Records:</span>{" "}
                          {res.summary.record_count}
                        </div>
                        {/* Charts */}
                        {res.summary.records &&
                          res.summary.records.length > 0 && (
                            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                              <div className="flex min-h-[320px] flex-col items-center rounded-lg border bg-white p-4 shadow-sm">
                                <h4 className="mb-2 text-sm font-semibold text-gray-900">
                                  Disposition Breakdown
                                </h4>
                                <div className="h-64 w-full">
                                  <Pie
                                    data={getDispositionChartData(
                                      res.summary.records
                                    )}
                                    options={chartOptions}
                                  />
                                </div>
                              </div>
                              <div className="flex min-h-[320px] flex-col items-center rounded-lg border bg-white p-4 shadow-sm">
                                <h4 className="mb-2 text-sm font-semibold text-gray-900">
                                  Top Source IPs
                                </h4>
                                <div className="h-64 w-full">
                                  <Bar
                                    data={getSourceIpChartData(
                                      res.summary.records
                                    )}
                                    options={chartOptions}
                                  />
                                </div>
                              </div>
                              <div className="flex min-h-[320px] flex-col items-center rounded-lg border bg-white p-4 shadow-sm">
                                <h4 className="mb-2 text-sm font-semibold text-gray-900">
                                  DKIM vs SPF Pass/Fail
                                </h4>
                                <div className="h-64 w-full">
                                  <Bar
                                    data={getDkimSpfChartData(
                                      res.summary.records
                                    )}
                                    options={chartOptions}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        <div className="overflow-x-auto">
                          <table className="mt-2 min-w-full border text-left text-xs">
                            <thead className="bg-primary/10">
                              <tr>
                                <th className="px-2 py-1 font-semibold">
                                  Source IP
                                </th>
                                <th className="px-2 py-1 font-semibold">
                                  Count
                                </th>
                                <th className="px-2 py-1 font-semibold">
                                  Disposition
                                </th>
                                <th className="px-2 py-1 font-semibold">
                                  DKIM
                                </th>
                                <th className="px-2 py-1 font-semibold">SPF</th>
                                <th className="px-2 py-1 font-semibold">
                                  Envelope From
                                </th>
                                <th className="px-2 py-1 font-semibold">
                                  Header From
                                </th>
                                <th className="px-2 py-1 font-semibold">
                                  DKIM Domains
                                </th>
                                <th className="px-2 py-1 font-semibold">
                                  SPF Domains
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {res.summary.records.map(
                                (rec: any, i: number) => (
                                  <tr key={i} className="border-t">
                                    <td className="px-2 py-1">
                                      {rec.source_ip}
                                    </td>
                                    <td className="px-2 py-1">{rec.count}</td>
                                    <td className="px-2 py-1">
                                      {rec.disposition}
                                    </td>
                                    <td className="px-2 py-1">{rec.dkim}</td>
                                    <td className="px-2 py-1">{rec.spf}</td>
                                    <td className="px-2 py-1">
                                      {rec.envelope_from}
                                    </td>
                                    <td className="px-2 py-1">
                                      {rec.header_from}
                                    </td>
                                    <td className="px-2 py-1">
                                      {rec.dkim_domains.join(", ")}
                                    </td>
                                    <td className="px-2 py-1">
                                      {rec.spf_domains.join(", ")}
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
        <RelatedTools />
      </div>
    </ToolLayout>
  );
}
