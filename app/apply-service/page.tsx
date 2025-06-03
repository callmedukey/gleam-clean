import { Metadata } from "next";
import React from "react";

import ApplyServiceSummary from "./components/apply-service-summary";
import ApplyServiceTitle from "./components/apply-service-title";
import ApplyServiceWhy from "./components/apply-service-why";

export const metadata: Metadata = {
  title: "글림케어 서비스 신청하기",
  description: "글림케어 서비스 신청하기",
};

export const dynamic = "force-static";

const page = () => {
  return (
    <main className="min-h-screen">
      <ApplyServiceTitle />
      <ApplyServiceSummary />
      <ApplyServiceWhy />
    </main>
  );
};

export default page;
