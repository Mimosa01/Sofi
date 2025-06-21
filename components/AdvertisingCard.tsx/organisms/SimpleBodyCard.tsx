import Heading from "@/shared/ui/atoms/Heading";
import LinkAds from "../atoms/LinkAds";
import Image from "next/image";

export default function SimpleBodyCard () {
  return (
    <div className="flex flex-col justify-between p-[15px] gradient-ads-card rounded-lg">
      <Heading level={3} className="w-[80%] text-neutral-800 font-semibold text-lg lg:text-[22px] leading-6">
        Больше никакого поиска и откликов — автоматизируй свой путь к работе вместе с Софи!
      </Heading>
      <div className="flex justify-between items-end rounded-lg">
        <LinkAds className="px-[15px] py-2.5 text-white text-base leading-4.5 bg-neutral-800 rounded-xl"/>
        <Image 
          priority
          src={'/images/sofi.png'}
          alt="Sofi"
          width={0}
          height={0}
          sizes="(max-width: 640px) 72px, 74px"
          className="w-[72px] h-[74px] lg:w-[94px] lg:h-[94px]"
        />
      </div>
    </div>
  )
}