import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

// Import the SVG icons
import asServiceIcon from "@/public/icons/as-service-icon.svg";
import consultationIcon from "@/public/icons/consultation-icon.svg";
import inspectionIcon from "@/public/icons/inspection-icon.svg";
import maintenanceGuideIcon from "@/public/icons/maintenance-guide-icon.svg";

const ACFeaturesList = () => {
  const features = [
    {
      icon: consultationIcon,
      title: "1:1 맞춤 상담",
      description: "고객 요청에 최적화된 상담 서비스",
    },
    {
      icon: inspectionIcon,
      title: "분해 전후 상태 점검",
      description: "분해 전후 상태 확인으로 이상 유무 점검",
    },
    {
      icon: maintenanceGuideIcon,
      title: "유지관리 가이드 제공",
      description: "쾌적함을 오래 유지하는 에어컨 관리법 안내",
    },
    {
      icon: asServiceIcon,
      title: "A/S 서비스 보장",
      description: "청소 후 문제 발생 시 책임 있는 사후처리 보장",
    },
  ];

  return (
    <motion.section
      className="w-full max-w-7xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col gap-8 mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-secondary font-bold text-3xl leading-[1.6] text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          체계적인 신속 정확한 서비스 과정
        </motion.h2>
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-text-primary font-semibold text-lg leading-[1.6] text-left">
            전문가의 신속한 분해, 철저한 점검 및 사후처리(AS)까지 완벽 보장
          </p>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-4 p-4 pb-10 w-full max-w-[16.875rem] h-[12.5rem] bg-white rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6 + index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            {/* Icon Container */}
            <motion.div
              className="w-20 h-20 bg-white rounded-lg flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.7 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                className="w-[4.688rem] h-20 object-contain"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="flex flex-col gap-2 w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-secondary font-semibold text-lg leading-[1.6] text-center">
                {feature.title}
              </h3>
              <p className="text-text-primary font-normal text-sm leading-[1.6] text-center">
                {feature.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ACFeaturesList;
