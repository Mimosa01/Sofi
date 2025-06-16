import Text from "@/shared/ui/atoms/Text";
import DuckIcon from "@/shared/ui/svg/DuckIcon";

type Props = {
  leftText: string;
  rightText: string;
}

export default function TickerItem({ leftText, rightText }: Props) {
  return (
    <div className="flex items-center text-sm md:text-base leading-4.5 font-medium whitespace-nowrap">
      <Text className="mx-4">{leftText}</Text>
      <DuckIcon />
      <Text className="mx-4">{rightText}</Text>
      <DuckIcon />
    </div>
  );
}