import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

import downArrow from "@/public/icons/down-arrow.svg";
import upArrow from "@/public/icons/up-arrow.svg";
import mattressImage2 from "@/public/images/pricing/mattress-image-2.png";
import mattressImage3 from "@/public/images/pricing/mattress-image-3.png";
import mattressImage4 from "@/public/images/pricing/mattress-image-4.png";
import mattressImage5 from "@/public/images/pricing/mattress-image-5.png";
import mattressImage6 from "@/public/images/pricing/mattress-image-6.png";
import sofaImage1 from "@/public/images/pricing/sofa-image-1.png";
import sofaImage2 from "@/public/images/pricing/sofa-image-2.png";
import sofaImage3 from "@/public/images/pricing/sofa-image-3.png";
import sofaImage4 from "@/public/images/pricing/sofa-image-4.png";
import sofaImage5 from "@/public/images/pricing/sofa-image-5.png";

interface PricingTableProps {
  title: string;
  categories: Array<{
    name: string;
    description: string;
  }>;
  dryPrices: string[];
  wetPrices: string[];
  images?: any[];
  isMattress?: boolean;
}

const PricingTable = ({
  title,
  categories,
  dryPrices,
  wetPrices,
  images,
  isMattress,
}: PricingTableProps) => {
  return (
    <motion.article
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.header
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg sm:text-2xl font-bold text-text-primary">
          {title}
        </h3>
      </motion.header>

      <motion.div
        className="overflow-x-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <table className="w-full min-w-fit border-collapse border-t-2 border-l-0 border-r-0 border-primary">
          <thead>
            <tr className="bg-brand-card-blue border-b-2 border-primary">
              <th className="min-w-[7.5rem] sm:min-w-[10.625rem] p-3 sm:p-4 text-center text-sm sm:text-lg font-semibold text-black">
                구분
              </th>
              {categories.map((category, index) => (
                <motion.th
                  key={index}
                  className="min-w-[7.5rem] sm:min-w-[10.625rem] p-3 sm:p-4 text-center"
                  scope="col"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                    <span className="text-sm sm:text-lg font-semibold text-text-primary break-keep">
                      {category.name}
                    </span>
                    {category.description && (
                      <span className="text-xs text-text-primary">
                        {category.description}
                      </span>
                    )}
                  </div>
                </motion.th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Images row - only show if images are provided */}
            {images && (
              <motion.tr
                className="border-b border-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <td className="min-w-[7.5rem] sm:min-w-[10.625rem] p-3 sm:p-4"></td>
                {images.map((image, index) => (
                  <motion.td
                    key={index}
                    className="min-w-[7.5rem] sm:min-w-[10.625rem] p-2 sm:p-3 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.05,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-center items-center h-[7.5rem] sm:h-[9.375rem]">
                      <Image
                        src={image}
                        alt={`${categories[index]?.name} 이미지`}
                        width={120}
                        height={120}
                        className={`object-contain max-w-full max-h-full ${
                          isMattress ? "opacity-40" : ""
                        }`}
                      />
                    </div>
                  </motion.td>
                ))}
              </motion.tr>
            )}

            {/* Dry cleaning row */}
            <motion.tr
              className="border-b border-primary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <th
                scope="row"
                className="min-w-[7.5rem] sm:min-w-[10.625rem] p-3 sm:p-4"
              >
                <div className="flex justify-center">
                  <span className="bg-brand-card-blue rounded-btn px-3 sm:px-4 py-1 text-sm sm:text-base text-secondary">
                    건식
                  </span>
                </div>
              </th>
              {dryPrices.map((price, index) => (
                <td
                  key={index}
                  className="min-w-[7.5rem] sm:min-w-[10.625rem] p-3 sm:p-4 text-center"
                >
                  <span className="text-sm sm:text-base text-text-primary">
                    {price}
                  </span>
                </td>
              ))}
            </motion.tr>

            {/* Wet cleaning row */}
            <motion.tr
              className="border-b border-primary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <th
                scope="row"
                className="min-w-[7.5rem] sm:min-w-[10.625rem] p-3 sm:p-4"
              >
                <div className="flex justify-center">
                  <span className="bg-brand-premium-green/20 rounded-btn px-3 sm:px-4 py-1 text-sm sm:text-base text-brand-premium-green">
                    건식 + 습식
                  </span>
                </div>
              </th>
              {wetPrices.map((price, index) => (
                <td
                  key={index}
                  className="min-w-[7.5rem] sm:min-w-[10.625rem] p-3 sm:p-4 text-center"
                >
                  <span className="text-sm sm:text-base text-text-primary">
                    {price}
                  </span>
                </td>
              ))}
            </motion.tr>
          </tbody>
        </table>
      </motion.div>
    </motion.article>
  );
};

const PricingSection = () => {
  const mattressData = {
    title: "매트리스 가격표",
    categories: [
      { name: "싱글 / 슈퍼싱글", description: "폭 100-110cm" },
      { name: "더블", description: "폭 140cm" },
      { name: "퀸 / 킹", description: "폭 150-170cm" },
      { name: "라지킹", description: "폭 180cm" },
      { name: "이스턴킹", description: "폭 193cm" },
    ],
    dryPrices: ["40,000원", "45,000원", "50,000원", "55,000원", "60,000원"],
    wetPrices: ["80,000원", "90,000원", "100,000원", "110,000원", "120,000원"],
    images: [
      mattressImage2,
      mattressImage3,
      mattressImage4,
      mattressImage5,
      mattressImage6,
    ],
    isMattress: true,
  };

  const sofaData = {
    title: "소파 가격표",
    categories: [
      { name: "2인용", description: "폭 150cm" },
      { name: "3인용", description: "폭 200cm" },
      { name: "4인용", description: "폭 250cm" },
      { name: "카우치형/5인용", description: "폭 300cm" },
      { name: "코너형/6인용", description: "폭 350cm" },
    ],
    dryPrices: ["40,000원", "50,000원", "60,000원", "70,000원", "80,000원"],
    wetPrices: ["80,000원", "100,000원", "120,000원", "140,000원", "160,000원"],
    images: [sofaImage1, sofaImage2, sofaImage3, sofaImage4, sofaImage5],
    isMattress: false,
  };

  const carpetData = {
    title: "카페트 가격표",
    categories: [
      { name: "2m 이내", description: "" },
      { name: "3m 이내", description: "" },
      { name: "4m 이내", description: "" },
      { name: "5m 이내", description: "" },
      { name: "6m 이내", description: "" },
    ],
    dryPrices: ["30,000원", "40,000원", "50,000원", "60,000원", "70,000원"],
    wetPrices: ["60,000원", "80,000원", "100,000원", "120,000원", "140,000원"],
  };

  const chairData = {
    title: "의자 가격표",
    categories: [
      { name: "소파 스툴", description: "" },
      { name: "식탁의자", description: "" },
      { name: "회의용의자", description: "" },
      { name: "수강용의자", description: "" },
      { name: "사무용의자", description: "" },
    ],
    dryPrices: ["10,000원", "10,000원", "-", "-", "20,000원"],
    wetPrices: ["20,000원", "20,000원", "10,000원", "10,000원", "40,000원"],
  };

  return (
    <motion.section
      className="py-16 sm:py-24 lg:py-[108px] bg-white border-b border-accent max-w-7xl mx-auto"
      aria-labelledby="pricing-section-title"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 mb-16 sm:mb-20">
          <motion.h2
            id="pricing-section-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary text-center break-keep"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            &lsquo;맞춤형 = 고가&rsquo;라는 편견, 글림케어가 깹니다.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
            role="banner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary break-keep">
                가격의 부담은 <span className="text-accent">DOWN</span>
              </span>
              <motion.div
                className="w-[2.5rem] h-[2.5rem] sm:w-[3.3125rem] sm:h-[3.3125rem] bg-white flex items-center justify-center"
                aria-label="가격 하락을 나타내는 아래쪽 화살표"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
              >
                <Image src={downArrow} alt="down-arrow" />
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary break-keep">
                맞춤형 케어는 <span className="text-accent">UP</span>
              </span>
              <motion.div
                className="w-[2.5rem] h-[2.5rem] sm:w-[3.3125rem] sm:h-[3.3125rem] bg-white flex items-center justify-center"
                aria-label="맞춤형 케어 향상을 나타내는 위쪽 화살표"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
              >
                <Image src={upArrow} alt="up-arrow" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Pricing Tables */}
        <section className="flex flex-col gap-16 sm:gap-20">
          <PricingTable {...mattressData} />
          <PricingTable {...sofaData} />
          <PricingTable {...carpetData} />
          <PricingTable {...chairData} />
        </section>
      </div>
    </motion.section>
  );
};

export default PricingSection;
