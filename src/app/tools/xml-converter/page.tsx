"use client";

import { useState, useRef } from "react";
import {
  FaFileAlt,
  FaUpload,
  FaTimesCircle,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/Chart";
import { ToolLayout, Card, Button, Input, Alert } from "@/components/ui";
import { Shield, Mail, Key, ArrowRight, BarChart2 } from "lucide-react";
import Link from "next/link";

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
    return <FaFileAlt className="text-success h-5 w-5" />;
  return <FaFileAlt className="text-muted-foreground h-5 w-5" />;
}

function RelatedTools() {
  return (
    <div className="mt-8 mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold tracking-tight">Related Tools</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          More email authentication tools
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Link
          href="/tools/domain-checker"
          className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
        >
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
              <Shield className="text-primary h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                Domain Checker
              </h3>
              <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                Verify DMARC, SPF, and DKIM records
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/tools/forensic-report-viewer"
          className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
        >
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
              <BarChart2 className="text-primary h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                Forensic Report Viewer
              </h3>
              <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                Analyze DMARC forensic failure reports
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/tools/dmarc-policy-impact-simulator"
          className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
        >
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
              <Mail className="text-primary h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                Policy Impact Simulator
              </h3>
              <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                Simulate DMARC policy changes
              </p>
            </div>
          </div>
        </Link>
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
      <p className="text-muted-foreground text-xs">
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
          <div className="p-6">
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
              <span className="text-muted-foreground mt-1 text-sm">
                or click to browse
              </span>
              <span className="text-muted-foreground mt-2 text-xs">
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
          </div>
        </Card>
        {files.length > 0 && (
          <Card className="mb-8">
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-foreground text-lg font-bold">
                  Uploaded Files
                </span>
                <span className="border-border ml-4 flex-1 border-b" />
              </div>
              <ul className="divide-border divide-y">
                {files.map((file, idx) => {
                  const ext =
                    file.name.split(".").pop()?.toUpperCase() || "FILE";
                  return (
                    <li
                      key={file.name + idx}
                      className="group bg-muted/50 hover:bg-muted mb-2 flex items-center gap-4 rounded-lg px-3 py-4 transition-shadow"
                      style={{ minHeight: 64 }}
                    >
                      <div className="bg-muted mr-2 flex h-10 w-10 items-center justify-center rounded-full">
                        {getFileIcon(file.type || file.name)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-foreground max-w-xs truncate font-medium">
                            {file.name}
                          </span>
                          <span
                            className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold ${ext === "XML" ? "border-primary/20 bg-secondary text-primary" : ext === "ZIP" ? "border-success/20 bg-success/10 text-success" : "border-border bg-muted text-muted-foreground"}`}
                          >
                            {ext}
                          </span>
                          <span className="text-muted-foreground text-xs">
                            {(file.size / 1024).toFixed(1)} KB
                          </span>
                          {/* Checkmark for new file (static for now) */}
                          <span
                            className="text-success ml-1"
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
                  size="lg"
                  onClick={handleProcess}
                  disabled={loading || files.length === 0}
                  className="to-accent-hover from-primary mx-auto min-w-[224px] gap-2 bg-gradient-to-r text-white hover:opacity-90"
                  aria-label="Process uploaded files"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Process Files <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
                {error && (
                  <Alert variant="error" title="Error">
                    {error}
                  </Alert>
                )}
              </div>
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
                    <span className="border-destructive/20 bg-destructive/10 text-destructive ml-2 rounded-full border px-2 py-0.5 text-xs font-semibold">
                      Error
                    </span>
                  ) : (
                    <span className="border-success/20 bg-success/10 text-success ml-2 rounded-full border px-2 py-0.5 text-xs font-semibold">
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
                        <div className="text-foreground mb-2">
                          <span className="font-semibold">Org:</span>{" "}
                          {res.summary.org || (
                            <span className="text-muted-foreground">N/A</span>
                          )}
                          <br />
                          <span className="font-semibold">Domain:</span>{" "}
                          {res.summary.domain || (
                            <span className="text-muted-foreground">N/A</span>
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
                          res.summary.records.length > 0 &&
                          (() => {
                            // Process disposition data
                            const dispositionCounts: Record<string, number> =
                              {};
                            res.summary.records.forEach((r: any) => {
                              const disp = r.disposition || "none";
                              dispositionCounts[disp] =
                                (dispositionCounts[disp] || 0) +
                                Number(r.count || 1);
                            });
                            const dispositionData = Object.entries(
                              dispositionCounts
                            )
                              .map(([name, value]) => ({
                                name,
                                value,
                                fill:
                                  name === "none"
                                    ? "hsl(var(--success))"
                                    : name === "quarantine"
                                      ? "hsl(var(--warning))"
                                      : name === "reject"
                                        ? "hsl(var(--destructive))"
                                        : "hsl(var(--primary))",
                              }))
                              .filter((item) => item.value > 0);

                            // Process source IP data
                            const sourceCounts: Record<string, number> = {};
                            res.summary.records.forEach((r: any) => {
                              const ip = r.source_ip || "unknown";
                              sourceCounts[ip] =
                                (sourceCounts[ip] || 0) + Number(r.count || 1);
                            });
                            const sourceData = Object.entries(sourceCounts)
                              .sort((a, b) => b[1] - a[1])
                              .slice(0, 10)
                              .map(([name, value]) => ({ name, value }));

                            // Process DKIM/SPF data
                            let dkimPass = 0,
                              dkimFail = 0,
                              spfPass = 0,
                              spfFail = 0;
                            res.summary.records.forEach((r: any) => {
                              const count = Number(r.count || 1);
                              if (r.dkim === "pass") dkimPass += count;
                              else dkimFail += count;
                              if (r.spf === "pass") spfPass += count;
                              else spfFail += count;
                            });
                            const dkimSpfData = [
                              {
                                name: "DKIM Pass",
                                value: dkimPass,
                                fill: "hsl(var(--success))",
                              },
                              {
                                name: "DKIM Fail",
                                value: dkimFail,
                                fill: "hsl(var(--destructive))",
                              },
                              {
                                name: "SPF Pass",
                                value: spfPass,
                                fill: "hsl(var(--success))",
                              },
                              {
                                name: "SPF Fail",
                                value: spfFail,
                                fill: "hsl(var(--destructive))",
                              },
                            ];

                            return (
                              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                                {/* Disposition Pie Chart */}
                                <div className="border-border bg-card flex min-h-[320px] flex-col items-center rounded-lg border p-4 shadow-sm">
                                  <h3 className="text-foreground mb-4 text-lg font-semibold">
                                    Disposition Breakdown
                                  </h3>
                                  <ChartContainer
                                    config={{ value: { label: "Messages" } }}
                                    className="h-64 w-full"
                                  >
                                    <ResponsiveContainer
                                      width="100%"
                                      height="100%"
                                    >
                                      <PieChart>
                                        <ChartTooltip
                                          content={<ChartTooltipContent />}
                                        />
                                        <Pie
                                          data={dispositionData}
                                          dataKey="value"
                                          nameKey="name"
                                          cx="50%"
                                          cy="50%"
                                          innerRadius={50}
                                          outerRadius={80}
                                          paddingAngle={2}
                                          animationDuration={800}
                                          animationBegin={0}
                                        >
                                          {dispositionData.map(
                                            (entry, index) => (
                                              <Cell
                                                key={`cell-${index}`}
                                                fill={entry.fill}
                                              />
                                            )
                                          )}
                                        </Pie>
                                      </PieChart>
                                    </ResponsiveContainer>
                                  </ChartContainer>
                                </div>

                                {/* Source IP Bar Chart */}
                                <div className="border-border bg-card flex min-h-[320px] flex-col items-center rounded-lg border p-4 shadow-sm">
                                  <h3 className="text-foreground mb-4 text-lg font-semibold">
                                    Top Source IPs
                                  </h3>
                                  <ChartContainer
                                    config={{ value: { label: "Count" } }}
                                    className="h-64 w-full"
                                  >
                                    <ResponsiveContainer
                                      width="100%"
                                      height="100%"
                                    >
                                      <BarChart
                                        data={sourceData}
                                        layout="horizontal"
                                        margin={{ left: 0, right: 20 }}
                                      >
                                        <CartesianGrid
                                          strokeDasharray="3 3"
                                          className="stroke-muted"
                                        />
                                        <XAxis
                                          dataKey="name"
                                          className="text-xs"
                                          tickLine={false}
                                          axisLine={false}
                                          angle={-45}
                                          textAnchor="end"
                                          height={80}
                                        />
                                        <YAxis
                                          className="text-xs"
                                          tickLine={false}
                                          axisLine={false}
                                        />
                                        <ChartTooltip
                                          content={<ChartTooltipContent />}
                                        />
                                        <Bar
                                          dataKey="value"
                                          fill="hsl(var(--primary))"
                                          radius={[4, 4, 0, 0]}
                                          animationDuration={800}
                                        />
                                      </BarChart>
                                    </ResponsiveContainer>
                                  </ChartContainer>
                                </div>

                                {/* DKIM/SPF Bar Chart */}
                                <div className="border-border bg-card flex min-h-[320px] flex-col items-center rounded-lg border p-4 shadow-sm">
                                  <h3 className="text-foreground mb-4 text-lg font-semibold">
                                    DKIM vs SPF Pass/Fail
                                  </h3>
                                  <ChartContainer
                                    config={{ value: { label: "Count" } }}
                                    className="h-64 w-full"
                                  >
                                    <ResponsiveContainer
                                      width="100%"
                                      height="100%"
                                    >
                                      <BarChart data={dkimSpfData}>
                                        <CartesianGrid
                                          strokeDasharray="3 3"
                                          className="stroke-muted"
                                        />
                                        <XAxis
                                          dataKey="name"
                                          className="text-xs"
                                          tickLine={false}
                                          axisLine={false}
                                        />
                                        <YAxis
                                          className="text-xs"
                                          tickLine={false}
                                          axisLine={false}
                                        />
                                        <ChartTooltip
                                          content={<ChartTooltipContent />}
                                        />
                                        <Bar
                                          dataKey="value"
                                          radius={[4, 4, 0, 0]}
                                          animationDuration={800}
                                        >
                                          {dkimSpfData.map((entry, index) => (
                                            <Cell
                                              key={`cell-${index}`}
                                              fill={entry.fill}
                                            />
                                          ))}
                                        </Bar>
                                      </BarChart>
                                    </ResponsiveContainer>
                                  </ChartContainer>
                                </div>
                              </div>
                            );
                          })()}
                        <div className="overflow-x-auto">
                          <table className="mt-2 min-w-full border text-left text-xs">
                            <thead className="bg-muted">
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
