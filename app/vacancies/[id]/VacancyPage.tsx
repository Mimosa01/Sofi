import { wixMadeforDisplay } from "@/app/fonts";
import MainSectionSkeleton from "@/components/skeleton/widgets/MainSectionSkeleton";
import MainSectionVacancy from "@/components/vacancies/widgets/MainSectionVacancy";
import SidebarVacancy from "@/components/vacancies/widgets/SidebarVacancy";
import { ALL_PATHS } from "@/lib/constants/contants";
import { fetcher } from "@/lib/fetch/fetcher";
import BackgroundGradient from "@/shared/ui/atoms/BackgroundGradient";
import TagList from "@/shared/ui/molecules/TagList";
import { VacancyType } from "@/types/constants";
import { Suspense } from "react";

type Props = {
  id: number;
}

export default async function VacancyPage ({ id }: Props) {
  const data: VacancyType = await fetcher(`${ALL_PATHS.VACANCIES}/${id}`, undefined, {
    revalidate: 60
  });

  return (
    <div className="relative pb-5">
      <BackgroundGradient 
        className="absolute -top-1/8 left-0" 
      />
      <section className={`flex flex-col md:flex-row gap-7.5 md:gap-15 mx-auto px-[15px] md:px-0 pt-[176px] max-w-[1020px] ${wixMadeforDisplay.className}`}>
        <Suspense fallback={<MainSectionSkeleton />}>
          <MainSectionVacancy id={id} className="max-w-[660px] w-full"/>
        </Suspense>
        <SidebarVacancy item={data} className="max-w-full md:max-w-[300px] pb-5 md:pb-0"/>
      </section>
      <TagList tags={['tag_1', 'tag_2']}/>
    </div>
  )
}