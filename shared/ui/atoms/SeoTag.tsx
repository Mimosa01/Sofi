import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
}

export default function SeoTag ({ children, href }: Props) {
  return (
   <Link
    href={href}
    className="px-2 py-1 text-sm text-neutral-800 leading-4.5 bg-neutral-100 rounded-md"
   >
    {children}
   </Link> 
  )
}