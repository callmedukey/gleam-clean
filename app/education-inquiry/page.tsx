import * as motion from "motion/react-client";
import React from "react";

import EducationBannerSection from "./components/education-banner-section";
import EducationContactSection from "./components/education-contact-section";
import EducationFeaturesSection from "./components/education-features-section";

export const metadata = {
  title: "교육 문의",
  description: "교육 문의",
};

export const dynamic = "force-static";

const page = async () => {
  return (
    <main className="min-h-screen bg-background  py-12 sm:py-16 lg:py-20">
      <motion.div
        className="text-center mb-12 sm:mb-14 lg:mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="space-y-2 max-w-[48.125rem] mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-4xl font-bold text-secondary leading-[1.6] break-keep"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            교육 문의 환영합니다
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-text-primary leading-[1.5] break-keep px-4 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            글림케어 홈케어 기술 교육, 전문가의 길을 여는 과정
          </motion.p>
        </div>
      </motion.div>

      {/* Education Contact Section */}
      <EducationContactSection />
      {/* Education Features Section */}
      <EducationFeaturesSection />
      {/* Education Banner Section */}
      <EducationBannerSection />
    </main>
  );
};

export default page;
