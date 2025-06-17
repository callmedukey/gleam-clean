import * as motion from "motion/react-client";
import Image from "next/image";

// Import images
import allergenIcon from "@/public/icons/care-banner/allergen.svg";
import deepDustIcon from "@/public/icons/care-banner/deep-dust.svg";
import dustMiteIcon from "@/public/icons/care-banner/dust-mite.svg";
import fineDustIcon from "@/public/icons/care-banner/fine-dust.svg";
import petHairIcon from "@/public/icons/care-banner/pet-hair.svg";
import skinFlakesIcon from "@/public/icons/care-banner/skin-flakes.svg";

const pollutants = [
  {
    icon: fineDustIcon,
    label: "미세먼지 및 초미세먼지",
  },
  {
    icon: dustMiteIcon,
    label: "집먼지진드기",
  },
  {
    icon: deepDustIcon,
    label: "깊숙한 틈새 먼지",
  },
  {
    icon: petHairIcon,
    label: "반려동물의 털",
  },
  {
    icon: allergenIcon,
    label: "알레르기 유발 물질",
  },
  {
    icon: skinFlakesIcon,
    label: "피부 각질과 비듬",
  },
];

const CareBanner = () => {
  return (
    <motion.section
      className="w-full bg-[#E4F6FF] py-10 px-4 md:px-8 lg:px-[133px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-[#166DA3] text-xl md:text-2xl lg:text-[27.65px] font-bold leading-[1.6] mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          건식 케어로 제거 가능한 주요 오염물질
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-[30px]">
          {pollutants.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-6 w-full max-w-[170px] mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center text-[#166DA3] text-sm md:text-base leading-[1.6] min-h-[38px] flex items-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CareBanner;
