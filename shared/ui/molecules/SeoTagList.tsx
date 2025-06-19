import { FilterType } from "@/types/constants"
import SeoTag from "../atoms/SeoTag";

type Props = {
  basePath: string;
  tagsList: FilterType[];
}

export default function SeoTagList ({ basePath, tagsList }: Props) {
  return (
    <ul className="flex flex-wrap justify-center gap-2">
      {tagsList.map((item) => (
        <li key={item.id}>
          <SeoTag href={`${basePath}?${item.query}`}>
            { item.name }
          </SeoTag>
        </li>
      ))}
    </ul>
  )
}