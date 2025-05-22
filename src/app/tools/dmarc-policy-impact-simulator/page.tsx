"use client"

import { useState } from "react"
import { ToolLayout } from "@/components/ui/ToolLayout"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Alert } from "@/components/ui/Alert"
import { Shield, FileText, BarChart2, Info, UploadCloud, XCircle } from "lucide-react"
import { Bar, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, ChartTitle)

// Mock sample DMARC XML data (for initial development)
const sampleXML = `<feedback>
  <record>
    <row>
      <source_ip>66.249.84.1</source_ip>
      <count>120</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>pass</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>gmail.com</header_from>
    </identifiers>
  </record>
  <record>
    <row>
      <source_ip>98.137.11.163</source_ip>
      <count>80</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>fail</dkim>
        <spf>pass</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>yahoo.com</header_from>
    </identifiers>
  </record>
  <record>
    <row>
      <source_ip>40.92.70.1</source_ip>
      <count>60</count>
      <policy_evaluated>
        <disposition>quarantine</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>outlook.com</header_from>
    </identifiers>
  </record>
  <record>
    <row>
      <source_ip>64.12.88.199</source_ip>
      <count>40</count>
      <policy_evaluated>
        <disposition>reject</disposition>
        <dkim>fail</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>aol.com</header_from>
    </identifiers>
  </record>
  <record>
    <row>
      <source_ip>185.70.40.101</source_ip>
      <count>30</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>pass</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>protonmail.com</header_from>
    </identifiers>
  </record>
  <record>
    <row>
      <source_ip>17.58.100.1</source_ip>
      <count>25</count>
      <policy_evaluated>
        <disposition>quarantine</disposition>
        <dkim>fail</dkim>
        <spf>pass</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>icloud.com</header_from>
    </identifiers>
  </record>
  <record>
    <row>
      <source_ip>209.85.220.41</source_ip>
      <count>15</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>gmail.com</header_from>
    </identifiers>
  </record>
</feedback>`

export default function DmarcPolicyImpactSimulator() {
  const [xml, setXml] = useState<string>("")
  const [policy, setPolicy] = useState<"none" | "quarantine" | "reject">("none")
  const [parsed, setParsed] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const [showSample, setShowSample] = useState(false)

  // Improved XML parser for charting
  function parseXml(xml: string) {
    try {
      const records = [] as any[]
      const recs = xml.match(/<record>[\s\S]*?<\/record>/g) || []
      for (const rec of recs) {
        const source_ip = rec.match(/<source_ip>(.*?)<\/source_ip>/)?.[1] || ""
        const count = parseInt(rec.match(/<count>(.*?)<\/count>/)?.[1] || "0", 10)
        const dkim = rec.match(/<dkim>(.*?)<\/dkim>/)?.[1] || ""
        const spf = rec.match(/<spf>(.*?)<\/spf>/)?.[1] || ""
        const disposition = rec.match(/<disposition>(.*?)<\/disposition>/)?.[1] || ""
        const header_from = rec.match(/<header_from>(.*?)<\/header_from>/)?.[1] || ""
        records.push({ source_ip, count, dkim, spf, disposition, header_from })
      }
      return records
    } catch {
      return []
    }
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      setXml(ev.target?.result as string)
      setError(null)
    }
    reader.onerror = () => setError("Failed to read file.")
    reader.readAsText(file)
  }

  function handleSimulate() {
    if (!xml) {
      setError("Please upload a DMARC XML file or use the sample data.")
      return
    }
    setParsed(parseXml(xml))
    setError(null)
  }

  // Sidebar content
  const sidebar = (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2 mb-1"><Shield className="h-4 w-4 text-blue-600" />DMARC Policy Impact Simulator</h3>
        <p className="text-xs text-gray-600">Simulate the effect of stricter DMARC policies on your email traffic. Upload a DMARC XML report and see how policy changes would impact delivery.</p>
      </div>
      <div>
        <h4 className="text-xs font-semibold text-gray-800 mb-1 flex items-center gap-1"><Info className="h-3 w-3 text-blue-500" />How it works</h4>
        <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
          <li>Upload a DMARC XML report or use sample data</li>
          <li>Select a stricter policy to simulate</li>
          <li>View the impact on message disposition</li>
          <li>Get actionable recommendations</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-semibold text-gray-800 mb-1 flex items-center gap-1"><BarChart2 className="h-3 w-3 text-blue-500" />Best Practices</h4>
        <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
          <li>Start with <b>p=none</b> to monitor</li>
          <li>Gradually move to <b>quarantine</b> or <b>reject</b></li>
          <li>Review sources that would be affected</li>
        </ul>
      </div>
    </div>
  )

  // Calculate impact (mock logic for now)
  const impact = parsed.length
    ? {
        total: parsed.reduce((a, b) => a + b.count, 0),
        rejected: policy === "reject" ? parsed.reduce((a, b) => a + b.count, 0) : policy === "quarantine" ? Math.round(parsed.reduce((a, b) => a + b.count, 0) * 0.7) : 0,
        quarantined: policy === "quarantine" ? Math.round(parsed.reduce((a, b) => a + b.count, 0) * 0.3) : 0,
        allowed: policy === "none" ? parsed.reduce((a, b) => a + b.count, 0) : 0,
      }
    : null

  // Chart data generation
  const dispositionCounts = { allowed: 0, quarantined: 0, rejected: 0 }
  const dkimCounts = { pass: 0, fail: 0 }
  const spfCounts = { pass: 0, fail: 0 }
  const sourceCounts: Record<string, number> = {}
  if (parsed.length) {
    parsed.forEach(rec => {
      // Disposition logic based on simulated policy
      let disp: keyof typeof dispositionCounts = "allowed"
      if (policy === "reject") disp = "rejected"
      else if (policy === "quarantine") disp = "quarantined"
      else disp = "allowed"
      dispositionCounts[disp] = (dispositionCounts[disp] || 0) + rec.count
      dkimCounts[rec.dkim === "pass" ? "pass" : "fail"] += rec.count
      spfCounts[rec.spf === "pass" ? "pass" : "fail"] += rec.count
      sourceCounts[rec.source_ip] = (sourceCounts[rec.source_ip] || 0) + rec.count
    })
  }

  const dispositionPie = {
    labels: ["Allowed", "Quarantined", "Rejected"],
    datasets: [
      {
        data: [dispositionCounts.allowed, dispositionCounts.quarantined, dispositionCounts.rejected],
        backgroundColor: ["#22c55e", "#facc15", "#ef4444"],
        borderWidth: 1,
      },
    ],
  }
  const dkimBar = {
    labels: ["DKIM Pass", "DKIM Fail"],
    datasets: [
      {
        label: "Messages",
        data: [dkimCounts.pass, dkimCounts.fail],
        backgroundColor: ["#2563eb", "#f87171"],
      },
    ],
  }
  const spfBar = {
    labels: ["SPF Pass", "SPF Fail"],
    datasets: [
      {
        label: "Messages",
        data: [spfCounts.pass, spfCounts.fail],
        backgroundColor: ["#2563eb", "#f87171"],
      },
    ],
  }
  const topSources = Object.entries(sourceCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
  const sourcesBar = {
    labels: topSources.map(([ip]) => ip),
    datasets: [
      {
        label: "Messages",
        data: topSources.map(([, count]) => count),
        backgroundColor: "#38bdf8",
      },
    ],
  }

  // Chart options for compactness
  const compactOptions = {
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: { enabled: true },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { font: { size: 11 } },
        grid: { display: false },
      },
      y: {
        ticks: { font: { size: 11 } },
        grid: { color: '#f3f4f6' },
      },
    },
  }

  return (
    <ToolLayout
      title="DMARC Policy Impact Simulator"
      description="Simulate the effect of stricter DMARC policies on your email traffic. Upload a DMARC XML report and see the impact."
      sidebarContent={sidebar}
    >
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FileText className="h-5 w-5 text-blue-600" />Upload DMARC XML Report</h2>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="dmarc-upload"
              className="flex flex-col items-center justify-center border-2 border-dashed border-blue-200 rounded-lg p-6 cursor-pointer bg-blue-50 hover:bg-blue-100 transition group"
              style={{ minHeight: 120 }}
              onDragOver={e => e.preventDefault()}
              onDrop={e => {
                e.preventDefault();
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                  const file = e.dataTransfer.files[0];
                  const reader = new FileReader();
                  reader.onload = (ev) => {
                    setXml(ev.target?.result as string);
                    setShowSample(false);
                    setError(null);
                  };
                  reader.onerror = () => setError("Failed to read file.");
                  reader.readAsText(file);
                }
              }}
            >
              <UploadCloud className="h-10 w-10 text-blue-400 mb-2 group-hover:text-blue-600" />
              <span className="text-sm text-blue-900 font-medium mb-1">Drag & drop DMARC XML here, or click to select</span>
              <span className="text-xs text-gray-500">Only .xml files are supported</span>
              <input
                id="dmarc-upload"
                type="file"
                accept=".xml"
                onChange={handleFile}
                className="hidden"
              />
            </label>
            {(xml || showSample) && (
              <div className="flex items-center gap-2 bg-white border border-blue-100 rounded px-3 py-2">
                <FileText className="h-4 w-4 text-blue-500" />
                <span className="text-xs text-blue-900 font-medium truncate">
                  {showSample ? "Sample Data Loaded" : "File Loaded"}
                </span>
                <button
                  type="button"
                  className="ml-auto text-gray-400 hover:text-red-500"
                  onClick={() => { setXml(""); setShowSample(false); }}
                  aria-label="Remove file"
                >
                  <XCircle className="h-4 w-4" />
                </button>
              </div>
            )}
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => { setXml(sampleXML); setShowSample(true); setError(null); }}>Use Sample Data</Button>
            </div>
            <div className="text-xs text-gray-500 mt-1">Your DMARC XML report is processed locally and never uploaded to a server.</div>
            {error && <Alert className="mt-2" variant="error">{error}</Alert>}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Shield className="h-5 w-5 text-blue-600" />Simulate Policy</h2>
          <div className="flex gap-4 mb-4">
            <Button variant={policy === "none" ? "default" : "outline"} onClick={() => setPolicy("none")}>p=none</Button>
            <Button variant={policy === "quarantine" ? "default" : "outline"} onClick={() => setPolicy("quarantine")}>p=quarantine</Button>
            <Button variant={policy === "reject" ? "default" : "outline"} onClick={() => setPolicy("reject")}>p=reject</Button>
          </div>
          <Button onClick={handleSimulate} className="bg-blue-600 hover:bg-blue-700 text-white">Simulate Impact</Button>
        </Card>

        {impact && (
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><BarChart2 className="h-5 w-5 text-blue-600" />Impact Visualization</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-800">{impact.total}</div>
                <div className="text-xs text-gray-600">Total Messages</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-800">{impact.allowed}</div>
                <div className="text-xs text-gray-600">Allowed</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-800">{impact.quarantined}</div>
                <div className="text-xs text-gray-600">Quarantined</div>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-800">{impact.rejected}</div>
                <div className="text-xs text-gray-600">Rejected</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="min-h-[180px] flex flex-col justify-center">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Disposition Breakdown</h3>
                <div className="h-[180px]">
                  <Pie data={dispositionPie} options={{ plugins: { legend: { position: 'bottom', labels: { font: { size: 11 } } } }, maintainAspectRatio: false }} />
                </div>
              </div>
              <div className="min-h-[180px] flex flex-col justify-center">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Top Source IPs</h3>
                <div className="h-[180px]">
                  <Bar data={sourcesBar} options={compactOptions} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="min-h-[180px] flex flex-col justify-center">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">DKIM Pass/Fail</h3>
                <div className="h-[180px]">
                  <Bar data={dkimBar} options={compactOptions} />
                </div>
              </div>
              <div className="min-h-[180px] flex flex-col justify-center">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">SPF Pass/Fail</h3>
                <div className="h-[180px]">
                  <Bar data={spfBar} options={compactOptions} />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto mt-8">
              <table className="min-w-full text-xs">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-2 py-1 text-left font-semibold">Source IP</th>
                    <th className="px-2 py-1 text-left font-semibold">Count</th>
                    <th className="px-2 py-1 text-left font-semibold">DKIM</th>
                    <th className="px-2 py-1 text-left font-semibold">SPF</th>
                    <th className="px-2 py-1 text-left font-semibold">Disposition</th>
                  </tr>
                </thead>
                <tbody>
                  {parsed.map((rec, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-2 py-1">{rec.source_ip}</td>
                      <td className="px-2 py-1">{rec.count}</td>
                      <td className="px-2 py-1">{rec.dkim}</td>
                      <td className="px-2 py-1">{rec.spf}</td>
                      <td className="px-2 py-1">{rec.disposition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {impact && (
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Info className="h-5 w-5 text-blue-600" />Recommendations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              {policy === "none" && <li>Consider moving to <b>quarantine</b> or <b>reject</b> for better protection if most sources pass DMARC.</li>}
              {policy === "quarantine" && <li>Review sources that would be quarantined. If all legitimate sources pass DMARC, consider moving to <b>reject</b>.</li>}
              {policy === "reject" && <li>Monitor for any rejected legitimate sources and adjust your SPF/DKIM as needed.</li>}
              <li>Regularly review DMARC reports to identify new sources or issues.</li>
            </ul>
          </Card>
        )}
      </div>
    </ToolLayout>
  )
} 