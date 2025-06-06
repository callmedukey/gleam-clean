"use client";

import { EyeIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  deleteInquiry,
  toggleInquiryReadStatus,
} from "../actions/inquiry.action";

interface ClickableReadStatusBadgeProps {
  inquiryId: string;
  read: boolean;
}

export function ClickableReadStatusBadge({
  inquiryId,
  read,
}: ClickableReadStatusBadgeProps) {
  const [isPending, startTransition] = useTransition();

  const handleToggleRead = () => {
    startTransition(async () => {
      const result = await toggleInquiryReadStatus(inquiryId);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <button
      onClick={handleToggleRead}
      disabled={isPending}
      className="transition-opacity hover:opacity-80 disabled:opacity-50"
    >
      <Badge
        variant={read ? "outline" : "default"}
        className={cn(
          "text-xs cursor-pointer",
          read ? "text-text-primary" : "text-white bg-red-800"
        )}
      >
        {read ? "읽음" : "읽지 않음"}
      </Badge>
    </button>
  );
}

interface InquiryActionButtonsProps {
  inquiryId: string;
}

export function InquiryActionButtons({ inquiryId }: InquiryActionButtonsProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("정말로 이 문의를 삭제하시겠습니까?")) {
      startTransition(async () => {
        const result = await deleteInquiry(inquiryId);
        if (result.success) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button asChild variant="outline" size="sm">
        <Link href={`/admin/${inquiryId}`}>
          <EyeIcon className="w-4 h-4" />
          자세히보기
        </Link>
      </Button>
      <Button
        variant="destructive"
        size="sm"
        onClick={handleDelete}
        disabled={isPending}
      >
        <Trash2Icon className="w-4 h-4" />
        삭제
      </Button>
    </div>
  );
}
