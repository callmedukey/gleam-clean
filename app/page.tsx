import HeroSection from "@/app/components/hero-section";

import FeaturesSection from "./components/features-section";
import KeyFeaturesSection from "./components/key-features-section";
import StartWithGleam from "./components/start-with-gleam";
import UnderFeatureBanner from "./components/under-feature-banner";
import UnderHeroBanner from "./components/under-hero-banner";
import WhyGleamSection from "./components/why-gleam-section";

export const dynamic = "force-static";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <UnderHeroBanner />
      <FeaturesSection />
      <UnderFeatureBanner />
      <StartWithGleam />
      <KeyFeaturesSection />
      <WhyGleamSection />
    </main>
  );
}
