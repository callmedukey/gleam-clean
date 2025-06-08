"use client";

import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServiceSelectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
}

export default function ServiceSelectionDialog({
  open,
  onOpenChange,
  title = "서비스를 선택해주세요",
}: ServiceSelectionDialogProps) {
  const handleLinkClick = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-text-primary">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-6">
          <Link
            href="/mattress-sofa"
            className="flex items-center justify-center py-4 px-6 rounded-btn border border-primary text-primary font-medium text-lg hover:bg-primary hover:text-white transition-colors"
            onClick={handleLinkClick}
          >
            매트리스와 소파 청소
          </Link>
          <Link
            href="/air-conditioner"
            className="flex items-center justify-center py-4 px-6 rounded-btn border border-primary text-primary font-medium text-lg hover:bg-primary hover:text-white transition-colors"
            onClick={handleLinkClick}
          >
            에어컨 청소
          </Link>
          <Link
            href="/entry-cleaning"
            className="flex items-center justify-center py-4 px-6 rounded-btn border border-primary text-primary font-medium text-lg hover:bg-primary hover:text-white transition-colors"
            onClick={handleLinkClick}
          >
            입주 청소
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
