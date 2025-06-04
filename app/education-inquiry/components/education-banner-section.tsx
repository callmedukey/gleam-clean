import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

import educationBannerImage from "@/public/images/education-banner-image.png";

const EducationBannerSection = () => {
  return (
    <motion.section
      className="bg-accent py-16 my-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[64.5rem] mx-auto">
        <div className="flex flex-col items-center gap-4">
          <motion.h2
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center leading-[1.6] break-keep"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            한 번의 서비스로 평생 고객을 만드는 비밀
          </motion.h2>

          <motion.div
            className=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={educationBannerImage}
              alt="교육 배너 이미지"
              className="w-full max-w-[25.25rem] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationBannerSection;
