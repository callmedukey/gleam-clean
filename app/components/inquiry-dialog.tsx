"use client";

import { X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState, useTransition } from "react";

import { submitInquiry } from "@/actions/inquiry.action";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  baseInquirySchema,
  type BaseInquiryFormData,
} from "@/form-schema/inquiry.schema";
import { InquiryType } from "@/prisma/generated/prisma";

interface InquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  inquiryType?: InquiryType;
}

type FormData = BaseInquiryFormData & {
  photos: File[];
};

export default function InquiryDialog({
  open,
  onOpenChange,
  inquiryType = InquiryType.OTHER,
}: InquiryDialogProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    email: "",
    message: "",
    consent: false,
    photos: [],
  });

  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);

    // Clear errors for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleConsentChange = (checked: boolean) => {
    const updatedFormData = {
      ...formData,
      consent: checked,
    };

    setFormData(updatedFormData);

    // Clear consent error when user checks the box
    if (errors.consent) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.consent;
        return newErrors;
      });
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const totalPhotos = formData.photos.length + files.length;

    if (totalPhotos > 3) {
      setErrors((prev) => ({
        ...prev,
        photos: ["최대 3장까지 업로드할 수 있습니다."],
      }));
      return;
    }

    const validFiles = files.filter((file) => {
      const isImage = file.type.startsWith("image/");
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB
      return isImage && isValidSize;
    });

    if (validFiles.length !== files.length) {
      setErrors((prev) => ({
        ...prev,
        photos: [
          "이미지 파일만 업로드 가능하며, 파일 크기는 5MB 이하여야 합니다.",
        ],
      }));
      return;
    }

    const newPhotos = [...formData.photos, ...validFiles];
    setFormData({ ...formData, photos: newPhotos });

    // Create preview URLs for new photos
    const newPreviewUrls = validFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);

    // Clear photo errors
    if (errors.photos) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.photos;
        return newErrors;
      });
    }
  };

  const removePhoto = (index: number) => {
    const newPhotos = formData.photos.filter((_, i) => i !== index);
    setFormData({ ...formData, photos: newPhotos });

    // Clean up the preview URL
    URL.revokeObjectURL(previewUrls[index]);
    const newPreviewUrls = previewUrls.filter((_, i) => i !== index);
    setPreviewUrls(newPreviewUrls);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitMessage("");

    // Client-side validation
    const dataToValidate = {
      name: formData.name,
      contact: formData.contact,
      email: formData.email,
      message: formData.message,
      consent: formData.consent,
    };
    const validationResult = baseInquirySchema.safeParse(dataToValidate);

    if (!validationResult.success) {
      // Handle validation errors
      const validationErrors: Record<string, string[]> = {};
      validationResult.error.errors.forEach((err: any) => {
        const path = err.path.join(".");
        if (!validationErrors[path]) {
          validationErrors[path] = [];
        }
        validationErrors[path].push(err.message);
      });

      setErrors(validationErrors);
      setSubmitMessage("입력 정보를 확인해주세요.");
      return;
    }

    startTransition(async () => {
      try {
        const formDataToSend = new FormData();

        // Append text fields
        Object.entries(dataToValidate).forEach(([key, value]) => {
          formDataToSend.append(key, String(value));
        });

        // Append photos
        formData.photos.forEach((photo) => {
          formDataToSend.append("photos", photo);
        });

        const result = await submitInquiry(formDataToSend, inquiryType);

        if (result.success) {
          setSubmitMessage(result.message);
          alert(result.message);
          // Reset form
          setFormData({
            name: "",
            contact: "",
            email: "",
            message: "",
            consent: false,
            photos: [],
          });
          setPreviewUrls([]);
          onOpenChange(false);
        } else {
          setSubmitMessage(result.message);
          if (result.errors) {
            setErrors(result.errors);
          }
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitMessage(
          "문의 제출 중 오류가 발생했습니다. 다시 시도해주세요."
        );
      }
    });
  };

  const handleClose = () => {
    // Clean up preview URLs when dialog closes
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setPreviewUrls([]);
    setFormData({
      name: "",
      contact: "",
      email: "",
      message: "",
      consent: false,
      photos: [],
    });
    setErrors({});
    setSubmitMessage("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-secondary">
            {inquiryType === InquiryType.QUOTE ? "견적 문의" : "1:1 맞춤 상담"}
          </DialogTitle>
        </DialogHeader>

        {/* Submit Message */}
        {submitMessage && (
          <motion.div
            className={`p-4 rounded-lg text-center ${
              submitMessage.includes("성공적으로")
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {submitMessage}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-semibold">
              이름
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name[0]}</p>
            )}
          </div>

          {/* Contact Field */}
          <div className="space-y-2">
            <Label htmlFor="contact" className="text-base font-semibold">
              연락처
            </Label>
            <Input
              id="contact"
              name="contact"
              type="tel"
              value={formData.contact}
              onChange={handleInputChange}
              required
              className={`${errors.contact ? "border-red-500" : ""}`}
            />
            {errors.contact && (
              <p className="text-sm text-red-600">{errors.contact[0]}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-semibold">
              이메일
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email[0]}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-base font-semibold">
              문의 내용
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="문의하실 내용을 입력해주세요..."
              required
              rows={6}
              className={`${errors.message ? "border-red-500" : ""}`}
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message[0]}</p>
            )}
          </div>

          {/* Photo Upload */}
          <div className="space-y-2">
            <Label htmlFor="photos" className="text-base font-semibold">
              사진 첨부 (선택사항, 최대 3장)
            </Label>
            <Input
              id="photos"
              name="photos"
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
              disabled={formData.photos.length >= 3}
              className={`${errors.photos ? "border-red-500" : ""}`}
            />
            {errors.photos && (
              <p className="text-sm text-red-600">{errors.photos[0]}</p>
            )}

            {/* Photo Previews */}
            {previewUrls.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-2">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={url}
                      alt={`미리보기 ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-24 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={handleConsentChange}
              className="data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
            />
            <Label htmlFor="consent" className="text-sm cursor-pointer">
              개인정보 수집 및 이용에 동의합니다
            </Label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-600 mt-1">{errors.consent[0]}</p>
          )}

          {/* Submit Button */}
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isPending}
            >
              취소
            </Button>
            <Button
              type="submit"
              disabled={isPending || !formData.consent}
              className="bg-accent hover:bg-secondary text-white"
            >
              {isPending ? "제출 중..." : "제출하기"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
