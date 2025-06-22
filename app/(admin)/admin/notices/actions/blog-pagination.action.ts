"use server";

import { getBlogPostsPaginated } from "../query/blogs.query";

export async function loadBlogPostsPage(page: number) {
  try {
    const posts = await getBlogPostsPaginated(page, 9);
    return { success: true as const, posts };
  } catch (error) {
    console.error("블로그 포스트 페이지 로드 오류:", error);
    return {
      success: false as const,
      posts: [],
      error: "블로그 포스트를 불러오는데 실패했습니다",
    };
  }
}