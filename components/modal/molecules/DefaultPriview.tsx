import Heading from "@/shared/ui/atoms/Heading";
import Logo from "@/shared/ui/atoms/Logo";
import Image from "next/image";

export default function DefaultPreview () {
  return (
    <div className="flex flex-col gap-10 p-7.5 h-full items-center bg-neutral-100">
      <Heading level={3} className="text-[22px] text-center leading-6.5">
        Вы готовы к большему. <br/>Мы поможем начать.
      </Heading>
      <Image
        priority 
        src={'/images/sofi.png'}
        width={276}
        height={286}
        alt="Sofi"
        className="mb-auto"
      />

      <Logo />
    </div>
  )
}