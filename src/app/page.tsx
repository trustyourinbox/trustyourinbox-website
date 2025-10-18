import ModernHeroSection from "@/components/sections/ModernHeroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <ModernHeroSection />
      <ProductShowcase />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </div>
  );
}
