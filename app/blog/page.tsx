import * as motion from "motion/react-client";
import React, { Suspense } from "react";

import { BlogContentWrapper } from "./components/blog-content-wrapper";
import {
  getPublishedBlogPostsWithLimit,
  getPublishedBlogPostsCount,
} from "./query/blog.query";

export const metadata = {
  title: "최신 소식",
  description: "최신 소식",
};

export const dynamic = "force-dynamic";

// Loading skeleton component
const BlogLoadingSkeleton = () => {
  return (
    <div className="space-y-8">
      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-lg p-6 animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Button skeleton */}
      <div className="flex justify-center mt-12">
        <div className="h-12 w-32 bg-gray-200 rounded-btn animate-pulse"></div>
      </div>
    </div>
  );
};

// Blog content component that handles data fetching
const BlogContent = async () => {
  const [initialPosts, totalCount] = await Promise.all([
    getPublishedBlogPostsWithLimit(9),
    getPublishedBlogPostsCount(),
  ]);

  const totalPages = Math.ceil(totalCount / 9);
  const hasMorePages = totalPages > 1;

  return (
    <BlogContentWrapper
      initialPosts={initialPosts}
      totalPages={totalPages}
      hasMorePages={hasMorePages}
    />
  );
};

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
              소식 및 공지사항
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

        {/* Suspense wrapped content */}
        <Suspense fallback={<BlogLoadingSkeleton />}>
          <BlogContent />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
