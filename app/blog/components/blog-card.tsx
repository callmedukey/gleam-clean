import { ChevronRight } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import React from "react";

import type { BlogPost } from "../types/blog";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex"
    >
      <Link
        href={post.url}
        className="bg-white rounded-lg overflow-hidden border-gray-100 flex flex-col w-full max-w-[23.125rem] h-full hover:shadow-md transition-shadow duration-200 group"
      >
        {/* Image placeholder - Fixed height */}
        <motion.div
          className="relative w-full h-[17rem] bg-gradient-to-br from-blue-100 to-blue-200 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <span className="text-sm">이미지 플레이스홀더</span>
          </div>
        </motion.div>

        {/* Content - Fixed height with flex layout */}
        <motion.div
          className="p-4 flex flex-col flex-1 gap-4 h-[12.4375rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.3,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          {/* Category badge */}
          <div className="flex items-start flex-shrink-0">
            <span className="inline-flex items-center px-6 py-1 rounded-full text-xs font-normal bg-accent text-white">
              {post.category}
            </span>
          </div>

          {/* Text content and button */}
          <div className="flex flex-col justify-between flex-1 gap-4 min-h-0">
            <div className="space-y-2 flex-1">
              <h3 className="text-xl font-bold text-text-primary leading-[1.6] break-keep line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-base text-text-primary leading-[1.6] break-keep line-clamp-2">
                {post.description}
              </p>
            </div>

            {/* Read more button */}
            <div className="inline-flex items-center gap-2 text-primary text-base font-normal group-hover:text-primary/80 transition-colors self-start flex-shrink-0">
              더 알아보기
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
