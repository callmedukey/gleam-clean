"use client";

import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import LogoImage from "@/public/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to check if a link is active
  const isActiveLink = (href: string) => pathname === href;

  return (
    <header className="w-full bg-white shadow-header">
      <div className="flex items-center justify-between px-header py-header-y">
        {/* Logo */}
        <Link href="/">
          <Image src={LogoImage} alt="로고" className="w-logo" priority />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-0">
          {/* 서비스 안내 - Dropdown */}
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-nav px-nav-x py-nav-y rounded text-text-primary font-normal text-base leading-text hover:bg-gray-50 transition-colors w-nav-service justify-center">
                <span className="w-nav-service-text text-center whitespace-nowrap">
                  서비스 안내
                </span>
                <ChevronDown className="w-icon h-icon text-text-primary" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>
                <Link
                  href="/mattress-sofa"
                  className={`w-full hover:text-white transition-colors duration-100 ${
                    isActiveLink("/mattress-sofa") ? "text-primary" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  매트리스와 소파 청소
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/air-conditioner"
                  className={`w-full hover:text-white transition-colors duration-100 ${
                    isActiveLink("/air-conditioner") ? "text-primary" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  에어컨 청소
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/entry-cleaning"
                  className={`w-full hover:text-white transition-colors duration-100 ${
                    isActiveLink("/entry-cleaning") ? "text-primary" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  입주 청소
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 서비스 신청 */}
          <button className="flex items-center gap-nav px-nav-x py-nav-y rounded text-text-primary font-normal text-base leading-text hover:bg-gray-50 transition-colors w-nav-default justify-center">
            <Link href="/apply-service">
              <span
                className={`text-center whitespace-nowrap ${
                  isActiveLink("/apply-service") ? "text-primary" : ""
                }`}
              >
                서비스 신청
              </span>
            </Link>
          </button>

          {/* 최신 소식 */}
          <button className="flex items-center gap-nav px-nav-x py-nav-y rounded text-text-primary font-normal text-base leading-text hover:bg-gray-50 transition-colors w-nav-default justify-center">
            <Link
              href="/blog"
              className={`text-center ${
                isActiveLink("/blog") ? "text-primary" : ""
              }`}
            >
              최신 소식
            </Link>
          </button>

          {/* 교육 문의 */}
          <button className="flex items-center gap-nav px-nav-x py-nav-y rounded text-text-primary font-normal text-base leading-text hover:bg-gray-50 transition-colors">
            <Link
              href="/education-inquiry"
              className={`text-center ${
                isActiveLink("/education-inquiry") ? "text-primary" : ""
              }`}
            >
              교육 문의
            </Link>
          </button>

          {/* Action Buttons */}
          <div className="flex items-center gap-nav px-action-x ml-action">
            {/* 지점 찾기 - Outline Button */}
            <button className="flex items-center justify-center gap-2 px-btn-x py-btn-y rounded-btn border border-primary text-primary font-normal text-base leading-text hover:bg-primary hover:text-white transition-colors">
              <Link
                href="/offices"
                className={cn(isActiveLink("/offices") ? "text-primary" : "")}
              >
                지점 찾기
              </Link>
            </button>

            {/* 예약 - Filled Button */}
            <Link
              href="/apply-service"
              className="flex items-center justify-center gap-2 px-btn-x py-btn-y rounded-btn bg-accent text-white font-normal text-base leading-text hover:bg-secondary transition-colors"
            >
              <span className="w-btn-text text-center">예약</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button className="lg:hidden p-2 rounded-md hover:bg-gray-50 transition-colors">
              <Menu className="w-6 h-6 text-text-primary" />
              <span className="sr-only">메뉴 열기</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 px-4">
            <SheetHeader>
              <SheetTitle className="text-left text-text-primary">
                메뉴
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              {/* 서비스 안내 섹션 */}
              <div className="space-y-2">
                <h3 className="font-medium text-text-primary text-base">
                  서비스 안내
                </h3>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/mattress-sofa"
                    className={`block py-2 text-sm hover:text-secondary transition-colors ${
                      isActiveLink("/mattress-sofa")
                        ? "text-primary"
                        : "text-text-primary"
                    }`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    매트리스와 소파 청소
                  </Link>
                  <Link
                    href="/air-conditioner"
                    className={`block py-2 text-sm hover:text-secondary transition-colors ${
                      isActiveLink("/air-conditioner")
                        ? "text-primary"
                        : "text-text-primary"
                    }`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    에어컨 청소
                  </Link>
                  <Link
                    href="/entry-cleaning"
                    className={`block py-2 text-sm hover:text-secondary transition-colors ${
                      isActiveLink("/entry-cleaning")
                        ? "text-primary"
                        : "text-text-primary"
                    }`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    입주 청소
                  </Link>
                </div>
              </div>

              {/* 기타 메뉴 항목들 */}
              <Link
                href="/apply-service"
                className={`block py-3 text-base hover:text-secondary transition-colors border-b border-gray-100 ${
                  isActiveLink("/apply-service")
                    ? "text-primary"
                    : "text-text-primary"
                }`}
                onClick={() => setIsSheetOpen(false)}
              >
                서비스 신청
              </Link>
              <Link
                href="/blog"
                className={`block py-3 text-base hover:text-secondary transition-colors border-b border-gray-100 ${
                  isActiveLink("/blog") ? "text-primary" : "text-text-primary"
                }`}
                onClick={() => setIsSheetOpen(false)}
              >
                최신 소식
              </Link>
              <Link
                href="/education-inquiry"
                className={`block py-3 text-base hover:text-secondary transition-colors border-b border-gray-100 ${
                  isActiveLink("/education-inquiry")
                    ? "text-primary"
                    : "text-text-primary"
                }`}
                onClick={() => setIsSheetOpen(false)}
              >
                교육 문의
              </Link>

              {/* 액션 버튼들 */}
              <div className="flex flex-col gap-3 mt-6">
                <Link
                  href="/offices"
                  className="w-full py-3 px-4 rounded-btn border border-primary text-primary font-normal text-base hover:bg-primary hover:text-white transition-colors"
                  onClick={() => setIsSheetOpen(false)}
                >
                  지점 찾기
                </Link>
                <Link
                  href="/apply-service"
                  className="w-full py-3 px-4 rounded-btn bg-accent text-white font-normal text-base hover:bg-secondary transition-colors"
                  onClick={() => setIsSheetOpen(false)}
                >
                  예약
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
