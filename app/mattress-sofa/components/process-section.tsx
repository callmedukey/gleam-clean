"use client";

import { ChevronRight } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Import process step icons
import arrowRightIcon from "@/public/icons/common-arrow-right.svg";
import brushIcon from "@/public/images/process/brush-icon.svg";
import cleaningLiquidIcon from "@/public/images/process/cleaning-liquid-icon.svg";
import leafIcon from "@/public/images/process/leaf-icon.svg";
import lemonIcon from "@/public/images/process/lemon-icon.svg";
import noStainIcon from "@/public/images/process/no-stain-icon.svg";
import resultsIcon from "@/public/images/process/results-icon.svg";
import spinBrushIcon from "@/public/images/process/spin-brush-icon.svg";
import sprayGunIcon from "@/public/images/process/spray-gun-icon.svg";
import steamCleanIcon from "@/public/images/process/steam-clean-icon.svg";
import sweepingIcon from "@/public/images/process/sweeping-icon.svg";
import uvLampIcon from "@/public/images/process/uv-lamp-icon.svg";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  type: "basic" | "premium";
  icon: any;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "주변 클리닝",
    description: "바닥, 프레임 등 케어 받는 가구의 주변 먼지 우선 청소",
    type: "basic",
    icon: sweepingIcon,
  },
  {
    number: "02",
    title: "뒷측면 건식 클리닝",
    description:
      "1분당 4,000번 회전하는 짚 브러시로 가구의 뒷면, 측면 건식 클리닝",
    type: "basic",
    icon: spinBrushIcon,
  },
  {
    number: "03",
    title: "전면 건식 클리닝",
    description: "섬유를 두들겨 30cm 깊이의 먼지를 소프트 브러시로 흡입",
    type: "basic",
    icon: brushIcon,
  },
  {
    number: "04",
    title: "오점(얼룩) 제거",
    description:
      "얼룩 유형 파악하고 적합한 친환경 세제 배합 및 도포하여 얼룩 제거",
    type: "premium",
    icon: noStainIcon,
  },
  {
    number: "05",
    title: "전체 스팀 클리닝",
    description: "섬유 깊숙이 침투한 진드기 등을 고온 스팀 클리닝으로 박멸",
    type: "premium",
    icon: steamCleanIcon,
  },
  {
    number: "06",
    title: "전체 습식 클리닝",
    description:
      "가구 원단에 적합한 친환경 세제 배합 및 도포 후 습식 클리닝 진행",
    type: "premium",
    icon: cleaningLiquidIcon,
  },
  {
    number: "07",
    title: "중화 및 탈수 작업",
    description: "중화작업 진행 후 천연 레몬오일 희석 후 탈수 작업 진행",
    type: "premium",
    icon: lemonIcon,
  },
  {
    number: "08",
    title: "UV 살균",
    description: "자외선 살균 기술을 활용하여 바이러스 및 유해물질 DNA 파괴",
    type: "basic",
    icon: uvLampIcon,
  },
  {
    number: "09",
    title: "미립자 소독",
    description:
      "미세 입자 소독제를 분사하여 섬유 속 곰팡이와 바이러스를 완벽하게 박멸",
    type: "basic",
    icon: sprayGunIcon,
  },
  {
    number: "10",
    title: "피톤치드 방역",
    description:
      "피톤치드 방역을 활용하여 항균, 탈취 효과 등 주변 환경을 깨끗하게 정화",
    type: "basic",
    icon: leafIcon,
  },
  {
    number: "11",
    title: "결과 및 관리법 안내",
    description:
      "1500배율 현미경으로 집 먼지 진드기 확인 (요청 시) 및 관리법 설명",
    type: "basic",
    icon: resultsIcon,
  },
];

const ProcessSection = () => {
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

  // Generate CSS for ordering
  const generateOrderCSS = () => {
    let css = "";

    // Tablet (2 columns) - Special handling for service cards in last row
    css += "@media (min-width: 640px) and (max-width: 1023px) {\n";
    // For 2 columns, we want service cards as first item in last row
    // Flow: 1-2, 4-3, 5-6, 8-7, 9-10, ServiceCards-11
    stepsForTablet.forEach((step, index) => {
      const stepNum = parseInt(step.number);
      if (stepNum === 11) {
        // Step 11 goes to position 11 (order 11)
        css += `  .process-step-${step.number} { order: 11; }\n`;
      } else {
        // All other steps keep their zigzag positions
        css += `  .process-step-${step.number} { order: ${index}; }\n`;
      }
    });
    css += `  .service-cards { order: 10; }\n`; // Service cards in position 10 (first in last row)
    css += "}\n";

    // Desktop (3 columns) - Special handling for service cards
    css += "@media (min-width: 1024px) and (max-width: 1279px) {\n";
    // For 3 columns, we want service cards in position 10 (index 9)
    // so the flow is: 1-2-3, 6-5-4, 7-8-9, ServiceCards-11-10
    stepsForDesktop.forEach((step, index) => {
      if (index < 9) {
        // First 9 items (steps 1-9) keep their positions
        css += `  .process-step-${step.number} { order: ${index}; }\n`;
      } else {
        // Items 10 and 11 get pushed one position later
        css += `  .process-step-${step.number} { order: ${index + 1}; }\n`;
      }
    });
    css += `  .service-cards { order: 9; }\n`; // Service cards in position 10 (between 9 and 10)
    css += "}\n";

    // Large (4 columns)
    css += "@media (min-width: 1280px) {\n";
    stepsForLarge.forEach((step, index) => {
      css += `  .process-step-${step.number} { order: ${index}; }\n`;
    });
    css += `  .service-cards { order: 11; }\n`; // Service cards as 12th item
    css += "}\n";

    return css;
  };

  return (
    <motion.section
      className="w-full max-w-[73.125rem] mx-auto px-4 py-8 sm:py-16 mt-4 sm:mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary text-center mb-8 sm:mb-16 break-keep"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        나의 가구가 깨끗하게 되살아나는 과정
      </motion.h2>

      {/* Add CSS for ordering */}
      <style dangerouslySetInnerHTML={{ __html: generateOrderCSS() }} />

      {/* Process Steps Grid - Different ordering for each breakpoint */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-9 xl:gap-x-9 xl:gap-y-15">
        {processSteps.map((step, index) => {
          const isBasic = step.type === "basic";
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
            const isLastProcessStep = visualIdx === totalItems - 1; // Item 11 is the last process step

            // Special handling for 2-column layout where service cards are repositioned
            if (columns === 2) {
              const stepNum = parseInt(step.number);

              // Never show arrows for item 11 (last process step)
              if (stepNum === 11) {
                return {
                  showRight: false,
                  showLeft: false,
                  showDown: false,
                };
              }

              // Item 10 should show down arrow (pointing to item 11 below it)
              if (stepNum === 10) {
                return {
                  showRight: false,
                  showLeft: false,
                  showDown: true,
                };
              }

              // Item 9 should show right arrow (pointing to item 10)
              if (stepNum === 9) {
                return {
                  showRight: true,
                  showLeft: false,
                  showDown: false,
                };
              }

              // For other items, use normal logic
            }

            // Special handling for 3-column layout where we manually reordered
            if (columns === 3) {
              const stepNum = parseInt(step.number);

              // Never show arrows for item 11 (last process step)
              if (stepNum === 11) {
                return {
                  showRight: false,
                  showLeft: false,
                  showDown: false,
                };
              }

              // Item 10 should show left arrow (it's in position 11, row 4 which is reversed)
              if (stepNum === 10) {
                return {
                  showRight: false,
                  showLeft: true, // Points to item 11
                  showDown: false,
                };
              }

              // Item 9 should show down arrow (end of row 3)
              if (stepNum === 9) {
                return {
                  showRight: false,
                  showLeft: false,
                  showDown: true, // Points down to row 4
                };
              }

              // For other items, use normal logic
            }

            // Never show arrows for the last process step (item 11)
            if (isLastProcessStep) {
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
                showDown: isFirstInRow,
              };
            } else {
              // In normal rows:
              // - Right arrows on items that are NOT last in row
              // - Down arrow on last item in row
              return {
                showRight: !isLastInRow,
                showLeft: false,
                showDown: isLastInRow,
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

          return (
            <motion.div
              key={step.number}
              className={`relative process-step-${step.number}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className={`
                flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 rounded-[1.4375rem] w-full min-h-[16rem] sm:min-h-[19.25rem]
                ${isBasic ? "bg-[#E4F6FF]" : "bg-[#EAFBF0]"}
              `}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Step Number */}
                <motion.div
                  className={`
                  flex flex-col justify-center items-center gap-2 p-2 w-[2.6875rem] h-auto relative
                  ${
                    isBasic
                      ? "before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-gradient-blue-start before:via-gradient-blue-middle before:to-gradient-blue-end"
                      : "border-b-2 border-brand-premium-green"
                  }
                `}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <span
                    className={`
                    text-lg sm:text-xl font-bold leading-[1.6] text-center
                    ${isBasic ? "text-secondary" : "text-brand-premium-green"}
                  `}
                  >
                    {step.number}
                  </span>
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="w-[3.125rem] h-[3.125rem] rounded-sm flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={step.icon}
                    alt={`${step.title} 아이콘`}
                    className="w-[3.125rem] h-[3.125rem] object-contain text-white stroke-white"
                    unoptimized
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex flex-col gap-2 flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <h3
                    className={`
                    text-lg sm:text-xl font-bold leading-[1.6]
                    ${isBasic ? "text-secondary" : "text-brand-premium-green"}
                  `}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`
                    text-xs sm:text-sm leading-[1.6]
                    ${isBasic ? "text-text-primary" : "text-brand-dark-text"}
                  `}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>

              {/* Arrows */}
              <>
                {/* Right arrows for normal flow rows */}
                {arrows.base.showRight && (
                  <motion.div
                    className="absolute top-1/2 -right-[1.3rem] transform -translate-y-1/2 z-10 block sm:hidden"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
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
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
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
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
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
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
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
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
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
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
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
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
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
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
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
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
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
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                  </motion.div>
                )}
                {arrows.xl.showDown && (
                  <motion.div
                    className="absolute -bottom-[2.8rem] left-1/2 transform -translate-x-1/2 rotate-90 z-10 hidden xl:block"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <ChevronRight className="w-6 h-6 text-gradient-blue-middle stroke-2" />
                  </motion.div>
                )}
              </>
            </motion.div>
          );
        })}

        {/* Service Type Cards - As 12th item in grid */}
        <motion.div
          className="relative service-cards"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex flex-col gap-4 p-2 rounded-[1.4375rem] w-full min-h-[16rem] sm:min-h-[19.25rem]">
            {/* Basic Care */}
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-brand-card-blue rounded-[3.125rem] px-4 py-1 w-fit">
                <span className="text-xs text-secondary font-bold">
                  베이직 케어
                </span>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-text-primary">
                    3개월마다 권장되는 건식 청소 코스
                  </p>
                  <p className="text-xs text-text-primary">
                    가구 각질, 미세먼지, 진드기 제거
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Premium Care */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-4">
                <div className="bg-brand-card-green rounded-[3.125rem] px-4 py-1 w-fit">
                  <span className="text-xs text-brand-premium-green font-bold">
                    프리미엄 케어
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-text-primary">
                    6개월마다 권장되는 건습식 클리닝
                  </p>
                  <p className="text-xs text-text-primary">
                    풀 케어 서비스로 오염, 얼룩, 찌든 때 제거
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.9,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/apply-service"
                  className="bg-accent hover:bg-secondary text-white font-bold text-base rounded-[3.125rem] px-6 py-2 flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 transition-colors w-fit"
                >
                  <span>지금 신청하기</span>
                  <div className="bg-white rounded-full p-2">
                    <Image src={arrowRightIcon} alt="arrow-right" />
                  </div>
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;
