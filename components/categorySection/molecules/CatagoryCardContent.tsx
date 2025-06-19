import { ComponentType } from "react";
import Heading from "../../../shared/ui/atoms/Heading";
import Text from "../../../shared/ui/atoms/Text";
import { IconProps } from "@/types/icons";

type Props = {
  icon: ComponentType<IconProps>;
  name: string;
  description: string;
};

export default function CategoryCardContent({ icon: Icon, name, description }: Props) {
  return (
    <div className="relative z-20 flex flex-col flex-grow gap-3.5 group">
      
      <div className="relative transition-transform duration-400 group-hover:translate-y-2.5">
        <Icon width={26} height={26} />
        <Text className="absolute text-sm md:text-base text-neutral-800 font-medium leading-5 opacity-0 translate-y-2 transition-all duration-400 md:group-hover:opacity-100 md:group-hover:translate-y-2.5">
          {description}
        </Text>
      </div>
      
      <Heading level={2} className="mt-auto font-medium leading-4.5 tracking-[0.05px]">{name}</Heading>
    </div>
  );
}
