import { QuestionType } from "@/types/constants"
import CardQuestion from "../organisms/CardQuestion";
import { Fragment } from "react";
import AdvertisingCard from "@/components/AdvertisingCard.tsx/widgets/AdvertisingCard";

type Props = {
  items: QuestionType[];
}

export default function QuestionList ({ items }: Props) {
  return (
    <div className="flex flex-col gap-2.5 mb-5">
      {items.map((item, index) => (
        <Fragment key={item.id}>
          {index === 3 && <AdvertisingCard type={'mini'}/>}
          <CardQuestion item={item} />
        </Fragment>
      ))}
    </div>
  )
}