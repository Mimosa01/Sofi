import Heading from "@/shared/ui/atoms/Heading";
import Text from "@/shared/ui/atoms/Text";
import { VacancyType } from "@/types/constants";
import TagCard from "../molecules/TagCard";
import CompanyInfo from "../molecules/CompanyInfo";
import { formatDate } from "@/lib/utils/formateDate";

type Props = {
  item: VacancyType;
}

export default function CardVacancy ({ item }: Props) {
  return (
    <article className="flex flex-col gap-7.5 justify-between p-[15px] font-wix-display bg-neutral-100 rounded-lg group">
      <div>
        <a href={item.url}>
          <Heading level={3} className="mb-2.5 text-neutral-800 font-semibold text-lg lg:text-[22px] leading-6.5 line-clamp-2 group-hover:text-primary-500 transition-colors duration-100">{ item.title }</Heading>
        </a>
        <TagCard internship={item.internship} remote={item.remote} salary={item.salary} />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-end">
        <CompanyInfo image={item.image} companyName={item.company_name} location={item.location}/>
        <Text className="text-neutral-500 text-base">{ formatDate(item.date_publication) }</Text>
      </div>
    </article>
  )
}