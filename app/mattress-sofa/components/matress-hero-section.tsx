import Image from "next/image";
import React from "react";

import mattressHeroBg from "@/public/images/mattress-hero-bg.png";

const MatressHeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[38.875rem] px-4 py-16 bg-white">
      {/* Background Image */}
      <div className="relative mb-16">
        <Image
          src={mattressHeroBg}
          alt="매트리스 케어 서비스"
          width={830}
          height={328}
          className="rounded-lg"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center gap-6 max-w-4xl text-center">
        <h1 className="text-[2.488rem] font-bold leading-[1.6] text-[#2D3E50]">
          하루 중 가장 오래 머무는 곳,{" "}
          <span className="text-accent">매트리스</span> 와{" "}
          <span className="text-accent">소파</span>
        </h1>

        <p className="text-base font-normal leading-[1.6] text-[#2D3E50] max-w-3xl">
          매일 사용하는 공간이지만 눈에 보이지 않는 먼지, 진드기, 땀, 각질
          등으로 오염되기 쉽습니다. <br />
          글림케어는 전문 장비와 친환경 세제를 활용해 매트리스와 소파 깊숙한
          곳까지 말끔히 케어하며, <br />
          3단계 살균소독으로 더욱 깨끗하고 건강한 생활 공간을 만들어 드립니다.
        </p>
      </div>
    </section>
  );
};

export default MatressHeroSection;
