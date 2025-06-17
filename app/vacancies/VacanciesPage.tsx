import FiltersVacancies from "@/components/vacancies/widgets/FiltersVacancies";
import HeroPage from "@/shared/ui/molecules/HeroPage";

export default function VacanciesPage () {
  return (
    <main className="w-full bg-[url(/images/bgHero.png)] bg-no-repeat bg-cover">
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