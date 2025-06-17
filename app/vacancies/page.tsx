import VacanciesPage from "./VacanciesPage";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const specialityRaw = params.speciality;
  const speciality = Array.isArray(specialityRaw) ? specialityRaw[0] : specialityRaw ?? '';

  console.log(speciality);

  return (<VacanciesPage />);
}
