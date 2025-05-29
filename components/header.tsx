"use client";

import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import LogoImage from "@/public/images/logo.png";
import Link from "next/link";
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

export default function Header() {
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-nav px-nav-x py-nav-y rounded text-text-primary font-normal text-base leading-text hover:bg-gray-50 transition-colors w-nav-service justify-center">
                <span className="w-nav-service-text text-center">
                  서비스 안내
                </span>
                <ChevronDown className="w-icon h-icon text-text-primary" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>
                <Link href="/services/mattress-sofa" className="w-full">
                  매트리스와 소파 청소
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/air-conditioner" className="w-full">
                  에어컨 청소
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/entry-cleaning" className="w-full">
                  입주 청소
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 서비스 신청 */}
          <button className="flex items-center gap-nav px-nav-x py-nav-y rounded text-text-primary font-normal text-base leading-text hover:bg-gray-50 transition-colors w-nav-default justify-center">
            <span className="text-center">서비스 신청</span>
          </button>

          {/* 최신 소식 */}
          <button className="flex items-center gap-nav px-nav-x py-nav-y rounded text-text-primary font-normal text-base leading-text hover:bg-gray-50 transition-colors w-nav-default justify-center">
            <span className="text-center">최신 소식</span>
          </button>

          {/* 교육 문의 */}
          <button className="flex items-center gap-nav px-nav-x py-nav-y rounded text-text-primary font-normal text-base leading-text hover:bg-gray-50 transition-colors">
            <span className="text-center">교육 문의</span>
          </button>

          {/* Action Buttons */}
          <div className="flex items-center gap-nav px-action-x ml-action">
            {/* 지점 찾기 - Outline Button */}
            <button className="flex items-center justify-center gap-2 px-btn-x py-btn-y rounded-btn border border-primary text-primary font-normal text-base leading-text hover:bg-primary hover:text-white transition-colors">
              지점 찾기
            </button>

            {/* 예약 - Filled Button */}
            <button className="flex items-center justify-center gap-2 px-btn-x py-btn-y rounded-btn bg-accent text-white font-normal text-base leading-text hover:bg-secondary transition-colors">
              <span className="w-btn-text text-center">예약</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden p-2 rounded-md hover:bg-gray-50 transition-colors">
              <Menu className="w-6 h-6 text-text-primary" />
              <span className="sr-only">메뉴 열기</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
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
                    href="/services/mattress-sofa"
                    className="block py-2 text-sm text-text-primary hover:text-secondary transition-colors"
                  >
                    매트리스와 소파 청소
                  </Link>
                  <Link
                    href="/services/air-conditioner"
                    className="block py-2 text-sm text-text-primary hover:text-secondary transition-colors"
                  >
                    에어컨 청소
                  </Link>
                  <Link
                    href="/services/entry-cleaning"
                    className="block py-2 text-sm text-text-primary hover:text-secondary transition-colors"
                  >
                    입주 청소
                  </Link>
                </div>
              </div>

              {/* 기타 메뉴 항목들 */}
              <Link
                href="/apply"
                className="block py-3 text-base text-text-primary hover:text-secondary transition-colors border-b border-gray-100"
              >
                서비스 신청
              </Link>
              <Link
                href="/news"
                className="block py-3 text-base text-text-primary hover:text-secondary transition-colors border-b border-gray-100"
              >
                최신 소식
              </Link>
              <Link
                href="/contact"
                className="block py-3 text-base text-text-primary hover:text-secondary transition-colors border-b border-gray-100"
              >
                교육 문의
              </Link>

              {/* 액션 버튼들 */}
              <div className="flex flex-col gap-3 mt-6">
                <button className="w-full py-3 px-4 rounded-btn border border-primary text-primary font-normal text-base hover:bg-primary hover:text-white transition-colors">
                  지점 찾기
                </button>
                <button className="w-full py-3 px-4 rounded-btn bg-accent text-white font-normal text-base hover:bg-secondary transition-colors">
                  예약
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
