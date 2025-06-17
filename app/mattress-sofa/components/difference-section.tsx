"use client";

import * as motion from "motion/react-client";

const DifferenceSection = () => {
  return (
    <motion.section
      className="w-full px-4 py-16 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* 헤더 섹션 */}
        <div className="mb-12 text-center md:mb-16">
          <motion.h2
            className="mb-4 text-3xl font-bold text-[#166DA3] md:text-[2.5rem] md:leading-[1.6]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            5단계 클리닝으로 완벽을 더한 가구 케어
          </motion.h2>
          <div className="mx-auto max-w-4xl">
            <motion.p
              className="mb-2 text-lg font-semibold text-[#2D3E50] md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              보이지 않는 곳까지, 최고의 전문장비로 박테리아를 완벽하게 제거
            </motion.p>
            <motion.p
              className="text-sm text-[#2D3E50] md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              클리닝 순서는 [건식 케어 - 친환경 세제 도포 - 스팀 케어 - 습식
              케어 - 살균 소독]으로 총 5단계로 진행됩니다.
            </motion.p>
          </div>
        </div>

        {/* 분리선 */}
        <motion.div
          className="mb-12 h-px w-full bg-[#1E93D3] md:mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* 서비스 비교 카드 */}
        <motion.div
          className="mx-auto flex max-w-5xl flex-col overflow-visible rounded-lg shadow-lg md:flex-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* BASIC 카드 */}
          <motion.div
            className="relative flex-1 overflow-visible rounded-l-lg bg-[#E4F6FF] pb-8 pt-12 md:pb-14 md:pt-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              viewport={{ once: true }}
            >
              <div className="rounded-full bg-[#1E93D3] px-8 py-1">
                <span className="text-lg font-bold text-white md:text-2xl">
                  BASIC
                </span>
              </div>
            </motion.div>
            <div className="px-8 text-center md:px-14">
              <motion.h3
                className="mb-4 text-2xl font-bold text-[#166DA3] md:text-[2.5rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                건식 케어
              </motion.h3>
              <ul className="space-y-2">
                <motion.li
                  className="text-base font-semibold text-black md:text-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  강력 진공 흡입
                </motion.li>
                <motion.li
                  className="text-base font-semibold text-black md:text-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  3단계 살균 소독
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* PREMIUM 카드 */}
          <motion.div
            className="relative flex-1 overflow-visible rounded-r-lg bg-[#EAFBF0] pb-8 pt-12 md:pb-14 md:pt-16"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              viewport={{ once: true }}
            >
              <div className="rounded-full bg-[#16A361] px-8 py-1">
                <span className="text-lg font-bold text-white md:text-2xl">
                  PREMIUM
                </span>
              </div>
            </motion.div>
            <div className="px-8 text-center md:px-14">
              <motion.h3
                className="mb-4 text-2xl font-bold text-[#16A361] md:text-[2.5rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                건·습식 케어
              </motion.h3>
              <ul className="space-y-2">
                {[
                  "강력 진공 흡입",
                  "천연 세제 도포",
                  "고온 스팀 케어",
                  "습식 딥클리닝",
                  "3단계 살균 소독",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="text-base font-semibold text-black md:text-xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.0 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DifferenceSection;
