import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import DemoRequestForm from "@/components/DemoRequestForm";

export default function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Secure Your Email Domain?
          </h2>
          <p className="mt-4 text-xl text-white">
            Join thousands of organizations that trust TrustYourInbox for DMARC
            implementation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="gap-2">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
            <DemoRequestForm
              triggerButton={
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  Schedule Demo
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
