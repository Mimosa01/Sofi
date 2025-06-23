import Heading from "@/shared/ui/atoms/Heading";
import ArrowAdsIcon from "@/shared/ui/svg/ArrowAdsIcon";
import Image from "next/image";

type Props = {
  yellow?: boolean;
}

export default function SidebarCardAds ({ yellow }: Props) {
  return (
    <div className={`
      flex flex-col justify-between p-5
      ${yellow 
        ? 'bg-[#FDF6E2] bg-[url(/images/gridSquareYellow.png)] bg-contain bg-no-repeat bg-center' 
        : 'gradient-primary-300 bg-[url(/images/gridSquareWhite.png)]'} rounded-lg
    `}>
      <Image 
        src={'/images/sofi.png'}
        alt="Sofi"
        width={60}
        height={60}
        className="mb-[15px]"
        style={{ width: '60px', height: '60px' }}
      />
      <Heading level={3} className={`mb-12.5 text-lg ${yellow ? 'font-semibold' : 'font-medium'} leading-5 -tracking-[0.5px]`}>
        Не зовут на интервью? Автоматизируй поиск работы своему AI ассистенту Софи
      </Heading>
      <div className={`flex justify-between items-center ${ yellow ? 'text-[#8E521E]' : 'text-primary-500'}`}>
        <a href={process.env.NEXT_PUBLIC_ADS_URL} className="text-lg font-semibold">Попробовать бесплатно</a>
        <ArrowAdsIcon />
      </div>
    </div>
  )
}