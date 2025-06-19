import { SPECIALITY_TAGS_MAP, DEFAULT_FILTER_TAGS, ALL_PATHS } from "@/lib/constants/contants";
import VacanciesPage from "./VacanciesPage";
import { fetcher } from "@/lib/fetch/fetcher";
import { getQueryPath } from "@/lib/utils/getQueryPath";
import { ResponceType, SearchParamsType, VacancyType } from "@/types/constants";

export default async function Page({ searchParams }: SearchParamsType) {
  const params = await searchParams;
  const specialityRaw = params.speciality;
  const speciality = Array.isArray(specialityRaw) ? specialityRaw[0] : specialityRaw ?? '';
  const queryPath = getQueryPath(params);
  
  const tags = speciality && SPECIALITY_TAGS_MAP[speciality]
    ? [...SPECIALITY_TAGS_MAP[speciality], ...DEFAULT_FILTER_TAGS]
    : DEFAULT_FILTER_TAGS;

  const data: ResponceType<VacancyType> = await fetcher(`${ALL_PATHS.VACANCIES}${queryPath}`, undefined, {
    revalidate: 60,
  });
  
  return (<VacanciesPage seoTagsList={tags} data={data.items} speciality={specialityRaw as string}/>);
}
