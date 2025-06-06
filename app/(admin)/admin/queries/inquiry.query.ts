import "server-only";
import { InquiryType } from "@/prisma/generated/prisma";
import { prisma } from "@/prisma/prisma-client";

export interface InquiryBasic {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: InquiryType;
  read: boolean;
  createdAt: Date;
}

export async function getInquiries(page: number = 1, limit: number = 10) {
  const skip = (page - 1) * limit;

  // Get the last 100 inquiries first, then paginate within those
  const recentInquiries = await prisma.inquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 100,
    select: {
      id: true,
    },
  });

  const recentIds = recentInquiries.map((inquiry) => inquiry.id);

  const [inquiries, total] = await Promise.all([
    prisma.inquiry.findMany({
      where: {
        id: {
          in: recentIds,
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        type: true,
        read: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    }),
    Promise.resolve(Math.min(recentInquiries.length, 100)),
  ]);

  return {
    inquiries: inquiries as InquiryBasic[],
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
  };
}
