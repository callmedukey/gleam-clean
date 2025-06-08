"use client";

import * as motion from "motion/react-client";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";

import { loadAllBlogPosts } from "../actions/blog.action";
import type { BlogPost } from "../types/blog";

interface LoadMoreButtonProps {
  onLoadAll: (posts: BlogPost[]) => void;
  hasMorePosts: boolean;
}

export function LoadMoreButton({
  onLoadAll,
  hasMorePosts,
}: LoadMoreButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = () => {
    startTransition(async () => {
      try {
        setError(null);
        const result = await loadAllBlogPosts();

        if (result.success) {
          onLoadAll(result.posts);
        } else {
          setError(result.error || "알 수 없는 오류가 발생했습니다");
        }
      } catch (err) {
        setError("블로그 포스트를 불러오는데 실패했습니다");
        console.error("Load all posts error:", err);
      }
    });
  };

  if (!hasMorePosts) {
    return null;
  }

  return (
    <motion.div
      className="flex flex-col items-center mt-12 sm:mt-14 lg:mt-16 space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Button
        variant="outline"
        className="px-8 py-3 rounded-btn border-primary text-primary hover:bg-primary hover:text-white transition-colors disabled:opacity-50"
        onClick={handleLoadAll}
        disabled={isPending}
      >
        {isPending ? "로딩 중..." : "모두 보기"}
      </Button>

      {error && <p className="text-sm text-red-500 text-center">{error}</p>}
    </motion.div>
  );
}
