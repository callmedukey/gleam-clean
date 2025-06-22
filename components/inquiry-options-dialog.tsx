"use client";

import { MessageCircle, UserCheck } from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InquiryOptionsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectOneOnOne: () => void;
}

const InquiryOptionsDialog = ({
  open,
  onOpenChange,
  onSelectOneOnOne,
}: InquiryOptionsDialogProps) => {
  const handleOneOnOneClick = () => {
    onOpenChange(false);
    onSelectOneOnOne();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            문의 방법을 선택해주세요
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <button
            onClick={handleOneOnOneClick}
            className="flex items-center gap-4 p-6 rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group"
          >
            <UserCheck className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <h3 className="font-semibold text-lg">1:1 맞춤 상담</h3>
              <p className="text-sm text-muted-foreground mt-1">
                전문 상담사가 맞춤형 견적을 제공합니다
              </p>
            </div>
          </button>

          <Link
            href="http://pf.kakao.com/_NxhKan/chat"
            target="_blank"
            onClick={() => onOpenChange(false)}
            className="flex items-center gap-4 p-6 rounded-lg border-2 border-gray-200 hover:border-[#FAE100] hover:bg-[#FAE100]/10 transition-all group"
          >
            <MessageCircle className="w-8 h-8 text-[#3A1D1D] group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <h3 className="font-semibold text-lg">실시간 카카오톡 문의</h3>
              <p className="text-sm text-muted-foreground mt-1">
                카카오톡으로 빠르게 상담받으세요
              </p>
            </div>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryOptionsDialog;