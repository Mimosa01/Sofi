import FiltersVacancies from "@/components/vacancies/widgets/FiltersVacancies";
import BackgroundGradient from "@/shared/ui/atoms/BackgroundGradient";
import HeroPage from "@/shared/ui/molecules/HeroPage";

export default function VacanciesPage () {
  return (
    <main className="relative">
      <BackgroundGradient 
        className="-top-1/2 left-0" 
      />
      <section className="mx-auto max-w-[1022px]">
        <HeroPage 
          header="Вакансии по Data Science"
          text="На этой странице агрегируются junior-вакансии и стажировки из различных источников: hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие другие"
        />
        <FiltersVacancies />
      </section>
    </main>
  )
}