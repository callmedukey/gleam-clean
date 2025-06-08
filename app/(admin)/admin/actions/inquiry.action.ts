"use server";

import { unlink } from "fs/promises";
import { join } from "path";
import { revalidatePath } from "next/cache";

import { auth } from "@/auth";
import { prisma } from "@/prisma/prisma-client";

export interface ActionResult {
  success: boolean;
  message: string;
}

export async function toggleInquiryReadStatus(
  inquiryId: string
): Promise<ActionResult> {
  try {
    const session = await auth();
    if (!session?.user) {
      return {
        success: false,
        message: "로그인이 필요합니다.",
      };
    }

    // Get current inquiry to toggle its read status
    const inquiry = await prisma.inquiry.findUnique({
      where: { id: inquiryId },
      select: { read: true },
    });

    if (!inquiry) {
      return {
        success: false,
        message: "문의를 찾을 수 없습니다.",
      };
    }

    // Toggle the read status
    await prisma.inquiry.update({
      where: { id: inquiryId },
      data: { read: !inquiry.read },
    });

    revalidatePath("/admin");

    return {
      success: true,
      message: inquiry.read
        ? "읽지 않음으로 변경되었습니다."
        : "읽음으로 변경되었습니다.",
    };
  } catch (error) {
    console.error("Toggle inquiry read status error:", error);
    return {
      success: false,
      message: "상태 변경 중 오류가 발생했습니다.",
    };
  }
}

export async function deleteInquiry(inquiryId: string): Promise<ActionResult> {
  try {
    const session = await auth();
    if (!session?.user) {
      return {
        success: false,
        message: "로그인이 필요합니다.",
      };
    }

    // First, fetch the inquiry with its associated images
    const inquiry = await prisma.inquiry.findUnique({
      where: { id: inquiryId },
      include: {
        images: true,
      },
    });

    if (!inquiry) {
      return {
        success: false,
        message: "문의를 찾을 수 없습니다.",
      };
    }

    // Delete associated image files from filesystem
    if (inquiry.images.length > 0) {
      const uploadDir = join(process.cwd(), "public", "uploads");

      for (const image of inquiry.images) {
        try {
          // Extract filename from URL (remove /uploads/ prefix)
          const fileName = image.url.replace("/uploads/", "");
          const filePath = join(uploadDir, fileName);

          // Delete the file from filesystem
          await unlink(filePath);
        } catch (fileError) {
          // Log the error but don't fail the entire operation
          // The file might already be deleted or not exist
          console.warn(`파일 삭제 실패: ${image.url}`, fileError);
        }
      }
    }

    // Delete the inquiry from database (this will cascade delete the image records)
    await prisma.inquiry.delete({
      where: { id: inquiryId },
    });

    revalidatePath("/admin");

    return {
      success: true,
      message: "문의가 삭제되었습니다.",
    };
  } catch (error) {
    console.error("Delete inquiry error:", error);
    return {
      success: false,
      message: "문의 삭제 중 오류가 발생했습니다.",
    };
  }
}
