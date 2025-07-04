import { wixMadeforText } from "@/app/fonts";

type Props = {
  name: string;
  isSelected: boolean;
  onClick: () => void;
  fontSizeClass: string;
};

export default function SpecializationButton({ name, isSelected, fontSizeClass, onClick }: Props) {
  return (
    <button
      className={`
        ${fontSizeClass} ${wixMadeforText.variable} py-1.5 rounded-xl whitespace-nowrap -tracking-[0.5px] 
        leading-5.5 md:leading-6.5 text-lg cursor-pointer transition-all duration-300
        ${
          isSelected
            ? 'text-white bg-linear-to-r from-[var(--color-primary-400)] to-[var(--color-secondary-400)]'
            : 'bg-neutral-100 hover:bg-neutral-200'
        }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
