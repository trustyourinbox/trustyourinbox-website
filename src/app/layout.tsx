import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ModernNavbar from "@/components/ModernNavbar";
import Footer from "@/components/Footer";
import "./globals.css";
import "../styles/fonts.css";

const averta = localFont({
  src: [
    {
      path: "../assets/fonts/Averta-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Averta-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Averta-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Free DMARC Checker & Monitoring Tool | Stop Email Spoofing | TrustYourInbox",
    template: "%s | TrustYourInbox",
  },
  description:
    "Implement DMARC easily with our free checker. Stop email spoofing, protect your domain, and monitor authentication. Perfect for IT teams, MSPs, and small businesses.",
  keywords: [
    "DMARC checker",
    "DMARC monitoring",
    "email spoofing protection",
    "DMARC implementation",
    "free DMARC analyzer",
    "MSP DMARC solution",
    "SPF analyzer",
    "email security",
    "domain protection",
  ],
  authors: [{ name: "TrustYourInbox" }],
  creator: "TrustYourInbox",
  publisher: "TrustYourInbox",
  metadataBase: new URL("https://trustyourinbox.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Free DMARC Checker & Monitoring Tool | Stop Email Spoofing | TrustYourInbox",
    description:
      "Implement DMARC easily with our free checker. Stop email spoofing, protect your domain, and monitor authentication. Perfect for IT teams, MSPs, and small businesses.",
    url: "https://trustyourinbox.com",
    siteName: "TrustYourInbox",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "TrustYourInbox - DMARC Security Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Free DMARC Checker & Monitoring Tool | Stop Email Spoofing | TrustYourInbox",
    description:
      "Implement DMARC easily with our free checker. Stop email spoofing, protect your domain, and monitor authentication.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TrustYourInbox",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: "2025-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1247",
    },
    description:
      "DMARC analytics and email security platform for IT teams and MSPs. Stop email spoofing with comprehensive monitoring and reporting tools.",
    features: [
      "DMARC Analytics",
      "SPF Validation",
      "Bulk Report Processing",
      "Multi-Domain Management",
      "Team Collaboration",
      "Real-time Monitoring",
    ],
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TrustYourInbox",
    url: "https://trustyourinbox.com",
    logo: "https://trustyourinbox.com/images/logo.png",
    description:
      "Professional DMARC and email security platform trusted by 1,200+ IT teams worldwide.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@trustyourinbox.com",
    },
  };

  return (
    <html lang="en" className={`${averta.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ModernNavbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
