import { PageProps } from "@/.next/types/app/page";
import VacancyPage from "./VacancyPage";

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <VacancyPage id={Number(id)} />;
}
