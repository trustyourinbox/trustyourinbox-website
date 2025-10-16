"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Label } from "@/components/ui/Label"
import { Copy, Info, CheckCircle, FileCode, Shield, BookOpen } from "lucide-react"
import { ToolLayout } from "@/components/ui/ToolLayout"
import { Alert } from "@/components/ui/Alert"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"
import Link from "next/link"
import { Mail, Key } from "lucide-react"

interface Policy {
  p: string
  sp: string
  pct: string
  rua: string
  ruf: string
  aspf: string
  adkim: string
  ri: string
  fo: string
}

// Add a simple slider component
function Slider({ min, max, value, onChange, step = 1 }: { min: number; max: number; value: number; onChange: (v: number) => void; step?: number }) {
  // Calculate percentage for background
  const percent = ((value - min) / (max - min)) * 100
  const background = `linear-gradient(90deg, #2563eb ${percent}%, #e5e7eb ${percent}%)`
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={e => onChange(Number(e.target.value))}
      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
      style={{ background }}
    />
  )
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
  })

  const [generatedRecord, setGeneratedRecord] = useState("")
  const [copied, setCopied] = useState(false)
  const recordRef = useRef<HTMLDivElement>(null)
  const [sidebarTab, setSidebarTab] = useState("help")
  // Set the first accordion open by default
  const [openAccordions, setOpenAccordions] = useState<string[]>(["policy"])

  const handlePolicyChange = (key: keyof Policy, value: string) => {
    setPolicy(prev => ({ ...prev, [key]: value }))
  }

  const generateRecord = () => {
    const record = `v=DMARC1; p=${policy.p}; sp=${policy.sp}; pct=${policy.pct}; rua=mailto:${policy.rua}; ruf=mailto:${policy.ruf}; aspf=${policy.aspf}; adkim=${policy.adkim}; ri=${policy.ri}; fo=${policy.fo}`
    setGeneratedRecord(record)
    
    // Smooth scroll to the generated record with offset
    setTimeout(() => {
      const yOffset = -100 // Scroll up by 100 pixels
      const element = recordRef.current
      const y = element?.getBoundingClientRect().top ?? 0 + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }, 100)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedRecord)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Sidebar tab content
  const sidebarTabs = (
    <div className="bg-white rounded-xl border border-gray-200 p-0 shadow-md overflow-hidden">
      <Tabs value={sidebarTab} onValueChange={setSidebarTab} className="w-full">
        <TabsList className="flex bg-gray-50 border-b border-gray-200">
          <TabsTrigger value="help" className="flex-1 px-0 py-2 text-sm font-semibold rounded-none transition-all data-[active=true]:bg-primary data-[active=true]:text-white data-[active=true]:shadow-inner">
            Help
          </TabsTrigger>
          <TabsTrigger value="best" className="flex-1 px-0 py-2 text-sm font-semibold rounded-none transition-all data-[active=true]:bg-primary data-[active=true]:text-white data-[active=true]:shadow-inner">
            Best Practices
          </TabsTrigger>
          <TabsTrigger value="ref" className="flex-1 px-0 py-2 text-sm font-semibold rounded-none transition-all data-[active=true]:bg-primary data-[active=true]:text-white data-[active=true]:shadow-inner">
            Reference
          </TabsTrigger>
        </TabsList>
        <TabsContent value="help">
          <div className="p-5 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/10"><Shield className="h-4 w-4 text-primary" /></span>
              <h3 className="text-base font-bold text-foreground">About DMARC Policy Generator</h3>
            </div>
            <p className="text-gray-600 text-sm mb-2">Create and customize DMARC policies with our step-by-step generator. This tool helps you generate valid DMARC records with best practice recommendations.</p>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/10"><Info className="h-4 w-4 text-primary" /></span>
              <h3 className="text-base font-bold text-foreground">What You Can Do</h3>
            </div>
            <ol className="text-gray-700 text-sm space-y-1 list-decimal list-inside mb-2">
              <li>Generate valid DMARC records</li>
              <li>Customize policy settings</li>
              <li>Get best practice recommendations</li>
              <li>Learn about DMARC implementation</li>
            </ol>
            <div className="flex gap-2 pt-2 border-t border-gray-100">
              <a href="/docs" className="inline-flex items-center px-2.5 py-1.5 rounded-md border border-primary text-primary bg-white hover:bg-secondary text-xs font-medium transition shadow-sm"><BookOpen className="h-4 w-4 mr-1" />Documentation</a>
              <a href="/contact" className="inline-flex items-center px-2.5 py-1.5 rounded-md border border-primary text-primary bg-white hover:bg-secondary text-xs font-medium transition shadow-sm"><Info className="h-4 w-4 mr-1" />Contact Support</a>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="best">
          <div className="p-5 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/10"><Shield className="h-4 w-4 text-primary" /></span>
              <h3 className="text-base font-bold text-foreground">Best Practices</h3>
            </div>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li><span className="font-semibold text-foreground">Start with Monitoring:</span> Begin with p=none to monitor email authentication without affecting delivery.</li>
              <li><span className="font-semibold text-foreground">Gradual Enforcement:</span> Progress from quarantine to reject after monitoring results.</li>
              <li><span className="font-semibold text-foreground">Separate Report Addresses:</span> Use different email addresses for aggregate (rua) and forensic (ruf) reports.</li>
              <li><span className="font-semibold text-foreground">Full Coverage Testing:</span> Only set pct=100 after thorough testing with lower percentages.</li>
              <li><span className="font-semibold text-foreground">Strict Alignment:</span> Consider using strict alignment (s) for maximum security when possible.</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="ref">
          <div className="p-5 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-indigo-100"><BookOpen className="h-4 w-4 text-indigo-600" /></span>
              <h3 className="text-base font-bold text-indigo-900">DMARC Tag Reference</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 text-gray-700 text-sm">
              <div><span className="font-semibold text-indigo-800">v</span>: Version of DMARC. Always set to DMARC1.</div>
              <div><span className="font-semibold text-indigo-800">p</span>: Policy for domain (none, quarantine, reject).</div>
              <div><span className="font-semibold text-indigo-800">sp</span>: Policy for subdomains (none, quarantine, reject).</div>
              <div><span className="font-semibold text-indigo-800">pct</span>: Percentage of messages to apply policy to (0-100).</div>
              <div><span className="font-semibold text-indigo-800">rua</span>: Email address for aggregate reports.</div>
              <div><span className="font-semibold text-indigo-800">ruf</span>: Email address for forensic reports.</div>
              <div><span className="font-semibold text-indigo-800">aspf</span>: SPF alignment mode (r=relaxed, s=strict).</div>
              <div><span className="font-semibold text-indigo-800">adkim</span>: DKIM alignment mode (r=relaxed, s=strict).</div>
              <div><span className="font-semibold text-indigo-800">ri</span>: Reporting interval in seconds (default: 86400).</div>
              <div><span className="font-semibold text-indigo-800">fo</span>: Failure reporting options (0,1,d,s).</div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )

  return (
    <ToolLayout
      title="DMARC Policy Generator"
      description="Create and customize DMARC policies with our step-by-step generator. Get best practice recommendations and generate valid DMARC records."
      sidebarContent={sidebarTabs}
    >
      <div className="container">
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-1">Policy Settings</h2>
            <p className="text-gray-500 mb-6">Configure your DMARC policy settings</p>

            {/* Always open section for Policy (p) & Subdomain Policy (sp) */}
            <div className="mb-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Policy (p)</Label>
                  <Select value={policy.p} onValueChange={(value: string) => handlePolicyChange("p", value)}>
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
                  <Label>Subdomain Policy (sp)</Label>
                  <Select value={policy.sp} onValueChange={(value: string) => handlePolicyChange("sp", value)}>
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
                <Label>Percentage (pct): <span className="font-semibold text-primary">{policy.pct}%</span></Label>
                <Slider
                  min={0}
                  max={100}
                  value={Number(policy.pct)}
                  onChange={v => handlePolicyChange("pct", String(v))}
                />
                <p className="text-sm text-muted-foreground">Percentage of messages to apply policy to</p>
              </div>
            </div>

            {/* Accordion for the rest of the sections */}
            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="reporting">
                <AccordionTrigger value="reporting">Reporting Settings</AccordionTrigger>
                <AccordionContent value="reporting">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Aggregate Reports (rua)</Label>
                      <Input
                        type="email"
                        placeholder="reports@yourdomain.com"
                        value={policy.rua}
                        onChange={(e) => handlePolicyChange("rua", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Forensic Reports (ruf)</Label>
                      <Input
                        type="email"
                        placeholder="forensic@yourdomain.com"
                        value={policy.ruf}
                        onChange={(e) => handlePolicyChange("ruf", e.target.value)}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="alignment">
                <AccordionTrigger value="alignment">Alignment Settings</AccordionTrigger>
                <AccordionContent value="alignment">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>SPF Alignment (aspf)</Label>
                      <Select value={policy.aspf} onValueChange={(value: string) => handlePolicyChange("aspf", value)}>
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
                      <Label>DKIM Alignment (adkim)</Label>
                      <Select value={policy.adkim} onValueChange={(value: string) => handlePolicyChange("adkim", value)}>
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
                <AccordionTrigger value="failure">Failure Options</AccordionTrigger>
                <AccordionContent value="failure">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Reporting Interval (ri)</Label>
                      <Input
                        type="number"
                        min="3600"
                        value={policy.ri}
                        onChange={(e) => handlePolicyChange("ri", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Failure Options (fo)</Label>
                      <Select value={policy.fo} onValueChange={(value: string) => handlePolicyChange("fo", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select failure options" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Generate reports on all failures</SelectItem>
                          <SelectItem value="1">Generate reports on DKIM failures</SelectItem>
                          <SelectItem value="d">Generate reports on SPF failures</SelectItem>
                          <SelectItem value="s">Generate reports on SPF alignment failures</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button onClick={generateRecord} className="w-full mt-8 bg-primary hover:bg-primary text-white">
              {generatedRecord ? "Update DMARC Record" : "Generate DMARC Record"}
            </Button>
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><FileCode className="h-5 w-5 text-primary" />Generated DMARC Record</h2>
            <p className="text-gray-500 mb-4">Your configured DMARC record will appear here</p>
            {generatedRecord ? (
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1 font-mono text-sm bg-gray-50 rounded px-3 py-2 border border-gray-100 break-all">{generatedRecord}</div>
                <Button variant="outline" onClick={copyToClipboard} className="gap-2">
                  {copied ? <><CheckCircle className="h-4 w-4" />Copied!</> : <><Copy className="h-4 w-4" />Copy</>}
                </Button>
              </div>
            ) : (
              <div className="bg-gray-50 rounded px-3 py-2 text-gray-500">No record generated yet</div>
            )}
            <p className="text-xs text-gray-400 mt-2">Configure your policy settings and click &quot;Generate DMARC Record&quot; to create your DMARC record.</p>
          </Card>
        </div>
      </div>

      <div className="mt-12 mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Related Tools</h2>
          <p className="text-muted-foreground mt-1">Explore more email authentication tools to secure your domain</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/tools/dmarc-analyzer"
            className="group relative overflow-hidden rounded-lg border p-5 transition-all hover:shadow-md border-primary/20 bg-secondary dark:border-primary dark:bg-primary"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full p-2 bg-primary/10 dark:bg-primary">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:underline">DMARC Analyzer</h3>
                <p className="text-sm text-muted-foreground mt-1">Analyze your DMARC configuration and get detailed reports</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>

          <Link
            href="/tools/spf-surveyor"
            className="group relative overflow-hidden rounded-lg border p-5 transition-all hover:shadow-md border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full p-2 bg-green-100 dark:bg-green-900">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:underline">SPF Surveyor</h3>
                <p className="text-sm text-muted-foreground mt-1">Validate and troubleshoot your SPF records</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>

          <Link
            href="/tools/dkim-validator"
            className="group relative overflow-hidden rounded-lg border p-5 transition-all hover:shadow-md border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full p-2 bg-purple-100 dark:bg-purple-900">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:underline">DKIM Validator</h3>
                <p className="text-sm text-muted-foreground mt-1">Verify your DKIM signatures and configuration</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>
      </div>
    </ToolLayout>
  )
} 