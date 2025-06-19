import QuestionsPage from "./QuestionsPage";
import { SPECIALITY_TAGS_MAP, DEFAULT_FILTER_TAGS } from "@/lib/constants/contants";
import { fetcher } from "@/lib/fetch/fetcher";
import { getQueryPath } from "@/lib/utils/getQueryPath";
import { QuestionType, SearchParamsType } from "@/types/constants";

export default async function Page({ searchParams }: SearchParamsType) {
  const params = await searchParams;
  const specialityRaw = params.speciality;
  const speciality = Array.isArray(specialityRaw) ? specialityRaw[0] : specialityRaw ?? '';
  const queryPath = getQueryPath(params);

  const tags = speciality && SPECIALITY_TAGS_MAP[speciality]
    ? [...SPECIALITY_TAGS_MAP[speciality], ...DEFAULT_FILTER_TAGS]
    : DEFAULT_FILTER_TAGS;

  const data: QuestionType[] = await fetcher(`/vacancies${queryPath}`, undefined, {
    revalidate: 60,
  });

  return (<QuestionsPage speciality={specialityRaw as string} seoTagsList={tags} data={data}/>)
}