'use client'

import Heading from "@/shared/ui/atoms/Heading";
import Text from "@/shared/ui/atoms/Text";
import useStore from "@/components/modal/store/modalStore";

export default function ModalSubscribe () {
  const { setType } = useStore((state) => state);
  const handleClick = () => {
    setType('thank')
  }
  return (
    <div className="flex flex-col gap-5 p-7.5 w-fit">
      <Heading level={3} className="text-black text-2xl font-semibold">
        Ты успешно авторизовался!
      </Heading>

      <Text className="text-lg text-neutral-800 leading-5.5">
        На нашем сервисе собрано больше 1.000 вопросов с собеседований, сотни тестовых заданий, контакты рекрутеров и многое другое.
      </Text>
      <Text className="mb-auto text-lg text-neutral-800 leading-5.5">
        Все это мы отдаем тебе бесплатно, взамен на подписку на наши телеграм каналы. Именно они помогают монетизировать нашу платформу и обновлять весь наш контент.
      </Text>
      <a href="#" className={`
          flex py-4 text-white bg-linear-to-r from-[var(--color-primary-400)] to-[var(--color-secondary-400)]
          rounded-[18px] justify-center
        `}
        onClick={handleClick}
      >
        Подписаться на каналы
      </a>
    </div>
  )
}