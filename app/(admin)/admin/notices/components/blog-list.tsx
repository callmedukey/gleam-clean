import { Suspense } from "react";

import { getBlogPosts } from "@/app/(admin)/admin/notices/query/blogs.query";
import { Skeleton } from "@/components/ui/skeleton";

import { BlogListItem } from "./blog-list-item";

async function BlogListContent() {
  const blogPosts = await getBlogPosts();

  if (blogPosts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          등록된 블로그 포스트가 없습니다.
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          새 포스트를 추가해보세요.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((blogPost) => (
        <BlogListItem key={blogPost.id} blogPost={blogPost} />
      ))}
    </div>
  );
}

function BlogListSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-[200px] w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function BlogList() {
  return (
    <Suspense fallback={<BlogListSkeleton />}>
      <BlogListContent />
    </Suspense>
  );
}
