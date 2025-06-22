"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import InquiryDialog from "@/app/components/inquiry-dialog";
import BlogIcon from "@/public/icons/jt-naver-blog.svg";
import KakaoIcon from "@/public/icons/sns_kakao.svg";
import YoutubeIcon from "@/public/icons/sns_youtube.svg";
import LogoFooter from "@/public/images/logo-footer.png";

import FooterLegalLinks from "./footer-legal-links";

const Footer = () => {
  const [isInquiryDialogOpen, setIsInquiryDialogOpen] = useState(false);

  return (
    <>
      <footer className="px-4 py-8 sm:px-8 sm:py-12 lg:px-20 lg:py-16 **:break-keep bg-primary-foreground">
        <div className="max-w-screen-2xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16 mb-8">
            {/* Logo and Company Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-4 mx-auto lg:mx-0">
              {/* Logo */}
              <div className="relative justify-center sm:justify-start lg:hidden xl:block mx-auto lg:mx-0">
                <Image
                  src={LogoFooter}
                  alt="Logo"
                  className="w-48 h-36 sm:w-56 sm:h-42 lg:w-64 lg:h-48 object-contain"
                />
              </div>

              {/* Company Details */}
              <div className="flex flex-col gap-3 lg:gap-4 text-secondary text-center sm:text-left">
                <h3 className="font-semibold text-lg">글림케어</h3>

                <div className="flex flex-col gap-2 lg:gap-4">
                  {/* Business Registration */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="text-sm lg:text-base">
                      <span className="font-semibold">사업자번호 </span>
                      308-09-21300
                    </span>
                    <div className="hidden sm:block w-px h-4 bg-secondary" />
                    <span className="text-sm lg:text-base">
                      <span className="font-semibold">대표 </span>박기동
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-center">
                    <span className="text-sm lg:text-base">
                      <span className="font-semibold">주소 </span>경기도 수원
                      권선구 금곡로 219, 리더스빌딩 709호
                    </span>
                  </div>

                  {/* Email and Business License */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="text-sm lg:text-base whitespace-nowrap">
                      <span className="font-semibold">이메일 </span>
                      ubilis99@naver.com
                    </span>
                    <div className="hidden sm:block w-px h-4 bg-secondary" />
                    <span className="text-sm lg:text-base whitespace-nowrap">
                      <span className="font-semibold">통신판매업신고 </span>
                      제2024-수원권선-0806호
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact and Social */}
            <div className="flex flex-col items-center lg:items-end gap-4 lg:gap-6">
              {/* Customer Service */}
              <div className="flex flex-col items-center lg:items-end gap-2">
                <div className="flex flex-col items-center lg:items-end">
                  <span className="text-primary text-sm lg:text-base text-center lg:text-right">
                    CUSTOMER SERVICE
                  </span>
                  <div className="flex items-center gap-2 lg:gap-3 text-secondary">
                    <Phone
                      fill="currentColor"
                      className="w-5 h-5 lg:w-6 lg:h-6"
                    />
                    <span className="font-bold text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap">
                      0507-1366-9797
                    </span>
                  </div>
                  <span className="text-primary text-sm lg:text-base text-center lg:text-right">
                    영업시간 09:00 ~ 21:00
                  </span>
                </div>

                {/* Contact Button */}
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => setIsInquiryDialogOpen(true)}
                    className="bg-accent text-white px-4 py-1 lg:px-6 lg:py-1 rounded-full text-sm lg:text-base hover:bg-secondary transition-colors"
                  >
                    문의하기
                  </button>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-2">
                {/* Naver Blog */}
                <Link
                  href="https://blog.naver.com/ubilis_"
                  target="_blank"
                  className="w-8 h-8 lg:w-10 lg:h-10"
                >
                  <Image
                    src={BlogIcon}
                    alt="Blog"
                    className="w-full h-full"
                    unoptimized
                  />
                </Link>

                <Link
                  href="http://pf.kakao.com/_NxhKan/chat"
                  target="_blank"
                  className="w-8 h-8 lg:w-10 lg:h-10"
                >
                  <Image
                    src={KakaoIcon}
                    alt="Kakao"
                    className="w-full h-full"
                    unoptimized
                  />
                </Link>

                {/* YouTube */}
                <Link
                  href="https://www.youtube.com/@%EA%B8%80%EB%A6%BC%EC%BC%80%EC%96%B4"
                  target="_blank"
                  className="w-8 h-8 lg:w-10 lg:h-10"
                >
                  <Image
                    src={YoutubeIcon}
                    alt="Youtube"
                    className="w-full h-full"
                    unoptimized
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-2">
            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-t border-primary pt-2 opacity-80">
              <FooterLegalLinks />
              <p className="text-primary text-xs sm:text-sm text-center sm:text-right font-roboto">
                © 2025 GLEAMCARE. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Inquiry Dialog */}
      <InquiryDialog
        open={isInquiryDialogOpen}
        onOpenChange={setIsInquiryDialogOpen}
      />
    </>
  );
};

export default Footer;
