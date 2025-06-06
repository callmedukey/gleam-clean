import { Suspense } from "react";

import { getOffices } from "@/app/(admin)/admin/offices/query/offices.query";
import { Skeleton } from "@/components/ui/skeleton";

import { OfficeListItem } from "./office-list-item";

async function OfficeListContent() {
  const offices = await getOffices();

  if (offices.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">등록된 지점가 없습니다.</p>
        <p className="text-sm text-muted-foreground mt-1">
          새 지점를 추가해보세요.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {offices.map((office) => (
        <OfficeListItem key={office.id} office={office} />
      ))}
    </div>
  );
}

function OfficeListSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-[200px] w-full rounded-lg" />
        </div>
      ))}
    </div>
  );
}

export function OfficeList() {
  return (
    <Suspense fallback={<OfficeListSkeleton />}>
      <OfficeListContent />
    </Suspense>
  );
}
