import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

// Import images
import completeDisassemblyImg from "@/public/images/ac-features/complete-disassembly.png";
import ecoFriendlyCleaningImg from "@/public/images/ac-features/eco-friendly-cleaning.png";
import highPressureWashingImg from "@/public/images/ac-features/high-pressure-washing.png";

interface FeaturePoint {
  number: string;
  text: string;
}

interface FeatureCard {
  title: string;
  subtitle: string;
  description: string;
  image: any;
  points: FeaturePoint[];
  imagePosition: "left" | "right";
}

const ACFeaturesSection = () => {
  const features: FeatureCard[] = [
    {
      title: "정밀 클리닝을 위한 완전 분해",
      subtitle: "에어컨은 겉면만 청소한다고 해결되지 않습니다",
      description:
        "에어컨은 흡착된 먼지와 오염물질을 제거해야 하기 때문에, 완전히 분해하여 냉각핀과 내부 부품까지 철저히 청소해야 더욱 쾌적하게 사용하실 수 있습니다.",
      image: completeDisassemblyImg,
      imagePosition: "right",
      points: [
        { number: "01", text: "에어컨 완전 분해로 세밀 청소 가능" },
        { number: "02", text: "모든 부품 케어로 냄새와 세균 제거" },
        {
          number: "03",
          text: "냉각핀, 열교환기까지 고압세척으로 냉방 효과 극대화",
        },
      ],
    },
    {
      title: "친환경 세제로 깨끗하게, 건강까지 지키기",
      subtitle: "안전하고 강력한 세정력으로 완벽한 에어컨 청소",
      description:
        "에어컨의 바람은 우리의 호흡기로 들어오기 때문에, 인체에 해로운 세제는 절대 사용하지 않습니다. 글림케어는 오직 인체에 무해한 천연 성분의 세제를 고수하며, 환경까지 고려한 안전한 클리닝을 제공합니다.",
      image: ecoFriendlyCleaningImg,
      imagePosition: "left",
      points: [
        { number: "01", text: "친환경 천연세제로 만들어가는 건강한 공기" },
        { number: "02", text: "인체에 무해한 강력한 세정력" },
        { number: "03", text: "온 가족을 위한 안전한 선택" },
      ],
    },
    {
      title: "고압세척으로 깊은 미세공간까지 해결",
      subtitle: "열교환기와 냉각핀, 에어컨 주기적 청소의 핵심",
      description:
        "곰팡이, 세균, 박테리아가 번식하기 좋은 깊숙한 곳 까지 글림케어는 완전 분해 후 종합 세척 (세제 도포와 고압 세척)으로 철저한 에어컨 청소 서비스를 제공합니다.",
      image: highPressureWashingImg,
      imagePosition: "right",
      points: [
        { number: "01", text: "고압 세척으로 이물질 철저히 제거" },
        { number: "02", text: "미세공간부터 숨겨진 오염까지 완벽하게 해결" },
        {
          number: "03",
          text: "고압 세척만으로 냉방 효율 극대화와 건강한 실내 공기 제공",
        },
      ],
    },
  ];

  return (
    <motion.section
      className="w-full py-12 max-w-7xl mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Page break line */}
      <motion.div
        className="w-full h-px bg-accent mb-28"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Service Guide Section */}
      <div className="">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-stretch gap-8 lg:gap-24 xl:gap-48 ${
                feature.imagePosition === "left" ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="space-y-5">
                  {/* Title */}
                  <motion.h2
                    className="text-secondary font-bold text-2xl lg:text-[33px] leading-[1.6] break-keep"
                    initial={{
                      opacity: 0,
                      x: feature.imagePosition === "left" ? 30 : -30,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.3,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {feature.title}
                  </motion.h2>

                  {/* Content Container */}
                  <div className="space-y-8">
                    {/* Description Section */}
                    <motion.div
                      className="space-y-4"
                      initial={{
                        opacity: 0,
                        x: feature.imagePosition === "left" ? 30 : -30,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + 0.4,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-text-primary font-semibold text-lg lg:text-[19px] leading-[1.6] break-keep">
                        {feature.subtitle}
                      </h3>
                      <p className="text-text-primary text-base leading-[1.6] break-keep">
                        {feature.description}
                      </p>
                    </motion.div>

                    {/* Feature Points */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + 0.5,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      {feature.points.map((point, pointIndex) => (
                        <motion.div
                          key={pointIndex}
                          className="flex items-center gap-4"
                          initial={{
                            opacity: 0,
                            x: feature.imagePosition === "left" ? 20 : -20,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2 + 0.6 + pointIndex * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        >
                          {/* Number Badge */}
                          <motion.div
                            className="flex-shrink-0 bg-secondary text-white rounded-full px-2 py-1 min-w-[2rem] h-8 flex items-center justify-center"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2 + 0.7 + pointIndex * 0.1,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                          >
                            <span className="text-[13px] font-normal leading-[1.6]">
                              {point.number}
                            </span>
                          </motion.div>
                          {/* Point Text */}
                          <p className="text-text-primary text-base leading-[1.6] break-keep">
                            {point.text}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <motion.div
                className="flex-shrink-0 w-full lg:w-[502px]"
                initial={{
                  opacity: 0,
                  x: feature.imagePosition === "left" ? -60 : 60,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2 + 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="relative w-full h-[280px] lg:h-[360px] rounded-lg overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 502px"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ACFeaturesSection;
