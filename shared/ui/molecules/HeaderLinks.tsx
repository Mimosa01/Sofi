import { MENU_LINKS } from "@/lib/constants/contants";
import { sortMenuLinks } from "@/lib/utils/sortMenuLinks";
import IconTextLink from "../atoms/IconTextLink";

export default function HeaderLinks () {
  return (
    <ul className='gap-x-20 space-y-[15px] pt-2.5 md:columns-2'>
      {sortMenuLinks(MENU_LINKS).map((link) => (
        <li key={link.id}>
          <IconTextLink name={link.name} icon={link.icon} href={link.href}/>
        </li>
      ))}
    </ul>
  )
}