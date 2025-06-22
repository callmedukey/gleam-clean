"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

import InquiryDialog from "@/app/components/inquiry-dialog";

import InquiryOptionsDialog from "./inquiry-options-dialog";

const FloatingInquiryButton = () => {
  const [isInquiryDialogOpen, setIsInquiryDialogOpen] = useState(false);
  const [isOptionsDialogOpen, setIsOptionsDialogOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOptionsDialogOpen(true)}
        className="fixed bottom-8 right-4 sm:right-6 z-50 bg-accent text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-xl hover:shadow-2xl hover:bg-secondary transition-all hover:scale-105 flex items-center gap-2 group text-sm sm:text-base"
        aria-label="문의하기"
      >
        <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="font-medium">문의하기</span>
      </button>

      {/* Inquiry Options Dialog */}
      <InquiryOptionsDialog
        open={isOptionsDialogOpen}
        onOpenChange={setIsOptionsDialogOpen}
        onSelectOneOnOne={() => {
          setIsOptionsDialogOpen(false);
          setIsInquiryDialogOpen(true);
        }}
      />

      {/* Inquiry Dialog */}
      <InquiryDialog
        open={isInquiryDialogOpen}
        onOpenChange={setIsInquiryDialogOpen}
      />
    </>
  );
};

export default FloatingInquiryButton;