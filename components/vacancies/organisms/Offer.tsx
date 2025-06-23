'use client'

import { VacancyType } from "@/types/constants";
import CompanyInfo from "../molecules/CompanyInfo";
import useAuthStore from "@/lib/store/useAthStore";
import Button from "@/shared/ui/atoms/Button";
import useModalStore from "@/components/modal/store/modalStore";
import SidebarCardWrapper from "@/shared/ui/atoms/SidebarCardWrapper.tsx";

type Props = {
  item: VacancyType;
}

export default function Offer ({ item }: Props) {
  const { user } = useAuthStore((state) => state);
  const { setType, toggleShow } = useModalStore((state) => state);
  
  const handleClick = () => {
    setType('reg');
    toggleShow();
  }

  return (
    <SidebarCardWrapper className="flex flex-col gap-[15px]">
      <CompanyInfo image={item.image} companyName={item.company_name} location={item.location} />
      <div className="flex flex-col gap-[5px]">
        <a 
          href={process.env.NEXT_PUBLIC_ADS_URL}
          className="py-3 w-full text-lg text-center leading-5 rounded-xl gradient-primary-300"
        >
          Получить оффер
        </a>
        {
          user 
          ? <a href={item.url} className="oy-3 w-full text-lg text-center leading-5 rounded-xl">Откликнуться</a>
          : <Button onClick={handleClick} className="py-3 w-full justify-center text-lg leading-5 rounded-xl bg-neutral-200">Откликнуться</Button>
        }
      </div>
    </SidebarCardWrapper>
  )
}