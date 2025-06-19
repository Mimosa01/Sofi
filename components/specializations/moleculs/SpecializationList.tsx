import { FilterType } from "@/types/constants";
import SpecializationButton from "../atoms/SpecializationButton";

type Props = {
  items: FilterType[];
  selected: string;
  onSelect: (name: string) => void;
  fontSizeClass: string;
  className?: string
};

export default function SpecializationList({ items, selected, onSelect, fontSizeClass, className }: Props) {
  return (
    <ul className={`flex gap-2.5 mb-5 ${className}`}>
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
