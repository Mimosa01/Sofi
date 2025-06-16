import Link from "next/link";
import { JSX } from "react";

type Props = {
  external?: boolean;
  href: string;
  icon?: (props: { width: number; height: number }) => JSX.Element;
  sizeIcon?: { width: number, height: number };
  name?: string;
  className?: string;
  label?: string
};

export default function IconTextLink({ external, label, href, icon, sizeIcon, name, className = "" }: Props) {
  const Tag = (external ? 'a' : Link) as keyof JSX.IntrinsicElements; 

  return (
    <Tag href={href} aria-label={label} className={`flex gap-1.5 items-center whitespace-nowrap group transition-all duration-400 ease-in-out ${className}`}>
      { icon && icon({ width: sizeIcon?.width || 20, height: sizeIcon?.height || 20 }) }
      {name && <span>{name}</span>}
    </Tag>
  )
}

