import { z } from 'zod';

export const addVacancySchema = z.object({
  title: z
    .string()
    .min(5, 'Заголовок должен содержать минимум 5 символов')
    .max(100, 'Слишком длинный заголовок'),

  description: z
    .string()
    .min(10, 'Описание вакансии слишком короткое'),

  salary: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: 'Введите корректную зарплату',
    }),

  city: z
    .string()
    .min(2, 'Название города слишком короткое'),

  company: z
    .string()
    .min(2, 'Название компании слишком короткое'),

  telegram: z
    .string()
    .regex(/^@[\w\d_]{3,}$/, 'Укажите Telegram в формате @username'),

  email: z
    .string()
    .email('Введите корректный email'),

  image: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: 'Загрузите изображение',
    })
    .optional(),
  internship: z.boolean().optional(),
  remote: z.boolean().optional(),
});

export type AddVacancyType = z.infer<typeof addVacancySchema>;