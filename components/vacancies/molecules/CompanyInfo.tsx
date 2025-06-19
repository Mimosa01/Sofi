import Heading from "@/shared/ui/atoms/Heading";
import Text from "@/shared/ui/atoms/Text";
import Image from "next/image";

type Props = {
  image: string;
  companyName: string;
  location: string;
}

export default function CompanyInfo ({ companyName, location }: Props) {
  return (
    <div className="flex gap-2.5">
      <Image 
        src={'/images/image.png'}
        alt={companyName}
        width={42}
        height={42}
      />

      <div className="flex flex-col">
        <Heading level={4} className="text-neutral-800 text-lg font-medium leading-5.5">{ companyName }</Heading>
        <Text className="text-neutral-600 text-base font-medium leading-5">{ location }</Text>
      </div>
    </div>
  )
}