import Link from "next/link";
import { JSX, ReactNode } from "react";

type Props = {
  external?: boolean;
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}

export default function IconLink ({ external = true, href, children, className, label }: Props) {
  const Tag = (external ? 'a' : Link) as keyof JSX.IntrinsicElements; 

  return (
    <Tag href={href} aria-label={label} className={`group transition-all duration-400 ease-in-out ${className}`}>
      { children }
    </Tag>
  )
}