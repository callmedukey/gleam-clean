import { existsSync } from "fs";
import { readFile } from "fs/promises";
import { join } from "path";

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params;
    const imagePath = join(process.cwd(), "public", "uploads", ...path);

    // 파일이 존재하는지 확인
    if (!existsSync(imagePath)) {
      return new NextResponse("이미지를 찾을 수 없습니다", { status: 404 });
    }

    // 보안을 위해 uploads 디렉토리 외부로의 접근 방지
    const uploadsDir = join(process.cwd(), "public", "uploads");
    if (!imagePath.startsWith(uploadsDir)) {
      return new NextResponse("접근이 거부되었습니다", { status: 403 });
    }

    // 파일 읽기
    const fileBuffer = await readFile(imagePath);

    // 파일 확장자에 따른 MIME 타입 설정
    const extension = path[path.length - 1].split(".").pop()?.toLowerCase();
    let contentType = "application/octet-stream";

    switch (extension) {
      case "jpg":
      case "jpeg":
        contentType = "image/jpeg";
        break;
      case "png":
        contentType = "image/png";
        break;
      case "gif":
        contentType = "image/gif";
        break;
      case "webp":
        contentType = "image/webp";
        break;
      case "svg":
        contentType = "image/svg+xml";
        break;
    }

    // 캐시 헤더 설정
    const headers = new Headers();
    headers.set("Content-Type", contentType);
    headers.set("Cache-Control", "public, max-age=31536000, immutable");

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("이미지 서빙 오류:", error);
    return new NextResponse("서버 오류가 발생했습니다", { status: 500 });
  }
}
