import Specializations from "@/features/specializations/Specializations"
import { MENU_LINKS } from "@/lib/constants/contants"
import CategoryCardLong from "./molecules/CategoryCardLong"
import PostVacancyCard from "./molecules/PostVanacyCard"
import CategoryCard from "./organisms/CategoryCard"

export default function CategorySection () {
  return (
    <section className="px-[15px] font-wix-text -tracking-[0.5px]">
      <Specializations fontSize={'text-[22px]'}/>

      <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid-flow-dense gap-2 mx-auto mb-12.5 md:mb-25 max-w-5xl">
        {MENU_LINKS.map((item) => (
          item.id !== 9 
          ? <CategoryCard key={item.id} item={item}/>
          : <CategoryCardLong key={item.id} href={item.href} text={item.description} />
        ))}
        <PostVacancyCard />
      </div>
    </section>
  )
}