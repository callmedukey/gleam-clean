import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import beforeImage from "@/public/images/before-image.png";
import afterImage from "@/public/images/after-image.png";
import userAvatar1 from "@/public/images/user-avatar-1.png";
import userAvatar2 from "@/public/images/user-avatar-2.png";

const BeforeAfterSection = () => {
  return (
    <motion.section
      className="w-full flex justify-center py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl w-full">
        {/* Before Section - Left on desktop, Second on mobile */}
        <motion.div
          className="flex flex-col items-center lg:items-end gap-3 flex-1 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Before Image */}
          <div className="relative w-full max-w-[35.375rem] h-[50rem] rounded-lg overflow-hidden order-2 lg:order-1">
            <Image
              src={beforeImage}
              alt="청소 전 상태"
              fill
              className="object-fill"
              sizes="(max-width: 768px) 100vw, 566px"
            />
          </div>

          {/* Review for Before */}
          <div className="flex flex-col sm:flex-row items-center gap-8 w-full justify-start mt-6 order-1 lg:order-2">
            <div className="flex flex-col items-center gap-8 min-w-[11.4375rem] order-1 sm:order-1">
              <div className="w-[6.25rem] h-[6.25rem] rounded-full overflow-hidden">
                <Image
                  src={userAvatar1}
                  alt="사용자 프로필"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-primary font-semibold text-2xl leading-[1.6]">
                  db******
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-tl-none rounded-tr-[1.4375rem] rounded-bl-[1.4375rem] rounded-br-[1.4375rem] p-8 shadow-lg flex-1 min-h-[12rem] flex items-center sm:-translate-x-8 mt-8 order-2 sm:order-2 lg:translate-y-6">
              <p className="text-[#2D3E50] font-semibold text-xl leading-[1.6] text-center break-keep">
                와..너무 꼼꼼히 친절하게 잘해주세요 ㅠㅠ 새거랑 다름없이 너무
                행복합니다!!
              </p>
            </div>
          </div>
        </motion.div>

        {/* After Section - Right on desktop, First on mobile */}
        <motion.div
          className="flex flex-col items-center gap-16 flex-1 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Review for After */}
          <div className="flex flex-col sm:flex-row items-center gap-8 w-full order-1">
            <div className="bg-gray-100 rounded-tl-[1.4375rem] rounded-tr-none rounded-bl-[1.4375rem] rounded-br-[1.4375rem] p-8 shadow-lg flex-1 flex items-center mt-12 order-2 sm:order-1 lg:translate-y-6">
              <p className="text-text-primary font-semibold text-xl leading-[1.6] text-center break-keep">
                솔직히 이정도까지 깨끗해질거라고는 기대 안했는데 그냥 새쇼파가
                되어버렸습니다...!
              </p>
            </div>
            <div className="flex flex-col items-center gap-8 min-w-[11.4375rem] order-1 sm:order-2">
              <div className="w-[6.25rem] h-[6.25rem] rounded-full overflow-hidden">
                <Image
                  src={userAvatar2}
                  alt="사용자 프로필"
                  className="w-full h-full object-hidden"
                />
              </div>
              <div className="text-center">
                <p className="text-primary font-semibold text-2xl leading-[1.6]">
                  김****
                </p>
              </div>
            </div>
          </div>

          {/* After Image */}
          <div className="relative w-full max-w-[35.375rem] h-[50rem] rounded-lg overflow-hidden lg:-translate-x-6 order-2 lg:mt-6">
            <Image
              src={afterImage}
              alt="청소 후 상태"
              fill
              className="object-fill"
              sizes="(max-width: 768px) 100vw, 566px"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BeforeAfterSection;
