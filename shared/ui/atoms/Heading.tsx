import { JSX, ReactNode } from "react"

type Props = {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export default function Heading ({ children, level, className }:Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`font-bold ${className}`}>{children}</Tag>;
}