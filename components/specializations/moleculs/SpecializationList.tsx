import { FilterType } from "@/types/constants";
import SpecializationButton from "../atoms/SpecializationButton";

type Props = {
  items: FilterType[];
  selected: string;
  onSelect: (name: string) => void;
  fontSizeClass: string;
};

export default function SpecializationList({ items, selected, onSelect, fontSizeClass }: Props) {
  return (
    <ul className="flex flex-wrap md:flex-nowrap gap-2.5 mb-5 justify-center">
      {items.map((item) => (
        <li key={item.id}>
          <SpecializationButton
            name={item.name}
            isSelected={selected === item.name}
            onClick={() => onSelect(item.query)}
            fontSizeClass={fontSizeClass}
          />
        </li>
      ))}
    </ul>
  );
}
