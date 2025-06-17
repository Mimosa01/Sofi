'use client'

import { MENU_LINKS } from "@/lib/constants/contants";
import { sortMenuLinks } from "@/lib/utils/sortMenuLinks";
import IconTextLink from "../../../shared/ui/atoms/IconTextLink";
import { memo } from "react";
import { useSearchParams } from "next/navigation";

function HeaderLinksComponent () {
  const searchParams = useSearchParams();
  const selectedSpec = searchParams.get('speciality') || 'Специализация';
  
  return (
    <ul className='gap-x-20 space-y-[15px] pt-2.5 md:columns-2'>
      {sortMenuLinks(MENU_LINKS).map((link) => (
        <li key={link.id}>
          <IconTextLink name={link.name} icon={link.icon} href={`${link.href}?speciality=${selectedSpec}`}/>
        </li>
      ))}
    </ul>
  )
}

const HeaderLinks = memo(HeaderLinksComponent);
export default HeaderLinks;