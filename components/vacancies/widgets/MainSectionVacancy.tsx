import { ALL_PATHS } from "@/lib/constants/contants";
import { fetcher } from "@/lib/fetch/fetcher";
import { formatDate } from "@/lib/utils/formateDate";
import Heading from "@/shared/ui/atoms/Heading";
import Text from "@/shared/ui/atoms/Text";
import { VacancyType } from "@/types/constants";
import TagCard from "../molecules/TagCard";

type Props = {
  id: number;
  className?: string;
}

export default async function MainSectionVacancy ({ className, id }: Props) {
  try {
    const data: VacancyType = await fetcher(`${ALL_PATHS.VACANCIES}/${id}`, undefined, {
      revalidate: 60
    });
    return (
      <main className={`${className} flex flex-col`}>
        <div className="mb-auto">
          <Text className="text-neutral-600 text-lg font-normal leading-5.5 mb-2.5">{`Опубликовано ${formatDate(data.date_publication)}`}</Text>
          <Heading level={2} className={`mb-7.5 text-neutral-800 text-[26px] font-semibold leading-7.5 line-clamp-3`}>{ data.title }</Heading>
          <div className="mb-5">
            <TagCard internship={data.internship} remote={data.remote} salary={data.salary}/>
          </div>
          <hr className="mb-7.5 border-neutral-200"/>
          <Text className="text-neutral-800 text-lg leading-6">
            {data.description}
          </Text>
        </div>
      </main>
    )
  } catch (err) {
    console.error("Failed to load vacancy data after retries:", err);
    return null;
  }
}