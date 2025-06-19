'use client'

import { MENU_LINKS } from "@/lib/constants/contants";
import { sortMenuLinks } from "@/lib/utils/sortMenuLinks";
import IconTextLink from "../../../shared/ui/atoms/IconTextLink";
import { memo } from "react";
import { useSearchParams } from "next/navigation";

function HeaderLinksComponent () {
  const searchParams = useSearchParams();
  const selectedSpec = searchParams.get('speciality') || 'Специализация';
  const queryPath = selectedSpec !== 'Специализация' ? '?speciality=' + selectedSpec : '';
  
  return (
    <ul className='gap-x-20 space-y-[15px] pt-2.5 md:columns-2'>
      {sortMenuLinks(MENU_LINKS).map((item) => (
        <li key={item.id}>
          <IconTextLink name={item.name} icon={item.icon} href={`${item.href + queryPath}`}/>
        </li>
      ))}
    </ul>
  )
}

const HeaderLinks = memo(HeaderLinksComponent);
export default HeaderLinks;