"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Search,
  Bell,
  ArrowRight,
  Shield,
  Mail,
  Lock,
} from "lucide-react";
import { useState } from "react";
import ModernHeroSection from "@/components/sections/ModernHeroSection";
import BentoGridFeatures from "@/components/sections/BentoGridFeatures";
import ToolsShowcaseSection from "@/components/sections/ToolsShowcaseSection";
import DmarcSolutionSection from "@/components/sections/DmarcSolutionSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [domain, setDomain] = useState("");

  return (
    <div className="min-h-screen bg-background font-sans">
      <ModernHeroSection />
      <BentoGridFeatures />
      <ToolsShowcaseSection />
      <DmarcSolutionSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </div>
  );
}
