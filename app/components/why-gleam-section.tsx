import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

import arrowIcon from "@/public/images/arrow-icon.svg";
import whyGleamBg from "@/public/images/why-gleam-bg-correct.png";

const WhyGleamSection = () => {
  const features = [
    {
      number: "01",
      title: "1:1 고객 맞춤형 솔루션",
    },
    {
      number: "02",
      title: "기대를 뛰어넘는 전문 홈케어 서비스",
    },
    {
      number: "03",
      title: "부담 없는 합리적인 가격",
    },
  ];

  return (
    <motion.section
      className="relative w-full lg:h-[33.5625rem] bg-white overflow-hidden mb-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Accent Background Strip */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-64 sm:h-1/2 bg-accent" />

      {/* 2 Column Layout Container */}
      <div className="relative z-10 w-full h-full max-w-[90rem] mx-auto grid lg:grid-cols-2 items-center">
        {/* Left Column - Content */}
        <motion.div
          className="px-4 sm:px-10 flex flex-col gap-[3.25rem] items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h2
            className="text-secondary font-bold text-3xl sm:text-4xl leading-[1.2] lg:text-left lg:-translate-y-4 whitespace-nowrap text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            왜 GLEAM CARE인가?
          </motion.h2>

          {/* Features List */}
          <motion.ul
            className="flex flex-col gap-4 list-none mx-auto w-fit sm:px-4 py-8 lg:py-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.li
                key={feature.number}
                className="flex items-center gap-2 sm:gap-4 mx-auto text-left justify-start w-full whitespace-nowrap"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {/* Number Badge */}
                <div className="flex justify-center items-center gap-2 px-2 py-1 border-2 border-gray-100 rounded-[3.125rem] bg-transparent">
                  <span className="text-gray-100 font-normal text-base leading-[1.6] text-center">
                    {feature.number}
                  </span>
                </div>

                {/* Feature Title */}
                <h3 className="text-white font-bold text-lg lg:text-xl leading-[1.6] text-left">
                  {feature.title}
                </h3>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.button
            className="flex justify-center items-center gap-6 px-7 py-2 bg-accent rounded-[3.125rem] hover:bg-accent/90 transition-colors lg:translate-y-14 xl:translate-x-[calc(50%+2.5rem)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-bold text-[1.44rem] leading-[1.6] text-center">
              지금 신청하기
            </span>
            <div className="flex justify-center items-center p-[0.5625rem] bg-white rounded-full">
              <Image
                src={arrowIcon}
                alt="Arrow"
                width={14}
                height={12}
                className="w-[0.875rem] h-3"
              />
            </div>
          </motion.button>
        </motion.div>

        {/* Right Column - Background Image */}
        <motion.div
          className="relative mx-auto w-full h-full lg:block hidden"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={whyGleamBg}
            alt="Why Gleam Care Background"
            fill
            className="object-cover rounded-lg shadow-[2px_2px_6px_0px_rgba(0,0,0,0.1),10px_6px_12px_0px_rgba(0,0,0,0.09)]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyGleamSection;
