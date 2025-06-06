import { z } from "zod";

// Phone number validation - only numbers and hyphens
const phoneRegex = /^[0-9-]+$/;

// Base inquiry schema that can be reused across different inquiry types
export const baseInquirySchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요.").trim(),
  contact: z
    .string()
    .min(1, "연락처를 입력해주세요.")
    .regex(phoneRegex, "연락처는 숫자와 하이픈(-)만 입력 가능합니다.")
    .trim(),
  email: z
    .string()
    .min(1, "이메일을 입력해주세요.")
    .email("올바른 이메일 주소를 입력해주세요.")
    .trim(),
  message: z.string().min(1, "메시지를 입력해주세요.").trim(),
  consent: z.boolean().refine((val) => val === true, {
    message: "약관에 동의해주세요.",
  }),
});

// Education inquiry specific schema
export const educationInquirySchema = baseInquirySchema;

// Quote inquiry schema (for future use)
export const quoteInquirySchema = baseInquirySchema.extend({
  // Add quote-specific fields here if needed
  // company: z.string().optional(),
  // projectType: z.string().optional(),
});

// General inquiry schema (for future use)
export const generalInquirySchema = baseInquirySchema;

// Export types
export type BaseInquiryFormData = z.infer<typeof baseInquirySchema>;
export type EducationInquiryFormData = z.infer<typeof educationInquirySchema>;
export type QuoteInquiryFormData = z.infer<typeof quoteInquirySchema>;
export type GeneralInquiryFormData = z.infer<typeof generalInquirySchema>;
