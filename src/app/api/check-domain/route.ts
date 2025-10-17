import { NextResponse } from "next/server";
import dns from "dns";
import { promisify } from "util";

const resolveTxt = promisify(dns.resolveTxt);
const resolveMx = promisify(dns.resolveMx);

interface DmarcResult {
  record: string;
  status: "enforced" | "monitoring" | "none";
  policy: "quarantine" | "reject" | "none";
  percentage: number;
}

interface SpfResult {
  record: string;
  status: "valid" | "invalid" | "none";
}

interface DkimResult {
  record: string;
  status: "valid" | "invalid" | "none";
}

interface DomainCheckResult {
  domain: string;
  dmarc: DmarcResult;
  spf: SpfResult;
  dkim: DkimResult;
}

function parseDmarcRecord(record: string): DmarcResult {
  const params = new URLSearchParams(record.replace("v=DMARC1;", ""));

  return {
    record,
    status: params.get("p") === "none" ? "monitoring" : "enforced",
    policy: (params.get("p") as "quarantine" | "reject" | "none") || "none",
    percentage: parseInt(params.get("pct") || "100", 10),
  };
}

function parseSpfRecord(record: string): SpfResult {
  return {
    record,
    status: record.startsWith("v=spf1") ? "valid" : "invalid",
  };
}

function parseDkimRecord(record: string): DkimResult {
  return {
    record,
    status: record.startsWith("v=DKIM1") ? "valid" : "invalid",
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return NextResponse.json(
      { error: "Domain parameter is required" },
      { status: 400 }
    );
  }

  let dmarc: DmarcResult = {
    record: "",
    status: "none",
    policy: "none",
    percentage: 0,
  };
  let spf: SpfResult = {
    record: "",
    status: "none",
  };
  let dkim: DkimResult = {
    record: "",
    status: "none",
  };

  try {
    // DMARC
    try {
      const dmarcRecord = await resolveTxt(`_dmarc.${domain}`);
      dmarc = parseDmarcRecord(dmarcRecord[0][0]);
    } catch (err: any) {
      if (err.code !== "ENODATA" && err.code !== "ENOTFOUND") throw err;
    }
    // SPF
    try {
      const spfRecord = await resolveTxt(domain);
      spf = parseSpfRecord(spfRecord[0][0]);
    } catch (err: any) {
      if (err.code !== "ENODATA" && err.code !== "ENOTFOUND") throw err;
    }
    // DKIM (default selector)
    try {
      const dkimRecord = await resolveTxt(`default._domainkey.${domain}`);
      dkim = parseDkimRecord(dkimRecord[0][0]);
    } catch (err: any) {
      if (err.code !== "ENODATA" && err.code !== "ENOTFOUND") throw err;
    }

    // Return results in the format expected by dmarc-domain-checker
    return NextResponse.json({
      domain,
      dmarc,
      spf,
      dkim,
    });
  } catch (error) {
    console.error("Error checking domain:", error);
    return NextResponse.json(
      { error: "Failed to check domain records" },
      { status: 500 }
    );
  }
}
