"use client";

import { useState, useRef } from "react";
import { FaFileAlt, FaUpload, FaTimesCircle, FaCheckCircle, FaInfoCircle, FaChevronDown, FaChevronRight } from "react-icons/fa";
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
      },
      {
        label: "Fail",
        data: [dkimFail, spfFail],
        backgroundColor: "#ef4444",
      },
    ],
  };
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none -z-10">
          <svg className="absolute bottom-0 left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0066FF"
              fillOpacity="0.1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-blue-600">DMARC XML</span> Converter
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              DMARC XML feedback contains lots of useful information, but is nearly impossible for a human to read. This tool lets you upload DMARC XML (compressed or uncompressed) and view it in a human-readable format.
            </p>
          </div>
          {/* Upload Area */}
          <div
            className="max-w-2xl mx-auto mt-10 border-2 border-dashed border-blue-300 rounded-xl bg-blue-50 p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-100 transition"
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
            <div className="max-w-2xl mx-auto mt-4 rounded-lg bg-red-50 border border-red-200 p-4 flex items-center gap-2">
              <FaTimesCircle className="text-red-600 w-5 h-5" />
              <span className="text-red-700 font-semibold">{error}</span>
            </div>
          )}
        </div>
      </section>
      {/* Uploaded Files List & Results */}
      {files.length > 0 && (
        <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Uploaded Files</h2>
              <ul className="divide-y divide-gray-100">
                {files.map((file, idx) => (
                  <li key={file.name + idx} className="py-4 flex items-center gap-4">
                    {getFileIcon(file.type || file.name)}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900">{file.name}</div>
                      <div className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</div>
                    </div>
                    <button
                      className="ml-2 px-2 py-1 rounded bg-red-100 hover:bg-red-200 text-red-700 text-xs font-semibold flex items-center gap-1 border border-red-200 transition"
                      onClick={e => { e.stopPropagation(); handleRemove(idx); }}
                      title="Remove file"
                    >
                      <FaTimesCircle className="w-4 h-4" /> Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col items-center gap-4">
                <button
                  className="rounded-lg bg-blue-600 text-white font-semibold px-8 py-3 text-lg shadow hover:bg-blue-700 transition-colors disabled:opacity-60"
                  onClick={handleProcess}
                  disabled={loading || files.length === 0}
                >
                  {loading ? "Processing..." : "Process Files"}
                </button>
                {error && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex items-center gap-2">
                    <FaTimesCircle className="text-red-600 w-5 h-5" />
                    <span className="text-red-700 font-semibold">{error}</span>
                  </div>
                )}
              </div>
              {/* Results */}
              {results.length > 0 && (
                <div className="mt-10 space-y-6">
                  {results.map((res, idx) => (
                    <div key={res.name + idx} className="rounded-lg border bg-blue-50 p-4">
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
                            <div className="text-red-700 font-semibold flex items-center gap-2"><FaTimesCircle /> {res.error}</div>
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
                                  <div className="bg-white rounded-lg p-4 border shadow-sm flex flex-col items-center">
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Disposition Breakdown</h4>
                                    <Pie data={getDispositionChartData(res.summary.records)} />
                                  </div>
                                  <div className="bg-white rounded-lg p-4 border shadow-sm flex flex-col items-center">
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Top Source IPs</h4>
                                    <Bar data={getSourceIpChartData(res.summary.records)} options={{ plugins: { legend: { display: false } } }} />
                                  </div>
                                  <div className="bg-white rounded-lg p-4 border shadow-sm flex flex-col items-center">
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">DKIM vs SPF Pass/Fail</h4>
                                    <Bar data={getDkimSpfChartData(res.summary.records)} options={{ plugins: { legend: { position: 'bottom' } }, responsive: true, scales: { x: { stacked: true }, y: { stacked: true } } }} />
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
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      {/* CTA for DMARC Monitoring */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-xl border bg-blue-50 p-6 shadow-sm flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-1">Want to automate DMARC XML processing?</h3>
            <p className="text-gray-700">Try our DMARC Monitoring service to automatically receive, upload, and process reports. Observe trends and create alerts for what matters most.</p>
          </div>
          <a
            href="/contact"
            className="rounded-lg bg-blue-600 text-white font-semibold px-8 py-3 text-lg shadow hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
} 