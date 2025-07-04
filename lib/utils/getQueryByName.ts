import { FilterType } from "@/types/constants";
import { CITIES, GRADES, SOURCES, SPECIALIZATIONS, STACKS } from "../constants/contants";

export function getQueryByName (paramKey: string, value: string, defaultLabel: string): string {
  let filterArr: FilterType[] = [];

  switch (paramKey) {
    case 'speciality':
      filterArr = SPECIALIZATIONS;
      break;
    
    case 'location':
      filterArr = CITIES;
      break;

    case 'source':
      filterArr = SOURCES;
      break;

    case 'stack':
      filterArr = STACKS;
      break;

    case 'position':
      filterArr = GRADES;
      break;
  }

  const elem = filterArr.find((item) => item.name === value);
  return elem ? elem.query : defaultLabel;
}