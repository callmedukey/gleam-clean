"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";

import { BlogGrid } from "./blog-grid";
import { loadBlogPostsPage } from "../actions/blog.action";
import type { BlogPost } from "../types/blog";

interface BlogContentWrapperProps {
  initialPosts: BlogPost[];
  totalPages: number;
  hasMorePages: boolean;
}

export function BlogContentWrapper({
  initialPosts,
  totalPages,
  hasMorePages,
}: BlogContentWrapperProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;

    startTransition(async () => {
      try {
        setError(null);
        const result = await loadBlogPostsPage(page);

        if (result.success) {
          setPosts(result.posts);
          setCurrentPage(page);
          // Scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          setError(result.error || "알 수 없는 오류가 발생했습니다");
        }
      } catch (err) {
        setError("블로그 포스트를 불러오는데 실패했습니다");
        console.error("Load page error:", err);
      }
    });
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          variant={i === currentPage ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(i)}
          disabled={isPending}
          className="w-10 h-10"
        >
          {i}
        </Button>
      );
    }

    return pages;
  };

  return (
    <>
      <BlogGrid posts={posts} showAll={true} />
      
      {hasMorePages && (
        <div className="flex flex-col items-center mt-12 space-y-4">
          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 || isPending}
              className="w-10 h-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {renderPageNumbers()}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || isPending}
              className="w-10 h-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            {currentPage} / {totalPages} 페이지
          </p>
        </div>
      )}
    </>
  );
}