import DropdownFilter from "@/components/dropdown/widgets/DropdownFilter";
import { ALL_PARAMS, CITIES, SOURCES, SPECIALIZATIONS } from "@/lib/constants/contants";
import Button from "@/shared/ui/atoms/Button";
import ButtonSwitch from "@/shared/ui/molecules/ButtonSwitch";

export default function FiltersVacancies () {
  return (
    <div className="flex gap-5 mb-[25px]">
      <Button className="px-[15px] py-3 bg-[image:var(--gradient-primary-300)] rounded-xl flex items-center justify-between gap-4">
        Добавить вакансию
      </Button>
      <div className="flex gap-2.5">
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
        <ButtonSwitch text="Удаленно" />
        <ButtonSwitch text="Стажировка" />
      </div>
    </div>
  )
}