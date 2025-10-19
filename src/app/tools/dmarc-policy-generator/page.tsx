"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Label } from "@/components/ui/Label";
import FAQSchema from "@/components/FAQSchema";
import {
  Copy,
  Info,
  CheckCircle,
  FileCode,
  Shield,
  BookOpen,
} from "lucide-react";
import { ToolLayout } from "@/components/ui/ToolLayout";
import { Alert } from "@/components/ui/Alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import Link from "next/link";
import { Mail, Key } from "lucide-react";

interface Policy {
  p: string;
  sp: string;
  pct: string;
  rua: string;
  ruf: string;
  aspf: string;
  adkim: string;
  ri: string;
  fo: string;
}

// Add a simple slider component
function Slider({
  min,
  max,
  value,
  onChange,
  step = 1,
}: {
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
  step?: number;
}) {
  // Calculate percentage for background
  const percent = ((value - min) / (max - min)) * 100;
  const background = `linear-gradient(90deg, hsl(var(--primary)) ${percent}%, hsl(var(--muted)) ${percent}%)`;
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border-border h-3 w-full cursor-pointer appearance-none rounded-lg border"
      style={{ background }}
    />
  );
}

export default function DmarcPolicyGenerator() {
  const [policy, setPolicy] = useState<Policy>({
    p: "none",
    sp: "none",
    pct: "100",
    rua: "",
    ruf: "",
    aspf: "r",
    adkim: "r",
    ri: "86400",
    fo: "0",
  });

  const [generatedRecord, setGeneratedRecord] = useState("");
  const [copied, setCopied] = useState(false);
  const recordRef = useRef<HTMLDivElement>(null);
  const [sidebarTab, setSidebarTab] = useState("help");
  // Set the first accordion open by default
  const [openAccordions, setOpenAccordions] = useState<string[]>(["policy"]);

  const handlePolicyChange = (key: keyof Policy, value: string) => {
    setPolicy((prev) => ({ ...prev, [key]: value }));
  };

  const generateRecord = () => {
    const record = `v=DMARC1; p=${policy.p}; sp=${policy.sp}; pct=${policy.pct}; rua=mailto:${policy.rua}; ruf=mailto:${policy.ruf}; aspf=${policy.aspf}; adkim=${policy.adkim}; ri=${policy.ri}; fo=${policy.fo}`;
    setGeneratedRecord(record);

    // Smooth scroll to the generated record with offset
    setTimeout(() => {
      const yOffset = -100; // Scroll up by 100 pixels
      const element = recordRef.current;
      const y =
        element?.getBoundingClientRect().top ??
        0 + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedRecord);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Sidebar tab content
  const sidebarTabs = (
    <div className="border-border bg-card overflow-hidden rounded-md border p-0 shadow-md">
      <Tabs value={sidebarTab} onValueChange={setSidebarTab} className="w-full">
        <TabsList className="border-border bg-muted flex border-b">
          <TabsTrigger
            value="help"
            className="data-[active=true]:bg-primary flex-1 rounded-none px-0 py-2 text-sm font-semibold transition-all data-[active=true]:text-white data-[active=true]:shadow-inner"
          >
            Help
          </TabsTrigger>
          <TabsTrigger
            value="best"
            className="data-[active=true]:bg-primary flex-1 rounded-none px-0 py-2 text-sm font-semibold transition-all data-[active=true]:text-white data-[active=true]:shadow-inner"
          >
            Best Practices
          </TabsTrigger>
          <TabsTrigger
            value="ref"
            className="data-[active=true]:bg-primary flex-1 rounded-none px-0 py-2 text-sm font-semibold transition-all data-[active=true]:text-white data-[active=true]:shadow-inner"
          >
            Reference
          </TabsTrigger>
        </TabsList>
        <TabsContent value="help">
          <div className="space-y-4 p-5">
            <div className="mb-1 flex items-center gap-2">
              <span className="bg-primary/10 inline-flex h-7 w-7 items-center justify-center rounded-full">
                <Shield className="text-primary h-4 w-4" />
              </span>
              <h3 className="text-foreground text-base font-bold">
                About DMARC Policy Generator
              </h3>
            </div>
            <p className="text-muted-foreground mb-2 text-sm">
              Create and customize DMARC policies with our step-by-step
              generator. This tool helps you generate valid DMARC records with
              best practice recommendations.
            </p>
            <div className="mb-1 flex items-center gap-2">
              <span className="bg-primary/10 inline-flex h-7 w-7 items-center justify-center rounded-full">
                <Info className="text-primary h-4 w-4" />
              </span>
              <h3 className="text-foreground text-base font-bold">
                What You Can Do
              </h3>
            </div>
            <ol className="text-muted-foreground mb-2 list-inside list-decimal space-y-1 text-sm">
              <li>Generate valid DMARC records</li>
              <li>Customize policy settings</li>
              <li>Get best practice recommendations</li>
              <li>Learn about DMARC implementation</li>
            </ol>
            <div className="border-border flex gap-2 border-t pt-2">
              <a
                href="/docs"
                className="border-primary text-primary hover:bg-secondary bg-card inline-flex items-center rounded-md border px-2.5 py-1.5 text-xs font-medium shadow-sm transition"
              >
                <BookOpen className="mr-1 h-4 w-4" />
                Documentation
              </a>
              <a
                href="/contact"
                className="border-primary text-primary hover:bg-secondary bg-card inline-flex items-center rounded-md border px-2.5 py-1.5 text-xs font-medium shadow-sm transition"
              >
                <Info className="mr-1 h-4 w-4" />
                Contact Support
              </a>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="best">
          <div className="space-y-4 p-5">
            <div className="mb-1 flex items-center gap-2">
              <span className="bg-primary/10 inline-flex h-7 w-7 items-center justify-center rounded-full">
                <Shield className="text-primary h-4 w-4" />
              </span>
              <h3 className="text-foreground text-base font-bold">
                Best Practices
              </h3>
            </div>
            <ul className="text-muted-foreground space-y-3 text-sm">
              <li>
                <span className="text-foreground font-semibold">
                  Start with Monitoring:
                </span>{" "}
                Begin with p=none to monitor email authentication without
                affecting delivery.
              </li>
              <li>
                <span className="text-foreground font-semibold">
                  Gradual Enforcement:
                </span>{" "}
                Progress from quarantine to reject after monitoring results.
              </li>
              <li>
                <span className="text-foreground font-semibold">
                  Separate Report Addresses:
                </span>{" "}
                Use different email addresses for aggregate (rua) and forensic
                (ruf) reports.
              </li>
              <li>
                <span className="text-foreground font-semibold">
                  Full Coverage Testing:
                </span>{" "}
                Only set pct=100 after thorough testing with lower percentages.
              </li>
              <li>
                <span className="text-foreground font-semibold">
                  Strict Alignment:
                </span>{" "}
                Consider using strict alignment (s) for maximum security when
                possible.
              </li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="ref">
          <div className="space-y-4 p-5">
            <div className="mb-1 flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100">
                <BookOpen className="text-primary h-4 w-4" />
              </span>
              <h3 className="text-foreground text-base font-bold">
                DMARC Tag Reference
              </h3>
            </div>
            <div className="text-muted-foreground grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <span className="text-primary font-semibold">v</span>: Version
                of DMARC. Always set to DMARC1.
              </div>
              <div>
                <span className="text-primary font-semibold">p</span>: Policy
                for domain (none, quarantine, reject).
              </div>
              <div>
                <span className="text-primary font-semibold">sp</span>: Policy
                for subdomains (none, quarantine, reject).
              </div>
              <div>
                <span className="text-primary font-semibold">pct</span>:
                Percentage of messages to apply policy to (0-100).
              </div>
              <div>
                <span className="text-primary font-semibold">rua</span>: Email
                address for aggregate reports.
              </div>
              <div>
                <span className="text-primary font-semibold">ruf</span>: Email
                address for forensic reports.
              </div>
              <div>
                <span className="text-primary font-semibold">aspf</span>: SPF
                alignment mode (r=relaxed, s=strict).
              </div>
              <div>
                <span className="text-primary font-semibold">adkim</span>: DKIM
                alignment mode (r=relaxed, s=strict).
              </div>
              <div>
                <span className="text-primary font-semibold">ri</span>:
                Reporting interval in seconds (default: 86400).
              </div>
              <div>
                <span className="text-primary font-semibold">fo</span>: Failure
                reporting options (0,1,d,s).
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  return (
    <ToolLayout
      title="DMARC Policy Generator"
      description="Create and customize DMARC policies with our step-by-step generator. Get best practice recommendations and generate valid DMARC records."
      sidebarContent={sidebarTabs}
    >
      <div className="container">
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="mb-1 text-2xl font-bold">Policy Settings</h2>
            <p className="text-muted-foreground mb-6">
              Configure your DMARC policy settings
            </p>

            {/* Always open section for Policy (p) & Subdomain Policy (sp) */}
            <div className="mb-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Label className="mb-2 block">Policy (p)</Label>
                  <Select
                    value={policy.p}
                    onValueChange={(value: string) =>
                      handlePolicyChange("p", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None (Monitor)</SelectItem>
                      <SelectItem value="quarantine">Quarantine</SelectItem>
                      <SelectItem value="reject">Reject</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block">Subdomain Policy (sp)</Label>
                  <Select
                    value={policy.sp}
                    onValueChange={(value: string) =>
                      handlePolicyChange("sp", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select subdomain policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None (Monitor)</SelectItem>
                      <SelectItem value="quarantine">Quarantine</SelectItem>
                      <SelectItem value="reject">Reject</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label className="mb-3 block">
                  Percentage (pct):{" "}
                  <span className="text-primary font-semibold">
                    {policy.pct}%
                  </span>
                </Label>
                <Slider
                  min={0}
                  max={100}
                  value={Number(policy.pct)}
                  onChange={(v) => handlePolicyChange("pct", String(v))}
                />
                <p className="text-muted-foreground text-sm">
                  Percentage of messages to apply policy to
                </p>
              </div>
            </div>

            {/* Accordion for the rest of the sections */}
            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="reporting">
                <AccordionTrigger value="reporting">
                  Reporting Settings
                </AccordionTrigger>
                <AccordionContent value="reporting">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Label className="mb-2 block">
                        Aggregate Reports (rua)
                      </Label>
                      <Input
                        type="email"
                        placeholder="reports@yourdomain.com"
                        value={policy.rua}
                        onChange={(e) =>
                          handlePolicyChange("rua", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label className="mb-2 block">
                        Forensic Reports (ruf)
                      </Label>
                      <Input
                        type="email"
                        placeholder="forensic@yourdomain.com"
                        value={policy.ruf}
                        onChange={(e) =>
                          handlePolicyChange("ruf", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="alignment">
                <AccordionTrigger value="alignment">
                  Alignment Settings
                </AccordionTrigger>
                <AccordionContent value="alignment">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Label className="mb-2 block">SPF Alignment (aspf)</Label>
                      <Select
                        value={policy.aspf}
                        onValueChange={(value: string) =>
                          handlePolicyChange("aspf", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select SPF alignment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="r">Relaxed</SelectItem>
                          <SelectItem value="s">Strict</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="mb-2 block">
                        DKIM Alignment (adkim)
                      </Label>
                      <Select
                        value={policy.adkim}
                        onValueChange={(value: string) =>
                          handlePolicyChange("adkim", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select DKIM alignment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="r">Relaxed</SelectItem>
                          <SelectItem value="s">Strict</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="failure">
                <AccordionTrigger value="failure">
                  Failure Options
                </AccordionTrigger>
                <AccordionContent value="failure">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Label className="mb-2 block">
                        Reporting Interval (ri)
                      </Label>
                      <Input
                        type="number"
                        min="3600"
                        value={policy.ri}
                        onChange={(e) =>
                          handlePolicyChange("ri", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label className="mb-2 block">Failure Options (fo)</Label>
                      <Select
                        value={policy.fo}
                        onValueChange={(value: string) =>
                          handlePolicyChange("fo", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select failure options" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">
                            Generate reports on all failures
                          </SelectItem>
                          <SelectItem value="1">
                            Generate reports on DKIM failures
                          </SelectItem>
                          <SelectItem value="d">
                            Generate reports on SPF failures
                          </SelectItem>
                          <SelectItem value="s">
                            Generate reports on SPF alignment failures
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button
              onClick={generateRecord}
              className="bg-primary hover:bg-primary mt-8 w-full text-white"
            >
              {generatedRecord
                ? "Update DMARC Record"
                : "Generate DMARC Record"}
            </Button>
          </Card>
          <Card className="p-6">
            <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold">
              <FileCode className="text-primary h-5 w-5" />
              Generated DMARC Record
            </h2>
            <p className="text-muted-foreground mb-4">
              Your configured DMARC record will appear here
            </p>
            {generatedRecord ? (
              <div className="mb-2 flex items-center gap-2">
                <div className="border-border bg-muted text-foreground flex-1 rounded border px-3 py-2 font-mono text-sm break-all">
                  {generatedRecord}
                </div>
                <Button
                  variant="outline"
                  onClick={copyToClipboard}
                  className="gap-2"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="bg-muted text-muted-foreground rounded px-3 py-2">
                No record generated yet
              </div>
            )}
            <p className="text-muted-foreground mt-2 text-xs">
              Configure your policy settings and click &quot;Generate DMARC
              Record&quot; to create your DMARC record.
            </p>
          </Card>
        </div>
      </div>

      {/* FAQ Schema for SEO */}
      <FAQSchema
        faqs={[
          {
            question: "How do I create a DMARC record?",
            answer:
              "Use our free DMARC Policy Generator tool above to create a DMARC record. Enter your domain, select your policy level (none, quarantine, or reject), add email addresses for reports, and we'll generate the proper DNS TXT record format (v=DMARC1; p=...). Start with p=none for monitoring, then move to p=quarantine or p=reject for enforcement.",
          },
          {
            question: "What DMARC policy should I use?",
            answer:
              "Start with p=none to monitor your email authentication without affecting delivery. After analyzing reports for 2-4 weeks and fixing any issues, move to p=quarantine (sends failed emails to spam). Once confident all legitimate email passes, implement p=reject for maximum protection. Never start with p=reject without monitoring first, as it can block legitimate email.",
          },
          {
            question: "What is the difference between RUA and RUF in DMARC?",
            answer:
              "RUA (rua=) specifies where to send aggregate reports - daily XML summaries of all authentication results across your email traffic. RUF (ruf=) specifies where to send forensic reports - individual failure samples with message details. RUA is essential for monitoring, while RUF is optional and contains sensitive data. Most organizations only use RUA reports.",
          },
          {
            question: "Do I need separate DMARC records for subdomains?",
            answer:
              "No, by default your main domain's DMARC policy applies to all subdomains. However, you can create separate DMARC records for specific subdomains if needed, or use the sp= tag in your main record to set a different policy for subdomains. For example: v=DMARC1; p=reject; sp=quarantine applies reject to the main domain but quarantine to subdomains.",
          },
          {
            question: "Where do I publish my DMARC record?",
            answer:
              "Publish your DMARC record as a DNS TXT record at _dmarc.yourdomain.com. In your DNS provider's control panel, create a new TXT record with the name '_dmarc' and paste the generated DMARC record as the value. DNS propagation typically takes 15 minutes to 48 hours. Use our DMARC Analyzer to verify it's published correctly.",
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
            Common questions about DMARC policy generation
          </p>
        </div>

        <div className="space-y-4">
          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              What DMARC policy should I use?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              Start with p=none to monitor without affecting delivery. After 2-4
              weeks of analysis, move to p=quarantine, then p=reject for maximum
              protection. Never start with p=reject without monitoring first.
            </p>
          </details>

          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              What is the difference between RUA and RUF?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              RUA sends daily aggregate report summaries (essential). RUF sends
              individual forensic failure samples (optional, contains sensitive
              data). Most organizations only use RUA.
            </p>
          </details>

          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              Where do I publish my DMARC record?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              Publish as a DNS TXT record at _dmarc.yourdomain.com in your DNS
              provider. Propagation takes 15 min to 48 hours. Use our DMARC
              Analyzer to verify.
            </p>
          </details>
        </div>
      </div>

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
    </ToolLayout>
  );
}
