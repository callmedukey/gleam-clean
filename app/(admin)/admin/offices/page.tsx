import { Plus } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

import { OfficeFormDialog } from "./components/office-form-dialog";
import { OfficeList } from "./components/office-list";

export default function OfficesPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">지점 관리</h1>
          <p className="text-muted-foreground">
            지점 정보를 관리하고 편집할 수 있습니다.
          </p>
        </div>
        <OfficeFormDialog
          trigger={
            <Button>
              <Plus className="mr-2 h-4 w-4" />새 지점 추가
            </Button>
          }
        />
      </div>

      <OfficeList />
    </div>
  );
}
