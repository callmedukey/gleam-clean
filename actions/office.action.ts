"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/prisma/prisma-client";
import {
  createOfficeSchema,
  updateOfficeSchema,
  deleteOfficeSchema,
  type CreateOfficeInput,
  type UpdateOfficeInput,
  type DeleteOfficeInput,
} from "@/validations/office.schema";

export async function createOffice(data: CreateOfficeInput) {
  try {
    const validatedData = createOfficeSchema.parse(data);

    const office = await prisma.office.create({
      data: validatedData,
    });

    revalidatePath("/admin/offices");
    revalidatePath("/offices");

    return {
      success: true,
      message: "지점가 성공적으로 생성되었습니다",
      data: office,
    };
  } catch (error) {
    console.error("지점 생성 오류:", error);
    return {
      success: false,
      message: "지점 생성에 실패했습니다",
    };
  }
}

export async function updateOffice(data: UpdateOfficeInput) {
  try {
    const validatedData = updateOfficeSchema.parse(data);
    const { id, ...updateData } = validatedData;

    const office = await prisma.office.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/offices");
    revalidatePath("/offices");

    return {
      success: true,
      message: "지점가 성공적으로 수정되었습니다",
      data: office,
    };
  } catch (error) {
    console.error("지점 수정 오류:", error);
    return {
      success: false,
      message: "지점 수정에 실패했습니다",
    };
  }
}

export async function deleteOffice(data: DeleteOfficeInput) {
  try {
    const validatedData = deleteOfficeSchema.parse(data);

    await prisma.office.delete({
      where: { id: validatedData.id },
    });

    revalidatePath("/admin/offices");
    revalidatePath("/offices");

    return {
      success: true,
      message: "지점가 성공적으로 삭제되었습니다",
    };
  } catch (error) {
    console.error("지점 삭제 오류:", error);
    return {
      success: false,
      message: "지점 삭제에 실패했습니다",
    };
  }
}
