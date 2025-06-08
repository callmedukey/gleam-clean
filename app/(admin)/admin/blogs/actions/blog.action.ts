"use server";

import { existsSync, mkdirSync } from "fs";
import { writeFile } from "fs/promises";
import { join } from "path";

import { revalidatePath } from "next/cache";

import { prisma } from "@/prisma/prisma-client";

export async function createBlogPost(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const badge = formData.get("badge") as string;
    const content = formData.get("content") as string;
    const url = formData.get("url") as string;
    const published = formData.get("published") === "true";
    const imageFile = formData.get("image") as File | null;

    // Check if URL already exists
    const existingPost = await prisma.blogPost.findFirst({
      where: { url },
    });

    if (existingPost) {
      throw new Error("이미 존재하는 URL입니다");
    }

    let imageData = null;
    if (imageFile && imageFile.size > 0) {
      // Create uploads directory if it doesn't exist
      const uploadsDir = join(process.cwd(), "public", "uploads", "blog");
      if (!existsSync(uploadsDir)) {
        mkdirSync(uploadsDir, { recursive: true });
      }

      // Generate unique filename
      const timestamp = Date.now();
      const fileExtension = imageFile.name.split(".").pop() || "jpg";
      const fileName = `${timestamp}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExtension}`;
      const filePath = join(uploadsDir, fileName);

      // Save file to disk
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(filePath, buffer);

      // Create image URL that will be served by the API route
      const imageUrl = `/api/images/blog/${fileName}`;

      imageData = {
        url: imageUrl,
        width: 800, // You would get these from the actual image
        height: 600,
      };
    }

    const blogPost = await prisma.blogPost.create({
      data: {
        title,
        badge,
        content,
        url,
        published,
        ...(imageData && {
          image: {
            create: imageData,
          },
        }),
      },
    });

    revalidatePath("/admin/blogs");
    revalidatePath("/blog");

    return blogPost;
  } catch (error) {
    console.error("블로그 포스트 생성 오류:", error);
    throw new Error("블로그 포스트 생성에 실패했습니다");
  }
}

export async function updateBlogPost(formData: FormData) {
  try {
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const badge = formData.get("badge") as string;
    const content = formData.get("content") as string;
    const url = formData.get("url") as string;
    const published = formData.get("published") === "true";
    const imageFile = formData.get("image") as File | null;

    // Check if URL already exists for other posts
    const existingPost = await prisma.blogPost.findFirst({
      where: {
        url,
        NOT: { id },
      },
    });

    if (existingPost) {
      throw new Error("이미 존재하는 URL입니다");
    }

    let imageData = null;
    if (imageFile && imageFile.size > 0) {
      // Create uploads directory if it doesn't exist
      const uploadsDir = join(process.cwd(), "public", "uploads", "blog");
      if (!existsSync(uploadsDir)) {
        mkdirSync(uploadsDir, { recursive: true });
      }

      // Generate unique filename
      const timestamp = Date.now();
      const fileExtension = imageFile.name.split(".").pop() || "jpg";
      const fileName = `${timestamp}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExtension}`;
      const filePath = join(uploadsDir, fileName);

      // Save file to disk
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(filePath, buffer);

      // Create image URL that will be served by the API route
      const imageUrl = `/api/images/blog/${fileName}`;

      imageData = {
        url: imageUrl,
        width: 800,
        height: 600,
      };
    }

    const blogPost = await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        badge,
        content,
        url,
        published,
        ...(imageData && {
          image: {
            upsert: {
              create: imageData,
              update: imageData,
            },
          },
        }),
      },
    });

    revalidatePath("/admin/blogs");
    revalidatePath("/blog");

    return blogPost;
  } catch (error) {
    console.error("블로그 포스트 수정 오류:", error);
    throw new Error("블로그 포스트 수정에 실패했습니다");
  }
}

export async function deleteBlogPost(id: string) {
  try {
    await prisma.blogPost.delete({
      where: { id },
    });

    revalidatePath("/admin/blogs");
    revalidatePath("/blog");
  } catch (error) {
    console.error("블로그 포스트 삭제 오류:", error);
    throw new Error("블로그 포스트 삭제에 실패했습니다");
  }
}

export async function toggleBlogPostPublished(id: string) {
  try {
    const blogPost = await prisma.blogPost.findUnique({
      where: { id },
    });

    if (!blogPost) {
      throw new Error("블로그 포스트를 찾을 수 없습니다");
    }

    const updatedPost = await prisma.blogPost.update({
      where: { id },
      data: {
        published: !blogPost.published,
      },
    });

    revalidatePath("/admin/blogs");
    revalidatePath("/blog");

    return updatedPost;
  } catch (error) {
    console.error("블로그 포스트 게시 상태 변경 오류:", error);
    throw new Error("블로그 포스트 게시 상태 변경에 실패했습니다");
  }
}
