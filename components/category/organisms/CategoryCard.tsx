import { GradientBackground } from "@/components/category/lib/GradientBackground";
import { MenuLinkType } from "@/types/constants";
import Link from "next/link";
import { CardIconBackground } from "../atoms/CardIconBackgtound";
import CategoryCardContent from "../molecules/CatagoryCardContent";

type Props = {
  item: MenuLinkType;
};

export default function CategoryCard({ item }: Props) {
  return (
    <Link href={item.href} className={`
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
