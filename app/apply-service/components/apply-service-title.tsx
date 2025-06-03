import * as motion from "motion/react-client";
import React from "react";

const ApplyServiceTitle = () => {
  return (
    <motion.section
      className="flex flex-col items-center gap-4 px-4 py-8 sm:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto">
        {/* Main Title */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-secondary text-center break-keep leading-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          글림케어 서비스 신청
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base text-text-primary text-center break-keep leading-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          나에게 필요한 맞춤형 전문 청소 서비스
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ApplyServiceTitle;
