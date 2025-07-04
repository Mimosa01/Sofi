'use client'

import Dropdown from "../atoms/Dropdown";
import HeaderLinks from "@/components/dropdown/molecules/HeaderLinks";
import { useSearchParams } from "next/navigation";
import Specializations from "@/components/specializations/Specializations";
import { getNameByQuery } from "@/lib/utils/getNameByQuery";
import DropdownTrigger from "../molecules/DropdownTrigger";
import { useDropdown } from "../hooks/useDropdown";
import DropdownSpecialityMenu from "../atoms/DropdownSpecialityMenu";
import MenuIcon from "@/shared/ui/svg/MenuIcon";

export default function DropdownSpecializations() {
  const { isOpen, dropdownRef, toggle } = useDropdown();
  const searchParams = useSearchParams();
  const selectedSpec = searchParams.get('speciality') || 'Специализация';

  return (
    <Dropdown dropdownRef={dropdownRef}>
      <DropdownTrigger 
        label={getNameByQuery('speciality', selectedSpec, 'Специализация')} 
        isOpen={isOpen} 
        onClick={toggle} 
        icon={<MenuIcon />}
        className="hover:text-primary-500 transition-colors duration-300"
      />
      <DropdownSpecialityMenu isOpen={isOpen} toggle={toggle}>
        <Specializations fontSize={'text-lg'} className="flex-nowrap py-2 md:py-0 overflow-auto"/>
        <HeaderLinks />
      </DropdownSpecialityMenu>
    </Dropdown>
  )
}
