'use client'

import Specializations from "@/features/specializations/Specializations";
import Dropdown from "../organisms/Dropdown";
import useStore from "@/lib/store/srecializationStore";
import HeaderLinks from "@/shared/ui/molecules/HeaderLinks";

export default function DropdownSpecializations () {
  const selectedSpec = useStore((state) => state.selectedSpec);
  return (
    <Dropdown label={selectedSpec}>
      <Specializations fontSize={'text-lg'}/>
      <HeaderLinks />
    </Dropdown>
  )
}