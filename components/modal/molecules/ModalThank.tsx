import Button from "@/shared/ui/atoms/Button";
import Heading from "@/shared/ui/atoms/Heading";
import Text from "@/shared/ui/atoms/Text";
import useStore from "../store/modalStore";
import { useRouter, useSearchParams } from "next/navigation";

export default function ModalThank () {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const { toggleShow } = useStore((state) => state);

  const handleClick = () => {
    toggleShow();
    if (from) {
      router.push(from);
    }
  }

  return (
    <div className="flex flex-col gap-5 p-7.5 w-fit">
      <Heading level={3} className="text-black text-2xl font-semibold">
        Спасибо за подписки!
      </Heading>

      <Text className="text-lg text-neutral-800 leading-5.5">Доступ к платформе полностью открыт и будет всегда доступен для твоего аккаунта.</Text>
      <Text className="mb-auto text-lg text-neutral-800 leading-5.5">Желаем тебе быстрого поиска работы 🩵</Text>
      <Button className={`
          py-4 text-white bg-linear-to-r from-[var(--color-primary-400)] to-[var(--color-secondary-400)]
          rounded-[18px] justify-center
        `}
        onClick={handleClick}
      >
        Ура, спасибо :)
      </Button>
    </div>
  )
}