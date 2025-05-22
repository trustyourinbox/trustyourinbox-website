import { Shield, BarChart2, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">Comprehensive DMARC Protection</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform simplifies email authentication and provides the tools you need to secure your domain.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: "Automated DMARC Setup",
    description:
      "Configure and deploy DMARC policies in minutes with our guided setup wizard and automated deployment tools.",
    icon: Shield,
  },
  {
    title: "Real-time Monitoring",
    description:
      "Track email authentication performance with real-time dashboards and alerts for immediate visibility.",
    icon: BarChart2,
  },
  {
    title: "Phishing Protection",
    description: "Prevent domain spoofing and protect your customers and employees from targeted phishing attacks.",
    icon: Mail,
  },
] 