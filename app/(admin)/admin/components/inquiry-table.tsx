import { format } from "date-fns";
import { ko } from "date-fns/locale";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { InquiryType } from "@/prisma/generated/prisma";

import {
  ClickableReadStatusBadge,
  InquiryActionButtons,
} from "./inquiry-actions";
import { InquiryPagination } from "./inquiry-pagination";
import { getInquiries } from "../queries/inquiry.query";

interface InquiryTableProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

function InquiryTypeBadge({ type }: { type: InquiryType }) {
  const getTypeLabel = (type: InquiryType) => {
    switch (type) {
      case InquiryType.QUOTE:
        return "견적";
      case InquiryType.OTHER:
        return "기본";
      case InquiryType.EDUCATION:
        return "교육";
      default:
        return "기본";
    }
  };

  const getVariant = (type: InquiryType) => {
    switch (type) {
      case InquiryType.QUOTE:
        return "default" as const;
      case InquiryType.EDUCATION:
        return "secondary" as const;
      case InquiryType.OTHER:
      default:
        return "outline" as const;
    }
  };

  return (
    <Badge
      variant={getVariant(type)}
      className={cn(
        "font-semibold text-white",
        type === InquiryType.OTHER && "text-black"
      )}
    >
      {getTypeLabel(type)}
    </Badge>
  );
}

export async function InquiryTable({ searchParams }: InquiryTableProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const limit = 10;

  const { inquiries, total, totalPages } = await getInquiries(
    currentPage,
    limit
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">문의 관리</h2>
          <p className="text-muted-foreground">
            최근 문의 내역을 확인하고 관리하세요.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          최근 {total}개의 문의
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>읽음상태</TableHead>
              <TableHead>유형</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>전화번호</TableHead>
              <TableHead>생성일</TableHead>
              <TableHead>작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  문의가 없습니다.
                </TableCell>
              </TableRow>
            ) : (
              inquiries.map((inquiry) => (
                <TableRow key={inquiry.id}>
                  <TableCell>
                    <ClickableReadStatusBadge
                      inquiryId={inquiry.id}
                      read={inquiry.read}
                    />
                  </TableCell>
                  <TableCell>
                    <InquiryTypeBadge type={inquiry.type} />
                  </TableCell>
                  <TableCell className="font-medium">{inquiry.name}</TableCell>
                  <TableCell>{inquiry.email}</TableCell>
                  <TableCell>{inquiry.phone}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {format(inquiry.createdAt, "yyyy.MM.dd", { locale: ko })}
                      <br />
                      <span className="text-muted-foreground">
                        {format(inquiry.createdAt, "HH:mm", { locale: ko })}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <InquiryActionButtons inquiryId={inquiry.id} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <InquiryPagination
        currentPage={currentPage}
        totalPages={totalPages}
        total={total}
      />
    </div>
  );
}
