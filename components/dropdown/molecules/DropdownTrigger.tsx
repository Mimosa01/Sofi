import Text from "@/shared/ui/atoms/Text";
import Button from "../../../shared/ui/atoms/Button";
import ArrowDownIcon from "@/shared/ui/svg/ArrowDownIcon";
import MenuIcon from "@/shared/ui/svg/MenuIcon";

type Props = {
  label: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function DropdownTrigger ({ label, isOpen, onClick }: Props) {
  return ( 
    <Button
      onClick={onClick}
      aria-expanded={isOpen} 
      aria-haspopup="true"
      className="flex items-center"
    >
      <MenuIcon />
      <Text className="text-base md:text-lg -tracking-[0.5px]">{ label }</Text>
      {/* <span className="text-base md:text-lg -tracking-[0.5px]">{ label }</span> */}
      <ArrowDownIcon />
    </Button>
  )
}