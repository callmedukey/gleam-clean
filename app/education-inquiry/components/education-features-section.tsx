import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import arrowRightWhite from "@/public/images/education-features/arrow-right-white.svg";
import educationHeroBg1 from "@/public/images/education-features/education-hero-bg-1.png";
import educationHeroBg2 from "@/public/images/education-features/education-hero-bg-2.png";
import houseCleanIcon from "@/public/images/education-features/house-clean-icon.svg";
import profitsIcon from "@/public/images/education-features/profits-icon.svg";
import starIcon from "@/public/images/education-features/star-icon.svg";
import systemIcon from "@/public/images/education-features/system-icon.svg";

const EducationFeaturesSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 mt-16">
      {/* Hero Section */}
      <motion.div
        className="mb-24 lg:mb-[9.75rem]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Title Section */}
        <div className="text-center mb-16 lg:mb-[7.5rem]">
          <motion.h2
            className="text-3xl lg:text-[2.488rem] font-bold text-secondary leading-[1.6] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            글림케어 교육, 실무 중심으로 완벽하게
          </motion.h2>
          <motion.p
            className="text-base text-text-primary leading-[1.6]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            깨끗함의 차이를 만드는 진정한 전문가가 되는 과정
          </motion.p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[2.8125rem]">
          {/* Top Row - Image | Text */}
          {/* Top Left - Image */}
          <motion.div
            className="relative w-full h-[20rem] lg:h-[27.8125rem] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={educationHeroBg1}
              alt="현장 경험으로 완성한 체계적 청소 교육"
              fill
              className="object-cover "
              style={{ borderRadius: "0.5rem 0.5rem 0 0.5rem" }}
            />
          </motion.div>

          {/* Top Right - Text */}
          <motion.div
            className="flex flex-col justify-center space-y-8 lg:space-y-[2.625rem]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-5">
              <h3 className="text-2xl lg:text-[2.074rem] font-bold text-primary leading-[1.6]">
                현장 경험으로 완성한 체계적 청소 교육
              </h3>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-lg lg:text-[1.2rem] font-semibold text-text-primary leading-[1.6]">
                    가구부터 에어컨까지, 글림케어가 청소의 핵심만을 집중
                    교육합니다
                  </h4>
                  <p className="text-base text-text-primary leading-[1.6]">
                    청소는 장비만으로 완성되지 않습니다. 가구의 특성과 세제 성분
                    등을 이해하고, 이를 효과적으로 활용할 때 비로소 전문 장비의
                    진정한 힘을 발휘합니다. 완벽한 청소 결과를 위한 깊은 이해와
                    노하우, 그 비결을 전수합니다.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="https://www.youtube.com/@%EA%B8%80%EB%A6%BC%EC%BC%80%EC%96%B4"
              target="_blank"
              className="inline-flex items-center gap-4 bg-accent text-white px-7 py-2 rounded-full w-fit"
            >
              <span className="text-lg lg:text-[1.2rem] font-semibold">
                전문 청소 과정 보기
              </span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image src={arrowRightWhite} alt="" width={14} height={12} />
              </div>
            </Link>
          </motion.div>

          {/* Bottom Row - Text | Image */}
          {/* Bottom Left - Text */}
          <motion.div
            className="flex flex-col justify-center space-y-8 lg:space-y-[2.625rem] order-2 lg:order-none"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-5">
              <h3 className="text-2xl lg:text-[2.074rem] font-bold text-primary leading-[1.6]">
                고객 만족을 이끄는 노련한 노하우
              </h3>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-lg lg:text-[1.2rem] font-semibold text-text-primary leading-[1.6]">
                    홈케어의 진짜 가치를 만드는 교육
                  </h4>
                  <p className="text-base text-text-primary leading-[1.6]">
                    홈케어 서비스는 단순히 공간을 깨끗하게 만드는 것을
                    넘어섭니다. 진정한 성공은 고객 만족을 통한 재신청 유도와
                    지속 가능한 청소 사업 운영에 있습니다. 글림케어는 바로 이
                    핵심 철학을 바탕으로 체계적인 교육을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
            {/* <button className="inline-flex items-center gap-4 bg-white text-accent py-2 rounded-full w-fit">
              <span className="text-lg lg:text-[1.2rem] font-semibold">
                고객 후기 보기
              </span>
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Image src={arrowRightBlue} alt="" width={14} height={12} />
              </div>
            </button> */}
          </motion.div>

          {/* Bottom Right - Image */}
          <motion.div
            className="relative w-full h-[20rem] lg:h-[27.8125rem] rounded-lg overflow-hidden order-1 lg:order-none"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={educationHeroBg2}
              alt="고객 만족을 이끄는 노련한 노하우"
              fill
              className="object-cover"
              style={{ borderRadius: "0 0.5rem 0.5rem 0.5rem" }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Key Points Section */}
      <motion.div
        className="space-y-16 lg:space-y-[3.8125rem]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Key Points Title */}
        <div className="text-center space-y-4">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-secondary leading-[1.6]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            글림케어 교육 KEY POINT
          </motion.h2>
          <motion.p
            className="text-base text-text-primary leading-[1.6]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            청소를 넘어 고객 만족과 재신청으로 이어지는 지속 가능한 홈케어
            비즈니스
          </motion.p>
        </div>

        {/* Key Points Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-[1.875rem] **:break-keep">
          {/* Point 1 */}
          <motion.div
            className="flex flex-col items-center text-center space-y-8 lg:space-y-[1.875rem] p-2 lg:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <Image
                src={starIcon}
                alt="고객 중심 서비스 철학"
                width={80}
                height={80}
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg lg:text-xl font-bold text-secondary leading-[1.6] sm:whitespace-nowrap">
                고객 중심 서비스 철학
              </h3>
              <p className="text-base text-text-primary leading-[1.6]">
                단순 청소를 넘어선
                <br />
                고객 만족과 신뢰 구축
              </p>
            </div>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            className="flex flex-col items-center text-center space-y-8 lg:space-y-[1.875rem] p-2 lg:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Image
                src={profitsIcon}
                alt="안정적 수익 창출 사업"
                width={80}
                height={80}
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg lg:text-xl font-bold text-secondary leading-[1.6] sm:whitespace-nowrap">
                안정적 수익 창출 사업
              </h3>
              <p className="text-base text-text-primary leading-[1.6]">
                일회성이 아닌 지속적 관계로
                <br />
                만드는 홈케어 비즈니스 모델
              </p>
            </div>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            className="flex flex-col items-center text-center space-y-8 lg:space-y-[1.875rem] p-2 lg:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Image
                src={houseCleanIcon}
                alt="전문적 홈케어 기술"
                width={80}
                height={80}
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg lg:text-xl font-bold text-secondary leading-[1.6] sm:whitespace-nowrap">
                전문적 홈케어 기술
              </h3>
              <p className="text-base text-text-primary leading-[1.6] sm:whitespace-nowrap">
                가구 및 에어컨 유형별 맞춤 <br /> 청소법 등 관리 노하우 완벽
                습득
              </p>
            </div>
          </motion.div>

          {/* Point 4 */}
          <motion.div
            className="flex flex-col items-center text-center space-y-8 lg:space-y-[1.875rem] p-2 lg:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Image
                src={systemIcon}
                alt="글림케어만의 체계"
                width={80}
                height={80}
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg lg:text-xl font-bold text-secondary leading-[1.6] sm:whitespace-nowrap">
                글림케어만의 체계
              </h3>
              <p className="text-base text-text-primary leading-[1.6]">
                검증된 교육 프로그램으로
                <br />
                성공하는 홈케어 전문가 양성
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationFeaturesSection;
