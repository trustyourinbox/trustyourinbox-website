"use client";
import { useState, useRef } from 'react';
import { ToolLayout } from '@/components/ui/ToolLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { FaUpload, FaFileAlt, FaTimesCircle, FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight, FaFilter, FaSyncAlt } from 'react-icons/fa';

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
  return <FaFileAlt className="text-blue-600 w-5 h-5" />;
}

export default function ForensicReportViewerPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [reports, setReports] = useState<ForensicReport[]>([]);
  const [search, setSearch] = useState('');
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<'table' | 'dashboard'>('dashboard');

  function handleFiles(selected: FileList | null) {
    if (!selected) return;
    setUploadError(null);
    const valid: File[] = [];
    for (const file of Array.from(selected)) {
      if (file.size > MAX_FILE_SIZE) {
        setUploadError(`File ${file.name} exceeds 10MB limit.`);
        continue;
      }
      if (!ACCEPTED_TYPES.some(type => file.type.includes(type) || file.name.endsWith(type))) {
        setUploadError(`File ${file.name} is not a supported format.`);
        continue;
      }
      valid.push(file);
    }
    setFiles(prev => [...prev, ...valid]);
    // TODO: Parse files and extract forensic report data
    // For now, add mock reports for each file
    setReports([
      {
        id: '1',
        date: '2024-06-01',
        sourceIp: '192.0.2.1',
        from: 'attacker@example.com',
        to: 'victim@example.com',
        subject: 'Suspicious Email',
        disposition: 'quarantine',
        dkim: 'fail',
        spf: 'pass',
      },
      {
        id: '2',
        date: '2024-06-02',
        sourceIp: '203.0.113.5',
        from: 'trusted@example.com',
        to: 'user@example.com',
        subject: 'Legit Email',
        disposition: 'none',
        dkim: 'pass',
        spf: 'pass',
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
    setFiles(prev => prev.filter((_, i) => i !== idx));
    // Optionally remove corresponding reports
  }

  // Filter reports by search
  const filteredReports = reports.filter(r =>
    r.from.toLowerCase().includes(search.toLowerCase()) ||
    r.to.toLowerCase().includes(search.toLowerCase()) ||
    r.subject.toLowerCase().includes(search.toLowerCase()) ||
    r.sourceIp.includes(search)
  );

  // Export as CSV
  function handleExport() {
    const csv = [
      ['Date', 'Source IP', 'From', 'To', 'Subject', 'Disposition', 'DKIM', 'SPF'],
      ...filteredReports.map(r => [r.date, r.sourceIp, r.from, r.to, r.subject, r.disposition, r.dkim, r.spf]),
    ].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'forensic-dmarc-reports.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  // Dashboard summary calculations
  const totalReports = reports.length;
  const dkimPass = reports.filter(r => r.dkim === 'pass').length;
  const dkimFail = reports.filter(r => r.dkim === 'fail').length;
  const spfPass = reports.filter(r => r.spf === 'pass').length;
  const spfFail = reports.filter(r => r.spf === 'fail').length;
  const dkimPassRate = totalReports ? Math.round((dkimPass / totalReports) * 100) : 0;
  const spfPassRate = totalReports ? Math.round((spfPass / totalReports) * 100) : 0;
  const quarantined = reports.filter(r => r.disposition === 'quarantine').length;
  const rejected = reports.filter(r => r.disposition === 'reject').length;
  const none = reports.filter(r => r.disposition === 'none').length;
  // Top sender domains
  const senderDomainCounts: Record<string, number> = {};
  reports.forEach(r => {
    const domain = r.from.split('@')[1] || 'unknown';
    senderDomainCounts[domain] = (senderDomainCounts[domain] || 0) + 1;
  });
  const topSenderDomains = Object.entries(senderDomainCounts).sort((a, b) => b[1] - a[1]).slice(0, 3);

  return (
    <ToolLayout
      title="Forensic DMARC Report Viewer"
      description="Upload and analyze forensic (ruf) DMARC reports. Search, filter, and export detailed incident data to help investigate email authentication failures."
      sidebarContent={
        <>
          <h4 className="font-semibold mb-2">What is a Forensic DMARC Report?</h4>
          <p className="mb-3 text-sm">
            Forensic (ruf) DMARC reports are detailed notifications sent when an email fails DMARC authentication. They help you investigate suspicious or failed messages.
          </p>
          <h4 className="font-semibold mb-2">How to Use This Tool</h4>
          <ol className="list-decimal pl-5 mb-3 text-sm">
            <li>Upload one or more <b>.xml</b> forensic DMARC report files.</li>
            <li>Review the parsed incidents in the table below.</li>
            <li>Search, filter, and export results as needed.</li>
          </ol>
          <div className="mb-3">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded mb-1">Privacy</span>
            <p className="text-xs text-gray-600">
              Forensic reports may contain sensitive message data. Handle and store them securely.
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
      <Card className="mb-8">
        <div
          className="border-2 border-dashed border-blue-300 rounded-xl bg-blue-50 p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-100 transition"
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
          onClick={handleBrowse}
          tabIndex={0}
          role="button"
          aria-label="Upload Forensic DMARC XML files"
        >
          <FaUpload className="w-10 h-10 text-blue-600 mb-2" />
          <span className="font-semibold text-blue-700">Drag and drop Forensic DMARC XML files here</span>
          <span className="text-gray-500 text-sm mt-1">or click to browse</span>
          <span className="text-gray-400 text-xs mt-2">Maximum file size: 10MB. Multiple files supported.</span>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            multiple
            accept=".xml,application/xml,text/xml"
            onChange={e => handleFiles(e.target.files)}
          />
        </div>
        {uploadError && (
          <div className="mt-4 text-red-600">{uploadError}</div>
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
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold border ${ext === 'XML' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>{ext}</span>
                      <span className="text-xs text-gray-400">{(file.size / 1024).toFixed(1)} KB</span>
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
        </Card>
      )}
      {/* Tabs for Table View and Dashboard */}
      <div className="flex items-center gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${activeTab === 'table' ? 'bg-gray-100 text-blue-700' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
          onClick={() => setActiveTab('table')}
        >
          Table View
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${activeTab === 'dashboard' ? 'bg-gray-100 text-blue-700' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
      </div>
      {/* Dashboard View */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">DMARC Summary Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="p-4 flex flex-col items-start justify-center">
              <div className="text-gray-500 text-xs mb-1">Total Reports</div>
              <div className="text-3xl font-bold">{totalReports}</div>
              <div className="text-xs text-gray-400 mt-1">From 5/31/2024</div>
            </Card>
            <Card className="p-4 flex flex-col items-start justify-center">
              <div className="text-gray-500 text-xs mb-1">DKIM Pass Rate</div>
              <div className="text-3xl font-bold">{dkimPassRate}%</div>
              <div className="w-full h-2 bg-gray-200 rounded mt-2">
                <div className="h-2 bg-green-500 rounded" style={{ width: `${dkimPassRate}%` }} />
              </div>
              <div className="text-xs text-gray-400 mt-1">({dkimPass}/{totalReports})</div>
            </Card>
            <Card className="p-4 flex flex-col items-start justify-center">
              <div className="text-gray-500 text-xs mb-1">SPF Pass Rate</div>
              <div className="text-3xl font-bold">{spfPassRate}%</div>
              <div className="w-full h-2 bg-gray-200 rounded mt-2">
                <div className="h-2 bg-green-500 rounded" style={{ width: `${spfPassRate}%` }} />
              </div>
              <div className="text-xs text-gray-400 mt-1">({spfPass}/{totalReports})</div>
            </Card>
            <Card className="p-4 flex flex-col items-start justify-center">
              <div className="text-gray-500 text-xs mb-1">Policy Actions</div>
              <div className="flex gap-4 mt-2">
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-yellow-700">{quarantined}</span>
                  <span className="text-xs text-yellow-700">Quarantined</span>
                  <span className="text-xs text-gray-400">{totalReports ? Math.round((quarantined/totalReports)*100) : 0}%</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-red-700">{rejected}</span>
                  <span className="text-xs text-red-700">Rejected</span>
                  <span className="text-xs text-gray-400">{totalReports ? Math.round((rejected/totalReports)*100) : 0}%</span>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <div className="font-semibold text-lg mb-2">Top Sender Domains</div>
              <div className="text-xs text-gray-500 mb-2">Domains with the most email reports</div>
              {topSenderDomains.map(([domain, count]) => (
                <div key={domain} className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-sm text-gray-900">{domain}</span>
                  <span className="ml-auto text-xs text-gray-700 font-semibold">{count}</span>
                  <div className="w-24 h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-gray-900 rounded" style={{ width: `${(Number(count)/totalReports)*100}%` }} />
                  </div>
                </div>
              ))}
            </Card>
            <Card className="p-4">
              <div className="font-semibold text-lg mb-2">Authentication Results</div>
              <div className="text-xs text-gray-500 mb-2">DKIM and SPF authentication status</div>
              <div className="mb-2">DKIM Results</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-600 font-semibold">Pass</span>
                <div className="w-24 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-green-500 rounded" style={{ width: `${(dkimPass/totalReports)*100}%` }} />
                </div>
                <span className="text-xs text-gray-700">{dkimPass}</span>
                <span className="text-red-600 font-semibold ml-4">Fail</span>
                <div className="w-24 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-red-500 rounded" style={{ width: `${(dkimFail/totalReports)*100}%` }} />
                </div>
                <span className="text-xs text-gray-700">{dkimFail}</span>
              </div>
              <div className="mb-2">SPF Results</div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-semibold">Pass</span>
                <div className="w-24 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-green-500 rounded" style={{ width: `${(spfPass/totalReports)*100}%` }} />
                </div>
                <span className="text-xs text-gray-700">{spfPass}</span>
                <span className="text-red-600 font-semibold ml-4">Fail</span>
                <div className="w-24 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-red-500 rounded" style={{ width: `${(spfFail/totalReports)*100}%` }} />
                </div>
                <span className="text-xs text-gray-700">{spfFail}</span>
              </div>
            </Card>
          </div>
        </div>
      )}
      {/* Table View */}
      {activeTab === 'table' && (
        <>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="Search by sender, recipient, subject, or IP..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full max-w-xs"
              />
              <Button variant="ghost" size="icon" aria-label="Refresh">
                <FaSyncAlt className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Filter">
                <FaFilter className="w-4 h-4" />
              </Button>
            </div>
            <Button onClick={handleExport} disabled={filteredReports.length === 0} className="ml-4 bg-black text-white hover:bg-gray-900">
              Export CSV
            </Button>
          </div>
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-3 py-2 text-left font-semibold">Date</th>
                    <th className="px-3 py-2 text-left font-semibold">Source IP</th>
                    <th className="px-3 py-2 text-left font-semibold">From</th>
                    <th className="px-3 py-2 text-left font-semibold">To</th>
                    <th className="px-3 py-2 text-left font-semibold">Subject</th>
                    <th className="px-3 py-2 text-left font-semibold">Disposition</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="text-center py-8 text-gray-400">No reports to display.</td>
                    </tr>
                  ) : (
                    filteredReports.map(report => (
                      <tr key={report.id} className="border-b hover:bg-gray-50">
                        <td className="px-3 py-2 font-mono text-xs text-gray-700">{report.date}</td>
                        <td className="px-3 py-2 font-mono text-xs bg-gray-100 rounded text-gray-900">{report.sourceIp}</td>
                        <td className="px-3 py-2 text-sm">{report.from}</td>
                        <td className="px-3 py-2 text-sm">{report.to}</td>
                        <td className="px-3 py-2 text-sm">{report.subject}</td>
                        <td className="px-3 py-2">
                          {report.disposition === 'quarantine' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-800 text-xs font-semibold border border-yellow-200"><svg className="w-3 h-3 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>Quarantine</span>
                          )}
                          {report.disposition === 'reject' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 text-red-800 text-xs font-semibold border border-red-200"><svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6m0-6l6 6" /></svg>Reject</span>
                          )}
                          {report.disposition === 'none' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200">None</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="text-xs text-gray-400 mt-2">Showing {filteredReports.length} of {reports.length} records</div>
          </Card>
        </>
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