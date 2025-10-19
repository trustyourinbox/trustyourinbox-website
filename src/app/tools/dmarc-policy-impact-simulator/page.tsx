"use client";

import { useState, useEffect } from "react";
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
import { gunzipSync, unzipSync } from "fflate";
import FAQSchema from "@/components/FAQSchema";
import Link from "next/link";

export const metadata = {
  title: "DMARC Policy Impact Simulator: Test Policy Changes | TrustYourInbox",
  description:
    "Simulate DMARC policy changes before deployment with our free tool. Upload aggregate reports to see impact of p=quarantine or p=reject on email delivery. Prevent legitimate email blocking.",
  keywords: [
    "DMARC policy simulator",
    "DMARC impact analysis",
    "test DMARC policy",
    "DMARC policy testing",
    "quarantine vs reject impact",
    "DMARC deployment simulator",
  ],
  openGraph: {
    title:
      "DMARC Policy Impact Simulator: Test Policy Changes | TrustYourInbox",
    description:
      "Simulate DMARC policy changes before deployment. See impact of p=quarantine or p=reject on email delivery.",
    type: "website",
  },
};
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

    const fileName = file.name.toLowerCase();
    const reader = new FileReader();

    // Handle .gz files (GZIP compressed)
    if (fileName.endsWith(".gz")) {
      reader.onload = (ev) => {
        try {
          const arrayBuffer = ev.target?.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          const decompressed = gunzipSync(uint8Array);
          const xmlText = new TextDecoder().decode(decompressed);
          setXml(xmlText);
          setParsed(parseXml(xmlText)); // Auto-parse immediately
          setError(null);
        } catch (err) {
          setError(
            "Failed to decompress .gz file. Please ensure it's a valid GZIP file."
          );
        }
      };
      reader.onerror = () => setError("Failed to read .gz file.");
      reader.readAsArrayBuffer(file);
    }
    // Handle .zip files
    else if (fileName.endsWith(".zip")) {
      reader.onload = (ev) => {
        try {
          const arrayBuffer = ev.target?.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          const unzipped = unzipSync(uint8Array);

          // Find the first .xml file in the ZIP
          const xmlFileName = Object.keys(unzipped).find((name) =>
            name.toLowerCase().endsWith(".xml")
          );

          if (!xmlFileName) {
            setError("No .xml file found in the ZIP archive.");
            return;
          }

          const xmlText = new TextDecoder().decode(unzipped[xmlFileName]);
          setXml(xmlText);
          setParsed(parseXml(xmlText)); // Auto-parse immediately
          setError(null);
        } catch (err) {
          setError(
            "Failed to decompress .zip file. Please ensure it's a valid ZIP file."
          );
        }
      };
      reader.onerror = () => setError("Failed to read .zip file.");
      reader.readAsArrayBuffer(file);
    }
    // Handle .xml files (plain text)
    else if (fileName.endsWith(".xml")) {
      reader.onload = (ev) => {
        const xmlText = ev.target?.result as string;
        setXml(xmlText);
        setParsed(parseXml(xmlText)); // Auto-parse immediately
        setError(null);
      };
      reader.onerror = () => setError("Failed to read .xml file.");
      reader.readAsText(file);
    }
    // Unsupported file type
    else {
      setError(
        "Unsupported file type. Please upload a .xml, .zip, or .gz file."
      );
    }
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
          <li>View instant analysis with default p=none policy</li>
          <li>Switch between policies to see impact changes</li>
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

  // Calculate impact using real DMARC alignment logic
  const impact = parsed.length
    ? (() => {
        let allowed = 0;
        let quarantined = 0;
        let rejected = 0;

        parsed.forEach((rec) => {
          // DMARC alignment: pass if DKIM OR SPF passes
          const dmarcAligned = rec.dkim === "pass" || rec.spf === "pass";

          if (dmarcAligned) {
            // Messages that pass DMARC are always allowed
            allowed += rec.count;
          } else {
            // Messages that fail DMARC are subject to policy
            if (policy === "reject") {
              rejected += rec.count;
            } else if (policy === "quarantine") {
              quarantined += rec.count;
            } else {
              // policy === "none" - monitored only, still allowed
              allowed += rec.count;
            }
          }
        });

        const total = allowed + quarantined + rejected;
        return { total, allowed, quarantined, rejected };
      })()
    : null;

  // Chart data generation using real DMARC logic
  const dispositionCounts = { allowed: 0, quarantined: 0, rejected: 0 };
  const dkimCounts = { pass: 0, fail: 0 };
  const spfCounts = { pass: 0, fail: 0 };
  const sourceCounts: Record<string, number> = {};
  if (parsed.length) {
    parsed.forEach((rec) => {
      // DMARC alignment: pass if DKIM OR SPF passes
      const dmarcAligned = rec.dkim === "pass" || rec.spf === "pass";

      let disp: keyof typeof dispositionCounts = "allowed";
      if (dmarcAligned) {
        // Messages that pass DMARC are always allowed
        disp = "allowed";
      } else {
        // Messages that fail DMARC are subject to policy
        if (policy === "reject") {
          disp = "rejected";
        } else if (policy === "quarantine") {
          disp = "quarantined";
        } else {
          // policy === "none" - monitored only, still allowed
          disp = "allowed";
        }
      }

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
                  const fileName = file.name.toLowerCase();
                  const reader = new FileReader();

                  // Handle .gz files (GZIP compressed)
                  if (fileName.endsWith(".gz")) {
                    reader.onload = (ev) => {
                      try {
                        const arrayBuffer = ev.target?.result as ArrayBuffer;
                        const uint8Array = new Uint8Array(arrayBuffer);
                        const decompressed = gunzipSync(uint8Array);
                        const xmlText = new TextDecoder().decode(decompressed);
                        setXml(xmlText);
                        setParsed(parseXml(xmlText)); // Auto-parse immediately
                        setShowSample(false);
                        setError(null);
                      } catch (err) {
                        setError(
                          "Failed to decompress .gz file. Please ensure it's a valid GZIP file."
                        );
                      }
                    };
                    reader.onerror = () => setError("Failed to read .gz file.");
                    reader.readAsArrayBuffer(file);
                  }
                  // Handle .zip files
                  else if (fileName.endsWith(".zip")) {
                    reader.onload = (ev) => {
                      try {
                        const arrayBuffer = ev.target?.result as ArrayBuffer;
                        const uint8Array = new Uint8Array(arrayBuffer);
                        const unzipped = unzipSync(uint8Array);

                        // Find the first .xml file in the ZIP
                        const xmlFileName = Object.keys(unzipped).find((name) =>
                          name.toLowerCase().endsWith(".xml")
                        );

                        if (!xmlFileName) {
                          setError("No .xml file found in the ZIP archive.");
                          return;
                        }

                        const xmlText = new TextDecoder().decode(
                          unzipped[xmlFileName]
                        );
                        setXml(xmlText);
                        setParsed(parseXml(xmlText)); // Auto-parse immediately
                        setShowSample(false);
                        setError(null);
                      } catch (err) {
                        setError(
                          "Failed to decompress .zip file. Please ensure it's a valid ZIP file."
                        );
                      }
                    };
                    reader.onerror = () =>
                      setError("Failed to read .zip file.");
                    reader.readAsArrayBuffer(file);
                  }
                  // Handle .xml files (plain text)
                  else if (fileName.endsWith(".xml")) {
                    reader.onload = (ev) => {
                      const xmlText = ev.target?.result as string;
                      setXml(xmlText);
                      setParsed(parseXml(xmlText)); // Auto-parse immediately
                      setShowSample(false);
                      setError(null);
                    };
                    reader.onerror = () =>
                      setError("Failed to read .xml file.");
                    reader.readAsText(file);
                  }
                  // Unsupported file type
                  else {
                    setError(
                      "Unsupported file type. Please upload a .xml, .zip, or .gz file."
                    );
                  }
                }
              }}
            >
              <UploadCloud className="text-primary/70 group-hover:text-primary mb-2 h-10 w-10" />
              <span className="text-foreground mb-1 text-sm font-medium">
                Drag & drop DMARC XML here, or click to select
              </span>
              <span className="text-muted-foreground text-xs">
                Supports .xml, .zip, and .gz files
              </span>
              <input
                id="dmarc-upload"
                type="file"
                accept=".xml,.zip,.gz"
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
                  setParsed(parseXml(sampleXML)); // Auto-parse immediately
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

        {impact && (
          <Card className="p-6">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2 className="mb-2 flex items-center gap-2 text-xl font-bold">
                  <BarChart2 className="text-primary h-5 w-5" />
                  Impact Visualization
                </h2>
                <p className="text-muted-foreground text-sm">
                  Select a policy to see how it would affect your email traffic
                </p>
              </div>
            </div>
            <div className="mb-6 flex gap-4">
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
              <table className="border-border min-w-full border-collapse border text-xs">
                <thead>
                  <tr className="border-border bg-muted border-b-2">
                    <th className="border-border border-r px-3 py-2 text-left font-semibold">
                      Source IP
                    </th>
                    <th className="border-border border-r px-3 py-2 text-left font-semibold">
                      Count
                    </th>
                    <th className="border-border border-r px-3 py-2 text-left font-semibold">
                      DKIM
                    </th>
                    <th className="border-border border-r px-3 py-2 text-left font-semibold">
                      SPF
                    </th>
                    <th className="px-3 py-2 text-left font-semibold">
                      Disposition
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {parsed.map((rec, i) => (
                    <tr
                      key={i}
                      className="border-border hover:bg-muted/50 border-b"
                    >
                      <td className="border-border border-r px-3 py-2">
                        {rec.source_ip}
                      </td>
                      <td className="border-border border-r px-3 py-2">
                        {rec.count}
                      </td>
                      <td className="border-border border-r px-3 py-2">
                        {rec.dkim}
                      </td>
                      <td className="border-border border-r px-3 py-2">
                        {rec.spf}
                      </td>
                      <td className="px-3 py-2">{rec.disposition}</td>
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

        {/* FAQ Schema for SEO */}
        <FAQSchema
          faqs={[
            {
              question: "What is a DMARC policy impact simulator?",
              answer:
                "A DMARC policy impact simulator shows how changing your DMARC policy (from p=none to p=quarantine or p=reject) would affect your email delivery. Upload your DMARC aggregate reports, select a policy, and see which emails would be quarantined or rejected. This prevents accidentally blocking legitimate email when enforcing stricter policies.",
            },
            {
              question: "Should I use p=quarantine or p=reject?",
              answer:
                "Start with p=none to monitor authentication without affecting delivery. After 2-4 weeks of analysis, move to p=quarantine (sends failures to spam). Once confident all legitimate sources pass DMARC, implement p=reject (blocks failures completely) for maximum protection. Use our simulator to predict impact before changing policies.",
            },
            {
              question: "How do I test DMARC policy changes safely?",
              answer:
                "Use our DMARC Policy Impact Simulator to test policy changes before deployment. Upload your aggregate reports, simulate different policies (none/quarantine/reject), and see exact impact on message delivery. The tool shows which source IPs and email volumes would be affected, helping you identify configuration issues before they block legitimate email.",
            },
            {
              question: "What happens if I set DMARC to p=reject too early?",
              answer:
                "Setting p=reject before fixing SPF/DKIM issues will cause receiving servers to block legitimate emails from your domain. This breaks email delivery from third-party services, forwarding addresses, or misconfigured mail servers. Always start with p=none, analyze reports for 2-4 weeks, fix authentication issues, then gradually move to quarantine and finally reject.",
            },
            {
              question:
                "How long should I monitor before changing DMARC policy?",
              answer:
                "Monitor at p=none for at least 2-4 weeks to capture all email sending patterns (monthly newsletters, quarterly reports, etc.). Analyze aggregate reports to ensure all legitimate senders pass SPF/DKIM. Use our simulator to verify impact before moving to p=quarantine. Monitor quarantine for another 2-4 weeks before implementing p=reject for complete protection.",
            },
          ]}
        />

        {/* FAQ Display Section */}
        <div className="mt-8 mb-8">
          <div className="mb-4">
            <h2 className="text-foreground text-xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Common questions about DMARC policy simulation
            </p>
          </div>

          <div className="space-y-4">
            <details className="border-border bg-card group rounded-lg border p-4">
              <summary className="text-foreground cursor-pointer text-sm font-semibold">
                What is a DMARC policy impact simulator?
              </summary>
              <p className="text-muted-foreground mt-2 text-sm">
                A tool that shows how changing your DMARC policy affects email
                delivery. Upload aggregate reports, select a policy, and see
                which emails would be quarantined or rejected. Prevents blocking
                legitimate email.
              </p>
            </details>

            <details className="border-border bg-card group rounded-lg border p-4">
              <summary className="text-foreground cursor-pointer text-sm font-semibold">
                Should I use p=quarantine or p=reject?
              </summary>
              <p className="text-muted-foreground mt-2 text-sm">
                Start with p=none (monitor). After 2-4 weeks, move to
                p=quarantine (spam). Once all legitimate sources pass, use
                p=reject (block) for maximum protection. Simulate impact before
                changing.
              </p>
            </details>

            <details className="border-border bg-card group rounded-lg border p-4">
              <summary className="text-foreground cursor-pointer text-sm font-semibold">
                How long should I monitor before changing policy?
              </summary>
              <p className="text-muted-foreground mt-2 text-sm">
                Monitor at p=none for 2-4 weeks minimum to capture all sending
                patterns. Ensure all legitimate senders pass SPF/DKIM. Monitor
                p=quarantine for another 2-4 weeks before p=reject.
              </p>
            </details>
          </div>
        </div>

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
