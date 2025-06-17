import Button from "@/shared/ui/atoms/Button";
import DividerWithText from "@/shared/ui/atoms/DividerWithText";
import Text from "@/shared/ui/atoms/Text";
import HHIcon from "@/shared/ui/svg/HHIcon";
import TGColorIcon from "@/shared/ui/svg/TGColorIcon";

type Props = {
  className?: string;
}

export default function LoginEtc ({ className }: Props) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-2 mb-[15px]">
        <Button className="justify-center py-3 bg-neutral-200 rounded-xl">
          <TGColorIcon />
          <Text className="text-lg leading-5">Войти через Telegram</Text>
        </Button>

        <Button className="justify-center py-3 bg-neutral-200 rounded-xl">
          <HHIcon />
          <Text className="text-lg leading-5">Войти через HH.ru</Text>
        </Button>
      </div>

      <DividerWithText text="или"/>

    </div>
  )
}