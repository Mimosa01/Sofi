'use client'

import Specializations from "@/components/specializations/Specializations"
import { MENU_LINKS } from "@/lib/constants/contants"
import { Suspense } from "react"
import CategoryCardLong from "../molecules/CategoryCardLong"
import PostVacancyCard from "../molecules/PostVanacyCard"
import CategoryCard from "../organisms/CategoryCard"
import { useSearchParams } from "next/navigation"

export default function CategorySection () {
  const searchParams = useSearchParams();
  const selectedSpec = searchParams.get('speciality') || '';
  
  return (
    <section className="px-[15px] font-wix-text -tracking-[0.5px]">
      <Suspense>
        <Specializations fontSize={'text-[22px]'} className="flex-wrap md:flex-nowrap justify-center"/>
      </Suspense>

      <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid-flow-dense gap-2 mx-auto mb-12.5 md:mb-25 max-w-5xl">
        {MENU_LINKS.map((item) => (
          item.id !== 9 
          ? <CategoryCard key={item.id} item={item} paramKey={selectedSpec}/>
          : <CategoryCardLong key={item.id} href={item.href} text={item.description} />
        ))}
        <PostVacancyCard />
      </div>
    </section>
  )
}