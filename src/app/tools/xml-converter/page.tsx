"use client";

import { useState, useRef } from "react";
import { FaFileAlt, FaUpload, FaTimesCircle, FaChevronDown, FaChevronRight } from "react-icons/fa";
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

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_TYPES = ["application/xml", "text/xml", "application/gzip", "application/x-gzip", "application/zip", ".xml", ".gz", ".zip"];

function getFileIcon(type: string) {
  if (type.includes("zip")) return <FaFileAlt className="text-blue-600 w-5 h-5" />;
  if (type.includes("gzip")) return <FaFileAlt className="text-green-600 w-5 h-5" />;
  return <FaFileAlt className="text-gray-600 w-5 h-5" />;
}

function getDispositionChartData(records: any[]) {
  const counts: Record<string, number> = {};
  records.forEach(r => {
    const disp = r.disposition || "none";
    counts[disp] = (counts[disp] || 0) + Number(r.count || 1);
  });
  const labels = Object.keys(counts);
  const data = labels.map(l => counts[l]);
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
          "#fbbf24"
        ],
        borderColor: "#e5e7eb",
        borderWidth: 2,
      },
    ],
  };
}

function getSourceIpChartData(records: any[]) {
  const counts: Record<string, number> = {};
  records.forEach(r => {
    const ip = r.source_ip || "unknown";
    counts[ip] = (counts[ip] || 0) + Number(r.count || 1);
  });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 10);
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
  let dkimPass = 0, dkimFail = 0, spfPass = 0, spfFail = 0;
  records.forEach(r => {
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
      if (!ACCEPTED_TYPES.some(type => file.type.includes(type) || file.name.endsWith(type))) {
        setError(`File ${file.name} is not a supported format.`);
        continue;
      }
      valid.push(file);
    }
    setFiles(prev => [...prev, ...valid]);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }

  function handleBrowse() {
    fileInputRef.current?.click();
  }

  function handleRemove(idx: number) {
    setFiles(prev => prev.filter((_, i) => i !== idx));
    setResults(prev => prev.filter((_, i) => i !== idx));
  }

  async function handleProcess() {
    setError(null);
    setLoading(true);
    setResults([]);
    try {
      const formData = new FormData();
      files.forEach(f => formData.append("file", f));
      const res = await fetch("/api/xml-converter", { method: "POST", body: formData });
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
    setExpanded(prev => ({ ...prev, [name]: !prev[name] }));
  }

  // Sidebar content
  const sidebarContent = (
    <div>
      <h4 className="font-semibold mb-2">About DMARC XML Converter</h4>
      <p className="mb-2">Upload DMARC XML feedback files (compressed or uncompressed) to view them in a human-readable format. Supported formats: .xml, .gz, .zip.</p>
      <ul className="list-disc pl-5 text-sm mb-2">
        <li>Maximum file size: 10MB</li>
        <li>Multiple files supported</li>
        <li>All processing is done securely in the cloud</li>
      </ul>
      <p className="text-xs text-gray-500">Need help? <a href="/docs" className="text-blue-600 hover:underline">Read the docs</a> or <a href="/contact" className="text-blue-600 hover:underline">contact support</a>.</p>
    </div>
  );

  return (
    <ToolLayout
      title="DMARC XML Converter"
      description="Upload DMARC XML feedback files (compressed or uncompressed) and view them in a human-readable format."
      sidebarContent={sidebarContent}
    >
      <Card className="mb-8">
        <div
          className="border-2 border-dashed border-blue-300 rounded-xl bg-blue-50 p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-100 transition"
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
          onClick={handleBrowse}
          tabIndex={0}
          role="button"
          aria-label="Upload DMARC XML files"
        >
          <FaUpload className="w-10 h-10 text-blue-600 mb-2" />
          <span className="font-semibold text-blue-700">Drag and drop DMARC XML, .gz, or .zip files here</span>
          <span className="text-gray-500 text-sm mt-1">or click to browse</span>
          <span className="text-gray-400 text-xs mt-2">Maximum file size: 10MB. Multiple files supported.</span>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            multiple
            accept=".xml,.gz,.zip,application/xml,text/xml,application/gzip,application/x-gzip,application/zip"
            onChange={e => handleFiles(e.target.files)}
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
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold text-gray-900">Uploaded Files</span>
            <span className="flex-1 border-b border-gray-200 ml-4" />
          </div>
          <ul className="divide-y divide-gray-100">
            {files.map((file, idx) => {
              const ext = file.name.split('.').pop()?.toUpperCase() || "FILE";
              return (
                <li
                  key={file.name + idx}
                  className="group py-4 px-3 flex items-center gap-4 bg-white rounded-lg transition-shadow hover:shadow-md mb-2"
                  style={{ minHeight: 64 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full mr-2">
                    {getFileIcon(file.type || file.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900 truncate max-w-xs">{file.name}</span>
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold border ${ext === 'XML' ? 'bg-blue-50 text-blue-700 border-blue-200' : ext === 'ZIP' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>{ext}</span>
                      <span className="text-xs text-gray-400">{(file.size / 1024).toFixed(1)} KB</span>
                      {/* Checkmark for new file (static for now) */}
                      <span className="ml-1 text-green-500" aria-label="File added">✓</span>
                    </div>
                  </div>
                  <button
                    aria-label={`Remove file ${file.name}`}
                    title="Remove file"
                    className="ml-2 p-2 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-800 transition group-hover:shadow"
                    onClick={e => { e.stopPropagation(); handleRemove(idx); }}
                    type="button"
                  >
                    <FaTimesCircle className="w-4 h-4" />
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
              className="shadow-md w-56 mx-auto"
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
            <Card key={res.name + idx} className="bg-blue-50 border-blue-200">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => toggleExpand(res.name)}>
                {expanded[res.name] ? <FaChevronDown className="w-4 h-4 text-blue-600" /> : <FaChevronRight className="w-4 h-4 text-blue-600" />}
                <span className="font-semibold text-blue-900">{res.name}</span>
                {res.error ? (
                  <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-semibold border bg-red-100 text-red-800 border-red-200">Error</span>
                ) : (
                  <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-semibold border bg-green-100 text-green-800 border-green-200">Processed</span>
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
                        <span className="font-semibold">Org:</span> {res.summary.org || <span className="text-gray-400">N/A</span>}<br />
                        <span className="font-semibold">Domain:</span> {res.summary.domain || <span className="text-gray-400">N/A</span>}<br />
                        <span className="font-semibold">Date Range:</span> {res.summary.date_range.begin} - {res.summary.date_range.end}<br />
                        <span className="font-semibold">Records:</span> {res.summary.record_count}
                      </div>
                      {/* Charts */}
                      {res.summary.records && res.summary.records.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                          <div className="bg-white rounded-lg p-4 border shadow-sm flex flex-col items-center min-h-[320px]">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Disposition Breakdown</h4>
                            <div className="w-full h-64">
                              <Pie data={getDispositionChartData(res.summary.records)} options={chartOptions} />
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border shadow-sm flex flex-col items-center min-h-[320px]">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Top Source IPs</h4>
                            <div className="w-full h-64">
                              <Bar data={getSourceIpChartData(res.summary.records)} options={chartOptions} />
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border shadow-sm flex flex-col items-center min-h-[320px]">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm">DKIM vs SPF Pass/Fail</h4>
                            <div className="w-full h-64">
                              <Bar data={getDkimSpfChartData(res.summary.records)} options={chartOptions} />
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-xs text-left border mt-2">
                          <thead className="bg-blue-100">
                            <tr>
                              <th className="px-2 py-1 font-semibold">Source IP</th>
                              <th className="px-2 py-1 font-semibold">Count</th>
                              <th className="px-2 py-1 font-semibold">Disposition</th>
                              <th className="px-2 py-1 font-semibold">DKIM</th>
                              <th className="px-2 py-1 font-semibold">SPF</th>
                              <th className="px-2 py-1 font-semibold">Envelope From</th>
                              <th className="px-2 py-1 font-semibold">Header From</th>
                              <th className="px-2 py-1 font-semibold">DKIM Domains</th>
                              <th className="px-2 py-1 font-semibold">SPF Domains</th>
                            </tr>
                          </thead>
                          <tbody>
                            {res.summary.records.map((rec: any, i: number) => (
                              <tr key={i} className="border-t">
                                <td className="px-2 py-1">{rec.source_ip}</td>
                                <td className="px-2 py-1">{rec.count}</td>
                                <td className="px-2 py-1">{rec.disposition}</td>
                                <td className="px-2 py-1">{rec.dkim}</td>
                                <td className="px-2 py-1">{rec.spf}</td>
                                <td className="px-2 py-1">{rec.envelope_from}</td>
                                <td className="px-2 py-1">{rec.header_from}</td>
                                <td className="px-2 py-1">{rec.dkim_domains.join(", ")}</td>
                                <td className="px-2 py-1">{rec.spf_domains.join(", ")}</td>
                              </tr>
                            ))}
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
      {/* Integration with Other Tools */}
      <Card className="mt-8" title="Related Tools">
        <div className="flex flex-wrap gap-4">
          <a href="/tools/dmarc-analyzer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <FaFileAlt className="w-5 h-5" />
            <span>DMARC Analyzer</span>
          </a>
          <a href="/tools/spf-surveyor" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <FaFileAlt className="w-5 h-5" />
            <span>SPF Surveyor</span>
          </a>
        </div>
      </Card>
    </ToolLayout>
  );
} 