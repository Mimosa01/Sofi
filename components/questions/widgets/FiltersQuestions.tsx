import DropdownFilter from "@/components/dropdown/widgets/DropdownFilter";
import { ALL_PARAMS, GRADES, SPECIALIZATIONS, STACKS } from "@/lib/constants/contants";

export default function FiltersQuestions () {
  return (
    <div className="flex flex-wrap gap-2.5 mb-[25px] pb-2 md:pb-0">
      <DropdownFilter 
        items={SPECIALIZATIONS}
        paramKey={ALL_PARAMS.SPECIALITY}
        defaultLabel="Специализация"
      />
      <DropdownFilter 
        items={STACKS}
        paramKey={ALL_PARAMS.STACK}
        defaultLabel="Стек"
      />
      <DropdownFilter 
        items={GRADES}
        paramKey={ALL_PARAMS.GRADE}
        defaultLabel="Грейд"
      />
    </div>
  )
}