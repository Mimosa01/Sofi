'use client';

import useStore from "@/lib/store/srecializationStore";
import { SPECIALIZATION_BUTTONS } from "@/lib/constants/contants";
import SpecializationList from "@/features/specializations/moleculs/SpecializationList";

type Props = {
  fontSize: 'text-lg' | 'text-[22px]';
};

export default function Specializations({ fontSize }: Props) {
  const { selectedSpec, setSpec } = useStore((state) => state);
  const fontSizeClass = fontSize === 'text-lg' ? 'md:text-lg px-3' : 'md:text-[22px] px-[15px]';

  return (
    <SpecializationList
      items={SPECIALIZATION_BUTTONS}
      selected={selectedSpec}
      onSelect={setSpec}
      fontSizeClass={fontSizeClass}
    />
  );
}
