import Image from "next/image";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gleam-neutral-light px-20 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex items-center justify-between gap-16 mb-8">
          {/* Logo and Company Info */}
          <div className="flex items-center gap-4">
            {/* Logo Placeholder */}
            <div className="w-64 h-48 relative">
              <div className="w-56 h-56 bg-transparent">
                {/* Logo image would go here */}
                <div className="w-full h-full bg-gleam-secondary rounded opacity-20" />
              </div>
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
              <div className="w-6 h-6 relative">
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-secondary"
                >
                  <rect x="4.9" y="9.9" width="1.8" height="1.8" />
                  <rect x="12.4" y="9.9" width="1.8" height="1.8" />
                  <rect x="17.4" y="9.9" width="1.8" height="1.8" />
                  <rect
                    x="1.2"
                    y="3.2"
                    width="21.6"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                  />
                </svg>
              </div>

              {/* KakaoTalk */}
              <div className="w-6 h-6 relative bg-white rounded">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path
                    d="M12 4c-4.4 0-8 2.9-8 6.5 0 2.3 1.5 4.3 3.8 5.5l-.9 3.3c-.1.4.4.7.7.4l4.1-2.7c.1 0 .2 0 .3 0 4.4 0 8-2.9 8-6.5S16.4 4 12 4z"
                    fill="#166DA3"
                  />
                </svg>
              </div>

              {/* YouTube */}
              <div className="w-6 h-6 relative bg-white rounded">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path
                    d="M23 7.8c-.3-1.2-1.2-2.1-2.4-2.4C18.7 5 12 5 12 5s-6.7 0-8.6.4C2.2 5.7 1.3 6.6 1 7.8 .6 9.7.6 14.3.6 14.3s0 4.6.4 6.5c.3 1.2 1.2 2.1 2.4 2.4C5.3 23.6 12 23.6 12 23.6s6.7 0 8.6-.4c1.2-.3 2.1-1.2 2.4-2.4.4-1.9.4-6.5.4-6.5s0-4.6-.4-6.5zM9.8 18.9V9.7l5.8 4.6-5.8 4.6z"
                    fill="#166DA3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-2">
          {/* Legal Links */}
          <div className="flex justify-between items-center border-t border-gleam-text-secondary pt-2 opacity-80">
            <div className="flex items-center gap-1">
              <button className="px-4 py-2 text-gleam-text-secondary text-sm hover:bg-gleam-neutral-light rounded transition-colors">
                이용약관
              </button>
              <div className="w-px h-5 bg-secondary" />
              <button className="px-4 py-2 text-secondary text-sm hover:bg-gleam-neutral-light rounded transition-colors">
                개인정보처리방침
              </button>
            </div>

            <p className="text-gleam-text-secondary text-sm max-w-xs">
              © 2025 GLEAMCARE. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
