import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const domain = req.nextUrl.searchParams.get('domain');
  const selector = req.nextUrl.searchParams.get('selector');
  if (!domain || !selector) {
    return NextResponse.json({ error: 'Missing domain or selector parameter.' }, { status: 400 });
  }
  try {
    const res = await fetch(`https://dns.google/resolve?name=${selector}._domainkey.${domain}&type=TXT`);
    const data = await res.json();
    const answer = data?.Answer?.[0]?.data;
    if (!answer) {
      return NextResponse.json({ error: 'No DKIM record found for this selector/domain.' }, { status: 404 });
    }
    // Remove leading/trailing quotes and join multi-part TXT records
    const record = answer.replace(/^"|"$/g, '').replace(/"\s+"/g, '');
    return NextResponse.json({ record });
  } catch (err) {
    return NextResponse.json({ error: 'Error fetching DKIM record.' }, { status: 500 });
  }
} 