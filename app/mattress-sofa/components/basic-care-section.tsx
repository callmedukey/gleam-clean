"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

import featurePoint1 from "@/public/images/mattress-sofa/feature-point-1.png";
import featurePoint2 from "@/public/images/mattress-sofa/feature-point-2.png";
import featurePoint3 from "@/public/images/mattress-sofa/feature-point-3.png";
import kirbyVacuumImage from "@/public/images/mattress-sofa/kirby-vacuum-cleaner.png";

const BasicCareSection = () => {
  return (
    <motion.section
      className="pb-16 sm:pb-20 bg-white "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="px-4">
        {/* Hero Title Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-2xl sm:text-[33.18px] font-bold text-text-primary mb-2 leading-[1.6]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            섬세한 공간엔, <span className="text-accent">전문 건식 케어</span>가
            답입니다
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-text-primary max-w-3xl mx-auto leading-[1.6]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            건식 청소만으로도 눈에 보이지 않는 미세먼지부터, 집먼지진드기, 가구
            틈새 깊숙한 먼지, 동물의 털,
            <br className="hidden sm:block" />
            각종 알레르기 유발 물질, 그리고 각질과 비듬까지 효과적으로 제거할 수
            있습니다.
          </motion.p>
        </div>

        {/* Vacuum Cleaner Showcase Section */}
        <motion.div
          className="bg-[#F5F5F5] rounded-2xl px-8 py-8 lg:px-[135px] mb-16 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="grid lg:grid-cols-2 gap-8 lg:gap-[37px] items-center max-w-7xl mx-auto"
            style={{ minHeight: "592px" }}
          >
            {/* Image Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="relative w-full h-[400px] lg:h-[600px]">
                  <Image
                    src={kirbyVacuumImage}
                    alt="컬비 어벨리어2 진공청소기"
                    fill
                    className="object-cover object-bottom"
                    sizes="(max-width: 1024px) 100vw, 570px"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Features Section */}
            <motion.div
              className="space-y-5 lg:w-[518px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-[33.18px] font-bold text-text-primary mb-5 leading-[1.6]">
                흡입력 끝판왕{" "}
                <span className="text-accent">&apos;컬비 어벨리어2&apos;</span>
              </h3>
              <p className="text-sm sm:text-base text-text-primary mb-8 leading-[1.6]">
                글림케어는 업계 최고의 진공청소기로 건식 케어 서비스를
                제공합니다
              </p>

              <div className="space-y-4">
                {[
                  {
                    num: "01",
                    text: "육안으로 보이지 않는 미세먼지, 집먼지진드를 깨끗히 제거",
                  },
                  {
                    num: "02",
                    text: "먼지 재배출 NO, EN1822 11등급의 헤파필터",
                  },
                  {
                    num: "03",
                    text: "가구를 손상시키지 않으면서 먼지를 세심하게 제거",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 px-2 py-1 bg-secondary rounded-full flex items-center justify-center min-w-[40px]">
                      <span className="text-[13.33px] text-white font-normal">
                        {item.num}
                      </span>
                    </div>
                    <p className="text-base sm:text-[19.2px] font-semibold text-text-primary pt-1 leading-[1.6]">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Cards Section */}
        <div className="max-w-[1170px] mx-auto">
          {/* Feature Card 1 */}
          <motion.div
            className="grid lg:grid-cols-2 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative h-[280px] lg:h-[445px] overflow-hidden rounded-md rounded-br-none">
                <Image
                  src={featurePoint1}
                  alt="초고속 회전 기술"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              className="space-y-5 p-6 lg:p-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-1 bg-secondary rounded-[50px]">
                <span className="text-base sm:text-[19.2px] font-semibold text-white">
                  POINT 1
                </span>
              </div>
              <h4 className="text-xl sm:text-[27.65px] font-bold text-text-primary leading-[1.6]">
                초고속 회전 기술로 섬유
                <br />
                깊숙한 유해물질까지 강력 제거
              </h4>
              <p className="text-sm sm:text-base text-text-primary leading-[1.6]">
                분당 4,000회 고속 회전하는 건식 전문 장비를 활용해,
                <br />
                섬유 속 미세먼지와 진드기를 99.7%까지 효과적으로 퇴치합니다.
              </p>
            </motion.div>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            className="grid lg:grid-cols-2 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative lg:order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative h-[280px] lg:h-[445px] overflow-hidden rounded-md rounded-l-none">
                <Image
                  src={featurePoint2}
                  alt="고성능 전용 브러시 케어"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              className="space-y-5 p-6 lg:p-10 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-1 bg-secondary rounded-[50px]">
                <span className="text-base sm:text-[19.2px] font-semibold text-white">
                  POINT 2
                </span>
              </div>
              <h4 className="text-xl sm:text-[27.65px] font-bold text-text-primary leading-[1.6]">
                눈에 보이지 않는 오염까지 케어하는
                <br />
                고성능 전용 브러시 케어
              </h4>
              <p className="text-sm sm:text-base text-text-primary leading-[1.6]">
                두꺼운 섬유 속 30cm 깊이까지 침투한 진드기 등 유해 물질을
                <br />
                99% 제거하는 전문 브러시를 사용해, 꼼꼼하고 철저하게 클리닝을
                <br />
                진행합니다.
              </p>
            </motion.div>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            className="grid lg:grid-cols-2 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative h-[280px] lg:h-[445px] overflow-hidden rounded-lg rounded-tr-none">
                <Image
                  src={featurePoint3}
                  alt="전문가용 8겹 필터"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              className="space-y-5 p-6 lg:p-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-1 bg-secondary rounded-[50px]">
                <span className="text-base sm:text-[19.2px] font-semibold text-white">
                  POINT 3
                </span>
              </div>
              <h4 className="text-xl sm:text-[27.65px] font-bold text-text-primary leading-[1.6]">
                전문가용 8겹 필터, 실내 공기 미세먼지 및 알레르기 완벽 차단
              </h4>
              <p className="text-sm sm:text-base text-text-primary leading-[1.6]">
                총 8겹 필터가 적용된 전문 장비로, 뛰어난 집진력과 공기정화
                기능을 통해 실내 초미세먼지,
                <br />
                집먼지진드기, 꽃가루, 박테리아 등을 99.99% 제거합니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BasicCareSection;
