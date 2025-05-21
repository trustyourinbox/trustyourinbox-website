import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import { FaBullseye, FaUsers, FaHeart } from "react-icons/fa";

export const metadata = {
  title: 'Company | TrustYourInbox',
  description: 'Learn more about TrustYourInbox, our mission, team, and values.'
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        badge={<span>Our Company</span>}
        title={<>Get to Know <span className="text-blue-600">TrustYourInbox</span></>}
        subtitle="We are passionate about making email security simple, effective, and accessible for everyone."
        ctaButtons={[
          { label: "Contact Us", href: "/contact", variant: "primary" },
        ]}
        illustrationSrc="/placeholder.svg?height=500&width=600"
      />
      <FeatureGrid
        features={[
          {
            icon: <FaBullseye className="h-6 w-6" />,
            title: "Our Mission",
            description: "To empower organizations of all sizes to protect their email domains and users from phishing and cyber threats with ease.",
          },
          {
            icon: <FaUsers className="h-6 w-6" />,
            title: "Our Team",
            description: "A diverse group of security experts, engineers, and innovators dedicated to building the future of email protection.",
          },
          {
            icon: <FaHeart className="h-6 w-6" />,
            title: "Our Values",
            description: "Integrity, transparency, and a relentless focus on customer success drive everything we do.",
          },
        ]}
      />
    </div>
  )
} 