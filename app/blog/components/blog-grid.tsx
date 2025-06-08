import * as motion from "motion/react-client";
import React, { Suspense } from "react";

import { BlogCard } from "./blog-card";
import { BlogCardSkeleton } from "./blog-card-skeleton";
import type { BlogPost } from "../types/blog";

interface BlogGridProps {
  posts: BlogPost[];
  showAll?: boolean;
}

function BlogGridContent({ posts, showAll = false }: BlogGridProps) {
  // If showAll is false, only show first 6 posts in the original layout
  if (!showAll) {
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

  // If showAll is true, display all posts in a continuous grid
  const rows = [];
  for (let i = 0; i < posts.length; i += 3) {
    rows.push(posts.slice(i, i + 3));
  }

  return (
    <motion.div
      className="space-y-12 sm:space-y-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr"
        >
          {row.map((post, index) => (
            <BlogCard key={post.id} post={post} index={rowIndex * 3 + index} />
          ))}
        </div>
      ))}
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

export function BlogGrid({ posts, showAll = false }: BlogGridProps) {
  return (
    <Suspense fallback={<BlogGridSkeleton />}>
      <BlogGridContent posts={posts} showAll={showAll} />
    </Suspense>
  );
}
