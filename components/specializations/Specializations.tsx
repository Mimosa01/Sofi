'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { SPECIALIZATIONS } from "@/lib/constants/contants";
import SpecializationList from './moleculs/SpecializationList';
import { getNameByQuery } from '@/lib/utils/getNameByQuery';

type Props = {
  fontSize: 'text-lg' | 'text-[22px]';
};

export default function Specializations({ fontSize }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSpec = searchParams.get('speciality') || '';
  const fontSizeClass = fontSize === 'text-lg' ? 'md:text-lg px-3' : 'md:text-[22px] px-[15px]';

  const setSpec = (spec: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('speciality', spec);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <SpecializationList
      items={SPECIALIZATIONS}
      selected={getNameByQuery('speciality', selectedSpec, '')}
      onSelect={setSpec}
      fontSizeClass={fontSizeClass}
    />
  );
}
