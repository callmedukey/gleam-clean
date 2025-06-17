"use client";

import * as motion from "motion/react-client";
import { CounterNumber } from "./counter-number";

export function UnderFeatureBannerContent() {
  return (
    <>
      {/* Header Section */}
      <motion.div
        className="flex flex-col gap-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-[#166DA3] font-bold text-[2.07rem] leading-[1.6] text-center">
          고객이 기대하는 것 이상의 완벽한 서비스
        </h2>
        <p className="text-[#2D3E50] font-semibold text-[1.2rem] leading-[1.6] text-center">
          단순한 청소를 넘어, 수많은 청소 경험을 바탕으로 쌓아온 노하우와 철저한
          관리로, 기대 이상의 결과를 약속드립니다.
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[7.5rem]">
        {/* 고객 만족도 Card */}
        <motion.div
          className="flex flex-col gap-1 w-full md:w-[23rem]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center py-1.5 px-6">
            <CounterNumber value={98} suffix="%" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2.5 py-1.5 px-6">
            <h3 className="text-[#1E93D3] font-bold text-[1.73rem] leading-[1.6] text-center">
              고객 만족도
            </h3>
            <p className="text-[#2D3E50] font-normal text-base leading-[1.6] text-center">
              처음 이용한 고객도 감탄하는 서비스
            </p>
          </div>
        </motion.div>

        {/* 누적 청소 건수 Card */}
        <motion.div
          className="flex flex-col gap-1 w-full md:w-[23rem]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center py-1.5 px-6">
            <CounterNumber value={25000} suffix="+" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2.5 py-1.5 px-6">
            <h3 className="text-[#1E93D3] font-bold text-[1.73rem] leading-[1.6] text-center">
              누적 청소 건수
            </h3>
            <p className="text-[#2D3E50] font-normal text-base leading-[1.6] text-center">
              수천 가정이 선택한 클리닝 서비스
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
