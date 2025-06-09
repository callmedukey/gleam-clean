"use client";

import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BlogPost, Image as ImageType } from "@/prisma/generated/prisma";

import { BlogFormDialog } from "./blog-form-dialog";
import { DeleteBlogDialog } from "./delete-blog-dialog";

interface BlogListItemProps {
  blogPost: BlogPost & {
    image: ImageType | null;
  };
}

export function BlogListItem({ blogPost }: BlogListItemProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        {blogPost.image ? (
          <div className="relative h-48 w-full">
            <Image
              src={blogPost.image.url}
              alt={blogPost.title}
              fill
              className="object-fit"
            />
          </div>
        ) : (
          <div className="h-48 w-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">이미지 없음</p>
          </div>
        )}
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge
              variant={blogPost.published ? "default" : "secondary"}
              className={cn(!blogPost.published && "text-white")}
            >
              {blogPost.published ? "게시됨" : "초안"}
            </Badge>
            <Badge variant="outline">{blogPost.badge}</Badge>
          </div>

          <h3 className="font-semibold text-lg line-clamp-2">
            {blogPost.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3">
            {blogPost.content.replace(/<[^>]*>/g, "").substring(0, 100)}...
          </p>

          <div className="text-xs text-muted-foreground">
            {new Date(blogPost.createdAt).toLocaleDateString("ko-KR")}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-end w-full">
          <div className="flex items-center gap-2">
            <BlogFormDialog
              blogPost={blogPost}
              trigger={
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              }
            />
            <DeleteBlogDialog
              blogPost={blogPost}
              trigger={
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              }
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
