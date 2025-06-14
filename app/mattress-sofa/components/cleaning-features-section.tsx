"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

import consultationIcon from "@/public/icons/mattress-sofa/consultation.svg";
import handshakeIcon from "@/public/icons/mattress-sofa/handshake.svg";
import maintenanceGuideIcon from "@/public/icons/mattress-sofa/maintenance-guide.svg";
import serviceWarrantyIcon from "@/public/icons/mattress-sofa/service-warranty.svg";

const CleaningFeaturesSection = () => {
  const features = [
    {
      icon: consultationIcon,
      title: "1:1 맞춤 상담",
      description: "고객 요청에 최적화된 상담 서비스",
    },
    {
      icon: handshakeIcon,
      title: "합리적인 정찰제 가격",
      description: "숨겨진 비용 없이, 정직한 가격",
    },
    {
      icon: maintenanceGuideIcon,
      title: "유지관리 가이드 제공",
      description: "쾌적함을 오래 유지하는 가구 관리법 안내",
    },
    {
      icon: serviceWarrantyIcon,
      title: "A/S 서비스 보장",
      description: "청소 후 문제 발생 시 책임 있는 사후처리 보장",
    },
  ];

  return (
    <motion.section
      className="w-full py-20 px-4 bg-white border-b max-w-7xl mx-auto border-accent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-24">
          <motion.h2
            className="text-secondary font-bold text-3xl sm:text-4xl leading-[1.6] mb-4 break-keep"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            체계적인 신속 정확한 서비스 과정
          </motion.h2>
          <motion.p
            className="text-text-primary font-semibold text-lg sm:text-xl leading-[1.6] break-keep"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            전문가의 신속한 분해, 철저한 점검 및 사후처리(AS)까지 완벽 보장
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-4 py-10 lg:p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {/* Icon Container */}
              <motion.div
                className="size-20 rounded-full flex items-center justify-center mb-4 relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </motion.div>

              {/* Content Container */}
              <div className="flex flex-col items-center gap-2">
                {/* Title */}
                <motion.h3
                  className="text-secondary font-semibold text-lg sm:text-xl leading-[1.6]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-text-primary font-normal text-sm leading-[1.6] whitespace-nowrap break-keep"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CleaningFeaturesSection;
