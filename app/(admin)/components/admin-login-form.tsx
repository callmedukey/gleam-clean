"use client";

import React, { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { loginAdmin } from "../actions/login.action";

interface LoginState {
  error?: string;
  success?: boolean;
  input?: {
    email: string;
    password: string;
  };
}

const AdminLoginForm = () => {
  const [state, formAction, isPending] = useActionState<LoginState, FormData>(
    loginAdmin,
    {}
  );

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card border rounded-lg shadow-sm p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-foreground">관리자 로그인</h1>
          <p className="text-muted-foreground mt-2">
            관리자 계정으로 로그인하세요
          </p>
        </div>

        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력하세요"
              required
              disabled={isPending}
              defaultValue={state.input?.email}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              required
              disabled={isPending}
              defaultValue={state.input?.password}
            />
          </div>

          {state.error && (
            <div className="text-destructive text-sm bg-destructive/10 p-3 rounded-md">
              {state.error}
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "로그인 중..." : "로그인"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
