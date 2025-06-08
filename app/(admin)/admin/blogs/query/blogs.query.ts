"server only";

import { prisma } from "@/prisma/prisma-client";

export async function getBlogPosts() {
  try {
    const blogPosts = await prisma.blogPost.findMany({
      include: {
        image: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return blogPosts;
  } catch (error) {
    console.error("블로그 포스트 목록 조회 오류:", error);
    throw new Error("블로그 포스트 목록을 불러오는데 실패했습니다");
  }
}

export async function getBlogPost(id: string) {
  try {
    const blogPost = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        image: true,
      },
    });

    return blogPost;
  } catch (error) {
    console.error("블로그 포스트 조회 오류:", error);
    throw new Error("블로그 포스트를 불러오는데 실패했습니다");
  }
}
