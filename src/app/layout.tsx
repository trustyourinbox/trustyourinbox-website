import Link from "next/link"
import localFont from "next/font/local"
import ModernNavbar from "@/components/ModernNavbar"
import Footer from "@/components/Footer"
import CtaSection from "@/components/sections/CtaSection"
import "./globals.css"
import "../styles/fonts.css"

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
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${averta.variable}`}>
      <head>
        <title>Free DMARC Checker & Monitoring Tool | Stop Email Spoofing | TrustYourInbox</title>
        <meta name="description" content="Implement DMARC easily with our free checker. Stop email spoofing, protect your domain, and monitor authentication. Perfect for IT teams, MSPs, and small businesses." />
        <meta property="og:title" content="Free DMARC Checker & Monitoring Tool | Stop Email Spoofing | TrustYourInbox" />
        <meta property="og:description" content="Implement DMARC easily with our free checker. Stop email spoofing, protect your domain, and monitor authentication. Perfect for IT teams, MSPs, and small businesses." />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trustyourinbox.com/" />
        <meta name="keywords" content="DMARC checker, DMARC monitoring, email spoofing protection, DMARC implementation, free DMARC analyzer, MSP DMARC solution" />
        <link rel="canonical" href="https://trustyourinbox.com/" />
      </head>
      <body className="font-sans antialiased">
        <ModernNavbar />
        <main className="pt-16">{children}</main>
        <CtaSection />
        <Footer />
      </body>
    </html>
  )
}
