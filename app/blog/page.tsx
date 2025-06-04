import * as motion from "motion/react-client";
import React from "react";

import { Button } from "@/components/ui/button";

import { BlogGrid } from "./components/blog-grid";

export const metadata = {
  title: "최신 소식",
  description: "최신 소식",
};

export const dynamic = "force-dynamic";

// Mock blog data based on Figma design
const blogPosts = [
  {
    id: 1,
    title: "클리닝 서비스의 중요성",
    description: "정기적인 클리닝으로 건강한 생활 환경을 유지하세요.",
    category: "소식",
    image: "/placeholder-blog-1.jpg",
    url: "/blog/cleaning-service-importance",
  },
  {
    id: 2,
    title: "에어컨 청소의 필요성",
    description: "에어컨 청소로 쾌적한 여름을 준비하세요.",
    category: "소식",
    image: "/placeholder-blog-2.jpg",
    url: "/blog/air-conditioner-cleaning-necessity",
  },
  {
    id: 3,
    title: "입주 청소의 중요성",
    description: "새 집에서의 첫 인상을 좋게 만드세요.",
    category: "소식",
    image: "/placeholder-blog-3.jpg",
    url: "/blog/move-in-cleaning-importance",
  },
  {
    id: 4,
    title: "클리닝 서비스의 중요성",
    description: "정기적인 클리닝으로 건강한 생활 환경을 유지하세요.",
    category: "소식",
    image: "/placeholder-blog-1.jpg",
    url: "/blog/cleaning-service-importance-2",
  },
  {
    id: 5,
    title: "에어컨 청소의 필요성",
    description: "에어컨 청소로 쾌적한 여름을 준비하세요.",
    category: "소식",
    image: "/placeholder-blog-2.jpg",
    url: "/blog/air-conditioner-cleaning-necessity-2",
  },
  {
    id: 6,
    title: "입주 청소의 중요성",
    description: "새 집에서의 첫 인상을 좋게 만드세요.",
    category: "소식",
    image: "/placeholder-blog-3.jpg",
    url: "/blog/move-in-cleaning-importance-2",
  },
];

const page = async () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[77rem] mx-auto px-4 py-12 sm:py-16 lg:py-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-2 max-w-[48.125rem] mx-auto">
            <motion.p
              className="text-lg font-semibold text-primary leading-[1.6]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              블로그
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-4xl font-bold text-text-primary leading-[1.6] break-keep"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              최신 소식
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-text-primary leading-[1.5] break-keep px-4 font-roboto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              글림케어에서 진행 중인 새로운 프로젝트와 흥미로운 소식을 한눈에
              보기
            </motion.p>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <BlogGrid posts={blogPosts} />

        {/* View All Button */}
        <motion.div
          className="flex justify-center mt-12 sm:mt-14 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Button
            variant="outline"
            className="px-8 py-3 rounded-btn border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            모두 보기
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
