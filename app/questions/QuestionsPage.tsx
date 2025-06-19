import FiltersQuestions from "@/components/questions/widgets/FiltersQuestions";
import { ALL_PATHS } from "@/lib/constants/contants";
import { getNameByQuery } from "@/lib/utils/getNameByQuery";
import BackgroundGradient from "@/shared/ui/atoms/BackgroundGradient";
import HeroPage from "@/shared/ui/molecules/HeroPage";
import SeoTagList from "@/shared/ui/molecules/SeoTagList";
import { PropsPage, QuestionType } from "@/types/constants";

export default function QuestionsPage ({ speciality, seoTagsList }: PropsPage<QuestionType>) {
  const header = getNameByQuery('speciality', speciality as string, '')

  return (
    <main className="relative pb-5">
      <BackgroundGradient 
        className="absolute -top-1/8 left-0" 
      />
      <section className="mx-auto max-w-[1022px]">
        <HeroPage 
          header={header ? `Вопросы по ${header} на собеседовании` : 'Все вопросы с собеседований'}
          text="
            Раздел помогает пользователям подготовиться к техническим и поведенческим интервью. Здесь собраны реальные вопросы, 
            которые задают работодатели, а также готовые ответы и пояснения. Вопросы сгруппированы по стеку и уровню сложности
          "
        />
        <FiltersQuestions />

        <SeoTagList basePath={ALL_PATHS.VACANCIES} tagsList={seoTagsList} />
      </section>
    </main>
  )
}