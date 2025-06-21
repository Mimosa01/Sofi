import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Введите почту" })
    .email("Некорректный формат почты"),

  password: z
    .string({ required_error: "Введите пароль" })
    .min(6, { message: "Пароль должен быть минимум 6 символов" }),
});

export type LoginFormType = z.infer<typeof loginSchema>;
