"use client";

import React, { useTransition } from "react";

import { Button } from "@/components/ui/button";

import { logout } from "../actions/logout.action";

const LogoutButton = () => {
  const [isPending, startTransition] = useTransition();
  const handleLogout = async () => {
    startTransition(async () => {
      await logout();
    });
  };

  return (
    <Button onClick={handleLogout} disabled={isPending} variant="outline">
      {isPending ? "로그아웃 중..." : "로그아웃"}
    </Button>
  );
};

export default LogoutButton;
