import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getNameByQuery } from "@/lib/utils/getNameByQuery";
import CheckMarkIcon from "@/shared/ui/svg/CheckMarkIcon";
import { FilterType } from "@/types/constants";
import { getQueryByName } from "@/lib/utils/getQueryByName";

type Props = {
  items: FilterType[];
  paramKey: string;
  defaultLabel: string;
};

export default function FilterMenu({ items, paramKey, defaultLabel }: Props) {
  const searchParams = useSearchParams();
  const current = searchParams.get(paramKey) || defaultLabel;
  const clearParams = new URLSearchParams(searchParams.toString());
  clearParams.delete(paramKey);

  return (
    <ul className="flex flex-col w-full">
      <li key="reset">
        <Link
          href={`?${clearParams.toString()}`}
          scroll={false}
          className={`
            flex justify-between w-full px-4 py-2 text-lg leading-5.5
            hover:bg-neutral-200 text-neutral-500 transition-all duration-300
          `}
        >
          Сбросить
        </Link>
      </li>
      {items.map((item) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set(paramKey, getQueryByName(paramKey, item.name, defaultLabel));

        return (
          <li key={item.id}>
            <Link
              href={`?${newParams.toString()}`}
              scroll={false}
              className={`
                flex justify-between w-full px-4 py-2 text-lg leading-5.5
                hover:bg-neutral-200 transition-all duration-300
              `}
            >
              {item.name}
              {getNameByQuery(paramKey, current, defaultLabel) === item.name && (
                <CheckMarkIcon />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
