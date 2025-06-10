import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

import mattressHeroBg from "@/public/images/mattress-hero-bg.png";

const MatressHeroSection = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-[38.875rem] px-4 py-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Image */}
      <motion.div
        className="relative mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={mattressHeroBg}
          alt="매트리스 케어 서비스"
          className="rounded-lg"
          priority
        />
      </motion.div>

      {/* Text Content */}
      <div className="flex flex-col items-center gap-6 max-w-4xl text-center">
        <motion.h1
          className="text-4xl font-bold leading-[1.6] text-text-primary break-keep"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          하루 중 가장 오래 머무는 곳,{" "}
          <span className="text-accent">매트리스</span> 와{" "}
          <span className="text-accent">소파</span>
        </motion.h1>

        <motion.p
          className="text-base font-normal leading-[1.6] text-text-primary max-w-3xl break-keep"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          매일 사용하는 공간이지만 눈에 보이지 않는 먼지, 진드기, 땀, 각질
          등으로 오염되기 쉽습니다. <br className="hidden md:block" />
          글림케어는 전문 장비와 친환경 세제를 활용해 매트리스와 소파 깊숙한
          곳까지 말끔히 케어하며, <br className="hidden md:block" />
          3단계 살균소독으로 더욱 깨끗하고 건강한 생활 공간을 만들어 드립니다.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default MatressHeroSection;
