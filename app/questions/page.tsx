import QuestionsPage from "./QuestionsPage";
import { SPECIALITY_TAGS_MAP, DEFAULT_FILTER_TAGS } from "@/lib/constants/contants";
import { SearchParamsType } from "@/types/constants";

export default async function Page({ searchParams }: SearchParamsType) {
  const params = await searchParams;

  const specialityRaw = params.speciality;
  const speciality = Array.isArray(specialityRaw) ? specialityRaw[0] : specialityRaw ?? '';

  const tags = speciality && SPECIALITY_TAGS_MAP[speciality]
    ? [...SPECIALITY_TAGS_MAP[speciality], ...DEFAULT_FILTER_TAGS]
    : DEFAULT_FILTER_TAGS;

  return (
    <QuestionsPage 
      speciality={specialityRaw as string} 
      seoTagsList={tags} 
      searchParams={searchParams}
    />
  )
}