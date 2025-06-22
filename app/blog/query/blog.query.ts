"server only";

import { prisma } from "@/prisma/prisma-client";

export async function getPublishedBlogPosts() {
  try {
    const blogPosts = await prisma.blogPost.findMany({
      where: {
        published: true,
      },
      include: {
        image: true,
      },
      orderBy: [
        { order: "asc" },
        { createdAt: "desc" },
      ],
    });

    return blogPosts.map((post) => ({
      id: post.id,
      title: post.title,
      description:
        post.content.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
      category: post.badge,
      image: post.image?.url || "/placeholder-blog-1.jpg",
      url: post.url,
    }));
  } catch (error) {
    console.error("공개 블로그 포스트 조회 오류:", error);
    throw new Error("블로그 포스트를 불러오는데 실패했습니다");
  }
}

export async function getPublishedBlogPostsWithLimit(limit?: number) {
  try {
    const blogPosts = await prisma.blogPost.findMany({
      where: {
        published: true,
      },
      include: {
        image: true,
      },
      orderBy: [
        { order: "asc" },
        { createdAt: "desc" },
      ],
      ...(limit && { take: limit }),
    });

    return blogPosts.map((post) => ({
      id: post.id,
      title: post.title,
      description:
        post.content.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
      category: post.badge,
      image: post.image?.url || "/placeholder-blog-1.jpg",
      url: post.url,
    }));
  } catch (error) {
    console.error("공개 블로그 포스트 조회 오류:", error);
    throw new Error("블로그 포스트를 불러오는데 실패했습니다");
  }
}

export async function getPublishedBlogPostsCount() {
  try {
    const count = await prisma.blogPost.count({
      where: {
        published: true,
      },
    });

    return count;
  } catch (error) {
    console.error("공개 블로그 포스트 개수 조회 오류:", error);
    throw new Error("블로그 포스트 개수를 불러오는데 실패했습니다");
  }
}

export async function getPublishedBlogPostsPaginated(page: number, pageSize: number = 9) {
  try {
    const skip = (page - 1) * pageSize;
    
    const blogPosts = await prisma.blogPost.findMany({
      where: {
        published: true,
      },
      include: {
        image: true,
      },
      orderBy: [
        { order: "asc" },
        { createdAt: "desc" },
      ],
      skip,
      take: pageSize,
    });

    return blogPosts.map((post) => ({
      id: post.id,
      title: post.title,
      description:
        post.content.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
      category: post.badge,
      image: post.image?.url || "/placeholder-blog-1.jpg",
      url: post.url,
    }));
  } catch (error) {
    console.error("공개 블로그 포스트 페이지네이션 조회 오류:", error);
    throw new Error("블로그 포스트를 불러오는데 실패했습니다");
  }
}
