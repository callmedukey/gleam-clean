import { Metadata } from "next";
import React from "react";

import EntryBannerSection from "./components/entry-banner-section";
import EntryFeaturesSection from "./components/entry-features-section";
import EntryHeroSection from "./components/entry-hero-section";
import EntryServiceSection from "./components/entry-service-section";
import EntrySubHeroSection from "./components/entry-subhero-section";

export const metadata: Metadata = {
  title: "입주 청소 서비스",
  description: "입주 청소 서비스",
};

export const dynamic = "force-static";

const page = () => {
  return (
    <main className="min-h-screen">
      <EntryHeroSection />
      <EntrySubHeroSection />
      <EntryFeaturesSection />
      <EntryBannerSection />
      <EntryServiceSection />
    </main>
  );
};

export default page;
