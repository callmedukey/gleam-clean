"use client";

import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import * as motion from "motion/react-client";
import React from "react";

const EducationContactSection = () => {
  return (
    <motion.section
      className="w-full max-w-[73.125rem] mx-auto px-4 py-12 sm:py-16 lg:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[1.875rem]">
        {/* Contact Information Section */}
        <motion.div
          className="flex-1 space-y-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-text-primary leading-[1.6] break-keep">
              연락처 안내
            </h2>
            <p className="text-base text-text-primary leading-[1.6] break-keep">
              교육에 관한 문의는 아래 연락처로 편하게 연락주시기 바랍니다
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-10">
            {/* Email Contact */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary leading-[1.6]">
                  이메일 상담
                </h3>
              </div>
              <p className="text-base text-text-primary leading-[1.6]">
                ubilis99@naver.com
              </p>
            </motion.div>

            {/* Phone Contact */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Phone
                    className="w-6 h-6 text-text-primary"
                    fill="currentColor"
                  />
                </div>
                <h3 className="text-lg font-semibold text-text-primary leading-[1.6]">
                  전화 상담
                </h3>
              </div>
              <div className="text-base text-text-primary leading-[1.6] space-y-1">
                <p>0507-1366-9797</p>
                <p>010-9722-9797</p>
              </div>
            </motion.div>

            {/* Visit Contact */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <MapPin
                    className="w-6 h-6 text-text-primary"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-lg font-semibold text-text-primary leading-[1.6]">
                  방문 상담
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base text-text-primary leading-[1.6]">
                  경기 수원시 권선구 금곡로 219 글림케어
                </p>
                <button
                  className="w-4 h-4 flex items-center justify-center hover:opacity-70 transition-opacity"
                  aria-label="지도에서 위치 보기"
                >
                  <ExternalLink
                    className="w-4 h-4 text-text-primary"
                    strokeWidth={1}
                  />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="w-full lg:w-[36rem] xl:w-[40.5rem]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="w-full h-[32rem] bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-lg font-semibold text-black">지도맵</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EducationContactSection;
