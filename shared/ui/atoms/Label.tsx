import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  htmlFor: string;
  className?: string;
}

export default function Label ({ children, htmlFor, className }: Props) {
  return (
    <label htmlFor={htmlFor} className={`
      flex flex-col gap-2
      ${ className }
    `}>
      { children }
    </label>
  )
}