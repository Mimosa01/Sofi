import { VacancyType } from "@/types/constants"
import CardVacancy from "../organisms/CardVacancy";
import AdvertisingCard from "@/components/AdvertisingCard.tsx/widgets/AdvertisingCard";
import { Fragment } from "react";

type Props = {
  items: VacancyType[];
}

export default function VacanciesList ({ items }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 auto-rows-[204px] mb-5">
      {items.map((item, index) => (
        <Fragment key={item.id}>
          {index === 3 && <AdvertisingCard type="simple" />}
          <CardVacancy item={item} />
        </Fragment>
      ))}
    </div>
  )
}