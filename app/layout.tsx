import { StagewiseToolbar } from "@stagewise/toolbar-next";
import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";

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
    default: "글림케어",
  },
  description: "글림케어",
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
        {process.env.NODE_ENV === "development" && (
          <StagewiseToolbar config={stagewiseConfig} />
        )}
      </body>
    </html>
  );
}
