import Heading from "@/shared/ui/atoms/Heading"
import Text from "@/shared/ui/atoms/Text"
import Image from "next/image"

export default function HeroSection () {
  return (
    <section className="flex flex-col items-center gap-5 mx-auto mb-12.5 md:mb-19.5 pt-45 md:pt-44 w-70 md:w-110 text-center">
      <Image src={'/images/sofi.png'} alt="Sofi" width={96.1} height={99} className="aspect-[137/143]"/>
      <Heading 
        level={1}
        className="w-55 md:w-110 text-[26px] md:text-[50px] font-wix-display font-bold -tracking-[1px] leading-7.5 md:leading-13"
      >
        Твой Ассистент по поиску работы
      </Heading>
      <Text className="w-65 md:w-104 text-neutral-700 font-normal font-wix-display text-lg md:text-[22px] leading-5.5 md:leading-6.5">
        Я собрала для тебя все в одном месте, чтобы ты смог быстро найти работу
      </Text>
    </section>
  )
}