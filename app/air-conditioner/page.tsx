import { Metadata } from "next";
import React from "react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "에어컨 청소 서비스",
  description: "에어컨 청소 서비스",
};

const page = () => {
  return <div>page</div>;
};

export default page;
