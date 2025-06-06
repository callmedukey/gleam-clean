"use server";

import { z } from "zod";

import {
  educationInquirySchema,
  type EducationInquiryFormData,
} from "@/form-schema/inquiry.schema";
import { InquiryType } from "@/prisma/generated/prisma";
import { prisma } from "@/prisma/prisma-client";

export interface ActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitEducationInquiry(
  formData: EducationInquiryFormData
): Promise<ActionResult> {
  try {
    // Validate the form data
    const validatedData = educationInquirySchema.parse(formData);

    // Create the inquiry in the database
    await prisma.inquiry.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.contact,
        message: validatedData.message,
        type: InquiryType.EDUCATION,
        read: false,
      },
    });

    return {
      success: true,
      message: "교육 문의가 성공적으로 제출되었습니다.",
    };
  } catch (error) {
    console.error("Education inquiry submission error:", error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      error.errors.forEach((err) => {
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

    // Handle database or other errors
    return {
      success: false,
      message: "문의 제출 중 오류가 발생했습니다. 다시 시도해주세요.",
    };
  }
}
