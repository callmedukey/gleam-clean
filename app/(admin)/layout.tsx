import React from "react";

import { auth } from "@/auth";
import { Role } from "@/prisma/generated/prisma";

import AdminHeader from "./components/admin-header";
import AdminLoginForm from "./components/admin-login-form";
import LogoutButton from "./components/logout-button";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session || session.user.role !== Role.ADMIN) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <AdminLoginForm />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto px-4">
      <AdminHeader />
      <div className="flex-1">{children}</div>
      <div className="flex justify-center p-4">
        <LogoutButton />
      </div>
    </div>
  );
};

export default layout;
