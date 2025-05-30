import * as motion from "motion/react-client";

function UnderHeroBanner() {
  return (
    <motion.section
      className="bg-accent w-full h-[13.5rem] flex flex-col justify-center items-center gap-2 px-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        className="text-white font-bold text-2xl sm:text-3xl leading-[1.6] text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        고민을 덜어주는 단 하나의 선택, GLEAM CARE
      </motion.h2>
      <motion.p
        className="text-white font-semibold text-base sm:text-lg leading-[1.6] text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        주기적인 서비스도 후회 없도록, 언제나 최선을 다하는 전문 청소 업체
      </motion.p>
    </motion.section>
  );
}

export default UnderHeroBanner;
