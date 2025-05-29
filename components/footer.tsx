import Image from "next/image";
import { Phone } from "lucide-react";
import LogoFooter from "@/public/images/logo-footer.png";
import BlogIcon from "@/public/icons/jt-naver-blog.svg";
import KakaoIcon from "@/public/icons/sns_kakao.svg";
import YoutubeIcon from "@/public/icons/sns_youtube.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gleam-neutral-light px-20 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex items-center justify-between gap-16 mb-8">
          {/* Logo and Company Info */}
          <div className="flex items-center gap-4">
            {/* Logo Placeholder */}
            <div className=" relative">
              <Image
                src={LogoFooter}
                alt="Logo"
                className="w-64 h-48 object-contain"
                quality={100}
              />
            </div>

            {/* Company Details */}
            <div className="flex flex-col gap-4 text-secondary">
              <h3 className=" font-semibold text-lg">글림케어</h3>

              <div className="flex flex-col gap-4">
                {/* Business Registration */}
                <div className="flex items-center gap-3 max-w-md">
                  <span className="text-base">
                    <span className="font-semibold">사업자번호 </span>
                    308-09-21300
                  </span>
                  <div className="w-px h-4 bg-gleam-secondary" />
                  <span className="text-base">
                    <span className="font-semibold">대표 </span>박기동
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3">
                  <span className="text-base">
                    <span className="font-semibold">주소 </span>경기도 수원
                    권선구 금곡로 219, 리더스빌딩 709호
                  </span>
                </div>

                {/* Email and Business License */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-base">
                      <span className="font-semibold">이메일 </span>
                      ubilis99@naver.com
                    </span>
                  </div>
                  <div className="w-px h-4 bg-gleam-secondary" />
                  <div className="flex items-center gap-3">
                    <span className="text-base">
                      <span className="font-semibold">통신판매업신고 </span>
                      제2024-수원권선-0806호
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col items-end gap-6">
            {/* Customer Service */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex flex-col">
                <span className="text-primary text-base text-right">
                  CUSTOMER SERVICE
                </span>
                <div className="flex items-center gap-3 text-secondary">
                  <Phone fill="currentColor" className="w-6 h-6" />
                  <span className=" font-bold text-4xl">0507-1366-9797</span>
                </div>
                <span className="text-primary text-base text-right">
                  영업시간 09:00 ~ 21:00
                </span>
              </div>

              {/* Contact Button */}
              <div className="flex justify-center items-center gap-2">
                <button className="bg-accent text-white px-6 py-1 rounded-full text-base hover:bg-secondary transition-colors">
                  문의하기
                </button>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-2">
              {/* Naver Blog */}
              <Link href="/">
                <Image
                  src={BlogIcon}
                  alt="Blog"
                  className="w-full h-full"
                  unoptimized
                />
              </Link>

              {/* KakaoTalk */}
              <Link href="/">
                <Image
                  src={KakaoIcon}
                  alt="Kakao"
                  className="w-full h-full"
                  unoptimized
                />
              </Link>

              {/* YouTube */}
              <Link href="/">
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
          <div className="flex justify-between items-center border-t border-primary pt-2 opacity-80">
            <div className="flex items-center gap-1">
              <button className="px-4 py-2 text-primary text-sm hover:bg-gleam-neutral-light rounded transition-colors">
                이용약관
              </button>
              <div className="w-px h-5 bg-primary" />
              <button className="px-4 py-2 text-primary text-sm hover:bg-gleam-neutral-light rounded transition-colors">
                개인정보처리방침
              </button>
            </div>

            <p className="text-primary text-sm max-w-xs font-roboto">
              © 2025 GLEAMCARE. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
