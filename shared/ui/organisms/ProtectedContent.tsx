'use client'

import useModalStore from "@/components/modal/store/modalStore";
import useAuthStore from "@/lib/store/useAthStore";
import Button from "@/shared/ui/atoms/Button";
import Heading from "@/shared/ui/atoms/Heading";
import Text from "@/shared/ui/atoms/Text";

type Props = {
  type: 'vacancy' | 'question';
}

export default function ProtectedContent ({ type }: Props) {
  const { setType, toggleShow } = useModalStore((state) => state);
  const { user } = useAuthStore((state) => state);

  const handleClick = () => {
    setType('reg');
    toggleShow();
  }

  if (!user) {
    return (
      <div className="absolute bottom-0 left-0 flex flex-col justify-end mx-auto h-80 w-full bg-[linear-gradient(to_top,_white_70%,_transparent_100%)] md:bg-[linear-gradient(to_top,_white_65%,_transparent_100%)]">
        <div className="flex flex-col items-center mx-auto w-full md:w-[70%]">
          <Heading level={4} className="mb-2.5 text-neutral-800 text-xl md:text-[22px] font-semibold leading-6.5 md:text-center">
            {
              type === 'vacancy' 
              ? 'Получите доступ к 1200 вакансиям и стажировкам'
              : 'Получить доступ ко всем вопросам с собеседований'
            }
          </Heading>
          <Text className="mb-5 text-neutral-500 text-[14px] md:text-lg leading-5.5 md:text-center">
            Сервис можно использовать бесплатно, без ограничений. Чтобы получить полный доступ, вам необходимо зарегистрироваться. 
          </Text>
          <Button className="
              justify-center px-5 py-5 w-full md:w-fit text-white text-lg leading-5 rounded-[18px] gradient-primary-100 hover:opacity-85 
              transition-all duration-300
            "
            onClick={handleClick}
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
    )
  } else {
    return null;
  }
}