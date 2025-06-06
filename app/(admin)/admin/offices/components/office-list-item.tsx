"use client";

import {
  MoreHorizontal,
  Edit,
  Trash2,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
} from "lucide-react";
import { useTransition } from "react";

import { deleteOffice } from "@/actions/office.action";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Office } from "@/types/office";

import { OfficeFormDialog } from "./office-form-dialog";

interface OfficeListItemProps {
  office: Office;
}

export function OfficeListItem({ office }: OfficeListItemProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("정말로 이 지점를 삭제하시겠습니까?")) {
      startTransition(async () => {
        try {
          await deleteOffice({ id: office.id });
        } catch (error) {
          console.error("삭제 오류:", error);
        }
      });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">{office.name}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">메뉴 열기</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <OfficeFormDialog
              office={office}
              trigger={
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Edit className="mr-2 h-4 w-4" />
                  수정
                </DropdownMenuItem>
              }
            />
            <DropdownMenuItem
              onClick={handleDelete}
              disabled={isPending}
              className="text-red-600 focus:text-red-600"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              {isPending ? "삭제중..." : "삭제"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start space-x-2">
          <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
          <p className="text-sm text-muted-foreground">{office.address}</p>
        </div>

        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">{office.phone}</p>
        </div>

        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">{office.hours}</p>
        </div>

        <div className="flex items-center justify-end">
          <Button variant="outline" size="sm" asChild className="h-8">
            <a
              href={office.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1"
            >
              <ExternalLink className="h-3 w-3" />
              <span>지도 보기</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
