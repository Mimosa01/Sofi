import { ALL_PATHS } from "@/lib/constants/contants";
import SidebarCardWrapper from "@/shared/ui/atoms/SidebarCardWrapper.tsx";
import Link from "next/link";
import Text from "@/shared/ui/atoms/Text";
import ArrowAdsIcon from "@/shared/ui/svg/ArrowAdsIcon";
import { QuestionType } from "@/types/constants";
import { retryFetch } from "@/lib/fetch/retryFetch";
import { fetcher } from "@/lib/fetch/fetcher";
import CardQuestionForSidebar from "./CardQuestionForSidebar";

type Props = {
  id: number;
}

export default async function NextQuestion ({ id }: Props) {
  try {
    const data: QuestionType = await retryFetch(() =>
      fetcher(`${ALL_PATHS.QUESTIONS}/${id}`, undefined, { revalidate: 60 })
    );

    return (
      <SidebarCardWrapper>
        <Link href={`${ALL_PATHS.QUESTIONS}/${id}`} className="flex justify-between items-center mb-7.5 text-neutral-800 ">
          <Text className="text-neutral-600 text-lg">Следующий вопрос</Text>
          <ArrowAdsIcon className="rotate-45"/>
        </Link>
        <CardQuestionForSidebar item={data} />
      </SidebarCardWrapper>
    )
  } catch (err) {
    console.error("Failed to load vacancy data after retries:", err);
    return null;
  }
}