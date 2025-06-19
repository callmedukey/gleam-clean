"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ServiceSelectionDialog from "@/app/components/service-selection-dialog";
import customerSatisfactionBg from "@/public/images/start-with-gleam/customer-satisfaction-bg.png";
import topSectionBg from "@/public/images/start-with-gleam/top-section-bg.webp";

const StartWithGleam = () => {
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Section - Gray Background */}
      <motion.section
        className="w-full bg-[#F5F5F5]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-[8.4375rem] py-12 lg:py-16 gap-8 lg:gap-[1.875rem] max-w-[90.125rem] mx-auto">
          {/* Text Content */}
          <motion.div
            className="flex flex-col gap-5 lg:gap-8 max-w-[35.625rem] w-full lg:w-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.07375rem] font-bold leading-[1.6] text-black">
                전국 어디서나 동일한 고품질 서비스 제공
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-[1.2rem] font-semibold leading-[1.6] text-black">
                어디서든 한결같이, 믿고 맡길 수 있는 클리닝 서비스
              </h3>
              <p className="text-sm sm:text-base leading-[1.6] text-black">
                입주 청소부터 대형 가구·에어컨 청소까지, 글림케어는 전국
                지점에서 전문 인력, 첨단 장비, 체계적인 CS 관리, A/S 보장까지
                <br />
                고객 만족 1위를 지향하는 프리미엄 클리닝 서비스를 제공합니다.
              </p>
            </div>
            <Link
              href="/offices"
              className="bg-accent text-white px-6 py-1 rounded-[3.125rem] text-base leading-[1.6] font-normal w-fit hover:bg-accent/90 transition-colors"
            >
              지점 보기
            </Link>
          </motion.div>

          {/* Image Container */}
          <motion.div
            className="relative w-full lg:w-[35.625rem] h-[15rem] sm:h-[18rem] lg:h-[22.5rem] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Background Image */}
            <Image
              src={topSectionBg}
              alt="글림케어 서비스 배경"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 570px"
            />
            {/* Overlay */}
            {/* Location Icon */}
          </motion.div>
        </div>
      </motion.section>

      {/* Bottom Section - Updated from Figma */}
      <motion.section
        className="w-full bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-[8.4375rem] py-12 lg:py-16 gap-8 lg:gap-[1.875rem] max-w-[90.125rem] mx-auto">
          {/* Image Container */}
          <motion.div
            className="relative w-full lg:w-[35.625rem] h-[15rem] sm:h-[18rem] lg:h-[22.5rem] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={customerSatisfactionBg}
              alt="고객 만족 서비스"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 570px"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex flex-col gap-5 lg:gap-8 max-w-[35.625rem] w-full lg:w-auto lg:mr-auto lg:ml-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.07375rem] font-bold leading-[1.6] text-[#166DA3]">
                고객의 고민으로 시작해,
                <br />
                만족으로 끝나는 체계적인 서비스
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-[1.2rem] font-semibold leading-[1.6] text-black">
                어디서든 한결같이, 믿고 맡길 수 있는 클리닝 서비스
              </h3>
              <p className="text-sm sm:text-base leading-[1.6] text-black">
                처음부터 끝까지 고객님의 만족을 최우선으로 생각하며,
                <br />
                기대 이상의 서비스를 제공하기 위해 최선을 다합니다.
              </p>
            </div>
            <button
              onClick={() => setIsServiceDialogOpen(true)}
              className="bg-accent text-white px-6 py-1 rounded-[3.125rem] text-base leading-[1.6] font-normal w-fit hover:bg-accent/90 transition-colors"
            >
              서비스 보기
            </button>
          </motion.div>
        </div>
      </motion.section>

      <ServiceSelectionDialog
        open={isServiceDialogOpen}
        onOpenChange={setIsServiceDialogOpen}
      />
    </div>
  );
};

export default StartWithGleam;
