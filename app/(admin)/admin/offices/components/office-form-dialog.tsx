"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { createOffice, updateOffice } from "@/actions/office.action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Office } from "@/types/office";
import {
  createOfficeSchema,
  type CreateOfficeInput,
} from "@/validations/office.schema";

interface OfficeFormDialogProps {
  office?: Office;
  trigger: React.ReactNode;
}

export function OfficeFormDialog({ office, trigger }: OfficeFormDialogProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateOfficeInput>({
    resolver: zodResolver(createOfficeSchema),
    defaultValues: {
      name: office?.name ?? "",
      address: office?.address ?? "",
      phone: office?.phone ?? "",
      hours: office?.hours ?? "",
      mapUrl: office?.mapUrl ?? "",
      order: office?.order ?? 0,
    },
  });

  const onSubmit = (data: CreateOfficeInput) => {
    startTransition(async () => {
      try {
        let result;
        if (office) {
          result = await updateOffice({ ...data, id: office.id });
        } else {
          result = await createOffice(data);
        }

        if (result.success) {
          setOpen(false);
          reset();
        }
      } catch (error) {
        console.error("폼 제출 오류:", error);
      }
    });
  };

  // Reset form when dialog opens with office data
  useEffect(() => {
    if (open && office) {
      reset({
        name: office.name,
        address: office.address,
        phone: office.phone,
        hours: office.hours,
        mapUrl: office.mapUrl,
        order: office.order,
      });
    }
  }, [open, office, reset]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{office ? "지점 수정" : "새 지점 추가"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">지점 이름</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="지점 이름을 입력하세요"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">주소</Label>
            <Textarea
              id="address"
              {...register("address")}
              placeholder="주소를 입력하세요"
              rows={3}
            />
            {errors.address && (
              <p className="text-sm text-red-500">{errors.address.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">전화번호</Label>
            <Input
              id="phone"
              {...register("phone")}
              placeholder="전화번호를 입력하세요"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="hours">운영시간</Label>
            <Input
              id="hours"
              {...register("hours")}
              placeholder="운영시간을 입력하세요"
            />
            {errors.hours && (
              <p className="text-sm text-red-500">{errors.hours.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="mapUrl">지도 URL</Label>
            <Input
              id="mapUrl"
              {...register("mapUrl")}
              placeholder="지도 URL을 입력하세요"
            />
            {errors.mapUrl && (
              <p className="text-sm text-red-500">{errors.mapUrl.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="order">순서</Label>
            <Input
              id="order"
              type="number"
              {...register("order")}
              placeholder="0"
            />
            {errors.order && (
              <p className="text-sm text-red-500">{errors.order.message}</p>
            )}
            <p className="text-sm text-muted-foreground">
              낮은 숫자가 먼저 표시됩니다
            </p>
          </div>

          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              취소
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "처리중..." : office ? "수정" : "추가"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
