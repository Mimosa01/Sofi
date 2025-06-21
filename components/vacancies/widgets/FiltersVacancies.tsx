import DropdownFilter from "@/components/dropdown/widgets/DropdownFilter";
import { ALL_PARAMS, CITIES, SOURCES, SPECIALIZATIONS } from "@/lib/constants/contants";
import Button from "@/shared/ui/atoms/Button";
import FilterSwitch from "../organisms/FilterSwitch";

export default function FiltersVacancies () {
  return (
    <div className="flex flex-wrap justify-between gap-4 mb-[25px] pb-2 md:pb-0 w-full">
      <Button className="px-[15px] py-3 text-nowrap bg-[image:var(--gradient-primary-300)] rounded-xl">
        Добавить вакансию
      </Button>
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
        <FilterSwitch text="Удаленно" paramKey="remote" defaultLabel="false"/>
        <FilterSwitch text="Стажировка" paramKey="intership" defaultLabel="false"/>
      </div>
    </div>
  )
}