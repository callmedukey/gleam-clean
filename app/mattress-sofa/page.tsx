import React from "react";

import CleaningStepsSection from "./components/cleaning-steps-section";
import MatressHeroSection from "./components/matress-hero-section";

const page = () => {
  return (
    <main className="min-h-screen">
      <MatressHeroSection />
      <CleaningStepsSection />
    </main>
  );
};

export default page;
