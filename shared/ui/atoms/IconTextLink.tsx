import { wixMadeforText } from "@/app/fonts";
import { IconProps } from "@/types/icons";
import Link from "next/link";
import { ComponentType, JSX, memo } from "react";

type Props = {
  external?: boolean;
  href: string;
  icon?: ComponentType<IconProps>;
  sizeIcon?: { width: number, height: number };
  name?: string;
  className?: string;
  label?: string
};

function IconTextLinkComponent ({ external, label, href, icon: Icon, sizeIcon, name, className = "" }: Props) {
  const Tag = (external ? 'a' : Link) as keyof JSX.IntrinsicElements; 

  return (
    <Tag href={href} aria-label={label} className={`flex gap-1.5 items-center whitespace-nowrap group transition-all duration-400 ease-in-out ${className} ${wixMadeforText.variable}`}>
      { Icon && <Icon width={sizeIcon?.width || 20} height={sizeIcon?.height || 20} /> }
      {name && <span>{name}</span>}
    </Tag>
  )
}

const IconTextLink = memo(IconTextLinkComponent);
export default IconTextLink;