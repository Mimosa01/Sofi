import { ResponceType, SearchParamsType, VacancyType } from "@/types/constants"
import CardVacancy from "../organisms/CardVacancy";
import AdvertisingCard from "@/components/advertisingCard.tsx/widgets/AdvertisingCard";
import { Fragment, Suspense } from "react";
import { ALL_PATHS } from "@/lib/constants/contants";
import { getQueryPath } from "@/lib/utils/getQueryPath";
import { toPaginated } from "@/lib/utils/toPaginated";
import Pagination from "@/components/pagination/widgets/Pagination";
import ProtectedContent from "../../../shared/ui/organisms/ProtectedContent";
import { fetcher } from "@/lib/fetch/fetcher";

const LIMIT = Number(process.env.NEXT_PUBLIC_API_LIMIT!);

export default async function VacanciesList ({ searchParams }: SearchParamsType) {
  const params = await searchParams;
  const pageRaw = params.page;

  const queryPath = getQueryPath(params);
  const paginatedPath = toPaginated(Number(pageRaw) || 1, LIMIT)

  const path = queryPath ? `${ALL_PATHS.VACANCIES}${queryPath}&${paginatedPath}` : `${ALL_PATHS.VACANCIES}?${paginatedPath}`

  const data: ResponceType<VacancyType> = await fetcher(path, undefined, {
    revalidate: 60,
  });

  const totalPages = Math.ceil(data.total / LIMIT);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows md:auto-rows-[204px] mb-5">
        {data.items.map((item, index) => (
          <Fragment key={item.id}>
            {index === 3 && <AdvertisingCard type="simple" />}
            <CardVacancy item={item} />
          </Fragment>
        ))}
      </div>
      {
        totalPages > 1 &&
        <Suspense>
          <Pagination totalPages={totalPages} />
        </Suspense>
      }
      <ProtectedContent type="vacancy" />
    </div>
  )
}