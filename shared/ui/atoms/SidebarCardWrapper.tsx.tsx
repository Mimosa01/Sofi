import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
}

export default function SidebarCardWrapper ({ className, children }: Props) {
  return (
    <div className={`p-5 bg-neutral-100 rounded-lg ${className}`}>
      { children }
    </div>
  )
}