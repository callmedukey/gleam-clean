import { Suspense } from "react";

import { 
  getBlogPostsPaginated, 
  getBlogPostsCount 
} from "@/app/(admin)/admin/notices/query/blogs.query";
import { Skeleton } from "@/components/ui/skeleton";

import { BlogListWrapper } from "./blog-list-wrapper";

async function BlogListContent() {
  const [initialPosts, totalCount] = await Promise.all([
    getBlogPostsPaginated(1, 9),
    getBlogPostsCount(),
  ]);

  const totalPages = Math.ceil(totalCount / 9);
  const hasMorePages = totalPages > 1;

  return (
    <BlogListWrapper
      initialPosts={initialPosts}
      totalPages={totalPages}
      hasMorePages={hasMorePages}
    />
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
