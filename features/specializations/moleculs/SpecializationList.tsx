import SpecializationButton from "../atoms/SpecializationButton";

type Props = {
  items: string[];
  selected: string;
  onSelect: (name: string) => void;
  fontSizeClass: string;
};

export default function SpecializationList({ items, selected, onSelect, fontSizeClass }: Props) {
  return (
    <ul className="flex flex-wrap md:flex-nowrap gap-2.5 mb-5 justify-center">
      {items.map((name) => (
        <li key={name}>
          <SpecializationButton
            name={name}
            isSelected={selected === name}
            onClick={() => onSelect(name)}
            fontSizeClass={fontSizeClass}
          />
        </li>
      ))}
    </ul>
  );
}
