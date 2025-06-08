import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import arrowIcon from "@/public/images/arrow-icon.svg";
import asIcon from "@/public/images/as-icon.svg";
// Import commerce icons (we'll use them as a group for the equipment icon)
import commerceIcon2 from "@/public/images/commerce-icon-2.svg";
import customerCareIcon from "@/public/images/customer-care-icon.svg";
// Import low price icons
import lowPriceIcon5 from "@/public/images/low-price-icon-5.svg";

const ApplyServiceWhy = () => {
  const features = [
    {
      icon: customerCareIcon,
      title: "1:1 맞춤 상담",
      description:
        "맞춤형 상담으로 편안한 일정 조율, 오직 필요한 케어만 받으세요",
    },
    {
      icon: commerceIcon2, // Using one of the commerce icons as representative
      title: "최고의 전문 장비",
      description: "최첨단 장비와 전문 노하우로\n최고의 서비스를 제공합니다",
    },
    {
      icon: asIcon,
      title: "확실한 사후처리 (AS)",
      description: "사전 상담과 실시간 소통,\n사후 처리까지 전과정 책임",
    },
    {
      icon: lowPriceIcon5, // Using one of the low price icons as representative
      title: "합리적인 가격",
      description:
        "투명하고 합리적인 가격으로\n맞춤형 케어 서비스를 제공합니다",
    },
  ];

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto flex flex-col gap-[3.8125rem] lg:py-48 sm:py-24 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col items-center gap-4 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-4 w-full">
          <motion.h2
            className="text-4xl font-bold leading-[1.6] text-center text-secondary w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            왜 Gleam Care인가?
          </motion.h2>
        </div>
        <motion.p
          className="text-xl font-semibold leading-[1.6] text-center text-secondary w-full h-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          고객의 요구가 최우선 시 되는 전문 청소 업체
        </motion.p>
      </motion.div>

      {/* Features and Button Section */}
      <div className="flex flex-col items-center gap-12 w-full">
        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.875rem] w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-[1.875rem] p-10 px-6 w-full max-w-[16.875rem] mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              {/* Icon Container */}
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="flex flex-col items-center gap-6">
                  <motion.div
                    className="w-20 h-20 bg-white flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>

                {/* Text Content */}
                <motion.div
                  className="flex flex-col gap-3 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold leading-[1.6] text-center text-secondary w-full">
                    {feature.title}
                  </h3>
                  <p className="text-base font-normal leading-[1.6] text-center text-text-primary w-full whitespace-pre-line">
                    {feature.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-7 py-2 flex items-center gap-6 h-auto"
            asChild
          >
            <Link href="https://smartstore.naver.com/365homecare/products/10495796237">
              <span className="text-xl font-bold leading-[1.6]">신청하기</span>
              <motion.div
                className="bg-white rounded-full p-[0.5625rem] flex items-center justify-center"
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <Image
                  src={arrowIcon}
                  alt="화살표"
                  width={14}
                  height={12}
                  className="w-[0.875rem] h-3"
                />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ApplyServiceWhy;
