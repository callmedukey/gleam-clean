import * as motion from "motion/react-client";
import React, { Suspense } from "react";

import { BlogCard } from "./blog-card";
import { BlogCardSkeleton } from "./blog-card-skeleton";
import type { BlogPost } from "../types/blog";

interface BlogGridProps {
  posts: BlogPost[];
}

function BlogGridContent({ posts }: BlogGridProps) {
  return (
    <motion.div
      className="space-y-12 sm:space-y-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* First row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
        {posts.slice(0, 3).map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
        {posts.slice(3, 6).map((post, index) => (
          <BlogCard key={post.id} post={post} index={index + 3} />
        ))}
      </div>
    </motion.div>
  );
}

function BlogGridSkeleton() {
  return (
    <div className="space-y-12 sm:space-y-14">
      {/* First row skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={`skeleton-1-${index}`} className="flex">
            <BlogCardSkeleton />
          </div>
        ))}
      </div>

      {/* Second row skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={`skeleton-2-${index}`} className="flex">
            <BlogCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <Suspense fallback={<BlogGridSkeleton />}>
      <BlogGridContent posts={posts} />
    </Suspense>
  );
}
