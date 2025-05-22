import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Secure Your Email Domain?
          </h2>
          <p className="mt-4 text-xl text-white">
            Join thousands of organizations that trust TrustYourInbox for DMARC implementation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 