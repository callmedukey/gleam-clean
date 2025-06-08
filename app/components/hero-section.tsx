"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ServiceSelectionDialog from "@/app/components/service-selection-dialog";
import HeroImage from "@/public/images/hero-main.png";
import ArrowRight from "@/public/images/icons/arrow-right.svg";
import LogoImage from "@/public/images/logo-icon.png";

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="w-full bg-white">
      {/* Main Hero Content */}
      <div className="flex flex-col items-center justify-center px-4 py-16">
        {/* Main Heading */}
        <motion.div
          className="flex flex-col items-center gap-2 mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1
            className="text-lg sm:text-xl lg:text-xl font-bold text-text-primary text-center leading-text break-keep"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            고객의 공간을 깨끗하고 청결하게 Cleaning for a better tomorrow.
          </motion.h1>

          {/* Highlighted Service Line */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <motion.span
              className="text-3xl sm:text-5xl lg:text-5xl font-black text-text-primary leading-text break-keep"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              나에게 <span className="text-accent">딱! 맞는</span>
            </motion.span>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }}
              viewport={{ once: true }}
            >
              <div className="w-32 h-16 relative sm:w-52">
                {/* Gradient line */}
                <motion.div
                  className="absolute top-8 left-0 w-20 h-1 bg-gradient-to-r from-white via-accent to-accent rounded-full sm:w-40"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "left" }}
                />
                {/* Logo */}
                <motion.div
                  className="absolute top-0 right-0"
                  initial={{ opacity: 0, rotate: -180, scale: 0 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: "backOut" }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={LogoImage}
                    alt="글림케어 로고"
                    width={64}
                    height={64}
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.span
              className="text-3xl sm:text-5xl lg:text-5xl font-black text-text-primary leading-text break-keep text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-accent">맞춤형 </span>
              청소 서비스
            </motion.span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center max-w-6xl mx-auto relative h-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="w-full h-4 border-accent border-t-2 rounded-t-4xl"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "center" }}
          />
          <motion.div
            className="absolute top-0 bottom-0 bg-white px-4 sm:translate-x-36"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href="/apply-service"
                className="flex items-center gap-6 bg-accent text-white py-btn-y rounded-btn font-bold text-lg sm:text-xl leading-text hover:bg-secondary transition-colors sm:px-btn-x px-8"
              >
                <span>지금 신청하기</span>
                <motion.div
                  className="bg-white rounded-full p-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={ArrowRight}
                    alt="arrow-right"
                    className="w-6 h-4 text-accent"
                    unoptimized
                  />
                </motion.div>
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Image with Dialog */}
        <motion.div
          className="max-w-6xl mx-auto sm:px-6 mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={() => setIsDialogOpen(true)}
          >
            <Image
              src={HeroImage}
              alt="hero-image"
              className="w-full h-full object-cover"
              quality={100}
            />
          </motion.div>
        </motion.div>

        {/* Service Selection Dialog */}
        <ServiceSelectionDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      </div>
    </section>
  );
}
