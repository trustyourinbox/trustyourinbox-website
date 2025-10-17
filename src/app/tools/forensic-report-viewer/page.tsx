"use client";
import { useState, useRef } from "react";
import { ToolLayout } from "@/components/ui/ToolLayout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import {
  FaUpload,
  FaFileAlt,
  FaTimesCircle,
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaSyncAlt,
} from "react-icons/fa";
import { Shield, Mail, Key } from "lucide-react";
import Link from "next/link";

interface ForensicReport {
  id: string;
  date: string;
  sourceIp: string;
  from: string;
  to: string;
  subject: string;
  disposition: string;
  dkim: string;
  spf: string;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_TYPES = ["application/xml", "text/xml", ".xml"];

function getFileIcon(type: string) {
  return <FaFileAlt className="h-5 w-5 text-primary" />;
}

function RelatedTools() {
  const tools = [
    {
      id: "dmarc-analyzer",
      name: "DMARC Analyzer",
      description: "Analyze your DMARC configuration and get detailed reports",
      icon: <Shield className="h-6 w-6 text-primary" />,
      href: "/tools/dmarc-analyzer",
      color: "bg-secondary dark:bg-primary",
      borderColor: "border-primary/20 dark:border-primary",
      iconBg: "bg-primary/10 dark:bg-primary",
    },
    {
      id: "spf-surveyor",
      name: "SPF Surveyor",
      description: "Validate and troubleshoot your SPF records",
      icon: <Mail className="h-6 w-6 text-primary" />,
      href: "/tools/spf-surveyor",
      color: "bg-green-50 dark:bg-green-950",
      borderColor: "border-green-200 dark:border-green-800",
      iconBg: "bg-green-100 dark:bg-green-900",
    },
    {
      id: "dkim-validator",
      name: "DKIM Validator",
      description: "Verify your DKIM signatures and configuration",
      icon: <Key className="h-6 w-6 text-primary" />,
      href: "/tools/dkim-validator",
      color: "bg-purple-50 dark:bg-purple-950",
      borderColor: "border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-100 dark:bg-purple-900",
    },
  ];

  return (
    <div className="mb-8 mt-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Related Tools</h2>
        <p className="mt-1 text-muted-foreground">
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
                <p className="mt-1 text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ForensicReportViewerPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [reports, setReports] = useState<ForensicReport[]>([]);
  const [search, setSearch] = useState("");
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<"table" | "dashboard">(
    "dashboard"
  );

  function handleFiles(selected: FileList | null) {
    if (!selected) return;
    setUploadError(null);
    const valid: File[] = [];
    for (const file of Array.from(selected)) {
      if (file.size > MAX_FILE_SIZE) {
        setUploadError(`File ${file.name} exceeds 10MB limit.`);
        continue;
      }
      if (
        !ACCEPTED_TYPES.some(
          (type) => file.type.includes(type) || file.name.endsWith(type)
        )
      ) {
        setUploadError(`File ${file.name} is not a supported format.`);
        continue;
      }
      valid.push(file);
    }
    setFiles((prev) => [...prev, ...valid]);
    // TODO: Parse files and extract forensic report data
    // For now, add mock reports for each file
    setReports([
      {
        id: "1",
        date: "2024-06-01",
        sourceIp: "192.0.2.1",
        from: "attacker@example.com",
        to: "victim@example.com",
        subject: "Suspicious Email",
        disposition: "quarantine",
        dkim: "fail",
        spf: "pass",
      },
      {
        id: "2",
        date: "2024-06-02",
        sourceIp: "203.0.113.5",
        from: "trusted@example.com",
        to: "user@example.com",
        subject: "Legit Email",
        disposition: "none",
        dkim: "pass",
        spf: "pass",
      },
    ]);
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
    // Optionally remove corresponding reports
  }

  // Filter reports by search
  const filteredReports = reports.filter(
    (r) =>
      r.from.toLowerCase().includes(search.toLowerCase()) ||
      r.to.toLowerCase().includes(search.toLowerCase()) ||
      r.subject.toLowerCase().includes(search.toLowerCase()) ||
      r.sourceIp.includes(search)
  );

  // Export as CSV
  function handleExport() {
    const csv = [
      [
        "Date",
        "Source IP",
        "From",
        "To",
        "Subject",
        "Disposition",
        "DKIM",
        "SPF",
      ],
      ...filteredReports.map((r) => [
        r.date,
        r.sourceIp,
        r.from,
        r.to,
        r.subject,
        r.disposition,
        r.dkim,
        r.spf,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "forensic-dmarc-reports.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  // Dashboard summary calculations
  const totalReports = reports.length;
  const dkimPass = reports.filter((r) => r.dkim === "pass").length;
  const dkimFail = reports.filter((r) => r.dkim === "fail").length;
  const spfPass = reports.filter((r) => r.spf === "pass").length;
  const spfFail = reports.filter((r) => r.spf === "fail").length;
  const dkimPassRate = totalReports
    ? Math.round((dkimPass / totalReports) * 100)
    : 0;
  const spfPassRate = totalReports
    ? Math.round((spfPass / totalReports) * 100)
    : 0;
  const quarantined = reports.filter(
    (r) => r.disposition === "quarantine"
  ).length;
  const rejected = reports.filter((r) => r.disposition === "reject").length;
  const none = reports.filter((r) => r.disposition === "none").length;
  // Top sender domains
  const senderDomainCounts: Record<string, number> = {};
  reports.forEach((r) => {
    const domain = r.from.split("@")[1] || "unknown";
    senderDomainCounts[domain] = (senderDomainCounts[domain] || 0) + 1;
  });
  const topSenderDomains = Object.entries(senderDomainCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const sidebarContent = (
    <>
      <h4 className="mb-2 font-semibold">What is a Forensic DMARC Report?</h4>
      <p className="mb-3 text-sm">
        Forensic (ruf) DMARC reports are detailed notifications sent when an
        email fails DMARC authentication. They help you investigate suspicious
        or failed messages.
      </p>
      <h4 className="mb-2 font-semibold">How to Use This Tool</h4>
      <ol className="mb-3 list-decimal pl-5 text-sm">
        <li>
          Upload one or more <b>.xml</b> forensic DMARC report files.
        </li>
        <li>Review the parsed incidents in the table below.</li>
        <li>Search, filter, and export results as needed.</li>
      </ol>
      <div className="mb-3">
        <span className="mb-1 inline-block rounded bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800">
          Privacy
        </span>
        <p className="text-xs text-gray-600">
          Forensic reports may contain sensitive message data. Handle and store
          them securely.
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
      title="Forensic Report Viewer"
      description="View and analyze DMARC forensic reports in a human-readable format."
      sidebarContent={sidebarContent}
    >
      <div className="container">
        <Card>
          <div className="space-y-4">
            <div
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/30 bg-secondary p-8 transition hover:bg-primary/10"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={handleBrowse}
              tabIndex={0}
              role="button"
              aria-label="Upload Forensic DMARC XML files"
            >
              <FaUpload className="mb-2 h-10 w-10 text-primary" />
              <span className="font-semibold text-primary">
                Drag and drop Forensic DMARC XML files here
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
                accept=".xml,application/xml,text/xml"
                onChange={(e) => handleFiles(e.target.files)}
              />
            </div>
            {uploadError && (
              <div className="mt-4 text-red-600">{uploadError}</div>
            )}
          </div>
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
                          className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold ${ext === "XML" ? "border-primary/20 bg-secondary text-primary" : "border-gray-200 bg-gray-50 text-gray-600"}`}
                        >
                          {ext}
                        </span>
                        <span className="text-xs text-gray-400">
                          {(file.size / 1024).toFixed(1)} KB
                        </span>
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
                      className="ml-2 rounded-full border border-primary/20 p-2 text-primary transition hover:bg-secondary hover:text-foreground group-hover:shadow"
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
          </Card>
        )}
        {/* Tabs for Table View and Dashboard */}
        <div className="mb-6 flex items-center gap-2">
          <button
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${activeTab === "table" ? "bg-gray-100 text-primary" : "bg-white text-gray-500 hover:bg-gray-50"}`}
            onClick={() => setActiveTab("table")}
          >
            Table View
          </button>
          <button
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${activeTab === "dashboard" ? "bg-gray-100 text-primary" : "bg-white text-gray-500 hover:bg-gray-50"}`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>
        </div>
        {/* Dashboard View */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <h2 className="mb-4 text-2xl font-bold">DMARC Summary Dashboard</h2>
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col items-start justify-center p-4">
                <div className="mb-1 text-xs text-gray-500">Total Reports</div>
                <div className="text-3xl font-bold">{totalReports}</div>
                <div className="mt-1 text-xs text-gray-400">From 5/31/2024</div>
              </Card>
              <Card className="flex flex-col items-start justify-center p-4">
                <div className="mb-1 text-xs text-gray-500">DKIM Pass Rate</div>
                <div className="text-3xl font-bold">{dkimPassRate}%</div>
                <div className="mt-2 h-2 w-full rounded bg-gray-200">
                  <div
                    className="h-2 rounded bg-green-500"
                    style={{ width: `${dkimPassRate}%` }}
                  />
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  ({dkimPass}/{totalReports})
                </div>
              </Card>
              <Card className="flex flex-col items-start justify-center p-4">
                <div className="mb-1 text-xs text-gray-500">SPF Pass Rate</div>
                <div className="text-3xl font-bold">{spfPassRate}%</div>
                <div className="mt-2 h-2 w-full rounded bg-gray-200">
                  <div
                    className="h-2 rounded bg-green-500"
                    style={{ width: `${spfPassRate}%` }}
                  />
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  ({spfPass}/{totalReports})
                </div>
              </Card>
              <Card className="flex flex-col items-start justify-center p-4">
                <div className="mb-1 text-xs text-gray-500">Policy Actions</div>
                <div className="mt-2 flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-yellow-700">
                      {quarantined}
                    </span>
                    <span className="text-xs text-yellow-700">Quarantined</span>
                    <span className="text-xs text-gray-400">
                      {totalReports
                        ? Math.round((quarantined / totalReports) * 100)
                        : 0}
                      %
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-red-700">
                      {rejected}
                    </span>
                    <span className="text-xs text-red-700">Rejected</span>
                    <span className="text-xs text-gray-400">
                      {totalReports
                        ? Math.round((rejected / totalReports) * 100)
                        : 0}
                      %
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card className="p-4">
                <div className="mb-2 text-lg font-semibold">
                  Top Sender Domains
                </div>
                <div className="mb-2 text-xs text-gray-500">
                  Domains with the most email reports
                </div>
                {topSenderDomains.map(([domain, count]) => (
                  <div key={domain} className="mb-1 flex items-center gap-2">
                    <span className="font-mono text-sm text-gray-900">
                      {domain}
                    </span>
                    <span className="ml-auto text-xs font-semibold text-gray-700">
                      {count}
                    </span>
                    <div className="h-2 w-24 rounded bg-gray-200">
                      <div
                        className="h-2 rounded bg-gray-900"
                        style={{
                          width: `${(Number(count) / totalReports) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Card>
              <Card className="p-4">
                <div className="mb-2 text-lg font-semibold">
                  Authentication Results
                </div>
                <div className="mb-2 text-xs text-gray-500">
                  DKIM and SPF authentication status
                </div>
                <div className="mb-2">DKIM Results</div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-semibold text-green-600">Pass</span>
                  <div className="h-2 w-24 rounded bg-gray-200">
                    <div
                      className="h-2 rounded bg-green-500"
                      style={{ width: `${(dkimPass / totalReports) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-700">{dkimPass}</span>
                  <span className="ml-4 font-semibold text-red-600">Fail</span>
                  <div className="h-2 w-24 rounded bg-gray-200">
                    <div
                      className="h-2 rounded bg-red-500"
                      style={{ width: `${(dkimFail / totalReports) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-700">{dkimFail}</span>
                </div>
                <div className="mb-2">SPF Results</div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-green-600">Pass</span>
                  <div className="h-2 w-24 rounded bg-gray-200">
                    <div
                      className="h-2 rounded bg-green-500"
                      style={{ width: `${(spfPass / totalReports) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-700">{spfPass}</span>
                  <span className="ml-4 font-semibold text-red-600">Fail</span>
                  <div className="h-2 w-24 rounded bg-gray-200">
                    <div
                      className="h-2 rounded bg-red-500"
                      style={{ width: `${(spfFail / totalReports) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-700">{spfFail}</span>
                </div>
              </Card>
            </div>
          </div>
        )}
        {/* Table View */}
        {activeTab === "table" && (
          <>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="Search by sender, recipient, subject, or IP..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full max-w-xs"
                />
                <Button variant="ghost" size="icon" aria-label="Refresh">
                  <FaSyncAlt className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Filter">
                  <FaFilter className="h-4 w-4" />
                </Button>
              </div>
              <Button
                onClick={handleExport}
                disabled={filteredReports.length === 0}
                className="ml-4 bg-black text-white hover:bg-gray-900"
              >
                Export CSV
              </Button>
            </div>
            <Card>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-3 py-2 text-left font-semibold">
                        Date
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Source IP
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        From
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">To</th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Subject
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Disposition
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReports.length === 0 ? (
                      <tr>
                        <td
                          colSpan={8}
                          className="py-8 text-center text-gray-400"
                        >
                          No reports to display.
                        </td>
                      </tr>
                    ) : (
                      filteredReports.map((report) => (
                        <tr
                          key={report.id}
                          className="border-b hover:bg-gray-50"
                        >
                          <td className="px-3 py-2 font-mono text-xs text-gray-700">
                            {report.date}
                          </td>
                          <td className="rounded bg-gray-100 px-3 py-2 font-mono text-xs text-gray-900">
                            {report.sourceIp}
                          </td>
                          <td className="px-3 py-2 text-sm">{report.from}</td>
                          <td className="px-3 py-2 text-sm">{report.to}</td>
                          <td className="px-3 py-2 text-sm">
                            {report.subject}
                          </td>
                          <td className="px-3 py-2">
                            {report.disposition === "quarantine" && (
                              <span className="inline-flex items-center gap-1 rounded-full border border-yellow-200 bg-yellow-50 px-2 py-0.5 text-xs font-semibold text-yellow-800">
                                <svg
                                  className="h-3 w-3 text-yellow-500"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <path d="M12 8v4m0 4h.01" />
                                </svg>
                                Quarantine
                              </span>
                            )}
                            {report.disposition === "reject" && (
                              <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-800">
                                <svg
                                  className="h-3 w-3 text-red-500"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <path d="M15 9l-6 6m0-6l6 6" />
                                </svg>
                                Reject
                              </span>
                            )}
                            {report.disposition === "none" && (
                              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700">
                                None
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                Showing {filteredReports.length} of {reports.length} records
              </div>
            </Card>
          </>
        )}
        <RelatedTools />
      </div>
    </ToolLayout>
  );
}
