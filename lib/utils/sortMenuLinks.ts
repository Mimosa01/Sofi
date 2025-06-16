import { MENU_LINKS } from "../constants/contants";

export function sortMenuLinks(list: typeof MENU_LINKS) {
  return [
    ...list.filter(item => item.id % 2 !== 0),
    ...list.filter(item => item.id % 2 === 0),
  ];
}