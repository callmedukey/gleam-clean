import { z } from "zod";

export const createOfficeSchema = z.object({
  name: z.string().min(1, "지점 이름은 필수입니다"),
  address: z.string().min(1, "주소는 필수입니다"),
  phone: z.string().min(1, "전화번호는 필수입니다"),
  hours: z.string().min(1, "운영시간은 필수입니다"),
  mapUrl: z.string().url("올바른 지도 URL을 입력해주세요"),
  order: z.coerce.number().int().min(0),
});

export const updateOfficeSchema = createOfficeSchema.extend({
  id: z.string().cuid("올바른 ID 형식이 아닙니다"),
});

export const deleteOfficeSchema = z.object({
  id: z.string().cuid("올바른 ID 형식이 아닙니다"),
});

export type CreateOfficeInput = z.infer<typeof createOfficeSchema>;
export type UpdateOfficeInput = z.infer<typeof updateOfficeSchema>;
export type DeleteOfficeInput = z.infer<typeof deleteOfficeSchema>;
