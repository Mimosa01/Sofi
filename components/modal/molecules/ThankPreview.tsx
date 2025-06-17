import Logo from "@/shared/ui/atoms/Logo";
import HeartIcon from "@/shared/ui/svg/HeartIcon";
import Image from "next/image";

export default function ThanckPreview () {
  return (
    <div className="flex flex-col justify-end gap-10 p-7.5 h-full items-center bg-neutral-100">
      <div className="relative">
        <HeartIcon width={48} height={48} className="absolute -top-22 right-1/5 rotate-16"/>
        <HeartIcon width={31} height={31} className="absolute -top-10 right-1/7 rotate-4"/>
        <HeartIcon width={24} height={24} className="absolute -top-2 right-1/4 -rotate-19"/>
        <Image
          priority 
          src={'/images/sofi.png'}
          width={276}
          height={286}
          alt="Sofi"
          className="mb-auto"
        />
      </div>
      <Logo />
    </div>
  )
}