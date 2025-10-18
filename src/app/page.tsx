import dynamic from "next/dynamic";
import ModernHeroSection from "@/components/sections/ModernHeroSection";

// Lazy load below-the-fold sections for better performance
const ProductShowcase = dynamic(
  () => import("@/components/sections/ProductShowcase"),
  {
    loading: () => <div className="min-h-screen" />,
  }
);

const HowItWorksSection = dynamic(
  () => import("@/components/sections/HowItWorksSection"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const FinalCtaSection = dynamic(
  () => import("@/components/sections/FinalCtaSection"),
  {
    loading: () => <div className="min-h-[300px]" />,
  }
);

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <ModernHeroSection />
      <ProductShowcase />
      <HowItWorksSection />
      <FinalCtaSection />
    </div>
  );
}
