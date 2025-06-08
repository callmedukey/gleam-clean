import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Import the actual SVG icons from Figma
import ArrowIcon from "@/public/icons/common-arrow-right.svg";
import DrainIcon from "@/public/icons/services/drain.svg";
import DrawersIcon from "@/public/icons/services/drawers.svg";
import FloorIcon from "@/public/icons/services/floor.svg";
import KitchenIcon from "@/public/icons/services/kitchen.svg";
import LampIcon from "@/public/icons/services/lamp.svg";
import SocketIcon from "@/public/icons/services/socket.svg";
import ToiletIcon from "@/public/icons/services/toilet.svg";
import WindowIcon from "@/public/icons/services/window.svg";

// Service data based on Figma design
const services = [
  {
    id: "01",
    title: "바닥 청소",
    description: "먼지•잔여물•오염물 제거",
    icon: FloorIcon,
  },
  {
    id: "02",
    title: "싱크대 전체청소",
    description: "후드•가스렌지 기름때 제거",
    icon: KitchenIcon,
  },
  {
    id: "03",
    title: "화장실 전체청소",
    description: "세면대, 변기, 샤워실, 천장, 벽",
    icon: ToiletIcon,
  },
  {
    id: "04",
    title: "붙박이장 전체청소",
    description: "붙박이장 내외부 청소",
    icon: DrawersIcon,
  },
  {
    id: "05",
    title: "배수구 청소",
    description: "배수구 분리청소",
    icon: DrainIcon,
  },
  {
    id: "06",
    title: "컨센트 청소",
    description: "컨센트 내부•주변 먼지 제거",
    icon: SocketIcon,
  },
  {
    id: "07",
    title: "창문 전체 청소",
    description: "창틀 위•옆•아래, 몰딩, 유리창 청소",
    icon: WindowIcon,
  },
  {
    id: "08",
    title: "전등 청소",
    description: "전등 탈거 후 커버와 내부 먼지 청소",
    icon: LampIcon,
  },
];

const ServiceCard = ({
  service,
  className = "",
  index = 0,
}: {
  service: (typeof services)[0];
  className?: string;
  index?: number;
}) => {
  return (
    <motion.div
      className={`bg-[#F4FAFD] rounded-[1.4375rem] p-4 sm:p-6 lg:p-8 flex flex-col gap-4 lg:gap-[1.6875rem] ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {/* Number badge with gradient border */}
      <motion.div
        className="w-[2.6875rem] h-auto flex flex-col justify-center items-center gap-2 p-2 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.2,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gradient-blue-start via-gradient-blue-middle to-gradient-blue-end" />
        <span className="text-lg sm:text-xl font-bold text-secondary leading-[1.6]">
          {service.id}
        </span>
      </motion.div>

      {/* Icon */}
      <motion.div
        className="w-[2.5rem] h-[2.5rem] sm:w-[3.125rem] sm:h-[3.125rem] flex items-center justify-center"
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.3,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        <Image
          src={service.icon}
          alt={service.title}
          width={50}
          height={50}
          className="w-full h-full"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.4,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-secondary leading-[1.6] break-keep">
          {service.title}
        </h3>
        <p className="text-xs text-text-primary leading-[1.6] break-keep">
          {service.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const EntryServiceSection = () => {
  // Split services for different layouts
  const firstRow = services.slice(0, 4); // 1-2-3-4
  const secondRow = services.slice(4, 8).reverse(); // 8-7-6-5

  // For xl screens (3 cards per row)
  const firstRowXl = services.slice(0, 3); // 1-2-3
  const secondRowXl = services.slice(3, 6); // 4-5-6
  const thirdRowXl = services.slice(6, 8); // 7-8

  return (
    <motion.section
      className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[73.125rem] mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-center leading-[1.6] break-keep mb-8 sm:mb-12 lg:mb-[4.375rem]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          입주청소 서비스 범위
        </motion.h2>

        {/* Services List - 2xl+ Layout (4 cards per row) */}
        <div className="hidden 2xl:block">
          <ul className="flex flex-col gap-6">
            {/* First Row */}
            <li>
              <ul className="flex gap-6">
                {firstRow.map((service, index) => (
                  <li key={service.id} className="flex-1">
                    <ServiceCard service={service} index={index} />
                  </li>
                ))}
              </ul>
            </li>

            {/* Second Row */}
            <li>
              <ul className="flex gap-6">
                {secondRow.map((service, index) => (
                  <li key={service.id} className="flex-1">
                    <ServiceCard service={service} index={index + 4} />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        {/* Services List - xl Layout (3 cards per row) */}
        <div className="hidden xl:block 2xl:hidden">
          <ul className="flex flex-col gap-6">
            {/* First Row */}
            <li>
              <ul className="flex gap-6">
                {firstRowXl.map((service, index) => (
                  <li key={service.id} className="flex-1">
                    <ServiceCard service={service} index={index} />
                  </li>
                ))}
              </ul>
            </li>

            {/* Second Row */}
            <li>
              <ul className="flex gap-6">
                {secondRowXl.map((service, index) => (
                  <li key={service.id} className="flex-1">
                    <ServiceCard service={service} index={index + 3} />
                  </li>
                ))}
              </ul>
            </li>

            {/* Third Row */}
            <li>
              <ul className="flex gap-6">
                {thirdRowXl.map((service, index) => (
                  <li key={service.id} className="flex-1">
                    <ServiceCard service={service} index={index + 6} />
                  </li>
                ))}
                {/* Empty space to maintain alignment */}
                <li className="flex-1"></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Services List - Mobile/Tablet Layout */}
        <div className="xl:hidden">
          {/* Mobile: 2x4 Grid */}
          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {services.map((service, index) => (
              <li key={service.id}>
                <ServiceCard service={service} index={index} />
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 },
            }}
          >
            <Link
              href="/apply-service"
              className="bg-accent hover:bg-secondary text-white font-bold text-base sm:text-lg lg:text-xl rounded-[3.125rem] px-6 py-2 flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 transition-colors w-fit"
            >
              <span>지금 신청하기</span>
              <motion.div
                className="bg-white rounded-full p-2"
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.3 },
                }}
              >
                <Image src={ArrowIcon} alt="arrow-right" />
              </motion.div>
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntryServiceSection;
