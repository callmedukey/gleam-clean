"server only";

import { prisma } from "@/prisma/prisma-client";

export async function getOffices() {
  try {
    const offices = await prisma.office.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return offices;
  } catch (error) {
    console.error("지점 목록 조회 오류:", error);
    throw new Error("지점 목록을 불러오는데 실패했습니다");
  }
}
