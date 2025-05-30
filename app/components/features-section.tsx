import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";

// Import background images
import feature1Bg from "@/public/images/features/feature-1-bg.png";
import feature2Bg from "@/public/images/features/feature-2-bg.png";
import feature3Bg from "@/public/images/features/feature-3-bg.png";
import feature4Bg from "@/public/images/features/feature-4-bg.png";

interface FeatureItem {
  number: string;
  text: string;
}

interface FeatureCard {
  title: string;
  description: string;
  items: FeatureItem[];
  backgroundImage: any;
}

const featuresData: FeatureCard[] = [
  {
    title: "최고의 전문 장비와 노하우",
    description: "최첨단 장비와 전문 노하우로 최고의 서비스를 제공합니다",
    backgroundImage: feature1Bg,
    items: [
      { number: "01", text: "업계 최강 진공청소기, '컬비 어벨리어2'" },
      { number: "02", text: "강력한 흡입력의 습식 청소기, '카처 퍼지 1/10'" },
      { number: "03", text: "초강력 고온 스팀청소기, '카처 SG 4/2'" },
      {
        number: "04",
        text: "그 외 UV 살균기, 미립자 소독 분사기, 피톤치드 연무기 등",
      },
    ],
  },
  {
    title: "친환경 천연세제 ONLY",
    description: "오직 인체에 무해한 천연세제로 건강한 환경과 청결을 지킵니다",
    backgroundImage: feature2Bg,
    items: [
      { number: "01", text: "현장에서 직접 배합 후 도포" },
      { number: "02", text: "엄격한 기준을 통과한 안전한 성분만 사용" },
      {
        number: "03",
        text: "지속 가능한 클리닝 솔루션으로 효율적이고 안전한 청소",
      },
    ],
  },
  {
    title: "필요에 딱 맞춘 맞춤형 클리닝 서비스",
    description:
      "단순한 공간 관리 그 이상, 건강과 행복을 위한 필수 요소 제공합니다",
    backgroundImage: feature3Bg,
    items: [
      { number: "01", text: "1:1 맞춤 상담을 통해 고객 맞춤형 솔루션을 제공" },
      {
        number: "02",
        text: "경험이 풍부한 전문가들이 철저한 사후 관리법 제공",
      },
      { number: "03", text: "서비스 강요 없이, 고객의 요청을 최우선으로 반영" },
    ],
  },
  {
    title: "경쟁력 있는 합리적 선택",
    description:
      "고객의 요구를 최우선으로, 항상 기대에 부응하기 위해 최선을 다합니다",
    backgroundImage: feature4Bg,
    items: [
      { number: "01", text: "최고의 맞춤형 서비스를 합리적인 비용에 받기" },
      {
        number: "02",
        text: "명확한 기준에 따라 추가 비용 없이 투명한 가격으로 제공",
      },
      {
        number: "03",
        text: "주기적으로 받기 부담 없는 가격, 지속 가능한 청결 유지",
      },
    ],
  },
];

const FeaturesSection = () => {
  return (
    <motion.section
      className="py-16 px-4 sm:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16 lg:space-y-26">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Background Image */}
              <motion.div
                className="relative w-full lg:w-[570px] h-[360px] rounded-lg overflow-hidden flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={feature.backgroundImage}
                  alt={feature.title}
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 570px"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                className="w-full lg:max-w-md lg:mx-auto space-y-5"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {/* Title */}
                <motion.h3
                  className="text-2xl font-bold text-secondary leading-text break-keep"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.4,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description and Items */}
                <div className="space-y-8">
                  {/* Description */}
                  <motion.p
                    className="text-base text-text-secondary leading-text break-keep"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.5,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Items List */}
                  <div className="space-y-4">
                    {feature.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + 0.6 + itemIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      >
                        {/* Number Badge */}
                        <div className="bg-secondary text-white rounded-full px-2 py-1 min-w-[2rem] h-8 flex items-center justify-center">
                          <span className="text-xs font-normal leading-text">
                            {item.number}
                          </span>
                        </div>

                        {/* Item Text */}
                        <p className="text-base text-text-primary leading-text break-keep flex-1">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
