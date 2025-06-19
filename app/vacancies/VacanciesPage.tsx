import FiltersVacancies from "@/components/vacancies/widgets/FiltersVacancies";
import VacanciesList from "@/components/vacancies/widgets/VacanciesList";
import { ALL_PATHS } from "@/lib/constants/contants";
import { getNameByQuery } from "@/lib/utils/getNameByQuery";
import BackgroundGradient from "@/shared/ui/atoms/BackgroundGradient";
import HeroPage from "@/shared/ui/molecules/HeroPage";
import SeoTagList from "@/shared/ui/molecules/SeoTagList";
import { PropsPage, VacancyType } from "@/types/constants";
import { Suspense } from "react";

export default function VacanciesPage ({ seoTagsList, data, speciality }: PropsPage<VacancyType> ) {
  const header = getNameByQuery('speciality', speciality as string, '')
  return (
    <main className="relative px-[15px] pb-5">
      <BackgroundGradient 
        className="absolute -top-1/8 left-0" 
      />
      <section className="mx-auto max-w-[1022px]">
        <HeroPage 
          header={header ? `Вакансии по ${header}` : 'Все вакансии'}
          text="На этой странице агрегируются junior-вакансии и стажировки из различных источников: hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие другие"
        />
        <Suspense>
          <FiltersVacancies />
        </Suspense>
        <VacanciesList items={data}/>
        <SeoTagList basePath={ALL_PATHS.VACANCIES} tagsList={seoTagsList} />
      </section>
    </main>
  )
}