import DropdownFilter from "@/components/dropdown/widgets/DropdownFilter";
import { ALL_PARAMS, ALL_PATHS, CITIES, SOURCES, SPECIALIZATIONS } from "@/lib/constants/contants";
import FilterSwitch from "../organisms/FilterSwitch";
import Link from "next/link";

export default function FiltersVacancies () {
  return (
    <div className="flex flex-wrap justify-between gap-4 mb-[25px] pb-2 md:pb-0 w-full">
      <Link href={ALL_PATHS.VACANCIES_ADD} className="px-[15px] py-3 text-nowrap gradient-primary-300 rounded-xl">
        Добавить вакансию
      </Link>
      <div className="flex flex-wrap gap-2.5">
        <DropdownFilter 
          items={SPECIALIZATIONS}
          paramKey={ALL_PARAMS.SPECIALITY}
          defaultLabel="Специализация"
        />
        <DropdownFilter 
          items={SOURCES}
          paramKey={ALL_PARAMS.SOURCE}
          defaultLabel="Источник"
        />
        <DropdownFilter 
          items={CITIES}
          paramKey={ALL_PARAMS.LOCATION}
          defaultLabel="Город"
        />
        <FilterSwitch text="Удаленно" paramKey="remote" defaultLabel="false" label="Удаленная работу"/>
        <FilterSwitch text="Стажировка" paramKey="intership" defaultLabel="false" label="Стажировку"/>
      </div>
    </div>
  )
}