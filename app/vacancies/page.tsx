import { SPECIALITY_TAGS_MAP, DEFAULT_FILTER_TAGS, ALL_PATHS } from "@/lib/constants/contants";
import VacanciesPage from "./VacanciesPage";
import { fetcher } from "@/lib/fetch/fetcher";
import { getQueryPath } from "@/lib/utils/getQueryPath";
import { ResponceType, SearchParamsType, VacancyType } from "@/types/constants";
import { toPaginated } from "@/lib/utils/toPaginated";

const LIMIT = Number(process.env.NEXT_PUBLIC_API_LIMIT!);

export default async function Page({ searchParams }: SearchParamsType) {
  const params = await searchParams;

  const specialityRaw = params.speciality;
  const pageRaw = params.page;

  const speciality = Array.isArray(specialityRaw) ? specialityRaw[0] : specialityRaw ?? '';
  const queryPath = getQueryPath(params);
  const paginatedPath = toPaginated(Number(pageRaw) || 1, LIMIT)

  const tags = speciality && SPECIALITY_TAGS_MAP[speciality]
    ? [...SPECIALITY_TAGS_MAP[speciality], ...DEFAULT_FILTER_TAGS]
    : DEFAULT_FILTER_TAGS;

  const path = queryPath ? `${ALL_PATHS.VACANCIES}${queryPath}&${paginatedPath}` : `${ALL_PATHS.VACANCIES}?${paginatedPath}`

  const data: ResponceType<VacancyType> = await fetcher(6, path, undefined, {
    revalidate: 60,
  });

  const totalPages = Math.ceil(data.total / LIMIT);

  return (
    <VacanciesPage
      seoTagsList={tags}
      data={data.items}
      speciality={specialityRaw as string}
      totalPages={totalPages}
    />
  );
}
