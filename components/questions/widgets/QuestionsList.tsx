import { QuestionType, ResponceType, SearchParamsType } from "@/types/constants"
import CardQuestion from "../organisms/CardQuestion";
import { Fragment, Suspense } from "react";
import AdvertisingCard from "@/components/advertisingCard.tsx/widgets/AdvertisingCard";
import { ALL_PATHS } from "@/lib/constants/contants";
import { fetcher } from "@/lib/fetch/fetcher";
import { getQueryPath } from "@/lib/utils/getQueryPath";
import Pagination from "@/components/pagination/widgets/Pagination";
import ProtectedContent from "@/shared/ui/organisms/ProtectedContent";

const LIMIT = Number(process.env.NEXT_PUBLIC_API_LIMIT!);

export default async function QuestionList ({ searchParams }: SearchParamsType) {
  const params = await searchParams;
  const queryPath = getQueryPath(params);

  const data: ResponceType<QuestionType> = await fetcher(`${ALL_PATHS.QUESTIONS}${queryPath}`, undefined, {
    revalidate: 60,
  });

  const totalPages = Math.ceil(data.total / LIMIT);

  return (
    <div className="relative">
      <div className="flex flex-col gap-2.5 mb-5">
        {data.items.map((item, index) => (
          <Fragment key={item.id}>
            {index === 3 && <AdvertisingCard type={'mini'}/>}
            <CardQuestion item={item} />
          </Fragment>
        ))}
      </div>
      {
        totalPages > 1 &&
        <Suspense>
          <Pagination totalPages={totalPages} />
        </Suspense>
      }
      <ProtectedContent type="question" />
    </div>
  )
}