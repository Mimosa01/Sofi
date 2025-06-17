import { getNameByQuery } from "@/lib/utils/getNameByQuery";
import Button from "@/shared/ui/atoms/Button";
import CheckMarkIcon from "@/shared/ui/svg/CheckMarkIcon";
import { FilterType } from "@/types/constants";
import { useSearchParams } from "next/navigation";

type Props = {
  items: FilterType[];
  paramKey: string;
  defaultLabel: string;
  onSelect: (value: string) => void;
};

export default function FilterMenu({ items, paramKey, defaultLabel, onSelect }: Props) {
  const searchParams = useSearchParams();
  const label = searchParams.get(paramKey) || defaultLabel;
  return (
    <ul className="flex flex-col w-full">
      {items.map((item) => (
        <li key={item.id}>
          <Button 
            className="
              px-4 py-2 w-full font-normal text-lg leading-5.5 hover:bg-neutral-200
              transition-all duration-300 justify-between
            "
            onClick={() => onSelect(item.name)}
          >
            {item.name}
            { getNameByQuery(paramKey, label, defaultLabel) === item.name && <CheckMarkIcon />}
          </Button>
        </li>
      ))}
    </ul>
  );
}
