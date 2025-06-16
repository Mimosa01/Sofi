import Heading from "@/shared/ui/atoms/Heading";
import Text from "@/shared/ui/atoms/Text";
import Link from "next/link";

type Props = {
  className?: string;
}

export default function TestSalaryCard ({ className }: Props) {
  return (
    <Link
      href="/"
      className={`
        relative flex flex-col gap-7.5 md:gap-12.5 items-center md:items-start p-4 w-[100%] 
        md:w-39 md:h-38 bg-neutral-800 rounded-lg text-base font-wix-text -tracking-[0.5px] font-medium leading-4.5 z-10 before:absolute before:top-0 
        before:left-0 before:right-0 before:bottom-0 before:bg-[rgba(255,255,255,0.05)] before:rounded-lg md:before:hidden
        ${className}
      `}
    >
      <Heading level={4} className="w-37.5 md:w-auto">На какую зарплату я могу претендовать?</Heading>
      <Text className="text-neutral-500">Пройти тест</Text>
    </Link>
  );
}
