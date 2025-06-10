"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import React, { useState } from "react";

// Import the downloaded images
import InquiryDialog from "@/app/components/inquiry-dialog";
import arrowIcon from "@/public/images/entry-cleaning/arrow-icon.svg";
import heroImage from "@/public/images/entry-cleaning/hero-image.png";

const EntryHeroSection = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <section className="w-full max-w-7xl mx-auto pl-4 py-6 lg:py-12 min-h-[min(80vh,120rem)] flex items-center justify-center lg:justify-between overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative gap-10 w-full">
        {/* Left Column - Text Content */}
        <motion.div
          className="flex flex-col items-center lg:items-start space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-4xl font-bold text-text-primary leading-text break-keep text-center lg:text-left lg:whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            새로운 집, 새 출발을 위한{" "}
            <span className="text-accent">입주 청소</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg text-text-primary leading-text break-keep text-center lg:text-left max-w-[37rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            누구나 깔끔하고 쾌적한 환경에서 시작하고 싶죠? 글림케어 입주 청소는
            고객님께 새 집처럼 깨끗하고 상쾌한 공간을 제공합니다.
          </motion.p>

          {/* Divider Line */}
          <motion.div
            className="w-full max-w-md h-px bg-accent lg:mt-16"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />

          {/* CTA Button */}
          <motion.button
            className="flex items-center gap-6 bg-accent text-white font-bold text-lg sm:text-xl leading-text px-btn-x py-btn-y rounded-btn transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsInquiryOpen(true)}
          >
            <span>문의하기</span>
            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
              <Image
                src={arrowIcon}
                alt="화살표 아이콘"
                width={14}
                height={12}
                className="text-accent"
              />
            </div>
          </motion.button>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          className="lg:flex justify-center lg:justify-end self-start hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Hero Image */}
          <div className="w-full lg:max-w-lg xl:max-w-2xl relative aspect-[736/850] mt-20 -z-20">
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src={heroImage}
                alt="입주 청소 서비스 이미지"
                className="w-full object-cover"
                priority
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Inquiry Dialog */}
      <InquiryDialog open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </section>
  );
};

export default EntryHeroSection;
