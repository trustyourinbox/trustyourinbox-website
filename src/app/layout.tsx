import Image from "next/image"
import Link from "next/link"
import { Nunito_Sans } from "next/font/google"
import Navbar from "@/components/Navbar"
import "./globals.css"
import { FaThLarge, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaHome, FaInfoCircle, FaCogs, FaTag, FaRegNewspaper } from "react-icons/fa"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunitoSans.variable}`}>
      <body className="font-sans antialiased">
        {/* Navigation */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="TrustYourInbox Logo"
                    width={200}
                    height={40}
                    className="h-10 w-auto"
                  />
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
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2 text-base font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        {/* Footer */}
        <footer className="w-full bg-blue-700 text-white pt-12 pb-6 font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Brand & Social */}
              <div className="flex flex-col items-start">
                <div className="text-xl font-bold mb-2 tracking-tight">TrustYourInbox</div>
                <div className="mb-3 text-sm font-medium leading-relaxed text-white/90">
                  Secure email solutions for businesses and individuals.<br />
                  Protecting your communications since 2020.
                </div>
                <div className="flex gap-3 mt-3">
                  <a href="#" aria-label="X (Twitter)" className="hover:text-blue-200"><FaTwitter className="w-4 h-4 text-white/80" /></a>
                  <a href="#" aria-label="YouTube" className="hover:text-blue-200"><FaYoutube className="w-4 h-4 text-white/80" /></a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-blue-200"><FaLinkedinIn className="w-4 h-4 text-white/80" /></a>
                </div>
              </div>
              {/* Blank Column */}
              <div></div>
              {/* Blank Column */}
              <div></div>
              {/* Schedule a Demo CTA */}
              <div className="flex flex-col items-start">
                <div className="text-base font-bold mb-2 flex items-center gap-2 tracking-tight">
                  <FaCalendarAlt className="w-4 h-4 text-white/80" />
                  Schedule a Demo
                </div>
                <div className="mb-3 text-sm font-medium text-white/90">See TrustYourInbox in action. Book a personalized walkthrough with our team.</div>
                <a href="/demo" className="rounded-lg bg-white text-blue-700 font-semibold py-2 px-5 hover:bg-blue-100 transition-colors shadow text-sm">
                  Book a Demo
                </a>
              </div>
            </div>
            {/* Divider */}
            <div className="border-t border-blue-400 opacity-40 my-5" />
            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60 font-medium">
              <div>&copy; {new Date().getFullYear()} TrustYourInbox. All rights reserved.</div>
              <div className="flex gap-5">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
