import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import onlineBookingIcon from "@/public/icons/online-booking.svg";
import cleaningServiceIcon from "@/public/icons/cleaning-service.svg";
import customerCareIcon from "@/public/icons/customer-care.svg";

const KeyFeaturesSection = () => {
  const features = [
    {
      icon: onlineBookingIcon,
      title: "나에게 맞는 서비스 예약",
      description:
        "원하는 서비스, 온라인 또는 전화로\n일정 조율 후 간편하게 예약",
      buttonText: "예약하기",
    },
    {
      icon: cleaningServiceIcon,
      title: "전문가 방문 케어서비스",
      description:
        "예약한 일정에 맞춰 전문가가 방문,\n맞춤형 케어 서비스를 꼼꼼하게 제공",
      buttonText: "후기보기",
    },
    {
      icon: customerCareIcon,
      title: "1:1 맞춤 상담",
      description: "맞춤형 상담으로 편안한 일정 조율,\n오직 필요한 케어만",
      buttonText: "상담 받기",
    },
  ];

  return (
    <motion.section
      className="w-full py-20 px-4 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-secondary font-bold text-3xl sm:text-4xl leading-[1.6] text-center mb-14 break-keep"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          내 공간이 깨끗하게 되살아나는 서비스 과정
        </motion.h2>

        {/* Features Grid */}
        <div className="flex flex-wrap items-center justify-center lg:grid lg:grid-cols-3 gap-6 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-4 whitespace-nowrap"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {/* Icon Container */}
              <motion.div
                className="size-24 rounded-full flex items-center justify-center mb-9 relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-fill"
                  unoptimized
                />
              </motion.div>

              {/* Content Container */}
              <div className="flex flex-col items-center gap-8 max-w-sm">
                {/* Title */}
                <motion.h3
                  className="text-secondary font-bold text-xl sm:text-2xl leading-[1.6]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description and Button Container */}
                <div className="flex flex-col items-center gap-8">
                  <motion.p
                    className="text-slate-700 font-normal text-base leading-[1.6] whitespace-pre-line break-keep"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>

                  <motion.button
                    className="bg-accent text-white font-normal text-base px-6 py-1 rounded-full hover:bg-secondary transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {feature.buttonText}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default KeyFeaturesSection;
