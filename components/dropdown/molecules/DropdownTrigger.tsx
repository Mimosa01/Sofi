import Text from "@/shared/ui/atoms/Text";
import Button from "../../../shared/ui/atoms/Button";
import ArrowDownIcon from "@/shared/ui/svg/ArrowDownIcon";
import { ReactNode } from "react";

type Props = {
  label: string;
  isOpen: boolean;
  onClick: () => void;
  icon?: ReactNode;
  className?: string;
}

export default function DropdownTrigger ({ icon, label, isOpen, className, onClick }: Props) {
  return ( 
    <Button
      onClick={onClick}
      aria-expanded={isOpen} 
      aria-haspopup="true"
      className={`flex items-center cursor-pointer ${className}`}
    >
      { icon }
      <Text className="text-neutral-800 text-base md:text-lg -tracking-[0.5px]">{ label }</Text>
      <ArrowDownIcon 
        className={`${ isOpen && 'rotate-180' } transition-transform duration-300`}
      />
    </Button>
  )
}