"use server";

import { getPublishedBlogPosts } from "../query/blog.query";

export async function loadAllBlogPosts() {
  try {
    const allPosts = await getPublishedBlogPosts();
    return { success: true as const, posts: allPosts };
  } catch (error) {
    console.error("모든 블로그 포스트 로드 오류:", error);
    return {
      success: false as const,
      posts: [],
      error: "블로그 포스트를 불러오는데 실패했습니다",
    };
  }
}
