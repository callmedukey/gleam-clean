"use client";

import { Eye, EyeOff } from "lucide-react";
import React, { useActionState, useEffect } from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { changePassword } from "../actions/change-password.action";

interface ChangePasswordState {
  error?: string;
  success?: boolean;
  fieldErrors?: {
    currentPassword?: string[];
    newPassword?: string[];
    confirmPassword?: string[];
  };
  inputs?: {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  };
}

const ChangePasswordForm = () => {
  const [state, formAction, isPending] = useActionState<
    ChangePasswordState,
    FormData
  >(changePassword, {});

  const [showPasswords, setShowPasswords] = React.useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [formRef, setFormRef] = React.useState<HTMLFormElement | null>(null);

  // Reset form on successful password change
  useEffect(() => {
    if (state.success && formRef) {
      formRef.reset();
    }
  }, [state.success, formRef]);

  const togglePasswordVisibility = (field: "current" | "new" | "confirm") => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>비밀번호 변경</CardTitle>
        <CardDescription>
          관리자 계정의 비밀번호를 변경할 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4" ref={setFormRef}>
          {/* Success Message */}
          {state.success && (
            <Alert className="border-green-200 bg-green-50">
              <AlertDescription className="text-green-800">
                비밀번호가 성공적으로 변경되었습니다.
              </AlertDescription>
            </Alert>
          )}

          {/* General Error Message */}
          {state.error && (
            <Alert className="border-red-200 bg-red-50">
              <AlertDescription className="text-red-800">
                {state.error}
              </AlertDescription>
            </Alert>
          )}

          {/* Current Password */}
          <div className="space-y-2">
            <Label htmlFor="currentPassword">현재 비밀번호</Label>
            <div className="relative">
              <Input
                id="currentPassword"
                name="currentPassword"
                type={showPasswords.current ? "text" : "password"}
                placeholder="현재 비밀번호를 입력하세요"
                disabled={isPending}
                defaultValue={state.inputs?.currentPassword}
                className={
                  state.fieldErrors?.currentPassword ? "border-red-500" : ""
                }
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => togglePasswordVisibility("current")}
                disabled={isPending}
              >
                {showPasswords.current ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            {state.fieldErrors?.currentPassword && (
              <p className="text-sm text-red-600">
                {state.fieldErrors.currentPassword[0]}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <Label htmlFor="newPassword">새 비밀번호</Label>
            <div className="relative">
              <Input
                id="newPassword"
                name="newPassword"
                type={showPasswords.new ? "text" : "password"}
                placeholder="새 비밀번호를 입력하세요"
                disabled={isPending}
                defaultValue={state.inputs?.newPassword}
                className={
                  state.fieldErrors?.newPassword ? "border-red-500" : ""
                }
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => togglePasswordVisibility("new")}
                disabled={isPending}
              >
                {showPasswords.new ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            {state.fieldErrors?.newPassword && (
              <p className="text-sm text-red-600">
                {state.fieldErrors.newPassword[0]}
              </p>
            )}
            <p className="text-xs text-gray-600">
              8-16자, 영문자와 숫자를 포함해야 합니다.
            </p>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">새 비밀번호 확인</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showPasswords.confirm ? "text" : "password"}
                placeholder="새 비밀번호를 다시 입력하세요"
                disabled={isPending}
                defaultValue={state.inputs?.confirmPassword}
                className={
                  state.fieldErrors?.confirmPassword ? "border-red-500" : ""
                }
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => togglePasswordVisibility("confirm")}
                disabled={isPending}
              >
                {showPasswords.confirm ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            {state.fieldErrors?.confirmPassword && (
              <p className="text-sm text-red-600">
                {state.fieldErrors.confirmPassword[0]}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "변경 중..." : "비밀번호 변경"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ChangePasswordForm;
