import { Metadata } from "next";
import React from "react";

import AllInclusiveSection from "./components/all-inclusive-section";
import BasicCareSection from "./components/basic-care-section";
import CareBanner from "./components/care-banner";
import CleaningFeaturesSection from "./components/cleaning-features-section";
import DifferenceSection from "./components/difference-section";
import MatressHeroSection from "./components/matress-hero-section";
import PremiumCareSection from "./components/premium-care-section";
import PricingSection from "./components/pricing-section";
import ProcessSection from "./components/process-section";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "매트리스 & 소파 청소 서비스",
  description: "매트리스 & 소파 청소 서비스",
};

const page = () => {
  return (
    <main className="min-h-screen **:break-keep">
      <MatressHeroSection />
      <DifferenceSection />
      <BasicCareSection />
      <CareBanner />
      <PremiumCareSection />
      <AllInclusiveSection />
      {/* <CleaningStepsSection /> */}
      <CleaningFeaturesSection />
      <PricingSection />
      <ProcessSection />
    </main>
  );
};

export default page;
