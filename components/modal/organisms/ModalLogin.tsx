import InputField from "@/shared/ui/molecules/InputField";
import LoginEtc from "../molecules/LoginEtc";
import Button from "@/shared/ui/atoms/Button";
import EyeIcon from "@/shared/ui/svg/EyeIcon";
import Text from "@/shared/ui/atoms/Text";

export default function ModalLogin () {
  return (
    <div className="flex flex-col p-7 w-full">
      <LoginEtc className="mb-[15px]" />

      <div className="flex flex-col gap-[15px] mb-2.5">
        <InputField 
          fieldName="Почта"
          htmlFor="email"
          placeholder="example@mail.ru"
          type="email"
        />
        <InputField 
          fieldName="Пароль"
          htmlFor="password"
          placeholder="****"
          type="password"
          button={
            <Button>
              <EyeIcon />
            </Button>
          }
        />
      </div>
      <Button className="mb-5 leading-5">Забыли пароль?</Button>
      <Button className={`
        py-4 bg-linear-to-r from-[var(--color-primary-400)] to-[var(--color-secondary-400)]
        rounded-[18px] justify-center mb-[15px] md:mb-auto text-white text-lg leading-4.5
      `}>
        Войти
      </Button>
      <Text className="flex gap-1 justify-center text-neutral-600 text-lg">
        Ещё нет аккаунта?
        <Button className="text-primary-500 text-lg">
          Регистрация
        </Button>
      </Text>
    </div>
  )
}