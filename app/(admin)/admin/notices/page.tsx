import { Plus } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

import { BlogFormDialog } from "./components/blog-form-dialog";
import { BlogList } from "./components/blog-list";

export const dynamic = "force-dynamic";

export default function BlogsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">게시판 관리</h1>
          <p className="text-muted-foreground">
            게시판을 관리하고 편집할 수 있습니다.
          </p>
        </div>
        <BlogFormDialog
          trigger={
            <Button>
              <Plus className="mr-2 h-4 w-4" />새 포스트 추가
            </Button>
          }
        />
      </div>

      <BlogList />
    </div>
  );
}
