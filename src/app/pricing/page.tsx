import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import { FaRocket, FaGem, FaBuilding } from "react-icons/fa";

export const metadata = {
  title: 'Pricing | TrustYourInbox',
  description: 'Simple, transparent pricing for every business.'
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        badge={<span>Pricing</span>}
        title={<>Simple, <span className="text-blue-600">Transparent Pricing</span></>}
        subtitle="Choose the plan that fits your organization. No hidden fees, no surprises."
        ctaButtons={[
          { label: "Get Started Free", href: "/signup", variant: "primary" },
          { label: "Contact Sales", href: "/contact", variant: "secondary" },
        ]}
        illustrationSrc="/placeholder.svg?height=500&width=600"
      />
      <FeatureGrid
        features={[
          {
            icon: <FaRocket className="h-6 w-6" />,
            title: "Starter",
            description: "$19/mo – Essential protection for small teams. Includes DMARC, SPF, and DKIM automation.",
          },
          {
            icon: <FaGem className="h-6 w-6" />,
            title: "Pro",
            description: "$49/mo – Advanced analytics, real-time monitoring, and priority support for growing businesses.",
          },
          {
            icon: <FaBuilding className="h-6 w-6" />,
            title: "Enterprise",
            description: "Custom – Enterprise-grade security, dedicated support, and custom integrations. Contact us for a quote.",
          },
        ]}
      />
    </div>
  )
} 