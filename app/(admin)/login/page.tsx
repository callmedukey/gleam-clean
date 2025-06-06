import React from "react";

import AdminLoginForm from "../components/admin-login-form";

export const dynamic = "force-dynamic";

const AdminLoginPage = async () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <AdminLoginForm />
    </div>
  );
};

export default AdminLoginPage;
