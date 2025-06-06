"use server";

import { AuthError } from "next-auth";

import { signIn } from "@/auth";

interface LoginState {
  error?: string;
  success?: boolean;
  input?: {
    email: string;
    password: string;
  };
}

export async function loginAdmin(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const input = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!input.email || !input.password) {
    return {
      error: "이메일과 비밀번호를 모두 입력해주세요.",
    };
  }

  // Check if user exists and has admin role before attempting login
  try {
    await signIn("credentials", {
      email: input.email,
      password: input.password,
      redirectTo: "/admin",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          // Handle custom error codes from auth.ts
          const errorCode = (error as any).code;
          switch (errorCode) {
            case "InvalidCredentials":
              return {
                error: "잘못된 이메일 또는 비밀번호입니다.",
                input,
              };
            case "UserNotFound":
              return {
                error: "존재하지 않는 사용자입니다.",
                input,
              };
            default:
              return {
                error: "잘못된 이메일 또는 비밀번호입니다.",
                input,
              };
          }
        case "CallbackRouteError":
          return {
            error: "로그인 처리 중 오류가 발생했습니다.",
            input,
          };
        default:
          return {
            error: "로그인 중 오류가 발생했습니다. 다시 시도해주세요.",
            input,
          };
      }
    }

    // redirect throws an error, so we need to re-throw it
    throw error;
  }

  return { success: true };
}
