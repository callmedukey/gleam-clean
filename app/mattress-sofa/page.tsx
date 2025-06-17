import { Metadata } from "next";
import React from "react";

import BasicCareSection from "./components/basic-care-section";
import CleaningFeaturesSection from "./components/cleaning-features-section";
import DifferenceSection from "./components/difference-section";
import MatressHeroSection from "./components/matress-hero-section";
import PricingSection from "./components/pricing-section";
import ProcessSection from "./components/process-section";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "매트리스 & 소파 청소 서비스",
  description: "매트리스 & 소파 청소 서비스",
};

const page = () => {
  return (
    <main className="min-h-screen">
      <MatressHeroSection />
      <DifferenceSection />
      <BasicCareSection />
      {/* <CleaningStepsSection /> */}
      <CleaningFeaturesSection />
      <PricingSection />
      <ProcessSection />
    </main>
  );
};

export default page;
