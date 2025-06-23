import { ALL_PATHS } from "@/lib/constants/contants";
import { fetcher } from "@/lib/fetch/fetcher";
import Heading from "@/shared/ui/atoms/Heading";
import SafeHtmlRenderer from "@/shared/ui/atoms/SafeHtmlRender";
import Text from "@/shared/ui/atoms/Text";
import { QuestionType } from "@/types/constants";

type Props = {
  id: number;
  className?: string;
}

export default async function MainSectionQuestion ({ className, id }: Props) {
  try {
    const data: QuestionType = await fetcher(`${ALL_PATHS.QUESTIONS}/${id}`, undefined, {
      revalidate: 60
    });
    return (
      <main className={`${className} flex flex-col overflow-x-auto`}>
        {/* Временно */}
        <div className="flex items-center mb-2.5">
          <Text className="text-neutral-600 text-lg font-normal leading-5.5 after:content-['•'] after:mx-2.5 after:text-neutral-400">Avito.tech</Text>
          <Text className="text-neutral-600 text-lg font-normal leading-5.5 after:content-['•'] after:mx-2.5 after:text-neutral-400">27.01.2025</Text>
          <Text className="text-neutral-600 text-lg font-normal leading-5.5">Java</Text>
        </div>
        <Heading level={2} className={`${data.answer ? 'mb-7.5' : 'mb-auto'} text-neutral-800 text-[26px] font-semibold leading-7.5 line-clamp-3`}>{ data.question }</Heading>
        {data.id === 1 
          ? <SafeHtmlRenderer html={data.question}/>
          : (data.answer && <Text className="text-neutral-800 text-lg">{ data.answer }</Text>)
        }
      </main>
    )
  } catch (err) {
    console.error("Failed to load vacancy data after retries:", err);
    return null;
  }
}