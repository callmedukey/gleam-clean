import { Metadata } from "next";
import React from "react";

import ACFeaturesList from "./components/ac-features-list";
import ACFeaturesSection from "./components/ac-features-section";
import ACHeroSection from "./components/ac-hero-section";
import ACPricingTable from "./components/ac-pricing-table";
import ACProcesssSection from "./components/ac-process-section";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "에어컨 청소 서비스",
  description: "에어컨 청소 서비스",
};

const page = () => {
  return (
    <main className="min-h-screen">
      <ACHeroSection />
      <ACFeaturesSection />
      <ACFeaturesList />
      <ACPricingTable />
      <ACProcesssSection />
    </main>
  );
};

export default page;
