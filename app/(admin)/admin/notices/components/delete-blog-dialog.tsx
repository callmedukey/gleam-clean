"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useState, useTransition } from "react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { BlogPost, Image as ImageType } from "@/prisma/generated/prisma";

import { deleteBlogPost } from "../actions/blog.action";

interface DeleteBlogDialogProps {
  trigger: ReactNode;
  blogPost: BlogPost & {
    image: ImageType | null;
  };
}

export function DeleteBlogDialog({ trigger, blogPost }: DeleteBlogDialogProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteBlogPost(blogPost.id);
        toast.success("블로그 포스트가 삭제되었습니다");
        setOpen(false);
        router.refresh();
      } catch (error) {
        console.error(error);
        toast.error("블로그 포스트 삭제에 실패했습니다");
      }
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>블로그 포스트 삭제</AlertDialogTitle>
          <AlertDialogDescription>
            &quot;{blogPost.title}&quot; 포스트를 삭제하시겠습니까?
            <br />이 작업은 되돌릴 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isPending}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isPending ? "삭제 중..." : "삭제"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
