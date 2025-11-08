"use client";
import React, { useState, useRef } from "react";
import { ToolLayout } from "@/components/ui/ToolLayout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import {
  Upload,
  FileText,
  XCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Filter,
  RefreshCw,
  Shield,
  Mail,
  Key,
} from "lucide-react";
import FAQSchema from "@/components/FAQSchema";
import Link from "next/link";

interface ForensicReport {
  // Core Identification
  id: string;

  // Report Metadata (RFC 5965)
  feedbackType: string; // "auth-failure"
  version: string;
  userAgent: string;
  arrivalDate: string;
  receivedDate: string;

  // Authentication Failure (RFC 6591)
  authFailure: string; // "dkim" | "spf" | "signature" | "bodyhash" | "revoked" | "adsp"
  authenticationResults: string; // Full Authentication-Results header

  // Message Envelope
  originalEnvelopeId?: string;
  originalMailFrom: string;
  originalRcptTo: string;
  sourceIp: string;
  deliveryResult: string; // "delivered" | "spam" | "policy" | "reject" | "other"
  reportedDomain: string;

  // DKIM Details (RFC 6591)
  dkimResult: string; // "pass" | "fail" | "none"
  dkimDomain?: string;
  dkimSelector?: string;
  dkimIdentity?: string;
  dkimCanonicalizedHeader?: string;
  dkimCanonicalizedBody?: string;
  dkimSelectorDns?: string;

  // SPF Details (RFC 6591)
  spfResult: string; // "pass" | "fail" | "softfail" | "neutral" | "none" | "temperror" | "permerror"
  spfDns?: string;

  // DMARC Details (RFC 7489)
  dmarcPolicy: string; // "none" | "quarantine" | "reject"
  dmarcPolicyPublished?: string; // Full DMARC record

  // Original Message
  messageFrom: string;
  messageTo: string;
  messageSubject: string;
  messageId?: string;
  messageDate: string;
  messageHeaders?: string; // Full headers or snippet

  // Legacy fields for backward compatibility (map to new fields)
  date: string; // -> receivedDate
  from: string; // -> messageFrom
  to: string; // -> messageTo
  subject: string; // -> messageSubject
  disposition: string; // -> deliveryResult
  dkim: string; // -> dkimResult
  spf: string; // -> spfResult
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_TYPES = [
  "application/xml",
  "text/xml",
  ".xml",
  "message/rfc822",
  ".eml",
  ".gz",
  ".zip",
  "application/gzip",
  "application/x-gzip",
  "application/zip",
  "application/x-zip-compressed",
];

/**
 * Parse ARF (Abuse Reporting Format) MIME message per RFC 6591
 * ARF messages are MIME multipart with three parts:
 * 1. Human-readable text/plain
 * 2. Machine-readable message/feedback-report
 * 3. Original message message/rfc822
 */
function parseARFReport(content: string): ForensicReport | null {
  try {
    // Extract the message/feedback-report section
    const feedbackReportMatch = content.match(
      /Content-Type:\s*message\/feedback-report[\s\S]*?\n\n([\s\S]*?)(?=\n------=_Part_|\n--[\w-]+--)/i
    );
    if (!feedbackReportMatch) return null;

    const feedbackReport = feedbackReportMatch[1];

    // Extract the original message section
    const originalMessageMatch = content.match(
      /Content-Type:\s*message\/rfc822[\s\S]*?\n\n([\s\S]*?)(?=\n------=_Part_--|\n--[\w-]+--)/i
    );
    const originalMessage = originalMessageMatch ? originalMessageMatch[1] : "";

    // Parse key-value pairs from feedback report
    const extractField = (name: string): string | undefined => {
      const match = feedbackReport.match(
        new RegExp(`^${name}:\\s*(.+)$`, "mi")
      );
      return match ? match[1].trim() : undefined;
    };

    // Parse multi-line Authentication-Results header
    const extractMultilineField = (name: string): string | undefined => {
      const match = feedbackReport.match(
        new RegExp(`^${name}:\\s*(.+?)(?=^[A-Z][a-z-]+:|$)`, "msi")
      );
      return match ? match[1].replace(/\n\s+/g, " ").trim() : undefined;
    };

    // Extract fields from original message headers
    const extractHeaderField = (name: string): string | undefined => {
      const match = originalMessage.match(
        new RegExp(`^${name}:\\s*(.+)$`, "mi")
      );
      return match ? match[1].trim() : undefined;
    };

    // Generate a unique ID if not present
    const envelopeId = extractField("Original-Envelope-Id");
    const timestamp = extractField("Arrival-Date") || new Date().toISOString();
    const id =
      envelopeId ||
      `forensic-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Parse all RFC 6591 fields
    const feedbackType = extractField("Feedback-Type") || "auth-failure";
    const version = extractField("Version") || "1";
    const userAgent = extractField("User-Agent") || "unknown";
    const arrivalDate = extractField("Arrival-Date") || timestamp;
    const receivedDate = extractField("Received-Date") || arrivalDate;
    const authFailure = extractField("Auth-Failure") || "unknown";
    const authenticationResults =
      extractMultilineField("Authentication-Results") || "";

    // Envelope fields
    const originalEnvelopeId = envelopeId;
    const originalMailFrom = extractField("Original-Mail-From") || "";
    const originalRcptTo = extractField("Original-Rcpt-To") || "";
    const sourceIp = extractField("Source-IP") || "";
    const deliveryResult = extractField("Delivery-Result") || "unknown";
    const reportedDomain = extractField("Reported-Domain") || "";

    // DKIM fields
    const dkimDomain = extractField("DKIM-Domain");
    const dkimSelector = extractField("DKIM-Selector");
    const dkimIdentity = extractField("DKIM-Identity");
    const dkimCanonicalizedHeader = extractField("DKIM-Canonicalized-Header");
    const dkimCanonicalizedBody = extractField("DKIM-Canonicalized-Body");
    const dkimSelectorDns = extractField("DKIM-Selector-DNS");

    // Determine DKIM result from auth failure or authentication results
    let dkimResult = "none";
    if (authenticationResults.includes("dkim=pass")) dkimResult = "pass";
    else if (authenticationResults.includes("dkim=fail")) dkimResult = "fail";

    // SPF fields
    const spfDns = extractField("SPF-DNS");
    let spfResult = "none";
    if (authenticationResults.includes("spf=pass")) spfResult = "pass";
    else if (authenticationResults.includes("spf=fail")) spfResult = "fail";
    else if (authenticationResults.includes("spf=softfail"))
      spfResult = "softfail";
    else if (authenticationResults.includes("spf=neutral"))
      spfResult = "neutral";

    // DMARC fields
    const dmarcPolicy = extractField("DMARC-Policy") || "none";
    const dmarcPolicyPublished = extractField("DMARC-Policy-Published");

    // Original message fields
    const messageFrom = extractHeaderField("From") || originalMailFrom;
    const messageTo = extractHeaderField("To") || originalRcptTo;
    const messageSubject = extractHeaderField("Subject") || "";
    const messageId = extractHeaderField("Message-ID");
    const messageDate = extractHeaderField("Date") || receivedDate;

    // Extract message headers (first 10 lines)
    const headerLines = originalMessage.split("\n").slice(0, 10).join("\n");

    return {
      // Core Identification
      id,

      // Report Metadata
      feedbackType,
      version,
      userAgent,
      arrivalDate,
      receivedDate,

      // Authentication Failure
      authFailure,
      authenticationResults,

      // Message Envelope
      originalEnvelopeId,
      originalMailFrom,
      originalRcptTo,
      sourceIp,
      deliveryResult,
      reportedDomain,

      // DKIM Details
      dkimResult,
      dkimDomain,
      dkimSelector,
      dkimIdentity,
      dkimCanonicalizedHeader,
      dkimCanonicalizedBody,
      dkimSelectorDns,

      // SPF Details
      spfResult,
      spfDns,

      // DMARC Details
      dmarcPolicy,
      dmarcPolicyPublished,

      // Original Message
      messageFrom,
      messageTo,
      messageSubject,
      messageId,
      messageDate,
      messageHeaders: headerLines,

      // Legacy fields for backward compatibility
      date: receivedDate,
      from: originalMailFrom,
      to: originalRcptTo,
      subject: messageSubject,
      disposition: deliveryResult,
      dkim: dkimResult,
      spf: spfResult,
    };
  } catch (error) {
    console.error("Error parsing ARF report:", error);
    return null;
  }
}

/**
 * Parse XML forensic report format
 * This parses the custom XML format we created for easier processing
 */
function parseXMLReport(content: string): ForensicReport[] {
  const reports: ForensicReport[] = [];

  try {
    // Parse XML using DOMParser
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(content, "text/xml");

    // Check for parsing errors
    const parserError = xmlDoc.querySelector("parsererror");
    if (parserError) {
      console.error("XML parsing error:", parserError.textContent);
      return reports;
    }

    // Get all report elements
    const reportElements = xmlDoc.querySelectorAll("report");

    reportElements.forEach((reportEl) => {
      const getTextContent = (tagName: string): string => {
        const element = reportEl.querySelector(tagName);
        return element?.textContent?.trim() || "";
      };

      // Core Identification
      const id = getTextContent("id");

      // Report Metadata
      const feedbackType =
        getTextContent("report_metadata > feedback_type") || "auth-failure";
      const version = getTextContent("report_metadata > version") || "1";
      const userAgent =
        getTextContent("report_metadata > user_agent") || "unknown";
      const arrivalDate = getTextContent("report_metadata > arrival_date");
      const receivedDate =
        getTextContent("report_metadata > received_date") || arrivalDate;

      // Authentication Failure
      const authFailure = getTextContent("auth_failure > type");
      const authenticationResults = getTextContent(
        "auth_failure > authentication_results"
      );

      // Message Envelope
      const originalEnvelopeId = getTextContent(
        "envelope > original_envelope_id"
      );
      const originalMailFrom = getTextContent("envelope > original_mail_from");
      const originalRcptTo = getTextContent("envelope > original_rcpt_to");
      const sourceIp = getTextContent("envelope > source_ip");
      const deliveryResult = getTextContent("envelope > delivery_result");
      const reportedDomain = getTextContent("dmarc > reported_domain");

      // DKIM Details
      const dkimResult = getTextContent("dkim > result");
      const dkimDomain = getTextContent("dkim > domain");
      const dkimSelector = getTextContent("dkim > selector");
      const dkimIdentity = getTextContent("dkim > identity");
      const dkimCanonicalizedHeader = getTextContent(
        "dkim > canonicalized_header"
      );
      const dkimCanonicalizedBody = getTextContent("dkim > canonicalized_body");
      const dkimSelectorDns = getTextContent("dkim > selector_dns");

      // SPF Details
      const spfResult = getTextContent("spf > result");
      const spfDns = getTextContent("spf > dns");

      // DMARC Details
      const dmarcPolicy = getTextContent("dmarc > policy");
      const dmarcPolicyPublished = getTextContent("dmarc > policy_published");

      // Original Message
      const messageFrom = getTextContent("original_message > from");
      const messageTo = getTextContent("original_message > to");
      const messageSubject = getTextContent("original_message > subject");
      const messageId = getTextContent("original_message > message_id");
      const messageDate = getTextContent("original_message > date");
      const messageHeaders = getTextContent("original_message > headers");

      reports.push({
        // Core Identification
        id,

        // Report Metadata
        feedbackType,
        version,
        userAgent,
        arrivalDate,
        receivedDate,

        // Authentication Failure
        authFailure,
        authenticationResults,

        // Message Envelope
        originalEnvelopeId,
        originalMailFrom,
        originalRcptTo,
        sourceIp,
        deliveryResult,
        reportedDomain,

        // DKIM Details
        dkimResult,
        dkimDomain,
        dkimSelector,
        dkimIdentity,
        dkimCanonicalizedHeader,
        dkimCanonicalizedBody,
        dkimSelectorDns,

        // SPF Details
        spfResult,
        spfDns,

        // DMARC Details
        dmarcPolicy,
        dmarcPolicyPublished,

        // Original Message
        messageFrom,
        messageTo,
        messageSubject,
        messageId,
        messageDate,
        messageHeaders,

        // Legacy fields for backward compatibility
        date: receivedDate,
        from: originalMailFrom,
        to: originalRcptTo,
        subject: messageSubject,
        disposition: deliveryResult,
        dkim: dkimResult,
        spf: spfResult,
      });
    });

    return reports;
  } catch (error) {
    console.error("Error parsing XML report:", error);
    return reports;
  }
}

/**
 * Decompress a file (.gz or .zip)
 * Returns the decompressed content as a string
 */
async function decompressFile(file: File): Promise<string | null> {
  try {
    const fileName = file.name.toLowerCase();

    // Handle .gz files using native DecompressionStream API
    if (fileName.endsWith(".gz")) {
      const arrayBuffer = await file.arrayBuffer();
      const stream = new Response(arrayBuffer).body;

      if (!stream) {
        throw new Error("Failed to create stream from file");
      }

      // Use native browser decompression for gzip
      const decompressedStream = stream.pipeThrough(
        new DecompressionStream("gzip")
      );
      const decompressedResponse = new Response(decompressedStream);
      const text = await decompressedResponse.text();
      return text;
    }

    // Handle .zip files
    if (fileName.endsWith(".zip")) {
      // TODO: Implement ZIP decompression using jszip library
      // For now, we'll need to install jszip:
      // npm install jszip @types/jszip
      throw new Error(
        "ZIP file decompression requires the jszip library. Please install it: npm install jszip"
      );
    }

    return null;
  } catch (error) {
    console.error("Error decompressing file:", error);
    return null;
  }
}

/**
 * Read file content as text
 */
async function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      resolve(content);
    };
    reader.onerror = (e) => reject(e);
    reader.readAsText(file);
  });
}

/**
 * Process a file and extract forensic reports
 * Handles ARF (.eml), XML (.xml), and compressed files (.gz, .zip)
 */
async function processFile(file: File): Promise<ForensicReport[]> {
  try {
    let content: string | null = null;
    const fileName = file.name.toLowerCase();

    // Handle compressed files
    if (fileName.endsWith(".gz") || fileName.endsWith(".zip")) {
      content = await decompressFile(file);
      if (!content) {
        console.error("Failed to decompress file:", fileName);
        return [];
      }
    } else {
      // Read uncompressed files directly
      content = await readFileAsText(file);
    }

    // Determine file type from content or filename
    const isXML =
      content.trim().startsWith("<?xml") || fileName.includes(".xml");
    const isEML =
      content.includes("Content-Type: multipart/report") ||
      content.includes("message/feedback-report") ||
      fileName.endsWith(".eml");

    if (isXML) {
      // Parse XML format (can contain multiple reports)
      return parseXMLReport(content);
    } else if (isEML) {
      // Parse ARF format (single report per file)
      const report = parseARFReport(content);
      return report ? [report] : [];
    } else {
      console.error("Unknown file format:", fileName);
      return [];
    }
  } catch (error) {
    console.error("Error processing file:", error);
    return [];
  }
}

function getFileIcon(type: string) {
  return <FileText className="text-primary h-5 w-5" />;
}

function FAQSection() {
  return (
    <>
      {/* FAQ Schema for SEO */}
      <FAQSchema
        faqs={[
          {
            question: "What are DMARC forensic reports?",
            answer:
              "DMARC forensic reports (also called failure reports or RUF) are individual email samples sent when a message fails DMARC authentication. Unlike aggregate reports which summarize daily statistics, forensic reports contain actual message headers and details about specific authentication failures. They help you identify spoofing attempts, misconfigurations, or unauthorized senders in real-time.",
          },
          {
            question: "What is the difference between RUA and RUF reports?",
            answer:
              "RUA (aggregate reports) provide daily XML summaries of all authentication results across your email traffic - they're essential for monitoring trends. RUF (forensic reports) send individual failure samples with actual message details - they're optional and contain sensitive data. Most organizations use only RUA because RUF can include email content and raise privacy concerns.",
          },
          {
            question: "How do I view DMARC forensic reports?",
            answer:
              "Use our free Forensic Report Viewer tool above. Upload the RFC 6591 compliant report file you received via email at your ruf= address. The tool parses the report to show authentication failure details, source IP, headers, SPF/DKIM results, and recommendations. We support standard DMARC forensic report formats including AFRF (Authentication Failure Reporting Format).",
          },
          {
            question: "Should I enable DMARC forensic reporting?",
            answer:
              "DMARC forensic reporting (ruf=) is optional and has privacy implications since reports may contain email content. Enable it only if you need detailed failure analysis and have proper data handling procedures. Many receivers don't send RUF due to privacy concerns. Aggregate reports (rua=) are sufficient for most organizations and don't have the same privacy issues.",
          },
          {
            question:
              "What does an authentication failure in a forensic report mean?",
            answer:
              "An authentication failure means an email claiming to be from your domain failed SPF, DKIM, or DMARC checks. Common causes include: legitimate services not authorized in SPF, missing DKIM signatures, email forwarding breaking authentication, or actual spoofing attempts. Our viewer identifies the specific failure type (SPF fail, DKIM fail, alignment fail) and provides remediation steps.",
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
            Common questions about DMARC forensic reports
          </p>
        </div>

        <div className="space-y-4">
          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              What are DMARC forensic reports?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              DMARC forensic reports (RUF) are individual email samples sent
              when authentication fails. Unlike aggregate reports, they contain
              actual message headers and help identify spoofing or
              misconfigurations in real-time.
            </p>
          </details>

          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              What is the difference between RUA and RUF reports?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              RUA provides daily summaries (essential for monitoring). RUF sends
              individual failure samples with message details (optional,
              contains sensitive data). Most use only RUA due to privacy
              concerns.
            </p>
          </details>

          <details className="border-border bg-card group rounded-lg border p-4">
            <summary className="text-foreground cursor-pointer text-sm font-semibold">
              Should I enable DMARC forensic reporting?
            </summary>
            <p className="text-muted-foreground mt-2 text-sm">
              Forensic reporting (ruf=) is optional with privacy implications.
              Enable only if you need detailed failure analysis and have proper
              data handling. Aggregate reports (rua=) are sufficient for most
              organizations.
            </p>
          </details>
        </div>
      </div>
    </>
  );
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
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRowExpansion = (id: string) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  async function handleFiles(selected: FileList | null) {
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

    // Process all valid files and extract forensic reports
    const allReports: ForensicReport[] = [];
    for (const file of valid) {
      const fileReports = await processFile(file);
      allReports.push(...fileReports);
    }

    // If no reports were parsed, show mock data for demonstration
    if (allReports.length === 0 && valid.length > 0) {
      console.warn(
        "No reports parsed from files, using mock data for demonstration"
      );
      setReports([
        {
          // Core Identification
          id: "forensic-001-20240601-142015",

          // Report Metadata (RFC 5965)
          feedbackType: "auth-failure",
          version: "1",
          userAgent: "mail.receiver.example.com/1.0",
          arrivalDate: "2024-06-01T14:20:15Z",
          receivedDate: "2024-06-01T14:20:15Z",

          // Authentication Failure (RFC 6591)
          authFailure: "dkim",
          authenticationResults:
            'mail.receiver.example.com; dmarc=fail (p=quarantine sp=quarantine dis=none) header.from=example.com; dkim=fail reason="signature verification failed" header.d=example.com header.s=selector1 header.b=abc123; spf=pass (mail.receiver.example.com: domain of attacker@example.com designates 192.0.2.1 as permitted sender) smtp.mailfrom=attacker@example.com',

          // Message Envelope
          originalEnvelopeId: "ABC123.456789@mail.receiver.example.com",
          originalMailFrom: "attacker@example.com",
          originalRcptTo: "victim@receiver.example.com",
          sourceIp: "192.0.2.1",
          deliveryResult: "policy",
          reportedDomain: "example.com",

          // DKIM Details (RFC 6591)
          dkimResult: "fail",
          dkimDomain: "example.com",
          dkimSelector: "selector1",
          dkimIdentity: "@example.com",
          dkimCanonicalizedHeader: "from:to:subject:date:message-id",
          dkimCanonicalizedBody: "simple",
          dkimSelectorDns:
            "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7w...",

          // SPF Details (RFC 6591)
          spfResult: "pass",
          spfDns: "v=spf1 ip4:192.0.2.0/24 include:_spf.google.com ~all",

          // DMARC Details (RFC 7489)
          dmarcPolicy: "quarantine",
          dmarcPolicyPublished:
            "v=DMARC1; p=quarantine; sp=quarantine; rua=mailto:dmarc-aggregate@example.com; ruf=mailto:dmarc-forensic@example.com; fo=1; adkim=r; aspf=r; pct=100; rf=afrf; ri=86400",

          // Original Message
          messageFrom: "John Doe <attacker@example.com>",
          messageTo: "Jane Smith <victim@receiver.example.com>",
          messageSubject: "Urgent: Account Verification Required",
          messageId: "<phishing123@malicious.example>",
          messageDate: "2024-06-01T14:18:32Z",
          messageHeaders:
            "Return-Path: <attacker@example.com>\nReceived: from sender.malicious.example (unknown [192.0.2.1])\n\tby mail.receiver.example.com (Postfix) with ESMTP id ABC123\n\tfor <victim@receiver.example.com>; Thu, 01 Jun 2024 14:20:15 +0000 (UTC)\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/simple;\n  d=example.com; s=selector1;\n  h=from:to:subject:date:message-id;\n  bh=2jmj7l5rSw0yVb/vlWAYkK/YBwk=;\n  b=abc123def456ghi789jkl012mno345pqr678stu901vwx234yz",

          // Legacy fields for backward compatibility
          date: "2024-06-01T14:20:15Z",
          from: "attacker@example.com",
          to: "victim@receiver.example.com",
          subject: "Urgent: Account Verification Required",
          disposition: "policy",
          dkim: "fail",
          spf: "pass",
        },
        {
          // Core Identification
          id: "forensic-002-20240602-093045",

          // Report Metadata (RFC 5965)
          feedbackType: "auth-failure",
          version: "1",
          userAgent: "mail.receiver.example.com/1.0",
          arrivalDate: "2024-06-02T09:30:45Z",
          receivedDate: "2024-06-02T09:30:45Z",

          // Authentication Failure (RFC 6591)
          authFailure: "spf",
          authenticationResults:
            "mail.receiver.example.com; dmarc=fail (p=reject sp=reject dis=none) header.from=trusted.example; dkim=pass (2048-bit key) header.d=trusted.example header.s=mail header.b=xyz789; spf=fail (mail.receiver.example.com: domain of sender@trusted.example does not designate 203.0.113.5 as permitted sender) smtp.mailfrom=sender@trusted.example",

          // Message Envelope
          originalEnvelopeId: "DEF456.789012@mail.receiver.example.com",
          originalMailFrom: "sender@trusted.example",
          originalRcptTo: "user@receiver.example.com",
          sourceIp: "203.0.113.5",
          deliveryResult: "reject",
          reportedDomain: "trusted.example",

          // DKIM Details (RFC 6591)
          dkimResult: "pass",
          dkimDomain: "trusted.example",
          dkimSelector: "mail",
          dkimIdentity: "@trusted.example",
          dkimCanonicalizedHeader: "from:to:subject:date",
          dkimCanonicalizedBody: "relaxed",
          dkimSelectorDns:
            "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...",

          // SPF Details (RFC 6591)
          spfResult: "fail",
          spfDns: "v=spf1 ip4:198.51.100.0/24 include:_spf.example.com -all",

          // DMARC Details (RFC 7489)
          dmarcPolicy: "reject",
          dmarcPolicyPublished:
            "v=DMARC1; p=reject; sp=reject; rua=mailto:dmarc@trusted.example; ruf=mailto:forensic@trusted.example; fo=0; adkim=s; aspf=s; pct=100",

          // Original Message
          messageFrom: "Marketing Team <sender@trusted.example>",
          messageTo: "Customer <user@receiver.example.com>",
          messageSubject: "Newsletter: May 2024",
          messageId: "<newsletter-may2024@thirdparty.example>",
          messageDate: "2024-06-02T09:28:12Z",
          messageHeaders:
            "Return-Path: <sender@trusted.example>\nReceived: from relay.thirdparty.example (relay.thirdparty.example [203.0.113.5])\n\tby mail.receiver.example.com (Postfix) with ESMTP id DEF456\n\tfor <user@receiver.example.com>; Sun, 02 Jun 2024 09:30:45 +0000 (UTC)\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\n  d=trusted.example; s=mail;\n  h=from:to:subject:date;\n  bh=xyz789abc123def456ghi789jkl012mno345pqr678=;\n  b=xyz789def456ghi789jkl012mno345pqr678stu901vwx234yz",

          // Legacy fields for backward compatibility
          date: "2024-06-02T09:30:45Z",
          from: "sender@trusted.example",
          to: "user@receiver.example.com",
          subject: "Newsletter: May 2024",
          disposition: "reject",
          dkim: "pass",
          spf: "fail",
        },
        {
          // Core Identification
          id: "forensic-003-20240603-163020",

          // Report Metadata (RFC 5965)
          feedbackType: "auth-failure",
          version: "1",
          userAgent: "mail.receiver.example.com/1.0",
          arrivalDate: "2024-06-03T16:30:20Z",
          receivedDate: "2024-06-03T16:30:20Z",

          // Authentication Failure (RFC 6591)
          authFailure: "bodyhash",
          authenticationResults:
            'mail.receiver.example.com; dmarc=fail (p=none sp=none dis=none) header.from=business.example; dkim=fail reason="body hash mismatch" header.d=business.example header.s=default header.b=mno345; spf=pass (mail.receiver.example.com: domain of info@business.example designates 198.51.100.42 as permitted sender) smtp.mailfrom=info@business.example',

          // Message Envelope
          originalEnvelopeId: "GHI789.012345@mail.receiver.example.com",
          originalMailFrom: "info@business.example",
          originalRcptTo: "contact@receiver.example.com",
          sourceIp: "198.51.100.42",
          deliveryResult: "delivered",
          reportedDomain: "business.example",

          // DKIM Details (RFC 6591)
          dkimResult: "fail",
          dkimDomain: "business.example",
          dkimSelector: "default",
          dkimIdentity: "@business.example",
          dkimCanonicalizedHeader:
            "from:to:subject:date:message-id:mime-version",
          dkimCanonicalizedBody: "relaxed",
          dkimSelectorDns:
            "v=DKIM1; k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDH...",

          // SPF Details (RFC 6591)
          spfResult: "pass",
          spfDns: "v=spf1 ip4:198.51.100.0/24 mx include:_spf.google.com ~all",

          // DMARC Details (RFC 7489)
          dmarcPolicy: "none",
          dmarcPolicyPublished:
            "v=DMARC1; p=none; rua=mailto:dmarc-reports@business.example; ruf=mailto:dmarc-failures@business.example",

          // Original Message
          messageFrom: "Business Info <info@business.example>",
          messageTo: "Contact <contact@receiver.example.com>",
          messageSubject: "RE: Partnership Inquiry",
          messageId: "<reply-12345@business.example>",
          messageDate: "2024-06-03T16:28:05Z",
          messageHeaders:
            "Return-Path: <info@business.example>\nReceived: from mail.business.example (mail.business.example [198.51.100.42])\n\tby mail.receiver.example.com (Postfix) with ESMTP id GHI789\n\tfor <contact@receiver.example.com>; Mon, 03 Jun 2024 16:30:20 +0000 (UTC)\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\n  d=business.example; s=default;\n  h=from:to:subject:date:message-id:mime-version;\n  bh=invalidbodyhash123456789=;\n  b=mno345pqr678stu901vwx234yz567abc890def123ghi456jkl",

          // Legacy fields for backward compatibility
          date: "2024-06-03T16:30:20Z",
          from: "info@business.example",
          to: "contact@receiver.example.com",
          subject: "RE: Partnership Inquiry",
          disposition: "delivered",
          dkim: "fail",
          spf: "pass",
        },
      ]);
    } else {
      // Use the parsed reports from actual files
      setReports((prev) => [...prev, ...allReports]);
    }
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
    // Helper to escape CSV values
    const escapeCSV = (value: string | undefined) => {
      if (!value) return "";
      const str = String(value);
      if (str.includes(",") || str.includes('"') || str.includes("\n")) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };

    // Comprehensive CSV export with all RFC 6591 fields
    const csv = [
      [
        // Core & Metadata
        "Report ID",
        "Feedback Type",
        "Version",
        "User Agent",
        "Arrival Date",
        "Received Date",
        // Auth Failure
        "Auth Failure Type",
        "Authentication Results",
        // Envelope
        "Envelope ID",
        "Mail From",
        "Rcpt To",
        "Source IP",
        "Delivery Result",
        "Reported Domain",
        // DKIM
        "DKIM Result",
        "DKIM Domain",
        "DKIM Selector",
        "DKIM Identity",
        "DKIM Header Canon",
        "DKIM Body Canon",
        // SPF
        "SPF Result",
        "SPF DNS",
        // DMARC
        "DMARC Policy",
        // Message
        "Message From",
        "Message To",
        "Message Subject",
        "Message ID",
        "Message Date",
      ],
      ...filteredReports.map((r) => [
        // Core & Metadata
        escapeCSV(r.id),
        escapeCSV(r.feedbackType),
        escapeCSV(r.version),
        escapeCSV(r.userAgent),
        escapeCSV(r.arrivalDate),
        escapeCSV(r.receivedDate),
        // Auth Failure
        escapeCSV(r.authFailure),
        escapeCSV(r.authenticationResults),
        // Envelope
        escapeCSV(r.originalEnvelopeId),
        escapeCSV(r.originalMailFrom),
        escapeCSV(r.originalRcptTo),
        escapeCSV(r.sourceIp),
        escapeCSV(r.deliveryResult),
        escapeCSV(r.reportedDomain),
        // DKIM
        escapeCSV(r.dkimResult),
        escapeCSV(r.dkimDomain),
        escapeCSV(r.dkimSelector),
        escapeCSV(r.dkimIdentity),
        escapeCSV(r.dkimCanonicalizedHeader),
        escapeCSV(r.dkimCanonicalizedBody),
        // SPF
        escapeCSV(r.spfResult),
        escapeCSV(r.spfDns),
        // DMARC
        escapeCSV(r.dmarcPolicy),
        // Message
        escapeCSV(r.messageFrom),
        escapeCSV(r.messageTo),
        escapeCSV(r.messageSubject),
        escapeCSV(r.messageId),
        escapeCSV(r.messageDate),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `forensic-dmarc-reports-${new Date().toISOString().split("T")[0]}.csv`;
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

  // Auth Failure Type Analytics (RFC 6591)
  const authFailureCounts: Record<string, number> = {};
  reports.forEach((r) => {
    const failureType = r.authFailure || "unknown";
    authFailureCounts[failureType] = (authFailureCounts[failureType] || 0) + 1;
  });
  const topAuthFailures = Object.entries(authFailureCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

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
              <Upload className="text-primary mb-2 h-10 w-10" />
              <span className="text-primary font-semibold">
                Drag and drop Forensic DMARC Report files here
              </span>
              <span className="text-muted-foreground mt-1 text-sm">
                or click to browse
              </span>
              <span className="text-muted-foreground mt-2 text-xs">
                Supports .eml (ARF), .xml, .gz, .zip formats • Max 10MB •
                Multiple files
              </span>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                multiple
                accept=".xml,.eml,.gz,.zip,application/xml,text/xml,message/rfc822,application/gzip,application/zip"
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
                      <XCircle className="h-4 w-4" />
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
              <Card className="p-4">
                <div className="mb-2 text-lg font-semibold">
                  Auth Failure Types
                </div>
                <div className="text-muted-foreground mb-4 text-xs">
                  Breakdown of authentication failure reasons (RFC 6591)
                </div>
                {topAuthFailures.length > 0 ? (
                  topAuthFailures.map(([failureType, count]) => {
                    const percentage = totalReports
                      ? Math.round((Number(count) / totalReports) * 100)
                      : 0;
                    return (
                      <div key={failureType} className="mb-3">
                        <div className="mb-1 flex items-center justify-between">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold ${
                              failureType === "dkim"
                                ? "border-destructive/20 bg-destructive/10 text-destructive"
                                : failureType === "spf"
                                  ? "border-warning/20 bg-warning/10 text-warning"
                                  : failureType === "bodyhash"
                                    ? "border-warning/20 bg-warning/10 text-warning"
                                    : failureType === "signature"
                                      ? "border-destructive/20 bg-destructive/10 text-destructive"
                                      : "border-border bg-muted text-muted-foreground"
                            }`}
                          >
                            {failureType.toUpperCase()}
                          </span>
                          <span className="text-foreground text-sm font-semibold">
                            {count} ({percentage}%)
                          </span>
                        </div>
                        <div className="bg-muted h-2 w-full rounded">
                          <div
                            className={`h-2 rounded ${
                              failureType === "dkim" ||
                              failureType === "signature"
                                ? "bg-destructive"
                                : failureType === "spf" ||
                                    failureType === "bodyhash"
                                  ? "bg-warning"
                                  : "bg-muted-foreground"
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-muted-foreground text-center text-sm">
                    No auth failure data available
                  </div>
                )}
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
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Filter">
                  <Filter className="h-4 w-4" />
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
                      <th className="border-border w-10 border-r px-2 py-3 text-left font-semibold">
                        {/* Expand icon column */}
                      </th>
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
                        Subject
                      </th>
                      <th className="border-border border-r px-4 py-3 text-left font-semibold">
                        Auth Failure
                      </th>
                      <th className="border-border border-r px-4 py-3 text-left font-semibold">
                        DKIM
                      </th>
                      <th className="border-border border-r px-4 py-3 text-left font-semibold">
                        SPF
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
                          colSpan={10}
                          className="text-muted-foreground py-8 text-center"
                        >
                          No reports to display.
                        </td>
                      </tr>
                    ) : (
                      filteredReports.map((report, idx) => {
                        const isExpanded = expandedRows.has(report.id);
                        return (
                          <React.Fragment key={report.id}>
                            <tr
                              className={`border-border hover:bg-muted/70 cursor-pointer border-b ${idx % 2 === 0 ? "bg-muted/20" : ""}`}
                              onClick={() => toggleRowExpansion(report.id)}
                            >
                              <td className="border-border border-r px-2 py-3 text-center">
                                <svg
                                  className={`text-muted-foreground h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M9 5l7 7-7 7" />
                                </svg>
                              </td>
                              <td className="border-border text-muted-foreground border-r px-4 py-3 font-mono text-xs">
                                {new Date(
                                  report.receivedDate || report.date
                                ).toLocaleString()}
                              </td>
                              <td className="border-border bg-muted text-foreground border-r px-4 py-3 font-mono text-xs">
                                {report.sourceIp}
                              </td>
                              <td className="border-border border-r px-4 py-3 text-sm">
                                {report.from}
                              </td>
                              <td className="border-border border-r px-4 py-3 text-sm">
                                {report.subject}
                              </td>
                              <td className="border-border border-r px-4 py-3">
                                <span
                                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold ${
                                    report.authFailure === "dkim"
                                      ? "border-destructive/20 bg-destructive/10 text-destructive"
                                      : report.authFailure === "spf"
                                        ? "border-warning/20 bg-warning/10 text-warning"
                                        : report.authFailure === "bodyhash"
                                          ? "border-warning/20 bg-warning/10 text-warning"
                                          : "border-border bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {report.authFailure?.toUpperCase() || "N/A"}
                                </span>
                              </td>
                              <td className="border-border border-r px-4 py-3">
                                <span
                                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold ${
                                    report.dkimResult === "pass"
                                      ? "border-success/20 bg-success/10 text-success"
                                      : report.dkimResult === "fail"
                                        ? "border-destructive/20 bg-destructive/10 text-destructive"
                                        : "border-border bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {report.dkimResult?.toUpperCase() || "NONE"}
                                </span>
                              </td>
                              <td className="border-border border-r px-4 py-3">
                                <span
                                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold ${
                                    report.spfResult === "pass"
                                      ? "border-success/20 bg-success/10 text-success"
                                      : report.spfResult === "fail"
                                        ? "border-destructive/20 bg-destructive/10 text-destructive"
                                        : report.spfResult === "softfail"
                                          ? "border-warning/20 bg-warning/10 text-warning"
                                          : "border-border bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {report.spfResult?.toUpperCase() || "NONE"}
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                {(report.deliveryResult === "quarantine" ||
                                  report.disposition === "quarantine") && (
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
                                {(report.deliveryResult === "reject" ||
                                  report.disposition === "reject") && (
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
                                {(report.deliveryResult === "policy" ||
                                  report.disposition === "policy") && (
                                  <span className="border-warning/20 bg-warning/10 text-warning inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold">
                                    Policy
                                  </span>
                                )}
                                {(report.deliveryResult === "delivered" ||
                                  report.disposition === "delivered") && (
                                  <span className="border-success/20 bg-success/10 text-success inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold">
                                    Delivered
                                  </span>
                                )}
                                {(report.deliveryResult === "none" ||
                                  report.disposition === "none") && (
                                  <span className="border-border bg-muted text-muted-foreground inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold">
                                    None
                                  </span>
                                )}
                              </td>
                            </tr>
                            {isExpanded && (
                              <tr className="border-border bg-muted/30 border-b">
                                <td colSpan={10} className="px-6 py-4">
                                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {/* Report Metadata */}
                                    <div>
                                      <h4 className="text-foreground mb-2 font-semibold">
                                        Report Metadata
                                      </h4>
                                      <dl className="text-muted-foreground space-y-1 text-xs">
                                        <div>
                                          <dt className="inline font-medium">
                                            Report ID:
                                          </dt>{" "}
                                          <dd className="inline font-mono">
                                            {report.id}
                                          </dd>
                                        </div>
                                        <div>
                                          <dt className="inline font-medium">
                                            Feedback Type:
                                          </dt>{" "}
                                          <dd className="inline">
                                            {report.feedbackType}
                                          </dd>
                                        </div>
                                        <div>
                                          <dt className="inline font-medium">
                                            Version:
                                          </dt>{" "}
                                          <dd className="inline">
                                            {report.version}
                                          </dd>
                                        </div>
                                        <div>
                                          <dt className="inline font-medium">
                                            User Agent:
                                          </dt>{" "}
                                          <dd className="inline font-mono text-[10px]">
                                            {report.userAgent}
                                          </dd>
                                        </div>
                                        <div>
                                          <dt className="inline font-medium">
                                            Arrival Date:
                                          </dt>{" "}
                                          <dd className="inline">
                                            {report.arrivalDate}
                                          </dd>
                                        </div>
                                      </dl>
                                    </div>

                                    {/* Envelope Details */}
                                    <div>
                                      <h4 className="text-foreground mb-2 font-semibold">
                                        Envelope Details
                                      </h4>
                                      <dl className="text-muted-foreground space-y-1 text-xs">
                                        <div>
                                          <dt className="inline font-medium">
                                            Envelope ID:
                                          </dt>{" "}
                                          <dd className="inline font-mono text-[10px]">
                                            {report.originalEnvelopeId}
                                          </dd>
                                        </div>
                                        <div>
                                          <dt className="inline font-medium">
                                            Mail From:
                                          </dt>{" "}
                                          <dd className="inline">
                                            {report.originalMailFrom}
                                          </dd>
                                        </div>
                                        <div>
                                          <dt className="inline font-medium">
                                            Rcpt To:
                                          </dt>{" "}
                                          <dd className="inline">
                                            {report.originalRcptTo}
                                          </dd>
                                        </div>
                                        <div>
                                          <dt className="inline font-medium">
                                            Reported Domain:
                                          </dt>{" "}
                                          <dd className="inline">
                                            {report.reportedDomain}
                                          </dd>
                                        </div>
                                      </dl>
                                    </div>

                                    {/* DKIM Details */}
                                    <div>
                                      <h4 className="text-foreground mb-2 font-semibold">
                                        DKIM Details
                                      </h4>
                                      <dl className="text-muted-foreground space-y-1 text-xs">
                                        <div>
                                          <dt className="inline font-medium">
                                            Domain:
                                          </dt>{" "}
                                          <dd className="inline">
                                            {report.dkimDomain || "N/A"}
                                          </dd>
                                        </div>
                                        <div>
                                          <dt className="inline font-medium">
                                            Selector:
                                          </dt>{" "}
                                          <dd className="inline">
                                            {report.dkimSelector || "N/A"}
                                          </dd>
                                        </div>
                                        <div>
                                          <dt className="inline font-medium">
                                            Identity:
                                          </dt>{" "}
                                          <dd className="inline">
                                            {report.dkimIdentity || "N/A"}
                                          </dd>
                                        </div>
                                        <div>
                                          <dt className="inline font-medium">
                                            Header Canon:
                                          </dt>{" "}
                                          <dd className="inline font-mono text-[10px]">
                                            {report.dkimCanonicalizedHeader ||
                                              "N/A"}
                                          </dd>
                                        </div>
                                        <div>
                                          <dt className="inline font-medium">
                                            Body Canon:
                                          </dt>{" "}
                                          <dd className="inline">
                                            {report.dkimCanonicalizedBody ||
                                              "N/A"}
                                          </dd>
                                        </div>
                                      </dl>
                                    </div>

                                    {/* SPF Details */}
                                    <div>
                                      <h4 className="text-foreground mb-2 font-semibold">
                                        SPF Details
                                      </h4>
                                      <dl className="text-muted-foreground space-y-1 text-xs">
                                        <div>
                                          <dt className="inline font-medium">
                                            SPF DNS:
                                          </dt>{" "}
                                          <dd className="inline font-mono text-[10px]">
                                            {report.spfDns || "N/A"}
                                          </dd>
                                        </div>
                                      </dl>
                                    </div>

                                    {/* DMARC Details */}
                                    <div>
                                      <h4 className="text-foreground mb-2 font-semibold">
                                        DMARC Details
                                      </h4>
                                      <dl className="text-muted-foreground space-y-1 text-xs">
                                        <div>
                                          <dt className="inline font-medium">
                                            Policy:
                                          </dt>{" "}
                                          <dd className="inline">
                                            {report.dmarcPolicy}
                                          </dd>
                                        </div>
                                        <div>
                                          <dt className="inline font-medium">
                                            Published:
                                          </dt>{" "}
                                          <dd className="inline font-mono text-[10px]">
                                            {report.dmarcPolicyPublished ||
                                              "N/A"}
                                          </dd>
                                        </div>
                                      </dl>
                                    </div>

                                    {/* Authentication Results */}
                                    <div className="md:col-span-2 lg:col-span-3">
                                      <h4 className="text-foreground mb-2 font-semibold">
                                        Authentication Results
                                      </h4>
                                      <pre className="text-muted-foreground bg-muted border-border overflow-x-auto rounded border p-2 font-mono text-[10px]">
                                        {report.authenticationResults || "N/A"}
                                      </pre>
                                    </div>

                                    {/* Message Headers */}
                                    {report.messageHeaders && (
                                      <div className="md:col-span-2 lg:col-span-3">
                                        <h4 className="text-foreground mb-2 font-semibold">
                                          Message Headers (Preview)
                                        </h4>
                                        <pre className="text-muted-foreground bg-muted border-border overflow-x-auto rounded border p-2 font-mono text-[10px]">
                                          {report.messageHeaders}
                                        </pre>
                                      </div>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        );
                      })
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
        <FAQSection />
        <RelatedTools />
      </div>
    </ToolLayout>
  );
}
