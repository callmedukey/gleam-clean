import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import airConditionerBg from "@/public/images/air-conditioner-bg.png";
import airConditionerIcon from "@/public/images/air-conditioner-icon.svg";
import arrowRight from "@/public/images/arrow-right.svg";
import basicCareBg from "@/public/images/basic-care-bg.png";
import bathroomIcon from "@/public/images/bathroom-icon.svg";
import carpetIcon from "@/public/images/carpet-icon.svg";
import chairIcon from "@/public/images/chair-icon.svg";
import cleanIcon from "@/public/images/clean-icon.svg";
import couchIcon from "@/public/images/couch-icon.svg";
import kitchenIcon from "@/public/images/kitchen-icon.svg";
import mattressIcon from "@/public/images/mattress-icon.svg";
import moveInBg from "@/public/images/move-in-bg.png";
import powerWashingIcon from "@/public/images/power-washing-icon.svg";
import premiumCareBg from "@/public/images/premium-care-bg.png";
import sweepingIcon from "@/public/images/sweeping-icon.svg";
import windowIcon from "@/public/images/window-icon.svg";

interface ServiceCardProps {
  title: string;
  period: string;
  buttonText: string;
  buttonColor: "blue" | "green";
  backgroundImage: any;
  buttonLink: string;
  icons: Array<{
    icon: any;
    label: string;
  }>;
  features: Array<{
    number: string;
    description: string;
  }>;
  index: number;
}

function ServiceCard({
  title,
  period,
  buttonText,
  buttonColor,
  backgroundImage,
  icons,
  features,
  buttonLink,
  index,
}: ServiceCardProps) {
  const buttonStyles = {
    blue: "text-accent [&>div]:bg-accent",
    green: "text-brand-premium-green [&>div]:bg-brand-premium-green",
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 xl:gap-12 2xl:gap-20 w-full"
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
        className="w-full lg:w-1/2 xl:w-[45%] 2xl:w-[40.625rem] flex-shrink-0"
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
          src={backgroundImage}
          alt={title}
          className="w-full h-[16rem] sm:h-[20rem] lg:h-[22rem] xl:h-[24rem] 2xl:h-[25.5rem] rounded-lg object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex flex-col gap-4 lg:gap-5 w-full lg:w-1/2 xl:w-[55%] 2xl:w-[29.625rem] lg:flex-shrink-0"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2 + 0.3,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="flex flex-col gap-2">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2 + 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <span className="text-[#166DA3] text-[0.75rem] sm:text-[0.833rem] rounded-full bg-brand-card-blue py-1.5 px-4 font-bold">
              권장 주기
            </span>
            <span className="text-[#2D3E50] text-sm sm:text-base font-normal">
              {period}
            </span>
          </motion.div>
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2 + 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={buttonLink}
                className={cn(
                  "py-2 lg:py-1 rounded-[3.125rem] flex items-center gap-3 sm:gap-6 h-[2.5rem] sm:h-[3rem] lg:h-[3.313rem] w-full sm:w-auto",
                  buttonStyles[buttonColor]
                )}
              >
                <span className="text-lg sm:text-xl lg:text-[1.44rem] font-bold">
                  {buttonText}
                </span>
                <div className="bg- p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <Image
                    src={arrowRight}
                    alt="arrow"
                    className="sm:w-[14px] sm:h-[12px]"
                  />
                </div>
              </Link>
            </motion.button>
          </motion.div>
        </div>

        {/* Icons and Features */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Service Icons */}
          <motion.div
            className="grid grid-cols-2 sm:flex sm:flex-wrap lg:flex-nowrap gap-4 sm:gap-6 lg:gap-6 xl:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2 + 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {icons.map((item, iconIndex) => (
              <motion.div
                key={iconIndex}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + 0.7 + iconIndex * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] lg:w-[3.125rem] lg:h-[3.125rem] flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px]"
                  />
                </div>
                <span className="text-[#2D3E50] text-sm sm:text-base font-normal text-center">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Features List */}
          <motion.div
            className="flex flex-col gap-3 sm:gap-4 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2 + 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="flex items-start gap-3 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.9 + featureIndex * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="bg-secondary text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <span className="text-[0.7rem] sm:text-[0.75rem] lg:text-[0.833rem] font-normal">
                    {feature.number}
                  </span>
                </div>
                <span className="text-[#2D3E50] text-sm sm:text-base font-normal flex-1 leading-relaxed">
                  {feature.description}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const ApplyServiceSummary = () => {
  const services = [
    {
      title: "베이직 케어",
      period: "3 개월",
      buttonText: "베이직 케어 신청",
      buttonLink:
        "https://smartstore.naver.com/365homecare/products/10495796237",
      buttonColor: "blue" as const,
      backgroundImage: basicCareBg,
      icons: [
        { icon: mattressIcon, label: "매트리스" },
        { icon: couchIcon, label: "소파" },
        { icon: chairIcon, label: "의자" },
        { icon: carpetIcon, label: "카페트" },
      ],
      features: [
        {
          number: "01",
          description: "업계 최강 진공청소기, '컬비 어벨리어2' 사용",
        },
        {
          number: "02",
          description: "전문가 손길로 꼼꼼히 진행되는 건식 클리닝",
        },
        {
          number: "03",
          description: "3단계 살균소독 통해 세균, 생활악취 등 해결",
        },
      ],
    },
    {
      title: "프리미엄 케어",
      period: "6 개월",
      buttonText: "프리미엄 케어 신청",
      buttonLink:
        "https://smartstore.naver.com/365homecare/products/10495796237",
      buttonColor: "green" as const,
      backgroundImage: premiumCareBg,
      icons: [
        { icon: mattressIcon, label: "매트리스" },
        { icon: couchIcon, label: "소파" },
        { icon: chairIcon, label: "의자" },
        { icon: carpetIcon, label: "카페트" },
      ],
      features: [
        {
          number: "01",
          description: "초강력 고온 스팀청소기, '카처 SG 4/2' 사용",
        },
        {
          number: "02",
          description: "베이직 케어 전 과정이 포함된, 건습식 클리닝",
        },
        {
          number: "03",
          description: "가구 오염, 얼룩 등 확실히 제거해주는 풀 코스",
        },
      ],
    },
    {
      title: "에어컨 청소",
      period: "12 개월",
      buttonText: "에어컨 청소 신청",
      buttonColor: "blue" as const,
      buttonLink:
        "https://smartstore.naver.com/365homecare/products/10495505565",
      backgroundImage: airConditionerBg,
      icons: [
        { icon: airConditionerIcon, label: "분해 청소" },
        { icon: powerWashingIcon, label: "고압 세척" },
        { icon: cleanIcon, label: "전부품 청소" },
      ],
      features: [
        {
          number: "01",
          description: "에어컨 완전 분해 후 모든 부품 세척",
        },
        {
          number: "02",
          description: "인체에 무핸한 친환경 천연세제 사용",
        },
        {
          number: "03",
          description: "고압세척으로 냉각핀, 열교환기까지 관리",
        },
      ],
    },
    {
      title: "입주 청소",
      period: "입주 전",
      buttonText: "입주 청소 신청",
      buttonColor: "blue" as const,
      buttonLink:
        "https://smartstore.naver.com/365homecare/products/10495796237",
      backgroundImage: moveInBg,
      icons: [
        { icon: sweepingIcon, label: "바닥 청소" },
        { icon: kitchenIcon, label: "부엌 청소" },
        { icon: bathroomIcon, label: "화장실 청소" },
        { icon: windowIcon, label: "그 외" },
      ],
      features: [
        {
          number: "01",
          description: "입주 전 필요한 필수 클리닝 코스",
        },
        {
          number: "02",
          description: "고객 요구 우선, 입주 전후 안심 서비스 보장",
        },
        {
          number: "03",
          description: "천연 피톤치드 방역 서비스 무료 제공",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[4.5rem] w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </div>
  );
};

export default ApplyServiceSummary;
