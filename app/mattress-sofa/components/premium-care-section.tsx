import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

// Import images
import naturalDetergentBg from "@/public/images/premium-care/natural-detergent-bg.png";
import steamCleanerBg from "@/public/images/premium-care/steam-cleaner-bg.png";
import wetCleanerBg from "@/public/images/premium-care/wet-cleaner-bg.png";

const PremiumCareSection = () => {
  return (
    <motion.section
      className="w-full pt-16 bg-white mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Header Section */}
      <motion.div
        className="px-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#2D3E50] text-3xl lg:text-4xl font-bold leading-[1.6] mb-4">
            토탈 클리닝 솔루션,{" "}
            <span className="text-accent">스팀 & 습식 케어</span>
          </h2>
          <p className="text-[#2D3E50] text-base lg:text-lg leading-[1.6] max-w-4xl mx-auto">
            글림케어의 프리미엄 서비스는 건식 케어를 포함한 스팀 및 습식 케어로,
            <br className="hidden md:block" />
            먼지·얼룩·오염까지 깨끗하게 제거합니다.
          </p>
        </div>
      </motion.div>

      {/* Cards Section */}
      <div className="space-y-20 pb-16">
        {/* Natural Detergent Card - Full Width Background */}
        <motion.div
          className="w-full bg-[#F5F5F5] py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 2xl:gap-40 items-center lg:items-start">
                {/* Content */}
                <div className="w-full lg:w-1/2 lg:flex-1 space-y-6 lg:mt-16">
                  <div className="space-y-5 xl:translate-x-12">
                    <h3 className="text-[#166DA3] text-2xl lg:text-3xl font-bold leading-[1.6]">
                      성분 걱정 없는 100% 천연 세제 사용
                    </h3>
                    <div className="space-y-4">
                      <h4 className="text-[#2D3E50] text-lg lg:text-xl font-semibold leading-[1.6]">
                        안전함과 세정력, 두 가지 모두를 만족시키는 클리닝 솔루션
                      </h4>
                      <p className="text-[#2D3E50] text-base leading-[1.6]">
                        인체에 무해한 천연 성분, 환경까지 생각한 안전한 클리닝.
                        하지만 세정력은 절대 양보하지 않습니다. 글림케어는 pH
                        균형을 고려한 친환경 세제로 보이지 않는 오염까지 말끔히
                        제거합니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 lg:flex-1">
                  <div className="relative w-full h-96 overflow-hidden rounded-lg">
                    <Image
                      src={naturalDetergentBg}
                      alt="천연 세제"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      style={{ borderRadius: "0.5rem" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steam Cleaner Card */}
        <motion.div
          className="px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 xl:gap-24 2xl:gap-40 items-center lg:items-start">
              {/* Content */}
              <div className="w-full lg:w-1/2 lg:flex-1 space-y-6 lg:mt-16">
                <div className="space-y-5">
                  <h3 className="text-[#166DA3] text-2xl lg:text-3xl font-bold leading-[1.6]">
                    초강력 고온 &apos;카처 SG 4/2&apos;
                  </h3>
                  <p className="text-[#2D3E50] text-base leading-[1.6]">
                    글림케어는 업계 최고의 스팀청소기로 완성도 높은 서비스를
                    제공합니다
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#166DA3] rounded-full flex items-center justify-center text-white font-normal text-sm">
                        01
                      </div>
                      <p className="text-[#2D3E50] text-base leading-[1.6] flex-1">
                        Vapo Hydro 기능으로 100℃ 고온 스팀을 분사
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#166DA3] rounded-full flex items-center justify-center text-white font-normal text-sm">
                        02
                      </div>
                      <p className="text-[#2D3E50] text-base leading-[1.6] flex-1">
                        화학 세제 없이 99.99%의 강력한 살균 및 소독 효과
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#166DA3] rounded-full flex items-center justify-center text-white font-normal text-sm">
                        03
                      </div>
                      <p className="text-[#2D3E50] text-base leading-[1.6] flex-1">
                        찌든 때와 오래된 얼룩을 효과적으로 제거
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 lg:flex-1">
                <div className="relative w-full h-96 overflow-hidden rounded-lg">
                  <Image
                    src={steamCleanerBg}
                    alt="스팀 청소기"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Wet Cleaner Card */}
        <motion.div
          className="px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 2xl:gap-40 items-center lg:items-start">
              {/* Content */}
              <div className="w-full lg:w-1/2 lg:flex-1 space-y-6 lg:mt-16">
                <div className="space-y-5 xl:translate-x-12">
                  <h3 className="text-[#166DA3] text-2xl lg:text-3xl font-bold leading-[1.6]">
                    습식 클리닝의 기준 &apos;카처퍼지 1/10&apos;
                  </h3>
                  <p className="text-[#2D3E50] text-base leading-[1.6]">
                    글림케어는 업계 최고의 습식청소기로 먼지와 오물을 확실히
                    제거합니다
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#166DA3] rounded-full flex items-center justify-center text-white font-normal text-sm">
                        01
                      </div>
                      <p className="text-[#2D3E50] text-base leading-[1.6] flex-1">
                        적은 물로 세척하고, 신속한 건조로 시간 절약
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#166DA3] rounded-full flex items-center justify-center text-white font-normal text-sm">
                        02
                      </div>
                      <p className="text-[#2D3E50] text-base leading-[1.6] flex-1">
                        가구 표면에 완전히 밀착해 잔여물 없이 깔끔하게 세척
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#166DA3] rounded-full flex items-center justify-center text-white font-normal text-sm">
                        03
                      </div>
                      <p className="text-[#2D3E50] text-base leading-[1.6] flex-1">
                        전문 스팀 클리닝과 함께 시너지 UP
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 lg:flex-1">
                <div className="relative w-full h-96 overflow-hidden rounded-lg">
                  <Image
                    src={wetCleanerBg}
                    alt="습식 청소기"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PremiumCareSection;
