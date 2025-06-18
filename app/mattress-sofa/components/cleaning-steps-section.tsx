import DOMPurify from "isomorphic-dompurify";
import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

// Import images
import { cn } from "@/lib/utils";
import step1Image from "@/public/images/cleaning-steps/step1-dry-cleaning.png";
import step2Image from "@/public/images/cleaning-steps/step2-natural-detergent.png";
import step3Image from "@/public/images/cleaning-steps/step3-steam-cleaning-correct.png";
import step4Image from "@/public/images/cleaning-steps/step4-wet-cleaning.png";
import step5ParticleImage from "@/public/images/cleaning-steps/step5-particle-disinfection.png";
import step5PhytoncideImage from "@/public/images/cleaning-steps/step5-phytoncide-disinfection.png";
import step5UvImage from "@/public/images/cleaning-steps/step5-uv-disinfection.png";

const CleaningStepsSection = () => {
  const steps = [
    {
      stepNumber: "STEP 1",
      title: "건식 베이직 케어",
      subtitle:
        "흡입력 끝판왕 <span class='text-accent'>'컬비 어벨리어2'</span>",
      description:
        "글림케어는 업계 최고의 진공청소기로 건식 케어 서비스를 제공합니다",
      features: [
        "육안으로 보이지 않는 미세먼지, 집먼지진드를 깨끗이 제거",
        "먼지 재배출 NO, EN1822 11등급의 헤파필터",
        "가구를 손상시키지 않으면서 먼지를 세심하게 제거",
      ],
      bgColor: "bg-blue-50",
      badgeColor: "bg-brand-card-blue",
      badgeTextColor: "text-secondary",
      imagePosition: "left",
      image: step1Image,
    },
    {
      stepNumber: "STEP 2",
      title: "성분 걱정 없는 100% 친환경 세제 사용",
      subtitle: "안전함과 세정력, 두 가지 모두를 만족시키는 클리닝 솔루션",
      description:
        "인체에 무해한 친환경 성분, 환경까지 생각한 안전한 클리닝. 하지만 세정력은 절대 양보하지 않습니다. 글림케어는 pH 균형을 고려한 친환경 세제로 보이지 않는 오염까지 말끔히 제거합니다.",
      features: [],
      bgColor: "bg-orange-50",
      badgeColor: "",
      badgeTextColor: "",
      imagePosition: "right",
      image: step2Image,
      showBadge: false,
    },
    {
      stepNumber: "STEP 3",
      title: "스팀 프리미엄 케어",
      subtitle: "초강력 고온 <span class='text-accent'>'카처 SG 4/2'</span>",
      description:
        "글림케어는 업계 최고의 스팀청소기로 완성도 높은 서비스를 제공합니다",
      features: [
        "Vapo Hydro 기능으로 100℃ 고온 스팀을 분사",
        "화학 세제 없이 99.99%의 강력한 살균 및 소독 효과",
        "찌든 때와 오래된 얼룩을 효과적으로 제거",
      ],
      bgColor: "bg-green-50",
      badgeColor: "bg-brand-card-green",
      badgeTextColor: "text-brand-premium-green",
      imagePosition: "left",
      image: step3Image,
    },
    {
      stepNumber: "STEP 4",
      title: "습식 프리미엄 케어",
      subtitle:
        "습식 클리닝의 기준 <span class='text-accent'>'카처퍼지 1/10'</span>",
      description:
        "글림케어는 업계 최고의 습식청소기로 먼지와 오물을 확실히 제거합니다",
      features: [
        "적은 물로 세척하고, 신속한 건조로 시간 절약",
        "가구 표면에 완전히 밀착해 잔여물 없이 깔끔하게 세척",
        "전문 스팀 클리닝과 함께 시너지 UP",
      ],
      bgColor: "bg-blue-50",
      badgeColor: "bg-green-50",
      badgeTextColor: "text-green-600",
      imagePosition: "right",
      image: step4Image,
    },
  ];

  const disinfectionSteps = [
    {
      stepNumber: "1 단계",
      title: "UV 살균 램프",
      description:
        "병원과 산업 현장에서 사용하는 UV-C 253.7nm 자외선 기술을 그대로! 일상 공간에 투과시켜 바이러스·곰팡이 99.9% 강력 살균합니다.",
      tags: ["미생물 파괴 및 증식 방지", "질병 예방"],
      bgColor: "bg-purple-100",
      image: step5UvImage,
    },
    {
      stepNumber: "2 단계",
      title: "미립자 소독제",
      description:
        "미립자 방식으로 섬유 깊숙이 소독제를 침투시켜 세균, 바이러스, 곰팡이를 박멸하고, 생활 악취와 눈에 보이지 않는 오염까지 완벽하게 제거합니다.",
      tags: ["깊숙한 곳까지 깨끗하게", "악취 제거"],
      bgColor: "bg-blue-100",
      image: step5ParticleImage,
    },
    {
      stepNumber: "3 단계",
      title: "피톤치드 방역",
      description:
        "자연의 강력한 항균 물질인 피톤치드를 공기 중에 분사하여 세균, 곰팡이, 바이러스를 박멸하고, 악취를 제거해 실내 공기를 상쾌하게 유지합니다.",
      tags: ["초강력 항균", "심리적 안정감은 PLUS"],
      bgColor: "bg-green-100",
      image: step5PhytoncideImage,
    },
  ];

  return (
    <motion.section
      className="w-full pt-16 px-4 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto border-accent pb-16">
        {/* Header Section */}
        <motion.div
          className="mb-16 border-t border-accent pt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-secondary font-bold text-3xl lg:text-4xl leading-[1.6] mb-8">
            총 5단계로 이루어지는 완성도 높은 클리닝
          </h2>
          <p className="text-text-primary font-semibold text-lg lg:text-xl leading-[1.6] mb-2">
            보이지 않는 곳까지, 최고의 전문장비로 박테리아를 완벽하게 제거
          </p>
          <p className="text-text-primary text-base leading-[1.6] max-w-4xl">
            클리닝 순서는 [건식 케어 - 친환경 세제 도포 - 스팀 케어 - 습식 케어
            - 살균 소독]으로 총 5단계로 진행됩니다.
          </p>
        </motion.div>

        {/* Steps 1-4 */}
        <div className="space-y-20 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div
                className={`flex flex-col ${
                  step.imagePosition === "right"
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 xl:gap-24 2xl:gap-40 items-center lg:items-start`}
              >
                {/* Content */}
                <div className="flex-1 lg:w-1/2 space-y-6 lg:mt-16">
                  <div
                    className={cn(
                      "space-y-5",
                      (index === 1 || index === 3) && "xl:translate-x-12"
                    )}
                  >
                    {step.showBadge !== false && step.title && (
                      <div
                        className={`inline-flex items-center px-6 py-1 rounded-full ${step.badgeColor} ${step.badgeTextColor} font-semibold text-lg`}
                      >
                        {step.title}
                      </div>
                    )}
                    {step.showBadge === false ? (
                      <>
                        <h3 className="text-primary font-bold text-2xl lg:text-3xl leading-[1.6]">
                          {step.title}
                        </h3>
                        <p className="text-text-primary font-semibold text-lg lg:text-xl leading-[1.6]">
                          {step.subtitle}
                        </p>
                      </>
                    ) : (
                      <h3
                        className="text-primary font-bold text-2xl lg:text-3xl leading-[1.6]"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(step.subtitle),
                        }}
                      />
                    )}
                    <p
                      className="text-text-primary text-base leading-[1.6]"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(step.description),
                      }}
                    />

                    {step.features.length > 0 && (
                      <div className="space-y-4">
                        {step.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start gap-4"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-normal text-sm">
                              {String(featureIndex + 1).padStart(2, "0")}
                            </div>
                            <p className="text-text-primary text-base leading-[1.6] flex-1">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 lg:w-1/2 space-y-6">
                  <div
                    className={cn(
                      "w-fit flex items-center px-6 py-1 rounded-full font-semibold text-lg bg-secondary text-white",
                      (index === 1 || index === 3) && "ml-auto"
                    )}
                  >
                    {step.stepNumber}
                  </div>
                  <div className="w-full h-96 rounded-lg overflow-hidden">
                    <Image
                      src={step.image}
                      alt={`${step.title} - ${step.subtitle}`}
                      className="w-full h-full object-cover"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Step 5 - Disinfection Section */}
        <motion.div
          className="space-y-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Step 5 Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-6 py-1 rounded-full bg-secondary text-white font-semibold text-lg">
              STEP 5
            </div>
            <h3 className="text-secondary font-bold text-3xl lg:text-4xl leading-[1.6]">
              보이지 않는 유해물질까지, 3단계로 완벽하게
            </h3>
            <div className="space-y-4">
              <p className="text-text-primary font-semibold text-lg lg:text-xl leading-[1.6]">
                세균부터 곰팡이, 진드기까지 글림케어의 3단 소독·살균 케어로 완전
                박멸
              </p>
              <p className="text-text-primary text-base leading-[1.6] max-w-4xl">
                글림케어는 고급 살균 장비와 3단계 소독·살균 과정을 통해, 보이지
                않는 오염물질까지 완벽하게 제거하고, 건강을 위협하는 박테리아와
                진드기를 박멸합니다.
              </p>
            </div>
          </div>

          {/* Disinfection Steps */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-6 left-0 right-0 h-px bg-accent hidden lg:block"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {disinfectionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="space-y-4 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {/* Step badge positioned on timeline */}
                  <div className="relative lg:flex lg:justify-center">
                    <div className="flex items-center px-6 py-1 rounded-full bg-secondary font-semibold text-lg relative z-10 text-white w-fit mr-auto">
                      {step.stepNumber}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Image */}
                    <div className="w-full h-60 rounded-lg overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-4 p-4">
                      <h4 className="text-secondary font-bold text-xl lg:text-2xl leading-[1.6]">
                        {step.title}
                      </h4>
                      <p className="text-black text-base leading-[1.6]">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center px-6 py-1 rounded-full border border-primary text-primary text-base"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CleaningStepsSection;
