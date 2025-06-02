import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

// Import the downloaded icons
import ceilingAc from "@/public/images/ac-icons/ceiling-ac.svg";
import downArrow from "@/public/images/ac-icons/down-arrow.svg";
import towerAc2 from "@/public/images/ac-icons/tower-ac-2.svg";
import towerAc from "@/public/images/ac-icons/tower-ac.svg";
import upArrow from "@/public/images/ac-icons/up-arrow.svg";
import wallAc2 from "@/public/images/ac-icons/wall-ac-2.svg";
import wallAc from "@/public/images/ac-icons/wall-ac.svg";

interface ACTypeProps {
  icon: any;
  title: string;
  categories: string[];
  prices: string[];
  isDoubleIcon?: boolean;
  secondIcon?: any;
}

function ACTypeCard({
  icon,
  title,
  categories,
  prices,
  isDoubleIcon = false,
  secondIcon,
}: ACTypeProps) {
  const totalColumns = categories.length + 1; // +1 for the "구분" column

  return (
    <motion.article
      className="flex flex-col lg:flex-row gap-6 items-start lg:items-center w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Icon and Title */}
      <motion.div
        className="flex flex-col justify-center items-center min-w-[10rem] lg:min-w-[12rem]"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center items-center mb-4">
          <div className="w-20 h-20 flex items-center justify-center relative">
            {isDoubleIcon ? (
              <>
                <Image src={icon} alt={title} className="absolute z-10" />
                <Image
                  src={secondIcon}
                  alt={title}
                  unoptimized
                  className="absolute translate-x-2 z-0"
                />
              </>
            ) : (
              <Image src={icon} alt={title} width={60} height={60} />
            )}
          </div>
        </div>
        <h3 className="text-lg lg:text-xl font-bold text-text-primary text-center">
          {title}
        </h3>
      </motion.div>

      {/* Pricing Table */}
      <motion.div
        className="flex-1 w-full overflow-x-auto"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <table
          className="border-collapse bg-white overflow-hidden"
          style={{
            tableLayout: "fixed",
            width: `${Math.min(totalColumns * 12.5, 100)}rem`,
            maxWidth: `${totalColumns * 12.5}rem`,
          }}
        >
          <caption className="sr-only">{title} 가격표</caption>
          <thead>
            <tr className="bg-brand-card-blue">
              <th
                scope="col"
                className="border-t-2 border-secondary p-3 lg:p-4 text-sm lg:text-base font-semibold text-text-primary text-center"
                style={{ width: "12.5rem", maxWidth: "12.5rem" }}
              >
                구분
              </th>
              {categories.map((category, index) => (
                <th
                  key={index}
                  scope="col"
                  className="border-t-2 border-secondary px-3 lg:px-4 text-sm lg:text-base font-semibold text-text-primary text-center"
                  style={{ width: "12.5rem", maxWidth: "12.5rem" }}
                >
                  <span className="block truncate">{category}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
                className="border-y-2 border-secondary px-3 lg:px-4 text-center"
                style={{ width: "12.5rem", maxWidth: "12.5rem" }}
              >
                <div className="bg-background border border-text-primary rounded-full px-3 py-0.5 inline-block">
                  <span className="text-sm text-text-primary">단가</span>
                </div>
              </th>
              {prices.map((price, index) => (
                <td
                  key={index}
                  className="border-y-2 border-secondary p-3 lg:p-4 text-center"
                  style={{ width: "12.5rem", maxWidth: "12.5rem" }}
                >
                  <span className="text-sm lg:text-base text-[#2D3E50] font-medium block truncate">
                    {price}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </motion.div>
    </motion.article>
  );
}

const ACPricingTable = () => {
  return (
    <motion.section
      className="w-full max-w-7xl mx-auto px-4 lg:px-8"
      aria-labelledby="pricing-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col gap-16 lg:gap-20 py-16 lg:py-20">
        {/* Page Break Line */}
        <motion.hr
          className="w-full border-t border-accent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Header Section */}
        <motion.header
          className="flex flex-col items-center gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            id="pricing-heading"
            className="text-2xl lg:text-4xl font-bold text-secondary text-center leading-relaxed max-w-4xl mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            &apos;맞춤형 = 고가&apos;라는 편견, 글림케어가 깹니다.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xl lg:text-2xl font-bold text-text-primary">
                가격의 부담은 <span className="text-accent">DOWN</span>
              </span>
              <div className="w-8 lg:w-10 flex items-center justify-center">
                <Image
                  src={downArrow}
                  alt="Down arrow"
                  width={32}
                  height={42}
                  className="lg:w-10 lg:h-[53px]"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xl lg:text-2xl font-bold text-text-primary">
                맞춤형 케어는 <span className="text-accent">UP</span>
              </span>
              <div className="w-8 lg:w-10 flex items-center justify-center">
                <Image
                  src={upArrow}
                  alt="Up arrow"
                  width={32}
                  height={42}
                  className="lg:w-10 lg:h-[53px]"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.header>

        {/* AC Types Grid */}
        <motion.div
          className="flex flex-col gap-12 lg:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Wall-mounted AC */}
          <ACTypeCard
            icon={wallAc}
            title="벽걸이 에어컨"
            categories={["일반형", "장풍형 / 무풍형"]}
            prices={["70,000원", "80,000원"]}
          />

          {/* Stand AC */}
          <ACTypeCard
            icon={towerAc}
            title="스탠드 에어컨"
            categories={["일반형", "장풍형 / 무풍형", "업소형"]}
            prices={["110,000원", "120,000원", "150,000원"]}
          />

          {/* Ceiling AC */}
          <ACTypeCard
            icon={ceilingAc}
            title="천장형 에어컨"
            categories={["1WAY", "2WAY", "4WAY", "360도"]}
            prices={["90,000원", "100,000원", "120,000원", "170,000원"]}
          />

          {/* 2-in-1 AC */}
          <ACTypeCard
            icon={wallAc2}
            secondIcon={towerAc2}
            title="투인원 에어컨"
            categories={["벽걸이 + 스탠드"]}
            prices={["170,000원 ~"]}
            isDoubleIcon={true}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ACPricingTable;
