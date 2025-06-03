import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import arrowIcon from "@/public/images/arrow-icon.svg";
import entryCleaningBg from "@/public/images/entry-cleaning/banner-background.png";

const EntryBannerSection = () => {
  return (
    <section className="relative w-full h-[31.4375rem] 2xl:h-[40rem] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background Image */}
        <Image
          src={entryCleaningBg}
          alt="입주청소 배경"
          fill
          className="object-fit"
          priority
        />
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col gap-6">
          {/* Main Heading */}
          <motion.h2
            className="text-text-primary font-bold text-2xl sm:text-3xl lg:text-4xl leading-text break-keep"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            기분 좋은 시작을 위한{" "}
            <span className="text-accent">맞춤형 입주청소</span>
          </motion.h2>

          {/* Content Section */}
          <div className="flex flex-col gap-1 px-0 sm:px-4 lg:px-[9.75rem]">
            {/* Subheading */}
            <motion.h3
              className="text-accent font-black text-3xl sm:text-4xl lg:text-5xl leading-text break-keep"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              차별화된{" "}
              <span className="text-text-primary text-2xl sm:text-3xl font-bold">
                를 전문 서비스를
              </span>
            </motion.h3>

            {/* Bottom Row with Text and Button */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-12">
              {/* Price Text */}
              <motion.h4
                className="text-accent font-black text-3xl sm:text-4xl lg:text-5xl leading-text break-keep w-fit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                합리적인{" "}
                <span className="text-text-primary text-2xl sm:text-3xl font-bold">
                  가격에
                </span>
              </motion.h4>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Button
                  className="bg-accent hover:bg-secondary text-white font-bold text-lg sm:text-xl leading-text rounded-full px-btn-x py-btn-y gap-6 h-auto transition-colors"
                  size="lg"
                >
                  <span>견적 받기</span>
                  <div className="bg-white rounded-full p-2">
                    <Image
                      src={arrowIcon}
                      alt="화살표"
                      width={14}
                      height={12}
                      className="text-accent"
                    />
                  </div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EntryBannerSection;
