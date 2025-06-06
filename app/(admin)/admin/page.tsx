import React, { Suspense } from "react";

import { InquiryTable } from "./components/inquiry-table";
import { InquiryTableSkeleton } from "./components/inquiry-table-skeleton";

export const dynamic = "force-dynamic";

interface AdminPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

const AdminPage = async ({ searchParams }: AdminPageProps) => {
  return (
    <div className="container mx-auto py-8">
      <Suspense fallback={<InquiryTableSkeleton />}>
        <InquiryTable searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default AdminPage;
