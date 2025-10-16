import { Card } from "@/components/ui/Card"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-muted/30 py-20">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">Trusted by IT Teams Worldwide</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how organizations of all sizes have simplified their DMARC implementation.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote className="border-l-2 border-primary/50 pl-4 italic text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "John Doe",
    title: "IT Director, TechCorp",
    initials: "JD",
    quote: "TrustYourInbox made implementing DMARC a breeze. We went from zero to enforcement in just two weeks.",
  },
  {
    name: "Alice Smith",
    title: "MSP Owner, SecureIT",
    initials: "AS",
    quote: "Managing multiple client domains is now effortless. The automation saves us hours every week.",
  },
  {
    name: "Robert Johnson",
    title: "Solo Admin, StartupX",
    initials: "RJ",
    quote: "As a one-person IT team, I needed something simple. TrustYourInbox delivered exactly that.",
  },
] 