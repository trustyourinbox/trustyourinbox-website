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
  return <FaFileAlt className="text-primary h-5 w-5" />;
}

function RelatedTools() {
  const tools = [
    {
      id: "dmarc-analyzer",
      name: "DMARC Analyzer",
      description: "Analyze DMARC configuration and get detailed reports",
      icon: <Shield className="text-primary h-4 w-4" />,
      href: "/tools/dmarc-analyzer",
    },
    {
      id: "spf-surveyor",
      name: "SPF Surveyor",
      description: "Validate and troubleshoot your SPF records",
      icon: <Mail className="text-primary h-4 w-4" />,
      href: "/tools/spf-surveyor",
    },
    {
      id: "dkim-validator",
      name: "DKIM Validator",
      description: "Verify your DKIM signatures and configuration",
      icon: <Key className="text-primary h-4 w-4" />,
      href: "/tools/dkim-validator",
    },
  ];

  return (
    <div className="mt-8 mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold tracking-tight">Related Tools</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          More email authentication tools
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.href}
            className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
                {tool.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                  {tool.name}
                </h3>
                <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                  {tool.description}
                </p>
              </div>
            </div>
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
        <span className="bg-warning/10 text-warning mb-1 inline-block rounded px-2 py-0.5 text-xs font-semibold">
          Privacy
        </span>
        <p className="text-muted-foreground text-xs">
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
        <Card className="mt-8 mb-8">
          <div className="space-y-4">
            <div
              className="border-primary/30 bg-secondary hover:bg-primary/10 flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-8 transition"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={handleBrowse}
              tabIndex={0}
              role="button"
              aria-label="Upload Forensic DMARC XML files"
            >
              <FaUpload className="text-primary mb-2 h-10 w-10" />
              <span className="text-primary font-semibold">
                Drag and drop Forensic DMARC XML files here
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
                accept=".xml,application/xml,text/xml"
                onChange={(e) => handleFiles(e.target.files)}
              />
            </div>
            {uploadError && (
              <div className="text-destructive mt-4">{uploadError}</div>
            )}
          </div>
        </Card>
        {files.length > 0 && (
          <Card className="mt-8 mb-8 p-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-foreground text-lg font-bold">
                Uploaded Files
              </span>
              <span className="border-border ml-4 flex-1 border-b" />
            </div>
            <ul className="divide-border divide-y">
              {files.map((file, idx) => {
                const ext = file.name.split(".").pop()?.toUpperCase() || "FILE";
                return (
                  <li
                    key={file.name + idx}
                    className="group bg-card mb-2 flex items-center gap-4 rounded-lg px-4 py-4 transition-shadow hover:shadow-md"
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
                          className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold ${ext === "XML" ? "border-primary/20 bg-secondary text-primary" : "border-border bg-muted text-muted-foreground"}`}
                        >
                          {ext}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {(file.size / 1024).toFixed(1)} KB
                        </span>
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
          </Card>
        )}
        {/* Tabs for Table View and Dashboard */}
        <div className="mb-6 flex items-center gap-2">
          <button
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${activeTab === "table" ? "text-primary bg-muted" : "bg-card text-muted-foreground hover:bg-muted/50"}`}
            onClick={() => setActiveTab("table")}
          >
            Table View
          </button>
          <button
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${activeTab === "dashboard" ? "text-primary bg-muted" : "bg-card text-muted-foreground hover:bg-muted/50"}`}
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
                <div className="text-muted-foreground mb-1 text-xs">
                  Total Reports
                </div>
                <div className="text-3xl font-bold">{totalReports}</div>
                <div className="text-muted-foreground mt-1 text-xs">
                  From 5/31/2024
                </div>
              </Card>
              <Card className="flex flex-col items-start justify-center p-4">
                <div className="text-muted-foreground mb-1 text-xs">
                  DKIM Pass Rate
                </div>
                <div className="text-3xl font-bold">{dkimPassRate}%</div>
                <div className="bg-muted mt-2 h-2 w-full rounded">
                  <div
                    className="bg-success h-2 rounded"
                    style={{ width: `${dkimPassRate}%` }}
                  />
                </div>
                <div className="text-muted-foreground mt-1 text-xs">
                  ({dkimPass}/{totalReports})
                </div>
              </Card>
              <Card className="flex flex-col items-start justify-center p-4">
                <div className="text-muted-foreground mb-1 text-xs">
                  SPF Pass Rate
                </div>
                <div className="text-3xl font-bold">{spfPassRate}%</div>
                <div className="bg-muted mt-2 h-2 w-full rounded">
                  <div
                    className="bg-success h-2 rounded"
                    style={{ width: `${spfPassRate}%` }}
                  />
                </div>
                <div className="text-muted-foreground mt-1 text-xs">
                  ({spfPass}/{totalReports})
                </div>
              </Card>
              <Card className="flex flex-col items-start justify-center p-4">
                <div className="text-muted-foreground mb-1 text-xs">
                  Policy Actions
                </div>
                <div className="mt-2 flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-warning text-lg font-bold">
                      {quarantined}
                    </span>
                    <span className="text-warning text-xs">Quarantined</span>
                    <span className="text-muted-foreground text-xs">
                      {totalReports
                        ? Math.round((quarantined / totalReports) * 100)
                        : 0}
                      %
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-destructive text-lg font-bold">
                      {rejected}
                    </span>
                    <span className="text-destructive text-xs">Rejected</span>
                    <span className="text-muted-foreground text-xs">
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
                <div className="text-muted-foreground mb-2 text-xs">
                  Domains with the most email reports
                </div>
                {topSenderDomains.map(([domain, count]) => (
                  <div key={domain} className="mb-1 flex items-center gap-2">
                    <span className="text-foreground font-mono text-sm">
                      {domain}
                    </span>
                    <span className="text-foreground ml-auto text-xs font-semibold">
                      {count}
                    </span>
                    <div className="bg-muted h-2 w-24 rounded">
                      <div
                        className="bg-foreground h-2 rounded"
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
                <div className="text-muted-foreground mb-2 text-xs">
                  DKIM and SPF authentication status
                </div>
                <div className="mb-2">DKIM Results</div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-success font-semibold">Pass</span>
                  <div className="bg-muted h-2 w-24 rounded">
                    <div
                      className="bg-success h-2 rounded"
                      style={{ width: `${(dkimPass / totalReports) * 100}%` }}
                    />
                  </div>
                  <span className="text-foreground text-xs">{dkimPass}</span>
                  <span className="text-destructive ml-4 font-semibold">
                    Fail
                  </span>
                  <div className="bg-muted h-2 w-24 rounded">
                    <div
                      className="bg-destructive h-2 rounded"
                      style={{ width: `${(dkimFail / totalReports) * 100}%` }}
                    />
                  </div>
                  <span className="text-foreground text-xs">{dkimFail}</span>
                </div>
                <div className="mb-2">SPF Results</div>
                <div className="flex items-center gap-2">
                  <span className="text-success font-semibold">Pass</span>
                  <div className="bg-muted h-2 w-24 rounded">
                    <div
                      className="bg-success h-2 rounded"
                      style={{ width: `${(spfPass / totalReports) * 100}%` }}
                    />
                  </div>
                  <span className="text-foreground text-xs">{spfPass}</span>
                  <span className="text-destructive ml-4 font-semibold">
                    Fail
                  </span>
                  <div className="bg-muted h-2 w-24 rounded">
                    <div
                      className="bg-destructive h-2 rounded"
                      style={{ width: `${(spfFail / totalReports) * 100}%` }}
                    />
                  </div>
                  <span className="text-foreground text-xs">{spfFail}</span>
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
                className="bg-foreground text-background hover:bg-foreground/90 ml-4"
              >
                Export CSV
              </Button>
            </div>
            <Card>
              <div className="border-border overflow-x-auto border">
                <table className="min-w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-border bg-muted border-b-2">
                      <th className="border-border border-r px-4 py-3 text-left font-semibold">
                        Date
                      </th>
                      <th className="border-border border-r px-4 py-3 text-left font-semibold">
                        Source IP
                      </th>
                      <th className="border-border border-r px-4 py-3 text-left font-semibold">
                        From
                      </th>
                      <th className="border-border border-r px-4 py-3 text-left font-semibold">
                        To
                      </th>
                      <th className="border-border border-r px-4 py-3 text-left font-semibold">
                        Subject
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Disposition
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReports.length === 0 ? (
                      <tr>
                        <td
                          colSpan={8}
                          className="text-muted-foreground py-8 text-center"
                        >
                          No reports to display.
                        </td>
                      </tr>
                    ) : (
                      filteredReports.map((report, idx) => (
                        <tr
                          key={report.id}
                          className={`border-border hover:bg-muted/70 border-b ${idx % 2 === 0 ? "bg-muted/20" : ""}`}
                        >
                          <td className="border-border text-muted-foreground border-r px-4 py-3 font-mono text-xs">
                            {report.date}
                          </td>
                          <td className="border-border bg-muted text-foreground border-r px-4 py-3 font-mono text-xs">
                            {report.sourceIp}
                          </td>
                          <td className="border-border border-r px-4 py-3 text-sm">
                            {report.from}
                          </td>
                          <td className="border-border border-r px-4 py-3 text-sm">
                            {report.to}
                          </td>
                          <td className="border-border border-r px-4 py-3 text-sm">
                            {report.subject}
                          </td>
                          <td className="px-4 py-3">
                            {report.disposition === "quarantine" && (
                              <span className="border-warning/20 bg-warning/10 text-warning inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold">
                                <svg
                                  className="text-warning h-3 w-3"
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
                              <span className="border-destructive/20 bg-destructive/10 text-destructive inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold">
                                <svg
                                  className="text-destructive h-3 w-3"
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
                              <span className="border-border bg-muted text-muted-foreground inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold">
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
              <div className="text-muted-foreground mt-4 px-4 pb-4 text-xs">
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
