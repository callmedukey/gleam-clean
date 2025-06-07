"use client";

import * as motion from "motion/react-client";
import Link from "next/link";
import React from "react";

import { PhoneIcon, ClockIcon, MapPinIcon } from "./icons";

interface OfficeCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl?: string;
}

export const OfficeCard: React.FC<OfficeCardProps> = ({
  name,
  address,
  phone,
  hours,
  mapUrl = "#", // Default to # for now, can be updated when URLs are ready
}) => {
  return (
    <motion.div
      className="border border-primary rounded-lg p-8 lg:px-10 lg:py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-18"
      whileHover={{
        scale: 1.01,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Office Information */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-26 flex-1">
        {/* Office Name */}
        <div className="lg:w-[154px] flex-shrink-0">
          <h3 className="text-3xl font-bold text-primary text-center lg:text-left break-keep">
            {name}
          </h3>
        </div>

        {/* Office Details */}
        <div className="flex-1 space-y-2">
          {/* Address */}
          <p className="text-base text-text-primary leading-text break-keep">
            {address}
          </p>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
            {/* Phone */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <PhoneIcon className="w-6 h-6 text-text-primary flex-shrink-0" />
              <span className="text-base text-text-primary leading-text">
                {phone}
              </span>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ClockIcon className="w-6 h-6 text-text-primary flex-shrink-0" />
              <span className="text-base text-text-primary leading-text">
                {hours}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Link */}
      <div className="flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href={mapUrl}
            target="_blank"
            className="inline-flex items-center gap-1 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-lg px-4 py-2"
          >
            <MapPinIcon className="w-6 h-6" />
            <span className="text-base font-normal">지도보기</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
