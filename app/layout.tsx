import { StagewiseToolbar } from "@stagewise/toolbar-next";
import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "sonner";

import Footer from "@/components/footer";
import Header from "@/components/header";

const stagewiseConfig = {
  plugins: [],
};

const Pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  style: "normal",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 글림케어",
    default: "글림케어 - 빛나는 깨끗함, 당신의 공간에",
  },
  description:
    "글림케어는 매트리스, 소파, 에어컨 청소부터 입주 청소까지 제공하는 전문 청소 서비스입니다. 집과 사무실을 새롭게 만들어드리며, 합리적인 가격으로 최상의 만족을 경험하세요.",
  keywords: [
    "글림케어",
    "전문 청소",
    "청소 서비스",
    "홈클리닝",
    "사무실 청소",
    "매트리스 청소",
    "소파 청소",
    "에어컨 청소",
    "입주 청소",
    "이사 청소",
    "에어컨 분해 청소",
    "시스템 에어컨 청소",
    "패브릭 소파 청소",
    "청소 교육",
    "청소 창업",
  ],
  creator: "글림케어 팀",
  publisher: "글림케어",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "글림케어 - 빛나는 깨끗함, 당신의 공간에",
    description:
      "글림케어는 매트리스, 소파, 에어컨 청소부터 입주 청소까지 제공하는 전문 청소 서비스입니다. 집과 사무실을 새롭게 만들어드리며, 합리적인 가격으로 최상의 만족을 경험하세요.",
    type: "website",
    locale: "ko_KR",
    url: "https://gleamcare.co.kr",
    siteName: "글림케어",
    images: [
      {
        url: "/images/og-image.png", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "글림케어 - 전문 청소 서비스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "글림케어 - 빛나는 깨끗함, 당신의 공간에",
    description:
      "글림케어는 매트리스, 소파, 에어컨 청소부터 입주 청소까지 제공하는 전문 청소 서비스입니다.",
    images: ["/images/og-image.png"], // Same image as OpenGraph
    creator: "@gleamcare", // Replace with actual Twitter handle if exists
  },
  alternates: {
    canonical: "https://gleamcare.co.kr",
  },
  other: {
    "naver-site-verification": "e188b72fc98bbdc1c86a82729e7dae5f499a770f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${Pretendard.variable} ${roboto.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
        {process.env.NODE_ENV === "development" && (
          <StagewiseToolbar config={stagewiseConfig} />
        )}
      </body>
    </html>
  );
}
