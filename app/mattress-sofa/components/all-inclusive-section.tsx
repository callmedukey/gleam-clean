import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

import step5ParticleImage from "@/public/images/cleaning-steps/step5-particle-disinfection.png";
import step5PhytoncideImage from "@/public/images/cleaning-steps/step5-phytoncide-disinfection.png";
import step5UvImage from "@/public/images/cleaning-steps/step5-uv-disinfection.png";

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
    tags: ["초강력 향균", "심리적 안정감은 PLUS"],
    bgColor: "bg-green-100",
    image: step5PhytoncideImage,
  },
];

const AllInclusiveSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-12 md:pb-16">
      <motion.div
        className="space-y-14"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Step 5 Header */}
        <div className="space-y-4 mt-12">
          <h3 className="font-bold text-3xl lg:text-4xl leading-[1.6] text-text-primary">
            <span className="text-accent">보이지 않는 유해물질까지,</span> 전
            서비스 기본 제공
          </h3>
          <div className="space-y-4">
            <p className="text-text-primary font-semibold text-lg lg:text-xl leading-[1.6]">
              세균부터 곰팡이, 진드기까지 글림케어의 3단 소독·살균 케어로 완전
              박멸
            </p>
            <p className="text-text-primary text-base leading-[1.6] max-w-7xl">
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
    </section>
  );
};

export default AllInclusiveSection;
