"use client";

import { motion } from "motion/react";
import React, { useState, useTransition } from "react";

import { submitEducationInquiry } from "@/actions/education-inquiry.action";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  educationInquirySchema,
  type EducationInquiryFormData,
} from "@/form-schema/inquiry.schema";

type FormData = EducationInquiryFormData;

const EducationInquiryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    email: "",
    message: "",
    consent: false,
  });

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

    // Real-time validation for this field
    try {
      const fieldSchema = educationInquirySchema.pick({ [name]: true } as any);
      fieldSchema.parse({ [name]: value });
    } catch (error: any) {
      if (error.errors && error.errors.length > 0) {
        setErrors((prev) => ({
          ...prev,
          [name]: [error.errors[0].message],
        }));
      }
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

    // Real-time validation for consent
    try {
      const consentSchema = educationInquirySchema.pick({ consent: true });
      consentSchema.parse({ consent: checked });
    } catch (error: any) {
      if (error.errors && error.errors.length > 0) {
        setErrors((prev) => ({
          ...prev,
          consent: [error.errors[0].message],
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitMessage("");

    // Client-side validation using Zod schema
    const validationResult = educationInquirySchema.safeParse(formData);

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
        const result = await submitEducationInquiry(formData);

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
          });
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

  return (
    <motion.section
      className="w-full max-w-none mx-auto px-4 sm:px-8 lg:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col items-center gap-14">
        {/* Header Section */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-secondary leading-[1.6] break-keep">
            글림케어 교육 문의
          </h2>
          <p className="text-base text-text-primary leading-[1.6] break-keep">
            교육 관련 문의는 아래 제공된 양식을 작성하여 제출해 주시기 바랍니다
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Submit Message */}
          {submitMessage && (
            <motion.div
              className={`mb-6 p-4 rounded-lg text-center ${
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

          <form onSubmit={handleSubmit} className="space-y-9">
            <div className="space-y-9">
              {/* Name Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Label
                  htmlFor="name"
                  className="text-lg font-semibold text-text-primary leading-[1.6]"
                >
                  이름
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`h-10 bg-gray-50 border rounded focus:border-secondary focus:ring-secondary ${
                    errors.name ? "border-red-500" : "border-text-primary/50"
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name[0]}</p>
                )}
              </motion.div>

              {/* Contact Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Label
                  htmlFor="contact"
                  className="text-lg font-semibold text-text-primary leading-[1.6]"
                >
                  연락처
                </Label>
                <Input
                  id="contact"
                  name="contact"
                  type="tel"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className={`h-10 bg-gray-50 border rounded focus:border-secondary focus:ring-secondary ${
                    errors.contact ? "border-red-500" : "border-text-primary/50"
                  }`}
                />
                {errors.contact && (
                  <p className="text-sm text-red-600">{errors.contact[0]}</p>
                )}
              </motion.div>

              {/* Email Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Label
                  htmlFor="email"
                  className="text-lg font-semibold text-text-primary leading-[1.6]"
                >
                  이메일
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`h-10 bg-gray-50 border rounded focus:border-secondary focus:ring-secondary ${
                    errors.email ? "border-red-500" : "border-text-primary/50"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email[0]}</p>
                )}
              </motion.div>

              {/* Message Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Label
                  htmlFor="message"
                  className="text-lg font-semibold text-text-primary leading-[1.6]"
                >
                  메시지
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="메시지를 입력하세요..."
                  required
                  rows={12}
                  className={`bg-gray-50 border rounded focus:border-secondary focus:ring-secondary resize-none min-h-0 h-auto ${
                    errors.message ? "border-red-500" : "border-text-primary/50"
                  }`}
                  style={{ height: "auto", minHeight: "12rem" }}
                />
                {errors.message && (
                  <p className="text-sm text-red-600">{errors.message[0]}</p>
                )}
              </motion.div>
            </div>

            {/* Consent Checkbox */}
            <motion.div
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={handleConsentChange}
                className="w-4 h-4 border border-text-primary data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
              />
              <Label
                htmlFor="consent"
                className="text-base text-black leading-[1.6] cursor-pointer"
              >
                약관에 동의합니다
              </Label>
              {errors.consent && (
                <p className="text-sm text-red-600 ml-2">{errors.consent[0]}</p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                type="submit"
                disabled={isPending || !formData.consent}
                className="bg-accent hover:bg-secondary text-white px-6 py-1 rounded-btn text-base leading-[1.6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "제출 중..." : "제출하기"}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EducationInquiryForm;
