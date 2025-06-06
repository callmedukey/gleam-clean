import React, { Suspense } from "react";

import { OfficesContent } from "./components/offices-content";
import { OfficesContentSkeleton } from "./components/offices-content-skeleton";

export const metadata = {
  title: "글림케어 지점 위치",
  description: "글림케어 지점 위치",
};

export const dynamic = "force-dynamic";

const OfficesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={<OfficesContentSkeleton />}>
        <OfficesContent />
      </Suspense>
    </main>
  );
};

export default OfficesPage;
