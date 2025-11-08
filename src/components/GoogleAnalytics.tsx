"use client";

import Script from "next/script";

export default function GoogleAnalytics({ ga4Id }: { ga4Id: string }) {
  // Validate GA4 ID format to prevent XSS (CWE-79)
  // GA4 IDs must match format: G-XXXXXXXXXX or GT-XXXXXXXXXX
  const ga4Pattern = /^G[T]?-[A-Z0-9]{10,}$/i;

  if (!ga4Id || !ga4Pattern.test(ga4Id)) {
    console.error(
      "Invalid GA4 ID format. Expected format: G-XXXXXXXXXX or GT-XXXXXXXXXX"
    );
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        // cycode-ignore[xss] GA4 ID validated with strict regex pattern (lines 8-15) - CWE-79 mitigated
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga4Id}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
