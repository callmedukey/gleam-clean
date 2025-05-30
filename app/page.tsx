import BeforeAfterSection from "./components/before-after-section";
import FeaturesSection from "./components/features-section";
import UnderFeatureBanner from "./components/under-feature-banner";
import UnderHeroBanner from "./components/under-hero-banner";
import HeroSection from "@/app/components/hero-section";

export const dynamic = "force-static";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <UnderHeroBanner />
      <FeaturesSection />
      <UnderFeatureBanner />
      <BeforeAfterSection />
    </main>
  );
}
