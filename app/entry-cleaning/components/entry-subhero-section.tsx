import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

import entryCleaningHeroImage from "@/public/images/entry-cleaning-hero-image.png";

const EntrySubHeroSection = () => {
  return (
    <motion.section
      className="w-full py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[6.5rem]">
          {/* Image Section */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full lg:w-[31.375rem] h-[22.5rem] rounded-lg overflow-hidden">
              <Image
                src={entryCleaningHeroImage}
                alt="입주청소 서비스 이미지"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 502px"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-center gap-5">
            {/* Main Title */}
            <motion.h2
              className="text-2xl font-bold leading-[1.6] text-secondary max-w-[23.5rem]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              입주청소, 새 집처럼 완벽하게
            </motion.h2>

            {/* Content Wrapper */}
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-[1.063rem]">
                {/* Subtitle */}
                <motion.h3
                  className="text-lg font-semibold leading-[1.6] text-text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  새 집을 위한 맞춤형 청소, 전문 장비로 구석구석 깨끗하게
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-base font-normal leading-[1.6] text-text-primary max-w-[32rem]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  새로운 집에서의 첫날, 글림케어 입주청소로 완벽하게 준비하세요.
                  집 안 구석구석, 모든 먼지와 오염을 철저하게 전문 장비로
                  제거하여 새 집처럼 깔끔한 환경을 만들어, 새로운 시작을 더욱
                  특별하게 만들어드립니다.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EntrySubHeroSection;
