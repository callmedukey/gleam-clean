"use server";

import { mkdir, writeFile } from "fs/promises";
import { join } from "path";

import { createId } from "@paralleldrive/cuid2";

import { baseInquirySchema } from "@/form-schema/inquiry.schema";
import { InquiryType } from "@/prisma/generated/prisma";
import { prisma } from "@/prisma/prisma-client";

interface ActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitInquiry(
  formData: FormData,
  inquiryType: InquiryType = InquiryType.OTHER
): Promise<ActionResult> {
  try {
    // Extract form fields
    const data = {
      name: formData.get("name") as string,
      contact: formData.get("contact") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      consent: formData.get("consent") === "true",
    };

    // Validate form data
    const validationResult = baseInquirySchema.safeParse(data);

    if (!validationResult.success) {
      const errors: Record<string, string[]> = {};
      validationResult.error.errors.forEach((err) => {
        const path = err.path.join(".");
        if (!errors[path]) {
          errors[path] = [];
        }
        errors[path].push(err.message);
      });

      return {
        success: false,
        message: "입력 정보를 확인해주세요.",
        errors,
      };
    }

    // Handle photo uploads
    const photos = formData.getAll("photos") as File[];
    const uploadedImages: { url: string; width: number; height: number }[] = [];

    if (photos.length > 0) {
      // Create uploads directory if it doesn't exist
      const uploadDir = join(process.cwd(), "public", "uploads");

      // Ensure directory exists
      await mkdir(uploadDir, { recursive: true });

      for (const photo of photos) {
        if (photo && photo.size > 0) {
          // Validate file type
          if (!photo.type.startsWith("image/")) {
            return {
              success: false,
              message: "이미지 파일만 업로드 가능합니다.",
              errors: { photos: ["이미지 파일만 업로드 가능합니다."] },
            };
          }

          // Validate file size (5MB limit)
          if (photo.size > 5 * 1024 * 1024) {
            return {
              success: false,
              message: "파일 크기는 5MB 이하여야 합니다.",
              errors: { photos: ["파일 크기는 5MB 이하여야 합니다."] },
            };
          }

          // Generate unique filename
          const fileExtension = photo.name.split(".").pop() || "jpg";
          const fileName = `${createId()}.${fileExtension}`;
          const filePath = join(uploadDir, fileName);

          // Convert File to Buffer and save
          const bytes = await photo.arrayBuffer();
          const buffer = Buffer.from(bytes);

          await writeFile(filePath, buffer);

          // Add to uploaded images array
          // In a real application, you might want to get actual image dimensions
          uploadedImages.push({
            url: `/uploads/${fileName}`,
            width: 800, // Default width
            height: 600, // Default height
          });
        }
      }
    }

    // Create inquiry in database
    await prisma.inquiry.create({
      data: {
        name: validationResult.data.name,
        email: validationResult.data.email,
        phone: validationResult.data.contact,
        message: validationResult.data.message,
        type: inquiryType,
        images: {
          create: uploadedImages,
        },
      },
      include: {
        images: true,
      },
    });

    return {
      success: true,
      message:
        "문의가 성공적으로 제출되었습니다. 빠른 시일 내에 연락드리겠습니다.",
    };
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return {
      success: false,
      message: "문의 제출 중 오류가 발생했습니다. 다시 시도해주세요.",
    };
  }
}
