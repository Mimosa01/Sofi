import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isOpen: boolean;
}

export default function DropdownSimpleMenu ({ children, isOpen }: Props) {
  if (!isOpen) return null;
  
  return (
    <div className={`
      absolute top-15 left-0 py-2.5 min-w-[224px] w-full z-20 bg-white rounded-xl shadow-popup
    `}>
      { children }
    </div>
  )
}