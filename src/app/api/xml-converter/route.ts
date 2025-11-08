import { NextRequest, NextResponse } from "next/server";
import AdmZip from "adm-zip";
import { gunzipSync } from "zlib";
import { parseStringPromise } from "xml2js";

async function bufferFile(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function extractXmlBuffers(
  file: File
): Promise<{ name: string; buffer: Buffer }[]> {
  const buf = await bufferFile(file);
  if (file.name.endsWith(".zip")) {
    const zip = new AdmZip(buf);
    return zip
      .getEntries()
      .filter((e: any) => e.entryName.endsWith(".xml"))
      .map((e: any) => ({ name: e.entryName, buffer: e.getData() }));
  } else if (file.name.endsWith(".gz")) {
    return [{ name: file.name.replace(/\.gz$/, ""), buffer: gunzipSync(buf) }];
  } else {
    return [{ name: file.name, buffer: buf }];
  }
}

function humanizeDmarcXml(xml: any) {
  // Basic summary extraction for DMARC feedback report
  const report = xml.feedback || xml["feedback"];
  if (!report) return { error: "Invalid DMARC XML structure." };
  const org = report.report_metadata?.[0]?.org_name?.[0] || "";
  const domain = report.policy_published?.[0]?.domain?.[0] || "";
  const dateRange = report.report_metadata?.[0]?.date_range?.[0] || {};
  const records = (report.record || []).map((rec: any) => {
    const row = rec.row?.[0] || {};
    const identifiers = rec.identifiers?.[0] || {};
    const authResults = rec.auth_results?.[0] || {};
    return {
      source_ip: row.source_ip?.[0] || "",
      count: row.count?.[0] || "",
      disposition: row.policy_evaluated?.[0]?.disposition?.[0] || "",
      dkim: row.policy_evaluated?.[0]?.dkim?.[0] || "",
      spf: row.policy_evaluated?.[0]?.spf?.[0] || "",
      envelope_from: identifiers.envelope_from?.[0] || "",
      header_from: identifiers.header_from?.[0] || "",
      dkim_domains: (authResults.dkim || []).map(
        (d: any) => d.domain?.[0] || ""
      ),
      spf_domains: (authResults.spf || []).map((s: any) => s.domain?.[0] || ""),
    };
  });
  return {
    org,
    domain,
    date_range: {
      begin: dateRange.begin?.[0] || "",
      end: dateRange.end?.[0] || "",
    },
    record_count: records.length,
    records,
  };
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll("file") as File[];
  const results = [];
  for (const file of files) {
    try {
      const xmlBuffers = await extractXmlBuffers(file);
      for (const { name, buffer } of xmlBuffers) {
        try {
          const xml = await parseStringPromise(buffer.toString("utf-8"));
          const summary = humanizeDmarcXml(xml);
          results.push({ name, summary });
        } catch (err) {
          results.push({ name, error: "Failed to parse XML." });
        }
      }
    } catch (err) {
      results.push({
        name: file.name,
        error: "Failed to extract or decompress file.",
      });
    }
  }
  return NextResponse.json({ files: results });
}
