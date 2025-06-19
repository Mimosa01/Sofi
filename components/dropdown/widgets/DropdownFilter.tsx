'use client'

import { useSearchParams } from "next/navigation";
import FilterMenu from "../molecules/FilterMenu";
import Dropdown from "../atoms/Dropdown";
import { FilterType } from "@/types/constants";
import { useDropdown } from "../hooks/useDropdown";
import DropdownTrigger from "../molecules/DropdownTrigger";
import DropdownSimpleMenu from "../atoms/DropdownSimpleMenu";
import { getNameByQuery } from "@/lib/utils/getNameByQuery";


type Props = {
  items: FilterType[];
  paramKey: string;
  defaultLabel: string;
};

export default function DropdownFilter ({ items, paramKey, defaultLabel }: Props) {
  const { isOpen, dropdownRef, toggle } = useDropdown();
  const searchParams = useSearchParams();
  const label = searchParams.get(paramKey) || defaultLabel;

  return (
    <Dropdown dropdownRef={dropdownRef}>
      <DropdownTrigger 
        label={getNameByQuery(paramKey, label, defaultLabel)} 
        isOpen={isOpen} 
        onClick={toggle} 
        className="px-[15px] py-3 bg-neutral-100 rounded-xl flex items-center justify-between gap-4"
      />
      <DropdownSimpleMenu isOpen={isOpen}>
        <FilterMenu items={items} paramKey={paramKey} defaultLabel={defaultLabel} />
      </DropdownSimpleMenu>
    </Dropdown>
  );
}
