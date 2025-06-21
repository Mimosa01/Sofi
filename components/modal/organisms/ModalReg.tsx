'use client'

import InputField from "@/shared/ui/molecules/InputField";
import LoginEtc from "../molecules/LoginEtc";
import Button from "@/shared/ui/atoms/Button";
import EyeIcon from "@/shared/ui/svg/EyeIcon";
import Text from "@/shared/ui/atoms/Text";
import { useFormValidation } from "../hooks/useFormValidation";
import { RegisterFormType, registerSchema } from "@/lib/validation/register.shema";
import useModalStore from "@/components/modal/store/modalStore";

export default function ModalReg () {
  const { setType } = useModalStore((state) => state)
  const { register, onSubmit, formState: { errors } } = useFormValidation<RegisterFormType>(
    registerSchema,
    async data => { 
      console.log(data);
      setType('subscribe')
    }
  );

  const handleClick = () => {
    setType('auth');
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col p-7 w-full">
      <LoginEtc className="mb-auto" />

      <div className="flex flex-col gap-[15px] mb-2.5">
        <InputField 
          fieldName="Имя"
          htmlFor="name"
          placeholder="Светлана"
          type="text"
          error={errors.name?.message}
          {...register("name")}
        />
        <InputField 
          fieldName="Почта"
          htmlFor="email"
          placeholder="example@mail.ru"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <InputField 
          fieldName="Пароль"
          htmlFor="password"
          placeholder="****"
          type="password"
          error={errors.password?.message}
          {...register("password")}
          button={<EyeIcon />}
        />
        <InputField 
          fieldName="Ещё раз пароль"
          htmlFor="passwordConfirm"
          placeholder="****"
          type="password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
          button={<EyeIcon />}
        />
      </div>
      <Button className="mb-5 leading-5">Забыли пароль?</Button>
      <Button 
        type="submit"
        className={`
          mb-[15px] py-4 bg-linear-to-r from-[var(--color-primary-400)] to-[var(--color-secondary-400)]
          rounded-[18px] justify-center text-white text-lg leading-4.5
        `}>
        Зарегистрироваться
      </Button>
      <Text className="flex gap-1 justify-center text-neutral-600 text-lg leading-5">
        Уже есть аккаунт?
        <Button className="text-primary-500 text-lg leading-5" type="button" onClick={handleClick}>
          Войти
        </Button>
      </Text>
    </form>
  )
}