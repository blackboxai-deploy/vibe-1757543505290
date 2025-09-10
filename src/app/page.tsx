"use client";

import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { AppModes } from "@/components/AppModes";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PricingPlans } from "@/components/PricingPlans";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <FeaturesGrid />
      <AppModes />
      <PricingPlans />
      <Testimonials />
      <Footer />
    </main>
  );
}