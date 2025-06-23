'use client';

import InputField from "@/shared/ui/molecules/InputField";
import LoginEtc from "../molecules/LoginEtc";
import Button from "@/shared/ui/atoms/Button";
import EyeIcon from "@/shared/ui/svg/EyeIcon";
import Text from "@/shared/ui/atoms/Text";
import { LoginFormType, loginSchema } from "@/lib/validation/auth.shema";
import { useFormValidation } from "../hooks/useFormValidation";
import useModalStore from "@/components/modal/store/modalStore";
import { login } from "@/lib/api/login";
import useAuthStore from "@/lib/store/useAthStore";
import { toast } from "sonner";

export default function ModalLogin () {
  const { setType, toggleShow } = useModalStore((state) => state);
  const { setUser } = useAuthStore(state => state);
  const { register, onSubmit, formState: { errors } } = useFormValidation<LoginFormType>(
    loginSchema,
    async (data) => {
      // Временно
      const username = 'user'
      try {
        await login(username, data.password);
        setUser({username: username});
        toggleShow();
        toast.success("Добро пожаловать!");
      } catch (error) {
        toast.error("Неверный логин или пароль");
        console.error("Ошибка входа:", error);
      }
    }
  );

  const handleClick = () => {
    setType('reg');
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col p-7 w-full">
      <LoginEtc className="mb-auto" />

      <div className="flex flex-col gap-[15px] mb-2.5">
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
      </div>

      <Button type="button" className="mb-5 leading-5">Забыли пароль?</Button>

      <Button
        type="submit"
        className={`
          mb-[15px] py-4 bg-linear-to-r from-[var(--color-primary-400)] to-[var(--color-secondary-400)]
          rounded-[18px] justify-center text-white text-lg leading-4.5
        `}
      >
        Войти
      </Button>

      <Text className="flex gap-1 justify-center text-neutral-600 text-lg">
        Ещё нет аккаунта?
        <Button className="text-primary-500 text-lg" type="button" onClick={handleClick}>
          Регистрация
        </Button>
      </Text>
    </form>
  );
}
