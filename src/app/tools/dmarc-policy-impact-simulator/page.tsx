"use client";

import { useState } from "react";
import { ToolLayout } from "@/components/ui/ToolLayout";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Alert } from "@/components/ui/Alert";
import {
  Shield,
  FileText,
  BarChart2,
  Info,
  UploadCloud,
  XCircle,
  Mail,
  Key,
} from "lucide-react";
import Link from "next/link";
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
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/Chart";

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
</feedback>`;

export default function DmarcPolicyImpactSimulator() {
  const [xml, setXml] = useState<string>("");
  const [policy, setPolicy] = useState<"none" | "quarantine" | "reject">(
    "none"
  );
  const [parsed, setParsed] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showSample, setShowSample] = useState(false);

  // Improved XML parser for charting
  function parseXml(xml: string) {
    try {
      const records = [] as any[];
      const recs = xml.match(/<record>[\s\S]*?<\/record>/g) || [];
      for (const rec of recs) {
        const source_ip = rec.match(/<source_ip>(.*?)<\/source_ip>/)?.[1] || "";
        const count = parseInt(
          rec.match(/<count>(.*?)<\/count>/)?.[1] || "0",
          10
        );
        const dkim = rec.match(/<dkim>(.*?)<\/dkim>/)?.[1] || "";
        const spf = rec.match(/<spf>(.*?)<\/spf>/)?.[1] || "";
        const disposition =
          rec.match(/<disposition>(.*?)<\/disposition>/)?.[1] || "";
        const header_from =
          rec.match(/<header_from>(.*?)<\/header_from>/)?.[1] || "";
        records.push({ source_ip, count, dkim, spf, disposition, header_from });
      }
      return records;
    } catch {
      return [];
    }
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setXml(ev.target?.result as string);
      setError(null);
    };
    reader.onerror = () => setError("Failed to read file.");
    reader.readAsText(file);
  }

  function handleSimulate() {
    if (!xml) {
      setError("Please upload a DMARC XML file or use the sample data.");
      return;
    }
    setParsed(parseXml(xml));
    setError(null);
  }

  // Sidebar content
  const sidebar = (
    <div className="space-y-6">
      <div>
        <h3 className="text-foreground mb-1 flex items-center gap-2 text-sm font-bold">
          <Shield className="text-primary h-4 w-4" />
          DMARC Policy Impact Simulator
        </h3>
        <p className="text-muted-foreground text-xs">
          Simulate the effect of stricter DMARC policies on your email traffic.
          Upload a DMARC XML report and see how policy changes would impact
          delivery.
        </p>
      </div>
      <div>
        <h4 className="text-foreground mb-1 flex items-center gap-1 text-xs font-semibold">
          <Info className="text-primary h-3 w-3" />
          How it works
        </h4>
        <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-xs">
          <li>Upload a DMARC XML report or use sample data</li>
          <li>Select a stricter policy to simulate</li>
          <li>View the impact on message disposition</li>
          <li>Get actionable recommendations</li>
        </ul>
      </div>
      <div>
        <h4 className="text-foreground mb-1 flex items-center gap-1 text-xs font-semibold">
          <BarChart2 className="text-primary h-3 w-3" />
          Best Practices
        </h4>
        <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-xs">
          <li>
            Start with <b>p=none</b> to monitor
          </li>
          <li>
            Gradually move to <b>quarantine</b> or <b>reject</b>
          </li>
          <li>Review sources that would be affected</li>
        </ul>
      </div>
    </div>
  );

  // Calculate impact (mock logic for now)
  const impact = parsed.length
    ? {
        total: parsed.reduce((a, b) => a + b.count, 0),
        rejected:
          policy === "reject"
            ? parsed.reduce((a, b) => a + b.count, 0)
            : policy === "quarantine"
              ? Math.round(parsed.reduce((a, b) => a + b.count, 0) * 0.7)
              : 0,
        quarantined:
          policy === "quarantine"
            ? Math.round(parsed.reduce((a, b) => a + b.count, 0) * 0.3)
            : 0,
        allowed:
          policy === "none" ? parsed.reduce((a, b) => a + b.count, 0) : 0,
      }
    : null;

  // Chart data generation
  const dispositionCounts = { allowed: 0, quarantined: 0, rejected: 0 };
  const dkimCounts = { pass: 0, fail: 0 };
  const spfCounts = { pass: 0, fail: 0 };
  const sourceCounts: Record<string, number> = {};
  if (parsed.length) {
    parsed.forEach((rec) => {
      // Disposition logic based on simulated policy
      let disp: keyof typeof dispositionCounts = "allowed";
      if (policy === "reject") disp = "rejected";
      else if (policy === "quarantine") disp = "quarantined";
      else disp = "allowed";
      dispositionCounts[disp] = (dispositionCounts[disp] || 0) + rec.count;
      dkimCounts[rec.dkim === "pass" ? "pass" : "fail"] += rec.count;
      spfCounts[rec.spf === "pass" ? "pass" : "fail"] += rec.count;
      sourceCounts[rec.source_ip] =
        (sourceCounts[rec.source_ip] || 0) + rec.count;
    });
  }

  // Recharts data format
  const dispositionData = [
    {
      name: "Allowed",
      value: dispositionCounts.allowed,
      fill: "var(--color-success)",
    },
    {
      name: "Quarantined",
      value: dispositionCounts.quarantined,
      fill: "var(--color-warning)",
    },
    {
      name: "Rejected",
      value: dispositionCounts.rejected,
      fill: "var(--color-destructive)",
    },
  ].filter((item) => item.value > 0); // Only show non-zero values

  const dkimData = [
    { name: "Pass", value: dkimCounts.pass, fill: "var(--color-success)" },
    { name: "Fail", value: dkimCounts.fail, fill: "var(--color-destructive)" },
  ];

  const spfData = [
    { name: "Pass", value: spfCounts.pass, fill: "var(--color-success)" },
    { name: "Fail", value: spfCounts.fail, fill: "var(--color-destructive)" },
  ];

  const topSources = Object.entries(sourceCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const sourcesData = topSources.map(([ip, count]) => ({
    name: ip,
    value: count,
    fill: "var(--color-primary)",
  }));

  // Chart config for tooltips
  const chartConfig = {
    value: {
      label: "Messages",
    },
  };

  return (
    <ToolLayout
      title="DMARC Policy Impact Simulator"
      description="Simulate the effect of stricter DMARC policies on your email traffic. Upload a DMARC XML report and see the impact."
      sidebarContent={sidebar}
    >
      <div className="container space-y-8">
        <Card className="p-6">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
            <FileText className="text-primary h-5 w-5" />
            Upload DMARC XML Report
          </h2>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="dmarc-upload"
              className="group border-primary/20 bg-secondary hover:bg-primary/10 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition"
              style={{ minHeight: 120 }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
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
              <UploadCloud className="text-primary/70 group-hover:text-primary mb-2 h-10 w-10" />
              <span className="text-foreground mb-1 text-sm font-medium">
                Drag & drop DMARC XML here, or click to select
              </span>
              <span className="text-muted-foreground text-xs">
                Only .xml files are supported
              </span>
              <input
                id="dmarc-upload"
                type="file"
                accept=".xml"
                onChange={handleFile}
                className="hidden"
              />
            </label>
            {(xml || showSample) && (
              <div className="border-primary/10 bg-card flex items-center gap-2 rounded border px-3 py-2">
                <FileText className="text-primary h-4 w-4" />
                <span className="text-foreground truncate text-xs font-medium">
                  {showSample ? "Sample Data Loaded" : "File Loaded"}
                </span>
                <button
                  type="button"
                  className="text-muted-foreground hover:text-destructive ml-auto"
                  onClick={() => {
                    setXml("");
                    setShowSample(false);
                  }}
                  aria-label="Remove file"
                >
                  <XCircle className="h-4 w-4" />
                </button>
              </div>
            )}
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setXml(sampleXML);
                  setShowSample(true);
                  setError(null);
                }}
              >
                Use Sample Data
              </Button>
            </div>
            <div className="text-muted-foreground mt-1 text-xs">
              Your DMARC XML report is processed locally and never uploaded to a
              server.
            </div>
            {error && (
              <Alert className="mt-2" variant="error">
                {error}
              </Alert>
            )}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
            <Shield className="text-primary h-5 w-5" />
            Simulate Policy
          </h2>
          <div className="mb-4 flex gap-4">
            <Button
              variant={policy === "none" ? "default" : "outline"}
              onClick={() => setPolicy("none")}
            >
              p=none
            </Button>
            <Button
              variant={policy === "quarantine" ? "default" : "outline"}
              onClick={() => setPolicy("quarantine")}
            >
              p=quarantine
            </Button>
            <Button
              variant={policy === "reject" ? "default" : "outline"}
              onClick={() => setPolicy("reject")}
            >
              p=reject
            </Button>
          </div>
          <Button
            onClick={handleSimulate}
            className="bg-primary hover:bg-primary text-white"
          >
            Simulate Impact
          </Button>
        </Card>

        {impact && (
          <Card className="p-6">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
              <BarChart2 className="text-primary h-5 w-5" />
              Impact Visualization
            </h2>
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="bg-secondary rounded-lg p-4 text-center">
                <div className="text-foreground text-2xl font-bold">
                  {impact.total}
                </div>
                <div className="text-muted-foreground text-xs">
                  Total Messages
                </div>
              </div>
              <div className="bg-success/10 rounded-lg p-4 text-center">
                <div className="text-success text-2xl font-bold">
                  {impact.allowed}
                </div>
                <div className="text-muted-foreground text-xs">Allowed</div>
              </div>
              <div className="bg-warning/10 rounded-lg p-4 text-center">
                <div className="text-warning text-2xl font-bold">
                  {impact.quarantined}
                </div>
                <div className="text-muted-foreground text-xs">Quarantined</div>
              </div>
              <div className="bg-destructive/10 rounded-lg p-4 text-center">
                <div className="text-destructive text-2xl font-bold">
                  {impact.rejected}
                </div>
                <div className="text-muted-foreground text-xs">Rejected</div>
              </div>
            </div>
            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex min-h-[200px] flex-col justify-center">
                <h3 className="text-foreground mb-2 text-sm font-semibold">
                  Disposition Breakdown
                </h3>
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent />} />
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
                      {dispositionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <ChartLegend content={<ChartLegendContent />} />
                  </PieChart>
                </ChartContainer>
              </div>
              <div className="flex min-h-[200px] flex-col justify-center">
                <h3 className="text-foreground mb-2 text-sm font-semibold">
                  Top Source IPs
                </h3>
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <BarChart
                    data={sourcesData}
                    layout="vertical"
                    margin={{ left: 20 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-muted"
                    />
                    <XAxis type="number" className="text-xs" />
                    <YAxis
                      dataKey="name"
                      type="category"
                      width={100}
                      className="text-xs"
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="value"
                      fill="var(--color-primary)"
                      radius={[0, 4, 4, 0]}
                      animationDuration={800}
                    />
                  </BarChart>
                </ChartContainer>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex min-h-[200px] flex-col justify-center">
                <h3 className="text-foreground mb-2 text-sm font-semibold">
                  DKIM Pass/Fail
                </h3>
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <BarChart data={dkimData}>
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
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="value"
                      radius={[4, 4, 0, 0]}
                      animationDuration={800}
                    >
                      {dkimData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </div>
              <div className="flex min-h-[200px] flex-col justify-center">
                <h3 className="text-foreground mb-2 text-sm font-semibold">
                  SPF Pass/Fail
                </h3>
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <BarChart data={spfData}>
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
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="value"
                      radius={[4, 4, 0, 0]}
                      animationDuration={800}
                    >
                      {spfData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </div>
            </div>
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-2 py-1 text-left font-semibold">
                      Source IP
                    </th>
                    <th className="px-2 py-1 text-left font-semibold">Count</th>
                    <th className="px-2 py-1 text-left font-semibold">DKIM</th>
                    <th className="px-2 py-1 text-left font-semibold">SPF</th>
                    <th className="px-2 py-1 text-left font-semibold">
                      Disposition
                    </th>
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
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
              <Info className="text-primary h-5 w-5" />
              Recommendations
            </h2>
            <ul className="text-foreground list-disc space-y-2 pl-5 text-sm">
              {policy === "none" && (
                <li>
                  Consider moving to <b>quarantine</b> or <b>reject</b> for
                  better protection if most sources pass DMARC.
                </li>
              )}
              {policy === "quarantine" && (
                <li>
                  Review sources that would be quarantined. If all legitimate
                  sources pass DMARC, consider moving to <b>reject</b>.
                </li>
              )}
              {policy === "reject" && (
                <li>
                  Monitor for any rejected legitimate sources and adjust your
                  SPF/DKIM as needed.
                </li>
              )}
              <li>
                Regularly review DMARC reports to identify new sources or
                issues.
              </li>
            </ul>
          </Card>
        )}

        {/* Related Tools */}
        <div className="mt-8 mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold tracking-tight">Related Tools</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              More email authentication tools
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Link
              href="/tools/dmarc-analyzer"
              className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
                  <Shield className="text-primary h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                    DMARC Analyzer
                  </h3>
                  <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                    Analyze DMARC configuration and get detailed reports
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/tools/spf-surveyor"
              className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
                  <Mail className="text-primary h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                    SPF Surveyor
                  </h3>
                  <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                    Validate and troubleshoot SPF records
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/tools/dkim-validator"
              className="group border-border/40 bg-card hover:border-primary/30 relative overflow-hidden rounded-lg border p-4 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 flex-shrink-0 rounded-md p-2">
                  <Key className="text-primary h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                    DKIM Validator
                  </h3>
                  <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
                    Verify DKIM signatures and configuration
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
