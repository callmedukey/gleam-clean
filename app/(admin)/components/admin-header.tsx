"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { cn } from "@/lib/utils";

const adminLinks = [
  {
    label: "문의 관리",
    href: "/admin",
    icon: "📋",
  },
  {
    label: "지점 관리",
    href: "/admin/offices",
    icon: "🏢",
  },
  {
    label: "블로그 관리",
    href: "/admin/blogs",
    icon: "📝",
  },
  {
    label: "계정 관리",
    href: "/admin/settings",
    icon: "⚙️",
  },
];

const AdminHeader = () => {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="">
      <div className="flex items-center gap-1 py-4">
        <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
          {adminLinks.map((link) => {
            const isActive = isActiveLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  "hover:bg-white hover:shadow-sm",
                  isActive
                    ? "bg-white text-blue-700 shadow-sm border border-blue-100"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                <span className="text-base">{link.icon}</span>
                <span>{link.label}</span>
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
