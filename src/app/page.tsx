import ModernHeroSection from "@/components/sections/ModernHeroSection";
import BentoGridFeatures from "@/components/sections/BentoGridFeatures";
import AppShowcaseSection from "@/components/sections/AppShowcaseSection";
import ToolsShowcaseSection from "@/components/sections/ToolsShowcaseSection";
import DmarcSolutionSection from "@/components/sections/DmarcSolutionSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <ModernHeroSection />
      <BentoGridFeatures />
      <AppShowcaseSection />
      <ToolsShowcaseSection />
      <DmarcSolutionSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </div>
  );
}
