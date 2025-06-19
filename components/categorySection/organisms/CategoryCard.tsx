import { MenuLinkType } from "@/types/constants";
import Link from "next/link";
import { CardIconBackground } from "../atoms/CardIconBackgtound";
import CategoryCardContent from "../molecules/CatagoryCardContent";
import { GradientBackground } from "../lib/GradientBackground";

type Props = {
  item: MenuLinkType;
  paramKey: string;
};

export default function CategoryCard({ item, paramKey }: Props) {
  const queryPath = paramKey !== '' ? '?speciality=' + paramKey : '';
  return (
    <Link  href={`${item.href + queryPath}`} className={`
      relative flex flex-col gap-3.5  p-[14px] md:p-5 h-37 md:h-70 text-base md:text-xl font-semibold leading-5 rounded-md bg-neutral-100 overflow-hidden group
    `}>
      <GradientBackground id={item.id}/>
      <CardIconBackground
        className="
        absolute bottom-0 left-0
        opacity-0 translate-y-8 -translate-x-10
        transition-all duration-300 ease-out
        pointer-events-none z-10
        group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0
        "
      />
      <CategoryCardContent
        icon={item.icon}
        name={item.name}
        description={item.description}
      />
    </Link>
  );
}
