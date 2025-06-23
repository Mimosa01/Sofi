import { ALL_PATHS } from "@/lib/constants/contants";
import { fetcher } from "@/lib/fetch/fetcher";
import { retryFetch } from "@/lib/fetch/retryFetch";
import Text from "@/shared/ui/atoms/Text";
import { VacancyType } from "@/types/constants";
import Link from "next/link";

type Props = {
  id: number;
};

export default async function SimilarInfo({ id }: Props) {
  try {
    const data: VacancyType = await retryFetch(() =>
      fetcher(`${ALL_PATHS.VACANCIES}/${id}`, undefined, { revalidate: 60 })
    );

    return (
      <div className="py-[15px]">
        <Link
          href={`${ALL_PATHS.VACANCIES}/${id}`}
          className="mb-2 text-neutral-800 text-base font-medium leading-4.5 line-clamp-5"
        >
          {data.title}
        </Link>
        <Text className="text-neutral-500 text-base leading-4.5">
          {data.company_name}
        </Text>
      </div>
    );
  } catch (err) {
    console.error("Failed to load vacancy data after retries:", err);
    return null;
  }
}
