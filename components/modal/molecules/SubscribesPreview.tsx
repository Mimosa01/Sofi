import { CHANNELS_DATA } from "@/lib/constants/contants";
import Image from "next/image";

export default function SubscribesPreview () {
  return (
    <div className="relative h-full bg-neutral-100 bg-[url(/images/grid.png)] bg-cover bg-center">
      {CHANNELS_DATA.map((item) => (
        <div key={item.id} className={`absolute ${item.position} rounded-full`}>
          <Image 
            src={item.path}
            alt={item.alt}
            width={120}
            height={120}
          />
          <div className={`absolute ${item.positionClassName} px-[3px] py-[5px] bg-primary-500 rounded-[6px]`}>
            <a href="#" className="text-white text-base leading-4">{ item.alt }</a>
          </div>
        </div>
      ))}
    </div>
  )
}