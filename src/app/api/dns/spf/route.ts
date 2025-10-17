import { NextResponse } from "next/server";
import dns from "dns";
import { promisify } from "util";
import CIDR from "cidr-tools";

const resolveTxt = promisify(dns.resolveTxt);
const resolveMx = promisify(dns.resolveMx);
const resolve4 = promisify(dns.resolve4);
const resolve6 = promisify(dns.resolve6);

interface SPFNode {
  domain: string;
  record: string;
  includes: SPFNode[];
  ip4: string[];
  ip6: string[];
  mx: string[];
  a: string[];
  all: string;
  dnsLookups: number;
  totalIp4Blocks: number;
  totalIp6Blocks: number;
}

async function resolveDomain(domain: string): Promise<string[]> {
  try {
    const records = await resolve4(domain);
    return records;
  } catch {
    return [];
  }
}

async function resolveDomain6(domain: string): Promise<string[]> {
  try {
    const records = await resolve6(domain);
    return records;
  } catch {
    return [];
  }
}

async function resolveMxRecords(domain: string): Promise<string[]> {
  try {
    const records = await resolveMx(domain);
    return records.map((r) => r.exchange);
  } catch {
    return [];
  }
}

function countIpBlocks(ips: string[]): number {
  return ips.reduce((count, ip) => {
    try {
      const expanded = CIDR.expandCidr(ip);
      return count + (Array.isArray(expanded) ? expanded.length : 1);
    } catch {
      return count + 1;
    }
  }, 0);
}

async function parseSPFNode(
  domain: string,
  depth = 0,
  visited = new Set<string>()
): Promise<SPFNode | null> {
  if (visited.has(domain) || depth > 10) {
    return null;
  }
  visited.add(domain);

  try {
    const records = await resolveTxt(domain);
    const spfRecord = records
      .flat()
      .find((record) => record.startsWith("v=spf1"));

    if (!spfRecord) {
      return null;
    }

    const node: SPFNode = {
      domain,
      record: spfRecord,
      includes: [],
      ip4: [],
      ip6: [],
      mx: [],
      a: [],
      all: "~all",
      dnsLookups: 0,
      totalIp4Blocks: 0,
      totalIp6Blocks: 0,
    };

    const mechanisms = spfRecord.split(" ");
    node.dnsLookups = mechanisms.length;

    for (const mechanism of mechanisms) {
      if (mechanism.startsWith("include:")) {
        const includeDomain = mechanism.replace("include:", "");
        const includeNode = await parseSPFNode(
          includeDomain,
          depth + 1,
          visited
        );
        if (includeNode) {
          node.includes.push(includeNode);
          node.totalIp4Blocks += includeNode.totalIp4Blocks;
          node.totalIp6Blocks += includeNode.totalIp6Blocks;
          node.dnsLookups += includeNode.dnsLookups;
        }
      } else if (mechanism.startsWith("ip4:")) {
        const ip = mechanism.replace("ip4:", "");
        node.ip4.push(ip);
        node.totalIp4Blocks += countIpBlocks([ip]);
      } else if (mechanism.startsWith("ip6:")) {
        const ip = mechanism.replace("ip6:", "");
        node.ip6.push(ip);
        node.totalIp6Blocks += countIpBlocks([ip]);
      } else if (mechanism === "mx") {
        const mxRecords = await resolveMxRecords(domain);
        node.mx = mxRecords;
        node.dnsLookups += mxRecords.length;
      } else if (mechanism === "a") {
        const aRecords = await resolveDomain(domain);
        node.a = aRecords;
        node.dnsLookups += aRecords.length;
      } else if (
        mechanism === "all" ||
        mechanism === "+all" ||
        mechanism === "-all" ||
        mechanism === "~all" ||
        mechanism === "?all"
      ) {
        node.all = mechanism;
      }
    }

    return node;
  } catch (error) {
    console.error(`Error parsing SPF for ${domain}:`, error);
    return null;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return NextResponse.json(
      { message: "Domain parameter is required" },
      { status: 400 }
    );
  }

  try {
    const spfTree = await parseSPFNode(domain);

    if (!spfTree) {
      return NextResponse.json(
        { message: "No SPF record found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ spf: spfTree });
  } catch (error) {
    console.error("Error fetching SPF record:", error);
    return NextResponse.json(
      { message: "Failed to fetch SPF record" },
      { status: 500 }
    );
  }
}
