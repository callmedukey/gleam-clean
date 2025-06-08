"use client";

import { useState } from "react";

import { BlogGrid } from "./blog-grid";
import { LoadMoreButton } from "./load-more-button";
import type { BlogPost } from "../types/blog";

interface BlogContentWrapperProps {
  initialPosts: BlogPost[];
  hasMorePosts: boolean;
}

export function BlogContentWrapper({
  initialPosts,
  hasMorePosts,
}: BlogContentWrapperProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [showAll, setShowAll] = useState(false);
  const [hasMore, setHasMore] = useState(hasMorePosts);

  const handleLoadAll = (allPosts: BlogPost[]) => {
    setPosts(allPosts);
    setShowAll(true);
    setHasMore(false);
  };

  return (
    <>
      <BlogGrid posts={posts} showAll={showAll} />
      <LoadMoreButton onLoadAll={handleLoadAll} hasMorePosts={hasMore} />
    </>
  );
}
