import { ALL_PATHS } from "@/lib/constants/contants";
import { capitalizeWords } from "@/lib/utils/capitalizeWords";
import Heading from "@/shared/ui/atoms/Heading";
import Text from "@/shared/ui/atoms/Text";
import { QuestionType } from "@/types/constants";
import Link from "next/link";

type Props = {
  item: QuestionType;
}

export default function CardQuestion ({ item }: Props) {
  return (
    <Link href={`${ALL_PATHS.QUESTIONS}/${item.id}`}>
      <article className={`p-[15px] bg-neutral-100 rounded-lg group`}> 
        <Heading 
          level={3} 
          className="mb-1 text-neutral-800 text-lg font-semibold leading-6 line-clamp-2 group-hover:text-primary-500 transition-colors duration-300"
        >
          { item.question }
        </Heading>
        <div className="flex items-center">
          <Text className="text-neutral-600 text-lg font-normal leading-5.5 after:content-['•'] after:mx-2.5 after:text-neutral-400">
            {/* Временно пока не скажут как лучше */}
            { capitalizeWords(item.stack.split(' ')[0]) } 
          </Text>
          <Text className="text-neutral-600 text-lg font-normal leading-5.5">{`${item.freq} упоминаний`}</Text>
        </div>
      </article>
    </Link>
  )
}