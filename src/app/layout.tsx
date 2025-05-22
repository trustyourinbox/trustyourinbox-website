import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CtaSection from "@/components/sections/CtaSection"
import "./globals.css"
import { FaThLarge, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaHome, FaInfoCircle, FaCogs, FaTag, FaRegNewspaper } from "react-icons/fa"
import { Shield } from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
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
        {/* Navigation */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
                  <Shield className="h-7 w-7 text-primary" />
                  <span><span className="text-primary">Trust</span>YourInbox</span>
                </Link>
              </div>
              <Navbar />
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-base font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-2">
                  <FaThLarge className="w-5 h-5 text-blue-600" />
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-base font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <CtaSection />
        <Footer />
      </body>
    </html>
  )
}
