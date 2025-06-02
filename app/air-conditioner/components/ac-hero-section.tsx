import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

import acHeroBg from "@/public/images/ac-hero-bg.png";

const ACHeroSection = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center px-4 py-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Image */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={acHeroBg}
          alt="에어컨 청소 서비스"
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
          <span className="text-accent">에어컨 청소</span>, 아직 미루고
          계신가요?
        </motion.h1>

        <motion.p
          className="text-base font-normal leading-[1.6] text-text-primary max-w-3xl break-keep"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          여름에 에어컨은 매일 사용되지만, 내부에는 먼지, 세균, 기름때, 곰팡이
          등 유해한 오염물질이 쌓입니다. <br className="hidden md:block" />
          이는 실내 공기 질을 저하시켜 건강에 해롭고, 냉방 효율도 떨어뜨립니다.
          하지만 직접 분해해서 청소하려니 미루게 되죠.{" "}
          <br className="hidden md:block" />
          글림케어가 대신합니다. 에어컨 분해부터 세척, 조립까지 전문적으로
          청소하여 쾌적한 생활 공간을 만들어 드립니다.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ACHeroSection;
