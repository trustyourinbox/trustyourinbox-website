import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import { FaShieldAlt, FaChartBar, FaRobot } from "react-icons/fa";

export const metadata = {
  title: 'Features | TrustYourInbox',
  description: 'Explore the powerful features of TrustYourInbox.'
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        badge={<><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>Feature Highlights</>}
        title={<>Explore Our <span className="text-blue-600">Features</span></>}
        subtitle="Discover the tools and technology that make TrustYourInbox the best choice for email security and peace of mind."
        ctaButtons={[
          { label: "Get Started Free", href: "/signup", variant: "primary" },
          { label: "Request Demo", href: "/demo", variant: "secondary" },
        ]}
        illustrationSrc="/placeholder.svg?height=500&width=600"
      />
      <FeatureGrid
        features={[
          {
            icon: <FaShieldAlt className="h-6 w-6" />,
            title: "Automated DMARC, SPF & DKIM",
            description: "Effortlessly configure, monitor, and enforce DMARC, SPF, and DKIM records. Our automation ensures your domain is always protected and compliant.",
          },
          {
            icon: <FaChartBar className="h-6 w-6" />,
            title: "Real-Time Monitoring & Alerts",
            description: "Get instant notifications about suspicious activity, authentication failures, or policy changes. Stay ahead of threats with proactive monitoring.",
          },
          {
            icon: <FaRobot className="h-6 w-6" />,
            title: "Advanced Analytics & Reporting",
            description: "Visualize authentication results, sources, and trends. Generate detailed reports for compliance, audits, and executive insights.",
          },
        ]}
      />
    </div>
  )
} 