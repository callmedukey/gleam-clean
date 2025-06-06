import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { InquiryType } from "@/prisma/generated/prisma";
import { prisma } from "@/prisma/prisma-client";

interface InquiryDetailPageProps {
  params: Promise<{
    inquiryId: string;
  }>;
}

function InquiryTypeBadge({ type }: { type: InquiryType }) {
  const getTypeLabel = (type: InquiryType) => {
    switch (type) {
      case InquiryType.QUOTE:
        return "견적";
      case InquiryType.OTHER:
        return "기본";
      case InquiryType.EDUCATION:
        return "교육";
      default:
        return "기본";
    }
  };

  const getVariant = (type: InquiryType) => {
    switch (type) {
      case InquiryType.QUOTE:
        return "default" as const;
      case InquiryType.EDUCATION:
        return "secondary" as const;
      case InquiryType.OTHER:
      default:
        return "outline" as const;
    }
  };

  return (
    <Badge variant={getVariant(type)} className="font-semibold text-white">
      {getTypeLabel(type)}
    </Badge>
  );
}

function InquiryDetailSkeleton() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/admin">
              <ArrowLeftIcon className="w-4 h-4" />
              목록으로 돌아가기
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">문의 상세</h1>
            <p className="text-muted-foreground">문의 내용을 확인하세요.</p>
          </div>
        </div>

        {/* Inquiry Details Skeleton */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Basic Information Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle>기본 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">유형:</span>
                <Skeleton className="h-6 w-16" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">읽음 상태:</span>
                <Skeleton className="h-6 w-20" />
              </div>
              <div>
                <span className="font-medium">이름:</span>
                <Skeleton className="h-5 w-32 mt-1" />
              </div>
              <div>
                <span className="font-medium">이메일:</span>
                <Skeleton className="h-5 w-48 mt-1" />
              </div>
              <div>
                <span className="font-medium">전화번호:</span>
                <Skeleton className="h-5 w-36 mt-1" />
              </div>
              <div>
                <span className="font-medium">생성일:</span>
                <Skeleton className="h-5 w-40 mt-1" />
              </div>
              <div>
                <span className="font-medium">수정일:</span>
                <Skeleton className="h-5 w-40 mt-1" />
              </div>
            </CardContent>
          </Card>

          {/* Message Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle>문의 내용</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md bg-muted p-4">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Images Skeleton */}
        <Card>
          <CardHeader>
            <CardTitle>첨부 이미지</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="aspect-video w-full rounded-md" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

async function InquiryDetailContent({ inquiryId }: { inquiryId: string }) {
  const inquiry = await prisma.inquiry.findUnique({
    where: { id: inquiryId },
    include: {
      images: true,
    },
  });

  if (!inquiry) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/admin">
              <ArrowLeftIcon className="w-4 h-4" />
              목록으로 돌아가기
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">문의 상세</h1>
            <p className="text-muted-foreground">문의 내용을 확인하세요.</p>
          </div>
        </div>

        {/* Inquiry Details */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>기본 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">유형:</span>
                <InquiryTypeBadge type={inquiry.type} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">읽음 상태:</span>
                <Badge
                  variant={inquiry.read ? "outline" : "default"}
                  className={
                    inquiry.read ? "text-text-primary" : "text-white bg-red-800"
                  }
                >
                  {inquiry.read ? "읽음" : "읽지 않음"}
                </Badge>
              </div>
              <div>
                <span className="font-medium">이름:</span>
                <p className="mt-1">{inquiry.name}</p>
              </div>
              <div>
                <span className="font-medium">이메일:</span>
                <p className="mt-1">{inquiry.email}</p>
              </div>
              <div>
                <span className="font-medium">전화번호:</span>
                <p className="mt-1">{inquiry.phone}</p>
              </div>
              <div>
                <span className="font-medium">생성일:</span>
                <p className="mt-1">
                  {format(inquiry.createdAt, "yyyy년 MM월 dd일 HH:mm", {
                    locale: ko,
                  })}
                </p>
              </div>
              <div>
                <span className="font-medium">수정일:</span>
                <p className="mt-1">
                  {format(inquiry.updatedAt, "yyyy년 MM월 dd일 HH:mm", {
                    locale: ko,
                  })}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Message */}
          <Card>
            <CardHeader>
              <CardTitle>문의 내용</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-wrap rounded-md p-4 max-h-[40rem] overflow-y-auto">
                {inquiry.message}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Images */}
        {inquiry.images.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>첨부 이미지</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {inquiry.images.map((image) => (
                  <div key={image.id} className="space-y-2">
                    <a
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={image.url}
                        alt="첨부 이미지"
                        width={image.width}
                        height={image.height}
                        className="aspect-video w-full rounded-md object-cover"
                      />
                    </a>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        {image.width} × {image.height}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <a
                          href={image.url}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          이미지 다운로드
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

const InquiryDetailPage = async ({ params }: InquiryDetailPageProps) => {
  const { inquiryId } = await params;

  return (
    <Suspense fallback={<InquiryDetailSkeleton />}>
      <InquiryDetailContent inquiryId={inquiryId} />
    </Suspense>
  );
};

export default InquiryDetailPage;
