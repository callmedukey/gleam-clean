import React from "react";

import ChangePasswordForm from "./components/change-password-form";

const page = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">관리자 설정</h1>
        <p className="text-gray-600 mt-2">
          관리자 계정 설정을 관리할 수 있습니다.
        </p>
      </div>

      <div className="flex justify-center">
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default page;
