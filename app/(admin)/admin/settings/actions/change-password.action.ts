"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { auth } from "@/auth";
import { Role } from "@/prisma/generated/prisma";
import { prisma } from "@/prisma/prisma-client";

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "현재 비밀번호를 입력해주세요."),
    newPassword: z
      .string()
      .min(8, "새 비밀번호는 최소 8자 이상이어야 합니다.")
      .max(16, "새 비밀번호는 16자 이하여야 합니다.")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d).{8,16}$/,
        "새 비밀번호는 영문자와 숫자를 포함해야 합니다."
      ),
    confirmPassword: z.string().min(1, "비밀번호 확인을 입력해주세요."),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "새 비밀번호와 확인 비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

interface ChangePasswordState {
  error?: string;
  success?: boolean;
  fieldErrors?: {
    currentPassword?: string[];
    newPassword?: string[];
    confirmPassword?: string[];
  };
  inputs?: {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  };
}

export async function changePassword(
  prevState: ChangePasswordState,
  formData: FormData
): Promise<ChangePasswordState> {
  const formDataObj = {
    currentPassword: formData.get("currentPassword") as string,
    newPassword: formData.get("newPassword") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  try {
    // Check authentication and admin role
    const session = await auth();
    if (!session || session.user.role !== Role.ADMIN) {
      return {
        error: "관리자 권한이 필요합니다.",
      };
    }

    // Validate form data

    const validation = changePasswordSchema.safeParse(formDataObj);
    if (!validation.success) {
      return {
        fieldErrors: validation.error.flatten().fieldErrors,
        inputs: formDataObj,
      };
    }

    const { currentPassword, newPassword } = validation.data;

    // Get current user from database
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { id: true, password: true },
    });

    if (!user || !user.password) {
      return {
        error: "사용자를 찾을 수 없습니다.",
      };
    }

    // Verify current password
    const isCurrentPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isCurrentPasswordValid) {
      return {
        fieldErrors: {
          currentPassword: ["현재 비밀번호가 올바르지 않습니다."],
        },
        inputs: formDataObj,
      };
    }

    // Check if new password is different from current password
    const isSamePassword = await bcrypt.compare(newPassword, user.password);
    if (isSamePassword) {
      return {
        fieldErrors: {
          newPassword: ["새 비밀번호는 현재 비밀번호와 달라야 합니다."],
        },
        inputs: formDataObj,
      };
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update password in database
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedNewPassword },
    });

    // Revalidate the page
    revalidatePath("/admin/settings");

    return {
      success: true,
    };
  } catch (error) {
    console.error("Password change error:", error);
    return {
      error: "비밀번호 변경 중 오류가 발생했습니다. 다시 시도해주세요.",
      inputs: formDataObj,
    };
  }
}
