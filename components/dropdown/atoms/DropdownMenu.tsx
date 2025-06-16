import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isOpen: boolean;
}

export default function DropdownMenu ({ children, isOpen }: Props) {
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-13 left-1/2 transform -translate-x-[52.5%] z-10 p-5 w-[350px] md:w-fit bg-white rounded-xl shadow-popup">
      { children }
    </div>
  )
}