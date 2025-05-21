import { NextRequest, NextResponse } from 'next/server';

const DKIM_SELECTORS = ['default', 'selector1', 'google'];

export async function GET(req: NextRequest) {
  const domain = req.nextUrl.searchParams.get('domain');
  if (!domain) {
    return NextResponse.json({ error: 'Missing domain parameter.' }, { status: 400 });
  }

  try {
    // DMARC
    const dmarcRes = await fetch(`https://dns.google/resolve?name=_dmarc.${domain}&type=TXT`);
    const dmarcData = await dmarcRes.json();
    let dmarc = null;
    if (dmarcData?.Status === 0 && Array.isArray(dmarcData?.Answer)) {
      const dmarcAnswer = dmarcData.Answer[0]?.data;
      if (dmarcAnswer) {
        dmarc = dmarcAnswer.replace(/^"|"$/g, "");
      }
    }

    // SPF
    const spfRes = await fetch(`https://dns.google/resolve?name=${domain}&type=TXT`);
    const spfData = await spfRes.json();
    let spf = null;
    if (spfData?.Status === 0 && Array.isArray(spfData?.Answer)) {
      for (const ans of spfData.Answer) {
        const txt = ans.data.replace(/^"|"$/g, "");
        if (txt.startsWith('v=spf1')) {
          spf = txt;
          break;
        }
      }
    }

    // DKIM (check common selectors)
    const dkimResults: { selector: string, record: string | null }[] = [];
    for (const selector of DKIM_SELECTORS) {
      const dkimRes = await fetch(`https://dns.google/resolve?name=${selector}._domainkey.${domain}&type=TXT`);
      const dkimData = await dkimRes.json();
      if (dkimData?.Status === 0 && Array.isArray(dkimData?.Answer)) {
        const dkimAnswer = dkimData.Answer[0]?.data;
        if (dkimAnswer) {
          dkimResults.push({
            selector,
            record: dkimAnswer.replace(/^"|"$/g, "")
          });
        }
      }
    }

    return NextResponse.json({
      dmarc,
      spf,
      dkim: dkimResults
    });
  } catch (err) {
    console.error('Error fetching DNS records:', err);
    return NextResponse.json({ error: 'Error fetching DNS records.' }, { status: 500 });
  }
} 