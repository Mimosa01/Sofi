'use client'

import { wixMadeforDisplay } from "@/app/fonts";
import { useFormValidation } from "@/components/modal/hooks/useFormValidation";
import { addVacancySchema, AddVacancyType } from "@/lib/validation/addVacancy.shema";
import BackgroundGradient from "@/shared/ui/atoms/BackgroundGradient";
import Button from "@/shared/ui/atoms/Button";
import Heading from "@/shared/ui/atoms/Heading";
import Checkbox from "@/shared/ui/molecules/Checkbox";
import ImageUpload from "@/shared/ui/molecules/ImageUpload";
import InputField from "@/shared/ui/molecules/InputField";
import TextAreaField from "@/shared/ui/molecules/TextAreaField";

export default function AddVacancyPage () {
  const { register, onSubmit, formState: { errors } } = useFormValidation<AddVacancyType>(
    addVacancySchema,
    async (data) => {
      // Временно
      console.log(data)
    }
  );

  return (
    <main className={`relative ${wixMadeforDisplay.className}`}>
      <BackgroundGradient 
        className="absolute -top-1/8 left-0" 
      />
      <section className="mx-auto px-[15px] md:px-0 pt-[141px] pb-5 max-w-[560px]">
        <Heading level={2} className="mb-6 text-neutral-800 text-[26px] font-semibold leading-7.5">Разместить вакансию</Heading>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <InputField 
            fieldName="Заголовок вакансии"
            required
            htmlFor="title"
            placeholder="Тестировщик"
            type="text"
            error={errors.title?.message}
            {...register('title')}
          />
          <TextAreaField 
            fieldName="Описание вакансии"
            htmlFor="description"
            placeholder="Расскажите о вакансии"
            className="w-full min-h-[415px]"
            error={errors.description?.message}
            {...register('description')}
          />
          <InputField 
            fieldName="Загрплата"
            htmlFor="salary"
            placeholder="10 000"
            type="text"
            error={errors.salary?.message}
            {...register("salary")}
          />
          <div className="flex flex-col gap-3 mb-5">
            <Checkbox 
              htmlFor="internship"
              fieldName="Стажировка"
              {...register('internship')}
            />
            <Checkbox 
              htmlFor="remote"
              fieldName="Удаленно"
              {...register('remote')}
            />
          </div>
          <InputField 
            fieldName="Город"
            htmlFor="city"
            placeholder="Москва"
            type="text"
            error={errors.city?.message}
            {...register('city')}
          />
          <div className="flex gap-2.5 items-end">
            <InputField 
              fieldName="Компания"
              htmlFor="company"
              placeholder="Введите название города"
              type="text"
              error={errors.company?.message}
              {...register('company')}
            />
            <ImageUpload error={errors.company?.message}/>
          </div>
          <div className="flex flex-col md:flex-row gap-[15px]">
            <InputField 
              fieldName="Telegram"
              htmlFor="telegram"
              placeholder="@username"
              type="text"
              error={errors.telegram?.message}
              {...register('telegram')}
            />
            <InputField 
              fieldName="Почта"
              htmlFor="email"
              placeholder="example@mail.ru"
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>
          <Button type="submit" className="px-[15px] py-3 justify-center text-nowrap gradient-primary-300 rounded-xl">
            Добавить вакансию
          </Button>
        </form>
      </section>
    </main>
  )
}