export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            How DMARC Implementation Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our streamlined process gets you from zero to full DMARC enforcement
            in just a few steps.
          </p>
        </div>
        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border"></div>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center">
                    <div className="absolute left-1/2 z-10 -translate-x-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground">
                        {index + 1}
                      </div>
                    </div>
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "ml-auto pl-12"}`}
                    >
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Connect Your Domain",
    description:
      "Add your domain to our platform and we'll automatically scan your current email authentication setup.",
  },
  {
    title: "Analyze Email Sources",
    description:
      "We identify all legitimate email sources and help you configure SPF and DKIM for each one.",
  },
  {
    title: "Monitor in Reporting Mode",
    description:
      "Deploy DMARC in monitoring mode to gather data without affecting email delivery.",
  },
  {
    title: "Gradually Enforce Policies",
    description:
      "Based on reporting data, gradually increase enforcement levels until you reach full protection.",
  },
];
