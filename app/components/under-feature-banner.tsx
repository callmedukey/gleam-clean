import * as motion from "motion/react-client";

function UnderFeatureBanner() {
  return (
    <motion.section
      className="bg-white w-full h-[13.5rem] flex flex-col justify-center items-center gap-2 px-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        className="text-secondary font-bold text-2xl sm:text-3xl lg:text-4xl leading-[1.6] text-center max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        고객이 기대하는 것 이상의 완벽한 서비스
      </motion.h2>
      <motion.p
        className="text-text-primary font-semibold text-base sm:text-lg leading-[1.6] text-center max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        믿음과 신뢰를 지키며, 언제나 그 가치를 증명하는 선택
      </motion.p>
    </motion.section>
  );
}

export default UnderFeatureBanner;
