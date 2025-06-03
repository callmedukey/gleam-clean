import dompurify from "isomorphic-dompurify";
import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

// Import background images
import { cn } from "@/lib/utils";
import feature1Bg from "@/public/images/entry-cleaning/feature-1-bg.png";
import feature2Bg from "@/public/images/entry-cleaning/feature-2-bg.png";
import feature3Bg from "@/public/images/entry-cleaning/feature-3-bg.png";

interface FeatureItem {
  number: string;
  text: string;
}

interface FeatureCard {
  title: string;
  description: string;
  items: FeatureItem[];
  backgroundImage: any;
  objectCover?: boolean;
}

const featuresData: FeatureCard[] = [
  {
    title: "흠잡을 수 없는 맞춤형 꼼꼼함",
    description:
      "입주청소는 단순히 닦는 것이 아닙니다. 저희는 고객님의 집 구조, 자재 (예: 대리석, 강화마루, 유리 등), 오염도에 맞춰 <span class='text-accent font-bold'>맞춤형 청소 플랜</span>을 수립하고, 창틀 하나, 문틈 하나까지 <span class='text-accent font-bold'>흠잡을 데 없이 꼼꼼하게</span> 마무리합니다. 특히 고객의 주요 관심 구역(욕실, 주방, 창문 등)은 이중 체크로 더 확실하게 관리합니다",
    backgroundImage: feature1Bg,
    items: [
      {
        number: "01",
        text: "집 구조, 자재, 오염도에 따라 최적화된 청소 방식을 적용",
      },
      {
        number: "02",
        text: "틈새까지 꼼꼼하게 청소하는 흠잡을 곳 없는 완성도",
      },
      { number: "03", text: "중점 구역은 이중 점검으로 더욱 철저히 관리" },
    ],
  },
  {
    title: "처음부터 끝까지 책임지는 소통 서비스",
    description:
      "청소는 '얼마나 잘하느냐'뿐만 아니라 '얼마나 잘 들어주느냐'도 중요합니다. 저희는 청소 전 사전 상담을 통해 고객님의 요청사항, 민감 구역, 우선순의 등을 충분히 듣고 반영합니다. 작업 중간에도 실시간 피드백을 주고받을 수 있도록 직접 소통하며, 청소 후 불편 사항이 있을 경우 사후 처리(AS)까지 책임지고 도와드립니다.",
    backgroundImage: feature2Bg,
    items: [
      { number: "01", text: "입주 전날 부터 사후까지 보장된 안심서비스" },
      {
        number: "02",
        text: "고객의 요구와 민감 지역에 대한 작업을 최우선으로 제공",
      },
      { number: "03", text: "실시간 소통을 통해 고객의 의견을 신속히 반영" },
    ],
  },
  {
    title: "천연 피톤치드 방역 소독 서비스",
    description:
      "청소만으로 부족할 수 있는 냄새 제거 및 유해균 차단까지 고려했습니다. 모든 입주청소 고객에게 천연 피톤치드 성분을 활용한 방역 소독을 추가 비용 없이 무료로 제공해드립니다.",
    backgroundImage: feature3Bg,
    objectCover: true,
    items: [
      { number: "01", text: "천연 피톤치드 방역 서비스 무료 제공" },
      {
        number: "02",
        text: "눈에 보이지 않는 바이러스, 곰팡이균, 집먼지 진드기까지 관리",
      },
      { number: "03", text: "숲속처럼 맑고 상쾌한 공간 선사" },
    ],
  },
];

const EntryFeaturesSection = () => {
  return (
    <motion.section
      className="py-16 px-4 sm:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Page break line */}
        <motion.div
          className="w-full h-px bg-secondary mb-27"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="space-y-16 lg:space-y-26">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-26"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Background Image */}
              <motion.div
                className="relative w-full lg:w-[502px] h-[360px] rounded-lg overflow-hidden flex-shrink-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                  className={cn(
                    "object-fit",
                    feature.objectCover &&
                      "object-cover lg:object-[-150%_100%] lg:scale-140"
                  )}
                  sizes="(max-width: 1024px) 100vw, 502px"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                className="w-full lg:max-w-[474px] space-y-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {/* Title */}
                <motion.h3
                  className="text-2xl font-bold text-secondary leading-text break-keep h-12 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
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
                    className="text-base text-text-primary leading-text break-keep"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.5,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    dangerouslySetInnerHTML={{
                      __html: dompurify.sanitize(feature.description),
                    }}
                  />

                  {/* Items List */}
                  <div className="space-y-4 max-w-[395px]">
                    {feature.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
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

export default EntryFeaturesSection;
