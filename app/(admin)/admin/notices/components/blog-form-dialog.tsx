"use client";

import { Upload, X } from "lucide-react";
import Image from "next/image";
import { ReactNode, useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { BlogPost, Image as ImageType } from "@/prisma/generated/prisma";

import { createBlogPost, updateBlogPost } from "../actions/blog.action";

interface BlogFormDialogProps {
  trigger: ReactNode;
  blogPost?: BlogPost & {
    image: ImageType | null;
  };
}

interface FormData {
  title: string;
  badge: string;
  content: string;
  url: string;
  published: boolean;
  order: number;
  image?: File;
}

export function BlogFormDialog({ trigger, blogPost }: BlogFormDialogProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [imagePreview, setImagePreview] = useState<string | null>(
    blogPost?.image?.url || null
  );
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const [formData, setFormData] = useState<FormData>({
    title: blogPost?.title || "",
    badge: blogPost?.badge || "",
    content: blogPost?.content || "",
    url: blogPost?.url || "",
    published: blogPost?.published || false,
    order: blogPost?.order || 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePublishedChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      published: checked,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Clear image errors
      if (errors.image) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.image;
          return newErrors;
        });
      }
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      image: undefined,
    }));
    setImagePreview(blogPost?.image?.url || null);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string[]> = {};

    if (!formData.title.trim()) {
      newErrors.title = ["제목을 입력해주세요"];
    }

    if (!formData.badge.trim()) {
      newErrors.badge = ["배지를 입력해주세요"];
    }

    if (!formData.content.trim()) {
      newErrors.content = ["내용을 입력해주세요"];
    }

    if (!formData.url.trim()) {
      newErrors.url = ["URL을 입력해주세요"];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    startTransition(async () => {
      try {
        const submitFormData = new FormData();
        submitFormData.append("title", formData.title);
        submitFormData.append("badge", formData.badge);
        submitFormData.append("content", formData.content);
        submitFormData.append("url", formData.url);
        submitFormData.append("published", formData.published.toString());
        submitFormData.append("order", formData.order.toString());

        if (formData.image) {
          submitFormData.append("image", formData.image);
        }

        if (blogPost) {
          submitFormData.append("id", blogPost.id);
          await updateBlogPost(submitFormData);
          toast.success("블로그 포스트가 수정되었습니다");
        } else {
          await createBlogPost(submitFormData);
          toast.success("블로그 포스트가 생성되었습니다");
        }

        setOpen(false);
        // Reset form
        setFormData({
          title: "",
          badge: "",
          content: "",
          url: "",
          published: false,
          order: 0,
        });
        setImagePreview(null);
        setErrors({});
      } catch (error) {
        console.error(error);
        toast.error(
          blogPost
            ? "블로그 포스트 수정에 실패했습니다"
            : "블로그 포스트 생성에 실패했습니다"
        );
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
    // Reset form when closing
    if (!blogPost) {
      setFormData({
        title: "",
        badge: "",
        content: "",
        url: "",
        published: false,
        order: 0,
      });
      setImagePreview(null);
    } else {
      setFormData({
        title: blogPost.title,
        badge: blogPost.badge,
        content: blogPost.content,
        url: blogPost.url,
        published: blogPost.published,
        order: blogPost.order,
      });
      setImagePreview(blogPost.image?.url || null);
    }
    setErrors({});
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen) {
      // Reset form data when opening
      if (blogPost) {
        setFormData({
          title: blogPost.title,
          badge: blogPost.badge,
          content: blogPost.content,
          url: blogPost.url,
          published: blogPost.published,
          order: blogPost.order,
        });
        setImagePreview(blogPost.image?.url || null);
      }
    }
    setOpen(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {blogPost ? "블로그 포스트 수정" : "새 블로그 포스트"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">제목</Label>
            <Input
              id="title"
              name="title"
              placeholder="블로그 포스트 제목을 입력하세요"
              value={formData.title}
              onChange={handleInputChange}
              disabled={isPending}
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && (
              <p className="text-sm text-red-600">{errors.title[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="badge">배지</Label>
            <Input
              id="badge"
              name="badge"
              placeholder="소식, 공지사항 등"
              value={formData.badge}
              onChange={handleInputChange}
              disabled={isPending}
              className={errors.badge ? "border-red-500" : ""}
            />
            {errors.badge && (
              <p className="text-sm text-red-600">{errors.badge[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              name="url"
              placeholder="/blog/example-post"
              value={formData.url}
              onChange={handleInputChange}
              disabled={isPending}
              className={errors.url ? "border-red-500" : ""}
            />
            {errors.url && (
              <p className="text-sm text-red-600">{errors.url[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">내용</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="블로그 포스트 내용을 입력하세요"
              className={`min-h-[200px] ${
                errors.content ? "border-red-500" : ""
              }`}
              value={formData.content}
              onChange={handleInputChange}
              disabled={isPending}
            />
            {errors.content && (
              <p className="text-sm text-red-600">{errors.content[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="order">순서</Label>
            <Input
              id="order"
              name="order"
              type="number"
              placeholder="0"
              value={formData.order}
              onChange={(e) => {
                const value = parseInt(e.target.value) || 0;
                setFormData(prev => ({ ...prev, order: value }));
              }}
              disabled={isPending}
            />
            <p className="text-sm text-muted-foreground">
              낮은 숫자가 먼저 표시됩니다
            </p>
          </div>

          <div className="space-y-2">
            <Label>이미지</Label>
            <div className="space-y-4">
              {imagePreview && (
                <div className="relative w-full h-48">
                  <Image
                    src={imagePreview}
                    alt="미리보기"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={removeImage}
                    disabled={isPending}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                  disabled={isPending}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    document.getElementById("image-upload")?.click()
                  }
                  disabled={isPending}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  이미지 업로드
                </Button>
              </div>
            </div>
            {errors.image && (
              <p className="text-sm text-red-600">{errors.image[0]}</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="published"
              checked={formData.published}
              onCheckedChange={handlePublishedChange}
              disabled={isPending}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="published">게시</Label>
              <p className="text-sm text-muted-foreground">
                체크하면 블로그에 게시됩니다
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isPending}
            >
              취소
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "저장 중..." : blogPost ? "수정" : "생성"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
