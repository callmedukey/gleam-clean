import * as motion from "motion/react-client";
import React from "react";

import { getOffices } from "@/app/(admin)/admin/offices/query/offices.query";

import { OfficeCard } from "./office-card";

// const officesData = [
//   {
//     id: 1,
//     name: "수원 본점",
//     address: "경기도 수원 권선구 금곡로 219, 리더스빌딩 709호",
//     phone: "0507-1366-9797",
//     hours: "09:00 ~ 21:00",
//     mapUrl: "/map/suwon", // Placeholder URL - replace with actual map URL
//   },
//   {
//     id: 2,
//     name: "서울점",
//     address: "서울특별시 동대문구 장한로33길 19 3층",
//     phone: "0507-1366-9797",
//     hours: "08:30 ~ 22:00",
//     mapUrl: "/map/seoul", // Placeholder URL - replace with actual map URL
//   },
//   {
//     id: 3,
//     name: "파주점",
//     address: "경기 파주시 교하로159번길 33 3층 304호-P344",
//     phone: "0507-1366-9797",
//     hours: "09:00 ~ 22:00",
//     mapUrl: "/map/paju", // Placeholder URL - replace with actual map URL
//   },
//   {
//     id: 4,
//     name: "동탄점",
//     address: "경기 화성시 동탄지성로 11 714-B74호",
//     phone: "0507-1366-9797",
//     hours: "09:00 ~ 21:00",
//     mapUrl: "/map/dongtan", // Placeholder URL - replace with actual map URL
//   },
// ];

export const OfficesContent = async () => {
  const offices = await getOffices();
  return (
    <motion.div
      className="py-24 px-4 sm:px-8 lg:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1170px] mx-auto" style={{ gap: "6rem" }}>
        {/* Header Section */}
        <motion.div
          className="max-w-[770px] space-y-4 mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1
            className="text-4xl font-bold text-primary leading-text break-keep"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            서비스 가능 지역 및 지점 안내
          </motion.h1>
          <motion.p
            className="text-base text-text-primary leading-text break-keep"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            서비스 가능 지역과 지점 정보를 안내해 드립니다.
          </motion.p>
        </motion.div>

        {/* Offices List */}
        <div className="space-y-11">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <OfficeCard
                name={office.name}
                address={office.address}
                phone={office.phone}
                hours={office.hours}
                mapUrl={office.mapUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
