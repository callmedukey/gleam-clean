"use client";

import { ChevronRight } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Import icons
import arrowRightIcon from "@/public/icons/common-arrow-right.svg";
import assemblyIcon from "@/public/images/ac-process/assembly-icon.svg";
import cleanupIcon from "@/public/images/ac-process/cleanup-icon.svg";
import dryingIcon from "@/public/images/ac-process/drying-icon.svg";
import installationIcon from "@/public/images/ac-process/installation-icon.svg";
import operationCheckIcon from "@/public/images/ac-process/operation-check-icon.svg";
import powerWashingIcon from "@/public/images/ac-process/power-washing-icon.svg";
import sprayIcon from "@/public/images/ac-process/spray-icon.svg";
import statusCheckIcon from "@/public/images/ac-process/status-check-icon.svg";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: any;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "상태 점검",
    description: "에어컨의 상태와 오염도 확인",
    icon: statusCheckIcon,
  },
  {
    number: "02",
    title: "에어컨 분해",
    description: "효과적인 청소를 위해 완전 분해",
    icon: installationIcon,
  },
  {
    number: "03",
    title: "친환경 세제 도포",
    description: "부품 세척을 위해 천연세제 도포",
    icon: sprayIcon,
  },
  {
    number: "04",
    title: "고압 세척",
    description: "냉각핀, 열교환기까지 고압 세척",
    icon: powerWashingIcon,
  },
  {
    number: "05",
    title: "부품 건조",
    description: "에어컨 조립 전 부품 완전 건조",
    icon: dryingIcon,
  },
  {
    number: "06",
    title: "에어컨 조립",
    description: "에어컨 청소 완료 후 조립",
    icon: assemblyIcon,
  },
  {
    number: "07",
    title: "에어컨 작동 확인",
    description: "청소 후 에어컨의 원활한 작동 체크",
    icon: operationCheckIcon,
  },
  {
    number: "08",
    title: "현장 정리",
    description: "작업 종료 후 주변을 꼼꼼히 정리",
    icon: cleanupIcon,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ACProcessSection = () => {
  // Function to reorder items for zigzag pattern
  const reorderForZigzag = (items: ProcessStep[], columns: number) => {
    const reordered: ProcessStep[] = [];
    const totalRows = Math.ceil(items.length / columns);

    for (let row = 1; row <= totalRows; row++) {
      const startIdx = (row - 1) * columns;
      const endIdx = Math.min(row * columns, items.length);
      const rowItems = items.slice(startIdx, endIdx);

      // Reverse even rows
      if (row % 2 === 0) {
        reordered.push(...rowItems.reverse());
      } else {
        reordered.push(...rowItems);
      }
    }

    return reordered;
  };

  // Create reordered arrays for each breakpoint
  const stepsForTablet = reorderForZigzag(processSteps, 2);
  const stepsForDesktop = reorderForZigzag(processSteps, 3);
  const stepsForLarge = reorderForZigzag(processSteps, 4);

  // Debug logging
  console.log(
    "2-column zigzag order:",
    stepsForTablet.map((s) => s.number).join(", ")
  );
  console.log(
    "4-column zigzag order:",
    stepsForLarge.map((s) => s.number).join(", ")
  );

  // Generate CSS for ordering
  const generateOrderCSS = () => {
    let css = "";

    // Tablet (2 columns) - sm to lg
    css += "@media (min-width: 640px) and (max-width: 1023px) {\n";
    stepsForTablet.forEach((step, index) => {
      css += `  .process-step-${step.number} { order: ${index}; }\n`;
    });
    css += "}\n";

    // Desktop (3 columns) - lg to xl
    css += "@media (min-width: 1024px) and (max-width: 1279px) {\n";
    stepsForDesktop.forEach((step, index) => {
      css += `  .process-step-${step.number} { order: ${index}; }\n`;
    });
    css += "}\n";

    // Large (4 columns) - xl+
    css += "@media (min-width: 1280px) {\n";
    stepsForLarge.forEach((step, index) => {
      css += `  .process-step-${step.number} { order: ${index}; }\n`;
    });
    css += "}\n";

    return css;
  };

  return (
    <motion.section
      className="w-full flex flex-col gap-[7.5rem] max-w-[73.125rem] mx-auto px-4 py-8 sm:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Page break line */}
      <motion.div
        className="w-full h-0 border-t border-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Content */}
      <div className="flex flex-col items-center gap-[4.375rem]">
        {/* Title */}
        <motion.h2
          className="text-secondary font-bold text-2xl sm:text-3xl lg:text-4xl leading-[1.6] text-center break-keep"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          에어컨 청소 서비스 단계별 과정
        </motion.h2>

        {/* Add CSS for ordering */}
        <style dangerouslySetInnerHTML={{ __html: generateOrderCSS() }} />

        {/* Process steps grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-9 xl:gap-x-9 xl:gap-y-9"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {processSteps.map((step, index) => {
            const totalItems = processSteps.length;

            // Find the display position for this step at each breakpoint
            const getDisplayIndex = (orderedSteps: ProcessStep[]) => {
              return orderedSteps.findIndex((s) => s.number === step.number);
            };

            const displayIndex = {
              base: index,
              sm: getDisplayIndex(stepsForTablet),
              lg: getDisplayIndex(stepsForDesktop),
              xl: getDisplayIndex(stepsForLarge),
            };

            // Calculate which row this item is in for each breakpoint based on visual position
            const getRow = (columns: number, idx: number) =>
              Math.ceil((idx + 1) / columns);
            const getPositionInRow = (columns: number, idx: number) =>
              (idx % columns) + 1;

            // Determine arrow visibility based on visual position in the zigzag pattern
            const getArrowLogic = (columns: number, visualIdx: number) => {
              const row = getRow(columns, visualIdx);
              const posInRow = getPositionInRow(columns, visualIdx);
              const isLastInRow =
                posInRow === columns || visualIdx === totalItems - 1;
              const isFirstInRow = posInRow === 1;
              const reversed = row % 2 === 0;

              // Check if this is step 08 (the last step in the process sequence)
              const stepNum = parseInt(step.number);
              const isLastStep = stepNum === 8;

              // Never show arrows for step 08 (last step in sequence)
              if (isLastStep) {
                return {
                  showRight: false,
                  showLeft: false,
                  showDown: false,
                };
              }

              // For zigzag pattern:
              // - Normal rows (odd): arrows point right from current item to next
              // - Reversed rows (even): arrows point left from current item to previous in visual flow
              if (reversed) {
                // In reversed rows:
                // - Left arrows on items that are NOT first in row (by position)
                // - Down arrow on first item (by position) which is visually last
                return {
                  showRight: false,
                  showLeft: !isFirstInRow,
                  showDown: isFirstInRow && visualIdx < totalItems - 1,
                };
              } else {
                // In normal rows:
                // - Right arrows on items that are NOT last in row
                // - Down arrow on last item in row
                return {
                  showRight: !isLastInRow,
                  showLeft: false,
                  showDown: isLastInRow && visualIdx < totalItems - 1,
                };
              }
            };

            // Get arrow logic for each breakpoint using display index
            const arrows = {
              base: getArrowLogic(1, displayIndex.base),
              sm: getArrowLogic(2, displayIndex.sm),
              lg: getArrowLogic(3, displayIndex.lg),
              xl: getArrowLogic(4, displayIndex.xl),
            };

            // Debug logging for 4-column layout
            if (step.number === "06" || step.number === "05") {
              console.log(`[4-col] Step ${step.number}:`, {
                visualPosition: displayIndex.xl,
                row: getRow(4, displayIndex.xl),
                posInRow: getPositionInRow(4, displayIndex.xl),
                arrows: arrows.xl,
              });
            }

            // Debug logging for 2-column layout
            if (step.number === "07" || step.number === "08") {
              console.log(`[2-col] Step ${step.number}:`, {
                visualPosition: displayIndex.sm,
                row: getRow(2, displayIndex.sm),
                posInRow: getPositionInRow(2, displayIndex.sm),
                arrows: arrows.sm,
              });
            }

            return (
              <motion.div
                key={step.number}
                className={`relative process-step-${step.number}`}
                variants={stepVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="bg-[#F4FAFD] rounded-[1.4375rem] p-6 sm:p-8 flex flex-col gap-4 sm:gap-6 min-h-[16rem] sm:min-h-[19.25rem]">
                  {/* Step number with gradient border */}
                  <motion.div
                    className="flex flex-col justify-center items-center gap-2 p-2 w-[2.6875rem] h-auto relative before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-gradient-blue-start before:via-gradient-blue-middle before:to-gradient-blue-end"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-secondary font-bold text-lg sm:text-xl leading-[1.6] text-center">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="w-[3.125rem] h-[3.125rem] flex items-center justify-center"
                    initial={{ opacity: 0, rotateY: 90 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={step.icon}
                      alt={`${step.title} 아이콘`}
                      className="w-[3.125rem] h-[3.125rem] object-contain"
                      unoptimized
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="flex flex-col gap-2 flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-secondary font-bold text-lg sm:text-xl leading-[1.6]">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-[1.6]">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Arrows */}
                <>
                  {/* Right arrows for normal flow rows */}
                  {arrows.base.showRight && (
                    <motion.div
                      className="absolute top-1/2 -right-[1.3rem] transform -translate-y-1/2 z-10 block sm:hidden"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                    </motion.div>
                  )}
                  {arrows.sm.showRight && (
                    <motion.div
                      className="absolute top-1/2 -right-[1.3rem] transform -translate-y-1/2 z-10 hidden sm:block lg:hidden"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                    </motion.div>
                  )}
                  {arrows.lg.showRight && (
                    <motion.div
                      className="absolute top-1/2 -right-[1.7rem] transform -translate-y-1/2 z-10 hidden lg:block xl:hidden"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                    </motion.div>
                  )}
                  {arrows.xl.showRight && (
                    <motion.div
                      className="absolute top-1/2 -right-[1.7rem] transform -translate-y-1/2 z-10 hidden xl:block"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                    </motion.div>
                  )}

                  {/* Left arrows for reversed flow rows */}
                  {arrows.sm.showLeft && (
                    <motion.div
                      className="absolute top-1/2 -left-[1.3rem] transform -translate-y-1/2 rotate-180 z-10 hidden sm:block lg:hidden"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                    </motion.div>
                  )}
                  {arrows.lg.showLeft && (
                    <motion.div
                      className="absolute top-1/2 -left-[1.7rem] transform -translate-y-1/2 rotate-180 z-10 hidden lg:block xl:hidden"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                    </motion.div>
                  )}
                  {arrows.xl.showLeft && (
                    <motion.div
                      className="absolute top-1/2 -left-[1.7rem] transform -translate-y-1/2 rotate-180 z-10 hidden xl:block"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                    </motion.div>
                  )}

                  {/* Down arrows at end of rows */}
                  {arrows.base.showDown && (
                    <motion.div
                      className="absolute -bottom-[1.3rem] left-1/2 transform -translate-x-1/2 rotate-90 z-10 block sm:hidden"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                    </motion.div>
                  )}
                  {arrows.sm.showDown && (
                    <motion.div
                      className="absolute -bottom-[1.3rem] left-1/2 transform -translate-x-1/2 rotate-90 z-10 hidden sm:block lg:hidden"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                    </motion.div>
                  )}
                  {arrows.lg.showDown && (
                    <motion.div
                      className="absolute -bottom-[1.7rem] left-1/2 transform -translate-x-1/2 rotate-90 z-10 hidden lg:block xl:hidden"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                    </motion.div>
                  )}
                  {arrows.xl.showDown && (
                    <motion.div
                      className="absolute -bottom-[1.7rem] left-1/2 transform -translate-x-1/2 rotate-90 z-10 hidden xl:block"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                    </motion.div>
                  )}
                </>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link
            href="/apply-service"
            className="bg-accent hover:bg-accent/80 text-white font-bold text-base rounded-[3.125rem] px-6 py-2 flex items-center justify-center gap-4 sm:gap-6 transition-colors"
          >
            <span>지금 신청하기</span>
            <motion.div
              className="bg-white rounded-full p-2"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={arrowRightIcon} alt="arrow-right" />
            </motion.div>
          </Link>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default ACProcessSection;
